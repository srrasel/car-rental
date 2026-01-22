"use client";

import {
  Car,
  Settings,
  Search,
  Bell,
  ChevronRight,
  Save,
  ChevronDown,
  Star,
  Trash2,
  Plus,
  DollarSign,
  Info,
  Image as ImageIcon,
  UploadCloud
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AddVehiclePage() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315] relative">
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
            <div className="flex flex-col max-w-[1200px] w-full gap-6 mx-auto pb-10">
                {/* Breadcrumbs */}
                <div className="flex flex-wrap items-center gap-2 text-sm">
                    <Link className="text-[#9da6b9] hover:text-[#c9a37e] transition-colors" href="/admin">Dashboard</Link>
                    <ChevronRight className="text-[#9da6b9] w-4 h-4" />
                    <Link className="text-[#9da6b9] hover:text-[#c9a37e] transition-colors" href="/admin/fleet">Fleet</Link>
                    <ChevronRight className="text-[#9da6b9] w-4 h-4" />
                    <span className="text-white font-medium">Add New Car</span>
                </div>
                
                {/* Page Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-2 border-b border-white/5">
                    <div>
                        <h1 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Add New Vehicle</h1>
                        <p className="text-[#9da6b9] mt-1">Fill in the information below to add a new vehicle to your fleet inventory.</p>
                    </div>
                    <div className="flex gap-3">
                        <Link href="/admin/fleet" className="px-5 h-10 flex items-center justify-center rounded-lg border border-white/10 text-slate-300 font-medium hover:bg-white/5 transition-colors">
                            Cancel
                        </Link>
                        <button className="px-5 h-10 rounded-lg bg-[#c9a37e] text-[#0c1315] font-bold hover:bg-[#c9a37e]/90 transition-colors shadow-lg shadow-[#c9a37e]/20 flex items-center gap-2">
                            <Save className="w-5 h-5" />
                            Save Vehicle
                        </button>
                    </div>
                </div>

                {/* Form Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Left Column (Main Info) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Vehicle Identity Card */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
                                <Car className="text-[#c9a37e] w-5 h-5" />
                                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Vehicle Identity</h3>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Make</span>
                                    <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="e.g. Toyota" type="text"/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Model</span>
                                    <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="e.g. Camry" type="text"/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Year</span>
                                    <div className="relative">
                                        <select className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] appearance-none transition-all outline-none">
                                            <option disabled selected value="">Select Year</option>
                                            <option value="2024">2024</option>
                                            <option value="2023">2023</option>
                                            <option value="2022">2022</option>
                                            <option value="2021">2021</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#9da6b9]">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Trim / Variant</span>
                                    <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="e.g. SE Hybrid" type="text"/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">License Plate</span>
                                    <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white uppercase focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="ABC-1234" type="text"/>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">VIN (Vehicle Identification Number)</span>
                                    <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white uppercase focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="17-character VIN" type="text"/>
                                </label>
                            </div>
                        </div>

                        {/* Technical Specs Card */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
                                <Settings className="text-[#c9a37e] w-5 h-5" />
                                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Technical Specifications</h3>
                            </div>
                            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Transmission</span>
                                    <div className="relative">
                                        <select className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] appearance-none transition-all outline-none">
                                            <option value="Automatic">Automatic</option>
                                            <option value="Manual">Manual</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#9da6b9]">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Fuel Type</span>
                                    <div className="relative">
                                        <select className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] appearance-none transition-all outline-none">
                                            <option value="Petrol">Petrol</option>
                                            <option value="Diesel">Diesel</option>
                                            <option value="Electric">Electric</option>
                                            <option value="Hybrid">Hybrid</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none text-[#9da6b9]">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </label>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Seating Capacity</span>
                                    <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" type="number" defaultValue="5"/>
                                </label>
                                <label className="flex flex-col gap-2 md:col-span-1">
                                    <span className="text-sm font-medium text-slate-300">Current Odometer (km)</span>
                                    <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="0" type="number"/>
                                </label>
                                <label className="flex flex-col gap-2 md:col-span-2">
                                    <span className="text-sm font-medium text-slate-300">Color</span>
                                    <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="e.g. Midnight Black" type="text"/>
                                </label>
                            </div>
                        </div>

                        {/* Features Checklist */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
                                <Star className="text-[#c9a37e] w-5 h-5" />
                                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Features & Extras</h3>
                            </div>
                            <div className="p-6">
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {/* Checkbox Items */}
                                    {[
                                      "Air Conditioning", "Bluetooth", "GPS Navigation", "Heated Seats",
                                      "Sunroof", "Backup Camera", "Child Seat", "Cruise Control"
                                    ].map((feature, idx) => (
                                        <label key={idx} className="inline-flex items-center cursor-pointer group">
                                            <input defaultChecked={["Air Conditioning", "Bluetooth", "Backup Camera"].includes(feature)} className="form-checkbox size-5 text-[#c9a37e] rounded border-white/10 bg-[#0c1315] focus:ring-offset-0 focus:ring-0 transition-all" type="checkbox"/>
                                            <span className="ml-2 text-sm text-slate-300 group-hover:text-[#c9a37e] transition-colors">{feature}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Pricing & Media) */}
                    <div className="lg:col-span-1 flex flex-col gap-6">
                        {/* Pricing Card */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 overflow-hidden">
                            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
                                <DollarSign className="text-[#c9a37e] w-5 h-5" />
                                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Pricing & Terms</h3>
                            </div>
                            <div className="p-6 flex flex-col gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Daily Rental Price ($)</span>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#9da6b9] font-medium">$</span>
                                        <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 pl-8 pr-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="0.00" type="number"/>
                                    </div>
                                </label>
                                <div className="grid grid-cols-2 gap-4">
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-300">Included Km/day</span>
                                        <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 px-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="Unlimited" type="number"/>
                                    </label>
                                    <label className="flex flex-col gap-2">
                                        <span className="text-sm font-medium text-slate-300">Extra Km Cost</span>
                                        <div className="relative">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-[#9da6b9] font-medium text-xs">$</span>
                                            <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 pl-6 pr-3 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="0.50" type="number"/>
                                        </div>
                                    </label>
                                </div>
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-300">Security Deposit ($)</span>
                                    <div className="relative">
                                        <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-[#9da6b9] font-medium">$</span>
                                        <input className="w-full h-11 rounded-lg bg-[#0c1315] border border-white/10 pl-8 pr-4 text-white focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] placeholder-gray-600 transition-all outline-none" placeholder="300.00" type="number"/>
                                    </div>
                                </label>
                                <div className="p-4 bg-[#c9a37e]/10 rounded-lg flex items-start gap-3">
                                    <Info className="text-[#c9a37e] w-5 h-5 shrink-0 mt-0.5" />
                                    <p className="text-xs text-[#c9a37e]/80 leading-relaxed">
                                        Base price includes standard insurance coverage. Adjust deposit based on vehicle category.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Media Upload Card */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 overflow-hidden flex flex-col flex-1">
                            <div className="px-6 py-4 border-b border-white/5 flex items-center gap-2">
                                <ImageIcon className="text-[#c9a37e] w-5 h-5" />
                                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Vehicle Photos</h3>
                            </div>
                            <div className="p-6 flex flex-col gap-4 flex-1">
                                {/* Drag & Drop Zone */}
                                <div className="border-2 border-dashed border-white/10 rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:border-[#c9a37e] hover:bg-[#0c1315] transition-all group">
                                    <div className="size-12 rounded-full bg-[#0c1315] flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                        <UploadCloud className="text-[#9da6b9] w-6 h-6" />
                                    </div>
                                    <p className="text-sm font-medium text-white">Click to upload or drag and drop</p>
                                    <p className="text-xs text-[#9da6b9] mt-1">SVG, PNG, JPG or GIF (max. 3MB)</p>
                                </div>
                                
                                {/* Thumbnails */}
                                <div className="grid grid-cols-3 gap-2 mt-2">
                                    <div className="relative aspect-square rounded-lg overflow-hidden group">
                                        <Image 
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuB0v0Pd9Jfrey_25WDPdMn-P4AZoRDsqeyv0ai0ORsqF0tDUQ83DLG34xyUTVCDRfP_EeyWwrnzQDTA98En9Tu8n3SZICM15kjKwNouPQsZ7Oer_WZkO4uqiRDpoowTkCXDJJXWgF5_TE0FRo3F_PpGW4KVLRIif7usryD3Q4JteBnE-9GbF6bxviZfEuhHss_4I9mXnuNrrp644Jv7C0I7eDo0VAvYUb9qUVE7QRLJE_QB17D8qN2sl9dd5Ymh1D7Wlb9mbzTQNEZp"
                                            alt="White modern sedan front view"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                            <button className="text-white hover:text-red-400 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                        <div className="absolute top-1 left-1 bg-[#c9a37e] text-[#0c1315] text-[10px] font-bold px-1.5 py-0.5 rounded">MAIN</div>
                                    </div>
                                    <div className="relative aspect-square rounded-lg overflow-hidden group">
                                        <Image 
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoZ6U8_wilwAHA5_qLIu-PWv8a5PcDODjZn6F1WXPW7XeUDuDtB6TGxJ0R7nLzKeaKm0tQqcPvLCZ7zo4MCEUNpWjNwFoXsC5kV55YiaKFcVWq6E6a89Akr6orYmOfbRmFFdkOnf5woPvwBOOVy3Q0__Hvmej4zz-jrZLVFoPSXnPXwnpiwTLIbnrphwfoe5kUiDaggwBh5BmmHOn4WnDIsmR2BW92jGlI85kMbV3RbzRxg9BkAkg2R6xASt2cJy5J0ddXsbzv0vEn"
                                            alt="Car interior dashboard view"
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                                            <button className="text-white hover:text-red-400 transition-colors">
                                                <Trash2 className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="relative aspect-square rounded-lg overflow-hidden border-2 border-dashed border-white/10 flex items-center justify-center text-[#9da6b9]">
                                        <Plus className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}