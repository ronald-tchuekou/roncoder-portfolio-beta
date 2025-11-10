import env from '@src/lib/env/client'
import { EDUCATIONS_LIST } from '@src/resources/data/educations'
import { EXPERIENCES_LIST } from '@src/resources/data/experiences'
import { PROJECTS } from '@src/resources/data/projects'
import type { MetadataRoute } from 'next'

const baseUrl = env.NEXT_PUBLIC_BASE_LINK
const locales = ['en', 'fr'] as const

// Define static routes with their properties
const staticRoutes = [
   { path: '', changeFrequency: 'monthly' as const, priority: 1 },
   { path: '/services', changeFrequency: 'weekly' as const, priority: 0.8 },
   { path: '/resume', changeFrequency: 'weekly' as const, priority: 0.8 },
   { path: '/resume/educations', changeFrequency: 'weekly' as const, priority: 0.6 },
   { path: '/resume/experiences', changeFrequency: 'weekly' as const, priority: 0.6 },
   { path: '/resume/about', changeFrequency: 'weekly' as const, priority: 0.6 },
   { path: '/projects', changeFrequency: 'weekly' as const, priority: 0.8 },
   { path: '/contact', changeFrequency: 'weekly' as const, priority: 0.8 },
]

export default function sitemap(): MetadataRoute.Sitemap {
   const urls: MetadataRoute.Sitemap = []

   // Generate URLs for static routes in both locales
   locales.forEach((locale) => {
      staticRoutes.forEach((route) => {
         // For the home page, we handle it differently based on locale
         if (route.path === '') {
            if (locale === 'en') {
               // English is default, so no locale prefix
               urls.push({
                  url: baseUrl,
                  lastModified: new Date(),
                  changeFrequency: route.changeFrequency,
                  priority: route.priority,
               })
            } else {
               // French gets the locale prefix
               urls.push({
                  url: `${baseUrl}/${locale}`,
                  lastModified: new Date(),
                  changeFrequency: route.changeFrequency,
                  priority: route.priority,
               })
            }
         } else {
            // For other routes, add with locale prefix
            if (locale === 'en') {
               urls.push({
                  url: `${baseUrl}${route.path}`,
                  lastModified: new Date(),
                  changeFrequency: route.changeFrequency,
                  priority: route.priority,
               })
            } else {
               urls.push({
                  url: `${baseUrl}/${locale}${route.path}`,
                  lastModified: new Date(),
                  changeFrequency: route.changeFrequency,
                  priority: route.priority,
               })
            }
         }
      })
   })

   // Generate URLs for dynamic project routes
   PROJECTS.forEach((project) => {
      locales.forEach((locale) => {
         if (locale === 'en') {
            urls.push({
               url: `${baseUrl}/projects/${project.id}`,
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.7,
            })
            urls.push({
               url: `${baseUrl}/projects/preview/${project.id}`,
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.7,
            })
         } else {
            urls.push({
               url: `${baseUrl}/${locale}/projects/${project.id}`,
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.7,
            })
            urls.push({
               url: `${baseUrl}/${locale}/projects/preview/${project.id}`,
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.7,
            })
         }
      })
   })

   // Generate URLs for dynamic education routes
   EDUCATIONS_LIST.forEach((education) => {
      locales.forEach((locale) => {
         if (locale === 'en') {
            urls.push({
               url: `${baseUrl}/resume/educations/${education.id}`,
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.5,
            })
         } else {
            urls.push({
               url: `${baseUrl}/${locale}/resume/educations/${education.id}`,
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.5,
            })
         }
      })
   })

   // Generate URLs for dynamic experience routes
   EXPERIENCES_LIST.forEach((experience) => {
      locales.forEach((locale) => {
         if (locale === 'en') {
            urls.push({
               url: `${baseUrl}/resume/experiences/${experience.id}`,
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.5,
            })
         } else {
            urls.push({
               url: `${baseUrl}/${locale}/resume/experiences/${experience.id}`,
               lastModified: new Date(),
               changeFrequency: 'weekly',
               priority: 0.5,
            })
         }
      })
   })

   return urls
}
