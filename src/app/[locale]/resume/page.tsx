import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import { SectionHeader } from '@src/components/resume/section-header'
import { LocaleType } from '@src/i18n/routing'
import { localizedAlternates } from '@src/lib/seo'
import { RECRUITER_KEYWORDS } from '@src/resources/data/metadata'
import { SKILL_GROUPS, seniorityLine, skillsOfGroup } from '@src/resources/data/skills'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'resume' })

   return {
      title: t('page_title_skills'),
      description: t('page_description_skills'),
      alternates: localizedAlternates(locale, '/resume'),
      keywords: RECRUITER_KEYWORDS,
      twitter: {
         title: t('page_title_skills'),
         description: t('page_description_skills'),
      },
   }
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale as LocaleType

   // Enable static rendering
   setRequestLocale(locale)

   const t = await getTranslations({ locale, namespace: 'resume' })

   return (
      <section className='w-full flex flex-col gap-8'>
         <SectionHeader title='my_skills' description='my_skills_description' />

         {SKILL_GROUPS.map((group, groupIndex) => {
            const skills = skillsOfGroup(group)
            if (skills.length === 0) return null

            const seniority = seniorityLine(group, locale)

            return (
               <div key={group} className={cn('w-full flex flex-col gap-4')}>
                  <RevealFromBottom
                     elt={'h3'}
                     delay={groupIndex * 0.05}
                     className={cn('text-lg font-mono tracking-tight text-foreground')}
                  >
                     {t(`skill_group_${group}`)}
                  </RevealFromBottom>

                  <div className={cn('w-full flex flex-row flex-wrap gap-4')}>
                     {skills.map((skill, index) => (
                        <RevealFromBottom key={skill.id} delay={index * 0.05}>
                           <TooltipProvider>
                              <Tooltip delayDuration={200}>
                                 <TooltipTrigger asChild>
                                    <div
                                       className={cn(
                                          'bg-card border border-input ',
                                          'flex justify-center items-center',
                                          'rounded-lg size-24 text-muted-foreground',
                                          'hover:bg-accent/50 hover:text-foreground hover:border-muted-foreground',
                                          'transition-all duration-300',
                                       )}
                                    >
                                       {skill.icon}
                                       <span className='sr-only'>{skill.title}</span>
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

                  {seniority && (
                     <RevealFromBottom elt={'p'} delay={0.1} className={cn('text-sm text-muted-foreground')}>
                        {seniority}
                     </RevealFromBottom>
                  )}
               </div>
            )
         })}
      </section>
   )
}
