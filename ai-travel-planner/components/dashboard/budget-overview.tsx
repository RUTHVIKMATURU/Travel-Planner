import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wallet, TrendingUp, AlertCircle } from "lucide-react";

export function BudgetOverview() {
  const budget = 3500;
  const spent = 2150;
  const percentage = (spent / budget) * 100;
  const isWarning = percentage > 85;

  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Wallet className="w-5 h-5 text-muted-foreground" />
          Budget Overview
        </CardTitle>
        <CardDescription>Paris Getaway</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col justify-center gap-6">
        <div className="flex justify-between items-end">
          <div>
            <p className="text-sm text-muted-foreground mb-1">Spent so far</p>
            <h3 className="text-3xl font-bold tracking-tight">${spent.toLocaleString()}</h3>
          </div>
          <div className="text-right">
            <p className="text-sm text-muted-foreground mb-1">Total Budget</p>
            <p className="font-medium">${budget.toLocaleString()}</p>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs font-medium">
            <span className={isWarning ? "text-destructive" : "text-muted-foreground"}>
              {percentage.toFixed(0)}% Used
            </span>
            <span className="text-muted-foreground">
              ${(budget - spent).toLocaleString()} remaining
            </span>
          </div>
          <div className="h-3 w-full bg-secondary rounded-full overflow-hidden">
            <div 
              className={`h-full rounded-full ${isWarning ? 'bg-destructive' : 'bg-primary'}`}
              style={{ width: `${Math.min(percentage, 100)}%` }}
            />
          </div>
        </div>
        
        {isWarning ? (
          <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md flex items-start gap-2 mt-2">
            <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>You are approaching your budget limit for this trip.</p>
          </div>
        ) : (
          <div className="bg-muted text-muted-foreground text-sm p-3 rounded-md flex items-start gap-2 mt-2">
            <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0" />
            <p>You're on track! Top expense: Flights ($850).</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
