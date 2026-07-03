"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  CalendarDays,
  CloudSun,
  MapPin,
  Sparkles,
  Star,
  Wallet,
} from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { fadeUpVariants } from "@/constants/motion";

type Props = {
  name: string;
  image: string;
  country: string;
  rating: number;
  price: string;
};

const destinationMeta: Record<
  string,
  {
    duration: string;
    season: string;
  }
> = {
  Bali: {
    duration: "5-7 days",
    season: "Apr-Oct",
  },
  Tokyo: {
    duration: "6-8 days",
    season: "Mar-May",
  },
  "Swiss Alps": {
    duration: "7-10 days",
    season: "Jun-Sep",
  },
};

export default function DestinationCard({
  name,
  image,
  country,
  rating,
  price,
}: Props) {
  const reduceMotion = useReducedMotion();
  const meta = destinationMeta[name] ?? {
    duration: "5-7 days",
    season: "Year-round",
  };

  return (
    <motion.div
      className="h-full"
      variants={fadeUpVariants(Boolean(reduceMotion))}
      whileHover={reduceMotion ? undefined : { scale: 1.025 }}
      transition={{ duration: 0.24, ease: "easeOut" }}
    >
      <Card
        className="group h-full overflow-hidden rounded-3xl border-white/70 bg-white/80 p-0 shadow-xl shadow-slate-950/5 backdrop-blur-xl transition-colors duration-500 hover:border-emerald-200/80 hover:shadow-2xl hover:shadow-emerald-950/10 dark:border-white/10 dark:bg-zinc-950/65 dark:shadow-black/20 dark:hover:border-emerald-800/60"
      >
        <article aria-label={`${name}, ${country}`} className="flex h-full flex-col">
        <div className="relative h-72 overflow-hidden">
          <Image
            src={image}
            alt={`${name}, ${country}`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 motion-safe:group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent" />

          <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md">
            <Sparkles aria-hidden="true" className="h-4 w-4 text-emerald-200" />
            AI Recommended
          </div>

          <div className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full border border-white/30 bg-white/20 px-3 py-1.5 text-sm font-semibold text-white shadow-lg backdrop-blur-md">
            <Star
              aria-hidden="true"
              className="h-4 w-4 fill-amber-400 text-amber-400"
            />
            <span>{rating.toFixed(1)}</span>
          </div>

          <div className="absolute inset-x-0 bottom-0 p-5">
            <h3 className="text-2xl font-semibold tracking-tight text-white">
              {name}
            </h3>
            <p className="mt-2 flex items-center gap-2 text-sm font-medium text-white/80">
              <MapPin aria-hidden="true" className="h-4 w-4" />
              {country}
            </p>
          </div>
        </div>

        <CardContent className="flex flex-1 flex-col p-5">
          <div className="grid gap-3">
            <div className="rounded-2xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-zinc-800/80 dark:bg-zinc-900/60">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                  <Wallet aria-hidden="true" className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    Average budget
                  </p>
                  <p className="mt-1 text-lg font-semibold text-slate-950 dark:text-white">
                    {price}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/40">
                <CalendarDays
                  aria-hidden="true"
                  className="mb-3 h-5 w-5 text-emerald-600"
                />
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Duration
                </p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                  {meta.duration}
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200/80 bg-white/70 p-4 dark:border-zinc-800/80 dark:bg-zinc-950/40">
                <CloudSun
                  aria-hidden="true"
                  className="mb-3 h-5 w-5 text-amber-500"
                />
                <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Best season
                </p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">
                  {meta.season}
                </p>
              </div>
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between border-t border-slate-200/70 pt-4 dark:border-zinc-800">
            <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Smart match for your next trip
            </span>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-300">
              Explore
            </span>
          </div>
        </CardContent>
        </article>
      </Card>
    </motion.div>
  );
}
