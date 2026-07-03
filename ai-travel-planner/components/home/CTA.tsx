"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { gradients, radii, shadows } from "@/constants/design";
import {
  fadeUpVariants,
  revealViewport,
  staggerContainer,
} from "@/constants/motion";
import { cn } from "@/lib/utils";

export default function CTA() {
  const reduceMotion = useReducedMotion();
  const fadeUp = fadeUpVariants(Boolean(reduceMotion));

  return (
    <Section className="bg-transparent">
      <motion.div
        className={cn(
          "overflow-hidden px-6 py-14 text-center text-white sm:px-8 md:px-16 md:py-16",
          radii.card,
          gradients.brandSurface,
          shadows.floating,
        )}
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer(Boolean(reduceMotion))}
        whileHover={reduceMotion ? undefined : { scale: 1.01 }}
        transition={{ duration: 0.24, ease: "easeOut" }}
      >
        <motion.h2
          className="text-4xl font-semibold tracking-tight md:text-5xl"
          variants={fadeUp}
        >
          Ready for Your Next Adventure?
        </motion.h2>

        <motion.p
          className="mx-auto mt-5 max-w-2xl text-base leading-7 text-emerald-50 sm:text-lg"
          variants={fadeUp}
        >
          Let AI plan your journey while you focus on making unforgettable memories.
          Build smarter itineraries, manage budgets, and travel with confidence.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col justify-center gap-4 sm:flex-row"
          variants={fadeUp}
        >
          <Button
            asChild
            size="lg"
            className="h-12 rounded-full bg-white px-6 font-semibold text-teal-700 shadow-lg shadow-emerald-950/20 transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-emerald-50 hover:text-emerald-800"
          >
            <Link href="/signup">
              Start Planning
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 rounded-full border-white/30 bg-white/10 px-6 font-semibold text-white backdrop-blur transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:bg-white hover:text-teal-700"
          >
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  );
}
