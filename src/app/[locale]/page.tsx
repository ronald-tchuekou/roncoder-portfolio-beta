import { cn } from '@/lib/utils'
import { Container } from '@src/components/container'
import { CounterSection } from '@src/components/home/counter-section'
import { EngineeringSection } from '@src/components/home/engineering-section'
import { ExpertisePreview } from '@src/components/home/expertise-preview'
import { FeaturedProjects } from '@src/components/home/featured-projects'
import { FinalCta } from '@src/components/home/final-cta'
import { InfoSection } from '@src/components/home/info-section'
import { LookingForSection } from '@src/components/home/looking-for-section'
import { ProfileSection } from '@src/components/home/profile-section'
import { StackStrip } from '@src/components/home/stack-strip'
import { setRequestLocale } from 'next-intl/server'

type Props = {
   params: Promise<{ locale: string }>
}

export default async function Page({ params }: Props) {
   const locale = (await params).locale

   // Enable static rendering
   setRequestLocale(locale)

   return (
      <main>
         <Container className={cn('grid grid-cols-1 md:grid-cols-2 gap-3 py-10 lg:py-10')}>
            <InfoSection />
            <ProfileSection />
         </Container>
         <StackStrip />
         <CounterSection />
         <ExpertisePreview />
         <FeaturedProjects />
         <EngineeringSection />
         <LookingForSection />
         <FinalCta />
      </main>
   )
}
