"use client";

import {
  Key,
  Bell,
  Plus,
  ArrowUp,
  Award,
  Crown,
  Calendar,
  MapPin,
  Clock,
  ArrowRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { format } from "date-fns";

interface DashboardStats {
  totalRentals: number;
  loyaltyPoints: number;
  memberStatus: string;
  progressToNext: number;
}

interface ActiveBooking {
  id: string;
  carName: string;
  carImage: string;
  startDate: string;
  endDate: string;
  pickupLocation: string;
  status: string;
  totalPrice: number;
}

export default function CustomerDashboard() {
  const { data: session } = useSession();
  const [stats, setStats] = useState<DashboardStats>({
    totalRentals: 0,
    loyaltyPoints: 0,
    memberStatus: "Silver",
    progressToNext: 0
  });
  const [activeBooking, setActiveBooking] = useState<ActiveBooking | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch("/api/dashboard");
        if (res.ok) {
          const data = await res.json();
          setStats(data.stats);
          setActiveBooking(data.activeBooking);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    }

    if (session?.user) {
      fetchData();
    }
  }, [session]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center text-white">Loading dashboard...</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white font-[family-name:var(--font-epilogue)]">
            Welcome back, {session?.user?.name || "Customer"}
          </h1>
          <p className="text-[#9da6b9] mt-2 text-base">
            Here is an overview of your account and active rentals.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <button className="relative p-2 text-[#9da6b9] hover:text-white transition-colors bg-[#1a1f21] rounded-lg border border-white/10">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-[#1a1f21]"></span>
          </button>
          <Link href="/fleet" className="flex items-center justify-center gap-2 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(201,163,126,0.3)]">
            <Plus className="w-5 h-5" />
            <span>Book a New Car</span>
          </Link>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-[#1a1f21] p-6 rounded-xl border border-white/5 shadow-sm flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <p className="text-[#9da6b9] text-sm font-medium">Total Rentals</p>
            <div className="bg-[#c9a37e]/10 p-2 rounded-lg text-[#c9a37e]">
              <Key className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white mt-2">{stats.totalRentals}</p>
          <p className="text-xs text-emerald-500 font-medium flex items-center mt-1">
            <ArrowUp className="w-3.5 h-3.5 mr-1" />Lifetime
          </p>
        </div>

        <div className="bg-[#1a1f21] p-6 rounded-xl border border-white/5 shadow-sm flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <p className="text-[#9da6b9] text-sm font-medium">
              Loyalty Points
            </p>
            <div className="bg-[#c9a37e]/10 p-2 rounded-lg text-[#c9a37e]">
              <Award className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white mt-2">{stats.loyaltyPoints.toLocaleString()}</p>
          <p className="text-xs text-[#9da6b9] mt-1">
             {stats.memberStatus === "Platinum" ? "Max Tier Reached" : "Points to next tier"}
          </p>
        </div>

        <div className="bg-[#1a1f21] p-6 rounded-xl border border-white/5 shadow-sm flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <p className="text-[#9da6b9] text-sm font-medium">Member Status</p>
            <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500">
              <Crown className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white mt-2">{stats.memberStatus} Tier</p>
          <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-yellow-500 h-full rounded-full"
              style={{ width: `${stats.progressToNext}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column (Main Content) */}
        <div className="xl:col-span-8 flex flex-col gap-8">
          {/* Active Rental Section */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">Current Booking</h2>
              <Link
                href="/dashboard/rentals"
                className="text-sm text-[#c9a37e] hover:text-white transition-colors"
              >
                View all
              </Link>
            </div>

            {activeBooking ? (
              <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-2/5 relative min-h-[200px]">
                    <Image
                      src={activeBooking.carImage}
                      alt={activeBooking.carName}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-emerald-500 text-[#0c1315] text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                      {activeBooking.status}
                    </div>
                  </div>
                  <div className="p-6 md:w-3/5 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">{activeBooking.carName}</h3>
                      <p className="text-[#9da6b9] text-sm mt-1">Booking ID: {activeBooking.id.substring(0, 8)}...</p>
                      
                      <div className="grid grid-cols-2 gap-4 mt-6">
                        <div>
                          <p className="text-xs text-[#9da6b9] uppercase font-medium mb-1">Pick-up</p>
                          <div className="flex items-center gap-2 text-white text-sm font-semibold">
                            <Calendar className="w-4 h-4 text-[#c9a37e]" />
                            {format(new Date(activeBooking.startDate), "MMM dd, yyyy")}
                          </div>
                          <div className="flex items-center gap-2 text-[#9da6b9] text-xs mt-1">
                            <Clock className="w-3 h-3" /> 10:00 AM
                          </div>
                        </div>
                        <div>
                          <p className="text-xs text-[#9da6b9] uppercase font-medium mb-1">Return</p>
                          <div className="flex items-center gap-2 text-white text-sm font-semibold">
                            <Calendar className="w-4 h-4 text-[#c9a37e]" />
                            {format(new Date(activeBooking.endDate), "MMM dd, yyyy")}
                          </div>
                          <div className="flex items-center gap-2 text-[#9da6b9] text-xs mt-1">
                            <Clock className="w-3 h-3" /> 10:00 AM
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-[#9da6b9] text-sm">
                        <MapPin className="w-4 h-4 text-[#c9a37e]" />
                        {activeBooking.pickupLocation}
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-3">
                      <Link href={`/dashboard/rentals?id=${activeBooking.id}`} className="flex-1 bg-white/5 hover:bg-white/10 text-white py-2 rounded-lg text-sm font-bold transition-colors text-center border border-white/10">
                        Details
                      </Link>
                      <button className="flex-1 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] py-2 rounded-lg text-sm font-bold transition-colors shadow-lg shadow-[#c9a37e]/10">
                        Extend
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
               <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-8 text-center">
                 <div className="w-16 h-16 bg-[#c9a37e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Key className="w-8 h-8 text-[#c9a37e]" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">No Active Bookings</h3>
                 <p className="text-[#9da6b9] mb-6">You don't have any active rentals at the moment.</p>
                 <Link href="/fleet" className="inline-flex items-center justify-center gap-2 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] px-6 py-3 rounded-lg font-bold transition-all">
                    Browse Fleet <ArrowRight className="w-4 h-4" />
                 </Link>
               </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
