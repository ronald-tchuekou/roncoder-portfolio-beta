'use client'

import { Button } from '@/components/ui/button'
import { Credenza, CredenzaContent, CredenzaFooter, CredenzaHeader, CredenzaTitle } from '@/components/ui/credenza'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { LocaleType } from '@src/i18n/routing'
import { LoaderIcon } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { forwardRef, useCallback, useImperativeHandle, useRef, useState } from 'react'
import { ContactFormContent, ContactFormContentRef } from '../contact/contact-form-content'

export type ContactModalRef = {
   /** The optional argument is ignored, it keeps older call sites working. */
   open: (_key?: string) => void
}

export type ContactModalProps = Record<string, never>

export const ContactModal = forwardRef<ContactModalRef, ContactModalProps>((_props, ref) => {
   const contactFormRef = useRef<ContactFormContentRef>(null)
   const t = useTranslations('contact')
   const locale = useLocale() as LocaleType
   const [isLoading, setIsLoading] = useState(false)

   const [open, setOpen] = useState(false)

   const closeModal = useCallback(() => {
      setOpen(false)
   }, [])

   const toggleOpen = useCallback(
      (stateOpened: boolean) => {
         if (stateOpened === false) closeModal()
      },
      [closeModal],
   )

   useImperativeHandle(ref, () => ({
      open: () => setOpen(true),
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
                  {t('form_title')}
               </CredenzaTitle>
            </CredenzaHeader>

            <ScrollArea className={cn('md:-mx-6 h-[calc(100vh-300px)] md:h-[calc(100vh-510px)] border-y')}>
               <div className={cn('px-6 py-4 space-y-6')}>
                  <p className='text-muted-foreground'>{t('form_subtitle')}</p>
                  <ContactFormContent
                     ref={contactFormRef}
                     locale={locale}
                     onCompleted={closeModal}
                     onPendingChange={setIsLoading}
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
