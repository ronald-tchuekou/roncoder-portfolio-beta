import { getRequestConfig } from 'next-intl/server'
import { LocaleType, routing } from './routing'

export default getRequestConfig(async ({ requestLocale }) => {
   // This typically corresponds to the `[locale]` segment
   let locale = (await requestLocale) as LocaleType

   // Ensure that a valid locale is used
   if (!locale || !routing.locales.includes(locale as any)) {
      locale = routing.defaultLocale
   }

   return {
      locale,
      messages: {
         header: (await import(`../../lang/header/${locale}.json`)).default,
         home: (await import(`../../lang/home/${locale}.json`)).default,
         contact: (await import(`../../lang/contact/${locale}.json`)).default,
         projects: (await import(`../../lang/projects/${locale}.json`)).default,
         resume: (await import(`../../lang/resume/${locale}.json`)).default,
         expertises: (await import(`../../lang/expertises/${locale}.json`)).default,
         legal: (await import(`../../lang/legal/${locale}.json`)).default,
         common: (await import(`../../lang/common/${locale}.json`)).default,
      },
   }
})
