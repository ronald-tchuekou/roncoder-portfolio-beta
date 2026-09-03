'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link } from '@src/i18n/routing'
import { track } from '@vercel/analytics'
import { ArrowRightIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Container } from '../container'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

const ROWS = ['roles', 'contract', 'mode', 'environment'] as const

/** Short and direct: this is the information the recruiter came for. */
export const LookingForSection: FC = () => {
   const t = useTranslations('home')

   return (
      <Container className='py-10'>
         <section className='flex flex-col gap-8'>
            <RevealFromBottom
               elt='h2'
               className={cn('scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight font-mono')}
            >
               {t('looking_for.title')}
            </RevealFromBottom>

            <dl className={cn('rounded-xl border border-input bg-card divide-y divide-input')}>
               {ROWS.map((key) => (
                  <div key={key} className={cn('grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-5 p-5')}>
                     <dt className={cn('text-xs font-medium uppercase tracking-wider text-muted-foreground sm:pt-1')}>
                        {t(`looking_for.rows.${key}.label`)}
                     </dt>
                     <dd className='text-foreground'>{t(`looking_for.rows.${key}.value`)}</dd>
                  </div>
               ))}
            </dl>

            <RevealFromBottom>
               <Button asChild className='rounded-full'>
                  <Link href='/contact' onClick={() => track('cta_click', { location: 'looking_for' })}>
                     {t('looking_for.cta')}
                     <ArrowRightIcon className='size-4' aria-hidden />
                  </Link>
               </Button>
            </RevealFromBottom>
         </section>
      </Container>
   )
}
