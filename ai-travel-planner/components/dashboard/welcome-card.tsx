import { MapPin, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export function WelcomeCard() {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 shadow-xl shadow-black/5 p-8 sm:p-10">
      {/* Background decoration */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-teal-500/20 blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-2">
            Welcome back, Traveler! 🌍
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
            You have 2 upcoming trips. The world is waiting for your next adventure. Where are we heading to next?
          </p>
        </div>
        
        <div className="flex shrink-0 gap-3">
          <Button className="rounded-xl px-6 py-6 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20 hover:scale-[1.02] transition-all">
            <Compass className="mr-2 h-5 w-5" />
            Plan New Trip
          </Button>
        </div>
      </div>
    </div>
  );
}
