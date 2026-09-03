'use client'

import { Button } from '@/components/ui/button'
import { Link } from '@src/i18n/routing'
import { motion, useReducedMotion } from 'framer-motion'
import { RabbitIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function NotFound() {
   const t = useTranslations('common.not_found')
   const shouldReduceMotion = useReducedMotion()

   const appear = (delay: number) =>
      shouldReduceMotion
         ? {}
         : {
              initial: { opacity: 0, y: -20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.5, delay },
           }

   return (
      <main className='flex flex-col items-center justify-center h-full min-h-[400px] lg:min-h-[600px] px-4 text-center'>
         <motion.div {...appear(0)}>
            <RabbitIcon className='size-40 text-primary' aria-hidden='true' />
         </motion.div>
         <motion.h1 {...appear(0)} className='text-4xl font-bold mb-2 font-mono'>
            404
         </motion.h1>
         <motion.p {...appear(0.2)} className='text-lg text-foreground'>
            {t('not_found_title')}
         </motion.p>
         <motion.p {...appear(0.25)} className='text-base text-muted-foreground mb-8'>
            {t('not_found_description')}
         </motion.p>
         <motion.div {...appear(0.3)} className='flex flex-wrap items-center justify-center gap-3'>
            <Button asChild className='rounded-full'>
               <Link href='/'>{t('back_home')}</Link>
            </Button>
            <Button asChild variant='outline' className='rounded-full'>
               <Link href='/resume'>{t('see_background')}</Link>
            </Button>
         </motion.div>
      </main>
   )
}
