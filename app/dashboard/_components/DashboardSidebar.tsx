"use client";

import {
  LayoutDashboard,
  User,
  Key,
  CreditCard,
  Settings,
  LogOut,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export default function DashboardSidebar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClasses = (path: string) => {
    if (isActive(path)) {
      return "flex items-center gap-3 px-3 py-3 rounded-lg bg-[#c9a37e] text-[#0c1315] shadow-[0_0_15px_rgba(201,163,126,0.2)] transition-colors";
    }
    return "flex items-center gap-3 px-3 py-3 rounded-lg text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors";
  };

  return (
    <aside className="hidden lg:flex flex-col w-72 h-full border-r border-white/5 bg-[#0c1315] flex-shrink-0 transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center justify-start gap-3 mb-8 px-2">
          <Image
            src="/logo/logo2.png"
            alt="RentLuxe"
            width={140}
            height={40}
            className="h-8 w-auto object-contain"
          />
        </div>
        <nav className="flex flex-col gap-2">
          <Link
            className={getLinkClasses("/dashboard")}
            href="/dashboard"
          >
            <LayoutDashboard className="w-5 h-5" />
            <p className="text-sm font-bold">Dashboard</p>
          </Link>
          <Link
            className={getLinkClasses("/dashboard/profile")}
            href="/dashboard/profile"
          >
            <User className="w-5 h-5" />
            <p className="text-sm font-medium">Profile</p>
          </Link>
          <Link
            className={getLinkClasses("/dashboard/rentals")}
            href="/dashboard/rentals"
          >
            <Key className="w-5 h-5" />
            <p className="text-sm font-medium">Rentals</p>
          </Link>
          <Link
            className={getLinkClasses("/dashboard/payments")}
            href="/dashboard/payments"
          >
            <CreditCard className="w-5 h-5" />
            <p className="text-sm font-medium">Payments</p>
          </Link>
          <Link
            className={getLinkClasses("/dashboard/settings")}
            href="/dashboard/settings"
          >
            <Settings className="w-5 h-5" />
            <p className="text-sm font-medium">Settings</p>
          </Link>
        </nav>
      </div>
      {/* User Profile Section */}
      <div className="mt-auto p-6 border-t border-white/5">
        <div className="flex items-center gap-3 bg-[#1a1f21] p-3 rounded-xl border border-white/5">
          <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-700">
            <Image
              src={session?.user?.image || "/assets/placeholder-user.jpg"}
              alt="User profile"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex flex-col overflow-hidden">
            <p className="text-white text-sm font-semibold truncate">
              {session?.user?.name || "User"}
            </p>
            <p className="text-[#9da6b9] text-xs truncate">
              {session?.user?.email || ""}
            </p>
          </div>
          <button className="ml-auto text-[#9da6b9] hover:text-white transition-colors" onClick={() => signOut({ callbackUrl: '/login' })}>
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </aside>
  );
}
