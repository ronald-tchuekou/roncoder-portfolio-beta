'use client'

import { cn } from '@/lib/utils'
import { Link } from '@src/i18n/routing'
import { NAV_LINKS } from '@src/resources/data/nav-links'
import { isCurrentPath } from '@src/resources/util-functions'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import { Container } from '../container'
import ThemeToggle from '../theme-toggle'
import { LocaleButton } from './locale-button'
import { PhoneNavVersion } from './phone-version'

export const Header: FC = () => {
   const t = useTranslations('header')
   const path = usePathname()
   const locale = useLocale()

   return (
      <Container rootClassName={cn('z-10', 'sticky top-0 backdrop-blur bg-transparent')}>
         <header className={cn('flex justify-between items-center', 'pt-5 pb-3 lg:pb-0')}>
            <Link href={'/'} arial-label='Ronald Tchuekou'>
               <Image
                  priority
                  quality={100}
                  src={'/line-logo.png'}
                  alt='Ronald Tchuekou portfolio'
                  height={232}
                  width={692}
                  className={cn('w-20 lg:w-32 h-auto aspect-auto')}
               />
            </Link>
            <nav className={cn('flex items-center gap-0')}>
               <ul className={cn('hidden md:flex')}>
                  {NAV_LINKS.map(({ url, label }) => (
                     <li key={url}>
                        <Link
                           className={cn('nav-link', isCurrentPath(path, url, locale === 'en') && 'active')}
                           href={url}
                        >
                           <span className='nav-link-label'>{t(label)}</span>
                           <span className={'nav-link-indicator'}></span>
                        </Link>
                     </li>
                  ))}
               </ul>
               <div className={cn('flex items-center gap-3')}>
                  <ThemeToggle />
                  <LocaleButton />
                  <PhoneNavVersion currentPath={path} />
               </div>
            </nav>
         </header>
      </Container>
   )
}
