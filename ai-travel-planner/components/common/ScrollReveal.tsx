"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

import { fadeUpVariants, revealViewport } from "@/constants/motion";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function ScrollReveal({
  children,
  className,
  delay = 0,
}: ScrollRevealProps) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={fadeUpVariants(Boolean(reduceMotion))}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
