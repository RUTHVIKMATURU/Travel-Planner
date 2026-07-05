import { auth } from "@/auth/auth";
import { DashboardLayoutClient } from "@/components/dashboard/DashboardLayoutClient";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  
  return (
    <DashboardLayoutClient user={session?.user}>
      {children}
    </DashboardLayoutClient>
  );
}
