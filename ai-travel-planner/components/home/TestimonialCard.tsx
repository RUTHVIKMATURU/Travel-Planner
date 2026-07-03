import Image from "next/image";
import { Quote, Star } from "lucide-react";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  role: string;
  image: string;
  review: string;
  rating: number;
  featured?: boolean;
};

export default function TestimonialCard({
  name,
  role,
  image,
  review,
  rating,
  featured = false,
}: Props) {
  return (
    <Card
      className={cn(
        "group h-full overflow-hidden rounded-3xl border-white/70 bg-white/80 p-0 shadow-xl shadow-slate-950/5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200/80 hover:shadow-2xl hover:shadow-emerald-950/10 dark:border-white/10 dark:bg-zinc-950/65 dark:shadow-black/20 dark:hover:border-emerald-800/60",
        featured && "md:-translate-y-4 md:hover:-translate-y-6",
      )}
    >
      <CardContent className="relative flex h-full flex-col p-6">
        <div
          aria-hidden="true"
          className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-emerald-300/20 blur-3xl transition-opacity duration-300 group-hover:opacity-80 dark:bg-emerald-500/10"
        />

        <div className="mb-8 flex items-start justify-between gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-600 to-teal-500 text-white shadow-lg shadow-emerald-900/20">
            <Quote aria-hidden="true" className="h-6 w-6" />
          </span>

          <div
            className="flex items-center gap-1"
            aria-label={`${rating} out of 5 star rating`}
          >
            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                aria-hidden="true"
                className={cn(
                  "h-4 w-4",
                  index < rating
                    ? "fill-amber-400 text-amber-400"
                    : "text-slate-300 dark:text-zinc-700",
                )}
              />
            ))}
          </div>
        </div>

        <blockquote className="relative flex-1">
          <p className="text-lg font-medium leading-8 text-slate-800 dark:text-slate-100">
            &quot;{review}&quot;
          </p>
        </blockquote>

        <div className="mt-8 flex items-center gap-4 border-t border-slate-200/70 pt-5 dark:border-zinc-800">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 opacity-70 blur-sm" />
            <Image
              src={image}
              alt={`${name} avatar`}
              width={56}
              height={56}
              className="relative h-14 w-14 rounded-full border-2 border-white object-cover shadow-md dark:border-zinc-950"
            />
          </div>

          <div>
            <h4 className="font-semibold text-slate-950 dark:text-white">
              {name}
            </h4>
            <p className="mt-1 text-sm font-medium text-slate-500 dark:text-slate-400">
              {role}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
