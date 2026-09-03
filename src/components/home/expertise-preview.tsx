import { cn } from '@/lib/utils'
import { Link } from '@src/i18n/routing'
import { ArrowUpRightIcon } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Container } from '../container'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

const ITEMS = ['web', 'mobile', 'design'] as const

/** Three areas of work, each one a door to the /expertises page. */
export const ExpertisePreview = async () => {
   const t = await getTranslations('home')

   return (
      <Container className='py-10'>
         <section className='flex flex-col gap-8'>
            <RevealFromBottom
               elt='h2'
               className={cn('scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight font-mono')}
            >
               {t('expertise.title')}
            </RevealFromBottom>

            <ul className={cn('grid grid-cols-1 md:grid-cols-3 gap-5')}>
               {ITEMS.map((key, index) => (
                  <li key={key} className='size-full'>
                     <RevealFromBottom delay={0.1 * index} className='size-full'>
                        <Link
                           href='/expertises'
                           className={cn(
                              'group flex size-full flex-col gap-3 rounded-xl border border-input bg-card p-5 lg:p-7',
                              'transition-colors hover:border-primary focus-visible:border-primary',
                           )}
                        >
                           <h3
                              className={cn(
                                 'text-xl font-semibold tracking-tight font-serif',
                                 'flex items-center gap-2',
                              )}
                           >
                              {t(`expertise.items.${key}.title`)}
                              <ArrowUpRightIcon
                                 aria-hidden
                                 className='size-4 text-muted-foreground transition-colors group-hover:text-primary'
                              />
                           </h3>
                           <p className='text-muted-foreground'>{t(`expertise.items.${key}.description`)}</p>
                        </Link>
                     </RevealFromBottom>
                  </li>
               ))}
            </ul>
         </section>
      </Container>
   )
}
