/**
 * Trip domain types.
 * Extend these as the Prisma schema grows.
 */

export type TripStatus = "DRAFT" | "PLANNED" | "ONGOING" | "COMPLETED" | "CANCELLED";

export interface Trip {
  id: string;
  userId: string;
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  status: TripStatus;
  budget: number | null;
  currency: string;
  notes: string | null;
  itinerary: ItineraryDay[] | null;
  createdAt: Date;
  updatedAt: Date;
}

export interface ItineraryDay {
  day: number;
  date: string; // ISO date string
  activities: Activity[];
}

export interface Activity {
  id: string;
  time: string;
  title: string;
  description: string;
  location: string | null;
  type: ActivityType;
  cost: number | null;
}

export type ActivityType =
  | "TRANSPORT"
  | "ACCOMMODATION"
  | "FOOD"
  | "SIGHTSEEING"
  | "ADVENTURE"
  | "RELAXATION"
  | "SHOPPING"
  | "OTHER";

/** Form payload for creating a new trip. */
export interface CreateTripPayload {
  title: string;
  destination: string;
  startDate: Date;
  endDate: Date;
  budget?: number;
  currency?: string;
  notes?: string;
}

/** Form payload for updating an existing trip. */
export type UpdateTripPayload = Partial<CreateTripPayload> & { id: string };
