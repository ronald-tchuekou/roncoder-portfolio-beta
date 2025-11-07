import { cn } from "@/lib/utils";
import { BackButton } from "@src/components/back-button";
import { Container } from "@src/components/container";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { Gallery } from "@src/components/projects/gallery";
import { ProjectTags } from "@src/components/projects/project-tags";
import { Link, LocaleType } from '@src/i18n/routing'
import { PROJECTS } from '@src/resources/data/projects'
import { DotIcon } from "lucide-react";
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'

type Props = {
   params: Promise<{ locale: LocaleType; project_id: string }>
}

export async function generateStaticParams() {
	return PROJECTS.map((project) => ({
		project_id: project.id,
	}))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { project_id, locale } = await params
   const project = PROJECTS.find((project) => project.id === project_id)

   return {
      title: project?.title[locale],
      description: project?.description[locale],
      openGraph: {
         images: [project?.image ?? ''],
      },
      keywords: [...(project?.tags ?? [])],
      twitter: {
         title: project?.title[locale],
         description: project?.description[locale],
      },
   }
}

export default async function Page({ params }: Props) {
   const { locale, project_id } = await params
   const t = await getTranslations({ locale, namespace: 'projects' })

   // Enable static rendering
   setRequestLocale(locale)

   const project = PROJECTS.find((project) => project.id === project_id)

   return (
      <main>
         <Container className={cn('flex flex-col gap-10 py-10 lg:py-20')}>
            <section className={cn('flex gap-3 items-center')}>
               <BackButton />
               <RevealFromBottom
                  delay={0.1}
                  elt={'h1'}
                  className={cn(
                     'scroll-m-20 text-2xl lg:text-5xl tracking-tight ',
                     'text-foreground font-mono tracking-tight'
                  )}
               >
                  {project?.title[locale]}
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
                     alt={project?.title[locale] || ''}
                     width={400}
                     height={300}
                     placeholder='blur'
                     blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mM0XL+lHgAEwgIVSfhUvgAAAABJRU5ErkJggg=='
                     className={cn('w-full aspect-video', 'rounded-xl')}
                  />
               </RevealFromBottom>
               <RevealFromBottom delay={0.2} className={cn('flex')}>
                  <p className={cn('text-primary text-lg uppercase')}>{project?.company[locale]}</p>
                  <div className='flex items-center h-full'>
                     <DotIcon className='size-8 text-primary' />
                     <small className={cn('text-muted-foreground')}>{project?.date[locale]}</small>
                  </div>
               </RevealFromBottom>
            </section>

            <section>
               <RevealFromBottom elt={'p'} delay={0.2} className={cn('')}>
                  {project?.description[locale]}
               </RevealFromBottom>
            </section>

            <Gallery images={project?.gallery || []} />

            <RevealFromBottom>
               <ProjectTags tags={project?.tags || []} />
            </RevealFromBottom>

            {project?.authentication && (
               <section>
                  <RevealFromBottom delay={0.1}>
                     <h3>{t('demo_credentials')}</h3>
                  </RevealFromBottom>
                  <RevealFromBottom delay={0.12} className={cn('flex items-center gap-3')}>
                     <p className='text-muted-foreground text-sm flex-none'>{t('username')}</p>
                     <p className='block text-base font-semibold w-full truncate text-foreground'>
                        {project.authentication.username}
                     </p>
                  </RevealFromBottom>
                  <RevealFromBottom delay={0.15} className={cn('flex items-center gap-3')}>
                     <p className='text-muted-foreground text-sm flex-none'>{t('password')}</p>
                     <p className='block text-base font-semibold w-full truncate text-foreground'>
                        {project.authentication.password}
                     </p>
                  </RevealFromBottom>
               </section>
            )}

            <div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
               {project?.links
                  ? project.links.map((link, index) => (
                       <RevealFromBottom key={`link-${index}`} delay={index * 0.1} className={cn('flex gap-3')}>
                          <div className='flex items-center justify-center gap-2 flex-none'>
                             {link.icon && <div className='flex-none'>{link.icon}</div>}
                             {link.label && (
                                <p className='text-muted-foreground text-sm flex-none'>{link.label[locale]}</p>
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
   )
}
