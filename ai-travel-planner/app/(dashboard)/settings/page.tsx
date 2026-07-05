import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AppearanceTab } from "@/components/settings/appearance-tab";
import { NotificationsTab } from "@/components/settings/notifications-tab";
import { PrivacyTab } from "@/components/settings/privacy-tab";
import { SecurityTab } from "@/components/settings/security-tab";
import { ConnectedAccountsTab } from "@/components/settings/connected-accounts-tab";
import { DeleteAccountTab } from "@/components/settings/delete-account-tab";

export default function SettingsPage() {
  return (
    <div className="flex-1 space-y-6 p-4 md:p-8 pt-6 max-w-5xl mx-auto w-full">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Settings</h2>
        <p className="text-muted-foreground">
          Manage your account settings and set e-mail preferences.
        </p>
      </div>

      <Tabs defaultValue="appearance" className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-64 shrink-0 overflow-x-auto">
          <TabsList className="flex md:flex-col h-auto bg-transparent items-start justify-start p-0 w-full overflow-visible">
            <TabsTrigger 
              value="appearance" 
              className="w-full justify-start whitespace-nowrap data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-md px-3 py-2"
            >
              Appearance
            </TabsTrigger>
            <TabsTrigger 
              value="notifications" 
              className="w-full justify-start whitespace-nowrap data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-md px-3 py-2"
            >
              Notifications
            </TabsTrigger>
            <TabsTrigger 
              value="privacy" 
              className="w-full justify-start whitespace-nowrap data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-md px-3 py-2"
            >
              Privacy
            </TabsTrigger>
            <TabsTrigger 
              value="security" 
              className="w-full justify-start whitespace-nowrap data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-md px-3 py-2"
            >
              Security
            </TabsTrigger>
            <TabsTrigger 
              value="connected" 
              className="w-full justify-start whitespace-nowrap data-[state=active]:bg-muted data-[state=active]:shadow-none rounded-md px-3 py-2"
            >
              Connected Accounts
            </TabsTrigger>
            <TabsTrigger 
              value="danger" 
              className="w-full justify-start whitespace-nowrap data-[state=active]:bg-destructive/10 data-[state=active]:text-destructive hover:bg-destructive/10 hover:text-destructive data-[state=active]:shadow-none rounded-md px-3 py-2 text-destructive"
            >
              Danger Zone
            </TabsTrigger>
          </TabsList>
        </div>

        <div className="flex-1 w-full overflow-hidden">
          <TabsContent value="appearance" className="mt-0 outline-none">
            <AppearanceTab />
          </TabsContent>
          
          <TabsContent value="notifications" className="mt-0 outline-none">
            <NotificationsTab />
          </TabsContent>
          
          <TabsContent value="privacy" className="mt-0 outline-none">
            <PrivacyTab />
          </TabsContent>
          
          <TabsContent value="security" className="mt-0 outline-none">
            <SecurityTab />
          </TabsContent>
          
          <TabsContent value="connected" className="mt-0 outline-none">
            <ConnectedAccountsTab />
          </TabsContent>
          
          <TabsContent value="danger" className="mt-0 outline-none">
            <DeleteAccountTab />
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}