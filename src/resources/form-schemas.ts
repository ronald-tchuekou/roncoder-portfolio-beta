import { z } from 'zod'

/** Contract types offered to recruiters. Labels live in `lang/contact/*.json`. */
export const CONTRACT_TYPES = ['permanent', 'freelance', 'long_term', 'other'] as const

/** Working modes offered to recruiters. Labels live in `lang/contact/*.json`. */
export const WORK_MODES = ['remote', 'hybrid', 'onsite'] as const

export type ContractType = (typeof CONTRACT_TYPES)[number]
export type WorkMode = (typeof WORK_MODES)[number]

/** Maximum accepted size of the JSON body of a contact request, in bytes. */
export const CONTACT_BODY_MAX_BYTES = 10 * 1024

/** Collapses every line break of a short field into a single space. */
const collapseNewlines = (value: string) =>
   value
      .replace(/[\r\n\t]+/g, ' ')
      .replace(/\s{2,}/g, ' ')
      .trim()

/** A short single line field: trimmed, capped, line breaks removed. */
const singleLine = (max: number) => z.string().max(max).transform(collapseNewlines)

/** Rejects anything that is not an absolute `https` URL, so `javascript:` links never pass. */
const isHttpsUrl = (value: string) => {
   try {
      return new URL(value).protocol === 'https:'
   } catch {
      return false
   }
}

export const contactFormSchema = z.object({
   firstName: singleLine(80).pipe(z.string().min(1, 'set_your_first_name')),
   lastName: singleLine(80).pipe(z.string().min(1, 'set_your_last_name')),
   email: singleLine(160).pipe(z.string().min(1, 'set_a_valid_email').email('set_a_valid_email')),
   company: singleLine(120).pipe(z.string().min(1, 'set_your_company')),
   jobTitle: singleLine(120).pipe(z.string().min(1, 'set_the_job_title')),
   contractType: z
      .string()
      .max(40)
      .refine((value) => (CONTRACT_TYPES as readonly string[]).includes(value), 'select_a_contract_type'),
   workMode: z
      .string()
      .max(40)
      .refine((value) => (WORK_MODES as readonly string[]).includes(value), 'select_a_work_mode'),
   offerUrl: singleLine(400)
      .pipe(z.string().refine((value) => value === '' || isHttpsUrl(value), 'set_a_valid_offer_url'))
      .optional(),
   message: z.string().trim().min(1, 'set_a_message').max(2000, 'message_is_too_long'),
   locale: z.enum(['en', 'fr']).optional().default('en'),
   /** Honeypot: hidden in the UI, must stay empty. */
   website: z.string().max(200).optional(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>

export const defaultContactFormValues: ContactFormSchema = {
   firstName: '',
   lastName: '',
   email: '',
   company: '',
   jobTitle: '',
   contractType: '',
   workMode: '',
   offerUrl: '',
   message: '',
   locale: 'en',
   website: '',
}
