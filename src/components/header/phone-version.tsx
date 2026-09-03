'use client'

import { Button } from '@src/components/ui/button'
import { cn } from '@src/lib/utils'
import { Link } from '@src/i18n/routing'
import { NAV_LINKS } from '@src/resources/data/nav-links'
import { isCurrentPath } from '@src/resources/util-functions'
import { MenuIcon, XIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC, useCallback, useState } from 'react'
import { Container } from '../container'
import { LocaleButton } from './locale-button'

export const PhoneNavVersion: FC<{ currentPath: string }> = ({ currentPath }) => {
   const [isOpen, setIsOpen] = useState(false)
   const locale = useLocale()
   const t = useTranslations('header')

   const toggleMenu = useCallback(() => {
      setIsOpen((prev) => !prev)
   }, [])

   return (
      <>
         <Button
            onClick={toggleMenu}
            size={'icon'}
            variant={'outline'}
            className='rounded-full md:hidden'
            aria-label={t('open_menu')}
            aria-expanded={isOpen}
         >
            <MenuIcon className='size-6' aria-hidden='true' />
         </Button>
         {isOpen && (
            <section className={cn('mobile-menu fixed top-0 left-0 right-0 z-50', 'bg-card')}>
               <Container className={cn('flex justify-between items-center', 'pt-5 pb-3')}>
                  <Link href={'/'} aria-label='Ronald Tchuekou'>
                     <Image
                        priority
                        src={'/line-logo.png'}
                        alt='Ronald Tchuekou'
                        height={232}
                        width={692}
                        className={cn('w-20 lg:w-32 h-auto aspect-auto')}
                     />
                  </Link>
                  <div className={cn('flex items-center gap-3')}>
                     <LocaleButton />
                     <Button
                        onClick={toggleMenu}
                        size={'icon'}
                        variant={'outline'}
                        className='rounded-full'
                        aria-label={t('close_menu')}
                     >
                        <XIcon className='size-6' aria-hidden='true' />
                     </Button>
                  </div>
               </Container>
               <nav className={cn('flex flex-col items-center')}>
                  {NAV_LINKS.map(({ url, label }, index) => (
                     <div className='mobile-menu-item' key={url} style={{ animationDelay: `${index * 0.06}s` }}>
                        <Link
                           href={url}
                           onClick={toggleMenu}
                           className={cn('nav-link', isCurrentPath(currentPath, url, locale === 'en') && 'active')}
                        >
                           <span className='nav-link-label'>{t(label)}</span>
                           <span className={'nav-link-indicator'}></span>
                        </Link>
                     </div>
                  ))}
               </nav>
            </section>
         )}
      </>
   )
}
