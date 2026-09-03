import { createNavigation } from 'next-intl/navigation'
import { defineRouting } from 'next-intl/routing'

export type LocaleType = 'en' | 'fr'

export const routing = defineRouting<LocaleType[], 'as-needed'>({
   // A list of all locales that are supported
   locales: ['en', 'fr'],
   defaultLocale: 'en',
   localePrefix: 'as-needed',
})

// Lightweight wrappers around Next.js' navigation APIs that will consider the routing configuration.
export const { Link, redirect, usePathname, useRouter, getPathname, permanentRedirect } = createNavigation(routing)
