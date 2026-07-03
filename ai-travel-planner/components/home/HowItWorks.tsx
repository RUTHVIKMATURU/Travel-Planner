import { HOW_IT_WORKS } from "@/constants/howItWorks";
import StepCard from "./StepCard";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import ScrollReveal from "@/components/common/ScrollReveal";

export default function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-slate-50 py-24 dark:bg-zinc-950">
      <ScrollReveal>
        <SectionHeader
          title="How It Works"
          description="Planning your dream vacation has never been easier."
        />
      </ScrollReveal>

      <ScrollReveal className="grid gap-8 md:grid-cols-3" delay={0.08}>
        {HOW_IT_WORKS.map((step) => (
          <StepCard
            key={step.step}
            {...step}
          />
        ))}
      </ScrollReveal>
    </Section>
  );
}
