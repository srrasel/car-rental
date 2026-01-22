"use client";

import {
  Search,
  Filter,
  MoreVertical,
  CheckCircle2,
  Clock,
  XCircle,
  Eye,
  Bell
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function BookingsPage() {
  const router = useRouter();
  const bookings = [
    {
      id: "#8920",
      vehicle: "Tesla Model 3",
      customer: "John Doe",
      dates: "Oct 12 - Oct 15, 2023",
      status: "Awaiting Return",
      amount: "CHF 450.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB24AWciQw_VL6Hvxu3tsoC_OKAcxfI0ivvrBKgGtBu__Qs563ampAZ-2kPRtHZPO_uHhyGloiLAZm1IZ7OssNRrm6roxJjTQzvA37HY8JAZLHwJ_ciZIHdjglZL1-WoUsSTTGKhsbe3Ih7eVzAWixqUGAqY3xn3jKgm6b8IWazW5oeAiRLWKEH9Iuka7P2IaCxj2N4OlGD2_0sqfI6YhKP8hVG6-jDBptFNxRAkaMGQbpWfNmepSUvar29Vi6HL9Mm_yfc1SJDuvq2"
    },
    {
      id: "#8919",
      vehicle: "Porsche 911 Carrera",
      customer: "Sarah Jenkins",
      dates: "Oct 08 - Oct 10, 2023",
      status: "Completed",
      amount: "CHF 1,200.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoZ6U8_wilwAHA5_qLIu-PWv8a5PcDODjZn6F1WXPW7XeUDuDtB6TGxJ0R7nLzKeaKm0tQqcPvLCZ7zo4MCEUNpWjNwFoXsC5kV55YiaKFcVWq6E6a89Akr6orYmOfbRmFFdkOnf5woPvwBOOVy3Q0__Hvmej4zz-jrZLVFoPSXnPXwnpiwTLIbnrphwfoe5kUiDaggwBh5BmmHOn4WnDIsmR2BW92jGlI85kMbV3RbzRxg9BkAkg2R6xASt2cJy5J0ddXsbzv0vEn"
    },
    {
      id: "#8918",
      vehicle: "Range Rover Sport",
      customer: "Michael Chen",
      dates: "Oct 05 - Oct 07, 2023",
      status: "Cancelled",
      amount: "CHF 0.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuASXT3cZV1uqIPuPHqQX6qzfalqrzEVkdqs4JGrHbnHx2jFjCUZ68orCF-ALyMGPltWZ57djIbqvDPB_3F2MeBFTWTTdlW46oz6HCRmln04Um6UoAD1DIZobO8NXoKoshpTCrlah_FdYyX6SSJy6kl00atwLheyHjTmFcCDH7SfjWAMRLGLkwijmv9Y0xI55RKnazBVBPxx9XtPJljQhXS_G1ZZynOwRgzEsORka1xtg9klW1QD5pbryHxQSACAy0jHqgzuIjZAi4LA"
    },
    {
      id: "#8917",
      vehicle: "Mercedes-Benz S-Class",
      customer: "Emily Rodriguez",
      dates: "Sep 28 - Oct 02, 2023",
      status: "Completed",
      amount: "CHF 2,500.00",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIKKKOhKi8pbVRR_XRmD4MfpQ4ZvEWfDIuffV539Gw8S4A0zFu0OCOxIPSJXAz8j8CAnMWCQihk2WUcudhIZ5mMVfc_qOdwOCHpbPoC-KiNIvxiTFOxpi8g-MHLQiOcPGsiGwS4adLPoKCyaMLdWvwdMcgB6EPhTlPRkKm1_EwzndNVKF_UnZD6ai5y7qPltBkfnkd9u3kQCUTrCStFQ3lfKmTRB9xR2mki9N1tEbFOYAwHlR4FM8__p1e_LSltVWpgS4DoinyKnoj"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Awaiting Return":
        return "text-orange-500 bg-orange-500/10 border-orange-500/20";
      case "Completed":
        return "text-emerald-500 bg-emerald-500/10 border-emerald-500/20";
      case "Cancelled":
        return "text-red-500 bg-red-500/10 border-red-500/20";
      case "Active":
        return "text-blue-500 bg-blue-500/10 border-blue-500/20";
      default:
        return "text-slate-400 bg-slate-400/10 border-slate-400/20";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Awaiting Return":
        return <Clock className="w-3.5 h-3.5 mr-1" />;
      case "Completed":
        return <CheckCircle2 className="w-3.5 h-3.5 mr-1" />;
      case "Cancelled":
        return <XCircle className="w-3.5 h-3.5 mr-1" />;
      case "Active":
        return <Clock className="w-3.5 h-3.5 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden relative">
        {/* Top Navigation */}
        <header className="h-16 flex items-center justify-between px-6 border-b border-white/5 bg-[#0c1315] shrink-0 z-10">
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold text-white tracking-tight font-[family-name:var(--font-epilogue)]">Booking Management</h2>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-5 h-5" />
                    <input 
                        className="pl-10 pr-4 py-2 rounded-lg bg-[#1a1f21] border border-white/10 text-sm text-white placeholder-[#9da6b9] focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] w-64 transition-all" 
                        placeholder="Search bookings..." 
                        type="text"
                    />
                </div>
                <button className="flex items-center justify-center size-10 rounded-lg text-[#9da6b9] hover:bg-white/5 hover:text-white transition-colors relative">
                    <Bell className="w-6 h-6" />
                    <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 rounded-full border-2 border-[#0c1315]"></span>
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-[#1a1f21] hover:bg-white/5 border border-white/10 rounded-lg text-sm font-medium text-white transition-colors">
                    <Filter className="w-4 h-4" />
                    <span>Filter</span>
                </button>
            </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide">
            <div className="max-w-7xl mx-auto flex flex-col gap-8">
                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div className="bg-[#1a1f21] p-4 rounded-xl border border-white/5">
                        <p className="text-[#9da6b9] text-xs font-bold uppercase tracking-wider mb-1">Total Bookings</p>
                        <p className="text-2xl font-bold text-white">1,248</p>
                    </div>
                    <div className="bg-[#1a1f21] p-4 rounded-xl border border-white/5">
                        <p className="text-[#9da6b9] text-xs font-bold uppercase tracking-wider mb-1">Active Now</p>
                        <p className="text-2xl font-bold text-blue-500">24</p>
                    </div>
                    <div className="bg-[#1a1f21] p-4 rounded-xl border border-white/5">
                        <p className="text-[#9da6b9] text-xs font-bold uppercase tracking-wider mb-1">Pending Approval</p>
                        <p className="text-2xl font-bold text-orange-500">5</p>
                    </div>
                    <div className="bg-[#1a1f21] p-4 rounded-xl border border-white/5">
                        <p className="text-[#9da6b9] text-xs font-bold uppercase tracking-wider mb-1">Completed (Oct)</p>
                        <p className="text-2xl font-bold text-emerald-500">156</p>
                    </div>
                </div>

                {/* Table */}
                <div className="bg-[#1a1f21] rounded-xl border border-white/5 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/5 bg-white/[0.02]">
                                    <th className="p-4 text-xs font-bold text-[#9da6b9] uppercase tracking-wider">Booking ID</th>
                                    <th className="p-4 text-xs font-bold text-[#9da6b9] uppercase tracking-wider">Vehicle</th>
                                    <th className="p-4 text-xs font-bold text-[#9da6b9] uppercase tracking-wider">Customer</th>
                                    <th className="p-4 text-xs font-bold text-[#9da6b9] uppercase tracking-wider">Dates</th>
                                    <th className="p-4 text-xs font-bold text-[#9da6b9] uppercase tracking-wider">Status</th>
                                    <th className="p-4 text-xs font-bold text-[#9da6b9] uppercase tracking-wider text-right">Amount</th>
                                    <th className="p-4 text-xs font-bold text-[#9da6b9] uppercase tracking-wider"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {bookings.map((booking) => (
                                    <tr 
                                    key={booking.id} 
                                    onClick={() => router.push(`/admin/bookings/${booking.id.replace('#', '')}`)}
                                    className="group hover:bg-white/[0.02] transition-colors cursor-pointer"
                                >
                                    <td className="p-4">
                                        <span className="font-mono text-sm font-medium text-white">{booking.id}</span>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-3">
                                            <div className="h-10 w-16 rounded bg-white/5 relative overflow-hidden shrink-0 border border-white/10">
                                                <Image src={booking.image} alt={booking.vehicle} fill className="object-cover" />
                                            </div>
                                            <span className="text-sm font-medium text-white">{booking.vehicle}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex items-center gap-2">
                                            <div className="size-8 rounded-full bg-white/10 flex items-center justify-center text-xs font-bold text-white">
                                                {booking.customer.charAt(0)}
                                            </div>
                                            <span className="text-sm text-[#9da6b9]">{booking.customer}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm text-white">{booking.dates}</span>
                                        </div>
                                    </td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${getStatusColor(booking.status)}`}>
                                            {getStatusIcon(booking.status)}
                                            {booking.status}
                                        </span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <span className="text-sm font-bold text-white">{booking.amount}</span>
                                    </td>
                                    <td className="p-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button 
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    router.push(`/admin/bookings/${booking.id.replace('#', '')}`);
                                                }}
                                                className="p-2 text-[#9da6b9] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                <Eye className="w-4 h-4" />
                                            </button>
                                            <button 
                                                onClick={(e) => e.stopPropagation()}
                                                className="p-2 text-[#9da6b9] hover:text-white hover:bg-white/10 rounded-lg transition-colors"
                                            >
                                                <MoreVertical className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="p-4 border-t border-white/5 flex justify-center">
                        <button className="text-sm text-[#9da6b9] hover:text-white transition-colors">View All Bookings</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
