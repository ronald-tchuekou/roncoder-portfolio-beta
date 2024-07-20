import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Service } from "@src/resources/util-types";
import { MoveRightIcon } from "lucide-react";
import { FC } from "react";

export type ServiceItemProps = {
  item: Service;
  onContinue: (serviceKey: string) => void;
};

export const ServiceItem: FC<ServiceItemProps> = ({ item, onContinue }) => {
  return (
    <article
      className={cn(
        "bg-card rounded-xl border border-input",
        "p-5 size-full",
        "flex flex-col gap-5"
      )}
    >
      <h2
        className={cn(
          "font-barrio text-white",
          "scroll-m-20 text-4xl font-extrabold lg:text-5xl"
        )}
      >
        {item.id}
      </h2>
      <h3
        className={cn(
          "scroll-m-20 text-2xl font-normal tracking-tight",
          "text-white"
        )}
      >
        {item.title}
      </h3>
      <p>{item.description}</p>
      <div>
        <Button
          onClick={() => onContinue(item.key)}
          variant={"outline"}
          className={cn("rounded-full")}
        >
          Continuer
          <MoveRightIcon className="ml-3 size-4" />
        </Button>
      </div>
    </article>
  );
};
