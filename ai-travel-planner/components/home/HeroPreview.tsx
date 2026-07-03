"use client";

import { motion, useReducedMotion } from "framer-motion";

import { fadeUpVariants, revealViewport } from "@/constants/motion";

export default function HeroPreview() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      aria-hidden="true"
      className="hidden min-h-[520px] lg:block"
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={fadeUpVariants(Boolean(reduceMotion))}
    />
  );
}
