"use client";

import {
  Search,
  Bell,
  Key,
  Clock,
  PieChart,
  AlertTriangle,
  Wrench,
  DollarSign
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminDashboard() {
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
                <span className="text-3xl font-bold text-white">12</span>
                <span className="text-sm font-medium text-emerald-500">+2 today</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/5">
                <div className="h-1.5 w-[65%] rounded-full bg-[#c9a37e]"></div>
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
                <span className="text-3xl font-bold text-white">$14,250</span>
                <span className="text-sm font-medium text-emerald-500">+12.5%</span>
              </div>
              <p className="mt-2 text-xs text-[#9da6b9]">Compared to $12,660 last month</p>
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
                <span className="text-3xl font-bold text-white">3</span>
                <span className="text-sm font-medium text-[#9da6b9]">new</span>
              </div>
              <p className="mt-2 text-xs text-[#9da6b9]">Avg. response time: 24m</p>
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
                <span className="text-3xl font-bold text-white">85%</span>
                <span className="text-sm font-medium text-emerald-500">+5%</span>
              </div>
              <div className="mt-2 h-1.5 w-full rounded-full bg-white/5">
                <div className="h-1.5 w-[85%] rounded-full bg-purple-500"></div>
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
                  <p className="text-sm text-[#9da6b9]">Daily revenue over the last 30 days</p>
                </div>
                <select className="rounded-lg border border-white/10 bg-[#0c1315] px-3 py-1.5 text-sm font-medium text-white focus:border-[#c9a37e] focus:ring-[#c9a37e]">
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                  <option>This Year</option>
                </select>
              </div>
              
              {/* Chart Placeholder */}
              <div className="relative h-[300px] w-full">
                <svg className="h-full w-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 800 300">
                  {/* Grid Lines */}
                  <line stroke="#374151" strokeOpacity="0.3" strokeWidth="1" x1="0" x2="800" y1="299" y2="299"></line>
                  <line stroke="#374151" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="800" y1="225" y2="225"></line>
                  <line stroke="#374151" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="800" y1="150" y2="150"></line>
                  <line stroke="#374151" strokeDasharray="4 4" strokeOpacity="0.2" strokeWidth="1" x1="0" x2="800" y1="75" y2="75"></line>
                  {/* Gradient Defs */}
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#c9a37e" stopOpacity="0.2"></stop>
                      <stop offset="100%" stopColor="#c9a37e" stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                  {/* Chart Area */}
                  <path d="M0 250 C50 250 50 150 100 150 C150 150 150 200 200 200 C250 200 250 100 300 100 C350 100 350 180 400 180 C450 180 450 120 500 120 C550 120 550 80 600 80 C650 80 650 160 700 160 C750 160 750 40 800 40 L800 300 L0 300 Z" fill="url(#chartGradient)"></path>
                  {/* Chart Line */}
                  <path d="M0 250 C50 250 50 150 100 150 C150 150 150 200 200 200 C250 200 250 100 300 100 C350 100 350 180 400 180 C450 180 450 120 500 120 C550 120 550 80 600 80 C650 80 650 160 700 160 C750 160 750 40 800 40" fill="none" stroke="#c9a37e" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3"></path>
                  {/* Tooltip Circle (Example Position) */}
                  <circle cx="600" cy="80" fill="#c9a37e" r="6" stroke="white" strokeWidth="2"></circle>
                </svg>
                {/* Fake Tooltip */}
                <div className="absolute top-[50px] left-[550px] rounded bg-white px-3 py-1 text-xs text-[#0c1315] shadow-lg font-bold">
                  $2,450 (Oct 24)
                </div>
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
                      <path className="text-[#c9a37e]" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="60, 100" strokeWidth="4"></path>
                      {/* Segment 2: Available (Green) */}
                      <path className="text-emerald-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="25, 100" strokeDashoffset="-60" strokeWidth="4"></path>
                      {/* Segment 3: Maintenance (Amber) */}
                      <path className="text-amber-500" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="15, 100" strokeDashoffset="-85" strokeWidth="4"></path>
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="text-xl font-bold text-white">45</span>
                      <span className="text-[10px] uppercase text-[#9da6b9]">Total Cars</span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-[#c9a37e]"></span>
                      <span className="text-sm text-[#9da6b9]">Rented (60%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-emerald-500"></span>
                      <span className="text-sm text-[#9da6b9]">Available (25%)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="h-3 w-3 rounded-full bg-amber-500"></span>
                      <span className="text-sm text-[#9da6b9]">Maintenance (15%)</span>
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
              <Link href="#" className="text-sm font-medium text-[#c9a37e] hover:text-[#c9a37e]/80">View All</Link>
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
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">#BK-9281</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-16 shrink-0 overflow-hidden rounded-md bg-slate-700 relative">
                            {/* Placeholder for Car Image */}
                             <div className="absolute inset-0 bg-[#c9a37e]/20 flex items-center justify-center text-[10px] text-[#c9a37e]">IMG</div>
                        </div>
                        <span className="font-medium text-white">Tesla Model S</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-slate-700 relative overflow-hidden">
                           <Image 
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCBa7Dsvp5Rp3AgWswEUY-w4wvPGVcM4WjkJU8OR2YzSgDDDhLNy9MifGaiIzYi1w0KvKV0TnhlqSOlOGTrF4nHjprNLD7btrDs_iuE8-UTC-qNwNS3zQ7wyHeMu4PwAhGhh9hnZNeOL2l65m3fw88IdimvuUtEfDx03DDTzSQKOs63DXzMR1hhpfg4_JqqHpTzaawyp0WsFBWHmCXcgomckME3YhXm_vJRUtPxTzZEdrr8TPHWto0SXUruSYvBljKV7fJB8d7JqS8J"
                              alt="Customer"
                              fill
                              className="object-cover"
                           />
                        </div>
                        James A.
                      </div>
                    </td>
                    <td className="px-6 py-4">Oct 24 - Oct 27</td>
                    <td className="px-6 py-4 font-medium text-white">$450.00</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-medium text-emerald-500">Active</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-[#c9a37e] hover:text-[#c9a37e]/80">Details</button>
                    </td>
                  </tr>
                  <tr className="hover:bg-white/5 transition-colors">
                    <td className="px-6 py-4 font-medium text-white">#BK-9280</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-16 shrink-0 overflow-hidden rounded-md bg-slate-700 relative">
                             <div className="absolute inset-0 bg-[#c9a37e]/20 flex items-center justify-center text-[10px] text-[#c9a37e]">IMG</div>
                        </div>
                        <span className="font-medium text-white">BMW M4</span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-slate-700 relative overflow-hidden">
                             <Image 
                              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLHMFjt_wSQVeKqL80OfrlpADPQKD1OkSHV2GC6DoI7UX9PCB0zHAmnQO_7ujSvDCsLHODEjirYgZF0TsFPToUnkGjU9TdqcXgCNtI0mStJrVhJOM8PMfuUghXjRRPsBVf4ZQF_9pyYc5aWDTGg3N0LbrDJnIi-k6DmDzOIS7ell9U_Ax0pAmhranH3bcaglYgFjJyU3QxBOoaS5fubspdM0NGpjNbf5p7p_h32kj-OSFNnvHwgQACNw_4exC3ymwXGQtruKcjoADG"
                              alt="Customer"
                              fill
                              className="object-cover"
                           />
                        </div>
                        Sarah S.
                      </div>
                    </td>
                    <td className="px-6 py-4">Oct 20 - Oct 22</td>
                    <td className="px-6 py-4 font-medium text-white">$380.00</td>
                    <td className="px-6 py-4">
                      <span className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-xs font-medium text-blue-500">Completed</span>
                    </td>
                    <td className="px-6 py-4">
                      <button className="text-[#c9a37e] hover:text-[#c9a37e]/80">Details</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
