'use client'

import { Button } from '@src/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@src/components/ui/tooltip'
import { cn } from '@src/lib/utils'
import { track } from '@vercel/analytics'
import { CloudDownloadIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { ComponentProps, FC, useCallback } from 'react'
import { resumeFor } from '@src/resources/data/resumes'

export type CtaLocation = 'hero' | 'looking_for' | 'final' | 'footer'

type Props = {
   location: CtaLocation
   label?: string
   className?: string
   variant?: ComponentProps<typeof Button>['variant']
   size?: ComponentProps<typeof Button>['size']
}

/** Main conversion point of the whole site: the resume download. */
export const ResumeDownloadButton: FC<Props> = ({ location, label, className, variant = 'default', size }) => {
   const t = useTranslations('common')
   const locale = useLocale()
   const text = label ?? t('resume.download')

   const resume = resumeFor(locale)

   const reportDownload = useCallback(() => {
      track('cta_click', { location })
      track('resume_download', { locale })
   }, [locale, location])

   if (resume.available) {
      // A real anchor, so the download still works if the analytics call fails.
      return (
         <Button asChild variant={variant} size={size} className={cn('rounded-full', className)}>
            <a href={resume.href} download={resume.fileName} onClick={reportDownload}>
               {text}
               <CloudDownloadIcon className='size-4' aria-hidden />
            </a>
         </Button>
      )
   }

   // The button stays visible and explains itself instead of disappearing.
   return (
      <TooltipProvider delayDuration={150}>
         <Tooltip>
            <TooltipTrigger asChild>
               <span tabIndex={0} title={t('resume.coming_soon')} className='inline-flex rounded-full'>
                  <Button
                     disabled
                     aria-disabled
                     variant={variant}
                     size={size}
                     className={cn('rounded-full', className)}
                  >
                     {text}
                     <CloudDownloadIcon className='size-4' aria-hidden />
                  </Button>
               </span>
            </TooltipTrigger>
            <TooltipContent>{t('resume.coming_soon')}</TooltipContent>
         </Tooltip>
      </TooltipProvider>
   )
}
