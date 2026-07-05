import { DestinationExplorer } from "@/components/explore/destination-explorer";
import { Metadata } from "next";
import { Compass } from "lucide-react";

export const metadata: Metadata = {
  title: "Explore Destinations | AI Travel Planner",
  description: "Discover your next adventure with our AI-curated travel destinations.",
};

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary/5 to-background border-b relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,transparent,black)] pointer-events-none" />
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24 relative z-10">
          <div className="flex flex-col items-center text-center space-y-6 max-w-3xl mx-auto">
            <div className="p-3 bg-primary/10 rounded-2xl text-primary shadow-sm ring-1 ring-primary/20 animate-in fade-in zoom-in duration-500">
              <Compass className="w-8 h-8" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Discover Your Next <span className="text-primary">Adventure</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Explore our curated selection of stunning destinations around the world. 
              Find the perfect match for your travel style, budget, and season.
            </p>
          </div>
        </div>
      </section>

      {/* Main Explorer Component */}
      <section className="flex-1 container mx-auto px-4 md:px-6 py-12">
        <DestinationExplorer />
      </section>
    </div>
  );
}
