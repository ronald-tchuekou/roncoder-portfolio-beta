import { z } from "zod";

export const contactFormSchema = z.object({
   firstName: z.string().min(1, 'set_your_firstName'),
   lastName: z.string().min(1, 'set_your_lastName'),
   email: z.string().email('set_a_valid_email'),
   phone: z.optional(z.string().min(9, 'set_a_valid_phone')),
   service: z.string().min(1, 'select_a_service'),
   message: z.string().min(1, 'set_a_message'),
   locale: z.string().optional().default('en'),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
