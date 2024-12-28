"use client";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { LocaleType } from '@src/i18n/routing'
import { SERVICES } from '@src/resources/data/services'
import { contactFormSchema, ContactFormSchema } from '@src/resources/form-schemas'
import { createRequest } from "@src/services/contact-service";
import { useMutation } from "@tanstack/react-query";
import { Loader } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import { FC, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

type ContactFormContentProps = {
  serviceKey?: string;
  onCompleted?: () => void;
};

export const ContactFormContent: FC<ContactFormContentProps> = ({
  serviceKey,
  onCompleted,
}) => {
  const t = useTranslations('services')
  const locale = useLocale() as LocaleType

  const form = useForm<ContactFormSchema>({
     resolver: zodResolver(contactFormSchema),
     defaultValues: useMemo(
        () => ({
           firstName: '',
           lastName: '',
           email: '',
           phone: '',
           message: '',
           service: serviceKey || '',
           locale: locale,
        }),
        [serviceKey, locale]
     ),
  })

  const { mutate, isPending } = useMutation({
     mutationFn: createRequest,
     onSuccess() {
        form.reset({
           service: serviceKey || '',
           firstName: '',
           lastName: '',
           email: '',
           phone: '',
           message: '',
           locale,
        })
        onCompleted?.()
        toast.success(t('your_message_is_successfully_sent'), {
           richColors: true,
           duration: 10000,
           description: t('thanks_to_contacted_me'),
           action: {
              label: 'OK',
              onClick: () => toast.dismiss(),
           },
        })
     },
     onError(error) {
        console.log('Request error', error)
        toast.error(t('error_has_provided'), {
           richColors: true,
           duration: 10000,
           description: t('please_try_again'),
        })
     },
  })

  const submit = useCallback(
     (data: ContactFormSchema) => {
        mutate(data)
     },
     [mutate]
  )

  return (
     <Form {...form}>
        <form onSubmit={form.handleSubmit(submit)} className={cn('w-full', 'grid grid-cols-1 md:grid-cols-2 gap-5')}>
           {/* FirstName */}
           <FormField
              control={form.control}
              name='firstName'
              render={({ field }) => (
                 <FormItem>
                    <FormLabel htmlFor='firstName'>
                       {t('firstName')} <sup>*</sup>
                    </FormLabel>
                    <FormControl>
                       <Input
                          {...field}
                          id='firstName'
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
                    <FormLabel htmlFor='lastName'>
                       {t('lastName')} <sup>*</sup>
                    </FormLabel>
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
                       {t('email')} <sup>*</sup>
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
                    <FormMessage />
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
                       Service <sup>*</sup>
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value} defaultValue={field.value}>
                       <FormControl>
                          <SelectTrigger>
                             <SelectValue id='service' placeholder={t('select_the_service')} />
                          </SelectTrigger>
                       </FormControl>
                       <SelectContent>
                          {SERVICES.map((service) => (
                             <SelectItem key={service.key} value={service.key}>
                                {service.title[locale]}
                             </SelectItem>
                          ))}
                       </SelectContent>
                    </Select>
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
                       Message <sup>*</sup>
                    </FormLabel>
                    <FormControl>
                       <Textarea
                          {...field}
                          id='message'
                          rows={5}
                          className={cn(form.formState.errors?.message && 'border-destructive')}
                          placeholder={t('enter_your_message')}
                       />
                    </FormControl>
                    <FormMessage />
                 </FormItem>
              )}
           />
           <div className='md:col-span-2 pt-5'>
              <Button disabled={isPending} className='rounded-full' type='submit'>
                 {isPending && <Loader className='animate-spin size-4 mr-2' />}
                 {t('send_the_message')}
              </Button>
           </div>
        </form>
     </Form>
  )
};
