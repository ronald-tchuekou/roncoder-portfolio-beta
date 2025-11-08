"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from '@src/i18n/routing'
import { useContactFormStore } from '@src/lib/stores/contact-form.store'
import { SERVICES } from '@src/resources/data/services'
import { contactFormSchema, ContactFormSchema, defaultContactFormValues } from '@src/resources/form-schemas'
import { ContactService } from '@src/services/contact.service'
import { useMutation } from "@tanstack/react-query";
import { useTranslations } from 'next-intl'
import { Ref, useImperativeHandle } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export type ContactFormContentRef = {
   submit: VoidFunction
}

type Props = {
   locale: LocaleType
   serviceKey?: string
   onCompleted?: VoidFunction
   ref?: Ref<ContactFormContentRef>
}

export const ContactFormContent = ({ locale, serviceKey, onCompleted, ref }: Props) => {
   const t = useTranslations('services')
   const setLoading = useContactFormStore((s) => s.setLoading)
   const defaultValues = {
      ...defaultContactFormValues,
      service: serviceKey || '',
      locale: locale,
   }

   const form = useForm<ContactFormSchema>({
      resolver: zodResolver(contactFormSchema),
      defaultValues,
   })

   const { mutate, isPending } = useMutation({
      async mutationFn(body: ContactFormSchema) {
         await ContactService.notifyDiscord(body)
      },
      onSuccess() {
         form.reset(defaultValues)
         onCompleted?.()
         toast.success(t('your_message_is_successfully_sent'), {
            description: t('thanks_to_contacted_me'),
         })
         setLoading(false)
      },
      onError(error) {
         console.log('Request error', error)
         toast.error(t('error_has_provided'), {
            description: t('please_try_again'),
         })
         setLoading(false)
      },
   })

   const submit = form.handleSubmit((data) => {
      if (!isPending) {
         setLoading(true)
         mutate(data)
      }
   })

   useImperativeHandle(ref, () => ({
      submit,
   }))

   return (
      <Form {...form}>
         <form onSubmit={submit} className={cn('w-full', 'grid grid-cols-1 md:grid-cols-2 gap-5')}>
            {/* FirstName */}
            <FormField
               control={form.control}
               name='firstName'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='firstName'>
                        {t('firstName')} <span className='text-destructive text-lg'>*</span>
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='firstName'
                           autoFocus={true}
                           className={cn(form.formState.errors?.firstName && 'border-destructive')}
                           placeholder={t('enter_your_firstName')}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            {/* LastName */}
            <FormField
               control={form.control}
               name='lastName'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='lastName'>{t('lastName')}</FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='lastName'
                           className={cn(form.formState.errors?.lastName && 'border-destructive')}
                           placeholder={t('enter_your_lastName')}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            {/* Email */}
            <FormField
               control={form.control}
               name='email'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='email'>
                        {t('email')} <span className='text-destructive text-lg'>*</span>
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='email'
                           className={cn(form.formState.errors?.email && 'border-destructive')}
                           placeholder={t('enter_your_email')}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            {/* Phone */}
            <FormField
               control={form.control}
               name='phone'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='phone'>{t('phone')}</FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='phone'
                           className={cn(form.formState.errors?.phone && 'border-destructive')}
                           placeholder={t('enter_your_phone')}
                        />
                     </FormControl>
                     {form.formState.errors.phone?.message && (
                        <p className={cn('text-xs font-medium text-destructive')}>
                           {t(form.formState.errors.phone.message)}
                        </p>
                     )}
                  </FormItem>
               )}
            />
            {/* Service */}
            <FormField
               control={form.control}
               name='service'
               render={({ field }) => (
                  <FormItem className='md:col-span-2'>
                     <FormLabel htmlFor='service'>
                        Service <span className='text-destructive text-lg'>*</span>
                     </FormLabel>
                     <FormControl>
                        <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                           <SelectTrigger className={cn(form.formState.errors?.service && 'border-destructive')}>
                              <SelectValue id='service' placeholder={t('select_the_service')} />
                           </SelectTrigger>
                           <SelectContent>
                              {SERVICES.map((service) => (
                                 <SelectItem key={service.key} value={service.key}>
                                    {service.title[locale]}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </FormControl>

                     <FormMessage />
                  </FormItem>
               )}
            />
            {/* Message */}
            <FormField
               control={form.control}
               name='message'
               render={({ field }) => (
                  <FormItem className='md:col-span-2'>
                     <FormLabel htmlFor='message'>
                        Message <span className='text-destructive text-lg'>*</span>
                     </FormLabel>
                     <FormControl>
                        <Textarea
                           {...field}
                           id='message'
                           rows={5}
                           className={cn('resize-none', form.formState.errors?.message && 'border-destructive')}
                           placeholder={t('enter_your_message')}
                        />
                     </FormControl>
                     <FormMessage />
                  </FormItem>
               )}
            />
            <button className='absolute bottom-0 right-0 invisible w-0 h-0' type='submit' disabled={isPending} />
         </form>
      </Form>
   )
}
