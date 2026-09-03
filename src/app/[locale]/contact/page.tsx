import { cn } from '@src/lib/utils'
import { ContactForm } from '@src/components/contact/contact-form'
import { Container } from '@src/components/container'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import { Link, LocaleType } from '@src/i18n/routing'
import { localizedAlternates } from '@src/lib/seo'
import { METADATA } from '@src/resources/data/metadata'
import { Clock, FileText, Github, Languages, Linkedin, Mail } from 'lucide-react'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: string }>
}

const EMAIL = 'ronaldtchuekou@gmail.com'
const LINKEDIN_URL = 'https://www.linkedin.com/in/ronald-tchuekou'
const GITHUB_URL = 'https://github.com/ronald-tchuekou'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'contact' })

   return {
      title: t('page_title'),
      description: t('page_description'),
      alternates: localizedAlternates(locale, '/contact'),
      keywords: [
         'contact Ronald Tchuekou',
         'recruter Ronald Tchuekou',
         'hire Ronald Tchuekou',
         'Senior Frontend Engineer contact',
         'React Next.js React Native developer contact',
      ],
      twitter: {
         ...METADATA.twitter,
         title: t('page_title'),
         description: t('page_description'),
      },
   }
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale as LocaleType

   // Enable static rendering
   setRequestLocale(locale)

   const t = await getTranslations({ locale, namespace: 'contact' })

   const itemClassName = cn(
      'flex items-center gap-3 rounded-xl p-3 group transition duration-300',
      'hover:bg-accent/20',
   )
   const iconWrapperClassName = cn('flex justify-center items-center rounded-xl bg-accent/40 flex-none p-3')
   const iconClassName = cn('size-6 text-muted-foreground group-hover:text-primary transition duration-300')

   return (
      <main>
         <Container className={cn('grid grid-cols-1 md:grid-cols-12 gap-10 py-10 lg:py-20')}>
            <section className={cn('order-2 md:order-1 md:col-span-8')}>
               <RevealFromBottom className='w-full'>
                  <ContactForm />
               </RevealFromBottom>
            </section>
            <aside className={cn('order-1 md:order-2 md:col-span-4')}>
               <RevealFromBottom>
                  <div className={cn('w-full bg-card border border-input rounded-xl p-3 md:p-5 space-y-2')}>
                     <h2 className='px-3 pt-2 text-sm font-mono uppercase tracking-wide text-muted-foreground'>
                        {t('side_title')}
                     </h2>

                     {/* Email */}
                     <a href={`mailto:${EMAIL}`} aria-label={t('email_aria')} className={itemClassName}>
                        <span className={iconWrapperClassName}>
                           <Mail className={iconClassName} aria-hidden='true' />
                        </span>
                        <span>
                           <span className='block text-sm text-muted-foreground'>{t('email_label')}</span>
                           <span className='block break-all'>{EMAIL}</span>
                        </span>
                     </a>

                     {/* LinkedIn */}
                     <a
                        href={LINKEDIN_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={t('linkedin_aria')}
                        className={itemClassName}
                     >
                        <span className={iconWrapperClassName}>
                           <Linkedin className={iconClassName} aria-hidden='true' />
                        </span>
                        <span>
                           <span className='block text-sm text-muted-foreground'>{t('linkedin_label')}</span>
                           <span className='block break-all'>in/ronaldtchuekou</span>
                        </span>
                     </a>

                     {/* GitHub */}
                     <a
                        href={GITHUB_URL}
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label={t('github_aria')}
                        className={itemClassName}
                     >
                        <span className={iconWrapperClassName}>
                           <Github className={iconClassName} aria-hidden='true' />
                        </span>
                        <span>
                           <span className='block text-sm text-muted-foreground'>{t('github_label')}</span>
                           <span className='block break-all'>ronald-tchuekou</span>
                        </span>
                     </a>

                     {/* Time zone */}
                     <div className={cn(itemClassName, 'hover:bg-transparent')}>
                        <span className={iconWrapperClassName}>
                           <Clock className='size-6 text-muted-foreground' aria-hidden='true' />
                        </span>
                        <span>
                           <span className='block text-sm text-muted-foreground'>{t('timezone_label')}</span>
                           <span className='block'>{t('timezone_value')}</span>
                        </span>
                     </div>

                     {/* Reply languages */}
                     <div className={cn(itemClassName, 'hover:bg-transparent')}>
                        <span className={iconWrapperClassName}>
                           <Languages className='size-6 text-muted-foreground' aria-hidden='true' />
                        </span>
                        <span>{t('reply_languages')}</span>
                     </div>

                     {/* Resume reminder */}
                     <Link href='/resume' aria-label={t('resume_link_aria')} className={itemClassName}>
                        <span className={iconWrapperClassName}>
                           <FileText className={iconClassName} aria-hidden='true' />
                        </span>
                        <span>
                           <span className='block'>{t('resume_reminder')}</span>
                           <span className='block text-sm text-primary'>{t('resume_link_label')}</span>
                        </span>
                     </Link>
                  </div>
               </RevealFromBottom>
            </aside>
         </Container>
      </main>
   )
}
