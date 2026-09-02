import { cn } from '@/lib/utils'
import { CAREER_START_YEAR, COMPLETED_PROJECTS_COUNT } from '@src/resources/data/informations'
import { GithubService } from '@src/services/github.service'
import { getTranslations } from 'next-intl/server'
import { Container } from '../container'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

type CounterProps = { value: number | null; label: React.ReactNode; delay?: number }

const Counter = ({ value, label, delay }: CounterProps) => {
   // No fabricated fallback: a tile with nothing reliable to show is not rendered.
   if (value === null) return null
   return (
      <RevealFromBottom delay={delay} className='flex gap-3'>
         <p className='text-5xl font-extrabold text-foreground tabular-nums'>{value}</p>
         <p>{label}</p>
      </RevealFromBottom>
   )
}

// Server component: GitHub is queried at build / revalidation time, never from the visitor's browser.
export const CounterSection = async () => {
   const t = await getTranslations('home')
   const [stars, contributions] = await Promise.all([
      GithubService.getGitHubStars(),
      GithubService.getGitHubContributions(),
   ])
   const yearsOfExperience = new Date().getFullYear() - CAREER_START_YEAR

   return (
      <Container className='pb-10'>
         <section className={cn('grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-3 md:gap-8')}>
            <Counter
               value={yearsOfExperience}
               label={
                  <>
                     {t('year')} <br /> {t('of_experiences')}
                  </>
               }
            />
            <Counter
               delay={0.2}
               value={COMPLETED_PROJECTS_COUNT}
               label={
                  <>
                     {t('projects')} <br /> {t('finish')}
                  </>
               }
            />
            <Counter
               delay={0.3}
               value={stars}
               label={
                  <>
                     Github <br /> {t('stars')}
                  </>
               }
            />
            <Counter
               delay={0.4}
               value={contributions}
               label={
                  <>
                     Github <br /> {t('contributions')}
                  </>
               }
            />
         </section>
      </Container>
   )
}
