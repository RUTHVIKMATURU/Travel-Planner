import { MapPin, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const upcomingTrips = [
  {
    id: 1,
    destination: "Kyoto, Japan",
    date: "Oct 12 - Oct 20, 2026",
    daysLeft: 12,
    gradient: "from-pink-500/80 to-rose-500/80",
    imagePlaceholder: "bg-pink-100 dark:bg-pink-900/30",
  },
  {
    id: 2,
    destination: "Swiss Alps",
    date: "Dec 05 - Dec 15, 2026",
    daysLeft: 45,
    gradient: "from-blue-500/80 to-cyan-500/80",
    imagePlaceholder: "bg-blue-100 dark:bg-blue-900/30",
  }
];

export function UpcomingTrips() {
  return (
    <div className="h-full rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 shadow-xl shadow-black/5 p-6 flex flex-col">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Upcoming Trips</h3>
        <Button variant="ghost" className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300">
          View all
        </Button>
      </div>

      <div className="flex flex-col gap-4 flex-1">
        {upcomingTrips.map((trip) => (
          <div 
            key={trip.id} 
            className="group relative flex flex-col sm:flex-row gap-4 p-4 rounded-2xl bg-white/50 dark:bg-zinc-950/50 border border-white/40 dark:border-zinc-800/50 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]"
          >
            {/* Image Placeholder */}
            <div className={`w-full sm:w-32 h-32 sm:h-auto shrink-0 rounded-xl bg-gradient-to-br ${trip.gradient} flex items-center justify-center overflow-hidden relative`}>
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              <MapPin className="text-white h-8 w-8 opacity-80" />
            </div>

            <div className="flex flex-col justify-center flex-1 py-1">
              <div className="flex justify-between items-start mb-1">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">{trip.destination}</h4>
                <span className="inline-flex items-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-semibold text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300">
                  In {trip.daysLeft} days
                </span>
              </div>
              
              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400 mt-2 gap-4">
                <div className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {trip.date}
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  Planned
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
