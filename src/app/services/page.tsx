import { cn } from "@/lib/utils";
import { Container } from "@src/components/container";
import { RevealFromBottom } from "@src/components/motions/reveal-from-bottom";
import { ServiceItem } from "@src/components/services/service-item";
import { SERVICES } from "@src/resources/util-data";

export default function Services() {
  return (
    <main>
      <Container
        className={cn("grid grid-cols-1 md:grid-cols-2 gap-10 py-10 lg:py-20")}
      >
        {SERVICES.map((item, index) => (
          <RevealFromBottom delay={index * 0.1} key={item.key}>
            <ServiceItem item={item} />
          </RevealFromBottom>
        ))}
      </Container>
    </main>
  );
}
