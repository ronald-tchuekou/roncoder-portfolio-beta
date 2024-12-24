import { cn } from "@/lib/utils";
import { BackButton } from "@src/components/back-button";
import { Container } from "@src/components/container";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { Gallery } from "@src/components/projects/gallery";
import { ProjectTags } from "@src/components/projects/project-tags";
import { METADATA, METADATA_KEYWORDS } from '@src/resources/data/metadata'
import { PROJECTS } from '@src/resources/data/projects'
import { DotIcon } from "lucide-react";
import { Metadata } from 'next'
import Image from 'next/image';
import Link from 'next/link';

type Props = {
	params: { project_id: string };
};

export async function generateStaticParams() {
	return PROJECTS.map((project) => ({
		project_id: project.id,
	}))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const project = PROJECTS.find((project) => project.id === params.project_id)

	return {
		title: project?.title,
		description: project?.description,
		openGraph: {
			images: [project?.image ?? ''],
		},
		...METADATA,
		keywords: [...METADATA_KEYWORDS, ...(project?.tags ?? [])],
	}
}

export default function ExperienceDetails({ params }: Props) {
	const project = PROJECTS.find((project) => project.id === params.project_id);

	return (
		<main>
			<Container className={cn('flex flex-col gap-10 py-10 lg:py-20')}>
				<section className={cn('flex gap-3 items-center')}>
					<BackButton />
					<RevealFromBottom
						delay={0.1}
						elt={'h1'}
						className={cn('scroll-m-20 text-2xl lg:text-5xl tracking-tight ', 'text-white')}
					>
						{project?.title || 'Détails sur le projet'}
					</RevealFromBottom>
				</section>

				<section className='w-full flex flex-col gap-5'>
					<RevealFromBottom
						delay={0.1}
						className={cn('w-full h-auto aspect-video', 'rounded-xl', 'bg-secondary/10')}
					>
						<Image
							priority
							unoptimized
							src={project?.image || ''}
							alt={project?.title || ''}
							width={400}
							height={300}
							placeholder='blur'
							blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0XL+lHgAEwgIVSfhUvgAAAABJRU5ErkJggg=='
							className={cn('w-full aspect-video', 'rounded-xl')}
						/>
					</RevealFromBottom>
					<RevealFromBottom delay={0.2} className={cn('flex')}>
						<p className={cn('text-primary text-lg uppercase')}>{project?.company}</p>
						<div className='flex items-center h-full'>
							<DotIcon className='size-8 text-primary' />
							<small className={cn('text-muted-foreground')}>{project?.date}</small>
						</div>
					</RevealFromBottom>
				</section>

				<section>
					<RevealFromBottom elt={'p'} delay={0.2} className={cn('')}>
						{project?.description}
					</RevealFromBottom>
				</section>

				<Gallery images={project?.gallery || []} />

				<RevealFromBottom>
					<ProjectTags tags={project?.tags || []} />
				</RevealFromBottom>

				{project?.authentication && (
					<section>
						<h3>Identifiant pour une démo</h3>
						<RevealFromBottom delay={0.1} className={cn('flex items-center gap-3')}>
							<p className='text-muted-foreground text-sm flex-none'>Nom d&apos;utilisateur:</p>
							<p className='block text-base font-semibold w-full truncate text-foreground'>
								{project.authentication.username}
							</p>
						</RevealFromBottom>
						<RevealFromBottom delay={0.1} className={cn('flex items-center gap-3')}>
							<p className='text-muted-foreground text-sm flex-none'>Mot de passe:</p>
							<p className='block text-base font-semibold w-full truncate text-foreground'>
								{project.authentication.password}
							</p>
						</RevealFromBottom>
					</section>
				)}

				<div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
					{project?.links
						? project.links.map((link, index) => (
								<RevealFromBottom
									key={`link-${index}`}
									delay={index * 0.1}
									className={cn('flex gap-3')}
								>
									<div className='flex items-center justify-center gap-2 flex-none'>
										{link.icon && <div className='flex-none'>{link.icon}</div>}
										{link.label && (
											<p className='text-muted-foreground text-sm flex-none'>{link.label}</p>
										)}
									</div>
									<Link
										href={link.link}
										target='_blank'
										className='block text-base font-semibold w-full truncate text-primary'
									>
										{link.link}
									</Link>
								</RevealFromBottom>
						  ))
						: null}
				</div>
			</Container>
			<div className='h-20'></div>
		</main>
	);
}
