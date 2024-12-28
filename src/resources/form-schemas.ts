import { z } from "zod";

export const contactFormSchema = z.object({
   firstName: z.string().min(1),
   lastName: z.string().min(1),
   email: z.string().email(),
   phone: z.optional(z.string()),
   service: z.string().min(1),
   message: z.string().min(1),
   locale: z.string().optional().default('en'),
})

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
