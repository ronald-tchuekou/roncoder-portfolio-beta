import { cn } from "@/lib/utils";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { INFORMATIONS } from '@src/resources/data/informations'
import { METADATA } from '@src/resources/data/metadata'
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link'

export const metadata: Metadata = {
	title: 'A propos de Ronald Tchuekou. | roncoder',
	description:
		'Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.',
	...METADATA,
}


type Props = {
	params: Promise<{ locale: string; project_id: string }>
}

export default async function Page({ params }: Props) {
	const locale = (await params).locale

	// Enable static rendering
	setRequestLocale(locale)

	return (
		<section className='w-full flex flex-col gap-5'>
			<RevealFromBottom elt={'h2'} className={cn('scroll-m-20 text-xl lg:text-3xl tracking-tight ', 'text-white')}>
				Mes informations
			</RevealFromBottom>
			<RevealFromBottom elt={'p'} delay={0.1}>
				Durant les 4 ans d’expériences, j’ai appris plusieurs langages, technologies et concepts dont je vous
				présente quelque une ci-dessous:
			</RevealFromBottom>
			<div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
				{INFORMATIONS.map((information, index) => (
					<RevealFromBottom
						key={information.id}
						delay={index * 0.1}
						className={cn(information.isLong && 'lg:col-span-2', 'flex gap-3')}
					>
						<p className='text-muted-foreground text-sm flex-none'>{information.label}</p>
						{information.link ? (
							<Link
								href={information.link}
								target='_blank'
								className='block text-base font-semibold w-full truncate text-primary'
							>
								{information.value}
							</Link>
						) : (
							<p className='text-base font-semibold text-foreground w-full truncate'>{information.value}</p>
						)}
					</RevealFromBottom>
				))}
			</div>
			<img
				src={
					'https://github-readme-stats.vercel.app/api?username=ronald-tchuekou&show_icons=true&locale=en&theme=algolia'
				}
				alt='ronald-tchuekou'
				className='mt-8'
			/>
		</section>
	)
}
