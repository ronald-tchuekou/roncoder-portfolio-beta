import { Container } from '@src/components/container'
import PageTitle from '@src/components/page-title'
import { LocaleType } from '@src/i18n/routing'
import { localizedAlternates } from '@src/lib/seo'
import type { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'legal' })

   return {
      title: t('page_title'),
      description: t('page_description'),
      alternates: localizedAlternates(locale, '/legal'),
   }
}

export default async function LegalPage({ params }: Props) {
   const locale = (await params).locale
   setRequestLocale(locale)

   const t = await getTranslations({ locale: locale as LocaleType, namespace: 'legal' })

   const sections = ['editor', 'host', 'data', 'cookies'] as const

   return (
      <main>
         <Container className='py-10 lg:py-16 max-w-3xl'>
            <PageTitle title={t('title')} />
            <div className='flex flex-col gap-8 mt-6'>
               {sections.map((section) => (
                  <section key={section} className='flex flex-col gap-2'>
                     <h2 className='text-lg font-semibold font-mono'>{t(`${section}_title`)}</h2>
                     <p className='text-muted-foreground leading-relaxed'>{t(`${section}_body`)}</p>
                  </section>
               ))}
               <p className='text-sm text-muted-foreground'>{t('updated_at')}</p>
            </div>
         </Container>
      </main>
   )
}
