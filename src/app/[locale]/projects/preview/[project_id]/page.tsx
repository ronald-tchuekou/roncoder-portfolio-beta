import { Button } from '@src/components/ui/button'
import { cn } from '@src/lib/utils'
import { BackButton } from '@src/components/back-button'
import { Container } from '@src/components/container'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import { Link, LocaleType } from '@src/i18n/routing'
import { previewableLink, PROJECTS } from '@src/resources/data/projects'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
   params: Promise<{ locale: LocaleType; project_id: string }>
}

/** Only web projects with a link that answers can be embedded in the preview frame. */
const PREVIEWABLE_PROJECTS = PROJECTS.filter((project) => previewableLink(project) !== undefined)

// Anything outside generateStaticParams is a 404, never an empty frame.
export const dynamicParams = false

export async function generateStaticParams() {
   return PREVIEWABLE_PROJECTS.map((project) => ({ project_id: project.id }))
}

const findPreview = (projectId: string) => {
   const project = PREVIEWABLE_PROJECTS.find((item) => item.id === projectId)
   if (!project) return null
   const link = previewableLink(project)
   if (!link) return null
   return { project, link }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { locale, project_id } = await params

   // Preview pages embed a third party site in an iframe: nothing worth indexing.
   const robots = { index: false, follow: true }

   const resolved = findPreview(project_id)
   if (!resolved) return { title: 'Project preview', robots }

   const { project } = resolved
   const title = `${project.title[locale]}, ${project.role[locale]}`

   return {
      title,
      description: project.description[locale],
      robots,
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

   setRequestLocale(locale)

   const t = await getTranslations({ locale, namespace: 'projects' })
   const resolved = findPreview(project_id)

   if (!resolved) notFound()

   const { project, link } = resolved
   const heading = project.title[locale]

   return (
      <main>
         <Container className={cn('flex flex-col gap-6 py-10 lg:py-20')}>
            <section className={cn('flex flex-col gap-4')}>
               <div className='flex flex-wrap items-center gap-3'>
                  <BackButton />
                  <RevealFromBottom
                     delay={0.1}
                     elt={'h1'}
                     className={cn(
                        'scroll-m-20 text-2xl lg:text-4xl tracking-tight',
                        'text-foreground font-mono tracking-tight',
                     )}
                  >
                     {heading}
                  </RevealFromBottom>
               </div>
               <RevealFromBottom delay={0.2}>
                  <Button asChild variant={'secondary'}>
                     <Link
                        href={link.link}
                        target='_blank'
                        rel='noopener noreferrer'
                        className='text-primary font-semibold underline-offset-4 hover:underline'
                     >
                        {link.label?.[locale] ?? t('consult')}
                     </Link>
                  </Button>
               </RevealFromBottom>
            </section>
            <RevealFromBottom delay={0.25}>
               <div className='w-full overflow-hidden rounded-2xl border border-input bg-muted'>
                  <iframe
                     key={link.link}
                     src={link.link}
                     title={`${heading} preview`}
                     className='h-[70vh] w-full lg:h-[80vh]'
                     loading='lazy'
                     referrerPolicy='no-referrer'
                     allowFullScreen
                  />
               </div>
            </RevealFromBottom>
         </Container>
      </main>
   )
}
