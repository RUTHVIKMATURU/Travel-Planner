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
    <Section className="py-24">
      <motion.div
        className={cn(
          "overflow-hidden px-8 py-16 text-center text-white md:px-16",
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

        <motion.h2 className="text-4xl font-bold md:text-5xl" variants={fadeUp}>
          Ready for Your Next Adventure?
        </motion.h2>

        <motion.p
          className="mx-auto mt-6 max-w-2xl text-lg text-emerald-50"
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
            className="bg-white text-teal-700 hover:bg-teal-700 hover:text-white"
          >
            <Link href="/signup">
              Start Planning
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-teal-700 text-white hover:bg-white hover:text-teal-700"
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
