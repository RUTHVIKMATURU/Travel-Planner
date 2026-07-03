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
        "relative border border-slate-200 bg-white transition dark:border-zinc-800 dark:bg-zinc-900",
        radii.card,
        spacing.card,
        shadows.card,
        shadows.cardHoverSoft,
      )}
    >
      <div className="absolute -top-5 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">
        {step}
      </div>

      <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-900">
        <Icon size={28} />
      </div>

      <h3 className={cn("mt-6", typography.cardTitle)}>
        {title}
      </h3>

      <p className={cn("mt-3", typography.bodyMuted)}>
        {description}
      </p>
    </div>
  );
}
