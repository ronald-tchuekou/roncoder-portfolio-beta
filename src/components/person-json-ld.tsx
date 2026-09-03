import { LocaleType } from '@src/i18n/routing'
import env from '@src/lib/env/client'
import { EDUCATIONS_LIST } from '@src/resources/data/educations'

const JOB_TITLE: Record<LocaleType, string> = {
   fr: 'Senior Frontend Engineer',
   en: 'Senior Frontend Engineer',
}

const KNOWS_ABOUT = [
   'TypeScript',
   'React',
   'Next.js',
   'Angular',
   'React Native',
   'Expo',
   'Node.js',
   'Express',
   'GraphQL',
   'PostgreSQL',
   'MongoDB',
   'Figma',
   'Design system',
   'Docker',
   'GitHub Actions',
]

const SAME_AS = [
   'https://www.linkedin.com/in/ronald-tchuekou',
   'https://github.com/ronald-tchuekou',
   'https://x.com/TchuekouRonald',
   'https://www.youtube.com/@ronaldtchuekou',
]

/** Structured data describing the candidate. Validate any change with the
 *  schema.org validator before shipping it. */
export function PersonJsonLd({ locale }: { locale: LocaleType }) {
   const person = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Ronald Tchuekou',
      jobTitle: JOB_TITLE[locale],
      url: env.NEXT_PUBLIC_BASE_LINK,
      image: `${env.NEXT_PUBLIC_BASE_LINK}/profile_3.webp`,
      email: 'mailto:ronaldtchuekou@gmail.com',
      telephone: '+237658172868',
      address: {
         '@type': 'PostalAddress',
         addressLocality: 'Douala',
         addressCountry: 'CM',
      },
      worksFor: { '@type': 'Organization', name: 'NAFASI DIGITAL SARL' },
      knowsAbout: KNOWS_ABOUT,
      knowsLanguage: [
         { '@type': 'Language', name: 'French', alternateName: 'fr' },
         { '@type': 'Language', name: 'English', alternateName: 'en' },
      ],
      sameAs: SAME_AS,
      hasCredential: EDUCATIONS_LIST.map((education) => ({
         '@type': 'EducationalOccupationalCredential',
         name: education.title[locale],
         credentialCategory: 'certificate',
         recognizedBy: { '@type': 'Organization', name: education.company },
         dateCreated: education.sortDate,
      })),
   }

   return (
      <script
         type='application/ld+json'
         // The payload is built here from static data, never from user input.
         dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
   )
}
