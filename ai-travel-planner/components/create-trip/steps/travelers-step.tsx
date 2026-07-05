"use client";

import { useFormContext, Controller } from "react-hook-form";
import { TripFormValues } from "@/lib/validations/trip";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Users } from "lucide-react";

export function TravelersStep() {
  const { control, formState: { errors } } = useFormContext<TripFormValues>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">Who's coming along?</h2>
        <p className="text-muted-foreground">Select the number of travelers.</p>
      </div>

      <div className="flex justify-center p-8 border rounded-xl bg-card">
        <Controller
          control={control}
          name="travelers"
          render={({ field }) => (
            <div className="flex items-center gap-6">
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full"
                onClick={() => field.onChange(Math.max(1, field.value - 1))}
                disabled={field.value <= 1}
              >
                <Minus className="h-5 w-5" />
              </Button>

              <div className="flex flex-col items-center w-24">
                <span className="text-5xl font-bold">{field.value}</span>
                <span className="text-sm text-muted-foreground mt-2 flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  Traveler{field.value !== 1 ? 's' : ''}
                </span>
              </div>

              <Button
                type="button"
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full"
                onClick={() => field.onChange(Math.min(20, field.value + 1))}
                disabled={field.value >= 20}
              >
                <Plus className="h-5 w-5" />
              </Button>
            </div>
          )}
        />
      </div>
      {errors.travelers && (
        <p className="text-sm text-destructive text-center">{errors.travelers.message}</p>
      )}
    </div>
  );
}
