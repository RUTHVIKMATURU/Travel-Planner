import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export function AppearanceTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Appearance</CardTitle>
        <CardDescription>
          Customize how the application looks on your device.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <Label className="text-base font-medium">Theme</Label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="flex flex-col items-center justify-between rounded-md border-2 border-primary bg-popover p-4 hover:bg-accent hover:text-accent-foreground text-center space-y-2">
              <div className="w-full p-2 bg-slate-100 rounded flex gap-2 h-20 items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-white shadow-sm" />
                <div className="w-8 h-8 rounded-full bg-slate-200" />
              </div>
              <span className="font-semibold text-sm">Light</span>
            </button>
            <button className="flex flex-col items-center justify-between rounded-md border-2 border-transparent bg-popover p-4 hover:bg-accent hover:text-accent-foreground text-center space-y-2">
              <div className="w-full p-2 bg-slate-900 rounded flex gap-2 h-20 items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-slate-800" />
                <div className="w-8 h-8 rounded-full bg-slate-700" />
              </div>
              <span className="font-semibold text-sm">Dark</span>
            </button>
            <button className="flex flex-col items-center justify-between rounded-md border-2 border-transparent bg-popover p-4 hover:bg-accent hover:text-accent-foreground text-center space-y-2">
              <div className="w-full p-2 bg-gradient-to-r from-slate-100 to-slate-900 rounded flex gap-2 h-20 items-center justify-center">
                 <div className="w-8 h-8 rounded-full bg-white/50 backdrop-blur" />
              </div>
              <span className="font-semibold text-sm">System</span>
            </button>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Save preferences</Button>
      </CardFooter>
    </Card>
  );
}
