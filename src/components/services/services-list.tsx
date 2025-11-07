"use client";

import { cn } from "@/lib/utils";
import { SERVICES } from '@src/resources/data/services'
import { FC, useCallback, useRef } from "react";
import { Container } from "../container";
import { ContactModal, ContactModalRef } from "../modals/contact-modal";
import { RevealFromBottom } from "../motions/reveal-from-bottom";
import { ServiceItem } from "./service-item";

export const ServicesList: FC = () => {
  const contactModalRef = useRef<ContactModalRef>(null);

  const openContactModal = useCallback((serviceKey: string) => {
    contactModalRef.current?.open(serviceKey);
  }, []);

  return (
     <>
        <Container className={cn('grid grid-cols-1 md:grid-cols-2 gap-10')}>
           {SERVICES.map((item, index) => (
              <RevealFromBottom delay={index < 3 ? index * 0.1 : 0.1} key={item.key}>
                 <ServiceItem item={item} onContinue={openContactModal} />
              </RevealFromBottom>
           ))}
        </Container>
        <ContactModal ref={contactModalRef} />
     </>
  )
};
