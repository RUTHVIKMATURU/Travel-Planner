"use client";

import { useFormContext } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TripFormValues } from "@/lib/validations/trip";
import { MapPin } from "lucide-react";

export function DestinationStep() {
  const { register, formState: { errors } } = useFormContext<TripFormValues>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Where do you want to go?</h2>
        <p className="text-muted-foreground">Enter your dream destination.</p>
      </div>

      <div className="space-y-3">
        <Label htmlFor="destination" className="text-sm font-medium">
          Destination
        </Label>
        <div className="relative">
          <MapPin className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
          <Input
            id="destination"
            placeholder="e.g., Paris, Tokyo, Bali"
            className="pl-10 h-12 text-lg"
            {...register("destination")}
          />
        </div>
        {errors.destination && (
          <p className="text-sm text-destructive">{errors.destination.message}</p>
        )}
      </div>
    </div>
  );
}
