import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ConnectedAccountsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Connected Accounts</CardTitle>
        <CardDescription>
          Manage your linked third-party accounts for easy login.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between border-b pb-4">
          <div>
            <h4 className="text-sm font-semibold">Google</h4>
            <p className="text-sm text-muted-foreground">Connected as example@gmail.com</p>
          </div>
          <Button variant="outline" className="text-destructive hover:text-destructive hover:bg-destructive/10">Disconnect</Button>
        </div>
        
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold">GitHub</h4>
            <p className="text-sm text-muted-foreground">Not connected</p>
          </div>
          <Button variant="outline">Connect</Button>
        </div>
      </CardContent>
    </Card>
  );
}
