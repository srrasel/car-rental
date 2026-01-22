"use client";

import {
  Car,
  Search,
  Bell,
  Key,
  Clock,
  PieChart,
  AlertTriangle,
  Wrench,
  Check,
  X,
  MoreVertical,
  Plus,
  Filter,
  ChevronDown,
  TrendingUp,
  TrendingDown,
  CarFront,
  MapPin,
  Warehouse,
  FileText
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function FleetPage() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315]">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0c1315]/95 backdrop-blur-sm px-8 z-10">
            <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                    <Car className="text-[#c9a37e] w-6 h-6" />
                    <h2 className="text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Fleet Operations</h2>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-5 h-5" />
                    <input 
                        className="bg-[#1a1f21] border border-white/5 text-sm text-white rounded-lg pl-10 pr-4 py-2 w-64 focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none placeholder:text-[#9da6b9]" 
                        placeholder="Global Search..." 
                        type="text"
                    />
                </div>
                <button className="relative p-2 text-[#9da6b9] hover:text-white transition-colors">
                    <Bell className="w-5 h-5" />
                    <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border border-[#0c1315]"></span>
                </button>
                <button className="size-8 rounded-full overflow-hidden border border-white/5 relative">
                     <Image 
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIKKKOhKi8pbVRR_XRmD4MfpQ4ZvEWfDIuffV539Gw8S4A0zFu0OCOxIPSJXAz8j8CAnMWCQihk2WUcudhIZ5mMVfc_qOdwOCHpbPoC-KiNIvxiTFOxpi8g-MHLQiOcPGsiGwS4adLPoKCyaMLdWvwdMcgB6EPhTlPRkKm1_EwzndNVKF_UnZD6ai5y7qPltBkfnkd9u3kQCUTrCStFQ3lfKmTRB9xR2mki9N1tEbFOYAwHlR4FM8__p1e_LSltVWpgS4DoinyKnoj"
                        alt="Profile"
                        fill
                        className="object-cover"
                     />
                </button>
            </div>
        </header>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
            <div className="max-w-7xl mx-auto space-y-8 pb-10">
                {/* Breadcrumbs & Heading */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-sm text-[#9da6b9]">
                        <Link className="hover:text-[#c9a37e] transition-colors" href="/admin">Home</Link>
                        <span className="text-slate-600">/</span>
                        <span className="text-white font-medium">Fleet Operations</span>
                    </div>
                    <div className="flex flex-wrap justify-between items-end gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Fleet Management</h1>
                            <p className="text-[#9da6b9] text-sm max-w-2xl">Operational oversight and vehicle lifecycle management. Track fleet status, maintenance schedules, and utilization in real-time.</p>
                        </div>
                        <button className="bg-[#c9a37e] hover:bg-[#c9a37e]/90 text-[#0c1315] px-5 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-lg shadow-[#c9a37e]/20 transition-all uppercase tracking-wider">
                            <Plus className="w-5 h-5" />
                            Add Vehicle
                        </button>
                    </div>
                </div>

                {/* KPI Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* Stat Card 1 */}
                    <div className="bg-[#1a1f21] border border-white/5 p-5 rounded-xl flex flex-col gap-1">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[#9da6b9] text-sm font-medium">Total Vehicles</span>
                            <span className="p-1.5 bg-blue-500/10 rounded-md text-[#c9a37e]">
                                <CarFront className="w-5 h-5" />
                            </span>
                        </div>
                        <span className="text-2xl font-bold text-white">142</span>
                        <span className="text-emerald-500 text-xs font-medium flex items-center gap-1 mt-1">
                            <TrendingUp className="w-3 h-3" /> +2% from last month
                        </span>
                    </div>
                    {/* Stat Card 2 */}
                    <div className="bg-[#1a1f21] border border-white/5 p-5 rounded-xl flex flex-col gap-1">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[#9da6b9] text-sm font-medium">Active Rentals</span>
                            <span className="p-1.5 bg-indigo-500/10 rounded-md text-indigo-400">
                                <Key className="w-5 h-5" />
                            </span>
                        </div>
                        <span className="text-2xl font-bold text-white">89</span>
                        <span className="text-emerald-500 text-xs font-medium flex items-center gap-1 mt-1">
                            <TrendingUp className="w-3 h-3" /> +5% from last week
                        </span>
                    </div>
                    {/* Stat Card 3 */}
                    <div className="bg-[#1a1f21] border border-white/5 p-5 rounded-xl flex flex-col gap-1">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[#9da6b9] text-sm font-medium">Utilization Rate</span>
                            <span className="p-1.5 bg-purple-500/10 rounded-md text-purple-400">
                                <PieChart className="w-5 h-5" />
                            </span>
                        </div>
                        <span className="text-2xl font-bold text-white">62%</span>
                        <span className="text-rose-500 text-xs font-medium flex items-center gap-1 mt-1">
                            <TrendingDown className="w-3 h-3" /> -1% from last month
                        </span>
                    </div>
                    {/* Stat Card 4 */}
                    <div className="bg-[#1a1f21] border border-white/5 p-5 rounded-xl flex flex-col gap-1">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-[#9da6b9] text-sm font-medium">Urgent Maintenance</span>
                            <span className="p-1.5 bg-rose-500/10 rounded-md text-rose-500">
                                <AlertTriangle className="w-5 h-5" />
                            </span>
                        </div>
                        <span className="text-2xl font-bold text-white">3</span>
                        <span className="text-rose-500 text-xs font-medium flex items-center gap-1 mt-1">
                            +1 new alert today
                        </span>
                    </div>
                </div>

                {/* Filters & Toolbar */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 bg-[#1a1f21] p-4 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 w-full lg:w-auto">
                        <div className="relative w-full lg:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-5 h-5" />
                            <input className="w-full bg-[#0c1315] border border-white/5 text-sm text-white rounded-lg pl-10 pr-4 py-2.5 focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none placeholder:text-[#9da6b9]" placeholder="Search by VIN, Plate, or Model..." type="text"/>
                        </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto">
                        <div className="relative group">
                            <select className="appearance-none bg-[#0c1315] border border-white/5 text-sm text-slate-300 rounded-lg pl-4 pr-10 py-2.5 focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none cursor-pointer hover:bg-[#0c1315]/80 transition-colors">
                                <option>All Statuses</option>
                                <option>Available</option>
                                <option>Rented</option>
                                <option>Maintenance</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9da6b9] pointer-events-none w-5 h-5" />
                        </div>
                        <div className="relative group">
                            <select className="appearance-none bg-[#0c1315] border border-white/5 text-sm text-slate-300 rounded-lg pl-4 pr-10 py-2.5 focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none cursor-pointer hover:bg-[#0c1315]/80 transition-colors">
                                <option>All Locations</option>
                                <option>Downtown HQ</option>
                                <option>Airport Zone</option>
                                <option>West Side Hub</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-[#9da6b9] pointer-events-none w-5 h-5" />
                        </div>
                        <button className="flex items-center gap-2 px-4 py-2.5 bg-[#0c1315] border border-white/5 rounded-lg text-slate-300 hover:text-white hover:border-slate-600 transition-colors text-sm font-medium">
                            <Filter className="w-5 h-5" />
                            More Filters
                        </button>
                    </div>
                </div>

                {/* Data Table */}
                <div className="bg-[#1a1f21] border border-white/5 rounded-xl overflow-hidden flex flex-col shadow-xl shadow-black/20">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#0c1315]/50 border-b border-white/5 text-xs uppercase tracking-wider text-[#9da6b9] font-medium">
                                    <th className="px-6 py-4">Vehicle</th>
                                    <th className="px-6 py-4">License Plate</th>
                                    <th className="px-6 py-4">Status</th>
                                    <th className="px-6 py-4">Current Location</th>
                                    <th className="px-6 py-4">Next Maintenance</th>
                                    <th className="px-6 py-4">Mileage</th>
                                    <th className="px-6 py-4 text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {/* Row 1 */}
                                <tr className="group hover:bg-[#0c1315]/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-lg bg-[#0c1315] border border-white/5 p-1 shrink-0 overflow-hidden relative">
                                                <Image 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbtyWuOq-GWBJQja-Z7btSQo-iLZYH8ypxY5CFlfabodustRToFOOQn9Dvm2JmxbOQEPPVnpbUbu93nFpDMrwlNLTgdF6Zyvcr2MliG14wmTQjPR4k_iDyV6ssjNomOq219htoP-6wtqI3zffrHNxXmdyziHFCjbXE7MmF_xXSUZqBfT5CtmO_wTu8weUYMlAPQrFQOwEeR6NvtX4MXD0jq36a8Iby7bSwbGWByagu6z3zUAFtTLW3n2EgIUgfYR4_UqE-PUluDM17"
                                                    alt="White Tesla Model 3"
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm">Tesla Model 3</div>
                                                <div className="text-[#9da6b9] text-xs">VIN: ...8392</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">K92-LMP</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#c9a37e]/20 text-[#c9a37e] border border-[#c9a37e]/20">
                                            <span className="size-1.5 rounded-full bg-[#c9a37e]"></span>
                                            Rented
                                        </span>
                                        <div className="text-[10px] text-[#9da6b9] mt-1 pl-1">Returns in 2 days</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="text-[#9da6b9] w-4 h-4" />
                                            Downtown Zone A
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">Oct 24, 2023</td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">12,450 km</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="View Details">
                                                <Car className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="Edit">
                                                <FileText className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="More">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 2 */}
                                <tr className="group hover:bg-[#0c1315]/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-lg bg-[#0c1315] border border-white/5 p-1 shrink-0 overflow-hidden relative">
                                                <Image 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Of2DClTdXuHOD6RiPKGrD3XPzQhlgDzFlO7GVP46E2zXZ5ZCe3F4wqEnGU28QoTmiXTw1TiQeGPOl4NEWrF6mM8HT0u6RPTitIoaJNJAcW5O1xKXgODvfsBtypYeT95jS4Zy_iG-8BKi88nHnjSRwx4Q2pVJphoZ6dEXkRQPvXNlBsmS2TJ60-8fOJJ6of6lHa9X3CgE8l-PeWZok7h7Y9H2zRcWXKrv90YIm5zzxYzHmC2SOeS4h5T73b2g_48vHknnsSZa24xJ"
                                                    alt="Black Mercedes C-Class"
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm">Mercedes C-Class</div>
                                                <div className="text-[#9da6b9] text-xs">VIN: ...9201</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">M21-XTR</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            <span className="size-1.5 rounded-full bg-emerald-400"></span>
                                            Available
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="text-[#9da6b9] w-4 h-4" />
                                            Airport Lot C
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">Nov 12, 2023</td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">45,200 km</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="View Details">
                                                <Car className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="Edit">
                                                <FileText className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="More">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 3 */}
                                <tr className="group hover:bg-[#0c1315]/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-lg bg-[#0c1315] border border-white/5 p-1 shrink-0 overflow-hidden relative">
                                                <Image 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3XHf4mDVX_HKDdw9NZWrNUe9qJg7fSphE7WBTd-pqr3dq9-BQSZHBX_BWFrSxgwSncGJK59FjJTlCBwZcYWhrOEWiOAHIMzEanC5lac2u3wUpHHYQwIxT-gDTZIPUijK2QmG7mMeaqZMpp7mNZO-DQGU6ZskAnwD1l2xjHd61sz9uc2_fIteeFyp0QETDsBVyBgLQ1qpBmSmuS1Z253v5KAwv_clerGUt-Ag2Nw1b7YoEFFk61z1XEsvDBVd7p_AE8H6BqnT0j4Ap"
                                                    alt="Blue Chevrolet Camaro"
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm">Chevrolet Camaro</div>
                                                <div className="text-[#9da6b9] text-xs">VIN: ...1102</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">H55-VRO</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-rose-500/10 text-rose-400 border border-rose-500/20">
                                            <span className="size-1.5 rounded-full bg-rose-400 animate-pulse"></span>
                                            Maintenance
                                        </span>
                                        <div className="text-[10px] text-rose-400/80 mt-1 pl-1">Brake Service</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">
                                        <div className="flex items-center gap-1.5">
                                            <Warehouse className="text-[#9da6b9] w-4 h-4" />
                                            Service Center
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-rose-400 font-medium">Overdue (2 Days)</td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">68,900 km</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="View Details">
                                                <Car className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="Edit">
                                                <FileText className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="More">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 4 */}
                                <tr className="group hover:bg-[#0c1315]/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-lg bg-[#0c1315] border border-white/5 p-1 shrink-0 overflow-hidden relative">
                                                <Image 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG6Lav2c3e28v8PLQl5QQi_NM0ek67xX122pn3u3miIot_ntaaCEONFL62M3F3xxd4NR4chRtcyKaY0SF0tcTgmWS10GzEu9P1-yie0ZAVv3S-xs3Rzp2m1Vb2VLcHNDfDXL72vwPM8pTW6oVdk2efM9M46Ry-4Shwz5EuAVQlV_MxylkYMnrWdtatu_OX4mb_NnCIza16o-j2UPDeNyGGkDKQH5w2IpuY6rufoA4HqBUVN22FTBQsB1RWStwiODu05xbAbJk9GwAr"
                                                    alt="Gray BMW X5 SUV"
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm">BMW X5</div>
                                                <div className="text-[#9da6b9] text-xs">VIN: ...4491</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">B99-SUV</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                            <span className="size-1.5 rounded-full bg-emerald-400"></span>
                                            Available
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="text-[#9da6b9] w-4 h-4" />
                                            West Side Hub
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">Dec 01, 2023</td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">8,200 km</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="View Details">
                                                <Car className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="Edit">
                                                <FileText className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="More">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                                {/* Row 5 */}
                                <tr className="group hover:bg-[#0c1315]/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-4">
                                            <div className="size-12 rounded-lg bg-[#0c1315] border border-white/5 p-1 shrink-0 overflow-hidden relative">
                                                <Image 
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlVInyY7nG2i_LUsc25HGTU-X-e3fjy4Gwwe6N-U2zntL-ke29BaqLJ9TO8xnh0hRT1GZOfgn3GekwH5Tf5qoC4l5pIiKEKeMO4d1uCP9Ta18ud4VpTAUK4blwyY8bjrbpClyb20MtqfqMPxHF4dRyT_WVNZ3-szKEQDV8OA71spvEbCGgvtsujVzRn1qpjkoHeUca-5fZiqDPgailoID4eEm_yo3la7BhEifOqoTx6Cv3y9o-Hzhk0C5oW7Wryi1bl3Mgg6aqxf84"
                                                    alt="Red Porsche 911"
                                                    fill
                                                    className="object-cover rounded-md"
                                                />
                                            </div>
                                            <div>
                                                <div className="text-white font-medium text-sm">Porsche 911</div>
                                                <div className="text-[#9da6b9] text-xs">VIN: ...7732</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">P01-SPD</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-[#c9a37e]/20 text-[#c9a37e] border border-[#c9a37e]/20">
                                            <span className="size-1.5 rounded-full bg-[#c9a37e]"></span>
                                            Rented
                                        </span>
                                        <div className="text-[10px] text-[#9da6b9] mt-1 pl-1">Returns tomorrow</div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="text-[#9da6b9] w-4 h-4" />
                                            Airport Zone
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-slate-300">Nov 15, 2023</td>
                                    <td className="px-6 py-4 text-sm text-slate-300 font-mono">22,100 km</td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="View Details">
                                                <Car className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="Edit">
                                                <FileText className="w-5 h-5" />
                                            </button>
                                            <button className="p-1.5 hover:bg-[#0c1315] rounded text-[#9da6b9] hover:text-white" title="More">
                                                <MoreVertical className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* Pagination */}
                    <div className="px-6 py-4 border-t border-white/5 flex items-center justify-between bg-[#0c1315]/30">
                        <div className="text-xs text-[#9da6b9]">
                            Showing <span className="text-white font-medium">1-5</span> of <span className="text-white font-medium">142</span> vehicles
                        </div>
                        <div className="flex gap-2">
                            <button className="px-3 py-1.5 rounded-md bg-[#0c1315] border border-white/5 text-[#9da6b9] text-xs font-medium hover:text-white hover:border-slate-500 transition-colors disabled:opacity-50" disabled>Previous</button>
                            <button className="px-3 py-1.5 rounded-md bg-[#0c1315] border border-white/5 text-[#9da6b9] text-xs font-medium hover:text-white hover:border-slate-500 transition-colors">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
