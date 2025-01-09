import { Toaster } from '@/components/ui/sonner'
import { cn } from '@/lib/utils'
import { Header } from '@src/components/header/header'
import { QueryProvider } from '@src/components/providers/query-provider'
import { routing } from '@src/i18n/routing'
import { METADATA } from '@src/resources/data/metadata'
import '@src/styles/style.css'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server'
import { Barrio, JetBrains_Mono } from 'next/font/google'
import { redirect } from 'next/navigation'
import Script from 'next/script'

type Props = Readonly<{
	children: React.ReactNode
	params: Promise<{ locale: string }>
}>

const jetBrainsMonoFont = JetBrains_Mono({
	subsets: ['latin'],
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	variable: '--font-jet-brains-mono',
})

const barrioFont = Barrio({
	subsets: ['latin'],
	weight: ['400'],
	variable: '--font-barrio',
})

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const locale = (await params).locale
	const t = await getTranslations({ locale, namespace: 'home' })

	return {
		title: {
			default: t('page_title'),
			template: '%s | Ronald Tchuekou Portfolio',
		},
		description: t('page_description'),
		metadataBase: new URL(process.env.BASE_LINK || 'https://roncoder-beta.vercel.app'),
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
			'Ronald',
			'Tchuekou',
			'Ronald Tchuekou',
			'Portfolio',
			'Ronald Tchuekou Portfolio',
			'Web',
			'Mobile',
			'Front',
			'FrontEnd',
			'FullStack',
			'Full',
			'Next.js',
			'React',
			'JavaScript',
			'TypeScript',
			'Angular',
			'TailwindCSS',
			'Stripe',
			'Paddle',
			'BTCPay Sever',
			'Création de site web',
			"Développeur d'application web et mobile",
			'Web and mobile developer',
			'Web developer',
			'Développeur web',
			'Mobile developer',
			'Développeur mobile',
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
	if (!routing.locales.includes(locale as any)) redirect('/')

	// Enable static rendering
	setRequestLocale(locale)

	const messages = await getMessages()

	return (
      <html lang={locale}>
         <Script
            data-cmp-ab='1'
            src='https://cdn.consentmanager.net/delivery/autoblocking/6adaaa80527ba.js'
            data-cmp-host='b.delivery.consentmanager.net'
            data-cmp-cdn='cdn.consentmanager.net'
            data-cmp-codesrc='0'
         />
         <body className={cn('min-h-screen font-mono antialiased', jetBrainsMonoFont.variable, barrioFont.variable)}>
            <NextIntlClientProvider messages={messages}>
               <Header />
               <QueryProvider>{children}</QueryProvider>
               <Toaster />
               <Analytics />
            </NextIntlClientProvider>
         </body>
      </html>
   )
}
