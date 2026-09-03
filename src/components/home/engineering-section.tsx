import { cn } from '@/lib/utils'
import { getTranslations } from 'next-intl/server'
import { Container } from '../container'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

const ITEMS = ['design', 'code', 'delivery', 'quality'] as const

/** How the work gets done. For a technical recruiter this weighs as much as the stack. */
export const EngineeringSection = async () => {
   const t = await getTranslations('home')

   return (
      <Container className='py-10'>
         <section className='flex flex-col gap-8'>
            <RevealFromBottom
               elt='h2'
               className={cn('scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight font-mono')}
            >
               {t('engineering.title')}
            </RevealFromBottom>

            <ul className={cn('grid grid-cols-1 md:grid-cols-2 gap-5')}>
               {ITEMS.map((key, index) => (
                  <li key={key} className='size-full'>
                     <RevealFromBottom
                        delay={0.1 * index}
                        className={cn('flex size-full gap-4 rounded-xl border border-input bg-card p-5 lg:p-6')}
                     >
                        <span aria-hidden className='mt-2 size-2 shrink-0 rounded-full bg-primary' />
                        <p className='text-muted-foreground'>
                           <strong className='font-semibold text-foreground'>
                              {t(`engineering.items.${key}.title`)}
                           </strong>{' '}
                           {t(`engineering.items.${key}.description`)}
                        </p>
                     </RevealFromBottom>
                  </li>
               ))}
            </ul>
         </section>
      </Container>
   )
}
