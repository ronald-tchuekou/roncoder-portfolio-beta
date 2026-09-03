import { cn } from '@/lib/utils'
import { BackButton } from '@src/components/back-button'
import { Container } from '@src/components/container'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import { Gallery } from '@src/components/projects/gallery'
import { ProjectTags } from '@src/components/projects/project-tags'
import { Link, LocaleType } from '@src/i18n/routing'
import { localizedAlternates } from '@src/lib/seo'
import { previewableLink, PROJECTS } from '@src/resources/data/projects'
import { LockIcon } from 'lucide-react'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import Image from 'next/image'
import { notFound } from 'next/navigation'

type Props = {
   params: Promise<{ locale: LocaleType; project_id: string }>
}

// Anything outside generateStaticParams is a 404, never an empty page.
export const dynamicParams = false

export async function generateStaticParams() {
   return PROJECTS.map((project) => ({
      project_id: project.id,
   }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { project_id, locale } = await params
   const project = PROJECTS.find((project) => project.id === project_id)
   if (!project) return {}

   const title = `${project.title[locale]}, ${project.role[locale]}`

   return {
      title,
      description: project.description[locale],
      alternates: localizedAlternates(locale, `/projects/${project.id}`),
      keywords: [...project.tags],
      openGraph: {
         title,
         description: project.description[locale],
         images: [project.image],
      },
      twitter: {
         card: 'summary_large_image',
         title,
         description: project.description[locale],
         images: [project.image],
      },
   }
}

export default async function Page({ params }: Props) {
   const { locale, project_id } = await params
   const t = await getTranslations({ locale, namespace: 'projects' })

   // Enable static rendering
   setRequestLocale(locale)

   const project = PROJECTS.find((project) => project.id === project_id)
   if (!project) notFound()

   const preview = previewableLink(project)

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
                     'text-foreground font-mono tracking-tight',
                  )}
               >
                  {project.title[locale]}
               </RevealFromBottom>
            </section>

            <section className='w-full flex flex-col gap-5'>
               <RevealFromBottom
                  delay={0.1}
                  className={cn('w-full h-auto aspect-video', 'rounded-xl', 'bg-secondary/10')}
               >
                  <Image
                     priority
                     src={project.image}
                     alt={t('cover_alt', { title: project.title[locale] })}
                     width={1280}
                     height={720}
                     sizes='(min-width: 1280px) 1216px, 100vw'
                     className={cn('w-full aspect-video object-cover', 'rounded-xl')}
                  />
               </RevealFromBottom>
               <RevealFromBottom delay={0.2} className={cn('flex flex-col gap-1')}>
                  <p className={cn('text-primary text-lg uppercase')}>{project.role[locale]}</p>
                  <p className={cn('text-muted-foreground')}>{project.context[locale]}</p>
               </RevealFromBottom>
            </section>

            <section>
               <RevealFromBottom elt={'p'} delay={0.2}>
                  {project.description[locale]}
               </RevealFromBottom>
            </section>

            <section className='flex flex-col gap-3'>
               <RevealFromBottom elt={'h2'} className={cn('text-xl font-mono text-foreground')}>
                  {t('contributions_label')}
               </RevealFromBottom>
               <ul className='flex flex-col gap-2 list-disc pl-5'>
                  {project.contributions.map((contribution, index) => (
                     <RevealFromBottom elt={'li'} key={`contribution-${index}`} delay={index * 0.05}>
                        {contribution[locale]}
                     </RevealFromBottom>
                  ))}
               </ul>
            </section>

            <section className='flex flex-col gap-3'>
               <RevealFromBottom elt={'h2'} className={cn('text-xl font-mono text-foreground')}>
                  {t('result_label')}
               </RevealFromBottom>
               <RevealFromBottom elt={'p'} delay={0.05}>
                  {project.result[locale]}
               </RevealFromBottom>
            </section>

            <Gallery images={project.gallery} title={project.title[locale]} platform={project.platform} />

            <RevealFromBottom>
               <ProjectTags tags={project.tags} />
            </RevealFromBottom>

            {project.platform === 'confidential' && (
               <RevealFromBottom className={cn('flex items-center gap-2 text-muted-foreground')}>
                  <LockIcon className='size-4 flex-none' />
                  <p>{t('under_nda')}</p>
               </RevealFromBottom>
            )}

            {project.platform === 'web' && !preview && (
               <RevealFromBottom elt={'p'} className={cn('text-muted-foreground')}>
                  {t('link_on_request')}
               </RevealFromBottom>
            )}

            <div className={cn('w-full grid grid-cols-1 gap-8 lg:grid-cols-2')}>
               {project.links.map((link, index) => (
                  <RevealFromBottom key={`link-${index}`} delay={index * 0.1} className={cn('flex gap-3')}>
                     <div className='flex items-center justify-center gap-2 flex-none'>
                        {link.icon && <div className='flex-none'>{link.icon}</div>}
                        {link.label && <p className='text-muted-foreground text-sm flex-none'>{link.label[locale]}</p>}
                     </div>
                     <Link
                        href={link.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='block text-base font-semibold w-full truncate text-primary'
                     >
                        {link.link}
                     </Link>
                  </RevealFromBottom>
               ))}
            </div>
         </Container>
         <div className='h-20'></div>
      </main>
   )
}
