'use client'

import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { RevealFromBottom } from '../motions/reveal-from-bottom'

export const SectionHeader = ({ title, description }: { title: string; description: string }) => {
   const t = useTranslations('resume')

   return (
      <>
         <RevealFromBottom
            elt={'h2'}
            className={cn('scroll-m-20 text-xl lg:text-3xl tracking-tight ', 'text-foreground font-mono')}
         >
            {t(title)}
         </RevealFromBottom>
         <RevealFromBottom elt={'p'} delay={0.1}>
            {t(description)}
         </RevealFromBottom>
      </>
   )
}
