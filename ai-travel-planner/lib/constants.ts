/**
 * Application-wide constants.
 * Keep runtime magic strings/numbers here so they are easy to update.
 */

export const APP_NAME = "Travix";
export const APP_DESCRIPTION = "AI-powered travel planner";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000";

/** Supported currency codes. */
export const SUPPORTED_CURRENCIES = ["USD", "EUR", "GBP", "JPY", "AUD", "CAD", "INR"] as const;
export type SupportedCurrency = (typeof SUPPORTED_CURRENCIES)[number];

/** Default pagination page size. */
export const DEFAULT_PAGE_SIZE = 10;

/** Maximum itinerary days an AI plan can generate. */
export const MAX_AI_TRIP_DAYS = 30;

/** Routes used throughout the app — single source of truth. */
export const ROUTES = {
  home: "/",
  about: "/about",
  login: "/login",
  signup: "/signup",
  dashboard: "/dashboard",
  trips: "/trips",
  tripsCreate: "/trips/create",
  tripDetail: (id: string) => `/trips/${id}`,
  profile: "/profile",
  settings: "/settings",
} as const;
