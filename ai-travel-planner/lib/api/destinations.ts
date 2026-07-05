import { destinations, Destination } from "@/data/destinations";

export interface DestinationFilters {
  search?: string;
  country?: string;
  budget?: string;
  season?: string;
  travelStyle?: string;
}

export interface PaginatedDestinations {
  data: Destination[];
  total: number;
  page: number;
  totalPages: number;
}

export async function getDestinations(
  filters: DestinationFilters,
  page: number = 1,
  limit: number = 6
): Promise<PaginatedDestinations> {
  // Simulate network delay to make it feel like a real API
  await new Promise((resolve) => setTimeout(resolve, 600));

  let filteredData = [...destinations];

  if (filters.search) {
    const query = filters.search.toLowerCase();
    filteredData = filteredData.filter(
      (d) =>
        d.name.toLowerCase().includes(query) || d.country.toLowerCase().includes(query)
    );
  }

  if (filters.country && filters.country !== "All") {
    filteredData = filteredData.filter((d) => d.country === filters.country);
  }

  if (filters.budget && filters.budget !== "All") {
    filteredData = filteredData.filter((d) => d.averageBudget === filters.budget);
  }

  if (filters.season && filters.season !== "All") {
    filteredData = filteredData.filter((d) =>
      d.seasons.includes(filters.season as any)
    );
  }

  if (filters.travelStyle && filters.travelStyle !== "All") {
    filteredData = filteredData.filter((d) =>
      d.travelStyles.includes(filters.travelStyle as any)
    );
  }

  const total = filteredData.length;
  const totalPages = Math.ceil(total / limit) || 1;
  const startIndex = (page - 1) * limit;
  const paginatedData = filteredData.slice(startIndex, startIndex + limit);

  return {
    data: paginatedData,
    total,
    page,
    totalPages,
  };
}

export async function getCountries(): Promise<string[]> {
  const countries = new Set(destinations.map((d) => d.country));
  return ["All", ...Array.from(countries).sort()];
}
