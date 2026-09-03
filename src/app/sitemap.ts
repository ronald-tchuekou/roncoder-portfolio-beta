import { getPathname, LocaleType, routing } from '@src/i18n/routing'
import env from '@src/lib/env/client'
import { EDUCATIONS_LIST } from '@src/resources/data/educations'
import { EXPERIENCES_LIST } from '@src/resources/data/experiences'
import { CONTENT_UPDATED_AT } from '@src/resources/data/metadata'
import { PROJECTS } from '@src/resources/data/projects'
import type { MetadataRoute } from 'next'

type Entry = Omit<MetadataRoute.Sitemap[number], 'url' | 'alternates'> & { href: string }

const STATIC_ROUTES: Entry[] = [
   { href: '/', changeFrequency: 'monthly', priority: 1 },
   { href: '/expertises', changeFrequency: 'monthly', priority: 0.8 },
   { href: '/resume', changeFrequency: 'monthly', priority: 0.9 },
   { href: '/resume/experiences', changeFrequency: 'monthly', priority: 0.6 },
   { href: '/resume/educations', changeFrequency: 'monthly', priority: 0.6 },
   { href: '/resume/about', changeFrequency: 'monthly', priority: 0.6 },
   { href: '/projects', changeFrequency: 'monthly', priority: 0.8 },
   { href: '/contact', changeFrequency: 'yearly', priority: 0.8 },
   { href: '/legal', changeFrequency: 'yearly', priority: 0.2 },
]

const DYNAMIC_ROUTES: Entry[] = [
   ...PROJECTS.map((p) => ({ href: `/projects/${p.id}`, changeFrequency: 'monthly' as const, priority: 0.7 })),
   ...EXPERIENCES_LIST.map((e) => ({
      href: `/resume/experiences/${e.id}`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
   })),
   ...EDUCATIONS_LIST.map((e) => ({
      href: `/resume/educations/${e.id}`,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
   })),
]

const absolute = (locale: LocaleType, href: string) => `${env.NEXT_PUBLIC_BASE_LINK}${getPathname({ locale, href })}`

export default function sitemap(): MetadataRoute.Sitemap {
   return [...STATIC_ROUTES, ...DYNAMIC_ROUTES].flatMap(({ href, ...rest }) =>
      routing.locales.map((locale) => ({
         url: absolute(locale, href),
         lastModified: CONTENT_UPDATED_AT,
         alternates: {
            languages: Object.fromEntries(routing.locales.map((l) => [l, absolute(l, href)])),
         },
         ...rest,
      }))
   )
}
