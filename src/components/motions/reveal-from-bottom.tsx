import { cn } from '@src/lib/utils'
import { MotionTag } from '@src/resources/util-types'
import { FC, PropsWithChildren } from 'react'

type Props = {
   className?: string
   elt?: MotionTag
}

/**
 * Reveals its children as they scroll into view, through a scroll driven CSS
 * animation. No JavaScript at all: this wrapper sits on nearly every section, and
 * gating them on hydration delayed the largest contentful paint by about a second
 * on mobile. Browsers without `animation-timeline` simply show the content, and
 * so does a reader who asked for reduced motion.
 */
export const RevealFromBottom: FC<PropsWithChildren<Props>> = ({ children, className, elt }) => {
   const Comp = (elt || 'div') as 'div'

   return <Comp className={cn('reveal-from-bottom', className)}>{children}</Comp>
}
