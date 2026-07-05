import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SecurityTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Security</CardTitle>
        <CardDescription>
          Manage your password and secure your account.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="current-password">Current Password</Label>
            <Input id="current-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="new-password">New Password</Label>
            <Input id="new-password" type="password" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="confirm-password">Confirm New Password</Label>
            <Input id="confirm-password" type="password" />
          </div>
        </div>

        <div className="h-px bg-border my-6" />

        <div>
          <h4 className="text-sm font-semibold mb-2">Two-Factor Authentication</h4>
          <p className="text-sm text-muted-foreground mb-4">Add an extra layer of security to your account.</p>
          <Button variant="outline">Enable 2FA</Button>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Update Password</Button>
      </CardFooter>
    </Card>
  );
}
