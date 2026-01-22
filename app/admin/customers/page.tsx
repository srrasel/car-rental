"use client";

import {
  Users,
  Search,
  Plus,
  TrendingUp,
  Filter,
  Download,
  MoreVertical,
  Mail,
  Phone,
  BadgeCheck,
  Clock,
  Menu,
  Key,
  UserPlus,
  Bell
} from "lucide-react";
import Image from "next/image";

export default function CustomersPage() {
  return (
    <div className="flex h-full flex-col overflow-hidden relative">
        {/* Top Navigation */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#0c1315] shrink-0 z-10">
            <div className="flex items-center gap-4">
                <button className="md:hidden text-white">
                    <Menu className="w-6 h-6" />
                </button>
                <h2 className="text-xl font-bold text-white tracking-tight font-[family-name:var(--font-epilogue)]">Customer Management</h2>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-5 h-5" />
                    <input 
                        className="pl-10 pr-4 py-2 rounded-lg bg-[#1a1f21] border border-white/10 text-sm text-white placeholder-[#9da6b9] focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] w-64 transition-all" 
                        placeholder="Search by name, email..." 
                        type="text"
                    />
                </div>
                <button className="flex items-center justify-center size-10 rounded-lg text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors relative">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-[#0c1315]"></span>
                </button>
                <button className="bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] text-sm font-bold py-2 px-4 rounded-lg flex items-center gap-2 transition-colors shadow-[0_0_15px_rgba(201,163,126,0.3)]">
                    <Plus className="w-5 h-5" />
                    <span className="hidden sm:inline">Add Customer</span>
                </button>
            </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* KPI Cards */}
                <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="bg-[#1a1f21] rounded-xl p-5 border border-white/5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Users className="w-7 h-7 text-blue-500" />
                            </div>
                            <span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                                <TrendingUp className="w-3.5 h-3.5 mr-1" />
                                +5.2%
                            </span>
                        </div>
                        <p className="text-[#9da6b9] text-sm font-medium">Total Customers</p>
                        <h3 className="text-2xl font-bold text-white mt-1">1,248</h3>
                    </div>
                    <div className="bg-[#1a1f21] rounded-xl p-5 border border-white/5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-purple-500/10 rounded-lg">
                                <Key className="w-7 h-7 text-purple-500" />
                            </div>
                            <span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                                <TrendingUp className="w-3.5 h-3.5 mr-1" />
                                +2.4%
                            </span>
                        </div>
                        <p className="text-[#9da6b9] text-sm font-medium">Active Rentals</p>
                        <h3 className="text-2xl font-bold text-white mt-1">45</h3>
                    </div>
                    <div className="bg-[#1a1f21] rounded-xl p-5 border border-white/5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-2 bg-orange-500/10 rounded-lg">
                                <UserPlus className="w-7 h-7 text-orange-500" />
                            </div>
                            <span className="flex items-center text-xs font-medium text-emerald-500 bg-emerald-500/10 px-2 py-1 rounded-full">
                                <TrendingUp className="w-3.5 h-3.5 mr-1" />
                                +12%
                            </span>
                        </div>
                        <p className="text-[#9da6b9] text-sm font-medium">New This Month</p>
                        <h3 className="text-2xl font-bold text-white mt-1">18</h3>
                    </div>
                </section>

                {/* Table Section */}
                <section className="flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">All Customers</h3>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-3 py-2 bg-[#1a1f21] border border-white/10 rounded-lg text-sm font-medium text-[#9da6b9] hover:text-white hover:bg-white/5 transition-colors">
                                <Filter className="w-4.5 h-4.5" />
                                Filter
                            </button>
                            <button className="flex items-center gap-2 px-3 py-2 bg-[#1a1f21] border border-white/10 rounded-lg text-sm font-medium text-[#9da6b9] hover:text-white hover:bg-white/5 transition-colors">
                                <Download className="w-4.5 h-4.5" />
                                Export
                            </button>
                        </div>
                    </div>
                    
                    <div className="bg-[#1a1f21] rounded-xl border border-white/5 overflow-hidden shadow-sm">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead className="bg-[#0c1315] border-b border-white/5">
                                    <tr>
                                        <th className="px-6 py-4 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider w-1/4">Customer Name</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider">Contact Info</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider">License Status</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider text-center">Rentals</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider">Status</th>
                                        <th className="px-6 py-4 text-xs font-semibold text-[#9da6b9] uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-white/5">
                                    {/* Row 1 */}
                                    <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-700 relative">
                                                    <Image 
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBa7Dsvp5Rp3AgWswEUY-w4wvPGVcM4WjkJU8OR2YzSgDDDhLNy9MifGaiIzYi1w0KvKV0TnhlqSOlOGTrF4nHjprNLD7btrDs_iuE8-UTC-qNwNS3zQ7wyHeMu4PwAhGhh9hnZNeOL2l65m3fw88IdimvuUtEfDx03DDTzSQKOs63DXzMR1hhpfg4_JqqHpTzaawyp0WsFBWHmCXcgomckME3YhXm_vJRUtPxTzZEdrr8TPHWto0SXUruSYvBljKV7fJB8d7JqS8J"
                                                        alt="James Anderson"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">James Anderson</p>
                                                    <p className="text-xs text-[#9da6b9]">ID: #CL-8921</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-sm text-white">
                                                    <Mail className="w-4 h-4 text-[#9da6b9]" />
                                                    james.a@example.com
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-[#9da6b9]">
                                                    <Phone className="w-4 h-4 text-[#9da6b9]" />
                                                    +1 (555) 012-3456
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                                                <BadgeCheck className="w-3.5 h-3.5 mr-1" />
                                                Verified
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm font-medium text-white">12</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 ring-1 ring-inset ring-emerald-600/20">
                                                <span className="size-1.5 rounded-full bg-emerald-500"></span>
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-[#9da6b9] hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                    
                                    {/* Row 2 */}
                                    <tr className="hover:bg-white/5 transition-colors group cursor-pointer">
                                        <td className="px-6 py-4">
                                            <div className="flex items-center gap-3">
                                                <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-700 relative">
                                                    <Image 
                                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLHMFjt_wSQVeKqL80OfrlpADPQKD1OkSHV2GC6DoI7UX9PCB0zHAmnQO_7ujSvDCsLHODEjirYgZF0TsFPToUnkGjU9TdqcXgCNtI0mStJrVhJOM8PMfuUghXjRRPsBVf4ZQF_9pyYc5aWDTGg3N0LbrDJnIi-k6DmDzOIS7ell9U_Ax0pAmhranH3bcaglYgFjJyU3QxBOoaS5fubspdM0NGpjNbf5p7p_h32kj-OSFNnvHwgQACNw_4exC3ymwXGQtruKcjoADG"
                                                        alt="Sarah Smith"
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-semibold text-white">Sarah Smith</p>
                                                    <p className="text-xs text-[#9da6b9]">ID: #CL-8922</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="flex flex-col gap-1">
                                                <div className="flex items-center gap-2 text-sm text-white">
                                                    <Mail className="w-4 h-4 text-[#9da6b9]" />
                                                    sarah.s@test.com
                                                </div>
                                                <div className="flex items-center gap-2 text-sm text-[#9da6b9]">
                                                    <Phone className="w-4 h-4 text-[#9da6b9]" />
                                                    +1 (555) 987-6543
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
                                                <Clock className="w-3.5 h-3.5 mr-1" />
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm font-medium text-white">0</span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-500/10 text-yellow-400 ring-1 ring-inset ring-yellow-600/20">
                                                <span className="size-1.5 rounded-full bg-yellow-500"></span>
                                                Pending
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <button className="text-[#9da6b9] hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    </div>
  );
}
