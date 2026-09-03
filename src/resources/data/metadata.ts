import { Metadata } from 'next'

/** Search queries a recruiter actually types. Kept short and specific on purpose. */
export const RECRUITER_KEYWORDS = [
   'Senior Frontend Engineer',
   'développeur Full Stack senior',
   'développeur React senior',
   'développeur Angular senior',
   'développeur React Native',
   'ingénieur frontend TypeScript',
   'développeur full remote',
   'CV développeur Full Stack',
   'remote React developer',
   'React Native developer',
   'Ronald Tchuekou',
   'Douala',
   'Cameroun',
]

/** Bumped by hand when the content actually changes. Never `new Date()`: a lastModified
 *  that moves on every build is ignored by crawlers. */
export const CONTENT_UPDATED_AT = new Date('2026-09-03')

export const METADATA: Metadata = {
   generator: 'Next.js',
   applicationName: 'roncoder',
   referrer: 'origin-when-cross-origin',
   authors: [{ name: 'Ronald Tchuekou' }],
   creator: 'Ronald Tchuekou',
   publisher: 'Vercel',
   category: 'technology',
   keywords: RECRUITER_KEYWORDS,
}
