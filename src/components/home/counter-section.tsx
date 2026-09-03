import { cn } from '@src/lib/utils'
import { COMPLETED_PROJECTS_COUNT, EXPERIENCE_YEARS } from '@src/resources/data/informations'
import { GithubService } from '@src/services/github.service'
import { getTranslations } from 'next-intl/server'
import { Container } from '../container'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

/** Applications published and maintained on the App Store and Google Play: Lafya, Zakadia, Les Vadrouilleurs. */
const APPS_ON_STORES_COUNT = 3

type CounterProps = { value: number | null; suffix?: string; label: React.ReactNode; delay?: number }

const Counter = ({ value, suffix, label, delay }: CounterProps) => {
   // No fabricated fallback: a tile with nothing reliable to show is not rendered.
   if (value === null) return null
   return (
      <RevealFromBottom delay={delay} className='flex gap-3'>
         <p className='text-5xl font-extrabold text-foreground'>
            <span className='tabular-nums'>{value}</span>
            {suffix ? <span aria-hidden>{suffix}</span> : null}
         </p>
         <p>{label}</p>
      </RevealFromBottom>
   )
}

// Server component: GitHub is queried at build / revalidation time, never from the visitor's browser.
export const CounterSection = async () => {
   const t = await getTranslations('home')
   const contributions = await GithubService.getGitHubContributions()

   return (
      <Container className='py-10'>
         <section className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-3 md:gap-8')}>
            <Counter
               value={EXPERIENCE_YEARS}
               suffix='+'
               label={
                  <>
                     {t('counters.years.label')} <br /> {t('counters.years.sub')}
                  </>
               }
            />
            <Counter
               delay={0.2}
               value={COMPLETED_PROJECTS_COUNT}
               label={
                  <>
                     {t('counters.projects.label')} <br /> {t('counters.projects.sub')}
                  </>
               }
            />
            <Counter
               delay={0.3}
               value={APPS_ON_STORES_COUNT}
               label={
                  <>
                     {t('counters.apps.label')} <br /> {t('counters.apps.sub')}
                  </>
               }
            />
            <Counter
               delay={0.4}
               value={contributions}
               label={
                  <>
                     {t('counters.contributions.label')} <br /> {t('counters.contributions.sub')}
                  </>
               }
            />
         </section>
      </Container>
   )
}
