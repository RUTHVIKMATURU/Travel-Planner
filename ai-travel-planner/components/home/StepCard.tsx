import { LucideIcon } from "lucide-react";
import { radii, shadows, spacing, typography } from "@/constants/design";
import { cn } from "@/lib/utils";

type Props = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function StepCard({
  step,
  title,
  description,
  icon: Icon,
}: Props) {
  return (
    <div
      className={cn(
        "relative border border-white/70 bg-white/80 backdrop-blur-xl transition-colors duration-300 hover:border-emerald-200/80 dark:border-white/10 dark:bg-zinc-950/65 dark:hover:border-emerald-800/50",
        radii.card,
        spacing.card,
        shadows.card,
        shadows.cardHoverSoft,
      )}
    >
      <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 text-sm font-bold text-white shadow-lg shadow-emerald-900/20">
        {step}
      </div>

      <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-300">
        <Icon size={28} />
      </div>

      <h3 className={cn("mt-6 text-slate-950 dark:text-white", typography.cardTitle)}>
        {title}
      </h3>

      <p className={cn("mt-3 leading-7", typography.bodyMuted)}>
        {description}
      </p>
    </div>
  );
}
