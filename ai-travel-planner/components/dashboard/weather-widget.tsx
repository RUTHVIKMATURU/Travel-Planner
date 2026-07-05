import { Cloud, Sun, Wind, Droplets } from "lucide-react";

export function WeatherWidget() {
  return (
    <div className="h-full rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 shadow-xl shadow-black/5 p-6 relative overflow-hidden flex flex-col justify-between">
      {/* Decorative sun flare */}
      <div className="absolute -top-10 -right-10 h-32 w-32 bg-amber-300/40 blur-3xl rounded-full pointer-events-none" />

      <div>
        <div className="flex items-center justify-between mb-4 relative z-10">
          <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Destination Weather
          </h3>
          <span className="text-xs font-medium text-amber-600 dark:text-amber-400 bg-amber-100 dark:bg-amber-900/30 px-2 py-1 rounded-full">
            Kyoto, JP
          </span>
        </div>

        <div className="flex items-center gap-6 mt-6 relative z-10">
          <Sun className="h-16 w-16 text-amber-500 drop-shadow-md" />
          <div>
            <div className="text-5xl font-bold tracking-tighter text-slate-900 dark:text-white">
              72°<span className="text-3xl text-slate-400">F</span>
            </div>
            <p className="text-lg font-medium text-slate-600 dark:text-slate-300">Mostly Sunny</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-8 pt-6 border-t border-slate-200/50 dark:border-zinc-800/50 relative z-10">
        <div className="flex flex-col items-center">
          <Wind className="h-5 w-5 text-slate-400 mb-1" />
          <span className="text-sm font-semibold text-slate-900 dark:text-white">12mph</span>
          <span className="text-xs text-slate-500">Wind</span>
        </div>
        <div className="flex flex-col items-center border-x border-slate-200/50 dark:border-zinc-800/50">
          <Droplets className="h-5 w-5 text-blue-400 mb-1" />
          <span className="text-sm font-semibold text-slate-900 dark:text-white">24%</span>
          <span className="text-xs text-slate-500">Humidity</span>
        </div>
        <div className="flex flex-col items-center">
          <Cloud className="h-5 w-5 text-slate-400 mb-1" />
          <span className="text-sm font-semibold text-slate-900 dark:text-white">10%</span>
          <span className="text-xs text-slate-500">Rain</span>
        </div>
      </div>
    </div>
  );
}
