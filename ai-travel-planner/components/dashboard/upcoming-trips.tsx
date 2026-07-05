import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

export function UpcomingTrips() {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-muted-foreground" />
          Upcoming Trips
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col gap-4">
        {/* Mock Trip 1 */}
        <div className="flex flex-col sm:flex-row gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors">
          <div className="w-full sm:w-24 h-24 rounded-md overflow-hidden bg-muted flex-shrink-0 relative">
            <img 
              src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2073&auto=format&fit=crop" 
              alt="Paris" 
              className="object-cover w-full h-full"
            />
          </div>
          <div className="flex-1 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start">
                <h4 className="font-semibold text-lg">Paris Getaway</h4>
                <Badge variant="default" className="bg-primary/20 text-primary hover:bg-primary/30">In 12 days</Badge>
              </div>
              <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                <CalendarDays className="w-3.5 h-3.5" /> Oct 15 - Oct 22, 2026
              </p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-7 h-7 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium">JD</div>
                <div className="w-7 h-7 rounded-full border-2 border-background bg-muted flex items-center justify-center text-xs font-medium">+2</div>
              </div>
              <span className="text-xs text-muted-foreground">3 collaborators</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
