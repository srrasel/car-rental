"use client";

import {
  User,
  Save,
  ChevronLeft,
  Loader2
} from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCustomerPage() {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleCreate = async () => {
    if (!name || !email || !password) {
        setError("Please fill in all required fields");
        return;
    }

    setSaving(true);
    setError("");

    try {
      const response = await fetch("/api/admin/customers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password, role }),
      });

      if (response.ok) {
        router.push("/admin/customers");
        router.refresh();
      } else {
        const data = await response.json();
        setError(data.error || "Failed to create customer");
      }
    } catch (error) {
      console.error("Error creating customer:", error);
      setError("Error creating customer");
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="flex h-full flex-col overflow-hidden bg-[#0c1315]">
      {/* Header */}
      <header className="flex h-16 items-center justify-between border-b border-white/5 bg-[#0c1315] px-6 shrink-0 z-10">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => router.push("/admin/customers")}
            className="flex items-center justify-center rounded-lg border border-white/10 bg-[#1a1f21] p-2 text-[#9da6b9] transition-colors hover:bg-white/5 hover:text-white"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <h1 className="text-xl font-bold text-white font-[family-name:var(--font-epilogue)]">
            Create Customer
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleCreate}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-[#c9a37e] px-4 py-2 text-sm font-bold text-[#0c1315] shadow-[0_0_15px_rgba(201,163,126,0.3)] transition-colors hover:bg-[#b89574] disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving ? "Creating..." : "Create Customer"}
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide">
        <div className="mx-auto max-w-3xl space-y-8">
            {error && (
                <div className="bg-red-500/10 border border-red-500/20 text-red-500 px-4 py-3 rounded-lg text-sm">
                    {error}
                </div>
            )}
          
            {/* Form */}
            <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-6">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                  <User className="h-5 w-5 text-[#c9a37e]" />
                  Customer Information
                </h3>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#9da6b9]">Full Name *</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#0c1315] px-4 py-2.5 text-sm text-white placeholder-[#9da6b9] transition-all focus:border-[#c9a37e] focus:outline-none focus:ring-1 focus:ring-[#c9a37e]"
                      placeholder="e.g. John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#9da6b9]">Email Address *</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#0c1315] px-4 py-2.5 text-sm text-white placeholder-[#9da6b9] transition-all focus:border-[#c9a37e] focus:outline-none focus:ring-1 focus:ring-[#c9a37e]"
                      placeholder="e.g. john@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#9da6b9]">Password *</label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#0c1315] px-4 py-2.5 text-sm text-white placeholder-[#9da6b9] transition-all focus:border-[#c9a37e] focus:outline-none focus:ring-1 focus:ring-[#c9a37e]"
                      placeholder="Enter password"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#9da6b9]">Role</label>
                    <select
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#0c1315] px-4 py-2.5 text-sm text-white transition-all focus:border-[#c9a37e] focus:outline-none focus:ring-1 focus:ring-[#c9a37e]"
                    >
                      <option value="user">User</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
