import { cn } from '@src/lib/utils'
import { Container } from '@src/components/container'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import PageTitle from '@src/components/page-title'
import { ProjectItem } from '@src/components/projects/project-item'
import { LocaleType } from '@src/i18n/routing'
import { localizedAlternates } from '@src/lib/seo'
import { PROJECTS } from '@src/resources/data/projects'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: LocaleType }>
}

/** Recruitment oriented queries, shared by both locales. */
const PROJECTS_KEYWORDS = [
   'Senior Frontend Engineer',
   'développeur Full Stack senior',
   'développeur React senior',
   'développeur Angular senior',
   'développeur React Native',
   'ingénieur frontend TypeScript',
   'développeur full remote',
   'remote React developer',
   'React Native developer',
   'portfolio projets développeur',
   'Douala',
   'Cameroun',
]

const ORDERED_PROJECTS = [...PROJECTS].sort((a, b) => a.order - b.order)

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'projects' })

   return {
      title: t('meta_title'),
      description: t('meta_description'),
      alternates: localizedAlternates(locale, '/projects'),
      keywords: PROJECTS_KEYWORDS,
      openGraph: {
         title: t('meta_title'),
         description: t('meta_description'),
      },
      twitter: {
         card: 'summary_large_image',
         title: t('meta_title'),
         description: t('meta_description'),
      },
   }
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'projects' })

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <main>
         <Container className={cn('')} rootClassName={cn('pt-10 lg:pt-20 pb-6')}>
            <PageTitle title={t('page_title')} description={t('page_description')} />
         </Container>
         <Container className={cn('grid grid-cols-1 md:grid-cols-2 gap-10')}>
            {ORDERED_PROJECTS.map((item, index) => (
               <RevealFromBottom key={item.id}>
                  <ProjectItem item={item} locale={locale} priority={index === 0} />
               </RevealFromBottom>
            ))}
         </Container>
         <div className={cn('h-16')} />
      </main>
   )
}
