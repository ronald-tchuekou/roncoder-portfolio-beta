import { ServicesList } from '@src/components/services/services-list'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const locale = (await params).locale
	const t = await getTranslations({ locale, namespace: 'services' })

	return {
		title: t('page_title'),
		description: t('page_description'),
		keywords: [
			'Application web',
			"Création d'une application web et mobile",
			'Développeur web',
			"Intégration d'outils de paiement",
			"Création d'api REST",
			'UX/UI Designer',
			"Création d'un SaaS",
			'Web application',
			'Creating a web and mobile application',
			'Web developer',
			'Payment integration tools',
			'Creating REST API',
			'UX/UI Designer',
			'Creating a SaaS',
		],
		twitter: {
			title: t('page_title'),
			description: t('page_description'),
		},
	}
}

type Props = {
	params: Promise<{ locale: string; project_id: string }>
}

export default async function Page({ params }: Props) {
	const locale = (await params).locale

	// Enable static rendering
	setRequestLocale(locale)

	return (
		<main>
			<ServicesList />
		</main>
	)
}
