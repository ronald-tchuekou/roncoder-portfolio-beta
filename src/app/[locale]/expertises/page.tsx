import { cn } from '@src/lib/utils'
import { Container } from '@src/components/container'
import { ExpertisesList } from '@src/components/expertises/expertises-list'
import PageTitle from '@src/components/page-title'
import { LocaleType } from '@src/i18n/routing'
import { localizedAlternates } from '@src/lib/seo'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'expertises' })

   return {
      title: t('meta_title'),
      description: t('meta_description'),
      alternates: localizedAlternates(locale, '/expertises'),
      keywords: [
         'Senior Frontend Engineer',
         'développeur Full Stack senior',
         'développeur React senior',
         'développeur Angular senior',
         'développeur React Native',
         'ingénieur frontend TypeScript',
         'développeur full remote',
         'remote React developer',
         'React Native developer',
         'Douala',
         'Cameroun',
      ],
      twitter: {
         title: t('meta_title'),
         description: t('meta_description'),
      },
   }
}

type Props = {
   params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'expertises' })

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <main>
         <Container rootClassName={cn('pt-10 lg:pt-20 pb-6')}>
            <PageTitle title={t('page_title')} description={t('page_description')} />
         </Container>
         <ExpertisesList />
         <div className={cn('h-16')} />
      </main>
   )
}
