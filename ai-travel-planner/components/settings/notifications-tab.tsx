import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function NotificationsTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notifications</CardTitle>
        <CardDescription>
          Configure how you receive alerts and updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Email Notifications</h4>
          
          <div className="flex items-start space-x-3">
            <Checkbox id="email-invites" defaultChecked />
            <div className="space-y-1 leading-none">
              <Label htmlFor="email-invites">Trip Invitations</Label>
              <p className="text-sm text-muted-foreground">Receive emails when you are invited to a new trip.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="email-reminders" defaultChecked />
            <div className="space-y-1 leading-none">
              <Label htmlFor="email-reminders">Trip Reminders</Label>
              <p className="text-sm text-muted-foreground">Receive emails about upcoming trips and important deadlines.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="email-marketing" />
            <div className="space-y-1 leading-none">
              <Label htmlFor="email-marketing">Marketing & Updates</Label>
              <p className="text-sm text-muted-foreground">Receive emails about new features, promotions, and tips.</p>
            </div>
          </div>
        </div>

        <div className="h-px bg-border my-6" />

        <div className="space-y-4">
          <h4 className="text-sm font-semibold">Push Notifications</h4>
          
          <div className="flex items-start space-x-3">
            <Checkbox id="push-activity" defaultChecked />
            <div className="space-y-1 leading-none">
              <Label htmlFor="push-activity">Activity Feed</Label>
              <p className="text-sm text-muted-foreground">Get notified when someone comments or adds expenses.</p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        <Button>Save preferences</Button>
      </CardFooter>
    </Card>
  );
}
