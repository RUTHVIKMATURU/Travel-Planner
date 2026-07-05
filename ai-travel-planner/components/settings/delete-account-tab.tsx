import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export function DeleteAccountTab() {
  return (
    <Card className="border-destructive/20">
      <CardHeader>
        <CardTitle className="text-destructive flex items-center gap-2">
          <AlertCircle className="w-5 h-5" />
          Danger Zone
        </CardTitle>
        <CardDescription>
          Permanently delete your account and all of your content.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-destructive/10 border-l-4 border-destructive text-destructive p-4 rounded mb-6">
          <p className="font-semibold text-sm mb-1">Warning: This action cannot be undone.</p>
          <p className="text-sm text-destructive/80">
            This will permanently delete your account, all your trips, expenses, and remove your data from our servers.
          </p>
        </div>
        <Button variant="destructive">Delete Account</Button>
      </CardContent>
    </Card>
  );
}
