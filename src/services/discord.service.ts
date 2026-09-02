import 'server-only'

import { LocaleType } from '@src/i18n/routing'
import env from '@src/lib/env/server'
import { ContactFormSchema } from '@src/resources/form-schemas'
import { getServiceLabel } from '@src/resources/util-functions'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.locale('fr')
dayjs.extend(localizedFormat)

const EMPTY = '- - -'

export const DiscordService = {
   /** Server-side only: forwards a contact request to the Discord webhook. Throws when Discord refuses. */
   async notifyContactRequest(request: ContactFormSchema): Promise<void> {
      const description = [
         `${request.firstName} ${request.lastName ?? ''} vous a contacté depuis votre portfolio en ligne pour solliciter un service.`,
         '',
         `**Nom**: ${request.lastName || EMPTY}`,
         `**Prénom**: ${request.firstName}`,
         `**Adresse email**: ${request.email}`,
         `**Téléphone**: ${request.phone || EMPTY}`,
         `**Service**: ${getServiceLabel(request.service, request.locale as LocaleType) || EMPTY}`,
         `**Message**: ${request.message}`,
         '',
         `Créé le ${dayjs().format('lll')}`,
      ].join('\n')

      const res = await fetch(env.DISCORD_WEBHOOK, {
         method: 'POST',
         headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
         body: JSON.stringify({
            username: `${request.firstName} ${request.lastName || EMPTY}`.trim(),
            embeds: [{ title: 'Nouvelle demande de contact', type: 'rich', description }],
         }),
      })

      if (!res.ok) {
         throw new Error(`Discord webhook responded with ${res.status}`)
      }
   },
}
