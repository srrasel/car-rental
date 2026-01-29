
"use client";

import { 
    Car, 
    Calendar, 
    Bell,
    Edit,
    Printer,
    User as UserIcon,
    MapPin,
    CreditCard,
    Gauge,
    Send,
    Save,
    Flag,
    AlertTriangle,
    CheckCircle2,
    ChevronLeft,
    FileText,
    Loader2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { allCars } from "@/lib/data";
import { cn } from "@/lib/utils";

interface Booking {
    id: string;
    status: string;
    createdAt: string;
    startDate: string;
    endDate: string;
    totalPrice: number;
    carId: number;
    startMileage: number | null;
    endMileage: number | null;
    user: {
        name: string;
        email: string;
    };
}

export default function BookingDetailsPage() {
    const router = useRouter();
    const params = useParams();
    const id = params?.id as string;

    const [booking, setBooking] = useState<Booking | null>(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [sendingInvoice, setSendingInvoice] = useState(false);

    // Form states
    const [status, setStatus] = useState("");
    const [startMileage, setStartMileage] = useState<string>("");
    const [endMileage, setEndMileage] = useState<string>("");

    useEffect(() => {
        if (!id) return;
        const fetchBooking = async () => {
            try {
                const res = await fetch(`/api/admin/bookings/${id}`);
                if (res.ok) {
                    const data = await res.json();
                    setBooking(data);
                    setStatus(data.status);
                    setStartMileage(data.startMileage?.toString() || "");
                    setEndMileage(data.endMileage?.toString() || "");
                } else {
                    console.error("Failed to fetch booking");
                }
            } catch (error) {
                console.error("Error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBooking();
    }, [params.id]);

    const handleUpdate = async () => {
        setSaving(true);
        try {
            const res = await fetch(`/api/admin/bookings/${params.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    status,
                    startMileage: startMileage ? parseInt(startMileage) : null,
                    endMileage: endMileage ? parseInt(endMileage) : null
                })
            });

            if (res.ok) {
                const updated = await res.json();
                setBooking(prev => prev ? { ...prev, ...updated } : null);
                alert("Booking updated successfully");
            } else {
                alert("Failed to update booking");
            }
        } catch (error) {
            console.error("Error updating:", error);
            alert("Error updating booking");
        } finally {
            setSaving(false);
        }
    };

    const handleSendInvoice = async () => {
        if (!id) return;
        setSendingInvoice(true);
        try {
            const res = await fetch(`/api/admin/bookings/${id}/invoice`, {
                method: "POST"
            });
            
            if (res.ok) {
                alert("Invoice sent successfully");
            } else {
                alert("Failed to send invoice");
            }
        } catch (error) {
            console.error("Error sending invoice:", error);
            alert("Error sending invoice");
        } finally {
            setSendingInvoice(false);
        }
    };

    if (loading) {
        return (
            <div className="h-full flex items-center justify-center bg-[#0c1315] text-white">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
        );
    }

    if (!booking) {
        return (
            <div className="h-full flex items-center justify-center bg-[#0c1315] text-white">
                Booking not found
            </div>
        );
    }

    const car = allCars.find(c => c.id === booking.carId);
    
    // Calculations
    const startM = parseInt(startMileage) || 0;
    const endM = parseInt(endMileage) || 0;
    const distanceDriven = Math.max(0, endM - startM);
    
    // Mileage Limit Calculation
    const limitPerDay = (car as any)?.dailyMileageLimit || 100; 
    const extraCostPerKm = (car as any)?.extraMileageCost || 0.50;

    const days = Math.ceil((new Date(booking.endDate).getTime() - new Date(booking.startDate).getTime()) / (1000 * 60 * 60 * 24)) || 1;
    const limit = days * limitPerDay; 
    const excessDistance = Math.max(0, distanceDriven - limit);
    const extraCost = excessDistance * extraCostPerKm;
    const finalTotal = booking.totalPrice + extraCost;

    return (
        <div className="flex h-full flex-col overflow-hidden bg-[#0c1315] relative">
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
                    
                    {/* Top Bar */}
                    <div className="w-full flex justify-between items-center border-b border-white/5 pb-4">
                        <div className="flex items-center gap-2 text-sm text-[#9da6b9]">
                            <button onClick={() => router.back()} className="hover:text-primary transition-colors flex items-center gap-1">
                                <ChevronLeft className="w-4 h-4" />
                                Back
                            </button>
                            <span>/</span>
                            <span className="text-white font-medium">Booking {booking.id.slice(0, 8)}...</span>
                        </div>
                    </div>

                    {/* Page Header */}
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>
                                Booking Details
                            </h1>
                            <div className="flex items-center gap-3">
                                <span className={cn(
                                    "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border uppercase tracking-wider",
                                    status === "PENDING" ? "bg-orange-500/10 text-orange-500 border-orange-500/20" :
                                    status === "CONFIRMED" ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20" :
                                    "bg-red-500/10 text-red-500 border-red-500/20"
                                )}>
                                    <span className={cn("w-1.5 h-1.5 rounded-full", 
                                        status === "PENDING" ? "bg-orange-500" :
                                        status === "CONFIRMED" ? "bg-emerald-500" : "bg-red-500"
                                    )}></span>
                                    {status}
                                </span>
                                <span className="text-[#9da6b9] text-sm font-normal">
                                    Created on {new Date(booking.createdAt).toLocaleDateString()}
                                </span>
                            </div>
                        </div>
                        <div className="flex gap-3">
                            <button 
                                onClick={handleSendInvoice}
                                disabled={sendingInvoice}
                                className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#1a1f21] border border-white/10 text-[#9da6b9] text-sm font-bold hover:bg-white/5 hover:text-white transition-colors disabled:opacity-50"
                            >
                                {sendingInvoice ? <Loader2 className="w-4 h-4 animate-spin" /> : <FileText className="w-4 h-4" />}
                                <span className="hidden sm:inline">Send Invoice</span>
                            </button>
                            <button 
                                onClick={handleUpdate}
                                disabled={saving}
                                className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-primary text-black text-sm font-bold hover:bg-primary/90 transition-colors disabled:opacity-50"
                            >
                                {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                                <span>Save Changes</span>
                            </button>
                        </div>
                    </div>

                    {/* Info Cards Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        
                        {/* Client Card */}
                        <div className="bg-[#1a1f21] rounded-xl p-6 border border-white/5 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                    <UserIcon className="w-5 h-5 text-primary" />
                                    Client Details
                                </h3>
                            </div>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl border border-primary/20">
                                    {booking.user.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="text-white font-bold text-lg">{booking.user.name}</p>
                                    <p className="text-[#9da6b9] text-sm">{booking.user.email}</p>
                                </div>
                            </div>
                        </div>

                        {/* Vehicle Card */}
                        <div className="bg-[#1a1f21] rounded-xl p-6 border border-white/5 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                    <Car className="w-5 h-5 text-primary" />
                                    Vehicle Details
                                </h3>
                            </div>
                            {car ? (
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="h-16 w-24 rounded-lg bg-white/5 bg-cover bg-center border border-white/10 shrink-0" style={{ backgroundImage: `url(${car.image})` }}></div>
                                    <div>
                                        <p className="text-white font-bold text-lg leading-tight">{car.name}</p>
                                        <p className="text-[#9da6b9] text-sm mt-1">CHF {car.price}/day</p>
                                    </div>
                                </div>
                            ) : (
                                <p className="text-white">Car details not found</p>
                            )}
                        </div>

                        {/* Trip Specs */}
                        <div className="bg-[#1a1f21] rounded-xl p-6 border border-white/5 shadow-sm flex flex-col justify-between">
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                    <Calendar className="w-5 h-5 text-primary" />
                                    Trip Specs
                                </h3>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-2.5 h-2.5 bg-primary rounded-full mt-1.5 shadow-[0_0_8px_rgba(201,163,126,0.5)]"></div>
                                        <div className="w-0.5 h-full bg-white/10 min-h-[30px]"></div>
                                        <div className="w-2.5 h-2.5 border-2 border-primary rounded-full bg-[#1a1f21]"></div>
                                    </div>
                                    <div className="flex-1 space-y-6">
                                        <div>
                                            <p className="text-xs text-[#9da6b9] uppercase font-bold tracking-wider mb-1">Pickup</p>
                                            <p className="text-white text-sm font-medium">{new Date(booking.startDate).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-xs text-[#9da6b9] uppercase font-bold tracking-wider mb-1">Return</p>
                                            <p className="text-white text-sm font-medium">{new Date(booking.endDate).toLocaleDateString()}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Management Section */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        
                        {/* Status & Mileage */}
                        <div className="lg:col-span-7 bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
                            <div className="p-6 border-b border-white/5">
                                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                    <Edit className="w-5 h-5 text-primary" />
                                    Booking Management
                                </h3>
                            </div>
                            <div className="p-6 grid gap-8">
                                {/* Status Selector */}
                                <div>
                                    <label className="block text-xs font-bold text-[#9da6b9] uppercase tracking-wider mb-2">Booking Status</label>
                                    <select 
                                        value={status}
                                        onChange={(e) => setStatus(e.target.value)}
                                        className="w-full bg-black/20 border border-white/10 text-white h-12 px-4 rounded-lg focus:ring-1 focus:ring-primary focus:border-primary outline-none"
                                    >
                                        <option value="PENDING">PENDING</option>
                                        <option value="CONFIRMED">CONFIRMED</option>
                                        <option value="CANCELLED">CANCELLED</option>
                                        <option value="COMPLETED">COMPLETED</option>
                                    </select>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-6">
                                    {/* Start Mileage */}
                                    <div className="flex-1">
                                        <label className="block text-xs font-bold text-[#9da6b9] uppercase tracking-wider mb-2">Start Mileage</label>
                                        <div className="relative group">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <MapPin className="w-5 h-5 text-[#9da6b9]" />
                                            </div>
                                            <input 
                                                className="block w-full pl-10 pr-12 py-3 bg-black/20 border border-white/10 rounded-lg text-white text-lg font-mono font-medium focus:ring-primary focus:border-primary outline-none" 
                                                type="number" 
                                                value={startMileage}
                                                onChange={(e) => setStartMileage(e.target.value)}
                                                placeholder="0"
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-[#9da6b9] text-sm font-medium">km</span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* End Mileage */}
                                    <div className="flex-1">
                                        <label className="block text-xs font-bold text-primary uppercase tracking-wider mb-2">End Mileage</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Flag className="w-5 h-5 text-primary" />
                                            </div>
                                            <input 
                                                className="block w-full pl-10 pr-12 py-3 bg-[#0c1315] border-2 border-primary rounded-lg text-white text-lg font-mono font-bold focus:ring-0 focus:border-primary shadow-[0_0_15px_rgba(201,163,126,0.1)] transition-all outline-none" 
                                                placeholder="0" 
                                                type="number" 
                                                value={endMileage}
                                                onChange={(e) => setEndMileage(e.target.value)}
                                            />
                                            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                                <span className="text-white/50 font-medium text-sm">km</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Driven Visualization */}
                                <div className="bg-[#0c1315] rounded-lg p-5 flex flex-col sm:flex-row items-center justify-between gap-4 border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                                            <Gauge className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <p className="text-[#9da6b9] text-xs uppercase font-bold tracking-wider">Total Distance Driven</p>
                                            <p className="text-2xl font-black text-white">{distanceDriven} <span className="text-sm font-medium text-[#9da6b9]">km</span></p>
                                        </div>
                                    </div>
                                    {/* Status Pill */}
                                    {excessDistance > 0 ? (
                                        <div className="px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-full flex items-center gap-2">
                                            <AlertTriangle className="w-4 h-4 text-red-500" />
                                            <span className="text-red-500 text-sm font-bold">Over Limit (+{excessDistance}km)</span>
                                        </div>
                                    ) : (
                                        <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                                            <span className="text-emerald-500 text-sm font-bold">Within Limit</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Cost Summary */}
                        <div className="lg:col-span-5 flex flex-col">
                            <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm p-6 flex-1">
                                <h3 className="text-lg font-bold text-white mb-6">Financial Summary</h3>
                                <div className="space-y-4">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#9da6b9]">Base Rental ({days} days)</span>
                                        <span className="text-white font-medium">CHF {booking.totalPrice.toFixed(2)}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <div className="flex flex-col">
                                            <span className="text-[#9da6b9]">Extra Mileage ({excessDistance} km)</span>
                                            <span className="text-xs text-[#9da6b9]/50">Limit: {limit}km • Rate: {extraCostPerKm.toFixed(2)}/km</span>
                                        </div>
                                        <span className="text-white font-medium">CHF {extraCost.toFixed(2)}</span>
                                    </div>
                                    <div className="border-t border-white/10 pt-4 mt-4 flex justify-between items-center">
                                        <span className="text-white font-bold text-lg">Total</span>
                                        <span className="text-primary font-bold text-2xl">CHF {finalTotal.toFixed(2)}</span>
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
