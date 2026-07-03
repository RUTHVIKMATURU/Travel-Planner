import Image from "next/image";
import { Star } from "lucide-react";
import { radii, shadows, spacing, typography } from "@/constants/design";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
};

export default function TestimonialCard({
  name,
  role,
  image,
  review,
  rating,
}: Props) {
  return (
    <div
      className={cn(
        "border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 dark:border-zinc-800 dark:bg-zinc-900",
        radii.card,
        spacing.card,
        shadows.card,
        shadows.cardHover,
      )}
    >
      <div className="mb-4 flex">
        {Array.from({ length: rating }).map((_, index) => (
          <Star
            key={index}
            className="h-5 w-5 fill-amber-400 text-amber-400"
          />
        ))}
      </div>

      <p className={cn("mb-6 italic", typography.bodyMuted)}>
        &quot;{review}&quot;
      </p>

      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={name}
          width={56}
          height={56}
          className="rounded-full"
        />

        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className={typography.captionMuted}>
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}
