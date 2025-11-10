'use client'

import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'
import { useTranslations } from 'next-intl'

export const GitHubStarsCount = () => {
   const t = useTranslations('home')
   const { isLoading, data } = useQuery({
      queryKey: ['github-stars'],
      async queryFn() {
         const res = await fetch('/api/github/stars')
         const data = await res.json()
         return data.stars as number
      },
   })

   if (isLoading) return <Skeleton className='h-[48px] w-full' />

   return (
      <>
         <p className='text-5xl font-extrabold text-foreground'>{data || 76}</p>
         <p>
            Github <br /> {t('stars')}
         </p>
      </>
   )
}
