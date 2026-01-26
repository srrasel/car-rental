"use client";

import { Bell, Shield, Moon, Globe, ChevronRight, LogOut, Trash2 } from "lucide-react";
import { signOut } from "next-auth/react";

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white font-[family-name:var(--font-epilogue)]">
          Settings
        </h1>
        <p className="text-[#9da6b9] mt-2 text-base">
          Manage your account preferences and application settings.
        </p>
      </div>

      <div className="space-y-6">
        {/* Notifications */}
        <section className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Bell className="w-5 h-5 text-[#c9a37e]" />
              Notifications
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Email Notifications</p>
                <p className="text-sm text-[#9da6b9]">Receive emails about your rentals and account activity.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-[#0c1315] border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a37e]"></div>
              </label>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Push Notifications</p>
                <p className="text-sm text-[#9da6b9]">Receive push notifications on your mobile device.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" defaultChecked />
                <div className="w-11 h-6 bg-[#0c1315] border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a37e]"></div>
              </label>
            </div>
             <div className="flex items-center justify-between">
              <div>
                <p className="text-white font-medium">Marketing Emails</p>
                <p className="text-sm text-[#9da6b9]">Receive offers, promotions, and news.</p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-[#0c1315] border border-white/10 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c9a37e]"></div>
              </label>
            </div>
          </div>
        </section>

        {/* Preferences */}
        <section className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Globe className="w-5 h-5 text-[#c9a37e]" />
              Preferences
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            <button className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left">
               <div className="flex items-center gap-3">
                   <div className="bg-[#0c1315] p-2 rounded-lg">
                       <Globe className="w-4 h-4 text-[#9da6b9]" />
                   </div>
                   <div>
                       <p className="text-white font-medium">Language</p>
                       <p className="text-sm text-[#9da6b9]">English (United States)</p>
                   </div>
               </div>
               <ChevronRight className="w-5 h-5 text-[#9da6b9]" />
            </button>
             <button className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left">
               <div className="flex items-center gap-3">
                   <div className="bg-[#0c1315] p-2 rounded-lg">
                       <Moon className="w-4 h-4 text-[#9da6b9]" />
                   </div>
                   <div>
                       <p className="text-white font-medium">Theme</p>
                       <p className="text-sm text-[#9da6b9]">Dark Mode (System Default)</p>
                   </div>
               </div>
               <ChevronRight className="w-5 h-5 text-[#9da6b9]" />
            </button>
          </div>
        </section>

        {/* Privacy & Security */}
        <section className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-white/5">
            <h2 className="text-lg font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-[#c9a37e]" />
              Privacy & Security
            </h2>
          </div>
          <div className="divide-y divide-white/5">
            <button className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left">
               <div>
                   <p className="text-white font-medium">Two-Factor Authentication</p>
                   <p className="text-sm text-[#9da6b9]">Add an extra layer of security to your account.</p>
               </div>
               <span className="text-emerald-500 text-sm font-medium bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">Enabled</span>
            </button>
             <button className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors text-left">
               <div>
                   <p className="text-white font-medium">Login History</p>
                   <p className="text-sm text-[#9da6b9]">View your recent login activity.</p>
               </div>
               <ChevronRight className="w-5 h-5 text-[#9da6b9]" />
            </button>
          </div>
        </section>

        {/* Danger Zone */}
        <section className="bg-[#1a1f21] rounded-xl border border-red-500/20 shadow-sm overflow-hidden">
           <div className="p-6 border-b border-white/5">
            <h2 className="text-lg font-bold text-red-500 flex items-center gap-2">
              Danger Zone
            </h2>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-white font-medium">Log Out</p>
                    <p className="text-sm text-[#9da6b9]">Sign out of your account on all devices.</p>
                </div>
                <button 
                  onClick={() => signOut({ callbackUrl: '/login' })}
                  className="flex items-center gap-2 px-4 py-2 bg-[#0c1315] border border-white/10 hover:border-white/30 text-white rounded-lg transition-colors"
                >
                    <LogOut className="w-4 h-4" />
                    Log Out
                </button>
            </div>
            <div className="w-full h-px bg-white/5"></div>
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-white font-medium">Delete Account</p>
                    <p className="text-sm text-[#9da6b9]">Permanently delete your account and all data.</p>
                </div>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 hover:bg-red-500/20 text-red-500 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                    Delete Account
                </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
