import env from '@src/lib/env/client'
import { Metadata } from 'next'

export const METADATA: Metadata = {
   generator: 'Next.js',
   applicationName: 'roncoder',
   referrer: 'origin-when-cross-origin',
   authors: [{ name: 'Ronald Tchuekou' }],
   creator: 'Ronald Tchuekou',
   publisher: 'Vercel',
   category: 'technology',
   twitter: {
      card: 'summary_large_image',
      title: 'Ronald Tchuekou Portfolio, Développeur FullStack et Administrateur de systèmes',
      description:
         'Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.',
      siteId: '@TchuekouRonald',
      creator: '@TchuekouRonald',
      creatorId: '@TchuekouRonald',
      images: [`${env.NEXT_PUBLIC_BASE_LINK}/ronald-tchuekou-profile.jpg`], // Must be an absolute URL
   },
}
