"use client";

import { useState, useEffect } from "react";
import { getDestinations, getCountries, DestinationFilters } from "@/lib/api/destinations";
import { Destination } from "@/data/destinations";
import { ExploreFilters } from "./destination-filters";
import { DestinationCard } from "./destination-card";
import { ExplorePagination } from "./pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { SearchX } from "lucide-react";

export function DestinationExplorer() {
  const [filters, setFilters] = useState<DestinationFilters>({});
  const [page, setPage] = useState(1);
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [countries, setCountries] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch countries once on mount
  useEffect(() => {
    getCountries().then(setCountries);
  }, []);

  // Fetch destinations when filters or page changes
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);

    getDestinations(filters, page, 6)
      .then((res) => {
        if (isMounted) {
          setDestinations(res.data);
          setTotalPages(res.totalPages);
          setIsLoading(false);
        }
      })
      .catch(() => {
        if (isMounted) setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [filters, page]);

  // Handle filter changes (reset page to 1)
  const handleFilterChange = (newFilters: DestinationFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* Sidebar Filters */}
      <aside className="w-full md:w-64 lg:w-72 shrink-0">
        <ExploreFilters 
          filters={filters} 
          onChange={handleFilterChange} 
          countries={countries} 
        />
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {isLoading ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-64 w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-4/5" />
                </div>
              </div>
            ))}
          </div>
        ) : destinations.length > 0 ? (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {destinations.map((dest) => (
                <DestinationCard key={dest.id} destination={dest} />
              ))}
            </div>
            
            <ExplorePagination 
              currentPage={page} 
              totalPages={totalPages} 
              onPageChange={setPage} 
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="bg-muted p-4 rounded-full mb-4 text-muted-foreground">
              <SearchX className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No destinations found</h3>
            <p className="text-muted-foreground max-w-md">
              We couldn't find any destinations matching your current filters. 
              Try adjusting your search or clearing some filters.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
