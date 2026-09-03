'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from '@src/i18n/routing'
import { track } from '@vercel/analytics'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Container } from '../container'
import { RevealFromBottom } from '../motions/reveal-from-bottom'
import { ResumeDownloadButton } from './resume-download-button'

const EMAIL = 'ronaldtchuekou@gmail.com'

export const FinalCta: FC = () => {
   const t = useTranslations('home')

   return (
      <Container className='py-10'>
         <RevealFromBottom>
            <section
               className={cn(
                  'flex flex-col items-center gap-6 rounded-xl border border-input bg-card',
                  'px-5 py-10 lg:px-10 lg:py-14 text-center',
               )}
            >
               <h2 className={cn('scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight font-mono max-w-3xl')}>
                  {t('final_cta.title')}
               </h2>

               <div className='flex flex-wrap items-center justify-center gap-3'>
                  <Button asChild className='rounded-full'>
                     <Link href='/contact' onClick={() => track('cta_click', { location: 'final' })}>
                        {t('final_cta.contact')}
                     </Link>
                  </Button>
                  <ResumeDownloadButton location='final' label={t('final_cta.resume')} variant='outline' />
               </div>

               <p className='text-sm text-muted-foreground'>
                  {t('final_cta.direct')}{' '}
                  <a
                     href={`mailto:${EMAIL}`}
                     className='text-foreground underline underline-offset-4 hover:text-primary transition-colors'
                  >
                     {EMAIL}
                  </a>
               </p>
            </section>
         </RevealFromBottom>
      </Container>
   )
}
