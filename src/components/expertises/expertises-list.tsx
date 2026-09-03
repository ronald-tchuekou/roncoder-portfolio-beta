'use client'

import { cn } from '@src/lib/utils'
import { EXPERTISES } from '@src/resources/data/expertises'
import { Container } from '../container'
import { RevealFromBottom } from '../motions/reveal-from-bottom'
import { ExpertiseItem } from './expertise-item'

export const ExpertisesList = () => {
   return (
      <Container className={cn('grid grid-cols-1 md:grid-cols-2 gap-10')}>
         {EXPERTISES.map((item, index) => (
            <RevealFromBottom delay={index < 3 ? index * 0.1 : 0.1} key={item.key} className={cn('h-full')}>
               <ExpertiseItem item={item} />
            </RevealFromBottom>
         ))}
      </Container>
   )
}
