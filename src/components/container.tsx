import { cn } from "@/lib/utils";
import { FC, PropsWithChildren } from "react";

export const Container: FC<
  PropsWithChildren<{ className?: string; rootClassName?: string }>
> = ({ className, rootClassName, children }) => {
  return (
    <div className={cn("w-full", rootClassName)}>
      <div
        className={cn("w-full max-w-[1280px] mx-auto px-4 lg:px-8", className)}
      >
        {children}
      </div>
    </div>
  );
};
