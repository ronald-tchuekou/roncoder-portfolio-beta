import { ContactFormSchema } from '@src/resources/form-schemas'

export class ContactRequestError extends Error {
   constructor(public readonly status: number) {
      super(`Contact request failed with status ${status}`)
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
      if (!res.ok) throw new ContactRequestError(res.status)
   },
}
