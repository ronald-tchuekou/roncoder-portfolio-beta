import { LocaleType } from '@src/i18n/routing'
import env from '@src/lib/env/client'
import { isAppStoreLink, isGooglePlayLink } from '@src/resources/data/projects'
import { Project } from '@src/resources/util-types'

/** `CreativeWork` for every project, plus `SoftwareApplication` for the ones
 *  published on the stores. Validate any change with the schema.org validator. */
export function ProjectJsonLd({ project, locale }: { project: Project; locale: LocaleType }) {
   const url = `${env.NEXT_PUBLIC_SITE_URL}/projects/${project.id}`

   const graph: Record<string, unknown>[] = [
      {
         '@type': 'CreativeWork',
         name: project.title[locale],
         description: project.description[locale],
         url,
         image: `${env.NEXT_PUBLIC_SITE_URL}${project.image}`,
         keywords: project.tags.join(', '),
         author: { '@type': 'Person', name: 'Ronald Tchuekou' },
      },
   ]

   if (project.platform === 'mobile') {
      const storeLinks = project.links.filter((link) => isAppStoreLink(link.link) || isGooglePlayLink(link.link))

      graph.push({
         '@type': 'SoftwareApplication',
         name: project.title[locale],
         description: project.description[locale],
         applicationCategory: 'MobileApplication',
         operatingSystem: 'iOS, Android',
         url,
         sameAs: storeLinks.map((link) => link.link),
      })
   }

   return (
      <script
         type='application/ld+json'
         dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }) }}
      />
   )
}
