import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { EXPERIENCES_LIST } from '@src/resources/data/experiences'
import { METADATA } from '@src/resources/data/metadata'
import { DotIcon, MoveRightIcon } from "lucide-react";
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
	title: 'Mes expériences. | roncoder',
	description:
		'Je conçois et implémente des applications web et mobiles, design des prototypes professionnels pour décrire au mieux le scénario des fonctionnalités de vos applications.',
	...METADATA,
};

export default function Experiences() {
  return (
    <section className="w-full flex flex-col gap-5">
      <RevealFromBottom
        elt={"h2"}
        className={cn(
          "scroll-m-20 text-xl lg:text-3xl tracking-tight ",
          "text-white"
        )}
      >
        Mes expériences
      </RevealFromBottom>
      <RevealFromBottom elt={"p"} delay={0.1}>
        Ayant eu la possibilité de travailler pour plusieurs entreprise qui font
        dans le domaines de la tech, je vous liste ci-dessous quelques unes:
      </RevealFromBottom>
      <div className={cn("w-full grid grid-cols-1 gap-8 lg:grid-cols-2")}>
        {EXPERIENCES_LIST.map((experience, index) => (
          <RevealFromBottom key={experience.id} delay={index * 0.1}>
            <div
              className={cn(
                "bg-card border border-input",
                "rounded-lg p-5 size-full",
                "flex flex-col gap-3"
              )}
            >
              <h3 className={cn("text-xl font-bold text-white")}>
                {experience.title}
              </h3>
              <p className={cn("text-primary text-lg uppercase")}>
                {experience.company}
              </p>
              <div className="flex items-center h-full">
                <DotIcon className="size-8 text-primary" />
                <small className={cn("text-muted-foreground")}>
                  {experience.date}
                </small>
              </div>
              <div>
                <Link href={`/resume/experiences/${experience.id}`}>
                  <Button
                    variant={"outline"}
                    size={"sm"}
                    className={cn("text-xs", "rounded-full")}
                  >
                    Consulter
                    <MoveRightIcon className="size-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </RevealFromBottom>
        ))}
      </div>
    </section>
  );
}
