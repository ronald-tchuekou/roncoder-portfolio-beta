import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { BackButton } from '@src/components/back-button'
import { Container } from '@src/components/container'
import { RevealFromBottom } from '@src/components/motions/reveal-from-bottom'
import { Link, LocaleType } from '@src/i18n/routing'
import { PROJECTS } from '@src/resources/data/projects'
import { Metadata } from 'next'
import { getTranslations, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'

type Props = {
   params: Promise<{ locale: LocaleType; project_link: string }>
}

type ProjectLinkEntry = {
   project: (typeof PROJECTS)[number]
   link: (typeof PROJECTS)[number]['links'][number]
}

type ResolvedProjectLink = {
   url: string
   project?: (typeof PROJECTS)[number]
   link?: (typeof PROJECTS)[number]['links'][number]
}

export const dynamic = 'force-dynamic'

const PROJECT_LINK_ENTRIES: ProjectLinkEntry[] = PROJECTS.flatMap((project) =>
   (project.links || []).map((link) => ({ project, link }))
)

const safeDecodeURIComponent = (value: string): string | null => {
   try {
      return decodeURIComponent(value)
   } catch {
      return null
   }
}

const isHttpUrl = (value: string | null | undefined): value is string => {
   if (!value) {
      return false
   }

   try {
      const url = new URL(value)
      return url.protocol === 'http:' || url.protocol === 'https:'
   } catch {
      return false
   }
}

const safeGetHostname = (value: string): string | null => {
   try {
      return new URL(value).hostname
   } catch {
      return null
   }
}

const buildCandidateValues = (raw: string): string[] => {
   const values = new Set<string>()

   let current: string | null = raw

   while (current) {
      if (!values.has(current)) {
         values.add(current)
      } else {
         break
      }

      const decoded = safeDecodeURIComponent(current)
      if (!decoded || values.has(decoded)) {
         break
      }

      current = decoded
   }

   return Array.from(values)
}

const resolveProjectLink = (projectLinkParam: string): ResolvedProjectLink | null => {
   const candidates = buildCandidateValues(projectLinkParam)

   for (const candidate of candidates) {
      const match = PROJECT_LINK_ENTRIES.find(({ link }) => link.link === candidate)
      if (match) {
         return { url: match.link.link, project: match.project, link: match.link }
      }
   }

   const fallback = candidates.find(isHttpUrl)
   return fallback ? { url: fallback } : null
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const { locale, project_link } = await params
   const resolved = resolveProjectLink(project_link)

   if (!resolved) {
      return {
         title: 'Project preview',
      }
   }

   if (resolved.project) {
      const projectTitle = resolved.project.title[locale]
      const linkLabel = resolved.link?.label?.[locale]
      const title = linkLabel ? `${projectTitle} – ${linkLabel}` : `${projectTitle} – Preview`
      const description = resolved.project.description[locale]
      const image = resolved.project.image

      return {
         title,
         description,
         openGraph: {
            title,
            description,
            images: [image],
         },
         twitter: {
            title,
            description,
         },
      }
   }

   const hostname = safeGetHostname(resolved.url)

   return {
      title: hostname ? `${hostname} – Preview` : 'Project preview',
   }
}

export default async function Page({ params }: Props) {
   const { locale, project_link } = await params

   setRequestLocale(locale)

   const t = await getTranslations({ locale, namespace: 'projects' })
   const resolved = resolveProjectLink(project_link)

   if (!resolved?.url) {
      notFound()
   }

   const projectTitle = resolved.project?.title[locale]
   const previewLabel = resolved.link?.label?.[locale]
   const hostname = safeGetHostname(resolved.url)
   const heading = projectTitle ?? hostname ?? t('consult')

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
                        'text-foreground font-mono tracking-tight'
                     )}
                  >
                     {heading}
                  </RevealFromBottom>
               </div>
               {/* {resolved.project && (
                  <RevealFromBottom delay={0.15}>
                     <p className='max-w-3xl text-muted-foreground'>{resolved.project.description[locale]}</p>
                  </RevealFromBottom>
               )} */}
               <RevealFromBottom delay={0.2}>
                  <Button asChild variant={'secondary'}>
                     <Link
                        href={resolved.url}
                        target='_blank'
                        className='text-primary font-semibold underline-offset-4 hover:underline'
                     >
                        {previewLabel ?? t('consult')}
                     </Link>
                  </Button>
               </RevealFromBottom>
            </section>
            <RevealFromBottom delay={0.25}>
               <div className='w-full overflow-hidden rounded-2xl border border-input bg-muted'>
                  <iframe
                     key={resolved.url}
                     src={resolved.url}
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
