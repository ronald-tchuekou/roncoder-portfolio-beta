import { z } from "zod";

export const contactFormSchema = z.object({
   firstName: z.string().min(1, 'set_your_firstName'),
   lastName: z.string().optional(),
   email: z.string().email('set_a_valid_email'),
   phone: z.string().optional(),
   service: z.string().min(1, 'select_a_service'),
   message: z.string().min(1, 'set_a_message'),
   locale: z.string().optional().default('en'),
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
}
