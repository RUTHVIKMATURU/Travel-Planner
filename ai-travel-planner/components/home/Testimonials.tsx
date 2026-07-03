import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Testimonials() {
  return (
    <Section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-12 -z-10 mx-auto h-64 max-w-5xl rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/10"
      />

      <SectionHeader
        maxWidth="3xl"
        title={
          <span id="testimonials-heading">
            Loved by Travelers Worldwide
          </span>
        }
        description="Join thousands of travelers planning smarter journeys with Travix."
      />

      <div className="grid items-stretch gap-6 md:grid-cols-3">
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            featured={index === 1}
            {...testimonial}
          />
        ))}
      </div>
    </Section>
  );
}
