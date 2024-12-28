import { LocaleType } from '@src/i18n/routing'
import { SERVICES } from './data/services'

export const isCurrentPath = (currentPath: string, path: string, position?: number) => {
   const index = position || 1

   const currentPathSegment = currentPath.split('/')
   const pathSegment = path.split('/')

   if (currentPathSegment.length <= index || pathSegment.length <= index) {
      if (currentPathSegment.length === pathSegment.length)
         return currentPathSegment[index - 1] === pathSegment[index - 1]
      return false
   }

   return currentPathSegment[index] === pathSegment[index]
}

export const getServiceLabel = (serviceId: string, locale: LocaleType) => {
   const foundService = SERVICES.find((item) => item.key === serviceId)

   return foundService?.title[locale]
}
