import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LocaleType } from '@src/i18n/routing'
import { Service } from "@src/resources/util-types";
import { MoveRightIcon } from "lucide-react";
import { useLocale, useTranslations } from 'next-intl'
import { FC } from "react";

export type ServiceItemProps = {
  item: Service;
  onContinue: (serviceKey: string) => void;
};

export const ServiceItem: FC<ServiceItemProps> = ({ item, onContinue }) => {
  const t = useTranslations('services')
  const locale = useLocale() as LocaleType

  return (
     <article className={cn('bg-card rounded-xl border border-input', 'p-5 size-full', 'flex flex-col gap-5')}>
        <h2 className={cn('scroll-m-20 text-2xl font-semibold tracking-tight', 'text-foreground font-serif')}>
           {item.title[locale]}
        </h2>
        <p className='h-full text-muted-foreground'>{item.description[locale]}</p>
        <div>
           <Button onClick={() => onContinue(item.key)} variant={'outline'} className={cn('rounded-full')}>
              {t('continue')}
              <MoveRightIcon className='ml-3 size-4' />
           </Button>
        </div>
     </article>
  )
};
