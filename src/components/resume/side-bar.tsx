'use client'

import { Button } from '@src/components/ui/button'
import { cn } from '@src/lib/utils'
import { Link } from '@src/i18n/routing'
import { RESUME_NAV_LINKS } from '@src/resources/data/resume-nav-links'
import { isCurrentPath } from '@src/resources/util-functions'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { FC, useEffect, useRef } from 'react'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

export const ResumeSideBar: FC = () => {
   const locale = useLocale()
   const t = useTranslations('resume')
   const path = usePathname()
   const mobileNavRef = useRef<HTMLUListElement>(null)

   const isActive = (url: string) => isCurrentPath(path, url, locale === 'en', 2)

   // Keep the active tab in view on phones when navigating between resume sections.
   useEffect(() => {
      const active = mobileNavRef.current?.querySelector<HTMLElement>('[aria-current="page"]')
      active?.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' })
   }, [path])

   const navButtonClass = (active: boolean) =>
      cn(
         'w-full justify-start transition duration-300',
         'bg-accent text-accent-foreground hover:bg-accent/80',
         active && 'bg-primary text-primary-foreground hover:bg-primary/90 hover:text-primary-foreground',
      )

   return (
      <aside className={cn('w-full flex flex-col gap-5')}>
         <RevealFromBottom
            elt={'h1'}
            className={cn('scroll-m-20 text-4xl lg:text-5xl', 'text-foreground font-mono tracking-tight')}
         >
            {t('my_background')}
         </RevealFromBottom>
         <RevealFromBottom elt={'p'}>{t('my_background_intro')}</RevealFromBottom>

         {/* Desktop: vertical list */}
         <nav aria-label={t('my_background')} className='hidden md:block'>
            <ul className={cn('w-full flex flex-col gap-3')}>
               {RESUME_NAV_LINKS.map((item, index) => (
                  <RevealFromBottom elt={'li'} key={item.url}>
                     <Button asChild variant={'default'} className={navButtonClass(isActive(item.url))}>
                        <Link href={item.url} aria-current={isActive(item.url) ? 'page' : undefined}>
                           {item.icon}&nbsp;&nbsp;
                           {t(item.label)}
                        </Link>
                     </Button>
                  </RevealFromBottom>
               ))}
            </ul>
         </nav>

         {/* Mobile: horizontally scrollable tabs (CSS scroll-snap, no carousel library) */}
         <nav aria-label={t('my_background')} className='md:hidden -mx-4 px-4'>
            <ul
               ref={mobileNavRef}
               className={cn('flex gap-3 overflow-x-auto snap-x snap-mandatory pb-2', '[scrollbar-width:none]')}
            >
               {RESUME_NAV_LINKS.map((item) => (
                  <li key={item.url} className='snap-center flex-none'>
                     <Button asChild variant={'default'} size='sm' className={navButtonClass(isActive(item.url))}>
                        <Link href={item.url} aria-current={isActive(item.url) ? 'page' : undefined}>
                           {item.icon}&nbsp;&nbsp;
                           {t(item.label)}
                        </Link>
                     </Button>
                  </li>
               ))}
            </ul>
         </nav>
      </aside>
   )
}
