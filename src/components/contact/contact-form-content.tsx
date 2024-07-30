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
import {
  contactFormSchema,
  ContactFormSchema,
} from "@src/resources/form-schemas";
import { SERVICES } from "@src/resources/util-data";
import { createRequest } from "@src/services/contact-service";
import { useMutation } from "@tanstack/react-query";
import { RefreshCw } from "lucide-react";
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
  const form = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: useMemo(() => ({ service: serviceKey }), [serviceKey]),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: createRequest,
    onSuccess() {
      form.reset({
        service: serviceKey || "",
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      onCompleted?.();
      toast.success("Votre message a été envoyé avec succès !", {
        richColors: true,
        duration: 10000,
        description:
          "Merci de m'avoir contacté. Je vous donnerai une réponse dans les plus brefs délais.",
        action: {
          label: "OK",
          onClick: () => toast.dismiss(),
        },
      });
    },
    onError(error) {
      console.log("Request error", error);
      toast.error("Une erreur s'est produite lors de l'envoi du message.", {
        richColors: true,
        duration: 10000,
        description:
          "Veuillez réessayer ou me contacter directement par email ou WhatsApp, juste sur la section de droite (Desktop) ou en haut (Mobile).",
      });
    },
  });

  const submit = useCallback(
    (data: ContactFormSchema) => {
      mutate(data);
    },
    [mutate]
  );

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
          <Button disabled={isPending} className="rounded-full" type="submit">
            {isPending && <RefreshCw className="animate-spin size-4 mr-2" />}
            Envoyer le message
          </Button>
        </div>
      </form>
    </Form>
  );
};
