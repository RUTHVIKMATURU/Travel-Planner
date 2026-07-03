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
        maxWidth="3xl"
        title="Popular Destinations"
        description="Discover AI-recommended places with budget insight, ideal timing, and trip length at a glance."
      />

      <div className="grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
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
