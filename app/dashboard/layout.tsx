import DashboardSidebar from "./_components/DashboardSidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0c1315] text-white font-sans overflow-hidden h-screen flex">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto h-full bg-[#0c1315]">
        {children}
      </main>
    </div>
  );
}
