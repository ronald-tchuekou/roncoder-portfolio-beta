import { getPathname, LocaleType, routing } from '@src/i18n/routing'
import type { Metadata } from 'next'

/**
 * Canonical + hreflang entries for one page, respecting the `as-needed` locale prefix
 * (English lives at `/x`, French at `/fr/x`). Paths are resolved against metadataBase.
 */
export function localizedAlternates(locale: LocaleType, href: string): NonNullable<Metadata['alternates']> {
   const languages = Object.fromEntries(routing.locales.map((l) => [l, getPathname({ locale: l, href })])) as Record<
      LocaleType,
      string
   >

   return {
      canonical: getPathname({ locale, href }),
      languages: { ...languages, 'x-default': getPathname({ locale: 'fr', href }) },
   }
}
