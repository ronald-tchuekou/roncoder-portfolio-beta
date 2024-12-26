import { cn } from "@/lib/utils";
import { BackButton } from "@src/components/back-button";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { LocaleType } from '@src/i18n/routing'
import { EXPERIENCES_LIST } from '@src/resources/data/experiences'
import { DotIcon } from 'lucide-react';
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'


export async function generateStaticParams() {
	return EXPERIENCES_LIST.map((exp) => ({
		exp_id: exp.id,
	}))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { exp_id, locale } = await params
   const exp = EXPERIENCES_LIST.find((exp) => exp.id === exp_id)

   return {
      title: exp?.title[locale],
      description: exp?.description[locale],
      openGraph: {
         images: [exp?.imageLink ?? ''],
      },
      keywords: exp?.keywords,
      twitter: {
         title: exp?.title[locale],
         description: exp?.description[locale],
         images: [exp?.imageLink ?? ''],
      },
   }
}

type Props = {
   params: Promise<{ locale: LocaleType; project_id: string; exp_id: string }>
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale

   const t = await getTranslations({ locale, namespace: 'resume' })

   // Enable static rendering
   setRequestLocale(locale)

   const expId = (await params).exp_id
   const experience = EXPERIENCES_LIST.find((exp) => exp.id === expId)

   return (
      <section className='w-full flex flex-col gap-5'>
         <div className={cn('flex gap-3 items-center')}>
            <BackButton />
            <RevealFromBottom
               delay={0.1}
               elt={'h2'}
               className={cn('scroll-m-20 text-xl lg:text-3xl tracking-tight ', 'text-white')}
            >
               {experience?.title[locale]}
            </RevealFromBottom>
         </div>
         <RevealFromBottom delay={0.2} className={cn('flex')}>
            <p className={cn('text-primary text-lg uppercase')}>{experience?.company}</p>
            <div className='flex items-center h-full'>
               <DotIcon className='size-8 text-primary' />
               <small className={cn('text-muted-foreground')}>{experience?.date[locale]}</small>
            </div>
         </RevealFromBottom>
         <RevealFromBottom elt={'p'} delay={0.2} className={cn('')}>
            {experience?.description[locale]}
         </RevealFromBottom>
         <RevealFromBottom elt={'h3'} delay={0.3} className={cn('text-lg text-accent-foreground')}>
            {t('tasks')}
         </RevealFromBottom>
         <ul className={cn('list-disc pl-8 space-y-3')}>
            {experience?.tasks.map((task, idx) => (
               <RevealFromBottom delay={(idx + 1) * 0.1} elt={'li'} key={idx}>
                  {task[locale]}
               </RevealFromBottom>
            ))}
         </ul>
      </section>
   )
}
