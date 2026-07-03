"use client";

import { motion, useReducedMotion } from "framer-motion";

import { TESTIMONIALS } from "@/constants/testimonials";
import TestimonialCard from "./TestimonialCard";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import {
  fadeUpVariants,
  revealViewport,
  staggerContainer,
} from "@/constants/motion";

export default function Testimonials() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      aria-labelledby="testimonials-heading"
      className="relative overflow-hidden py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-12 -z-10 mx-auto h-64 max-w-5xl rounded-full bg-emerald-300/10 blur-3xl dark:bg-emerald-500/10"
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={fadeUpVariants(Boolean(reduceMotion))}
      >
        <SectionHeader
          maxWidth="3xl"
          title={
            <span id="testimonials-heading">
              Loved by Travelers Worldwide
            </span>
          }
          description="Join thousands of travelers planning smarter journeys with Travix."
        />
      </motion.div>

      <motion.div
        className="grid items-stretch gap-6 md:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer(Boolean(reduceMotion))}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.name}
            featured={index === 1}
            {...testimonial}
          />
        ))}
      </motion.div>
    </Section>
  );
}
