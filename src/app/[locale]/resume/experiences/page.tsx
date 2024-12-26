import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { SectionHeader } from '@src/components/resume/section-header'
import { Link, LocaleType } from '@src/i18n/routing'
import { EXPERIENCES_LIST } from '@src/resources/data/experiences'
import { DotIcon, MoveRightIcon } from "lucide-react";
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: string; project_id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'resume' })

   return {
      title: t('page_title_experiences'),
      description: t('page_description_experiences'),
      keywords: [
         'Compétences',
         'Certifications',
         'Expériences professionnelles',
         'experiences',
         'Professional experiences',
      ],
      twitter: {
         title: t('page_title_experiences'),
         description: t('page_description_experiences'),
      },
   }
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'resume' })

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <section className='w-full flex flex-col gap-5'>
         <SectionHeader title='my_experiences' description='my_experiences_description' />
         <div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
            {EXPERIENCES_LIST.map((experience, index) => (
               <RevealFromBottom key={experience.id} delay={index * 0.1}>
                  <div className={cn('bg-card border border-input', 'rounded-lg p-5 size-full', 'flex flex-col gap-3')}>
                     <h3 className={cn('text-xl font-bold text-white')}>{experience.title[locale]}</h3>
                     <p className={cn('text-primary text-lg uppercase')}>{experience.company}</p>
                     <div className='flex items-center h-full'>
                        <DotIcon className='size-8 text-primary' />
                        <small className={cn('text-muted-foreground')}>{experience.date[locale]}</small>
                     </div>
                     <div>
                        <Link href={`/resume/experiences/${experience.id}`}>
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
