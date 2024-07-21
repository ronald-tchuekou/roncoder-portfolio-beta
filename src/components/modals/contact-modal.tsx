import {
  Credenza,
  CredenzaContent,
  CredenzaHeader,
  CredenzaTitle,
} from "@/components/ui/credenza";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";
import { ContactFormContent } from "../contact/contact-form-content";

export type ContactModalRef = {
  open: (serviceKey: string) => void;
};

export type ContactModalProps = {};

export const ContactModal = forwardRef<ContactModalRef, ContactModalProps>(
  ({}, ref) => {
    const [open, setOpen] = useState(false);
    const [serviceKey, setServiceKey] = useState<string>();

    const closeModal = useCallback(() => {
      setOpen(false);
      setServiceKey(undefined);
    }, []);

    const toggleOpen = useCallback(
      (stateOpened: boolean) => {
        if (stateOpened === false) closeModal();
      },
      [closeModal]
    );

    useImperativeHandle(ref, () => ({
      open: (serviceKey) => {
        setServiceKey(serviceKey);
        setOpen(true);
      },
    }));

    return (
      <Credenza open={open} onOpenChange={toggleOpen}>
        <CredenzaContent
          aria-describedby={undefined}
          className={"gap-0 pb-0 md:min-w-[750px] bg-card"}
        >
          <CredenzaHeader className="pb-2">
            <CredenzaTitle
              className={cn(
                "text-xl md:text-3xl tracking-tight font-bold text-white"
              )}
            >
              Travaillons ensemble
            </CredenzaTitle>
          </CredenzaHeader>
          <ScrollArea
            style={{ height: "calc(100vh - 300px)" }}
            className={cn("md:-mx-6")}
          >
            <div className={cn("p-6 space-y-6")}>
              <p>
                Vous avez un projet ? <br />
                Discutons en pour une collaboration productive.
              </p>
              <ContactFormContent serviceKey={serviceKey} />
            </div>
          </ScrollArea>
        </CredenzaContent>
      </Credenza>
    );
  }
);

ContactModal.displayName = "ContactModal";
