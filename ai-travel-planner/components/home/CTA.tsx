import Link from "next/link";
import Section from "@/components/layout/Section";
import { Button } from "@/components/ui/button";
import { gradients, radii, shadows } from "@/constants/design";
import { cn } from "@/lib/utils";

export default function CTA() {
  return (
    <Section className="py-24">
      <div
        className={cn(
          "overflow-hidden px-8 py-16 text-center text-white md:px-16",
          radii.card,
          gradients.brandSurface,
          shadows.floating,
        )}
      >

        <h2 className="text-4xl font-bold md:text-5xl">
          Ready for Your Next Adventure?
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-emerald-50">
          Let AI plan your journey while you focus on making unforgettable memories.
          Build smarter itineraries, manage budgets, and travel with confidence.
        </p>

        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="bg-white text-teal-700 hover:bg-teal-700 hover:text-white"
          >
            <Link href="/signup">
              Start Planning
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size="lg"
            className="bg-teal-700 text-white hover:bg-white hover:text-teal-700"
          >
            <Link href="/about">
              Learn More
            </Link>
          </Button>
        </div>

      </div>
    </Section>
  );
}
