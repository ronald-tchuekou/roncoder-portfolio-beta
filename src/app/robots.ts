import env from '@src/lib/env/client'
import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
   return {
      rules: {
         userAgent: '*',
         allow: '/',
         disallow: '/api/',
      },
      sitemap: `${env.NEXT_PUBLIC_BASE_LINK}/sitemap.xml`,
   }
}
