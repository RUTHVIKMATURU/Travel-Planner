import Container from "@/components/layout/Container";
import { spacing } from "@/constants/design";
import { cn } from "@/lib/utils";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className={cn("relative overflow-hidden", spacing.heroSection)}>
      <Container>
        <div className="grid min-h-[calc(100vh-9rem)] items-center gap-12 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:gap-16 xl:gap-20">
          <HeroContent />
          <HeroPreview />
        </div>
      </Container>
    </section>
  );
}
