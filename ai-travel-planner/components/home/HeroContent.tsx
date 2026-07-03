"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  CheckCircle2,
  Play,
  Sparkles,
  Star,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { gradients } from "@/constants/design";
import {
  fadeUpVariants,
  revealViewport,
  staggerContainer,
} from "@/constants/motion";
import { cn } from "@/lib/utils";

const stats = [
  {
    value: "10K+",
    label: "Trips planned",
  },
  {
    value: "150+",
    label: "Destinations",
  },
  {
    value: "98%",
    label: "Traveler rating",
  },
];

const proofPoints = [
  "Personalized routes",
  "Budget-aware plans",
  "Stress-free days",
];

export default function HeroContent() {
  const reduceMotion = useReducedMotion();
  const fadeUp = fadeUpVariants(Boolean(reduceMotion));

  return (
    <motion.div
      className="flex max-w-3xl flex-col items-start"
      initial="hidden"
      whileInView="visible"
      viewport={revealViewport}
      variants={staggerContainer(Boolean(reduceMotion))}
    >
      <motion.div variants={fadeUp}>
        <Badge className="mb-7 rounded-full border border-emerald-200/80 bg-white/75 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-900/5 backdrop-blur hover:bg-white dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/50">
        <Sparkles className="mr-2 h-4 w-4" />
        AI-powered itinerary planning
      </Badge>
      </motion.div>

      <motion.h1
        variants={fadeUp}
        className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl"
      >
        Plan smarter trips with{" "}
        <span className={gradients.brandText}>AI precision.</span>
      </motion.h1>

      <motion.p
        variants={fadeUp}
        className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 sm:text-xl sm:leading-9"
      >
        Travix turns your travel goals into polished itineraries, balanced
        budgets, and destination ideas that feel tailored from the first click.
      </motion.p>

      <motion.div
        variants={fadeUp}
        className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
      >
        <Button
          asChild
          size="lg"
          className={cn(
            "h-12 rounded-full px-6 text-base font-semibold text-white shadow-lg shadow-emerald-900/20 transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-900/25",
            gradients.primaryAction,
          )}
        >
          <Link href="/signup">
            Start planning
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="h-12 rounded-full border-slate-200 bg-white/70 px-6 text-base font-semibold text-slate-800 shadow-sm backdrop-blur transition-all duration-300 motion-safe:hover:-translate-y-0.5 hover:border-emerald-200 hover:bg-emerald-50 hover:text-emerald-700 dark:border-zinc-800 dark:bg-zinc-950/50 dark:text-slate-100 dark:hover:bg-emerald-950/30 dark:hover:text-emerald-300"
        >
          <Link href="#features">
            <Play className="mr-2 h-4 w-4 fill-current" />
            See features
          </Link>
        </Button>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
      >
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {["T", "A", "V"].map((initial) => (
              <span
                key={initial}
                className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-emerald-500 to-teal-500 text-sm font-bold text-white shadow-sm dark:border-zinc-950"
              >
                {initial}
              </span>
            ))}
          </div>

          <div className="flex">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                className="h-4 w-4 fill-amber-400 text-amber-400"
              />
            ))}
          </div>
        </div>

        <p className="text-sm font-medium text-slate-600 dark:text-slate-400">
          Trusted by{" "}
          <span className="text-slate-950 dark:text-white">10,000+</span>{" "}
          travelers building better journeys.
        </p>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-8 flex flex-wrap gap-3 text-sm font-medium text-slate-600 dark:text-slate-400"
      >
        {proofPoints.map((item) => (
          <span
            key={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-3 py-1.5 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/40"
          >
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            {item}
          </span>
        ))}
      </motion.div>

      <motion.div
        variants={fadeUp}
        className="mt-12 grid w-full max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200/80 bg-white/65 p-4 shadow-sm backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/40"
          >
            <h3 className="text-3xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400">
              {stat.value}
            </h3>

            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              {stat.label}
            </p>
          </div>
        ))}
      </motion.div>

      <motion.div variants={fadeUp}>
        <Link
        href="#features"
        className="mt-12 inline-flex items-center gap-3 text-sm font-semibold text-slate-500 transition-colors hover:text-emerald-700 dark:text-slate-400 dark:hover:text-emerald-300"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border border-slate-300 p-1 dark:border-zinc-700">
          <ArrowDown className="mt-0.5 h-3.5 w-3.5 motion-safe:animate-bounce" />
        </span>
        Scroll to explore
      </Link>
      </motion.div>
    </motion.div>
  );
}
