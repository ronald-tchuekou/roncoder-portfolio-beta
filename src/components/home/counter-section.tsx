import { cn } from "@/lib/utils";
import { FC } from "react";
import { Container } from "../container";
import { RevealFromBottom } from "../motions/reveal-from-bottom";

export const CounterSection: FC = () => {
  return (
    <Container className="pb-10">
      <section
        className={cn(
          "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-3 md:gap-8"
        )}
      >
        <RevealFromBottom className="flex gap-3">
          <p className="text-5xl font-extrabold text-foreground">5</p>
          <p>
            Années <br /> D&apos;expériences
          </p>
        </RevealFromBottom>

        <RevealFromBottom delay={0.2} className="flex gap-3">
          <p className="text-5xl font-extrabold text-foreground">12</p>
          <p>
            Projets <br /> Terminés
          </p>
        </RevealFromBottom>

        <RevealFromBottom delay={0.3} className="flex gap-3">
          <p className="text-5xl font-extrabold text-foreground">8</p>
          <p>
            Technologies <br /> Maîtrisées
          </p>
        </RevealFromBottom>

        <RevealFromBottom delay={0.4} className="flex gap-3">
          <p className="text-5xl font-extrabold text-foreground">5987</p>
          <p>
            Total <br /> Contributions
          </p>
        </RevealFromBottom>
      </section>
    </Container>
  );
};
