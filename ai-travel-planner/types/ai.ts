/**
 * AI / LLM integration types.
 * Covers request/response shapes for the AI trip generation service.
 */

export interface AiTripRequest {
  destination: string;
  durationDays: number;
  budget: number | null;
  currency: string;
  travelStyle: TravelStyle;
  interests: string[];
  specialRequirements?: string;
}

export type TravelStyle =
  | "adventure"
  | "relaxation"
  | "cultural"
  | "budget"
  | "luxury"
  | "family"
  | "solo";

export interface AiTripResponse {
  title: string;
  summary: string;
  estimatedCost: number;
  itinerary: AiItineraryDay[];
  tips: string[];
}

export interface AiItineraryDay {
  day: number;
  theme: string;
  activities: AiActivity[];
}

export interface AiActivity {
  time: string;
  title: string;
  description: string;
  location: string;
  estimatedCost: number;
  type: string;
}

/** Wrapper for streamed or resolved AI responses. */
export type AiResult<T> =
  | { success: true; data: T }
  | { success: false; error: string };
