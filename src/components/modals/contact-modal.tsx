'use client'

import { Button } from '@/components/ui/button'
import { Credenza, CredenzaContent, CredenzaFooter, CredenzaHeader, CredenzaTitle } from '@/components/ui/credenza'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { LocaleType } from '@src/i18n/routing'
import { useContactFormStore } from '@src/lib/stores/contact-form.store'
import { LoaderIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { ContactFormContent, ContactFormContentRef } from '../contact/contact-form-content'

export type ContactModalRef = {
   open: (serviceKey: string) => void
}

export type ContactModalProps = {}

export const ContactModal = forwardRef<ContactModalRef, ContactModalProps>(({}, ref) => {
   const contactFormRef = useRef<ContactFormContentRef>(null)
   const t = useTranslations('services')
   const locale = useLocale() as LocaleType
   const isLoading = useContactFormStore((s) => s.isLoading)

   const [open, setOpen] = useState(false)
   const [serviceKey, setServiceKey] = useState<string>()

   const closeModal = useCallback(() => {
      setOpen(false)
      setServiceKey(undefined)
   }, [])

   const toggleOpen = useCallback(
      (stateOpened: boolean) => {
         if (stateOpened === false) closeModal()
      },
      [closeModal]
   )

   useImperativeHandle(ref, () => ({
      open: (serviceKey) => {
         setServiceKey(serviceKey)
         setOpen(true)
      },
   }))

   return (
      <Credenza
         open={open}
         onOpenChange={(state) => {
            if (!isLoading) {
               toggleOpen(state)
            }
         }}
      >
         <CredenzaContent aria-describedby={undefined} className={'gap-0 pb-0 md:min-w-[750px] bg-card'}>
            <CredenzaHeader className='pb-2'>
               <CredenzaTitle className={cn('text-xl md:text-3xl tracking-tight font-mono font-bold text-foreground')}>
                  {t('work_together')}
               </CredenzaTitle>
            </CredenzaHeader>

            <ScrollArea className={cn('md:-mx-6 h-[calc(100vh-300px)] md:h-[calc(100vh-510px)] border-y')}>
               <div className={cn('px-6 py-4 space-y-6')}>
                  <p>
                     {t('you_have_a_project')} <br />
                     {t('let_talk_about_it')}
                  </p>
                  <ContactFormContent
                     ref={contactFormRef}
                     serviceKey={serviceKey}
                     locale={locale}
                     onCompleted={closeModal}
                  />
               </div>
            </ScrollArea>
            <CredenzaFooter className='md:py-5'>
               <Button
                  className='rounded-full relative'
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
            </CredenzaFooter>
         </CredenzaContent>
      </Credenza>
   )
})

ContactModal.displayName = 'ContactModal'
