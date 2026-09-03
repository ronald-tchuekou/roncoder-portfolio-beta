'use client'

import { Button } from '@src/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@src/components/ui/tooltip'
import { cn } from '@src/lib/utils'
import { Link } from '@src/i18n/routing'
import { EXPERIENCE_YEARS } from '@src/resources/data/informations'
import { RESUME_FILES, RESUME_LOCALES } from '@src/resources/data/resumes'
import { GithubBrandIcon, LinkedinBrandIcon, YoutubeBrandIcon } from '@src/components/icons/brand-icons'
import { DownloadIcon, MailIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

/** Public profiles shown under the card. Kept local so the resume page stays self contained. */
const PROFILE_LINKS = {
   github: 'https://github.com/ronald-tchuekou',
   linkedin: 'https://www.linkedin.com/in/ronald-tchuekou',
   youtube: 'https://youtube.com/@ronaldtchuekou',
} as const

const CV_FILES = RESUME_LOCALES.map((id) => ({ id, ...RESUME_FILES[id] }))

export const CandidateCard: FC = () => {
   const t = useTranslations('resume')

   const rows = [
      { id: 'current_role', label: t('card_current_role_label'), value: t('card_current_role_value') },
      {
         id: 'experience',
         label: t('card_experience_label'),
         value: t('card_experience_value', { years: EXPERIENCE_YEARS }),
      },
      { id: 'main_tech', label: t('card_main_tech_label'), value: t('card_main_tech_value') },
      { id: 'looking_for', label: t('card_looking_for_label'), value: t('card_looking_for_value') },
      { id: 'work_mode', label: t('card_work_mode_label'), value: t('card_work_mode_value') },
      { id: 'location', label: t('card_location_label'), value: t('card_location_value') },
      { id: 'languages', label: t('card_languages_label'), value: t('card_languages_value') },
   ]

   const socials = [
      { id: 'github', href: PROFILE_LINKS.github, label: t('github_aria'), icon: <GithubBrandIcon className='size-5' /> },
      {
         id: 'linkedin',
         href: PROFILE_LINKS.linkedin,
         label: t('linkedin_aria'),
         icon: <LinkedinBrandIcon className='size-5' />,
      },
      {
         id: 'youtube',
         href: PROFILE_LINKS.youtube,
         label: t('youtube_aria'),
         icon: <YoutubeBrandIcon className='size-5' />,
      },
   ]

   return (
      <RevealFromBottom
         elt={'div'}
         className={cn('w-full bg-card border border-input rounded-lg', 'p-5 lg:p-6 flex flex-col gap-6')}
      >
         <h2 className={cn('text-lg font-mono tracking-tight text-foreground')}>{t('candidate_card_title')}</h2>

         <dl className={cn('grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4')}>
            {rows.map((row) => (
               <div key={row.id} className={cn('flex flex-col gap-1')}>
                  <dt className='text-sm text-muted-foreground'>{row.label}</dt>
                  <dd className='text-base font-semibold text-foreground'>{row.value}</dd>
               </div>
            ))}
         </dl>

         <div className={cn('flex flex-col gap-4')}>
            <TooltipProvider>
               <div className={cn('flex flex-wrap items-center gap-3')}>
                  {CV_FILES.map((file) => {
                     const format = file.pages ? t('cv_format_with_pages', { pages: file.pages }) : t('cv_format')

                     if (file.available) {
                        return (
                           <Button key={file.id} asChild variant={'default'}>
                              <a href={file.href} download>
                                 <DownloadIcon className='size-4' />
                                 {t(file.labelKey)}
                                 <span className='text-xs font-normal opacity-80'>({format})</span>
                              </a>
                           </Button>
                        )
                     }

                     return (
                        <Tooltip key={file.id} delayDuration={150}>
                           {/* The wrapper keeps the tooltip reachable: a disabled button emits no pointer event. */}
                           <TooltipTrigger asChild>
                              <span tabIndex={0} className='inline-flex rounded-md'>
                                 <Button variant={'default'} disabled aria-disabled='true'>
                                    <DownloadIcon className='size-4' />
                                    {t(file.labelKey)}
                                    <span className='text-xs font-normal opacity-80'>({format})</span>
                                 </Button>
                              </span>
                           </TooltipTrigger>
                           <TooltipContent align='start' side='bottom' className='max-w-xs'>
                              <p>{t('cv_unavailable')}</p>
                              <Link href='/contact' className='underline underline-offset-4'>
                                 {t('cv_unavailable_link')}
                              </Link>
                           </TooltipContent>
                        </Tooltip>
                     )
                  })}

                  <Button asChild variant={'outline'}>
                     <Link href='/contact'>
                        <MailIcon className='size-4' />
                        {t('contact_me')}
                     </Link>
                  </Button>
               </div>
            </TooltipProvider>

            <ul className={cn('flex flex-wrap items-center gap-2')}>
               {socials.map((social) => (
                  <li key={social.id}>
                     <Button asChild variant={'ghost'} size={'icon'}>
                        <a href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.label}>
                           {social.icon}
                        </a>
                     </Button>
                  </li>
               ))}
            </ul>
         </div>
      </RevealFromBottom>
   )
}
