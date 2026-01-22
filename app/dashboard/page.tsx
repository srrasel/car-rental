"use client";

import {
  Key,
  Bell,
  Plus,
  ArrowUp,
  Award,
  Crown,
  Puzzle,
  Headphones,
  Star,
  CheckCircle,
  Edit2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function CustomerDashboard() {
  const { data: session } = useSession();

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
          <button className="flex items-center justify-center gap-2 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] px-5 py-2.5 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(201,163,126,0.3)]">
            <Plus className="w-5 h-5" />
            <span>Book a New Car</span>
          </button>
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
          <p className="text-3xl font-bold text-white mt-2">14</p>
          <p className="text-xs text-emerald-500 font-medium flex items-center mt-1">
            <ArrowUp className="w-3.5 h-3.5 mr-1" />2 this month
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
          <p className="text-3xl font-bold text-white mt-2">2,450</p>
          <p className="text-xs text-[#9da6b9] mt-1">50 points to Platinum</p>
        </div>

        <div className="bg-[#1a1f21] p-6 rounded-xl border border-white/5 shadow-sm flex flex-col gap-1">
          <div className="flex justify-between items-start">
            <p className="text-[#9da6b9] text-sm font-medium">Member Status</p>
            <div className="bg-yellow-500/10 p-2 rounded-lg text-yellow-500">
              <Crown className="w-5 h-5" />
            </div>
          </div>
          <p className="text-3xl font-bold text-white mt-2">Gold Tier</p>
          <div className="w-full bg-white/5 h-1.5 rounded-full mt-3 overflow-hidden">
            <div
              className="bg-yellow-500 h-full rounded-full"
              style={{ width: "85%" }}
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
                className="text-sm text-[#c9a37e] font-medium hover:underline hover:text-[#b89574] transition-colors"
                href="#"
              >
                View details
              </Link>
            </div>
            <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden p-1">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-5/12 relative min-h-[200px] md:min-h-full">
                  <div className="absolute inset-0 rounded-lg overflow-hidden m-1 md:mr-0">
                    <Image
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuBxmIOX8I2HgPGMV6uj5NrFQnLBCd76DNXM2NhhssGbxtsrmd8mIZdpxW-n-VSs6MDFFzHTEJ0O-pNaLN4Dydf-sjyBP5kmT9X4KLMrZIavjQzO6sTD71sglAEzRA13NAiti9k9nF5a7MOH3XQSeu6hrXHpHA64vU_dED7DAvdGYvPEg1O8rDPKROAYpvtCf5rLnQ6DCFqUtEC3_K6wCWc2VuW02n3kmJk3jNXn85EX_1zZJRGrQm6zhSrl2vY5IS-y5Ph0f0xQ-9zi"
                      alt="Tesla Model 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="absolute top-3 left-3 bg-emerald-500 text-[#0c1315] text-xs font-bold px-2 py-1 rounded shadow-sm z-10">
                    ACTIVE
                  </div>
                </div>
                <div className="p-6 md:w-7/12 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          Tesla Model 3 Long Range
                        </h3>
                        <p className="text-[#9da6b9] text-sm mt-1">
                          License: 8XYZ123
                        </p>
                      </div>
                      <div className="bg-[#0c1315] border border-white/10 p-2 rounded text-center min-w-[70px]">
                        <p className="text-[10px] uppercase text-[#9da6b9] font-bold">
                          Return
                        </p>
                        <p className="text-lg font-bold text-white">
                          02{" "}
                          <span className="text-xs font-normal text-[#9da6b9]">
                            days
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-6 mt-6">
                      <div className="flex flex-col gap-1">
                        <p className="text-xs text-[#9da6b9] font-medium uppercase">
                          Pick-up
                        </p>
                        <p className="text-sm font-semibold text-white">
                          Oct 24, 10:00 AM
                        </p>
                        <p className="text-xs text-[#9da6b9]">LAX Airport</p>
                      </div>
                      <div className="w-px bg-white/10 h-full"></div>
                      <div className="flex flex-col gap-1">
                        <p className="text-xs text-[#9da6b9] font-medium uppercase">
                          Return
                        </p>
                        <p className="text-sm font-semibold text-white">
                          Oct 28, 10:00 AM
                        </p>
                        <p className="text-xs text-[#9da6b9]">LAX Airport</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 mt-6 pt-6 border-t border-white/5">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#0c1315] hover:bg-white/5 border border-white/10 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      <Puzzle className="w-4.5 h-4.5" />
                      Extend
                    </button>
                    <button className="flex-1 flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
                      <Headphones className="w-4.5 h-4.5" />
                      Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Past Rentals Table */}
          <section>
            <h2 className="text-xl font-bold text-white mb-4">Past Rentals</h2>
            <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="bg-[#0c1315] text-[#9da6b9] border-b border-white/5">
                    <tr>
                      <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">
                        Vehicle
                      </th>
                      <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">
                        Dates
                      </th>
                      <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">
                        Total
                      </th>
                      <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-4 font-medium uppercase text-xs tracking-wider text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded bg-slate-700 relative overflow-hidden">
                            <Image
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm6taJQ9hreKVBYf3JqTDa32KqJ0ZEyNWwqlJSvXwBe8wSo1TwvmAMo_WWrqdK2KXQxYSymxSmw-I50jOlnC0j1magCOxAnxlMvqkNr0-4UE6qzopDPpO_-r7IKYtY5nD5QkasslMNslkOWXL0K2Q15wTjOOgSgUqn0Cr_oVFyqadaZC_uEciz2veOb669E9w0FZc27AHcerhYBQG9UvM8w81-rjx168Lr9USQx9QnYGJLQJwkF_mazHZTfzcU6PSObZIvvVfG1FL_"
                              alt="BMW X5"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-white">BMW X5</p>
                            <div className="flex text-yellow-500 gap-0.5">
                              <Star className="w-3 h-3 fill-current" />
                              <Star className="w-3 h-3 fill-current" />
                              <Star className="w-3 h-3 fill-current" />
                              <Star className="w-3 h-3 fill-current" />
                              <Star className="w-3 h-3 fill-current" />
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#9da6b9]">
                        Sep 12 - Sep 15
                      </td>
                      <td className="px-6 py-4 font-medium text-white">
                        $450.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#c9a37e] hover:text-white font-medium text-xs underline">
                          Invoice
                        </button>
                      </td>
                    </tr>
                    <tr className="hover:bg-white/5 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded bg-slate-700 relative overflow-hidden">
                            <Image
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_2iU37Efs1-ZnSiskummgHHf_W2XCL4N8lU9wMj57q6JlyRwMG4Qhlr_dIDSb2HdvhT-dBj6ctaKHu3Z-bHOSEYzoq0tgTF0Avt6kOsbD20L2LnhVilvh6JpS9iu7MSlnU12TM-ebbsZ0sOE-jViMr4FtBEOLpIGTaJ85aa3ijRKdaqxjcATAQIxwUQtfJzr7pJtFD6IMTv4mlEpKjtTYZPOghLhusZQACHRiOBgu1o5BwN0TGNqWTzU93w5sU_dms8WbTE7dSrEZ"
                              alt="Audi A4"
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-white">Audi A4</p>
                            <p className="text-xs text-[#9da6b9]">
                              Rate this trip
                            </p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-[#9da6b9]">
                        Aug 02 - Aug 05
                      </td>
                      <td className="px-6 py-4 font-medium text-white">
                        $320.00
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          Completed
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <button className="text-[#c9a37e] hover:text-white font-medium text-xs underline">
                          Invoice
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="px-6 py-3 border-t border-white/5 bg-[#0c1315]">
                <button className="w-full text-center text-sm text-[#9da6b9] hover:text-[#c9a37e] transition-colors">
                  View All History
                </button>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column (Sidebar Widgets) */}
        <div className="xl:col-span-4 flex flex-col gap-8">
          {/* Personal Information */}
          <section className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold text-white">
                Personal Information
              </h2>
              <button className="text-[#c9a37e] hover:text-[#b89574] transition-colors p-1 hover:bg-white/5 rounded">
                <Edit2 className="w-4 h-4" />
              </button>
            </div>
            <form className="flex flex-col gap-4">
              <div>
                <label className="block text-xs font-medium text-[#9da6b9] mb-1">
                  Full Name
                </label>
                <input
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                  readOnly
                  type="text"
                  value="Alex Morgan"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9da6b9] mb-1">
                  Email Address
                </label>
                <input
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                  readOnly
                  type="email"
                  value="alex.m@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9da6b9] mb-1">
                  Phone Number
                </label>
                <input
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                  readOnly
                  type="tel"
                  value="+1 (555) 123-4567"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-[#9da6b9] mb-1">
                  Driver's License
                </label>
                <div className="flex items-center justify-between w-full bg-[#0c1315] border border-white/10 rounded-lg px-3 py-2">
                  <span className="text-sm text-white">Verified</span>
                  <CheckCircle className="w-4.5 h-4.5 text-emerald-500" />
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
