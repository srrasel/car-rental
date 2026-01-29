"use client";

import {
  User,
  Mail,
  Shield,
  Calendar,
  Save,
  Trash2,
  ChevronLeft,
  Loader2,
  Car
} from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import Link from "next/link";
import { allCars } from "@/lib/data";

interface Booking {
  id: string;
  carId: number;
  startDate: string;
  endDate: string;
  totalPrice: number;
  status: string;
  createdAt: string;
}

interface Customer {
  id: string;
  name: string;
  email: string;
  role: string;
  image: string | null;
  bookings: Booking[];
}

export default function CustomerDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const id = params?.id as string;

  const [customer, setCustomer] = useState<Customer | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  useEffect(() => {
    if (!id) return;
    fetchCustomer();
  }, [id]);

  const fetchCustomer = async () => {
    try {
      const response = await fetch(`/api/admin/customers/${id}`);
      if (response.ok) {
        const data = await response.json();
        setCustomer(data);
        setName(data.name || "");
        setEmail(data.email || "");
        setRole(data.role || "user");
      } else {
        console.error("Failed to fetch customer");
        router.push("/admin/customers");
      }
    } catch (error) {
      console.error("Error fetching customer:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async () => {
    setSaving(true);
    try {
      const response = await fetch(`/api/admin/customers/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, role }),
      });

      if (response.ok) {
        const updated = await response.json();
        setCustomer(prev => prev ? { ...prev, ...updated } : null);
        alert("Customer updated successfully");
      } else {
        alert("Failed to update customer");
      }
    } catch (error) {
      console.error("Error updating customer:", error);
      alert("Error updating customer");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this customer? This action cannot be undone.")) return;
    
    setDeleting(true);
    try {
      const response = await fetch(`/api/admin/customers/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Customer deleted successfully");
        router.push("/admin/customers");
      } else {
        alert("Failed to delete customer");
      }
    } catch (error) {
      console.error("Error deleting customer:", error);
      alert("Error deleting customer");
    } finally {
      setDeleting(false);
    }
  };

  if (loading) {
    return (
      <div className="flex h-full items-center justify-center bg-[#0c1315]">
        <Loader2 className="w-8 h-8 animate-spin text-[#c9a37e]" />
      </div>
    );
  }

  if (!customer) return null;

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
            Customer Details
          </h1>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDelete}
            disabled={deleting}
            className="flex items-center gap-2 rounded-lg bg-red-500/10 border border-red-500/20 px-4 py-2 text-sm font-medium text-red-500 transition-colors hover:bg-red-500/20 disabled:opacity-50"
          >
            <Trash2 className="h-4 w-4" />
            {deleting ? "Deleting..." : "Delete Customer"}
          </button>
          <button
            onClick={handleUpdate}
            disabled={saving}
            className="flex items-center gap-2 rounded-lg bg-[#c9a37e] px-4 py-2 text-sm font-bold text-[#0c1315] shadow-[0_0_15px_rgba(201,163,126,0.3)] transition-colors hover:bg-[#b89574] disabled:opacity-50"
          >
            <Save className="h-4 w-4" />
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-y-auto p-6 md:p-8 scrollbar-hide">
        <div className="mx-auto max-w-5xl space-y-8">
          
          {/* Profile Card */}
          <div className="grid gap-8 md:grid-cols-[300px_1fr]">
            <div className="space-y-6">
              <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-6 text-center">
                <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-slate-700 relative border-4 border-[#0c1315]">
                  <Image
                    src={customer.image || `https://ui-avatars.com/api/?name=${encodeURIComponent(customer.name)}&background=random`}
                    alt={customer.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h2 className="text-xl font-bold text-white">{customer.name}</h2>
                <p className="text-sm text-[#9da6b9]">{customer.email}</p>
                <div className="mt-4 flex justify-center">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      role === 'admin' 
                          ? 'bg-purple-500/20 text-purple-400 border-purple-500/30' 
                          : 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                  }`}>
                      <Shield className="w-3.5 h-3.5 mr-1" />
                      {role.toUpperCase()}
                  </span>
                </div>
              </div>

              <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-6">
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#9da6b9]">Stats</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Total Bookings</span>
                    <span className="text-sm font-medium text-[#c9a37e]">{customer.bookings?.length || 0}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-white">Member Since</span>
                    <span className="text-sm font-medium text-[#9da6b9]">
                        {/* Assuming ID is CUID, not really timestamp, but for now just showing something or fetch createdAt if available */}
                        Unknown
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Form */}
            <div className="space-y-6">
              <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-6">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                  <User className="h-5 w-5 text-[#c9a37e]" />
                  Personal Information
                </h3>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#9da6b9]">Full Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#0c1315] px-4 py-2.5 text-sm text-white placeholder-[#9da6b9] transition-all focus:border-[#c9a37e] focus:outline-none focus:ring-1 focus:ring-[#c9a37e]"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-[#9da6b9]">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg border border-white/10 bg-[#0c1315] px-4 py-2.5 text-sm text-white placeholder-[#9da6b9] transition-all focus:border-[#c9a37e] focus:outline-none focus:ring-1 focus:ring-[#c9a37e]"
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

              {/* Booking History */}
              <div className="rounded-xl border border-white/5 bg-[#1a1f21] p-6">
                <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-white">
                  <Calendar className="h-5 w-5 text-[#c9a37e]" />
                  Booking History
                </h3>
                
                {(!customer.bookings || customer.bookings.length === 0) ? (
                    <div className="text-center py-8 text-[#9da6b9]">No bookings found.</div>
                ) : (
                    <div className="space-y-4">
                        {customer.bookings.map((booking) => {
                            const car = allCars.find(c => c.id === booking.carId);
                            return (
                                <div key={booking.id} className="flex items-center justify-between p-4 rounded-lg bg-[#0c1315] border border-white/5 hover:border-white/10 transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="h-12 w-12 rounded-lg bg-slate-800 relative overflow-hidden">
                                            {car && <Image src={car.image} alt={car.name} fill className="object-cover" />}
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-white">{car ? car.name : `Car #${booking.carId}`}</p>
                                            <p className="text-xs text-[#9da6b9]">
                                                {new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm font-bold text-white">${booking.totalPrice}</p>
                                        <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-medium uppercase tracking-wider ${
                                            booking.status === 'CONFIRMED' ? 'bg-emerald-500/10 text-emerald-500' :
                                            booking.status === 'PENDING' ? 'bg-yellow-500/10 text-yellow-500' :
                                            'bg-red-500/10 text-red-500'
                                        }`}>
                                            {booking.status}
                                        </span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
