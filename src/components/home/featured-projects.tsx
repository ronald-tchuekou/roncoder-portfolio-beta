import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link, LocaleType } from '@src/i18n/routing'
import { PROJECTS } from '@src/resources/data/projects'
import { ArrowRightIcon, ArrowUpRightIcon } from 'lucide-react'
import { getLocale, getTranslations } from 'next-intl/server'
import { Container } from '../container'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

/** Three cards only: the recruiter needs proof of work, not an exhaustive list. */
export const FeaturedProjects = async () => {
   const t = await getTranslations('home')
   const locale = (await getLocale()) as LocaleType

   const featured = PROJECTS.filter((project) => project.featured)
      .sort((a, b) => a.order - b.order)
      .slice(0, 3)

   if (featured.length === 0) return null

   return (
      <Container className='py-10'>
         <section className='flex flex-col gap-8'>
            <RevealFromBottom
               elt='h2'
               className={cn('scroll-m-20 text-2xl lg:text-3xl font-bold tracking-tight font-mono')}
            >
               {t('featured.title')}
            </RevealFromBottom>

            <ul className={cn('grid grid-cols-1 md:grid-cols-3 gap-5')}>
               {featured.map((project, index) => (
                  <li key={project.id} className='size-full'>
                     <RevealFromBottom delay={0.1 * index} className='size-full'>
                        <article
                           className={cn(
                              'flex size-full flex-col gap-4 rounded-xl border border-input bg-card p-5 lg:p-7',
                           )}
                        >
                           <div className='flex flex-col gap-1'>
                              <h3 className={cn('text-xl font-semibold tracking-tight font-serif')}>
                                 {project.title[locale]}
                              </h3>
                              <p className='text-sm text-primary'>{project.role[locale]}</p>
                           </div>

                           <ul className={cn('flex flex-wrap gap-2')}>
                              {project.tags.slice(0, 3).map((tag) => (
                                 <li
                                    key={tag}
                                    className={cn(
                                       'rounded-full border border-input bg-background',
                                       'px-3 py-1 text-xs text-muted-foreground',
                                    )}
                                 >
                                    {tag}
                                 </li>
                              ))}
                           </ul>

                           <p className='text-muted-foreground'>{project.result[locale]}</p>

                           <Link
                              href={`/projects/${project.id}`}
                              className={cn(
                                 'mt-auto inline-flex items-center gap-1 text-sm font-medium',
                                 'text-foreground underline underline-offset-4 hover:text-primary transition-colors',
                              )}
                           >
                              {t('featured.view_project')}
                              <ArrowUpRightIcon className='size-3.5' aria-hidden />
                           </Link>
                        </article>
                     </RevealFromBottom>
                  </li>
               ))}
            </ul>

            <RevealFromBottom delay={0.3}>
               <Button asChild variant='outline' className='rounded-full'>
                  <Link href='/projects'>
                     {t('featured.cta')}
                     <ArrowRightIcon className='size-4' aria-hidden />
                  </Link>
               </Button>
            </RevealFromBottom>
         </section>
      </Container>
   )
}
