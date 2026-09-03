import { cn } from '@src/lib/utils'
import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export async function ProfileSection() {
   const t = await getTranslations('home')

   return (
      <section className='py-10 order-1 md:order-2'>
         <div className='w-full relative'>
            <Image
               priority
               fetchPriority='high'
               src='/profile_3.webp'
               alt={t('hero.image_alt')}
               width={960}
               height={960}
               sizes='(min-width: 768px) 480px, 100vw'
               className={cn('aspect-square w-full h-auto rounded-full p-1')}
            />
            {/* Decorative ring, animated in CSS so nothing on this page waits for
                JavaScript before the portrait can paint. */}
            <svg
               className={cn('profile-ring absolute inset-0 rounded-full aspect-square text-primary')}
               viewBox='0 0 100 100'
               xmlns='http://www.w3.org/2000/svg'
               fill='transparent'
               aria-hidden='true'
            >
               <circle
                  cx={50}
                  cy={50}
                  r={50}
                  stroke='currentColor'
                  strokeWidth={1}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeDasharray='4 8 12 20'
               />
            </svg>
         </div>
      </section>
   )
}
