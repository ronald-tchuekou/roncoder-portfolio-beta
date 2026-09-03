'use client'

import { Button } from '@src/components/ui/button'
import { cn } from '@src/lib/utils'
import { GithubBrandIcon, LinkedinBrandIcon, XBrandIcon, YoutubeBrandIcon } from '@src/components/icons/brand-icons'
import { track } from '@vercel/analytics'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

export const SOCIAL_LINKS = {
   linkedin: 'https://www.linkedin.com/in/ronald-tchuekou',
   github: 'https://github.com/ronald-tchuekou',
   x: 'https://x.com/TchuekouRonald',
   youtube: 'https://youtube.com/@ronaldtchuekou',
} as const

/** Icon only social links. The raw URL is never displayed, the accessible name carries the network. */
export const SocialLinks: FC<{ className?: string }> = ({ className }) => {
   const t = useTranslations('common')

   const items = [
      {
         key: 'linkedin',
         href: SOCIAL_LINKS.linkedin,
         label: t('socials.linkedin'),
         icon: <LinkedinBrandIcon className='size-5' />,
         event: 'linkedin_click' as const,
      },
      {
         key: 'github',
         href: SOCIAL_LINKS.github,
         label: t('socials.github'),
         icon: <GithubBrandIcon className='size-5' />,
         event: 'github_click' as const,
      },
      { key: 'x', href: SOCIAL_LINKS.x, label: t('socials.x'), icon: <XBrandIcon className='size-5' /> },
      {
         key: 'youtube',
         href: SOCIAL_LINKS.youtube,
         label: t('socials.youtube'),
         icon: <YoutubeBrandIcon className='size-5' />,
      },
   ]

   return (
      <div className={cn('flex gap-3', className)}>
         {items.map((item, index) => (
            <RevealFromBottom key={item.key}>
               <Button asChild size='icon' variant='outline' className='border-primary rounded-full text-primary'>
                  <a
                     href={item.href}
                     target='_blank'
                     rel='noopener noreferrer'
                     aria-label={item.label}
                     title={item.label}
                     onClick={() => {
                        if (item.event) track(item.event)
                     }}
                  >
                     {item.icon}
                  </a>
               </Button>
            </RevealFromBottom>
         ))}
      </div>
   )
}
