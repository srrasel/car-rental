"use client";

import {
  DollarSign,
  Network,
  Lock,
  History,
  Save,
  Eye,
  EyeOff,
  Tags,
  Gauge,
  Download,
  ShieldCheck
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function PaymentConfigurationPage() {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315] relative">
      <div className="flex-1 overflow-y-auto p-6 md:p-10">
          <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
            
            {/* Breadcrumbs */}
            <div className="flex items-center gap-2 text-sm">
                <Link href="/admin" className="text-[#9da6b9] hover:text-[#c9a37e] transition-colors">Dashboard</Link>
                <span className="text-white/20">/</span>
                <span className="text-[#9da6b9]">Settings</span>
                <span className="text-white/20">/</span>
                <span className="text-white font-medium">Payments</span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight font-[family-name:var(--font-epilogue)]">Payment Configuration</h1>
                <p className="text-[#9da6b9] text-base font-normal leading-normal">Manage payment gateways, pricing rules, and payout schedules for the platform.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#9da6b9] bg-[#1a1f21] border border-white/10 rounded-lg hover:text-white hover:bg-white/5 transition-colors">
                  <History className="w-4 h-4" />
                  Audit Log
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-2 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] text-sm font-bold rounded-lg transition-colors shadow-[0_0_15px_rgba(201,163,126,0.3)]">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>

            {/* Grid Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Left Column (Gateways & Status) */}
                <div className="lg:col-span-2 flex flex-col gap-6">
                    {/* Gateways Section */}
                    <section className="flex flex-col gap-4">
                        <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                            <Network className="w-5 h-5 text-[#c9a37e]" />
                            Active Payment Gateways
                        </h2>
                        
                        <div className="flex flex-col gap-4">
                            {/* Stripe Card */}
                            <div className="bg-[#1a1f21] rounded-xl p-6 border border-white/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-4">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        Connected
                                    </span>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-[#0c1315] flex items-center justify-center flex-shrink-0 border border-white/5">
                                        <span className="text-xl font-bold text-[#635BFF]">S</span>
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-base font-semibold text-white">Stripe Integration</h3>
                                        <p className="text-sm text-[#9da6b9] mt-1">Primary processor for credit cards and international payments.</p>
                                        
                                        <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-medium text-[#9da6b9] uppercase">Publishable Key</label>
                                                <div className="relative">
                                                    <input 
                                                        className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-8" 
                                                        readOnly 
                                                        type="text" 
                                                        value="pk_live_51Ms..."
                                                    />
                                                    <Lock className="absolute right-2.5 top-2.5 text-[#9da6b9] w-4 h-4" />
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-medium text-[#9da6b9] uppercase">Secret Key</label>
                                                <div className="relative">
                                                    <input 
                                                        className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-3 py-2.5 text-sm text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-8" 
                                                        readOnly 
                                                        type={showSecret ? "text" : "password"} 
                                                        value="sk_live_51Ms..."
                                                    />
                                                    <button 
                                                        onClick={() => setShowSecret(!showSecret)}
                                                        className="absolute right-2.5 top-2.5 text-[#9da6b9] hover:text-white transition-colors"
                                                    >
                                                        {showSecret ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                                    </button>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="mt-5 flex items-center gap-4 pt-4 border-t border-white/5">
                                            <label className="inline-flex items-center cursor-pointer group">
                                                <div className="relative">
                                                    <input defaultChecked type="checkbox" className="sr-only peer" />
                                                    <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                                </div>
                                                <span className="ms-3 text-sm font-medium text-white group-hover:text-[#c9a37e] transition-colors">Live Mode</span>
                                            </label>
                                            <button className="text-sm text-[#c9a37e] hover:text-[#b89574] font-medium ml-auto transition-colors">Configure Webhooks</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* PayPal Card */}
                            <div className="bg-[#1a1f21] rounded-xl p-6 border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-[#0c1315] flex items-center justify-center flex-shrink-0 border border-white/5">
                                            <span className="text-xl font-bold text-[#003087]">P</span>
                                        </div>
                                        <div>
                                            <h3 className="text-base font-semibold text-white">PayPal Integration</h3>
                                            <p className="text-sm text-[#9da6b9]">Alternative payment method for wallets.</p>
                                        </div>
                                    </div>
                                    <button className="px-4 py-2 rounded-lg bg-[#0c1315] border border-white/10 text-[#9da6b9] text-sm font-medium hover:text-white hover:bg-white/5 transition-colors">
                                        Connect
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Payouts Summary */}
                    <section>
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-white flex items-center gap-2">
                                <DollarSign className="w-5 h-5 text-[#c9a37e]" />
                                Payout Schedule
                            </h2>
                            <span className="text-sm text-[#9da6b9]">Next payout: <span className="text-white font-medium">Oct 24, 2023</span></span>
                        </div>
                        <div className="bg-[#1a1f21] rounded-xl border border-white/10 overflow-hidden">
                            <div className="p-5 border-b border-white/10 flex flex-wrap gap-4 items-end justify-between bg-[#1a1f21]/50">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-sm font-medium text-[#9da6b9]">Payout Frequency</label>
                                    <select className="block w-48 rounded-lg border border-white/10 bg-[#0c1315] text-white shadow-sm focus:border-[#c9a37e] focus:ring-[#c9a37e] outline-none sm:text-sm py-2 px-3">
                                        <option>Daily (Automated)</option>
                                        <option defaultValue="weekly">Weekly (Mondays)</option>
                                        <option>Monthly (1st)</option>
                                    </select>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-[#9da6b9] mb-1">Available Balance</p>
                                    <p className="text-2xl font-bold text-white">CHF 12,450.00</p>
                                </div>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-sm text-left">
                                    <thead className="bg-[#0c1315] text-xs uppercase text-[#9da6b9] font-semibold">
                                        <tr>
                                            <th className="px-6 py-4">Date</th>
                                            <th className="px-6 py-4">Amount</th>
                                            <th className="px-6 py-4">Status</th>
                                            <th className="px-6 py-4 text-right">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-white/5">
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-white">Oct 17, 2023</td>
                                            <td className="px-6 py-4 font-medium text-white">CHF 4,230.50</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Paid</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-[#c9a37e] hover:text-[#b89574] text-xs font-medium flex items-center gap-1 ml-auto">
                                                    <Download className="w-3.5 h-3.5" /> Download PDF
                                                </button>
                                            </td>
                                        </tr>
                                        <tr className="hover:bg-white/5 transition-colors">
                                            <td className="px-6 py-4 text-white">Oct 10, 2023</td>
                                            <td className="px-6 py-4 font-medium text-white">CHF 3,890.00</td>
                                            <td className="px-6 py-4">
                                                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Paid</span>
                                            </td>
                                            <td className="px-6 py-4 text-right">
                                                <button className="text-[#c9a37e] hover:text-[#b89574] text-xs font-medium flex items-center gap-1 ml-auto">
                                                    <Download className="w-3.5 h-3.5" /> Download PDF
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column (Configuration Rules) */}
                <div className="flex flex-col gap-6">
                    {/* Global Pricing */}
                    <div className="bg-[#1a1f21] rounded-xl border border-white/10 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Tags className="w-5 h-5 text-[#c9a37e]" />
                            <h3 className="text-base font-bold text-white">Global Pricing Rules</h3>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-[#9da6b9]">Platform Commission</label>
                                <div className="relative">
                                    <input 
                                        className="block w-full rounded-lg border border-white/10 bg-[#0c1315] text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] outline-none sm:text-sm pl-3 pr-8 py-2.5" 
                                        type="number" 
                                        defaultValue="15"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <span className="text-[#9da6b9] text-sm">%</span>
                                    </div>
                                </div>
                                <p className="text-xs text-[#9da6b9]/70">Applied to every completed booking.</p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-[#9da6b9]">Minimum Rental Period</label>
                                <div className="relative">
                                    <input 
                                        className="block w-full rounded-lg border border-white/10 bg-[#0c1315] text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] outline-none sm:text-sm pl-3 pr-12 py-2.5" 
                                        type="number" 
                                        defaultValue="1"
                                    />
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <span className="text-[#9da6b9] text-sm">Days</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mileage Costs */}
                    <div className="bg-[#1a1f21] rounded-xl border border-white/10 p-6">
                        <div className="flex items-center gap-2 mb-4">
                            <Gauge className="w-5 h-5 text-[#c9a37e]" />
                            <h3 className="text-base font-bold text-white">Mileage &amp; Surcharges</h3>
                        </div>
                        <div className="flex flex-col gap-5">
                            <div className="p-3 rounded-lg bg-blue-500/10 border border-blue-500/20">
                                <p className="text-xs text-blue-300 leading-relaxed">
                                    Ensure these rates align with current fuel prices and fleet maintenance costs.
                                </p>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-[#9da6b9] flex justify-between">
                                    <span>Pre-purchased KM</span>
                                    <span className="text-xs text-[#9da6b9]/70 font-normal">Base Rate</span>
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-[#9da6b9] sm:text-sm">CHF</span>
                                    </div>
                                    <input 
                                        className="block w-full rounded-lg border border-white/10 bg-[#0c1315] text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] outline-none pl-12 pr-12 sm:text-sm py-2.5" 
                                        placeholder="0.00" 
                                        step="0.01" 
                                        type="number" 
                                        defaultValue="0.35"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span className="text-[#9da6b9] sm:text-sm">/ km</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-1.5">
                                <label className="text-sm font-medium text-[#9da6b9] flex justify-between">
                                    <span>Exceeded KM Penalty</span>
                                    <span className="text-xs text-amber-500 font-normal">Surcharge</span>
                                </label>
                                <div className="relative">
                                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                        <span className="text-[#9da6b9] sm:text-sm">CHF</span>
                                    </div>
                                    <input 
                                        className="block w-full rounded-lg border border-amber-500/20 bg-[#0c1315] text-white focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none pl-12 pr-12 sm:text-sm py-2.5" 
                                        placeholder="0.00" 
                                        step="0.01" 
                                        type="number" 
                                        defaultValue="0.50"
                                    />
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                                        <span className="text-[#9da6b9] sm:text-sm">/ km</span>
                                    </div>
                                </div>
                                <p className="text-xs text-[#9da6b9]/70 mt-1">Charged automatically when rental ends.</p>
                            </div>
                        </div>
                    </div>

                    {/* Security Badge */}
                    <div className="bg-gradient-to-br from-[#1a1f21] to-[#0c1315] rounded-xl p-6 text-white shadow-lg relative overflow-hidden border border-white/10">
                        <div className="absolute -right-4 -top-4 opacity-5">
                            <ShieldCheck className="w-[100px] h-[100px]" />
                        </div>
                        <h4 className="font-bold text-sm mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-5 h-5 text-[#c9a37e]" />
                            Security Active
                        </h4>
                        <p className="text-xs text-[#9da6b9] mb-3 leading-relaxed z-10 relative">All payment data is encrypted. Last security audit passed on Oct 01.</p>
                        <a className="text-xs font-medium text-[#c9a37e] hover:text-[#b89574] underline z-10 relative" href="#">View Security Report</a>
                    </div>
                </div>
            </div>

            <div className="h-10"></div> {/* Spacer */}
          </div>
        </div>
    </div>
  );
}
