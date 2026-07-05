"use client";

import { useFormContext, Controller } from "react-hook-form";
import { Calendar } from "@/components/ui/calendar";
import { TripFormValues } from "@/lib/validations/trip";
import { format } from "date-fns";

export function DatesStep() {
  const { control, formState: { errors } } = useFormContext<TripFormValues>();

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">When are you traveling?</h2>
        <p className="text-muted-foreground">Select your ideal travel dates.</p>
      </div>

      <div className="flex flex-col items-center justify-center p-4 border rounded-xl bg-card">
        <Controller
          control={control}
          name="dateRange"
          render={({ field }) => (
            <>
              <Calendar
                mode="range"
                selected={{
                  from: field.value?.from,
                  to: field.value?.to,
                }}
                onSelect={(range) => field.onChange(range)}
                className="rounded-md"
                numberOfMonths={2}
                disabled={(date) => date < new Date(new Date().setHours(0, 0, 0, 0))}
              />
              <div className="mt-4 text-center min-h-[2rem]">
                {field.value?.from ? (
                  field.value.to ? (
                    <span className="font-medium text-primary">
                      {format(field.value.from, "LLL dd, y")} -{" "}
                      {format(field.value.to, "LLL dd, y")}
                    </span>
                  ) : (
                    <span className="font-medium text-primary">
                      {format(field.value.from, "LLL dd, y")}
                    </span>
                  )
                ) : (
                  <span className="text-muted-foreground">Pick a start and end date</span>
                )}
              </div>
            </>
          )}
        />
      </div>
      {errors.dateRange?.root && (
        <p className="text-sm text-destructive">{errors.dateRange.root.message}</p>
      )}
      {errors.dateRange?.from && (
        <p className="text-sm text-destructive">{errors.dateRange.from.message}</p>
      )}
    </div>
  );
}
