'use client'

import { Form, FormControl, FormField, FormItem, FormLabel } from '@src/components/ui/form'
import { Input } from '@src/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@src/components/ui/select'
import { Textarea } from '@src/components/ui/textarea'
import { cn } from '@src/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { LocaleType } from '@src/i18n/routing'
import {
   CONTRACT_TYPES,
   ContactFormInput,
   ContactFormSchema,
   WORK_MODES,
   contactFormSchema,
   defaultContactFormValues,
} from '@src/resources/form-schemas'
import { ContactService } from '@src/services/contact.service'
import { useTranslations } from 'next-intl'
import { Ref, useEffect, useImperativeHandle, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

export type ContactFormContentRef = {
   submit: VoidFunction
}

type Props = {
   locale: LocaleType
   onCompleted?: VoidFunction
   /** Lets the parent mirror the pending state on its own submit button. */
   onPendingChange?: (isPending: boolean) => void
   ref?: Ref<ContactFormContentRef>
}

/** Translation key holding the label of each contract type. */
const CONTRACT_TYPE_LABELS: Record<string, string> = {
   permanent: 'contract_permanent',
   freelance: 'contract_freelance',
   long_term: 'contract_long_term',
   other: 'contract_other',
}

/** Translation key holding the label of each work mode. */
const WORK_MODE_LABELS: Record<string, string> = {
   remote: 'work_remote',
   hybrid: 'work_hybrid',
   onsite: 'work_onsite',
}

export const ContactFormContent = ({ locale, onCompleted, onPendingChange, ref }: Props) => {
   const t = useTranslations('contact')

   const defaultValues = useMemo(() => ({ ...defaultContactFormValues, locale }), [locale])

   const form = useForm<ContactFormInput, unknown, ContactFormSchema>({
      resolver: zodResolver(contactFormSchema),
      defaultValues,
   })

   const [isPending, setIsPending] = useState(false)

   useEffect(() => {
      onPendingChange?.(isPending)
   }, [isPending, onPendingChange])

   const submit = form.handleSubmit(async (data) => {
      if (isPending) return
      setIsPending(true)
      try {
         await ContactService.send(data)
         form.reset(defaultValues)
         onCompleted?.()
         toast.success(t('success_title'), { description: t('success_description') })
      } catch {
         toast.error(t('error_title'), { description: t('error_description') })
      } finally {
         setIsPending(false)
      }
   })

   useImperativeHandle(ref, () => ({
      submit,
   }))

   /** Errors carry a translation key, resolved here so the message follows the active locale. */
   const fieldError = (name: keyof ContactFormSchema) => {
      const message = form.formState.errors[name]?.message
      if (!message) return null
      return <p className='text-xs font-medium text-destructive'>{t(message)}</p>
   }

   const requiredMark = <span className='text-destructive text-lg'>*</span>

   return (
      <Form {...form}>
         <form onSubmit={submit} className={cn('w-full', 'grid grid-cols-1 md:grid-cols-2 gap-5')}>
            {/* First name */}
            <FormField
               control={form.control}
               name='firstName'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='firstName'>
                        {t('first_name')} {requiredMark}
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='firstName'
                           autoComplete='given-name'
                           aria-invalid={!!form.formState.errors.firstName}
                           className={cn(form.formState.errors.firstName && 'border-destructive')}
                           placeholder={t('enter_your_first_name')}
                        />
                     </FormControl>
                     {fieldError('firstName')}
                  </FormItem>
               )}
            />
            {/* Last name */}
            <FormField
               control={form.control}
               name='lastName'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='lastName'>
                        {t('last_name')} {requiredMark}
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='lastName'
                           autoComplete='family-name'
                           aria-invalid={!!form.formState.errors.lastName}
                           className={cn(form.formState.errors.lastName && 'border-destructive')}
                           placeholder={t('enter_your_last_name')}
                        />
                     </FormControl>
                     {fieldError('lastName')}
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
                        {t('email')} {requiredMark}
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='email'
                           type='email'
                           autoComplete='email'
                           aria-invalid={!!form.formState.errors.email}
                           className={cn(form.formState.errors.email && 'border-destructive')}
                           placeholder={t('enter_your_email')}
                        />
                     </FormControl>
                     {fieldError('email')}
                  </FormItem>
               )}
            />
            {/* Company */}
            <FormField
               control={form.control}
               name='company'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='company'>
                        {t('company')} {requiredMark}
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='company'
                           autoComplete='organization'
                           aria-invalid={!!form.formState.errors.company}
                           className={cn(form.formState.errors.company && 'border-destructive')}
                           placeholder={t('enter_your_company')}
                        />
                     </FormControl>
                     {fieldError('company')}
                  </FormItem>
               )}
            />
            {/* Job title */}
            <FormField
               control={form.control}
               name='jobTitle'
               render={({ field }) => (
                  <FormItem className='md:col-span-2'>
                     <FormLabel htmlFor='jobTitle'>
                        {t('job_title')} {requiredMark}
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='jobTitle'
                           autoComplete='organization-title'
                           aria-invalid={!!form.formState.errors.jobTitle}
                           className={cn(form.formState.errors.jobTitle && 'border-destructive')}
                           placeholder={t('enter_your_job_title')}
                        />
                     </FormControl>
                     {fieldError('jobTitle')}
                  </FormItem>
               )}
            />
            {/* Contract type */}
            <FormField
               control={form.control}
               name='contractType'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='contractType'>
                        {t('contract_type')} {requiredMark}
                     </FormLabel>
                     <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                           <SelectTrigger
                              id='contractType'
                              aria-invalid={!!form.formState.errors.contractType}
                              className={cn(form.formState.errors.contractType && 'border-destructive')}
                           >
                              <SelectValue placeholder={t('select_the_contract_type')} />
                           </SelectTrigger>
                           <SelectContent>
                              {CONTRACT_TYPES.map((value) => (
                                 <SelectItem key={value} value={value}>
                                    {t(CONTRACT_TYPE_LABELS[value])}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </FormControl>
                     {fieldError('contractType')}
                  </FormItem>
               )}
            />
            {/* Work mode */}
            <FormField
               control={form.control}
               name='workMode'
               render={({ field }) => (
                  <FormItem>
                     <FormLabel htmlFor='workMode'>
                        {t('work_mode')} {requiredMark}
                     </FormLabel>
                     <FormControl>
                        <Select onValueChange={field.onChange} value={field.value}>
                           <SelectTrigger
                              id='workMode'
                              aria-invalid={!!form.formState.errors.workMode}
                              className={cn(form.formState.errors.workMode && 'border-destructive')}
                           >
                              <SelectValue placeholder={t('select_the_work_mode')} />
                           </SelectTrigger>
                           <SelectContent>
                              {WORK_MODES.map((value) => (
                                 <SelectItem key={value} value={value}>
                                    {t(WORK_MODE_LABELS[value])}
                                 </SelectItem>
                              ))}
                           </SelectContent>
                        </Select>
                     </FormControl>
                     {fieldError('workMode')}
                  </FormItem>
               )}
            />
            {/* Offer URL */}
            <FormField
               control={form.control}
               name='offerUrl'
               render={({ field }) => (
                  <FormItem className='md:col-span-2'>
                     <FormLabel htmlFor='offerUrl'>
                        {t('offer_url')} <span className='text-muted-foreground text-xs'>({t('optional')})</span>
                     </FormLabel>
                     <FormControl>
                        <Input
                           {...field}
                           id='offerUrl'
                           inputMode='url'
                           aria-invalid={!!form.formState.errors.offerUrl}
                           className={cn(form.formState.errors.offerUrl && 'border-destructive')}
                           placeholder={t('enter_the_offer_url')}
                        />
                     </FormControl>
                     {fieldError('offerUrl')}
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
                        {t('message')} {requiredMark}
                     </FormLabel>
                     <FormControl>
                        <Textarea
                           {...field}
                           id='message'
                           rows={5}
                           maxLength={2000}
                           aria-invalid={!!form.formState.errors.message}
                           className={cn('resize-none', form.formState.errors.message && 'border-destructive')}
                           placeholder={t('enter_your_message')}
                        />
                     </FormControl>
                     {fieldError('message')}
                  </FormItem>
               )}
            />
            {/* Honeypot: hidden from humans, filled by bots. Stays empty for real submissions. */}
            <input
               type='text'
               tabIndex={-1}
               autoComplete='off'
               aria-hidden='true'
               className='hidden'
               {...form.register('website')}
            />
            <button className='absolute bottom-0 right-0 invisible w-0 h-0' type='submit' disabled={isPending} />
         </form>
      </Form>
   )
}
