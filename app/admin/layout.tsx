import AdminSidebar from "./_components/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[#0c1315] text-white font-sans overflow-hidden h-screen flex">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto h-full bg-[#0c1315]">
        {children}
      </main>
    </div>
  );
}
