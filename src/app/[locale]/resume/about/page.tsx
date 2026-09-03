import { cn } from '@src/lib/utils'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import { SectionHeader } from '@src/components/resume/section-header'
import { LocaleType } from '@src/i18n/routing'
import { INFORMATIONS } from '@src/resources/data/informations'
import { localizedAlternates } from '@src/lib/seo'
import { RECRUITER_KEYWORDS } from '@src/resources/data/metadata'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'resume' })

   return {
      title: t('page_title_about'),
      description: t('page_description_about'),
      alternates: localizedAlternates(locale, '/resume/about'),
      keywords: RECRUITER_KEYWORDS,
      twitter: {
         title: t('page_title_about'),
         description: t('page_description_about'),
      },
   }
}

type Props = {
   params: Promise<{ locale: LocaleType; project_id: string }>
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'resume' })

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <section className='w-full flex flex-col gap-5'>
         <SectionHeader title='my_info' description='my_info_description' />
         <RevealFromBottom elt={'h3'} delay={0.1} className={cn('text-lg font-mono tracking-tight text-foreground')}>
            {t('contact_details')}
         </RevealFromBottom>
         <div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
            {INFORMATIONS.map((information, index) => {
               // The phone number is dialable: recruiters read the resume on a phone.
               const href =
                  information.id === 'phone'
                     ? `tel:${information.value[locale].replace(/[^+\d]/g, '')}`
                     : information.link
               const isExternal = href?.startsWith('http')

               return (
                  <RevealFromBottom
                     key={information.id}
                     delay={index * 0.1}
                     className={cn(information.isLong && 'lg:col-span-2', 'flex gap-3')}
                  >
                     <p className='text-muted-foreground text-sm flex-none'>{information.label[locale]}</p>
                     {href ? (
                        <a
                           href={href}
                           target={isExternal ? '_blank' : undefined}
                           rel={isExternal ? 'noopener noreferrer' : undefined}
                           className='block text-base font-semibold w-full truncate text-primary'
                        >
                           {information.value[locale]}
                        </a>
                     ) : (
                        <p className='text-base font-semibold text-foreground w-full truncate'>
                           {information.value[locale]}
                        </p>
                     )}
                  </RevealFromBottom>
               )
            })}
         </div>
      </section>
   )
}
