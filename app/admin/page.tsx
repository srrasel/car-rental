"use client";

import {
  Search,
  Bell,
  Key,
  Clock,
  PieChart,
  AlertTriangle,
  Wrench,
  DollarSign,
  Loader2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface DashboardStats {
  activeRentals: number;
  activeRentalsNewToday: number;
  monthlyRevenue: number;
  lastMonthRevenue: number;
  pendingRequests: number;
  fleetUtilization: number;
  totalFleet: number;
  availableCars: number;
  rentedCars: number;
}

interface RecentBooking {
  id: string;
  user: {
    name: string | null;
    email: string | null;
    image: string | null;
  };
  carName: string;
  carImage: string;
  status: string;
  totalPrice: number;
  createdAt: string;
  dateRange: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<DashboardStats>({
    activeRentals: 0,
    activeRentalsNewToday: 0,
    monthlyRevenue: 0,
    lastMonthRevenue: 0,
    pendingRequests: 0,
    fleetUtilization: 0,
    totalFleet: 0,
    availableCars: 0,
    rentedCars: 0
  });
  const [recentActivity, setRecentActivity] = useState<RecentBooking[]>([]);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const res = await fetch("/api/admin/dashboard");
        if (res.ok) {
          const data = await res.json();
          setStats(data.stats);
          setRecentActivity(data.recentActivity);
        }
      } catch (error) {
        console.error("Failed to fetch dashboard data", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  // Calculate revenue growth percentage
  const revenueGrowth = stats.lastMonthRevenue > 0 
    ? ((stats.monthlyRevenue - stats.lastMonthRevenue) / stats.lastMonthRevenue) * 100 
    : 100;

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0c1315]">
        <Loader2 className="h-8 w-8 animate-spin text-[#c9a37e]" />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315]">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0c1315] px-8">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Dashboard Overview</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden w-full max-w-md md:flex">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-5 h-5 text-[#9da6b9]" />
            </div>
            <input 
              className="block w-64 rounded-lg border-0 bg-[#1a1f21] py-2 pl-10 pr-4 text-sm text-white placeholder-[#9da6b9] focus:ring-2 focus:ring-[#c9a37e]" 
              placeholder="Search bookings, cars..." 
              type="text"
            />
          </div>
          <button className="relative rounded-full p-1.5 text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0c1315]"></span>
          </button>
        </div>
      </header>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          
          {/* KPI Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {/* Active Rentals */}
            <div className="flex flex-col rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#9da6b9]">Active Rentals</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                  <Key className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">{stats.activeRentals}</span>
                <span className="text-sm font-medium text-emerald-500">+{stats.activeRentalsNewToday} today</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/5">
                <div 
                  className="h-1.5 rounded-full bg-[#c9a37e]" 
                  style={{ width: `${Math.min((stats.activeRentals / (stats.totalFleet || 1)) * 100, 100)}%` }}
                ></div>
              </div>
            </div>

            {/* Monthly Revenue */}
            <div className="flex flex-col rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#9da6b9]">Monthly Revenue</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">${stats.monthlyRevenue.toLocaleString()}</span>
                <span className={`text-sm font-medium ${revenueGrowth >= 0 ? 'text-emerald-500' : 'text-red-500'}`}>
                  {revenueGrowth > 0 ? '+' : ''}{revenueGrowth.toFixed(1)}%
                </span>
              </div>
              <p className="mt-2 text-xs text-[#9da6b9]">Compared to ${stats.lastMonthRevenue.toLocaleString()} last month</p>
            </div>

            {/* Pending Requests */}
            <div className="flex flex-col rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#9da6b9]">Pending Requests</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">{stats.pendingRequests}</span>
                <span className="text-sm font-medium text-[#9da6b9]">new</span>
              </div>
              <p className="mt-2 text-xs text-[#9da6b9]">Requires attention</p>
            </div>

            {/* Utilization */}
            <div className="flex flex-col rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#9da6b9]">Fleet Utilization</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                  <PieChart className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold text-white">{stats.fleetUtilization}%</span>
                <span className="text-sm font-medium text-emerald-500">Avg</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/5">
                <div 
                  className="h-1.5 rounded-full bg-purple-500" 
                  style={{ width: `${stats.fleetUtilization}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Main Grid Area */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* Revenue Chart Section */}
            <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-6 shadow-sm lg:col-span-2">
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Revenue Performance</h3>
                  <p className="text-sm text-[#9da6b9]">Daily revenue overview</p>
                </div>
                <select className="rounded-lg border border-white/10 bg-[#0c1315] px-3 py-1.5 text-sm font-medium text-white focus:border-[#c9a37e] focus:ring-[#c9a37e]">
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                  <option>This Year</option>
                </select>
              </div>
              
              {/* Chart Placeholder */}
              <div className="relative h-[300px] w-full flex items-center justify-center border border-dashed border-white/10 rounded-lg">
                <div className="text-center">
                    <p className="text-[#9da6b9] text-sm mb-2">Revenue Chart Visualization</p>
                    <p className="text-xs text-[#9da6b9]/50">(Data visualization coming soon)</p>
                </div>
                {/* 
                  We are keeping the SVG static for now as generating dynamic SVG paths 
                  requires more complex data aggregation from the backend 
                */}
              </div>
            </div>

            {/* Alerts & Action Required */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              {/* Action Required Card */}
              <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Action Required</h3>
                <div className="flex flex-col gap-4">
                  {/* Alert Item 1 */}
                  <div className="flex gap-4 rounded-lg bg-red-500/10 p-3">
                    <div className="mt-0.5 text-red-500">
                      <AlertTriangle className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Mileage Overage</p>
                      <p className="text-xs text-[#9da6b9]">Booking #4922 • Payment Pending ($45.00)</p>
                      <button className="mt-2 text-xs font-medium text-[#c9a37e] hover:text-[#c9a37e]/80 hover:underline">Send Reminder</button>
                    </div>
                  </div>
                  {/* Alert Item 2 */}
                  <div className="flex gap-4 rounded-lg bg-amber-500/10 p-3">
                    <div className="mt-0.5 text-amber-500">
                      <Wrench className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">Maintenance Due</p>
                      <p className="text-xs text-[#9da6b9]">Toyota Camry • License 882-JKA</p>
                      <button className="mt-2 text-xs font-medium text-[#c9a37e] hover:text-[#c9a37e]/80 hover:underline">Schedule Service</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fleet Composition Donut */}
              <div className="flex-1 rounded-xl border border-white/5 bg-[#1a1f21] p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Fleet Status</h3>
                <div className="flex items-center gap-6">
                  <div className="relative h-32 w-32 shrink-0">
                    <svg className="h-full w-full rotate-[-90deg]" viewBox="0 0 36 36">
                      {/* Ring Background */}
                      <path className="text-white/10" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="4"></path>
                      
                      {/* Segment 1: Rented (Gold) */}
                      {stats.totalFleet > 0 && (
                        <path 
                            className="text-[#c9a37e]" 
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeDasharray={`${(stats.rentedCars / stats.totalFleet) * 100}, 100`} 
                            strokeWidth="4"
                        ></path>
                      )}
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-white">{stats.totalFleet}</span>
                      <span className="text-[10px] uppercase text-[#9da6b9]">Total Cars</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#c9a37e]"></span>
                      <span className="text-sm text-[#9da6b9]">Rented ({stats.rentedCars})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                      <span className="text-sm text-[#9da6b9]">Available ({stats.availableCars})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity Table */}
          <div className="rounded-xl border border-white/5 bg-[#1a1f21] shadow-sm mb-8">
            <div className="flex items-center justify-between border-b border-white/5 px-6 py-4">
              <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Recent Activity</h3>
              <Link href="/admin/bookings" className="text-sm font-medium text-[#c9a37e] hover:text-[#c9a37e]/80">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#9da6b9]">
                <thead className="bg-[#0c1315] text-xs uppercase text-[#9da6b9]">
                  <tr>
                    <th className="px-6 py-3 font-semibold" scope="col">Booking ID</th>
                    <th className="px-6 py-3 font-semibold" scope="col">Vehicle</th>
                    <th className="px-6 py-3 font-semibold" scope="col">Customer</th>
                    <th className="px-6 py-3 font-semibold" scope="col">Dates</th>
                    <th className="px-6 py-3 font-semibold" scope="col">Amount</th>
                    <th className="px-6 py-3 font-semibold" scope="col">Status</th>
                    <th className="px-6 py-3 font-semibold" scope="col">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {recentActivity.length === 0 ? (
                    <tr>
                        <td colSpan={7} className="px-6 py-8 text-center text-[#9da6b9]">
                            No recent activity found.
                        </td>
                    </tr>
                  ) : (
                    recentActivity.map((booking) => (
                        <tr key={booking.id} className="hover:bg-white/5 transition-colors">
                            <td className="px-6 py-4 font-medium text-white">
                                <span title={booking.id}>#{booking.id.slice(-6).toUpperCase()}</span>
                            </td>
                            <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-16 shrink-0 overflow-hidden rounded-md bg-slate-700 relative">
                                    {booking.carImage ? (
                                        <Image src={booking.carImage} alt={booking.carName} fill className="object-cover" />
                                    ) : (
                                        <div className="absolute inset-0 bg-[#c9a37e]/20 flex items-center justify-center text-[10px] text-[#c9a37e]">IMG</div>
                                    )}
                                </div>
                                <span className="font-medium text-white">{booking.carName}</span>
                            </div>
                            </td>
                            <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                                <div className="h-6 w-6 rounded-full bg-slate-700 relative overflow-hidden">
                                    <Image 
                                        src={booking.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(booking.user.name || "User")}&background=random`}
                                        alt="Customer"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                {booking.user.name || "Guest User"}
                            </div>
                            </td>
                            <td className="px-6 py-4">{booking.dateRange}</td>
                            <td className="px-6 py-4 font-medium text-white">${booking.totalPrice.toLocaleString()}</td>
                            <td className="px-6 py-4">
                                <span className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    booking.status === 'CONFIRMED' ? 'bg-emerald-500/10 text-emerald-500' :
                                    booking.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-500' :
                                    'bg-red-500/10 text-red-500'
                                }`}>
                                    {booking.status}
                                </span>
                            </td>
                            <td className="px-6 py-4">
                            <button 
                                onClick={() => router.push(`/admin/bookings/${booking.id}`)}
                                className="text-[#c9a37e] hover:text-[#c9a37e]/80"
                            >
                                Details
                            </button>
                            </td>
                        </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
