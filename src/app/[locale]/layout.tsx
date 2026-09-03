import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Footer } from '@src/components/footer'
import { Header } from '@src/components/header/header'
import { ThemeProvider } from '@src/components/providers/theme-provider'
import { LocaleType, routing } from '@src/i18n/routing'
import { fontMono, fontSans, fontSerif } from '@src/fonts'
import env from '@src/lib/env/client'
import { localizedAlternates } from '@src/lib/seo'
import { PersonJsonLd } from '@src/components/person-json-ld'
import { METADATA } from '@src/resources/data/metadata'
import '@src/styles/style.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { redirect } from 'next/navigation'

type Props = Readonly<{
   children: React.ReactNode
   params: Promise<{ locale: string }>
}>

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale as LocaleType
   const t = await getTranslations({ locale, namespace: 'home' })

   return {
      title: {
         default: t('page_title'),
         template: '%s | Ronald Tchuekou Portfolio',
      },
      description: t('page_description'),
      metadataBase: new URL(env.NEXT_PUBLIC_BASE_LINK),
      alternates: localizedAlternates(locale, '/'),
      openGraph: {
         type: 'profile',
         locale,
         siteName: 'Ronald Tchuekou',
         title: t('page_title'),
         description: t('page_description'),
      },
      ...METADATA,
      twitter: {
         card: 'summary_large_image',
         creator: '@TchuekouRonald',
         title: t('page_title'),
         description: t('page_description'),
      },
   }
}

export function generateStaticParams() {
   return routing.locales.map((locale) => ({ locale }))
}

export default async function RootLayout({ children, params }: Props) {
   const locale = (await params).locale

   // Ensure that the incoming `locale` is valid.
   if (!routing.locales.includes(locale as LocaleType)) redirect('/')

   // Enable static rendering
   setRequestLocale(locale)

   const messages = await getMessages()
   const t = await getTranslations({ locale, namespace: 'common' })

   return (
      <html
         lang={locale}
         className={cn(fontSans.variable, fontMono.variable, fontSerif.variable)}
         suppressHydrationWarning
      >
         <GoogleTagManager gtmId='GTM-5X42BXF9' />
         <body className={cn('min-h-screen antialiased font-sans')}>
            <ThemeProvider>
               <NextIntlClientProvider messages={messages}>
                  <a
                     href='#main-content'
                     className={cn(
                        'sr-only focus:not-sr-only',
                        'focus:fixed focus:z-50 focus:top-3 focus:left-3',
                        'focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground',
                     )}
                  >
                     {t('skip_to_content')}
                  </a>
                  <PersonJsonLd locale={locale as LocaleType} />
                  <Header />
                  <div id='main-content' tabIndex={-1} className='outline-none'>
                     {children}
                  </div>
                  <Footer />
                  <Toaster position='top-center' richColors duration={7000} />
                  <Analytics />
               </NextIntlClientProvider>
            </ThemeProvider>
         </body>
         <GoogleAnalytics gaId='G-WBPHPE8X6B' />
      </html>
   )
}
