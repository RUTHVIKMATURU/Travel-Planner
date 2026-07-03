"use client";

import { motion, useReducedMotion } from "framer-motion";

import DestinationCard from "./DestinationCard";
import { DESTINATIONS } from "@/constants/destinations";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";
import {
  fadeUpVariants,
  revealViewport,
  staggerContainer,
} from "@/constants/motion";

export default function Destinations() {
  const reduceMotion = useReducedMotion();

  return (
    <Section
      id="destinations"
      className="py-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={fadeUpVariants(Boolean(reduceMotion))}
      >
        <SectionHeader
          maxWidth="3xl"
          title="Popular Destinations"
          description="Discover AI-recommended places with budget insight, ideal timing, and trip length at a glance."
        />
      </motion.div>

      <motion.div
        className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={revealViewport}
        variants={staggerContainer(Boolean(reduceMotion))}
      >
        {DESTINATIONS.map((destination) => (
          <DestinationCard
            key={destination.name}
            {...destination}
          />
        ))}
      </motion.div>
    </Section>
  );
}
