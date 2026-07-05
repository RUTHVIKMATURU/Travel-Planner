import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight, Lightbulb } from "lucide-react";

export function AiSuggestions() {
  return (
    <Card className="flex flex-col h-full border-primary/20 bg-gradient-to-br from-card to-primary/5 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-6 opacity-5 pointer-events-none">
        <Sparkles size={120} />
      </div>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Sparkles className="w-5 h-5" />
          AI Suggestions
        </CardTitle>
        <CardDescription>Tailored for your Paris trip</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <div className="bg-primary/10 p-2 rounded-full text-primary mt-0.5">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-medium text-sm">Museum Pass</h5>
              <p className="text-xs text-muted-foreground mt-1">Based on your itinerary, a 4-day Paris Museum Pass will save you ~$45 and hours of waiting in lines.</p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <div className="bg-primary/10 p-2 rounded-full text-primary mt-0.5">
              <Lightbulb className="w-4 h-4" />
            </div>
            <div>
              <h5 className="font-medium text-sm">Dinner Reservation</h5>
              <p className="text-xs text-muted-foreground mt-1">You have no dinner plans for Friday night. Try "Le Relais de l'Entrecôte" near your hotel.</p>
            </div>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-6 flex items-center justify-between group">
          View all insights
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
}
