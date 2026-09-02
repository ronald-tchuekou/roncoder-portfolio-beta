import { cn } from '@/lib/utils'
import { FC } from 'react'

export type ProjectTagsProps = { tags: string[] }

// Full class names are listed so Tailwind can see them (no runtime string building).
const TAG_COLORS = [
   'bg-green-500/10 text-green-500 border-green-500/30',
   'bg-blue-500/10 text-blue-500 border-blue-500/30',
   'bg-yellow-500/10 text-yellow-500 border-yellow-500/30',
   'bg-red-500/10 text-red-500 border-red-500/30',
   'bg-purple-500/10 text-purple-500 border-purple-500/30',
   'bg-pink-500/10 text-pink-500 border-pink-500/30',
   'bg-indigo-500/10 text-indigo-500 border-indigo-500/30',
   'bg-cyan-500/10 text-cyan-500 border-cyan-500/30',
   'bg-rose-500/10 text-rose-500 border-rose-500/30',
   'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
   'bg-violet-500/10 text-violet-500 border-violet-500/30',
   'bg-fuchsia-500/10 text-fuchsia-500 border-fuchsia-500/30',
   'bg-sky-500/10 text-sky-500 border-sky-500/30',
   'bg-lime-500/10 text-lime-500 border-lime-500/30',
   'bg-teal-500/10 text-teal-500 border-teal-500/30',
] as const

/** Same tag → same colour on every card, on the server and in the browser. */
const colorFor = (tag: string) => {
   let hash = 0
   for (const char of tag) hash = (hash * 31 + char.charCodeAt(0)) >>> 0
   return TAG_COLORS[hash % TAG_COLORS.length]
}

export const ProjectTags: FC<ProjectTagsProps> = ({ tags }) => (
   <ul className={cn('flex gap-3 flex-wrap')} aria-label='Technologies'>
      {tags.map((tag) => (
         <li key={tag} className={cn('rounded-full px-3 py-1 text-xs font-semibold border', colorFor(tag))}>
            {tag}
         </li>
      ))}
   </ul>
)
