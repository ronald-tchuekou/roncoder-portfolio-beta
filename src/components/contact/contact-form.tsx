'use client'

import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { LocaleType } from '@src/i18n/routing'
import { LoaderIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useRef, useState } from 'react'
import { ContactFormContent, ContactFormContentRef } from './contact-form-content'

export const ContactForm = () => {
   const contactFormRef = useRef<ContactFormContentRef>(null)
   const t = useTranslations('contact')
   const locale = useLocale() as LocaleType
   const [isLoading, setIsLoading] = useState(false)

   return (
      <div className={cn('w-full bg-card border border-input', 'rounded-xl p-5', 'flex flex-col gap-8')}>
         <div className='space-y-3'>
            <h1 className='text-xl md:text-3xl tracking-tight font-bold text-foreground font-mono'>
               {t('form_title')}
            </h1>
            <p className='text-muted-foreground'>{t('form_subtitle')}</p>
         </div>
         <ContactFormContent ref={contactFormRef} locale={locale} onPendingChange={setIsLoading} />
         <div className='flex justify-end'>
            <Button
               className='rounded-full relative w-full md:w-auto'
               type='button'
               disabled={isLoading}
               onClick={() => contactFormRef.current?.submit()}
            >
               {isLoading && (
                  <LoaderIcon
                     className={cn('animate-spin absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2', {
                        'opacity-0': !isLoading,
                     })}
                  />
               )}
               <span className={cn({ 'opacity-0': isLoading })}>{t('send_the_message')}</span>
            </Button>
         </div>
      </div>
   )
}
