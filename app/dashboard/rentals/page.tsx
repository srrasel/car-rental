"use client";

import { Search, Filter, Calendar, MapPin, Clock, MoreVertical, ArrowRight, Star, Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function RentalsPage() {
  const [activeTab, setActiveTab] = useState("active");

  const tabs = [
    { id: "active", label: "Active" },
    { id: "upcoming", label: "Upcoming" },
    { id: "completed", label: "Completed" },
    { id: "cancelled", label: "Cancelled" },
  ];

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
        {/* Active Rental Card */}
        {activeTab === "active" && (
          <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 relative min-h-[240px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxmIOX8I2HgPGMV6uj5NrFQnLBCd76DNXM2NhhssGbxtsrmd8mIZdpxW-n-VSs6MDFFzHTEJ0O-pNaLN4Dydf-sjyBP5kmT9X4KLMrZIavjQzO6sTD71sglAEzRA13NAiti9k9nF5a7MOH3XQSeu6hrXHpHA64vU_dED7DAvdGYvPEg1O8rDPKROAYpvtCf5rLnQ6DCFqUtEC3_K6wCWc2VuW02n3kmJk3jNXn85EX_1zZJRGrQm6zhSrl2vY5IS-y5Ph0f0xQ-9zi"
                  alt="Tesla Model 3"
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 bg-emerald-500 text-[#0c1315] text-xs font-bold px-3 py-1.5 rounded shadow-sm">
                  ACTIVE NOW
                </div>
              </div>
              <div className="p-6 md:w-2/3 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white">Tesla Model 3 Long Range</h3>
                    <p className="text-[#9da6b9] mt-1">Order #R-839201 • Placed on Oct 20, 2024</p>
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
                                <p className="text-white font-semibold">Oct 24, 2024 • 10:00 AM</p>
                                <p className="text-sm text-[#9da6b9]">LAX International Airport</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="mt-1 bg-[#0c1315] p-2 rounded-lg text-[#c9a37e]">
                                <Clock className="w-4 h-4" />
                            </div>
                            <div>
                                <p className="text-xs text-[#9da6b9] uppercase font-medium">Return</p>
                                <p className="text-white font-semibold">Oct 28, 2024 • 10:00 AM</p>
                                <p className="text-sm text-[#9da6b9]">LAX International Airport</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#0c1315] rounded-lg p-4 border border-white/5">
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-[#9da6b9] text-sm">Total Price</p>
                            <p className="text-xl font-bold text-white">$450.00</p>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                            <p className="text-[#9da6b9] text-sm">Security Deposit</p>
                            <p className="text-white font-medium">$200.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <p className="text-[#9da6b9] text-sm">Insurance</p>
                            <p className="text-emerald-400 text-sm font-medium">Premium Coverage</p>
                        </div>
                    </div>
                </div>

                <div className="mt-auto flex gap-3">
                    <button className="flex-1 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] font-bold py-2.5 rounded-lg transition-colors">
                        Extend Rental
                    </button>
                    <button className="flex-1 bg-[#0c1315] hover:bg-white/5 text-white border border-white/10 font-medium py-2.5 rounded-lg transition-colors">
                        Report Issue
                    </button>
                    <button className="bg-[#0c1315] hover:bg-white/5 text-white border border-white/10 p-2.5 rounded-lg transition-colors">
                        <Download className="w-5 h-5" />
                    </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Completed Rentals List (Shown for active or completed tab for demo) */}
        {(activeTab === "completed" || activeTab === "active") && (
          <>
            <h3 className="text-xl font-bold text-white mt-8 mb-4">Past History</h3>
            <div className="grid gap-4">
                {/* Rental Item 1 */}
                <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-4 flex flex-col md:flex-row gap-4 items-center">
                    <div className="w-full md:w-32 h-24 relative rounded-lg overflow-hidden bg-slate-700 shrink-0">
                         <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm6taJQ9hreKVBYf3JqTDa32KqJ0ZEyNWwqlJSvXwBe8wSo1TwvmAMo_WWrqdK2KXQxYSymxSmw-I50jOlnC0j1magCOxAnxlMvqkNr0-4UE6qzopDPpO_-r7IKYtY5nD5QkasslMNslkOWXL0K2Q15wTjOOgSgUqn0Cr_oVFyqadaZC_uEciz2veOb669E9w0FZc27AHcerhYBQG9UvM8w81-rjx168Lr9USQx9QnYGJLQJwkF_mazHZTfzcU6PSObZIvvVfG1FL_"
                            alt="BMW X5"
                            fill
                            className="object-cover"
                         />
                    </div>
                    <div className="flex-1 min-w-0 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                                <h4 className="text-lg font-bold text-white">BMW X5</h4>
                                <p className="text-sm text-[#9da6b9]">Sep 12 - Sep 15, 2024</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-2 md:mt-0 mx-auto md:mx-0">
                                Completed
                            </span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                             <div className="flex text-yellow-500 gap-0.5">
                                  <Star className="w-3.5 h-3.5 fill-current" />
                                  <Star className="w-3.5 h-3.5 fill-current" />
                                  <Star className="w-3.5 h-3.5 fill-current" />
                                  <Star className="w-3.5 h-3.5 fill-current" />
                                  <Star className="w-3.5 h-3.5 fill-current" />
                             </div>
                             <span className="text-xs text-[#9da6b9]">•</span>
                             <p className="text-sm text-white font-medium">$450.00</p>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-4 py-2 text-sm text-[#c9a37e] hover:text-white border border-[#c9a37e]/30 hover:border-white/30 rounded-lg transition-colors">
                            Book Again
                        </button>
                        <button className="flex-1 md:flex-none px-4 py-2 text-sm text-[#9da6b9] hover:text-white border border-white/10 hover:border-white/30 rounded-lg transition-colors">
                            Invoice
                        </button>
                    </div>
                </div>

                 {/* Rental Item 2 */}
                <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-4 flex flex-col md:flex-row gap-4 items-center">
                    <div className="w-full md:w-32 h-24 relative rounded-lg overflow-hidden bg-slate-700 shrink-0">
                         <Image
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_2iU37Efs1-ZnSiskummgHHf_W2XCL4N8lU9wMj57q6JlyRwMG4Qhlr_dIDSb2HdvhT-dBj6ctaKHu3Z-bHOSEYzoq0tgTF0Avt6kOsbD20L2LnhVilvh6JpS9iu7MSlnU12TM-ebbsZ0sOE-jViMr4FtBEOLpIGTaJ85aa3ijRKdaqxjcATAQIxwUQtfJzr7pJtFD6IMTv4mlEpKjtTYZPOghLhusZQACHRiOBgu1o5BwN0TGNqWTzU93w5sU_dms8WbTE7dSrEZ"
                            alt="Audi A4"
                            fill
                            className="object-cover"
                         />
                    </div>
                    <div className="flex-1 min-w-0 text-center md:text-left">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-start">
                            <div>
                                <h4 className="text-lg font-bold text-white">Audi A4</h4>
                                <p className="text-sm text-[#9da6b9]">Aug 02 - Aug 05, 2024</p>
                            </div>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-2 md:mt-0 mx-auto md:mx-0">
                                Completed
                            </span>
                        </div>
                        <div className="flex items-center justify-center md:justify-start gap-4 mt-2">
                             <button className="text-xs text-[#c9a37e] hover:underline">Rate this trip</button>
                             <span className="text-xs text-[#9da6b9]">•</span>
                             <p className="text-sm text-white font-medium">$320.00</p>
                        </div>
                    </div>
                    <div className="flex gap-2 w-full md:w-auto">
                        <button className="flex-1 md:flex-none px-4 py-2 text-sm text-[#c9a37e] hover:text-white border border-[#c9a37e]/30 hover:border-white/30 rounded-lg transition-colors">
                            Book Again
                        </button>
                        <button className="flex-1 md:flex-none px-4 py-2 text-sm text-[#9da6b9] hover:text-white border border-white/10 hover:border-white/30 rounded-lg transition-colors">
                            Invoice
                        </button>
                    </div>
                </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
