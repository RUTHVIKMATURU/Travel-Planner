"use client";

import { ArrowUpRight, CheckCircle2, type LucideIcon } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { radii, shadows } from "@/constants/design";
import { fadeUpVariants } from "@/constants/motion";
import { cn } from "@/lib/utils";

type Props = {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
};

export default function FeatureCard({
  title,
  description,
  icon: Icon,
  index,
}: Props) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.li
      className={cn(
        "group h-full focus-within:outline-none focus-within:ring-2 focus-within:ring-emerald-500/40",
        radii.card,
        index % 2 === 0 ? "lg:translate-y-0" : "lg:translate-y-6",
      )}
      variants={fadeUpVariants(Boolean(reduceMotion))}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <Card
        className={cn(
          "relative h-full overflow-hidden border-white/70 bg-white/80 p-0 backdrop-blur-xl transition-colors duration-300 hover:border-emerald-200/80 dark:border-white/10 dark:bg-zinc-950/65 dark:hover:border-emerald-800/50",
          radii.card,
          shadows.card,
          shadows.cardHover,
        )}
      >
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-400 opacity-80"
        />
        <div
          aria-hidden="true"
          className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-emerald-300/20 blur-3xl transition-opacity duration-300 group-hover:opacity-80 dark:bg-emerald-500/10"
        />
        <CardHeader className="relative gap-5 p-6 pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-900/20 transition-transform duration-300 motion-safe:group-hover:scale-105">
              <Icon aria-hidden="true" className="h-7 w-7" />
            </div>

            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200/80 bg-white/70 text-slate-400 transition-all duration-300 group-hover:border-emerald-200 group-hover:text-emerald-600 dark:border-zinc-800 dark:bg-zinc-900/70 dark:group-hover:border-emerald-800 dark:group-hover:text-emerald-300">
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </span>
          </div>

          <CardTitle className="text-xl font-semibold tracking-tight text-slate-950 dark:text-white">
            {title}
          </CardTitle>
        </CardHeader>

        <CardContent className="relative flex h-full flex-col px-6 pb-6">
          <p className="text-base leading-7 text-slate-600 dark:text-slate-400">
            {description}
          </p>

          <div className="mt-auto pt-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              <CheckCircle2 aria-hidden="true" className="h-4 w-4" />
              Included in Travix
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.li>
  );
}
