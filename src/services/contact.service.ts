import { LocaleType } from '@src/i18n/routing'
import env from '@src/lib/env/client'
import { ContactFormSchema } from '@src/resources/form-schemas'
import { getServiceLabel } from '@src/resources/util-functions'
import dayjs from 'dayjs'
import 'dayjs/locale/fr'
import localizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.locale('fr')
dayjs.extend(localizedFormat)

export const ContactService = {
   async notifyDiscord(request: ContactFormSchema) {
      const description = `
${request.firstName} ${request.lastName} vous a contacté depuis votre portfolio en ligne pour solliciter un service.
\n\n**Nom**: ${request.lastName || '- - -'}
**Prénom**: ${request.firstName}
**Adresse email**: ${request.email}
**Téléphone**: ${request.phone || '- - -'}
**Service**: ${getServiceLabel(request.service, request.locale as LocaleType) || '- - -'}
**Message**: ${request.message}
\n\nCréer le ${dayjs().format('lll')}
`
      try {
         await fetch(`${env.NEXT_PUBLIC_DISCORD_WEBHOOK}`, {
            method: 'POST',
            headers: {
               Accept: 'application/json',
               'Content-Type': 'application/json',
            },
            body: JSON.stringify({
               username: `${request.firstName} ${request.lastName || '- - -'}`.trim(),
               embeds: [
                  {
                     title: 'Nouvelle demande de contact',
                     type: 'rich',
                     description,
                  },
               ],
            }),
         })
         console.log('Discord is notified')
      } catch (error) {
         console.log('Discord event error: ', error)
      }
   },
}
