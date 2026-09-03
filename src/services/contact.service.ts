import { ContactFormSchema } from '@src/resources/form-schemas'

export class ContactRequestError extends Error {
   constructor(
      public readonly status: number,
      public readonly code?: string,
   ) {
      super(`Contact request failed with status ${status}${code ? ` (${code})` : ''}`)
      this.name = 'ContactRequestError'
   }
}

/** Client-side: posts the form to our own API route. Discord is only reached from the server. */
export const ContactService = {
   async send(request: ContactFormSchema): Promise<void> {
      const res = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(request),
      })

      const payload = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null

      // The success toast is only shown when the API confirms the request with `ok`.
      if (!res.ok || payload?.ok !== true) {
         throw new ContactRequestError(res.status, payload?.error)
      }
   },
}
