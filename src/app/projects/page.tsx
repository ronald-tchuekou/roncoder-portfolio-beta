import { cn } from "@/lib/utils";
import { Container } from "@src/components/container";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { ProjectItem } from "@src/components/projects/project-item";
import { PROJECTS } from "@src/resources/util-data";

export default function Projects() {
  return (
    <main>
      <Container
        className={cn("grid grid-cols-1 md:grid-cols-2 gap-10 py-10 lg:py-20")}
      >
        {PROJECTS.map((item, index) => (
          <RevealFromBottom delay={index * 0.1} key={item.id}>
            <ProjectItem item={item} />
          </RevealFromBottom>
        ))}
      </Container>
    </main>
  );
}
