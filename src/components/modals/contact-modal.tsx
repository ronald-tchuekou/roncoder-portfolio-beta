import { Credenza, CredenzaContent, CredenzaHeader, CredenzaTitle } from '@/components/ui/credenza'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { useTranslations } from 'next-intl'
import { forwardRef, useCallback, useImperativeHandle, useState } from 'react'
import { ContactFormContent } from '../contact/contact-form-content'

export type ContactModalRef = {
   open: (serviceKey: string) => void
}

export type ContactModalProps = {}

export const ContactModal = forwardRef<ContactModalRef, ContactModalProps>(({}, ref) => {
   const t = useTranslations('services')

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
      <Credenza open={open} onOpenChange={toggleOpen}>
         <CredenzaContent aria-describedby={undefined} className={'gap-0 pb-0 md:min-w-[750px] bg-card'}>
            <CredenzaHeader className='pb-2'>
               <CredenzaTitle className={cn('text-xl md:text-3xl tracking-tight font-bold text-foreground')}>
                  {t('work_together')}
               </CredenzaTitle>
            </CredenzaHeader>
            <ScrollArea className={cn('md:-mx-6 h-[calc(100vh-300px)] md:h-[calc(100vh-415px)]')}>
               <div className={cn('p-6 space-y-6')}>
                  <p>
                     {t('you_have_a_project')} <br />
                     {t('let_talk_about_it')}
                  </p>
                  <ContactFormContent serviceKey={serviceKey} />
               </div>
            </ScrollArea>
         </CredenzaContent>
      </Credenza>
   )
})

ContactModal.displayName = 'ContactModal'
