import { Sparkles, ArrowRight, PlaneTakeoff, Hotel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function AiAssistant() {
  return (
    <div className="h-full rounded-3xl bg-white/40 dark:bg-zinc-900/40 backdrop-blur-xl border border-white/40 dark:border-zinc-800/50 shadow-xl shadow-black/5 p-6 relative overflow-hidden flex flex-col">
      <div className="absolute top-0 right-0 h-40 w-40 bg-purple-500/10 blur-3xl rounded-full pointer-events-none" />
      
      <div className="flex items-center gap-2 mb-6">
        <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-xl">
          <Sparkles className="h-5 w-5 text-purple-600 dark:text-purple-400" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Ask AI Planner</h3>
      </div>

      <div className="flex-1 flex flex-col justify-end space-y-4">
        {/* Sample chat bubbles */}
        <div className="flex gap-3 max-w-[85%]">
          <div className="h-8 w-8 shrink-0 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div className="bg-white/60 dark:bg-zinc-800/60 p-3 rounded-2xl rounded-tl-sm text-sm text-slate-700 dark:text-slate-300 backdrop-blur-md border border-white/40 dark:border-zinc-700/50">
            I can help you build an itinerary, find hotels, or estimate your budget. What's your next destination?
          </div>
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          <Button variant="outline" size="sm" className="rounded-full bg-white/50 dark:bg-zinc-900/50 border-slate-200 dark:border-zinc-800">
            <PlaneTakeoff className="h-3 w-3 mr-1.5" /> 3 days in Rome
          </Button>
          <Button variant="outline" size="sm" className="rounded-full bg-white/50 dark:bg-zinc-900/50 border-slate-200 dark:border-zinc-800">
            <Hotel className="h-3 w-3 mr-1.5" /> Cheap stays in Tokyo
          </Button>
        </div>

        <div className="relative mt-2">
          <Input 
            placeholder="Type your travel request..." 
            className="pl-4 pr-12 py-6 rounded-2xl bg-white/60 dark:bg-zinc-900/60 border-slate-200/50 dark:border-zinc-800/50 focus-visible:ring-purple-500/50 shadow-inner"
          />
          <Button size="icon" className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-purple-600 hover:bg-purple-700 h-8 w-8">
            <ArrowRight className="h-4 w-4 text-white" />
          </Button>
        </div>
      </div>
    </div>
  );
}
