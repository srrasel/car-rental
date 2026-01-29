"use client";

import {
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  Bell,
  CalendarRange,
  DollarSign,
  Car,
  Download,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { allCars } from "@/lib/data";

interface Booking {
  id: string;
  user: {
    name: string | null;
    email: string | null;
    image?: string | null;
  };
  carId: number;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: string;
  paymentStatus: string;
  paymentMethod: string;
  createdAt?: string;
}

export default function BookingsPage() {
  const router = useRouter();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filteredBookings, setFilteredBookings] = useState<Booking[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    async function fetchBookings() {
      try {
        const res = await fetch("/api/admin/bookings");
        if (res.ok) {
          const data = await res.json();
          setBookings(data);
          setFilteredBookings(data);
        }
      } catch (error) {
        console.error("Failed to fetch bookings:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchBookings();
  }, []);

  useEffect(() => {
    let result = bookings;

    // Filter by tab
    if (activeTab !== "ALL") {
      result = result.filter(b => b.status === activeTab);
    }

    // Filter by search
    if (searchQuery) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(b => 
        b.id.toLowerCase().includes(lowerQuery) ||
        b.user.name?.toLowerCase().includes(lowerQuery) ||
        b.user.email?.toLowerCase().includes(lowerQuery)
      );
    }

    setFilteredBookings(result);
    setCurrentPage(1);
  }, [bookings, activeTab, searchQuery]);

  const getCarDetails = (carId: number) => {
    return allCars.find(c => c.id === carId);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "PENDING":
        return "text-amber-500 bg-amber-500/10 border-amber-500/20";
      case "CONFIRMED":
        return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "CANCELLED":
        return "text-red-500 bg-red-500/10 border-red-500/20";
      case "COMPLETED":
        return "text-blue-500 bg-blue-500/10 border-blue-500/20";
      default:
        return "text-slate-400 bg-slate-400/10 border-slate-400/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "PENDING":
        return <Clock className="w-3.5 h-3.5 mr-1.5" />;
      case "CONFIRMED":
        return <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />;
      case "CANCELLED":
        return <XCircle className="w-3.5 h-3.5 mr-1.5" />;
      case "COMPLETED":
        return <CheckCircle2 className="w-3.5 h-3.5 mr-1.5" />;
      default:
        return null;
    }
  };

  // KPI Calculations
  const totalRevenue = bookings
    .filter(b => b.status === "CONFIRMED" || b.status === "COMPLETED")
    .reduce((sum, b) => sum + b.totalPrice, 0);
  
  const activeBookingsCount = bookings.filter(b => b.status === "CONFIRMED").length;
  const pendingBookingsCount = bookings.filter(b => b.status === "PENDING").length;

  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const paginatedBookings = filteredBookings.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0c1315]">
        <div className="flex flex-col items-center gap-4">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#c9a37e] border-t-transparent"></div>
          <p className="text-[#9da6b9]">Loading bookings...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315]">
      {/* Top Navigation */}
      <header className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0c1315] px-8 shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Booking Management</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden w-full max-w-md md:flex">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-5 h-5 text-[#9da6b9]" />
            </div>
            <input 
              className="block w-64 rounded-lg border-0 bg-[#1a1f21] py-2 pl-10 pr-4 text-sm text-white placeholder-[#9da6b9] focus:ring-2 focus:ring-[#c9a37e]" 
              placeholder="Search bookings..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="relative rounded-full p-1.5 text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
            <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-500 ring-2 ring-[#0c1315]"></span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
          
          {/* KPI Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#9da6b9]">Total Revenue</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                  <DollarSign className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">${totalRevenue.toLocaleString()}</span>
                <span className="text-xs font-medium text-emerald-500">+12.5%</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#9da6b9]">Total Bookings</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                  <CalendarRange className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{bookings.length}</span>
                <span className="text-xs font-medium text-blue-500">All time</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#9da6b9]">Active Rentals</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-500/10 text-purple-500">
                  <Car className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{activeBookingsCount}</span>
                <span className="text-xs font-medium text-purple-500">On road</span>
              </div>
            </div>

            <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-[#9da6b9]">Pending Approval</span>
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-500/10 text-amber-500">
                  <Clock className="w-5 h-5" />
                </div>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">{pendingBookingsCount}</span>
                <span className="text-xs font-medium text-amber-500">Needs action</span>
              </div>
            </div>
          </div>

          {/* Filters and Actions */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2 rounded-lg bg-[#1a1f21] p-1 border border-white/5">
              {["ALL", "PENDING", "CONFIRMED", "CANCELLED"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`rounded-md px-4 py-1.5 text-xs font-medium transition-all ${
                    activeTab === tab
                      ? "bg-[#c9a37e] text-[#0c1315] shadow-sm"
                      : "text-[#9da6b9] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {tab.charAt(0) + tab.slice(1).toLowerCase()}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#1a1f21] px-3 py-2 text-sm font-medium text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors">
                <Filter className="w-4 h-4" />
                Filters
              </button>
              <button className="flex items-center gap-2 rounded-lg border border-white/10 bg-[#1a1f21] px-3 py-2 text-sm font-medium text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors">
                <Download className="w-4 h-4" />
                Export
              </button>
            </div>
          </div>

          {/* Bookings Table */}
          <div className="rounded-xl border border-white/5 bg-[#1a1f21] shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-[#9da6b9]">
                <thead className="bg-[#0c1315] text-xs uppercase text-[#9da6b9]">
                  <tr>
                    <th className="px-6 py-4 font-semibold">Booking ID</th>
                    <th className="px-6 py-4 font-semibold">Vehicle</th>
                    <th className="px-6 py-4 font-semibold">Customer</th>
                    <th className="px-6 py-4 font-semibold">Dates</th>
                    <th className="px-6 py-4 font-semibold">Status</th>
                    <th className="px-6 py-4 font-semibold text-right">Amount</th>
                    <th className="px-6 py-4 font-semibold text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {filteredBookings.length === 0 ? (
                    <tr>
                      <td colSpan={7} className="px-6 py-12 text-center">
                        <div className="flex flex-col items-center justify-center gap-2">
                          <div className="rounded-full bg-white/5 p-3">
                            <Search className="w-6 h-6 text-[#9da6b9]" />
                          </div>
                          <p className="text-white font-medium">No bookings found</p>
                          <p className="text-xs text-[#9da6b9]">Try adjusting your search or filters</p>
                        </div>
                      </td>
                    </tr>
                  ) : (
                    paginatedBookings.map((booking) => {
                      const car = getCarDetails(booking.carId);
                      return (
                        <tr 
                          key={booking.id} 
                          onClick={() => router.push(`/admin/bookings/${booking.id}`)}
                          className="group cursor-pointer hover:bg-white/5 transition-colors"
                        >
                          <td className="px-6 py-4 font-medium text-white">
                            <span title={booking.id}>#{booking.id.slice(-6).toUpperCase()}</span>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="relative h-10 w-16 shrink-0 overflow-hidden rounded-md bg-slate-800">
                                {car?.image ? (
                                  <Image src={car.image} alt={car.name} fill className="object-cover" />
                                ) : (
                                  <div className="flex h-full w-full items-center justify-center text-[10px] text-slate-500">IMG</div>
                                )}
                              </div>
                              <span className="font-medium text-white">{car?.name || "Unknown Car"}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-3">
                              <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full bg-slate-800">
                                <Image 
                                  src={booking.user.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(booking.user.name || "User")}&background=random`}
                                  alt="User" 
                                  fill 
                                  className="object-cover" 
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-white text-sm">{booking.user.name}</span>
                                <span className="text-xs text-[#9da6b9]">{booking.user.email}</span>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex flex-col gap-1 text-xs">
                              <span className="text-white">{new Date(booking.startDate).toLocaleDateString()}</span>
                              <span className="text-[#9da6b9]/50">to</span>
                              <span className="text-white">{new Date(booking.endDate).toLocaleDateString()}</span>
                            </div>
                          </td>
                          <td className="px-6 py-4">
                            <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${getStatusColor(booking.status)}`}>
                              {getStatusIcon(booking.status)}
                              {booking.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 text-right font-medium text-white">
                            ${booking.totalPrice.toLocaleString()}
                          </td>
                          <td className="px-6 py-4">
                            <div className="flex items-center justify-center">
                              <button className="rounded-lg p-2 text-[#9da6b9] hover:bg-white/10 hover:text-white transition-colors">
                                <MoreVertical className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
            {/* Pagination */}
            <div className="border-t border-white/5 bg-[#0c1315] px-6 py-4 flex items-center justify-between">
               <span className="text-xs text-[#9da6b9]">
                 Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredBookings.length)} of {filteredBookings.length} bookings
               </span>
               <div className="flex gap-2">
                 <button 
                   onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                   disabled={currentPage === 1}
                   className="px-3 py-1 text-xs font-medium text-[#9da6b9] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   Previous
                 </button>
                 <button 
                   onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                   disabled={currentPage === totalPages}
                   className="px-3 py-1 text-xs font-medium text-[#9da6b9] hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   Next
                 </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
