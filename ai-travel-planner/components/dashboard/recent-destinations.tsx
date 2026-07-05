import { Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";

const destinations = [
  { name: "Paris, France", date: "April 2025", gradient: "from-blue-400 to-indigo-500" },
  { name: "Bali, Indonesia", date: "August 2024", gradient: "from-emerald-400 to-teal-500" },
  { name: "New York, USA", date: "December 2023", gradient: "from-orange-400 to-rose-500" },
  { name: "Santorini, Greece", date: "June 2023", gradient: "from-cyan-400 to-blue-500" },
];

export function RecentDestinations() {
  return (
    <div className="rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 shadow-xl shadow-black/5 p-6 mb-8">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Past Destinations</h3>
        <Button variant="link" className="text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white">
          View Travel Map
        </Button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {destinations.map((dest, i) => (
          <div 
            key={i}
            className="group relative h-48 rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${dest.gradient} opacity-80 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="absolute inset-0 p-4 flex flex-col justify-end bg-gradient-to-t from-black/60 to-transparent">
              <Navigation className="h-5 w-5 text-white/70 mb-2 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-lg font-bold text-white leading-tight">{dest.name}</h4>
              <p className="text-sm text-white/80 mt-1">{dest.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
