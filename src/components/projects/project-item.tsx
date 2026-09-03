'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { Link, LocaleType } from '@src/i18n/routing'
import { isAppStoreLink, isGooglePlayLink, previewableLink } from '@src/resources/data/projects'
import { Project } from '@src/resources/util-types'
import { LockIcon, MoveRightIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC } from 'react'
import { ProjectTags } from './project-tags'

export type ProjectItemProps = { item: Project; locale: LocaleType; priority?: boolean }

export const ProjectItem: FC<ProjectItemProps> = ({ item, locale, priority = false }) => {
   const t = useTranslations('projects')

   const appStore = item.links.find((link) => isAppStoreLink(link.link))
   const googlePlay = item.links.find((link) => isGooglePlayLink(link.link))
   const preview = previewableLink(item)

   return (
      <article className={cn('bg-card rounded-xl border border-input', 'size-full', 'flex flex-col gap-5')}>
         <div className={cn('w-full h-auto aspect-video', 'rounded-t-xl', 'bg-secondary/10')}>
            <Image
               priority={priority}
               src={item.image}
               alt={t('cover_alt', { title: item.title[locale] })}
               width={1280}
               height={720}
               sizes='(min-width: 768px) 50vw, 100vw'
               className={cn('w-full aspect-video object-cover', 'rounded-t-xl')}
            />
         </div>
         <div className={cn('size-full px-5 pb-5 flex flex-col gap-5')}>
            <div>
               <h2 className={cn('scroll-m-20 text-2xl font-normal tracking-tight', 'text-foreground font-mono')}>
                  {item.title[locale]}
               </h2>
               <p className='text-primary uppercase font-serif font-semibold'>{item.role[locale]}</p>
               <p className='text-muted-foreground text-sm'>{item.context[locale]}</p>
            </div>
            <ProjectTags tags={item.tags} />
            <p className='line-clamp-3 flex-none'>{item.result[locale]}</p>
            <div className='h-full flex flex-wrap items-end gap-3'>
               <Button variant={'outline'} className={cn('rounded-full flex-1 min-w-[10rem]')} asChild>
                  <Link href={`/projects/${item.id}`}>
                     {t('view_more')}
                     <MoveRightIcon className='ml-3 size-4' />
                  </Link>
               </Button>

               {item.platform === 'web' &&
                  (preview ? (
                     <Button className={cn('rounded-full flex-1 min-w-[10rem]')} asChild>
                        <Link href={`/projects/preview/${item.id}`}>
                           {t('consult')}
                           <MoveRightIcon className='ml-3 size-4' />
                        </Link>
                     </Button>
                  ) : (
                     <p className='flex-1 min-w-[10rem] text-sm text-muted-foreground'>{t('link_on_request')}</p>
                  ))}

               {item.platform === 'mobile' && (
                  <>
                     {appStore && (
                        <Button className={cn('rounded-full flex-1 min-w-[9rem]')} asChild>
                           <a href={appStore.link} target='_blank' rel='noopener noreferrer'>
                              {t('app_store')}
                           </a>
                        </Button>
                     )}
                     {googlePlay && (
                        <Button variant={'secondary'} className={cn('rounded-full flex-1 min-w-[9rem]')} asChild>
                           <a href={googlePlay.link} target='_blank' rel='noopener noreferrer'>
                              {t('google_play')}
                           </a>
                        </Button>
                     )}
                  </>
               )}

               {item.platform === 'confidential' && (
                  <p className='flex-1 min-w-[10rem] flex items-center gap-2 text-sm text-muted-foreground'>
                     <LockIcon className='size-4 flex-none' />
                     {t('under_nda')}
                  </p>
               )}
            </div>
         </div>
      </article>
   )
}
