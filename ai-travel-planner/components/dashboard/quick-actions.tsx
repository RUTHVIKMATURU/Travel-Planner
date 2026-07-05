import { Plus, Camera, Receipt, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const actions = [
  { name: "Add Destination", icon: Plus, color: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500/20" },
  { name: "Log Expense", icon: Receipt, color: "bg-blue-500/10 text-blue-600 dark:text-blue-400 hover:bg-blue-500/20" },
  { name: "Invite Friends", icon: Users, color: "bg-purple-500/10 text-purple-600 dark:text-purple-400 hover:bg-purple-500/20" },
  { name: "Upload Photos", icon: Camera, color: "bg-rose-500/10 text-rose-600 dark:text-rose-400 hover:bg-rose-500/20" },
];

export function QuickActions() {
  return (
    <div className="rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 shadow-xl shadow-black/5 p-6">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action) => (
          <Button
            key={action.name}
            variant="ghost"
            className={`h-auto flex-col items-center gap-3 p-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] ${action.color}`}
          >
            <action.icon className="h-6 w-6" />
            <span className="text-sm font-medium">{action.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
