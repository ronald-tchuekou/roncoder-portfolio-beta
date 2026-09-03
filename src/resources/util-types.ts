import { LocaleType } from '@src/i18n/routing'
import { ReactNode } from 'react'

export type NavLink = {
   url: string
   label: string
   icon?: React.ReactNode
}

export type MotionTag = 'div' | 'a' | 'span' | 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'li'

export type Expertise = {
   id: string
   key: string
   title: Record<LocaleType, string>
   /** Two sentences describing the level reached in this area. */
   summary: Record<LocaleType, string>
   /** Three to four technical bullets. */
   highlights: Record<LocaleType, string>[]
   stack: string[]
   /** Project ids, linked to /projects/<id>. */
   projects: string[]
}

/** How often a technology is used day to day. No progress bars, no percentages. */
export type SkillLevel = 'principal' | 'courant' | 'occasionnel'

export type SkillGroupKey = 'frontend' | 'mobile' | 'backend' | 'design' | 'delivery'

export type Skill = {
   id: string
   title: string
   icon: React.ReactNode
   group: SkillGroupKey
   level: SkillLevel
   /** Only set when the start year can be derived from a dated experience. */
   sinceYear?: number
}

export type Experience = {
   id: string
   title: Record<LocaleType, string>
   company: string
   date: Record<LocaleType, string>
   /** Type of organisation and working mode. */
   context: Record<LocaleType, string>
   /** Start date as `YYYY-MM`, used to sort by date since periods overlap. */
   sortDate: string
   description: Record<LocaleType, string>
   tasks: Record<LocaleType, string>[]
   imageLink?: string
   keywords: string[]
}

export type Information = {
   id: string
   label: Record<LocaleType, string>
   value: Record<LocaleType, string>
   isLong: boolean
   link?: string
}

export type ProjectLink = {
   icon?: ReactNode
   label?: Record<LocaleType, string>
   link: string
}

export type ProjectPlatform = 'web' | 'mobile' | 'confidential'

export type Project = {
   id: string
   image: string
   platform: ProjectPlatform
   title: Record<LocaleType, string>
   /** Company, type of organisation, period, team size when known. */
   context: Record<LocaleType, string>
   role: Record<LocaleType, string>
   description: Record<LocaleType, string>
   /** Three to five bullets: what Ronald did himself. */
   contributions: Record<LocaleType, string>[]
   result: Record<LocaleType, string>
   tags: string[]
   company: Record<LocaleType, string>
   gallery: string[]
   links: ProjectLink[]
   date: Record<LocaleType, string>
   featured: boolean
   order: number
}

export type RequestModel = {
   id: string
   firstName: string
   lastName: string
   email: string
   company: string
   jobTitle: string
   contractType: string
   workMode: string
   offerUrl?: string
   message: string
   read: boolean
   locale: string
   createdAt: Date
}
