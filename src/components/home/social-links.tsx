'use client'

import { Button } from '@src/components/ui/button'
import { cn } from '@src/lib/utils'
import { track } from '@vercel/analytics'
import { LinkedinIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FC, SVGProps } from 'react'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

export const SOCIAL_LINKS = {
   linkedin: 'https://www.linkedin.com/in/ronaldtchuekou',
   github: 'https://github.com/ronald-tchuekou',
   x: 'https://x.com/TchuekouRonald',
   youtube: 'https://youtube.com/@ronaldtchuekou',
} as const

export const GithubBrandIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
   <svg aria-hidden='true' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
         fill='currentColor'
         stroke='none'
         d='M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'
      />
   </svg>
)

const XBrandIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
   <svg aria-hidden='true' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
         fill='currentColor'
         stroke='none'
         d='M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z'
      />
   </svg>
)

const YoutubeBrandIcon: FC<SVGProps<SVGSVGElement>> = (props) => (
   <svg aria-hidden='true' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg' {...props}>
      <path
         fill='currentColor'
         stroke='none'
         d='M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z'
      />
   </svg>
)

/** Icon only social links. The raw URL is never displayed, the accessible name carries the network. */
export const SocialLinks: FC<{ className?: string }> = ({ className }) => {
   const t = useTranslations('common')

   const items = [
      {
         key: 'linkedin',
         href: SOCIAL_LINKS.linkedin,
         label: t('socials.linkedin'),
         icon: <LinkedinIcon className='size-5' aria-hidden />,
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
