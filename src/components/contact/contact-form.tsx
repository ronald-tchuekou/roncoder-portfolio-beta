"use client";

import { cn } from "@/lib/utils";
import { useTranslations } from 'next-intl'
import { FC } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ContactFormContent } from "./contact-form-content";

export const ContactForm: FC = () => {
    const t = useTranslations('services')

    return (
       <div className={cn('w-full bg-card border border-input', 'rounded-xl p-5', 'flex flex-col gap-8')}>
          <h1 className='text-xl md:text-3xl tracking-tight font-bold text-white'>{t('work_together')}</h1>
          <p>
             {t('you_have_a_project')} <br />
             {t('let_talk_about_it')}
          </p>
          <ContactFormContent />
       </div>
    )
};
