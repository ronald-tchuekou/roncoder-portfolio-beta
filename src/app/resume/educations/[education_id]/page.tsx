import { cn } from "@/lib/utils";
import { BackButton } from "@src/components/back-button";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { EDUCATIONS_LIST } from '@src/resources/data/educations'
import { METADATA } from '@src/resources/data/metadata'
import { DotIcon } from "lucide-react";
import { Metadata } from 'next'
import Image from 'next/image';

type Props = {
	params: { education_id: string };
};

export async function generateStaticParams() {
	return EDUCATIONS_LIST.map((education) => ({
		education_id: education.id,
	}))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	// fetch data
	const project = EDUCATIONS_LIST.find((exp) => exp.id === params.education_id)

	return {
		title: project?.title,
		description: project?.description,
		openGraph: {
			images: [project?.imageLink ?? ''],
		},
		...METADATA,
	}
}

export default function EducationDetails({ params }: Props) {
	const education = EDUCATIONS_LIST.find((exp) => exp.id === params.education_id);

	return (
		<section className='w-full flex flex-col gap-5'>
			<div className={cn('flex gap-3 items-center')}>
				<BackButton />
				<RevealFromBottom
					delay={0.1}
					elt={'h2'}
					className={cn('scroll-m-20 text-xl lg:text-3xl tracking-tight ', 'text-white')}
				>
					{education?.title || 'Détails sur la certification'}
				</RevealFromBottom>
			</div>
			<RevealFromBottom delay={0.2} className={cn('flex')}>
				<p className={cn('text-primary text-lg uppercase')}>{education?.company}</p>
				<div className='flex items-center h-full'>
					<DotIcon className='size-8 text-primary' />
					<small className={cn('text-muted-foreground')}>{education?.date}</small>
				</div>
			</RevealFromBottom>
			<RevealFromBottom elt={'p'} delay={0.2} className={cn('')}>
				{education?.description}
			</RevealFromBottom>
			{education?.imageLink && (
				<RevealFromBottom delay={0.2} className={cn('w-full aspect-auto', 'rounded-lg', 'bg-secondary/10')}>
					<Image
						quality={100}
						src={education.imageLink}
						alt={education.title}
						width={1000}
						height={600}
						placeholder='blur'
						blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0XL+lHgAEwgIVSfhUvgAAAABJRU5ErkJggg=='
						className={cn('rounded-lg w-full aspect-auto')}
					/>
				</RevealFromBottom>
			)}
			<RevealFromBottom elt={'h3'} delay={0.3} className={cn('text-lg text-accent-foreground')}>
				Contenu de la formation
			</RevealFromBottom>
			<ul className={cn('list-disc pl-8 space-y-3')}>
				{education?.tasks.map((task, idx) => (
					<RevealFromBottom delay={(idx + 1) * 0.1} elt={'li'} key={idx}>
						{task}
					</RevealFromBottom>
				))}
			</ul>
		</section>
	);
}
