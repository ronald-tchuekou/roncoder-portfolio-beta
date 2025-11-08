'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { useQuery } from '@tanstack/react-query'

export const GitHubContributionCount = () => {
   const { isLoading, data } = useQuery({
      queryKey: ['github-contributions'],
      async queryFn() {
         const res = await fetch('/api/github/contributions')
         const data = await res.json()
         return data.contributions as number
      },
   })

   if (isLoading) return <Skeleton className='h-[48px] w-full' />

   return (
      <>
         <p className='text-5xl font-extrabold text-foreground'>{data || 3000}</p>
         <p>
            Github <br /> Contributions
         </p>
      </>
   )
}
