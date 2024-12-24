import { cn } from "@/lib/utils";
import { Container } from "@src/components/container";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { ProjectItem } from "@src/components/projects/project-item";
import { METADATA } from '@src/resources/data/metadata'
import { PROJECTS } from '@src/resources/data/projects'
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server'

export const metadata: Metadata = {
	title: 'Quelques une me mes réalisations. | roncoder',
	description:
		'Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.',
	...METADATA,
};

type Props = {
	params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
	const locale = (await params).locale

	// Enable static rendering
	setRequestLocale(locale)

	return (
		<main>
			<Container className={cn('grid grid-cols-1 md:grid-cols-2 gap-10 py-10 lg:py-20')}>
				{PROJECTS.map((item, index) => (
					<RevealFromBottom delay={index * 0.1} key={item.id}>
						<ProjectItem item={item} />
					</RevealFromBottom>
				))}
			</Container>
		</main>
	)
}
