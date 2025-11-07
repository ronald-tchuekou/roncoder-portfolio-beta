import { cn } from "@/lib/utils";
import { BackButton } from "@src/components/back-button";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { LocaleType } from '@src/i18n/routing'
import { EDUCATIONS_LIST } from '@src/resources/data/educations'
import { DotIcon } from "lucide-react";
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image';

export async function generateStaticParams() {
	return EDUCATIONS_LIST.map((education) => ({
		education_id: education.id,
	}))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { education_id, locale } = await params
   const education = EDUCATIONS_LIST.find((exp) => exp.id === education_id)

   return {
      title: education?.title[locale],
      description: education?.description[locale],
      openGraph: {
         images: [education?.imageLink ?? ''],
      },
      keywords: education?.keywords,
      twitter: {
         title: education?.title[locale],
         description: education?.description[locale],
         images: [education?.imageLink ?? ''],
      },
   }
}

type Props = {
   params: Promise<{ locale: LocaleType; education_id: string }>
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'resume' })

   // Enable static rendering
   setRequestLocale(locale)

   const educationId = (await params).education_id
   const education = EDUCATIONS_LIST.find((exp) => exp.id === educationId)

   return (
      <section className='w-full flex flex-col gap-5'>
         <div className={cn('flex gap-3 items-center')}>
            <BackButton />
            <RevealFromBottom
               delay={0.1}
               elt={'h2'}
               className={cn(
                  'scroll-m-20 text-xl lg:text-3xl tracking-tight ',
                  'text-foreground font-mono tracking-tight'
               )}
            >
               {education?.title[locale]}
            </RevealFromBottom>
         </div>
         <RevealFromBottom delay={0.2} className={cn('flex')}>
            <p className={cn('text-primary text-lg uppercase')}>{education?.company}</p>
            <div className='flex items-center h-full'>
               <DotIcon className='size-8 text-primary' />
               <small className={cn('text-muted-foreground')}>{education?.date[locale]}</small>
            </div>
         </RevealFromBottom>
         <RevealFromBottom elt={'p'} delay={0.2} className={cn('')}>
            {education?.description[locale]}
         </RevealFromBottom>
         {education?.imageLink && (
            <RevealFromBottom delay={0.2} className={cn('w-full aspect-auto', 'rounded-lg', 'bg-secondary/10')}>
               <Image
                  quality={100}
                  src={education.imageLink}
                  alt={education.title[locale]}
                  width={1000}
                  height={600}
                  placeholder='blur'
                  blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0XL+lHgAEwgIVSfhUvgAAAABJRU5ErkJggg=='
                  className={cn('rounded-lg w-full aspect-auto')}
               />
            </RevealFromBottom>
         )}
         <RevealFromBottom elt={'h3'} delay={0.3} className={cn('text-lg text-accent-foreground')}>
            {t('training_content')}
         </RevealFromBottom>
         <ul className={cn('list-disc pl-8 space-y-3')}>
            {education?.tasks.map((task, idx) => (
               <RevealFromBottom delay={(idx + 1) * 0.1} elt={'li'} key={idx}>
                  {task[locale]}
               </RevealFromBottom>
            ))}
         </ul>
      </section>
   )
}
