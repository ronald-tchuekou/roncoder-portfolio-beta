"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { SERVICES } from "@src/resources/util-data";
import { FC, useCallback, useMemo } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactFormSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  email: z.string().email(),
  phone: z.optional(z.string()),
  service: z.string(),
  message: z.string(),
});

type contactFormSchema = z.infer<typeof contactFormSchema>;

type ContactFormContentProps = {
  serviceKey?: string;
};

export const ContactFormContent: FC<ContactFormContentProps> = ({
  serviceKey,
}) => {
  const form = useForm<contactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: useMemo(() => ({ service: serviceKey }), [serviceKey]),
  });

  const submit = useCallback((data: contactFormSchema) => {
    console.log(data);
  }, []);

  // useEffect(() => {
  //   console.log(serviceKey);
  //   form.reset({
  //     service: serviceKey,
  //   });
  // }, [form, serviceKey]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(submit)}
        className={cn("w-full", "grid grid-cols-1 md:grid-cols-2 gap-5")}
      >
        {/* FirstName */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="firstName">
                Prénom <sup>*</sup>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="firstName"
                  className={cn(
                    form.formState.errors?.firstName && "border-destructive"
                  )}
                  placeholder="Veuillez entrer votre prénom"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* LastName */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="lastName">
                Nom <sup>*</sup>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="lastName"
                  className={cn(
                    form.formState.errors?.lastName && "border-destructive"
                  )}
                  placeholder="Veuillez entrer votre nom"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">
                Adresse e-mail <sup>*</sup>
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="email"
                  className={cn(
                    form.formState.errors?.email && "border-destructive"
                  )}
                  placeholder="Veuillez entrer votre email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Phone */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="phone">Téléphone</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="phone"
                  className={cn(
                    form.formState.errors?.phone && "border-destructive"
                  )}
                  placeholder="Veuillez entrer votre téléphone"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Service */}
        <FormField
          control={form.control}
          name="service"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel htmlFor="service">
                Service <sup>*</sup>
              </FormLabel>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      id="service"
                      placeholder="Veuillez sélectionner un service"
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {SERVICES.map((service) => (
                    <SelectItem key={service.key} value={service.key}>
                      {service.title}
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
          name="message"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel htmlFor="message">
                Message <sup>*</sup>
              </FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  id="message"
                  rows={5}
                  className={cn(
                    form.formState.errors?.message && "border-destructive"
                  )}
                  placeholder="Veuillez saisir un message"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="md:col-span-2 pt-5">
          <Button className="rounded-full" type="submit">
            Envoyer le message
          </Button>
        </div>
      </form>
    </Form>
  );
};
