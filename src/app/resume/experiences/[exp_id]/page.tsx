import { cn } from "@/lib/utils";
import { BackButton } from "@src/components/back-button";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { EXPERIENCES_LIST, METADATA } from '@src/resources/util-data';
import { DotIcon } from 'lucide-react';
import { Metadata, ResolvingMetadata } from 'next';

type Props = {
	params: { exp_id: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
	// fetch data
	const exp = EXPERIENCES_LIST.find((exp) => exp.id === params.exp_id);

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: exp?.title,
		description: exp?.description,
		openGraph: {
			images: [exp?.imageLink ?? ''],
		},
		...METADATA,
	};
}

export default function ExperienceDetails({ params }: Props) {
	const experience = EXPERIENCES_LIST.find((exp) => exp.id === params.exp_id);

	return (
		<section className='w-full flex flex-col gap-5'>
			<div className={cn('flex gap-3 items-center')}>
				<BackButton />
				<RevealFromBottom
					delay={0.1}
					elt={'h2'}
					className={cn('scroll-m-20 text-xl lg:text-3xl tracking-tight ', 'text-white')}
				>
					{experience?.title || "Détails sur l'expérience"}
				</RevealFromBottom>
			</div>
			<RevealFromBottom delay={0.2} className={cn('flex')}>
				<p className={cn('text-primary text-lg uppercase')}>{experience?.company}</p>
				<div className='flex items-center h-full'>
					<DotIcon className='size-8 text-primary' />
					<small className={cn('text-muted-foreground')}>{experience?.date}</small>
				</div>
			</RevealFromBottom>
			<RevealFromBottom elt={'p'} delay={0.2} className={cn('')}>
				{experience?.description}
			</RevealFromBottom>
			<RevealFromBottom elt={'h3'} delay={0.3} className={cn('text-lg text-accent-foreground')}>
				Tâches
			</RevealFromBottom>
			<ul className={cn('list-disc pl-8 space-y-3')}>
				{experience?.tasks.map((task, idx) => (
					<RevealFromBottom delay={(idx + 1) * 0.1} elt={'li'} key={idx}>
						{task}
					</RevealFromBottom>
				))}
			</ul>
		</section>
	);
}
