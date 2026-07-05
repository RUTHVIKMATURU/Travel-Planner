import { TripWizard } from "@/components/create-trip/trip-wizard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Plan a Trip",
  description: "Create a new trip using our step-by-step wizard.",
};

export default function CreateTripPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8">
        <div className="mb-8 text-center space-y-2">
          <h1 className="text-4xl font-bold tracking-tight">Plan Your Trip</h1>
          <p className="text-muted-foreground text-lg">
            Let's build your perfect itinerary in just a few steps.
          </p>
        </div>
        <TripWizard />
      </div>
    </div>
  );
}
