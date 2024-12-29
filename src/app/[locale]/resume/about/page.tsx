import { cn } from "@/lib/utils";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { SectionHeader } from '@src/components/resume/section-header'
import { Link, LocaleType } from '@src/i18n/routing'
import { INFORMATIONS } from '@src/resources/data/informations'
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'resume' })

   return {
      title: t('page_title_about'),
      description: t('page_description_about'),
      keywords: ['Compétences', 'Certifications', 'Expériences professionnelles', 'about', 'Professional experiences'],
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

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <section className='w-full flex flex-col gap-5'>
         <SectionHeader title='my_info' description='my_info_description' />
         <div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
            {INFORMATIONS.map((information, index) => (
               <RevealFromBottom
                  key={information.id}
                  delay={index * 0.1}
                  className={cn(information.isLong && 'lg:col-span-2', 'flex gap-3')}
               >
                  <p className='text-muted-foreground text-sm flex-none'>{information.label[locale]}</p>
                  {information.link ? (
                     <Link
                        href={information.link}
                        target='_blank'
                        className='block text-base font-semibold w-full truncate text-primary'
                     >
                        {information.value[locale]}
                     </Link>
                  ) : (
                     <p className='text-base font-semibold text-foreground w-full truncate'>
                        {information.value[locale]}
                     </p>
                  )}
               </RevealFromBottom>
            ))}
         </div>
         {/* <img
            src={
               'https://github-readme-stats.vercel.app/api?username=ronald-tchuekou&show_icons=true&locale=en&theme=algolia'
            }
            alt='ronald-tchuekou'
            className='mt-8'
         /> */}
      </section>
   )
}
