'use client'

import { cn } from '@/lib/utils'
import { FC, useMemo } from 'react'

export type ProjectTagsProps = { tags: string[] }

export const ProjectTags: FC<ProjectTagsProps> = (props) => {
   return (
      <div className={cn('flex gap-3 flex-wrap')}>
         {props.tags.map((tag) => (
            <Tag key={tag} tag={tag} />
         ))}
      </div>
   )
}

const Tag: FC<{ tag: string }> = ({ tag }) => {
   const colors: { bg: string; text: string; border: string }[] = useMemo(
      () => [
         {
            bg: 'bg-green-500/10',
            text: 'text-green-500',
            border: 'border-green-500/30',
         },
         {
            bg: 'bg-blue-500/10',
            text: 'text-blue-500',
            border: 'border-blue-500/30',
         },
         {
            bg: 'bg-yellow-500/10',
            text: 'text-yellow-500',
            border: 'border-yellow-500/30',
         },
         {
            bg: 'bg-red-500/10',
            text: 'text-red-500',
            border: 'border-red-500/30',
         },
         {
            bg: 'bg-purple-500/10',
            text: 'text-purple-500',
            border: 'border-purple-500/30',
         },
         {
            bg: 'bg-pink-500/10',
            text: 'text-pink-500',
            border: 'border-pink-500/30',
         },
         {
            bg: 'bg-indigo-500/10',
            text: 'text-indigo-500',
            border: 'border-indigo-500/30',
         },
         {
            bg: 'bg-cyan-500/10',
            text: 'text-cyan-500',
            border: 'border-cyan-500/30',
         },
         {
            bg: 'bg-rose-500/10',
            text: 'text-rose-500',
            border: 'border-rose-500/30',
         },
         {
            bg: 'bg-emerald-500/10',
            text: 'text-emerald-500',
            border: 'border-emerald-500/30',
         },
         {
            bg: 'bg-violet-500/10',
            text: 'text-violet-500',
            border: 'border-violet-500/30',
         },
         {
            bg: 'bg-fuchsia-500/10',
            text: 'text-fuchsia-500',
            border: 'border-fuchsia-500/30',
         },
         {
            bg: 'bg-lightBlue-500/10',
            text: 'text-lightBlue-500',
            border: 'border-lightBlue-500/30',
         },
         {
            bg: 'bg-lime-500/10',
            text: 'text-lime-500',
            border: 'border-lime-500/30',
         },
         {
            bg: 'bg-sky-500/10',
            text: 'text-sky-500',
            border: 'border-sky-500/30',
         },
      ],
      []
   )

   const randomColor = useMemo(() => {
      const index = Math.floor(Math.random() * colors.length)
      return colors[index]
   }, [colors])

   return (
      <div
         key={tag}
         className={cn(
            'rounded-full px-3 py-1 text-xs font-semibold',
            'border',
            randomColor.bg,
            randomColor.text,
            randomColor.border
         )}
      >
         {tag}
      </div>
   )
}
