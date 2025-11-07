import { cn } from "@/lib/utils";
import { Container } from "@src/components/container";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import PageTitle from '@src/components/page-title'
import { ProjectItem } from "@src/components/projects/project-item";
import { LocaleType } from '@src/i18n/routing'
import { PROJECTS } from '@src/resources/data/projects'
import { Metadata } from 'next';
import { getTranslations, setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: LocaleType }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'projects' })

   return {
      title: t('page_title'),
      description: t('page_description'),
      keywords: [
         'roncoder projects',
         'roncoder projet',
         'projects roncoder',
         'Next.js development',
         'Angular development',
         'Next.js SEO',
         'Angular SEO',
         'Next.js best practices',
         'Angular best practices',
         'Next.js tutorials',
         'Angular tutorials',
         'Next.js performance optimization',
         'Angular performance optimization',
         'Next.js vs Angular',
         'Next.js components',
         'Angular components',
         'Next.js server-side rendering',
         'Angular server-side rendering',
         'Next.js static site generation',
         'Angular static site generation',
         'Next.js dynamic routing',
         'Angular dynamic routing',
         'Next.js internationalization',
      ],
      twitter: {
         title: t('page_title'),
         description: t('page_description'),
      },
   }
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale
   const t = await getTranslations({ locale, namespace: 'projects' })

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <main>
         <Container className={cn('')} rootClassName={cn('pt-10 lg:pt-20 pb-6')}>
            <PageTitle title={t('page_title')} description={t('page_description')} />
         </Container>
         <Container className={cn('grid grid-cols-1 md:grid-cols-2 gap-10')}>
            {PROJECTS.map((item, index) => (
               <RevealFromBottom delay={index < 4 ? index * 0.1 : 0.1} key={item.id}>
                  <ProjectItem item={item} locale={locale} />
               </RevealFromBottom>
            ))}
         </Container>
         <div className={cn('h-16')} />
      </main>
   )
}
