import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export function PrivacyTab() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Privacy</CardTitle>
        <CardDescription>
          Control who can see your profile and data.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <Checkbox id="public-profile" />
            <div className="space-y-1 leading-none">
              <Label htmlFor="public-profile">Public Profile</Label>
              <p className="text-sm text-muted-foreground">Allow anyone to view your public trips and travel stats.</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <Checkbox id="search-engine" />
            <div className="space-y-1 leading-none">
              <Label htmlFor="search-engine">Search Engine Indexing</Label>
              <p className="text-sm text-muted-foreground">Allow search engines to index your public profile.</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox id="analytics" defaultChecked />
            <div className="space-y-1 leading-none">
              <Label htmlFor="analytics">Anonymous Analytics</Label>
              <p className="text-sm text-muted-foreground">Help us improve by sharing anonymous usage data.</p>
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
