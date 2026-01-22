"use client";

import {
  CreditCard,
  Search,
  Plus,
  BookmarkCheck,
  Gauge,
  FileSignature,
  Send,
  Eye,
  Bold,
  Italic,
  Underline,
  List,
  Link as LinkIcon,
  Braces,
  Save
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("email");

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
                <span className="text-white font-medium">Notifications & Contracts</span>
            </div>

            {/* Page Heading */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="flex flex-col gap-2">
                <h1 className="text-white text-3xl md:text-4xl font-bold leading-tight font-[family-name:var(--font-epilogue)]">Notifications & Contracts</h1>
                <p className="text-[#9da6b9] text-base font-normal leading-normal max-w-2xl">Manage automated email triggers and customize your rental agreement templates.</p>
              </div>
              <div className="flex gap-3">
                <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#1a1f21] border border-white/10 hover:bg-white/5 text-white text-sm font-bold transition-colors">
                  Discard
                </button>
                <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-6 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] text-sm font-bold shadow-[0_0_15px_rgba(201,163,126,0.3)] transition-all">
                  <Save className="w-4 h-4" />
                  Save Changes
                </button>
              </div>
            </div>

            {/* Navigation Tabs */}
            <div className="border-b border-white/10">
              <div className="flex gap-8">
                <button 
                    onClick={() => setActiveTab("email")}
                    className={`relative flex items-center justify-center pb-3 pt-2 group cursor-pointer ${activeTab === "email" ? "text-[#c9a37e]" : "text-[#9da6b9] hover:text-white"}`}
                >
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 rounded-t-full transition-colors ${activeTab === "email" ? "bg-[#c9a37e]" : "bg-transparent group-hover:bg-white/10"}`}></div>
                  <span className="text-sm font-bold tracking-wide">Email Notifications</span>
                </button>
                <button 
                    onClick={() => setActiveTab("contracts")}
                    className={`relative flex items-center justify-center pb-3 pt-2 group cursor-pointer ${activeTab === "contracts" ? "text-[#c9a37e]" : "text-[#9da6b9] hover:text-white"}`}
                >
                  <div className={`absolute bottom-0 left-0 w-full h-0.5 rounded-t-full transition-colors ${activeTab === "contracts" ? "bg-[#c9a37e]" : "bg-transparent group-hover:bg-white/10"}`}></div>
                  <span className="text-sm font-bold tracking-wide transition-colors">Rental Contracts</span>
                </button>
              </div>
            </div>

            {/* Main Workspace (Grid Layout) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start min-h-[600px]">
                {/* Left Column: Notification Triggers List */}
                <div className="lg:col-span-4 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                        <h3 className="text-white text-lg font-bold">Triggers</h3>
                        <button className="text-[#c9a37e] text-sm font-medium hover:underline flex items-center gap-1">
                            <Plus className="w-3.5 h-3.5" /> New Trigger
                        </button>
                    </div>
                    
                    {/* Search Triggers */}
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                        <input 
                            className="w-full bg-[#1a1f21] border border-white/10 rounded-lg py-2.5 pl-10 pr-4 text-white placeholder-[#64748b] text-sm focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-all" 
                            placeholder="Filter emails..." 
                            type="text"
                        />
                    </div>

                    {/* List Items */}
                    <div className="flex flex-col gap-2">
                        {/* Active Item */}
                        <div className="bg-[#c9a37e]/5 border border-[#c9a37e]/50 rounded-xl p-4 cursor-pointer relative overflow-hidden group">
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#c9a37e]"></div>
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#c9a37e]/20 p-1.5 rounded-md text-[#c9a37e]">
                                        <BookmarkCheck className="w-4 h-4" />
                                    </div>
                                    <span className="text-white font-semibold text-sm">Booking Confirmation</span>
                                </div>
                                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked type="checkbox" className="sr-only peer" />
                                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                    </label>
                                </div>
                            </div>
                            <p className="text-[#9da6b9] text-xs line-clamp-2 pl-8">Sent automatically to the customer immediately after a successful booking.</p>
                        </div>

                        {/* Inactive Item */}
                        <div className="bg-[#1a1f21] hover:bg-white/5 border border-transparent hover:border-white/10 rounded-xl p-4 cursor-pointer transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#0c1315] p-1.5 rounded-md text-[#9da6b9] group-hover:text-white transition-colors">
                                        <CreditCard className="w-4 h-4" />
                                    </div>
                                    <span className="text-[#9da6b9] group-hover:text-white font-medium text-sm transition-colors">Payment Reminder</span>
                                </div>
                                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked type="checkbox" className="sr-only peer" />
                                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                    </label>
                                </div>
                            </div>
                            <p className="text-[#9da6b9] text-xs line-clamp-2 pl-8">Sent 24 hours before the rental period ends if payment is pending.</p>
                        </div>

                        {/* Inactive Item */}
                        <div className="bg-[#1a1f21] hover:bg-white/5 border border-transparent hover:border-white/10 rounded-xl p-4 cursor-pointer transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#0c1315] p-1.5 rounded-md text-[#9da6b9] group-hover:text-white transition-colors">
                                        <Gauge className="w-4 h-4" />
                                    </div>
                                    <span className="text-[#9da6b9] group-hover:text-white font-medium text-sm transition-colors">Mileage Overage</span>
                                </div>
                                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input type="checkbox" className="sr-only peer" />
                                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                    </label>
                                </div>
                            </div>
                            <p className="text-[#9da6b9] text-xs line-clamp-2 pl-8">Alert sent to admin when a car is returned with excess mileage.</p>
                        </div>

                        {/* Inactive Item */}
                        <div className="bg-[#1a1f21] hover:bg-white/5 border border-transparent hover:border-white/10 rounded-xl p-4 cursor-pointer transition-all group">
                            <div className="flex justify-between items-start mb-2">
                                <div className="flex items-center gap-2">
                                    <div className="bg-[#0c1315] p-1.5 rounded-md text-[#9da6b9] group-hover:text-white transition-colors">
                                        <FileSignature className="w-4 h-4" />
                                    </div>
                                    <span className="text-[#9da6b9] group-hover:text-white font-medium text-sm transition-colors">Contract Signed</span>
                                </div>
                                <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked type="checkbox" className="sr-only peer" />
                                        <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                    </label>
                                </div>
                            </div>
                            <p className="text-[#9da6b9] text-xs line-clamp-2 pl-8">Confirmation email with attached PDF sent to both parties.</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Editor Area */}
                <div className="lg:col-span-8 flex flex-col gap-6">
                    {/* Editor Header */}
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-white text-lg font-bold">Edit Content</h3>
                            <p className="text-[#9da6b9] text-xs">Customizing: <span className="text-[#c9a37e] font-medium">Booking Confirmation</span></p>
                        </div>
                        <div className="flex gap-2">
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1f21] hover:bg-white/5 border border-white/10 text-xs font-medium text-[#9da6b9] hover:text-white transition-colors">
                                <Send className="w-3.5 h-3.5" /> Test Email
                            </button>
                            <button className="flex items-center gap-2 px-3 py-1.5 rounded bg-[#1a1f21] hover:bg-white/5 border border-white/10 text-xs font-medium text-[#9da6b9] hover:text-white transition-colors">
                                <Eye className="w-3.5 h-3.5" /> Preview
                            </button>
                        </div>
                    </div>

                    {/* Editor Card */}
                    <div className="bg-[#1a1f21] rounded-xl border border-white/10 overflow-hidden shadow-xl flex flex-col flex-1">
                        {/* Fields */}
                        <div className="p-6 border-b border-white/5 flex flex-col gap-4">
                            <div className="flex flex-col gap-2">
                                <label className="text-[#9da6b9] text-xs font-bold uppercase tracking-wider">Email Subject</label>
                                <input 
                                    className="w-full bg-[#0c1315] border border-white/10 focus:border-[#c9a37e] rounded-lg px-4 py-2.5 text-white text-sm placeholder-[#64748b] focus:ring-0 outline-none transition-colors" 
                                    type="text" 
                                    defaultValue="Booking Confirmed: {car_model} - Ref #{booking_id}"
                                />
                            </div>
                        </div>

                        {/* Toolbar */}
                        <div className="bg-[#0c1315] px-4 py-2 flex items-center gap-1 border-b border-white/5">
                            <button className="p-1.5 rounded hover:bg-white/10 text-[#9da6b9] hover:text-white transition-colors" title="Bold">
                                <Bold className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded hover:bg-white/10 text-[#9da6b9] hover:text-white transition-colors" title="Italic">
                                <Italic className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded hover:bg-white/10 text-[#9da6b9] hover:text-white transition-colors" title="Underline">
                                <Underline className="w-4 h-4" />
                            </button>
                            <div className="w-[1px] h-5 bg-white/10 mx-2"></div>
                            <button className="p-1.5 rounded hover:bg-white/10 text-[#9da6b9] hover:text-white transition-colors" title="List">
                                <List className="w-4 h-4" />
                            </button>
                            <button className="p-1.5 rounded hover:bg-white/10 text-[#9da6b9] hover:text-white transition-colors" title="Link">
                                <LinkIcon className="w-4 h-4" />
                            </button>
                            <div className="w-[1px] h-5 bg-white/10 mx-2"></div>
                            <button className="flex items-center gap-1 px-2 py-1 rounded bg-[#c9a37e]/10 hover:bg-[#c9a37e]/20 text-[#c9a37e] text-xs font-medium transition-colors">
                                <Braces className="w-3.5 h-3.5" /> Insert Variable
                            </button>
                        </div>

                        {/* Text Area */}
                        <div className="flex-1 bg-[#0c1315]/50 p-6 min-h-[300px] text-white text-sm leading-relaxed">
                            <p className="mb-4">Dear <span className="inline-block px-1.5 py-0.5 rounded bg-[#1a1f21] text-[#c9a37e] font-mono text-xs border border-[#c9a37e]/30">{`{customer_name}`}</span>,</p>
                            <p className="mb-4">Thank you for choosing our platform. Your booking has been confirmed.</p>
                            
                            <div className="bg-[#1a1f21]/50 p-4 rounded-lg border-l-4 border-[#c9a37e] mb-6">
                                <p className="font-bold mb-2">Booking Details:</p>
                                <ul className="space-y-1 text-[#9da6b9]">
                                    <li>Vehicle: <span className="text-white font-medium">{`{car_model}`}</span> ({`{car_plate}`})</li>
                                    <li>Start Date: <span className="text-white font-medium">{`{start_date}`}</span></li>
                                    <li>End Date: <span className="text-white font-medium">{`{end_date}`}</span></li>
                                    <li>Pickup Location: <span className="text-white font-medium">{`{location_pickup}`}</span></li>
                                </ul>
                            </div>
                            
                            <p className="mb-4">Please ensure you have your driver's license and ID ready upon pickup.</p>
                            <p className="text-[#9da6b9]">Best regards,<br/>The <span className="inline-block px-1.5 py-0.5 rounded bg-[#1a1f21] text-[#c9a37e] font-mono text-xs border border-[#c9a37e]/30">{`{company_name}`}</span> Team</p>
                        </div>

                        {/* Variable Bank Footer */}
                        <div className="p-4 bg-[#1a1f21] border-t border-white/10 flex flex-col gap-2">
                            <span className="text-xs font-bold text-[#9da6b9] uppercase tracking-wider">Available Variables</span>
                            <div className="flex flex-wrap gap-2">
                                <button className="px-2 py-1 rounded-md bg-[#0c1315] border border-white/10 hover:border-[#c9a37e]/50 text-xs font-mono text-[#9da6b9] hover:text-white transition-colors cursor-pointer">{`{customer_name}`}</button>
                                <button className="px-2 py-1 rounded-md bg-[#0c1315] border border-white/10 hover:border-[#c9a37e]/50 text-xs font-mono text-[#9da6b9] hover:text-white transition-colors cursor-pointer">{`{booking_id}`}</button>
                                <button className="px-2 py-1 rounded-md bg-[#0c1315] border border-white/10 hover:border-[#c9a37e]/50 text-xs font-mono text-[#9da6b9] hover:text-white transition-colors cursor-pointer">{`{total_price}`}</button>
                                <button className="px-2 py-1 rounded-md bg-[#0c1315] border border-white/10 hover:border-[#c9a37e]/50 text-xs font-mono text-[#9da6b9] hover:text-white transition-colors cursor-pointer">{`{car_model}`}</button>
                                <button className="px-2 py-1 rounded-md bg-[#0c1315] border border-white/10 hover:border-[#c9a37e]/50 text-xs font-mono text-[#9da6b9] hover:text-white transition-colors cursor-pointer">{`{company_name}`}</button>
                                <button className="px-2 py-1 rounded-md bg-[#0c1315] border border-white/10 hover:border-[#c9a37e]/50 text-xs font-mono text-[#9da6b9] hover:text-white transition-colors cursor-pointer">{`{contract_link}`}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-10"></div> {/* Spacer */}
          </div>
        </div>
    </div>
  );
}
