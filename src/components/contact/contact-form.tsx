"use client";

import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils";
import { LocaleType } from '@src/i18n/routing'
import { useContactFormStore } from '@src/lib/stores/contact-form.store'
import { LoaderIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { useRef } from 'react'
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ContactFormContent, ContactFormContentRef } from './contact-form-content'

export const ContactForm = () => {
   const contactFormRef = useRef<ContactFormContentRef>(null)
   const t = useTranslations('services')
   const locale = useLocale() as LocaleType
   const isLoading = useContactFormStore((s) => s.isLoading)

   return (
      <div className={cn('w-full bg-card border border-input', 'rounded-xl p-5', 'flex flex-col gap-8')}>
         <h1 className='text-xl md:text-3xl tracking-tight font-bold text-foreground font-mono'>
            {t('work_together')}
         </h1>
         <p>
            {t('you_have_a_project')} <br />
            {t('let_talk_about_it')}
         </p>
         <ContactFormContent ref={contactFormRef} locale={locale} />
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
