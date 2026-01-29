"use client";

import {
  Settings as SettingsIcon,
  Search,
  Bell,
  Globe,
  LifeBuoy,
  ChevronDown,
  Monitor,
  Mail,
  Phone,
  DollarSign,
  Network,
  Lock,
  Eye,
  EyeOff,
  Tags,
  Download,
  Loader2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface SettingsData {
  platformName: string;
  supportEmail: string;
  supportPhone: string;
  currency: string;
  timezone: string;
  language: string;
  dateFormat: string;
  maintenanceMode: boolean;
  logo: string | null;
  // Payment Settings
  stripePublishableKey: string;
  stripeSecretKey: string;
  stripeLiveMode: boolean;
  paypalClientId: string;
  paypalSecret: string;
  paypalLiveMode: boolean;
}

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");
  const [showSecret, setShowSecret] = useState(false);
  const [showPaypalSecret, setShowPaypalSecret] = useState(false);
  
  // Dynamic State
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [settings, setSettings] = useState<SettingsData>({
    platformName: "",
    supportEmail: "",
    supportPhone: "",
    currency: "USD",
    timezone: "(GMT+00:00) UTC",
    language: "English (US)",
    dateFormat: "MM/DD/YYYY",
    maintenanceMode: false,
    logo: null,
    stripePublishableKey: "",
    stripeSecretKey: "",
    stripeLiveMode: false,
    paypalClientId: "",
    paypalSecret: "",
    paypalLiveMode: false,
  });

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const res = await fetch("/api/admin/settings");
      if (res.ok) {
        const data = await res.json();
        setSettings({
          platformName: data.platformName || "",
          supportEmail: data.supportEmail || "",
          supportPhone: data.supportPhone || "",
          currency: data.currency || "USD",
          timezone: data.timezone || "(GMT+00:00) UTC",
          language: data.language || "English (US)",
          dateFormat: data.dateFormat || "MM/DD/YYYY",
          maintenanceMode: data.maintenanceMode || false,
          logo: data.logo || null,
          stripePublishableKey: data.stripePublishableKey || "",
          stripeSecretKey: data.stripeSecretKey || "",
          stripeLiveMode: data.stripeLiveMode || false,
          paypalClientId: data.paypalClientId || "",
          paypalSecret: data.paypalSecret || "",
          paypalLiveMode: data.paypalLiveMode || false,
        });
      }
    } catch (error) {
      console.error("Failed to fetch settings", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    setSaving(true);
    try {
      const res = await fetch("/api/admin/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      
      if (res.ok) {
        alert("Settings saved successfully!");
      } else {
        const errorData = await res.text();
        console.error("Save failed:", errorData);
        alert("Failed to save settings. Please check console for details.");
      }
    } catch (error) {
      console.error("Error saving settings", error);
      alert("An error occurred while saving.");
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (field: keyof SettingsData, value: string | boolean) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0c1315]">
        <Loader2 className="h-8 w-8 animate-spin text-[#c9a37e]" />
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315] relative">
        {/* Top Header */}
        <header className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0c1315]/95 backdrop-blur-sm px-8 z-10">
            <div className="flex items-center gap-4 text-white">
                <div className="flex items-center gap-2">
                    <SettingsIcon className="text-[#c9a37e] w-6 h-6" />
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
                            <h1 className="text-3xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                                {activeTab === "general" ? "Platform Settings" : "Payment Configuration"}
                            </h1>
                            <p className="text-[#9da6b9] text-base">
                                {activeTab === "general" 
                                    ? "Manage your car rental platform configurations, preferences, and integrations." 
                                    : "Manage payment gateways, pricing rules, and payout schedules for the platform."}
                            </p>
                        </div>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => fetchSettings()}
                                className="px-5 h-10 rounded-lg border border-white/10 text-slate-300 font-medium hover:bg-white/5 transition-colors"
                            >
                                Discard
                            </button>
                            <button 
                                onClick={handleSave}
                                disabled={saving}
                                className="px-5 h-10 rounded-lg bg-[#c9a37e] text-[#0c1315] font-bold hover:bg-[#c9a37e]/90 transition-colors shadow-lg shadow-[#c9a37e]/20 disabled:opacity-70 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                {saving && <Loader2 className="w-4 h-4 animate-spin" />}
                                {saving ? "Saving..." : "Save Changes"}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Tabs */}
                <div className="border-b border-white/5 overflow-x-auto">
                    <nav aria-label="Tabs" className="flex space-x-8 min-w-max">
                        <button 
                            onClick={() => setActiveTab("general")}
                            className={cn(
                                "border-b-2 py-4 px-1 text-sm font-medium transition-colors outline-none",
                                activeTab === "general" 
                                    ? "border-[#c9a37e] text-[#c9a37e] font-bold" 
                                    : "border-transparent text-[#9da6b9] hover:border-white/20 hover:text-white"
                            )}
                        >
                            General
                        </button>
                        <button 
                            onClick={() => setActiveTab("payments")}
                            className={cn(
                                "border-b-2 py-4 px-1 text-sm font-medium transition-colors outline-none",
                                activeTab === "payments" 
                                    ? "border-[#c9a37e] text-[#c9a37e] font-bold" 
                                    : "border-transparent text-[#9da6b9] hover:border-white/20 hover:text-white"
                            )}
                        >
                            Payments
                        </button>
                    </nav>
                </div>

                {/* General Content */}
                {activeTab === "general" && (
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
                                        <input 
                                            className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600" 
                                            placeholder="Enter platform name" 
                                            type="text" 
                                            value={settings.platformName}
                                            onChange={(e) => handleChange("platformName", e.target.value)}
                                        />
                                        <p className="text-xs text-[#9da6b9]">This name will appear in emails and the browser title.</p>
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium text-slate-300">Logo</label>
                                        <div className="flex items-center gap-6">
                                            <div className="size-20 rounded-lg border-2 border-dashed border-white/10 flex items-center justify-center bg-[#0c1315] relative overflow-hidden">
                                                <Image 
                                                    src={settings.logo || "https://lh3.googleusercontent.com/aida-public/AB6AXuAxeRwgHl4ntggxhrA8sL5C9Rp2HJn2FbsHhv77BgbzKWUfBOawlpHznsNGL0aLxsjqsdnAYgu5hTUnMrTvthRh_fQirvawF6fc6Nq2QHc552EqbQz_27yAGb5QMyw9_Tu3ITt0LYpDycvIMRglKCa7E0EkK8lOSRxpqqnxfgmfh4xk_ysQ9PSPZrm85lI8j4IJk9dYrVT8t6C50-wFhPLdTcjLEitJsnvrMOCHKbPADXP0ChC_sQwP0KY4hHuVsjSONFGDkWT8xxEZ"}
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
                                            <select 
                                                className="w-full appearance-none bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-10"
                                                value={settings.currency}
                                                onChange={(e) => handleChange("currency", e.target.value)}
                                            >
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
                                            <select 
                                                className="w-full appearance-none bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-10"
                                                value={settings.timezone}
                                                onChange={(e) => handleChange("timezone", e.target.value)}
                                            >
                                                <option>(GMT-08:00) Pacific Time</option>
                                                <option>(GMT-05:00) Eastern Time</option>
                                                <option>(GMT+00:00) UTC</option>
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
                                            <select 
                                                className="w-full appearance-none bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-10"
                                                value={settings.language}
                                                onChange={(e) => handleChange("language", e.target.value)}
                                            >
                                                <option>English (US)</option>
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
                                            <select 
                                                className="w-full appearance-none bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all pr-10"
                                                value={settings.dateFormat}
                                                onChange={(e) => handleChange("dateFormat", e.target.value)}
                                            >
                                                <option>MM/DD/YYYY</option>
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
                        </div>

                        {/* Right Column (Narrower) */}
                        <div className="flex flex-col gap-6">
                            {/* Support Information */}
                            <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-green-500/10 rounded-lg text-green-400">
                                        <LifeBuoy className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Support Info</h3>
                                </div>
                                <div className="grid gap-4">
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium text-slate-300">Support Email</label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                                            <input 
                                                className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600" 
                                                placeholder="support@example.com" 
                                                type="email" 
                                                value={settings.supportEmail}
                                                onChange={(e) => handleChange("supportEmail", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="grid gap-2">
                                        <label className="text-sm font-medium text-slate-300">Support Phone</label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                                            <input 
                                                className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600" 
                                                placeholder="+1 (555) 000-0000" 
                                                type="tel" 
                                                value={settings.supportPhone}
                                                onChange={(e) => handleChange("supportPhone", e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Preferences */}
                            <div className="bg-[#1a1f21] rounded-xl border border-white/5 p-6 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="p-2 bg-orange-500/10 rounded-lg text-orange-400">
                                        <SettingsIcon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>System</h3>
                                </div>
                                <div className="flex items-center justify-between p-3 bg-[#0c1315] rounded-lg border border-white/5">
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm font-medium text-white">Maintenance Mode</span>
                                        <span className="text-xs text-[#9da6b9]">Disable public access</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input 
                                            type="checkbox" 
                                            className="sr-only peer" 
                                            checked={settings.maintenanceMode}
                                            onChange={(e) => handleChange("maintenanceMode", e.target.checked)}
                                        />
                                        <div className="w-11 h-6 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Payments Content */}
                {activeTab === "payments" && (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column (Payment Gateways) */}
                        <div className="lg:col-span-2 flex flex-col gap-6">
                            {/* Stripe Configuration */}
                            <section>
                                <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                                    <Network className="w-5 h-5 text-[#c9a37e]" />
                                    Payment Gateways
                                </h2>
                                <div className="flex flex-col gap-6">
                                    {/* Stripe Card */}
                                    <div className="bg-[#1a1f21] rounded-xl border border-white/10 overflow-hidden">
                                        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#1a1f21]">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-[#635BFF] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">S</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-white">Stripe Integration</h3>
                                                    <p className="text-sm text-[#9da6b9]">Credit cards, Apple Pay, Google Pay</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                                                <span className="text-sm text-emerald-400 font-medium">Active</span>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-[#1a1f21]/50">
                                            <div className="grid gap-5">
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium text-slate-300">Publishable Key</label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                                                        <input 
                                                            className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600 font-mono text-sm" 
                                                            placeholder="pk_test_..." 
                                                            type="text"
                                                            value={settings.stripePublishableKey}
                                                            onChange={(e) => handleChange("stripePublishableKey", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium text-slate-300">Secret Key</label>
                                                    <div className="relative group">
                                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                                                        <input 
                                                            className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-12 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600 font-mono text-sm" 
                                                            placeholder="sk_test_..." 
                                                            type={showSecret ? "text" : "password"}
                                                            value={settings.stripeSecretKey}
                                                            onChange={(e) => handleChange("stripeSecretKey", e.target.value)}
                                                        />
                                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                            <button 
                                                                type="button"
                                                                onClick={() => setShowSecret(!showSecret)}
                                                                className="text-[#9da6b9] hover:text-white transition-colors"
                                                            >
                                                                {showSecret ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-5 flex items-center gap-4 pt-4 border-t border-white/5">
                                                    <label className="inline-flex items-center cursor-pointer group">
                                                        <div className="relative">
                                                            <input 
                                                                type="checkbox" 
                                                                className="sr-only peer" 
                                                                checked={settings.stripeLiveMode}
                                                                onChange={(e) => handleChange("stripeLiveMode", e.target.checked)}
                                                            />
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
                                    <div className="bg-[#1a1f21] rounded-xl border border-white/10 overflow-hidden">
                                        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-[#1a1f21]">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 rounded-lg bg-[#003087] flex items-center justify-center flex-shrink-0 text-white font-bold text-xl">P</div>
                                                <div>
                                                    <h3 className="text-base font-bold text-white">PayPal Integration</h3>
                                                    <p className="text-sm text-[#9da6b9]">Alternative payment method for wallets.</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <span className="flex h-2.5 w-2.5 rounded-full bg-gray-500"></span>
                                                <span className="text-sm text-gray-400 font-medium">Inactive</span>
                                            </div>
                                        </div>
                                        <div className="p-6 bg-[#1a1f21]/50">
                                            <div className="grid gap-5">
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium text-slate-300">Client ID</label>
                                                    <div className="relative">
                                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                                                        <input 
                                                            className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600 font-mono text-sm" 
                                                            placeholder="Client ID..." 
                                                            type="text"
                                                            value={settings.paypalClientId}
                                                            onChange={(e) => handleChange("paypalClientId", e.target.value)}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="grid gap-2">
                                                    <label className="text-sm font-medium text-slate-300">Secret</label>
                                                    <div className="relative group">
                                                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9da6b9] w-4 h-4" />
                                                        <input 
                                                            className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-12 py-2.5 text-white focus:ring-1 focus:ring-[#c9a37e] focus:border-[#c9a37e] outline-none transition-all placeholder:text-gray-600 font-mono text-sm" 
                                                            placeholder="Secret..." 
                                                            type={showPaypalSecret ? "text" : "password"}
                                                            value={settings.paypalSecret}
                                                            onChange={(e) => handleChange("paypalSecret", e.target.value)}
                                                        />
                                                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                                                            <button 
                                                                type="button"
                                                                onClick={() => setShowPaypalSecret(!showPaypalSecret)}
                                                                className="text-[#9da6b9] hover:text-white transition-colors"
                                                            >
                                                                {showPaypalSecret ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-5 flex items-center gap-4 pt-4 border-t border-white/5">
                                                    <label className="inline-flex items-center cursor-pointer group">
                                                        <div className="relative">
                                                            <input 
                                                                type="checkbox" 
                                                                className="sr-only peer" 
                                                                checked={settings.paypalLiveMode}
                                                                onChange={(e) => handleChange("paypalLiveMode", e.target.checked)}
                                                            />
                                                            <div className="w-9 h-5 bg-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#c9a37e]"></div>
                                                        </div>
                                                        <span className="ms-3 text-sm font-medium text-white group-hover:text-[#c9a37e] transition-colors">Live Mode</span>
                                                    </label>
                                                </div>
                                            </div>
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
