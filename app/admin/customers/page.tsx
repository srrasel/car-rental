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
  BadgeCheck,
  UserPlus,
  Bell,
  Loader2,
  DollarSign
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Customer {
  id: string;
  name: string;
  email: string;
  role: string;
  image: string | null;
  totalBookings: number;
  lastActive: string | null;
  totalSpent: number;
}

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const router = useRouter();

  useEffect(() => {
    fetchCustomers();
  }, []);

  // Reset page on search
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);

  const fetchCustomers = async () => {
    try {
      const response = await fetch("/api/admin/customers");
      if (response.ok) {
        const data = await response.json();
        setCustomers(data);
      }
    } catch (error) {
      console.error("Error fetching customers:", error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCustomers = customers.filter(customer => 
    customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    customer.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalCustomers = customers.length;
  const activeBookers = customers.filter(c => c.totalBookings > 0).length;
  const totalRevenue = customers.reduce((acc, curr) => acc + (curr.totalSpent || 0), 0);

  // Calculate average spent per customer (for those who have booked)
  const avgSpent = activeBookers > 0 ? totalRevenue / activeBookers : 0;

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315]">
      {/* Top Navigation */}
      <header className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0c1315] px-8 shrink-0">
        <div className="flex items-center gap-4">
          <h2 className="text-xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Customer Management</h2>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative hidden w-full max-w-md md:flex">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <Search className="w-5 h-5 text-[#9da6b9]" />
            </div>
            <input 
              className="block w-64 rounded-lg border-0 bg-[#1a1f21] py-2 pl-10 pr-4 text-sm text-white placeholder-[#9da6b9] focus:ring-2 focus:ring-[#c9a37e]" 
              placeholder="Search customers..." 
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="relative rounded-full p-1.5 text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors">
            <Bell className="w-6 h-6" />
          </button>
          <button 
            onClick={() => router.push("/admin/customers/new")}
            className="flex items-center gap-2 rounded-lg bg-[#c9a37e] px-4 py-2 text-sm font-bold text-[#0c1315] shadow-[0_0_15px_rgba(201,163,126,0.3)] hover:bg-[#b89574] transition-colors"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Add Customer</span>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto p-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-8">
            {/* KPI Cards */}
            <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-[#9da6b9]">Total Customers</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                            <Users className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{totalCustomers}</span>
                        <span className="text-xs font-medium text-emerald-500 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +5.2%
                        </span>
                    </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-[#9da6b9]">Active Bookers</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500/10 text-orange-500">
                            <UserPlus className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">{activeBookers}</span>
                        <span className="text-xs font-medium text-emerald-500 flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            +12%
                        </span>
                    </div>
                </div>

                <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-5 shadow-sm">
                    <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm font-medium text-[#9da6b9]">Avg. Spent</span>
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-500">
                            <DollarSign className="w-5 h-5" />
                        </div>
                    </div>
                    <div className="flex items-baseline gap-2">
                        <span className="text-2xl font-bold text-white">${avgSpent.toFixed(0)}</span>
                        <span className="text-xs font-medium text-[#9da6b9]">per customer</span>
                    </div>
                </div>
            </div>

            {/* Table Section */}
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg bg-[#1a1f21] p-1 border border-white/5">
                        <button className="rounded-md bg-[#c9a37e] px-4 py-1.5 text-xs font-medium text-[#0c1315] shadow-sm">All Customers</button>
                        <button className="rounded-md px-4 py-1.5 text-xs font-medium text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors">VIP</button>
                        <button className="rounded-md px-4 py-1.5 text-xs font-medium text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors">New</button>
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
                
                <div className="rounded-xl border border-white/5 bg-[#1a1f21] shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-sm text-[#9da6b9]">
                            <thead className="bg-[#0c1315] text-xs uppercase text-[#9da6b9]">
                                <tr>
                                    <th className="px-6 py-4 font-semibold w-1/4">Customer Name</th>
                                    <th className="px-6 py-4 font-semibold">Contact Info</th>
                                    <th className="px-6 py-4 font-semibold">Role</th>
                                    <th className="px-6 py-4 font-semibold text-center">Bookings</th>
                                    <th className="px-6 py-4 font-semibold text-right">Total Spent</th>
                                    <th className="px-6 py-4 font-semibold">Last Active</th>
                                    <th className="px-6 py-4 font-semibold text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {loading ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center">
                                            <div className="flex justify-center items-center gap-2 text-[#9da6b9]">
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Loading customers...
                                            </div>
                                        </td>
                                    </tr>
                                ) : filteredCustomers.length === 0 ? (
                                    <tr>
                                        <td colSpan={7} className="px-6 py-12 text-center">
                                            <div className="flex flex-col items-center justify-center gap-2">
                                                <div className="rounded-full bg-white/5 p-3">
                                                    <Users className="w-6 h-6 text-[#9da6b9]" />
                                                </div>
                                                <p className="text-white font-medium">No customers found</p>
                                            </div>
                                        </td>
                                    </tr>
                                ) : (
                                    filteredCustomers.map((customer) => (
                                        <tr 
                                            key={customer.id} 
                                            onClick={() => router.push(`/admin/customers/${customer.id}`)}
                                            className="hover:bg-white/5 transition-colors group cursor-pointer"
                                        >
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full bg-slate-800">
                                                        <Image 
                                                            src={customer.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=random`}
                                                            alt={customer.name}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-semibold text-white group-hover:text-[#c9a37e] transition-colors">{customer.name}</p>
                                                        <p className="text-xs text-[#9da6b9]">ID: #{customer.id.slice(-6).toUpperCase()}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <div className="flex items-center gap-2 text-white">
                                                    <Mail className="w-3.5 h-3.5 text-[#9da6b9]" />
                                                    {customer.email}
                                                </div>
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                                                    customer.role === 'admin' 
                                                        ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' 
                                                        : 'bg-blue-500/10 text-blue-400 border-blue-500/20'
                                                }`}>
                                                    <BadgeCheck className="w-3 h-3 mr-1" />
                                                    {customer.role}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <span className="font-medium text-white">{customer.totalBookings}</span>
                                            </td>
                                            <td className="px-6 py-4 text-right font-medium text-white">
                                                ${(customer.totalSpent || 0).toLocaleString()}
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-[#9da6b9]">
                                                    {customer.lastActive ? new Date(customer.lastActive).toLocaleDateString() : 'Never'}
                                                </span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="p-2 text-[#9da6b9] hover:bg-white/10 hover:text-white rounded-lg transition-colors">
                                                    <MoreVertical className="w-4 h-4" />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="border-t border-white/5 bg-[#0c1315] px-6 py-4 flex items-center justify-between">
                        <span className="text-xs text-[#9da6b9]">
                            Showing {(currentPage - 1) * itemsPerPage + 1} to {Math.min(currentPage * itemsPerPage, filteredCustomers.length)} of {filteredCustomers.length} customers
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
    </div>
  );
}
