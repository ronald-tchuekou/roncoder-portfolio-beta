import { cn } from '@/lib/utils'
import { Link, LocaleType } from '@src/i18n/routing'
import { PROJECTS } from '@src/resources/data/projects'
import { Expertise } from '@src/resources/util-types'
import { ArrowUpRightIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { FC } from 'react'

export type ExpertiseItemProps = {
   item: Expertise
}

/** Fallback label when the project id is not (yet) present in the projects data. */
const humanizeId = (id: string) =>
   id
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')

export const ExpertiseItem: FC<ExpertiseItemProps> = ({ item }) => {
   const t = useTranslations('expertises')
   const locale = useLocale() as LocaleType

   return (
      <article className={cn('bg-card rounded-xl border border-input', 'p-5 lg:p-7 size-full', 'flex flex-col gap-5')}>
         <div className={cn('flex items-baseline gap-3')}>
            <span className={cn('font-mono text-sm text-muted-foreground tabular-nums')}>{item.id}</span>
            <h2 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', 'text-foreground font-serif')}>
               {item.title[locale]}
            </h2>
         </div>

         <p className='text-muted-foreground'>{item.summary[locale]}</p>

         <ul className={cn('flex flex-col gap-2')}>
            {item.highlights.map((highlight) => (
               <li key={highlight.en} className={cn('flex gap-3 text-sm text-foreground/90')}>
                  <span aria-hidden className={cn('mt-2 size-1.5 shrink-0 rounded-full bg-primary')} />
                  <span>{highlight[locale]}</span>
               </li>
            ))}
         </ul>

         <div className={cn('mt-auto flex flex-col gap-3')}>
            <h3 className={cn('text-xs font-medium uppercase tracking-wider text-muted-foreground')}>
               {t('stack_label')}
            </h3>
            <ul className={cn('flex flex-wrap gap-2')}>
               {item.stack.map((tech) => (
                  <li
                     key={tech}
                     className={cn(
                        'rounded-full border border-input bg-background',
                        'px-3 py-1 text-xs text-muted-foreground'
                     )}
                  >
                     {tech}
                  </li>
               ))}
            </ul>
         </div>

         <div className={cn('flex flex-col gap-3')}>
            <h3 className={cn('text-xs font-medium uppercase tracking-wider text-muted-foreground')}>
               {t('projects_label')}
            </h3>
            <ul className={cn('flex flex-wrap gap-x-4 gap-y-2')}>
               {item.projects.map((projectId) => {
                  const project = PROJECTS.find((one) => one.id === projectId)
                  return (
                     <li key={projectId}>
                        <Link
                           href={`/projects/${projectId}`}
                           className={cn(
                              'inline-flex items-center gap-1 text-sm font-medium',
                              'text-foreground underline underline-offset-4',
                              'hover:text-primary transition-colors'
                           )}
                        >
                           {project?.title[locale] ?? humanizeId(projectId)}
                           <ArrowUpRightIcon className='size-3.5' aria-hidden />
                        </Link>
                     </li>
                  )
               })}
            </ul>
         </div>
      </article>
   )
}
