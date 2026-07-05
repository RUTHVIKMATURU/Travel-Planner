"use client";

import { useFormContext } from "react-hook-form";
import { TripFormValues } from "@/lib/validations/trip";
import { format } from "date-fns";
import { MapPin, Calendar, Users, Wallet, Star } from "lucide-react";

export function ReviewStep() {
  const { getValues } = useFormContext<TripFormValues>();
  const values = getValues();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Review your trip</h2>
        <p className="text-muted-foreground">Make sure everything looks good before creating your trip.</p>
      </div>

      <div className="bg-card border rounded-xl divide-y">
        {/* Destination */}
        <div className="p-4 sm:p-6 flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
            <MapPin className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Destination</h3>
            <p className="text-lg font-semibold mt-1">{values.destination}</p>
          </div>
        </div>

        {/* Dates */}
        <div className="p-4 sm:p-6 flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Dates</h3>
            <p className="text-lg font-semibold mt-1">
              {values.dateRange?.from ? (
                <>
                  {format(values.dateRange.from, "MMM d, yyyy")}
                  {values.dateRange.to && ` - ${format(values.dateRange.to, "MMM d, yyyy")}`}
                </>
              ) : (
                "Not selected"
              )}
            </p>
          </div>
        </div>

        {/* Travelers */}
        <div className="p-4 sm:p-6 flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
            <Users className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Travelers</h3>
            <p className="text-lg font-semibold mt-1">
              {values.travelers} {values.travelers === 1 ? 'Traveler' : 'Travelers'}
            </p>
          </div>
        </div>

        {/* Budget */}
        <div className="p-4 sm:p-6 flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
            <Wallet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Budget</h3>
            <p className="text-lg font-semibold mt-1 capitalize">
              {values.budget || "Not selected"}
            </p>
          </div>
        </div>

        {/* Interests */}
        <div className="p-4 sm:p-6 flex items-start gap-4">
          <div className="p-2 bg-primary/10 rounded-full text-primary shrink-0">
            <Star className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-sm font-medium text-muted-foreground">Interests</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {values.interests?.map((interest) => (
                <span key={interest} className="px-3 py-1 bg-muted text-sm rounded-full capitalize">
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
