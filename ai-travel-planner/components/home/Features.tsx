import { FEATURES } from "@/constants/features";
import FeatureCard from "./FeatureCard";
import Section from "@/components/layout/Section";
import { Badge } from "@/components/ui/badge";
import { gradients } from "@/constants/design";
import { cn } from "@/lib/utils";

export default function Features() {
  return (
    <Section
      id="features"
      aria-labelledby="features-heading"
      className="relative overflow-hidden bg-transparent py-24"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-emerald-300/70 to-transparent dark:via-emerald-800/70"
      />

      <div className="mb-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <div>
          <Badge className="mb-5 rounded-full border border-emerald-200/80 bg-white/75 px-4 py-2 text-sm font-semibold text-emerald-700 shadow-sm shadow-emerald-900/5 backdrop-blur hover:bg-white dark:border-emerald-800/60 dark:bg-emerald-950/40 dark:text-emerald-300 dark:hover:bg-emerald-950/50">
            Built for smarter travel
          </Badge>

          <h2
            id="features-heading"
            className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-5xl"
          >
            Everything you need to plan with{" "}
            <span className={cn(gradients.brandText, "font-bold")}>
              Travix
            </span>
          </h2>
        </div>

        <p className="max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-400 lg:justify-self-end">
          From itinerary generation to collaborative budgets, Travix brings the
          important moving parts of travel planning into one calm, intelligent
          workspace.
        </p>
      </div>

      <ul className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {FEATURES.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            index={index}
            {...feature}
          />
        ))}
      </ul>
    </Section>
  );
}
