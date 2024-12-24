import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { EDUCATIONS_LIST } from '@src/resources/data/educations'
import { METADATA } from '@src/resources/data/metadata'
import { DotIcon, MoveRightIcon } from "lucide-react";
import { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server'
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Mon parcours et certifications. | roncoder',
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
		<section className='w-full flex flex-col gap-5'>
			<RevealFromBottom elt={'h2'} className={cn('scroll-m-20 text-xl lg:text-3xl tracking-tight ', 'text-white')}>
				Mes Certifications
			</RevealFromBottom>
			<RevealFromBottom elt={'p'} delay={0.1}>
				Pour l’acquisition de nouvelle compétences, j’ai suivit plusieurs parcours et validé plusieurs
				certifications dont je vous partage quelques unes ci-dessous :
			</RevealFromBottom>
			<div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
				{EDUCATIONS_LIST.map((education, index) => (
					<RevealFromBottom key={education.id} delay={index * 0.1}>
						<div className={cn('bg-card border border-input', 'rounded-lg p-5 size-full', 'flex flex-col gap-3')}>
							<h3 className={cn('text-xl font-bold text-white')}>{education.title}</h3>
							<p className={cn('text-primary text-lg uppercase')}>{education.company}</p>
							<div className='flex items-center h-full'>
								<DotIcon className='size-8 text-primary' />
								<small className={cn('text-muted-foreground')}>{education.date}</small>
							</div>
							<div>
								<Link href={`/resume/educations/${education.id}`}>
									<Button variant={'outline'} size={'sm'} className={cn('text-xs', 'rounded-full')}>
										Consulter
										<MoveRightIcon className='size-5 ml-2' />
									</Button>
								</Link>
							</div>
						</div>
					</RevealFromBottom>
				))}
			</div>
		</section>
	)
}
