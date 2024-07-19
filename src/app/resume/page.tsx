import { cn } from "@/lib/utils";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { SKILLS_LIST } from "@src/resources/util-data";

export default function Resume() {
  return (
    <section className="w-full flex flex-col gap-5">
      <RevealFromBottom
        elt={"h2"}
        className={cn(
          "scroll-m-20 text-xl lg:text-3xl tracking-tight ",
          "text-white"
        )}
      >
        Mes compétences
      </RevealFromBottom>
      <RevealFromBottom elt={"p"} delay={0.1}>
        Durant les 4 ans d’expériences, j’ai appris plusieurs langages,
        technologies et concepts dont je vous présente quelque une ci-dessous:
      </RevealFromBottom>
      <div className={cn("w-full flex flex-row flex-wrap gap-5")}>
        {SKILLS_LIST.map((skill, index) => (
          <RevealFromBottom key={skill.id} delay={index * 0.1}>
            <div
              title={skill.title}
              className={cn(
                "bg-card border border-input ",
                "flex justify-center items-center",
                "rounded-lg size-24 text-muted-foreground",
                "hover:bg-accent/50 hover:text-white hover:border-muted-foreground",
                "transition-all duration-300"
              )}
            >
              {skill.icon}
            </div>
          </RevealFromBottom>
        ))}
      </div>
    </section>
  );
}
