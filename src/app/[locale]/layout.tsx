import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google'
import { Header } from '@src/components/header/header'
import { QueryProvider } from '@src/components/providers/query-provider'
import { ThemeProvider } from '@src/components/providers/theme-provider'
import { LocaleType, routing } from '@src/i18n/routing'
import env from '@src/lib/env/client'
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
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'home' })

   return {
      title: {
         default: t('page_title'),
         template: '%s | Ronald Tchuekou Portfolio',
      },
      description: t('page_description'),
      metadataBase: new URL(env.NEXT_PUBLIC_BASE_LINK),
      alternates: {
         canonical: '/',
         languages: {
            'en-US': '/en-US',
            'fr-FR': '/fr-FR',
         },
      },
      openGraph: {
         images: ['/ronald-tchuekou-profile.jpg'],
      },
      keywords: [
         'roncoder',
         'roncoder portfolio',
         'portfolio roncoder',
         'Ronald',
         'Tchuekou',
         'Ronald Tchuekou',
         'Tchuekou Ronald',
         'Ronald Tchuekou Portfolio',
         'Portfolio Ronald',
         'Ronald Portfolio',
         'BTCPay Sever',
         'Création de site web',
         "Développeur d'application web et mobile",
         'Web and mobile developer',
         'Web developer',
         'Développeur web',
         'Mobile developer',
         'Recherche développeur mobile expérimenté',
      ],
      ...METADATA,
      twitter: {
         ...METADATA.twitter,
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

   return (
      <html lang={locale}>
         <GoogleTagManager gtmId='GTM-5X42BXF9' />
         <body className={cn('min-h-screen antialiased font-sans')}>
            <ThemeProvider>
               <NextIntlClientProvider messages={messages}>
                  <Header />
                  <QueryProvider>{children}</QueryProvider>
                  <Toaster position='top-center' richColors duration={7000} />
                  <Analytics />
               </NextIntlClientProvider>
            </ThemeProvider>
         </body>
         <GoogleAnalytics gaId='G-WBPHPE8X6B' />
      </html>
   )
}
