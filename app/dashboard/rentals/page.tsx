"use client";

import { Search, Filter, Calendar, MapPin, Clock, MoreVertical, ArrowRight, Star, Download, Loader2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { format, isBefore, isAfter, isWithinInterval } from "date-fns";
import Link from "next/link";

interface Rental {
  id: string;
  carId: number;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: string;
  paymentStatus: string;
  carName: string;
  carImage: string;
  pickupLocation: string;
  category: string;
}

export default function RentalsPage() {
  const { data: session } = useSession();
  const [activeTab, setActiveTab] = useState("active");
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [loading, setLoading] = useState(true);
  const [filteredRentals, setFilteredRentals] = useState<Rental[]>([]);

  const tabs = [
    { id: "active", label: "Active" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
    { id: "cancelled", label: "Cancelled" },
  ];

  useEffect(() => {
    async function fetchRentals() {
      try {
        const res = await fetch("/api/dashboard/rentals");
        if (res.ok) {
          const data = await res.json();
          setRentals(data);
        }
      } catch (error) {
        console.error("Failed to fetch rentals", error);
      } finally {
        setLoading(false);
      }
    }

    if (session?.user) {
      fetchRentals();
    }
  }, [session]);

  useEffect(() => {
    const now = new Date();
    
    const filtered = rentals.filter((rental) => {
      const start = new Date(rental.startDate);
      const end = new Date(rental.endDate);

      switch (activeTab) {
        case "active":
          return (
            rental.status === "CONFIRMED" &&
            isWithinInterval(now, { start, end })
          );
        case "upcoming":
          return (
            (rental.status === "CONFIRMED" || rental.status === "PENDING") &&
            isAfter(start, now)
          );
        case "completed":
          return (
            rental.status === "CONFIRMED" &&
            isBefore(end, now)
          );
        case "cancelled":
          return rental.status === "CANCELLED";
        default:
          return true;
      }
    });

    setFilteredRentals(filtered);
  }, [activeTab, rentals]);

  if (loading) {
    return (
        <div className="min-h-screen flex items-center justify-center text-white">
            <Loader2 className="w-8 h-8 animate-spin text-[#c9a37e]" />
        </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-epilogue)]">
            My Rentals
          </h1>
          <p className="text-[#9da6b9] mt-2 text-base">
            View and manage your current and past vehicle rentals.
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#9da6b9]" />
            <input
              type="text"
              placeholder="Search rentals..."
              className="w-full bg-[#1a1f21] border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-[#c9a37e] transition-colors"
            />
          </div>
          <button className="p-2 bg-[#1a1f21] border border-white/10 rounded-lg text-[#9da6b9] hover:text-white transition-colors">
            <Filter className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-white/10 mb-8 overflow-x-auto">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? "border-[#c9a37e] text-[#c9a37e]"
                : "border-transparent text-[#9da6b9] hover:text-white hover:border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="space-y-6">
        {filteredRentals.length > 0 ? (
            filteredRentals.map((rental) => (
                <div key={rental.id} className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative min-h-[240px] md:min-h-0">
                        <Image
                        src={rental.carImage}
                        alt={rental.carName}
                        fill
                        className="object-cover"
                        />
                        {activeTab === "active" && (
                            <div className="absolute top-4 left-4 bg-emerald-500 text-[#0c1315] text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                            ACTIVE NOW
                            </div>
                        )}
                         {activeTab === "upcoming" && (
                            <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                            UPCOMING
                            </div>
                        )}
                         {activeTab === "cancelled" && (
                            <div className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                            CANCELLED
                            </div>
                        )}
                    </div>
                    <div className="p-6 md:w-2/3 flex flex-col">
                        <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white">{rental.carName}</h3>
                            <p className="text-[#9da6b9] mt-1">Order #{rental.id.substring(0, 8).toUpperCase()} • Placed on {format(new Date(), "MMM dd, yyyy")}</p>
                        </div>
                        <button className="text-[#9da6b9] hover:text-white transition-colors">
                            <MoreVertical className="w-5 h-5" />
                        </button>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-[#0c1315] p-2 rounded-lg text-[#c9a37e]">
                                        <Calendar className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9da6b9] uppercase font-medium">Pick-up</p>
                                        <p className="text-white font-semibold">{format(new Date(rental.startDate), "MMM dd, yyyy")} • 10:00 AM</p>
                                        <p className="text-sm text-[#9da6b9]">{rental.pickupLocation}</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="mt-1 bg-[#0c1315] p-2 rounded-lg text-[#c9a37e]">
                                        <Clock className="w-4 h-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-[#9da6b9] uppercase font-medium">Return</p>
                                        <p className="text-white font-semibold">{format(new Date(rental.endDate), "MMM dd, yyyy")} • 10:00 AM</p>
                                        <p className="text-sm text-[#9da6b9]">{rental.pickupLocation}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="bg-[#0c1315] rounded-lg p-4 border border-white/5">
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-[#9da6b9] text-sm">Total Price</p>
                                    <p className="text-xl font-bold text-white">${rental.totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-[#9da6b9] text-sm">Status</p>
                                    <p className={`text-sm font-medium ${rental.status === "CONFIRMED" ? "text-emerald-400" : rental.status === "CANCELLED" ? "text-red-400" : "text-yellow-400"}`}>{rental.status}</p>
                                </div>
                                <div className="flex justify-between items-center">
                                    <p className="text-[#9da6b9] text-sm">Payment</p>
                                    <p className={`text-sm font-medium ${rental.paymentStatus === "PAID" ? "text-emerald-400" : "text-yellow-400"}`}>{rental.paymentStatus}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-auto flex gap-3">
                            {activeTab === "active" && (
                                <button className="flex-1 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] font-bold py-2.5 rounded-lg transition-colors">
                                    Extend Rental
                                </button>
                            )}
                            {activeTab === "completed" && (
                                <button className="flex-1 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] font-bold py-2.5 rounded-lg transition-colors">
                                    Book Again
                                </button>
                            )}
                             <button className="flex-1 bg-[#0c1315] hover:bg-white/5 text-white border border-white/10 font-medium py-2.5 rounded-lg transition-colors">
                                {activeTab === "completed" ? "Invoice" : "Report Issue"}
                            </button>
                            <button className="bg-[#0c1315] hover:bg-white/5 text-white border border-white/10 p-2.5 rounded-lg transition-colors">
                                <Download className="w-5 h-5" />
                            </button>
                        </div>
                    </div>
                    </div>
                </div>
            ))
        ) : (
             <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-12 text-center">
                 <div className="w-16 h-16 bg-[#c9a37e]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Calendar className="w-8 h-8 text-[#c9a37e]" />
                 </div>
                 <h3 className="text-xl font-bold text-white mb-2">No {activeTab} rentals</h3>
                 <p className="text-[#9da6b9] mb-6">You don't have any {activeTab} rentals at the moment.</p>
                 <Link href="/fleet" className="inline-flex items-center justify-center gap-2 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] px-6 py-3 rounded-lg font-bold transition-all">
                    Browse Fleet <ArrowRight className="w-4 h-4" />
                 </Link>
             </div>
        )}
      </div>
    </div>
  );
}
