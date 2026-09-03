import { CONTACT_BODY_MAX_BYTES, contactFormSchema } from '@src/resources/form-schemas'
import { DiscordService } from '@src/services/discord.service'

export const runtime = 'nodejs'

// Best-effort rate limit: per warm serverless instance, 5 requests per IP per 10 minutes.
const WINDOW_MS = 10 * 60 * 1000
const MAX_PER_WINDOW = 5
const hits = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
   const now = Date.now()
   const entry = hits.get(ip)
   if (!entry || entry.resetAt < now) {
      hits.set(ip, { count: 1, resetAt: now + WINDOW_MS })
      return false
   }
   entry.count += 1
   return entry.count > MAX_PER_WINDOW
}

export async function POST(req: Request) {
   const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown'
   if (isRateLimited(ip)) {
      return Response.json({ error: 'too_many_requests' }, { status: 429 })
   }

   // Body size limit: trust the announced length when present, then check the real payload.
   const announcedLength = Number(req.headers.get('content-length') ?? '')
   if (Number.isFinite(announcedLength) && announcedLength > CONTACT_BODY_MAX_BYTES) {
      return Response.json({ error: 'payload_too_large' }, { status: 413 })
   }

   let raw: string
   try {
      raw = await req.text()
   } catch {
      return Response.json({ error: 'invalid_body' }, { status: 400 })
   }

   if (new TextEncoder().encode(raw).byteLength > CONTACT_BODY_MAX_BYTES) {
      return Response.json({ error: 'payload_too_large' }, { status: 413 })
   }

   let body: unknown
   try {
      body = JSON.parse(raw)
   } catch {
      return Response.json({ error: 'invalid_json' }, { status: 400 })
   }

   const parsed = contactFormSchema.safeParse(body)
   if (!parsed.success) {
      return Response.json({ error: 'invalid_payload' }, { status: 400 })
   }

   // Honeypot: real users never fill this hidden field. Pretend success so bots stop retrying.
   if (parsed.data.website) {
      return Response.json({ ok: true })
   }

   try {
      await DiscordService.notifyContactRequest(parsed.data)
   } catch (error) {
      console.error('Contact notification failed:', error)
      return Response.json({ error: 'notification_failed' }, { status: 502 })
   }

   return Response.json({ ok: true })
}
