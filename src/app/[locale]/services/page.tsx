import { ServicesList } from "@src/components/services/services-list";
import { METADATA } from '@src/resources/data/metadata'
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
	title: "Les services que j'offres. | roncoder",
	description:
		'Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.',
	...METADATA,
};


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
