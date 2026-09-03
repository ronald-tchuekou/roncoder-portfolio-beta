import { Button } from '@src/components/ui/button'
import { Link } from '@src/i18n/routing'
import { RabbitIcon } from 'lucide-react'
import { getTranslations } from 'next-intl/server'

export default async function NotFound() {
   const t = await getTranslations('common.not_found')

   return (
      <main className='flex flex-col items-center justify-center h-full min-h-[400px] lg:min-h-[600px] px-4 text-center'>
         <RabbitIcon className='size-40 text-primary' aria-hidden='true' />
         <h1 className='text-4xl font-bold mb-2 font-mono'>404</h1>
         <p className='text-lg text-foreground'>{t('not_found_title')}</p>
         <p className='text-base text-muted-foreground mb-8'>{t('not_found_description')}</p>
         <div className='flex flex-wrap items-center justify-center gap-3'>
            <Button asChild className='rounded-full'>
               <Link href='/'>{t('back_home')}</Link>
            </Button>
            <Button asChild variant='outline' className='rounded-full'>
               <Link href='/resume'>{t('see_background')}</Link>
            </Button>
         </div>
      </main>
   )
}
