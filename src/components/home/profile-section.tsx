'use client'

import { cn } from '@/lib/utils'
import { motion, useReducedMotion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC } from 'react'

export const ProfileSection: FC = () => {
   const t = useTranslations('home')
   const shouldReduceMotion = useReducedMotion()

   return (
      <section className='py-10 order-1 md:order-2'>
         <div className='w-full relative'>
            <Image
               priority
               src='/profile_3.webp'
               alt={t('hero.image_alt')}
               width={960}
               height={960}
               sizes='(min-width: 768px) 50vw, 100vw'
               className={cn('aspect-square w-full h-auto rounded-full p-1')}
            />
            <motion.svg
               className={cn('absolute inset-0 rounded-full aspect-square text-primary')}
               viewBox='0 0 100 100'
               xmlns='http://www.w3.org/2000/svg'
               fill='transparent'
               aria-hidden
            >
               <motion.circle
                  cx={50}
                  cy={50}
                  r={50}
                  stroke='currentColor'
                  strokeWidth={1}
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  initial={{ strokeDasharray: '4 8 12 20' }}
                  animate={
                     shouldReduceMotion
                        ? { strokeDasharray: '4, 8, 12, 20' }
                        : {
                             strokeDasharray: ['2, 4, 6, 8', '4, 8, 12, 20', '2, 4, 6, 8'],
                             rotate: [120, 360],
                          }
                  }
                  transition={
                     shouldReduceMotion ? { duration: 0 } : { duration: 10, repeat: Infinity, repeatType: 'reverse' }
                  }
               />
            </motion.svg>
         </div>
      </section>
   )
}
