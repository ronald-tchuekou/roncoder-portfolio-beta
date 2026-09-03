'use client'

import { Button } from '@src/components/ui/button'
import { cn } from '@src/lib/utils'
import { Link } from '@src/i18n/routing'
import { track } from '@vercel/analytics'
import { ArrowRightIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { RevealFromBottom } from '../motions/reveal-from-bottom'
import { ResumeDownloadButton } from './resume-download-button'
import { SocialLinks } from './social-links'

export const InfoSection: FC = () => {
   const t = useTranslations('home')

   return (
      <section
         className={cn(
            'order-2 md:order-1',
            'flex flex-col gap-5 items-center md:items-start justify-center',
            'text-center md:text-left',
         )}
      >
         <RevealFromBottom elt='p' className='text-sm font-medium uppercase tracking-wider text-primary'>
            {t('hero.role')}
         </RevealFromBottom>

         <RevealFromBottom elt='p' delay={0.1} className='text-muted-foreground'>
            {t('hero.hi_is')} <span className='font-medium text-foreground'>Ronald Tchuekou</span>
         </RevealFromBottom>

         <RevealFromBottom
            elt='h1'
            delay={0.2}
            className={cn('scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-5xl font-mono')}
         >
            {t('hero.headline')}
         </RevealFromBottom>

         <RevealFromBottom elt='p' delay={0.3} className='text-base text-muted-foreground max-w-2xl'>
            {t('hero.subheadline')}
         </RevealFromBottom>

         <RevealFromBottom
            delay={0.35}
            className={cn(
               'flex items-start gap-3 text-sm text-foreground/90 max-w-2xl',
               'justify-center md:justify-start',
            )}
         >
            <span aria-hidden className='mt-1.5 size-2.5 shrink-0 rounded-full bg-green-500' />
            <span>{t('hero.availability')}</span>
         </RevealFromBottom>

         <RevealFromBottom delay={0.4} className='flex flex-wrap gap-3 justify-center md:justify-start'>
            <ResumeDownloadButton location='hero' label={t('hero.cta_primary')} />
            <Button asChild variant='outline' className='rounded-full'>
               <Link href='/resume' onClick={() => track('cta_click', { location: 'hero' })}>
                  {t('hero.cta_secondary')}
                  <ArrowRightIcon className='size-4' aria-hidden />
               </Link>
            </Button>
         </RevealFromBottom>

         <SocialLinks className='justify-center md:justify-start' />
      </section>
   )
}
