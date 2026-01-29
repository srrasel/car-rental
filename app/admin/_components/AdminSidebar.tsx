"use client";

import {
  LayoutDashboard,
  Calendar,
  Users,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

export default function AdminSidebar() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/admin" && pathname === "/admin") return true;
    if (path !== "/admin" && pathname.startsWith(path)) return true;
    return false;
  };

  const getLinkClasses = (path: string) => {
    if (isActive(path)) {
      return "flex items-center gap-3 rounded-lg bg-[#c9a37e]/10 px-3 py-2 text-[#c9a37e] transition-colors";
    }
    return "flex items-center gap-3 rounded-lg px-3 py-2 text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors";
  };

  return (
    <aside className="hidden md:flex w-64 flex-col border-r border-white/5 bg-[#0c1315] transition-all duration-300 shrink-0">
      <div className="flex h-16 items-center justify-center border-b border-white/5 px-6">
        <Image
          src="/logo/logo2.png"
          alt="RentLuxe Admin"
          width={120}
          height={40}
          className="h-8 w-auto object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between overflow-y-auto px-4 py-4">
        <nav className="flex flex-col gap-1">
          <p className="px-2 pb-2 text-xs font-semibold uppercase tracking-wider text-[#9da6b9]">
            Overview
          </p>

          <Link href="/admin" className={getLinkClasses("/admin")}>
            <LayoutDashboard className="w-5 h-5" />
            <span className="text-sm font-medium">Dashboard</span>
          </Link>

          <Link href="/admin/bookings" className={getLinkClasses("/admin/bookings")}>
            <Calendar className="w-5 h-5" />
            <span className="text-sm font-medium">Bookings</span>
            <span className="ml-auto rounded-full bg-red-500/10 px-2 py-0.5 text-xs font-semibold text-red-500">
              3
            </span>
          </Link>

          <Link href="/admin/customers" className={getLinkClasses("/admin/customers")}>
            <Users className="w-5 h-5" />
            <span className="text-sm font-medium">Customers</span>
          </Link>
        </nav>

        <div className="flex flex-col gap-1 border-t border-white/5 pt-4">
          <Link href="/admin/settings" className={getLinkClasses("/admin/settings")}>
            <Settings className="w-5 h-5" />
            <span className="text-sm font-medium">Settings</span>
          </Link>

          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors w-full text-left"
          >
            <LogOut className="w-5 h-5" />
            <span className="text-sm font-medium">Sign Out</span>
          </button>
        </div>
      </div>

      <div className="p-4 border-t border-white/5">
        <div className="flex items-center gap-3 rounded-lg bg-[#1a1f21] p-2">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-700 relative">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuASXT3cZV1uqIPuPHqQX6qzfalqrzEVkdqs4JGrHbnHx2jFjCUZ68orCF-ALyMGPltWZ57djIbqvDPB_3F2MeBFTWTTdlW46oz6HCRmln04Um6UoAD1DIZobO8NXoKoshpTCrlah_FdYyX6SSJy6kl00atwLheyHjTmFcCDH7SfjWAMRLGLkwijmv9Y0xI55RKnazBVBPxx9XtPJljQhXS_G1ZZynOwRgzEsORka1xtg9klW1QD5pbryHxQSACAy0jHqgzuIjZAi4LA"
              alt="Alex Morgan"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-sm font-semibold text-white truncate">
              Alex Morgan
            </p>
            <p className="text-xs text-[#9da6b9] truncate">Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
