import { CheckCircle2, Ticket, Wallet, MessageSquare } from "lucide-react";

const activities = [
  {
    id: 1,
    title: "Flight Booked",
    description: "Tokyo Narita (NRT) to Osaka (KIX)",
    time: "2 hours ago",
    icon: Ticket,
    color: "text-blue-500",
    bg: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    title: "Expense Logged",
    description: "Sushi dinner at Shibuya ($45.00)",
    time: "5 hours ago",
    icon: Wallet,
    color: "text-rose-500",
    bg: "bg-rose-100 dark:bg-rose-900/30",
  },
  {
    id: 3,
    title: "Task Completed",
    description: "Renew Passport",
    time: "1 day ago",
    icon: CheckCircle2,
    color: "text-emerald-500",
    bg: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 4,
    title: "AI Suggestion Saved",
    description: "3-Day Kyoto Itinerary",
    time: "2 days ago",
    icon: MessageSquare,
    color: "text-purple-500",
    bg: "bg-purple-100 dark:bg-purple-900/30",
  },
];

export function RecentActivity() {
  return (
    <div className="h-full rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 shadow-xl shadow-black/5 p-6">
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">Recent Activity</h3>
      
      <div className="relative space-y-6 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 dark:before:via-zinc-800 before:to-transparent">
        {activities.map((item) => (
          <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            {/* Icon marker */}
            <div className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-zinc-950 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 ${item.bg}`}>
              <item.icon className={`h-4 w-4 ${item.color}`} />
            </div>
            
            {/* Content box */}
            <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-2xl bg-white/60 dark:bg-zinc-950/60 backdrop-blur-sm border border-white/60 dark:border-zinc-800/60 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-1">
                <h4 className="font-semibold text-slate-900 dark:text-white text-sm">{item.title}</h4>
                <time className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.time}</time>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
