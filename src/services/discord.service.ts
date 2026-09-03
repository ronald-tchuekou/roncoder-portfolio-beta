import 'server-only'

import env from '@src/lib/env/server'
import { ContactFormSchema } from '@src/resources/form-schemas'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.locale('fr')
dayjs.extend(localizedFormat)

const EMPTY = '- - -'

/** French labels of the contract types, used in the Discord notification. */
const CONTRACT_TYPE_LABELS: Record<string, string> = {
   permanent: 'CDI',
   freelance: 'Freelance',
   long_term: 'Mission longue',
   other: 'Autre',
}

/** French labels of the working modes, used in the Discord notification. */
const WORK_MODE_LABELS: Record<string, string> = {
   remote: 'Full remote',
   hybrid: 'Hybride',
   onsite: 'Sur site',
}

export const DiscordService = {
   /** Server-side only: forwards a contact request to the Discord webhook. Throws when Discord refuses. */
   async notifyContactRequest(request: ContactFormSchema): Promise<void> {
      // The job title and the company come first, so the request can be triaged at a glance.
      const headline = `**${request.jobTitle}** chez **${request.company}**`

      const description = [
         headline,
         `${CONTRACT_TYPE_LABELS[request.contractType] ?? request.contractType} | ${
            WORK_MODE_LABELS[request.workMode] ?? request.workMode
         }`,
         '',
         `**Contact**: ${request.firstName} ${request.lastName}`,
         `**Adresse email**: ${request.email}`,
         `**Lien vers l'offre**: ${request.offerUrl || EMPTY}`,
         `**Langue du formulaire**: ${request.locale}`,
         '',
         `**Message**:`,
         request.message,
         '',
         `Reçu le ${dayjs().format('lll')}`,
      ].join('\n')

      const res = await fetch(env.DISCORD_WEBHOOK, {
         method: 'POST',
         headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
         body: JSON.stringify({
            username: `${request.firstName} ${request.lastName}`.trim(),
            embeds: [
               {
                  title: `${request.jobTitle} | ${request.company}`,
                  type: 'rich',
                  description,
               },
            ],
         }),
      })

      if (!res.ok) {
         throw new Error(`Discord webhook responded with ${res.status}`)
      }
   },
}
