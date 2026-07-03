import DestinationCard from "./DestinationCard";
import { DESTINATIONS } from "@/constants/destinations";
import Section from "@/components/layout/Section";
import SectionHeader from "@/components/layout/SectionHeader";

export default function Destinations() {
  return (
    <Section
      id="destinations"
      className="py-24"
    >
      <SectionHeader
        title="Popular Destinations"
        description="Discover AI-recommended places around the world."
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {DESTINATIONS.map((destination) => (
          <DestinationCard
            key={destination.name}
            {...destination}
          />
        ))}
      </div>
    </Section>
  );
}
