import Image from "next/image";
import { Star } from "lucide-react";
import { radii, shadows, typography } from "@/constants/design";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  image: string;
  country: string;
  rating: number;
  price: string;
};

export default function DestinationCard({
  name,
  image,
  country,
  rating,
  price,
}: Props) {
  return (
    <div
      className={cn(
        "overflow-hidden border bg-white transition-all duration-300 hover:-translate-y-2 dark:border-zinc-800 dark:bg-zinc-900",
        radii.card,
        shadows.card,
        shadows.cardHover,
      )}
    >
      <div className="relative h-64">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between">
          <h3 className={typography.cardTitle}>{name}</h3>

          <div className="flex items-center gap-1">
            <Star
              size={16}
              className="fill-amber-400 text-amber-400"
            />
            <span>{rating}</span>
          </div>
        </div>

        <p className={cn("mt-2", typography.bodyMuted)}>
          {country}
        </p>

        <div className="mt-6 flex items-center justify-between">
          <span className="font-bold text-emerald-600">
            {price}
          </span>

          <span className="rounded-full bg-emerald-100 px-3 py-1 text-sm text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
            AI Pick
          </span>
        </div>
      </div>
    </div>
  );
}
