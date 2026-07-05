import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CloudRain, Sun, Cloud, Thermometer, Wind, Droplets } from "lucide-react";

export function WeatherWidget() {
  return (
    <Card className="flex flex-col h-full bg-gradient-to-br from-blue-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 border-none shadow-sm">
      <CardHeader className="pb-2">
        <CardTitle className="text-lg flex justify-between items-center">
          Paris
          <CloudRain className="w-6 h-6 text-blue-500" />
        </CardTitle>
        <CardDescription>Current Weather</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-4xl font-bold tracking-tighter">14°</h2>
            <p className="text-muted-foreground text-sm font-medium">Light Rain</p>
          </div>
          <div className="space-y-1 text-sm text-muted-foreground text-right">
            <div className="flex items-center justify-end gap-1"><Thermometer className="w-3.5 h-3.5" /> H: 16° L: 9°</div>
            <div className="flex items-center justify-end gap-1"><Droplets className="w-3.5 h-3.5" /> 82%</div>
            <div className="flex items-center justify-end gap-1"><Wind className="w-3.5 h-3.5" /> 12 km/h</div>
          </div>
        </div>
        
        <div className="grid grid-cols-4 gap-2 pt-4 border-t border-black/5 dark:border-white/10">
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground">12 PM</span>
            <CloudRain className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-semibold">14°</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground">3 PM</span>
            <Cloud className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-semibold">15°</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground">6 PM</span>
            <Sun className="w-4 h-4 text-amber-500" />
            <span className="text-sm font-semibold">16°</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <span className="text-xs text-muted-foreground">9 PM</span>
            <Cloud className="w-4 h-4 text-slate-400" />
            <span className="text-sm font-semibold">12°</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
