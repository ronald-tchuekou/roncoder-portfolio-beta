'use client'

import { cn } from '@src/lib/utils'
import { Link } from '@src/i18n/routing'
import { NAV_LINKS } from '@src/resources/data/nav-links'
import { track } from '@vercel/analytics'
import { LinkedinIcon, MailIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { FC } from 'react'
import { Container } from './container'
import { ResumeDownloadButton } from './home/resume-download-button'
import { GithubBrandIcon, SOCIAL_LINKS } from './home/social-links'

const EMAIL = 'ronaldtchuekou@gmail.com'

const externalLinkClass = cn(
   'inline-flex items-center gap-2 text-sm text-muted-foreground',
   'hover:text-primary transition-colors',
)

export const Footer: FC = () => {
   const t = useTranslations('common')
   const tHeader = useTranslations('header')
   // Passed as a string so that the ICU formatter does not group the digits (2 026).
   const year = String(new Date().getFullYear())

   return (
      <footer className='border-t border-input mt-10'>
         <Container className='py-10'>
            <div className={cn('grid grid-cols-1 md:grid-cols-3 gap-8')}>
               {/* Identity */}
               <div className='flex flex-col gap-2'>
                  <p className='text-lg font-semibold font-mono'>Ronald Tchuekou</p>
                  <p className='text-sm text-primary'>{t('footer.role')}</p>
                  <p className='text-sm text-muted-foreground'>{t('footer.location')}</p>
               </div>

               {/* Navigation */}
               <nav className='flex flex-col gap-3' aria-label={t('footer.nav_title')}>
                  <h2 className={cn('text-xs font-medium uppercase tracking-wider text-muted-foreground')}>
                     {t('footer.nav_title')}
                  </h2>
                  <ul className='flex flex-col gap-2'>
                     {NAV_LINKS.map(({ url, label }) => (
                        <li key={url}>
                           <Link
                              href={url}
                              className={cn('text-sm text-muted-foreground hover:text-primary transition-colors')}
                           >
                              {tHeader(label)}
                           </Link>
                        </li>
                     ))}
                  </ul>
               </nav>

               {/* Contact */}
               <div className='flex flex-col gap-3'>
                  <h2 className={cn('text-xs font-medium uppercase tracking-wider text-muted-foreground')}>
                     {t('footer.contact_title')}
                  </h2>
                  <a
                     href={`mailto:${EMAIL}`}
                     className={externalLinkClass}
                     onClick={() => track('cta_click', { location: 'footer' })}
                  >
                     <MailIcon className='size-4' aria-hidden />
                     {EMAIL}
                  </a>
                  <a
                     href={SOCIAL_LINKS.linkedin}
                     target='_blank'
                     rel='noopener noreferrer'
                     aria-label={t('socials.linkedin')}
                     className={externalLinkClass}
                     onClick={() => track('linkedin_click')}
                  >
                     <LinkedinIcon className='size-4' aria-hidden />
                     {t('socials.linkedin')}
                  </a>
                  <a
                     href={SOCIAL_LINKS.github}
                     target='_blank'
                     rel='noopener noreferrer'
                     aria-label={t('socials.github')}
                     className={externalLinkClass}
                     onClick={() => track('github_click')}
                  >
                     <GithubBrandIcon className='size-4' />
                     {t('socials.github')}
                  </a>
                  <ResumeDownloadButton location='footer' variant='outline' size='sm' className='mt-1 self-start' />
               </div>
            </div>

            <div
               className={cn(
                  'mt-8 pt-6 border-t border-input',
                  'flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3',
               )}
            >
               <p className='text-sm text-muted-foreground'>{t('footer.copyright', { year })}</p>
               <Link href='/legal' className={cn('text-sm text-muted-foreground hover:text-primary transition-colors')}>
                  {t('footer.legal')}
               </Link>
            </div>
         </Container>
      </footer>
   )
}
