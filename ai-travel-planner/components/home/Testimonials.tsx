import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Testimonials() {
  return (
    <Section className="py-24">
      <SectionHeader
        title="Loved by Travelers Worldwide"
        description="Join thousands of travelers planning smarter journeys with Voya."
      />

      <div className="grid gap-8 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial) => (
          <TestimonialCard
            key={testimonial.name}
            {...testimonial}
          />
        ))}
      </div>
    </Section>
  );
}
