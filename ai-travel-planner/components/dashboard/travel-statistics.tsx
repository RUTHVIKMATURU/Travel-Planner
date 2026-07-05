import { Map, Plane, Wallet, Globe } from "lucide-react";

const stats = [
  {
    name: "Total Trips",
    value: "14",
    trend: "+2 this year",
    icon: Map,
    color: "bg-blue-500",
    light: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  },
  {
    name: "Countries Visited",
    value: "8",
    trend: "3 new",
    icon: Globe,
    color: "bg-purple-500",
    light: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  },
  {
    name: "Upcoming Flights",
    value: "3",
    trend: "Next in 12 days",
    icon: Plane,
    color: "bg-emerald-500",
    light: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
  },
  {
    name: "Total Spent",
    value: "$4,250",
    trend: "-12% from last year",
    icon: Wallet,
    color: "bg-rose-500",
    light: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
  },
];

export function TravelStatistics() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="relative overflow-hidden rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 shadow-xl shadow-black/5 p-6 hover:scale-[1.02] transition-all duration-300"
        >
          <div className="flex items-center gap-4">
            <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${stat.light}`}>
              <stat.icon className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                {stat.name}
              </p>
              <div className="flex items-baseline gap-2">
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
                  {stat.value}
                </h3>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200/50 dark:border-zinc-800/50">
            <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
              {stat.trend}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
