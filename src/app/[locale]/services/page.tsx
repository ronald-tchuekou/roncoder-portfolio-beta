import { cn } from '@/lib/utils'
import { Container } from '@src/components/container'
import PageTitle from '@src/components/page-title'
import { ServicesList } from '@src/components/services/services-list'
import { LocaleType } from '@src/i18n/routing'
import { localizedAlternates } from '@src/lib/seo'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'services' })

   return {
      title: t('page_title'),
      description: t('page_description'),
      alternates: localizedAlternates(locale, '/services'),
      keywords: [
         'roncoder portfolio services',
         'services roncoder',
         'Application web',
         "Création d'une application web et mobile",
         'Développeur web',
         "Intégration d'outils de paiement",
         "Création d'api REST",
         'UX/UI Designer',
         "Création d'un SaaS",
         'Web application',
         'Creating a web and mobile application',
         'Web developer',
         'Payment integration tools',
         'Creating REST API',
         'UX/UI Designer',
         'Creating a SaaS',
      ],
      twitter: {
         title: t('page_title'),
         description: t('page_description'),
      },
   }
}

type Props = {
   params: Promise<{ locale: string; project_id: string }>
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'services' })

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <main>
         <Container className={cn('')} rootClassName={cn('pt-10 lg:pt-20 pb-6')}>
            <PageTitle title={t('page_title')} description={t('page_description')} />
         </Container>
         <ServicesList />
         <div className={cn('h-16')} />
      </main>
   )
}
