import Container from "@/components/layout/Container";
import {spacing } from "@/constants/design";
import { cn } from "@/lib/utils";
import HeroContent from "./HeroContent";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className={cn("relative overflow-hidden", spacing.heroSection)}>
      

      <Container>
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-14 py-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-20">
          <HeroContent />
          <HeroPreview />
        </div>
      </Container>
    </section>
  );
}
