"use client";

import { cn } from "@/lib/utils";
import { FC } from "react";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { ContactFormContent } from "./contact-form-content";

export const ContactForm: FC = () => {
  return (
    <div
      className={cn(
        "w-full bg-card border border-input",
        "rounded-xl p-5",
        "flex flex-col gap-8"
      )}
    >
      <h1 className="text-xl md:text-3xl tracking-tight font-bold text-white">
        Travaillons ensemble
      </h1>
      <p>
        Vous avez un projet ? <br />
        Discutons en pour une collaboration productive.
      </p>
      <ContactFormContent />
    </div>
  );
};
