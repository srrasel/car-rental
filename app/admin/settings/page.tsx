"use client";

import {
  Settings,
  Search,
  Bell,
  Globe,
  LifeBuoy,
  AlertTriangle,
  ChevronDown,
  Monitor,
  Mail,
  Phone,
  Server,
  Database,
  HardDrive,
  Clock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function SettingsPage() {
  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315] relative">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0c1315]/95 backdrop-blur-sm px-8 z-10">
            <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                    <Settings className="text-[#c9a37e] w-6 h-6" />
                    <h2 className="text-lg font-bold leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Platform Settings</h2>
                </div>
            </div>
            <div className="flex items-center gap-4">
                <div className="relative hidden sm:block">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-5 h-5" />
                    <input 
                        className="bg-[#1a1f21] border border-white/5 text-sm text-white rounded-lg pl-10 pr-4 py-2 w-64 focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none placeholder:text-[#9da6b9]" 
                        placeholder="Search settings..." 
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
            <div className="mx-auto max-w-5xl flex flex-col gap-8 pb-20">
                {/* Breadcrumbs & Heading */}
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-2 text-sm text-[#9da6b9]">
                        <Link className="hover:text-[#c9a37e] transition-colors" href="/admin">Home</Link>
                        <span className="text-slate-600">/</span>
                        <Link className="hover:text-[#c9a37e] transition-colors" href="/admin">Admin</Link>
                        <span className="text-slate-600">/</span>
                        <span className="text-white font-medium">Settings</span>
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>Platform Settings</h1>
                            <p className="text-[#9da6b9] text-base">Manage your car rental platform configurations, preferences, and integrations.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-5 h-10 rounded-lg border border-white/10 text-slate-300 font-medium hover:bg-white/5 transition-colors">Discard</button>
                            <button className="px-5 h-10 rounded-lg bg-[#c9a37e] text-[#0c1315] font-bold hover:bg-[#c9a37e]/90 transition-colors shadow-lg shadow-[#c9a37e]/20">Save Changes</button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-white/5 overflow-x-auto">
                    <nav aria-label="Tabs" className="flex space-x-8 min-w-max">
                        <a aria-current="page" className="border-b-2 border-[#c9a37e] py-4 px-1 text-sm font-bold text-[#c9a37e]" href="#">
                            General
                        </a>
                        <a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-[#9da6b9] hover:border-white/20 hover:text-white transition-colors" href="#">
                            Users & Permissions
                        </a>
                        <a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-[#9da6b9] hover:border-white/20 hover:text-white transition-colors" href="#">
                            Payments
                        </a>
                        <a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-[#9da6b9] hover:border-white/20 hover:text-white transition-colors" href="#">
                            Notifications
                        </a>
                        <a className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-[#9da6b9] hover:border-white/20 hover:text-white transition-colors" href="#">
                            Contracts
                        </a>
                    </nav>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column (Wider) */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        {/* Site Identity Card */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                                    <Monitor className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Site Identity</h3>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-300">Platform Name</label>
                                    <input className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600" placeholder="Enter platform name" type="text" defaultValue="RentalAdmin"/>
                                    <p className="text-xs text-[#9da6b9]">This name will appear in emails and the browser title.</p>
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-300">Logo</label>
                                    <div className="flex items-center gap-6">
                                        <div className="size-20 rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center bg-[#0c1315] relative overflow-hidden">
                                            <Image 
                                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxeRwgHl4ntggxhrA8sL5C9Rp2HJn2FbsHhv77BgbzKWUfBOawlpHznsNGL0aLxsjqsdnAYgu5hTUnMrTvthRh_fQirvawF6fc6Nq2QHc552EqbQz_27yAGb5QMyw9_Tu3ITt0LYpDycvIMRglKCa7E0EkK8lOSRxpqqnxfgmfh4xk_ysQ9PSPZrm85lI8j4IJk9dYrVT8t6C50-wFhPLdTcjLEitJsnvrMOCHKbPADXP0ChC_sQwP0KY4hHuVsjSONFGDkWT8xxEZ"
                                                alt="Current logo preview"
                                                width={80}
                                                height={80}
                                                className="object-contain p-2"
                                            />
                                        </div>
                                        <div className="flex flex-col gap-2">
                                            <div className="flex gap-3">
                                                <button className="px-4 py-2 bg-[#1a1f21] border border-white/10 rounded-lg text-sm font-medium text-white hover:bg-white/5 transition-colors">Change</button>
                                                <button className="px-4 py-2 text-sm font-medium text-red-500 hover:text-red-400 transition-colors">Remove</button>
                                            </div>
                                            <p className="text-xs text-[#9da6b9]">JPG, GIF or PNG. Max size of 800K.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Localization Card */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-purple-500/10 rounded-lg text-purple-400">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Localization</h3>
                            </div>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-300">Default Currency</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-10">
                                            <option value="USD">USD ($)</option>
                                            <option value="EUR">EUR (€)</option>
                                            <option value="GBP">GBP (£)</option>
                                            <option value="JPY">JPY (¥)</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#9da6b9]">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-300">Time Zone</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-10">
                                            <option>(GMT-08:00) Pacific Time</option>
                                            <option>(GMT-05:00) Eastern Time</option>
                                            <option selected>(GMT+00:00) UTC</option>
                                            <option>(GMT+01:00) Central European Time</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#9da6b9]">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-300">Language</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-10">
                                            <option selected>English (US)</option>
                                            <option>Spanish</option>
                                            <option>French</option>
                                            <option>German</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#9da6b9]">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-300">Date Format</label>
                                    <div className="relative">
                                        <select className="w-full appearance-none bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-10">
                                            <option selected>MM/DD/YYYY</option>
                                            <option>DD/MM/YYYY</option>
                                            <option>YYYY-MM-DD</option>
                                        </select>
                                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-[#9da6b9]">
                                            <ChevronDown className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Support Info */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-6 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                                    <LifeBuoy className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Contact & Support</h3>
                            </div>
                            <div className="grid gap-6">
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-300">Support Email</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                                        <input className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600" placeholder="Enter support email" type="email" defaultValue="support@rentaladmin.com"/>
                                    </div>
                                </div>
                                <div className="grid gap-2">
                                    <label className="text-sm font-medium text-slate-300">Support Phone</label>
                                    <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                                        <input className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600" placeholder="Enter support phone" type="tel" defaultValue="+1 (555) 123-4567"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column (Narrower) */}
                    <div className="flex flex-col gap-6">
                        {/* Quick Preferences */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'var(--font-epilogue)' }}>Quick Preferences</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-medium text-white">Maintenance Mode</span>
                                        <span className="text-xs text-[#9da6b9]">Disable customer bookings</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input className="sr-only peer" type="checkbox" value=""/>
                                        <div className="w-11 h-6 bg-[#0c1315] border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                    </label>
                                </div>
                                <div className="h-px bg-white/5"></div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-medium text-white">New User Signup</span>
                                        <span className="text-xs text-[#9da6b9]">Allow public registration</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input defaultChecked className="sr-only peer" type="checkbox" value=""/>
                                        <div className="w-11 h-6 bg-[#0c1315] border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                    </label>
                                </div>
                                <div className="h-px bg-white/5"></div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-medium text-white">Auto-approve Bookings</span>
                                        <span className="text-xs text-[#9da6b9]">Skip manual review</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input className="sr-only peer" type="checkbox" value=""/>
                                        <div className="w-11 h-6 bg-[#0c1315] border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* System Status */}
                        <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-white mb-4" style={{ fontFamily: 'var(--font-epilogue)' }}>System Health</h3>
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Server className="w-4 h-4 text-[#9da6b9]" />
                                        <span className="text-sm text-[#9da6b9]">Server Status</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <div className="size-2 bg-green-500 rounded-full animate-pulse"></div>
                                        <span className="text-sm font-medium text-green-500">Operational</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Database className="w-4 h-4 text-[#9da6b9]" />
                                        <span className="text-sm text-[#9da6b9]">Database</span>
                                    </div>
                                    <span className="text-sm font-medium text-white">Connected</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-[#9da6b9]" />
                                        <span className="text-sm text-[#9da6b9]">Last Backup</span>
                                    </div>
                                    <span className="text-sm font-medium text-white">2 hours ago</span>
                                </div>
                                <div className="mt-2">
                                    <div className="flex justify-between text-xs mb-1">
                                        <span className="text-[#9da6b9] flex items-center gap-1">
                                            <HardDrive className="w-3 h-3" /> Storage Usage
                                        </span>
                                        <span className="text-white font-medium">78%</span>
                                    </div>
                                    <div className="w-full bg-[#0c1315] rounded-full h-1.5 border border-white/5">
                                        <div className="bg-[#c9a37e] h-1.5 rounded-full" style={{ width: '78%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* API Keys Warning */}
                        <div className="bg-yellow-500/10 rounded-xl border border-yellow-500/20 p-4 shadow-sm">
                            <div className="flex gap-3">
                                <AlertTriangle className="text-yellow-500 shrink-0 w-5 h-5" />
                                <div>
                                    <h4 className="text-sm font-bold text-yellow-500">Stripe API Key Expiring</h4>
                                    <p className="text-xs text-yellow-500/80 mt-1 leading-relaxed">Your payment gateway key expires in 3 days. Please update it in the Payments tab.</p>
                                    <a className="text-xs font-bold text-yellow-500 mt-2 inline-block hover:underline" href="#">Go to Payments →</a>
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
