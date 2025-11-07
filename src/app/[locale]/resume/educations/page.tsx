import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { SectionHeader } from '@src/components/resume/section-header'
import { Link, LocaleType } from '@src/i18n/routing'
import { EDUCATIONS_LIST } from '@src/resources/data/educations'
import { DotIcon, MoveRightIcon } from "lucide-react";
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: LocaleType; project_id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'resume' })

   return {
      title: t('page_title_educations'),
      description: t('page_description_educations'),
      keywords: [
         'Compétences',
         'Certifications',
         'Expériences professionnelles',
         'educations',
         'Professional educations',
      ],
      twitter: {
         title: t('page_title_educations'),
         description: t('page_description_educations'),
      },
   }
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'resume' })

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <section className='w-full flex flex-col gap-5'>
         <SectionHeader title='my_education' description='my_education_description' />
         <div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
            {EDUCATIONS_LIST.map((education, index) => (
               <RevealFromBottom key={education.id} delay={index < 3 ? index * 0.1 : 0.1}>
                  <div className={cn('bg-card border border-input', 'rounded-lg p-5 size-full', 'flex flex-col gap-3')}>
                     <h3 className={cn('text-xl font-bold text-foreground font-mono tracking-tight')}>
                        {education.title[locale]}
                     </h3>
                     <p className={cn('text-primary text-lg uppercase')}>{education.company}</p>
                     <div className='flex items-center h-full'>
                        <DotIcon className='size-8 text-primary' />
                        <small className={cn('text-muted-foreground')}>{education.date[locale]}</small>
                     </div>
                     <div>
                        <Link href={`/resume/educations/${education.id}`}>
                           <Button variant={'outline'} size={'sm'} className={cn('text-xs', 'rounded-full')}>
                              {t('consult')}
                              <MoveRightIcon className='size-5 ml-2' />
                           </Button>
                        </Link>
                     </div>
                  </div>
               </RevealFromBottom>
            ))}
         </div>
      </section>
   )
}
