import env from '@src/lib/env/client'
import type { MetadataRoute } from 'next'

const baseUrl = env.NEXT_PUBLIC_BASE_LINK

const paths: MetadataRoute.Sitemap = [
   {
      url: ``,
      changeFrequency: 'monthly',
      priority: 1,
   },
   {
      url: '/services',
      changeFrequency: 'weekly',
      priority: 0.8,
   },
   {
      url: '/resume',
      changeFrequency: 'weekly',
      priority: 0.8,
   },
   {
      url: '/resume/educations',
      changeFrequency: 'weekly',
      priority: 0.6,
   },
   {
      url: '/resume/experiences',
      changeFrequency: 'weekly',
      priority: 0.6,
   },
   {
      url: '/resume/about',
      changeFrequency: 'weekly',
      priority: 0.6,
   },
   {
      url: '/projects',
      changeFrequency: 'weekly',
      priority: 0.8,
   },
   {
      url: '/contact',
      changeFrequency: 'weekly',
      priority: 0.8,
   },
]

export default function sitemap(): MetadataRoute.Sitemap {
   return paths.map((path) => ({
      url: `${baseUrl}${path.url}`,
      lastModified: new Date(),
      changeFrequency: path.changeFrequency,
      priority: path.priority,
   }))
}
