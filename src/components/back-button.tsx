"use client";

import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { RevealFromBottom } from "./motions/reveal-from-bottom";

export const BackButton: FC = () => {
  const router = useRouter();

  return (
    <RevealFromBottom>
      <Button
        onClick={router.back}
        size={"icon"}
        variant={"outline"}
        className="rounded-full"
      >
        <ArrowLeftIcon className="size-5" />
      </Button>
    </RevealFromBottom>
  );
};
