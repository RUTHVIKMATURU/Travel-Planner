"use client";

import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { tripSchema, TripFormValues, defaultTripValues } from "@/lib/validations/trip";
import { WizardProgress } from "./wizard-progress";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DestinationStep } from "./steps/destination-step";
import { DatesStep } from "./steps/dates-step";
import { TravelersStep } from "./steps/travelers-step";
import { BudgetStep } from "./steps/budget-step";
import { InterestsStep } from "./steps/interests-step";
import { ReviewStep } from "./steps/review-step";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const steps = [
  { id: "destination", name: "Destination", fields: ["destination"] },
  { id: "dates", name: "Dates", fields: ["dateRange"] },
  { id: "travelers", name: "Travelers", fields: ["travelers"] },
  { id: "budget", name: "Budget", fields: ["budget"] },
  { id: "interests", name: "Interests", fields: ["interests"] },
  { id: "review", name: "Review", fields: [] },
];

const DRAFT_KEY = "trip_wizard_draft";

export function TripWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();

  const methods = useForm<TripFormValues>({
    resolver: zodResolver(tripSchema),
    defaultValues: defaultTripValues,
    mode: "onChange",
  });

  const { handleSubmit, trigger, watch, reset } = methods;
  const formValues = watch();

  // Load draft on mount
  useEffect(() => {
    const draft = localStorage.getItem(DRAFT_KEY);
    if (draft) {
      try {
        const parsedDraft = JSON.parse(draft);
        // Dates need to be converted back to Date objects
        if (parsedDraft.dateRange) {
          if (parsedDraft.dateRange.from) parsedDraft.dateRange.from = new Date(parsedDraft.dateRange.from);
          if (parsedDraft.dateRange.to) parsedDraft.dateRange.to = new Date(parsedDraft.dateRange.to);
        }
        reset(parsedDraft);
      } catch (e) {
        console.error("Failed to parse draft", e);
      }
    }
    setIsMounted(true);
  }, [reset]);

  // Save draft on change
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(formValues));
    }
  }, [formValues, isMounted]);

  const nextStep = async () => {
    const fields = steps[currentStep].fields as any[];
    const isValid = await trigger(fields);
    if (isValid) {
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = (data: TripFormValues) => {
    console.log("Final data:", data);
    toast.success("Trip planned successfully!");
    localStorage.removeItem(DRAFT_KEY);
    router.push("/dashboard");
  };

  if (!isMounted) return null;

  return (
    <div className="w-full max-w-3xl mx-auto py-12 px-4">
      <WizardProgress currentStep={currentStep} steps={steps} />

      <Card className="mt-12 p-6 md:p-8">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            {/* Step Content */}
            <div className="min-h-[300px]">
              {currentStep === 0 && <DestinationStep />}
              {currentStep === 1 && <DatesStep />}
              {currentStep === 2 && <TravelersStep />}
              {currentStep === 3 && <BudgetStep />}
              {currentStep === 4 && <InterestsStep />}
              {currentStep === 5 && <ReviewStep />}
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6 border-t">
              <Button
                type="button"
                variant="outline"
                onClick={prevStep}
                disabled={currentStep === 0}
              >
                Back
              </Button>
              
              {currentStep === steps.length - 1 ? (
                <Button type="submit">Create Trip</Button>
              ) : (
                <Button type="button" onClick={nextStep}>
                  Next
                </Button>
              )}
            </div>
          </form>
        </FormProvider>
      </Card>
    </div>
  );
}
