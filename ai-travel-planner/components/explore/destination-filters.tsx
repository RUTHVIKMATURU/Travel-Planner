"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search } from "lucide-react";
import { DestinationFilters } from "@/lib/api/destinations";

interface ExploreFiltersProps {
  filters: DestinationFilters;
  onChange: (filters: DestinationFilters) => void;
  countries: string[];
}

export function ExploreFilters({ filters, onChange, countries }: ExploreFiltersProps) {
  const handleChange = (key: keyof DestinationFilters, value: string) => {
    onChange({ ...filters, [key]: value === "All" ? undefined : value });
  };

  return (
    <div className="space-y-6 bg-card border rounded-xl p-6 h-fit sticky top-24">
      <div>
        <h3 className="text-lg font-semibold mb-6 tracking-tight">Filters</h3>
        <div className="space-y-5">
          
          <div className="space-y-2">
            <Label htmlFor="search">Search</Label>
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                id="search"
                placeholder="Search destinations..."
                className="pl-9 bg-background"
                value={filters.search || ""}
                onChange={(e) => onChange({ ...filters, search: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>Country</Label>
            <Select 
              value={filters.country || "All"} 
              onValueChange={(val) => handleChange("country", val)}
            >
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="All Countries" />
              </SelectTrigger>
              <SelectContent>
                {countries.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Budget</Label>
            <Select 
              value={filters.budget || "All"} 
              onValueChange={(val) => handleChange("budget", val)}
            >
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Any Budget" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Any Budget</SelectItem>
                <SelectItem value="Budget">Budget</SelectItem>
                <SelectItem value="Moderate">Moderate</SelectItem>
                <SelectItem value="Luxury">Luxury</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Season</Label>
            <Select 
              value={filters.season || "All"} 
              onValueChange={(val) => handleChange("season", val)}
            >
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Any Season" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Any Season</SelectItem>
                <SelectItem value="Spring">Spring</SelectItem>
                <SelectItem value="Summer">Summer</SelectItem>
                <SelectItem value="Autumn">Autumn</SelectItem>
                <SelectItem value="Winter">Winter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label>Travel Style</Label>
            <Select 
              value={filters.travelStyle || "All"} 
              onValueChange={(val) => handleChange("travelStyle", val)}
            >
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Any Style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">Any Style</SelectItem>
                <SelectItem value="Adventure">Adventure</SelectItem>
                <SelectItem value="Relaxation">Relaxation</SelectItem>
                <SelectItem value="Cultural">Cultural</SelectItem>
                <SelectItem value="Nature">Nature</SelectItem>
                <SelectItem value="City">City</SelectItem>
              </SelectContent>
            </Select>
          </div>

        </div>
      </div>
    </div>
  );
}
