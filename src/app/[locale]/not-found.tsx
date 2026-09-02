'use client'

import { Button } from '@/components/ui/button'
import { Link } from '@src/i18n/routing'
import { motion } from 'framer-motion'
import { RabbitIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function NotFound() {
   const t = useTranslations('contact')

   return (
      <main className='flex flex-col items-center justify-center h-full min-h-[400px] lg:min-h-[600px] px-4 text-center'>
         <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <RabbitIcon className='size-40 text-primary' aria-hidden='true' />
         </motion.div>
         <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className='text-4xl font-bold mb-2 font-mono'
         >
            404
         </motion.h1>
         <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='text-lg text-foreground'
         >
            {t('not_found_title')}
         </motion.p>
         <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className='text-base text-muted-foreground mb-8'
         >
            {t('not_found_description')}
         </motion.p>
         <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
            <Button asChild className='rounded-full'>
               <Link href='/'>{t('back_home')}</Link>
            </Button>
         </motion.div>
      </main>
   )
}
