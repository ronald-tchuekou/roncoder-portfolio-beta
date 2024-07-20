import { cn } from "@/lib/utils";
import { BackButton } from "@src/components/back-button";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { EXPERIENCES_LIST } from "@src/resources/util-data";
import { DotIcon } from "lucide-react";

export default function ExperienceDetails({
  params,
}: {
  params: { exp_id: string };
}) {
  const experience = EXPERIENCES_LIST.find((exp) => exp.id === params.exp_id);

  return (
    <section className="w-full flex flex-col gap-5">
      <div className={cn("flex gap-3 items-center")}>
        <BackButton />
        <RevealFromBottom
          delay={0.1}
          elt={"h2"}
          className={cn(
            "scroll-m-20 text-xl lg:text-3xl tracking-tight ",
            "text-white"
          )}
        >
          {experience?.title || "Détails sur l'expérience"}
        </RevealFromBottom>
      </div>
      <RevealFromBottom delay={0.2} className={cn("flex")}>
        <p className={cn("text-primary text-lg uppercase")}>
          {experience?.company}
        </p>
        <div className="flex items-center h-full">
          <DotIcon className="size-8 text-primary" />
          <small className={cn("text-muted-foreground")}>
            {experience?.date}
          </small>
        </div>
      </RevealFromBottom>
    </section>
  );
}
