import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Map } from "lucide-react";

export function WelcomeCard() {
  return (
    <Card className="bg-primary/5 border-primary/20 shadow-sm col-span-full md:col-span-2 overflow-hidden relative">
      <div className="absolute -right-10 -top-10 opacity-10 pointer-events-none">
        <Map size={200} />
      </div>
      <CardHeader>
        <CardTitle className="text-2xl font-bold flex items-center gap-2">
          Ready for your next adventure? <Sparkles className="w-5 h-5 text-primary" />
        </CardTitle>
        <CardDescription className="text-base mt-2">
          You have 1 upcoming trip to Paris. Let's make sure everything is planned perfectly!
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Button className="font-semibold shadow-md">
          Plan a New Trip
        </Button>
      </CardContent>
    </Card>
  );
}
