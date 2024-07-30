import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.optional(z.string()),
  service: z.string(),
  message: z.string(),
});

export type ContactFormSchema = z.infer<typeof contactFormSchema>;
