import { LocaleType } from '@src/i18n/routing'
import { SERVICES } from './data/services'

export const isCurrentPath = (currentPath: string, url: string, position?: number) => {
   const path = currentPath.split('/')[position || 1]
   return path === url.split('/')[position || 1]
}

export const getServiceLabel = (serviceId: string, locale: LocaleType) => {
   const foundService = SERVICES.find((item) => item.key === serviceId)

   return foundService?.title[locale]
}
