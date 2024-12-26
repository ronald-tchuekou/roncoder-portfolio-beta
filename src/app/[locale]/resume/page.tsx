import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import { SectionHeader } from '@src/components/resume/section-header'
import { SKILLS_LIST } from '@src/resources/data/skills'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: string; project_id: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'resume' })

   return {
      title: t('page_title_skills'),
      description: t('page_description_skills'),
      keywords: ['Compétences', 'Certifications', 'Expériences professionnelles', 'Skills', 'Professional experiences'],
      twitter: {
         title: t('page_title_skills'),
         description: t('page_description_skills'),
      },
   }
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <section className='w-full flex flex-col gap-5'>
         <SectionHeader title='my_skills' description='my_skills_description' />
         <div className={cn('w-full flex flex-row flex-wrap gap-5')}>
            {SKILLS_LIST.map((skill, index) => (
               <RevealFromBottom key={skill.id} delay={index * 0.1}>
                  <TooltipProvider>
                     <Tooltip delayDuration={200}>
                        <TooltipTrigger asChild>
                           <div
                              className={cn(
                                 'bg-card border border-input ',
                                 'flex justify-center items-center',
                                 'rounded-lg size-24 text-muted-foreground',
                                 'hover:bg-accent/50 hover:text-white hover:border-muted-foreground',
                                 'transition-all duration-300'
                              )}
                           >
                              {skill.icon}
                           </div>
                        </TooltipTrigger>
                        <TooltipContent align='center' side='bottom'>
                           <p>{skill.title}</p>
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
               </RevealFromBottom>
            ))}
         </div>
      </section>
   )
}
