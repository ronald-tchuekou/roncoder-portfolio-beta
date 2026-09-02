import { z } from 'zod'

export const contactFormSchema = z.object({
   firstName: z.string().trim().min(1, 'set_your_firstName').max(100),
   lastName: z.string().trim().max(100).optional(),
   email: z.string().trim().email('set_a_valid_email').max(200),
   phone: z.string().trim().max(40).optional(),
   service: z.string().min(1, 'select_a_service').max(100),
   message: z.string().trim().min(1, 'set_a_message').max(4000),
   locale: z.enum(['en', 'fr']).optional().default('en'),
   /** Honeypot — hidden in the UI, must stay empty. */
   website: z.string().optional(),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>

export const defaultContactFormValues: ContactFormSchema = {
   firstName: '',
   lastName: '',
   email: '',
   phone: '',
   message: '',
   service: '',
   locale: 'en',
   website: '',
}
