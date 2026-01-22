"use client";

import { User, Mail, Phone, MapPin, Lock, Save, Camera, ShieldCheck } from "lucide-react";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-epilogue)]">
          My Profile
        </h1>
        <p className="text-[#9da6b9] mt-2 text-base">
          Manage your personal information and account security.
        </p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        {/* Left Column - Basic Info */}
        <div className="xl:col-span-8 flex flex-col gap-8">
          {/* Profile Header Card */}
          <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="relative group">
              <div className="relative h-24 w-24 rounded-full overflow-hidden bg-slate-700 border-4 border-[#0c1315]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_G0mpiIeb5uGbQnmo6uLlFDmBfaQk3AMWxRCZhfrlFxYSCCx4nxmtoZF5AGgpveoymoOqo8X3L2PxC6g0z64PnkcgLt1K69XXj7gHTX8i87J3IvePdG1hJy8fQWntiyx75dgbURYQ6oSQtTDmWihiBuXHx-fpz9njXc3lAHO-oCtNbzvgkDo46vH-J2UpYOsXLxnjF66WKhJjRl4X81FcxwHYeWW2XV1ft_qO9TJRwhI_xNkMe69cLpHXO9pm58T-vciPr4ID2HCe"
                  alt="Profile"
                  fill
                  className="object-cover"
                />
              </div>
              <button className="absolute bottom-0 right-0 bg-[#c9a37e] text-[#0c1315] p-1.5 rounded-full border-2 border-[#1a1f21] hover:bg-[#b89574] transition-colors">
                <Camera className="w-4 h-4" />
              </button>
            </div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-bold text-white">Alex Morgan</h2>
              <p className="text-[#9da6b9]">Gold Member • Joined Jan 2024</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    Identity Verified
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                    <Mail className="w-3.5 h-3.5" />
                    Email Verified
                </span>
              </div>
            </div>
          </div>

          {/* Personal Information Form */}
          <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-8">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-[#c9a37e]" />
              Personal Information
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">First Name</label>
                <input
                  type="text"
                  defaultValue="Alex"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Last Name</label>
                <input
                  type="text"
                  defaultValue="Morgan"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 w-5 h-5 text-[#9da6b9]" />
                  <input
                    type="email"
                    defaultValue="alex.m@example.com"
                    className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Phone Number</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 w-5 h-5 text-[#9da6b9]" />
                  <input
                    type="tel"
                    defaultValue="+1 (555) 123-4567"
                    className="w-full bg-[#0c1315] border border-white/10 rounded-lg pl-10 pr-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                  />
                </div>
              </div>
            </form>
          </div>

          {/* Address Information */}
          <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-8">
             <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-[#c9a37e]" />
              Address Details
            </h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Street Address</label>
                <input
                  type="text"
                  defaultValue="123 Luxury Lane, Apt 4B"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">City</label>
                <input
                  type="text"
                  defaultValue="Los Angeles"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">State / Province</label>
                <input
                  type="text"
                  defaultValue="California"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Postal Code</label>
                <input
                  type="text"
                  defaultValue="90001"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Country</label>
                <input
                  type="text"
                  defaultValue="United States"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
            </form>
          </div>
        </div>

        {/* Right Column - Security & Save */}
        <div className="xl:col-span-4 flex flex-col gap-8">
           {/* Save Changes Widget */}
           <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-bold text-white mb-4">Account Actions</h3>
              <p className="text-sm text-[#9da6b9] mb-6">
                Make sure to save your changes after updating your information.
              </p>
              <div className="flex flex-col gap-3">
                 <button className="flex items-center justify-center gap-2 bg-[#c9a37e] hover:bg-[#b89574] text-[#0c1315] py-3 px-4 rounded-lg font-bold text-sm transition-all shadow-[0_0_15px_rgba(201,163,126,0.3)]">
                    <Save className="w-4 h-4" />
                    Save Changes
                </button>
                <button className="flex items-center justify-center gap-2 border border-white/10 hover:bg-white/5 text-white py-3 px-4 rounded-lg font-medium text-sm transition-colors">
                    Cancel
                </button>
              </div>
           </div>

           {/* Security Settings */}
           <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6">
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#c9a37e]" />
              Security
            </h3>
            <form className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Current Password</label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">New Password</label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-[#9da6b9]">Confirm Password</label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="w-full bg-[#0c1315] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#c9a37e] focus:ring-1 focus:ring-[#c9a37e] transition-colors"
                />
              </div>
              <button className="w-full mt-2 text-[#c9a37e] hover:text-[#b89574] text-sm font-medium hover:underline transition-colors text-left">
                Enable Two-Factor Authentication
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
