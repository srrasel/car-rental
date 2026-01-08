"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useParams, useSearchParams } from "next/navigation";
import { allCars } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { 
    CreditCard, 
    Check, 
    Wallet, 
    SmartphoneNfc, 
    Lock, 
    HelpCircle, 
    Info, 
    ArrowRight, 
    Calendar, 
    MapPin, 
    Gauge, 
    ShieldCheck,
    ChevronLeft
} from "lucide-react";

export default function PaymentPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const id = params?.id ? parseInt(params.id as string) : null;
    const car = allCars.find(c => c.id === id);

    const startDate = searchParams.get("startDate") || "";
    const endDate = searchParams.get("endDate") || "";
    const extraKm = parseInt(searchParams.get("extraKm") || "0");
    const totalPrice = parseFloat(searchParams.get("totalPrice") || "0");

    // Format dates for display
    const formatDate = (dateString: string) => {
        if (!dateString) return "";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
    };

    const days = (startDate && endDate) ? Math.ceil(Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) || 1 : 0;
    
    // Recalculate breakdown if needed, or just use passed total. 
    // Ideally, we should recalculate to be safe, but for now we'll trust the params or just recalculate for display.
    const rentalCost = days * (car?.price || 0);
    const serviceFee = 45;
    const tax = 62;
    const finalTotal = totalPrice > 0 ? totalPrice + serviceFee + tax : 0;

    if (!car) return <div className="min-h-screen flex items-center justify-center bg-[#0c1315] text-white">Car not found</div>;

    return (
        <main className="min-h-screen bg-[#0c1315] text-white flex flex-col font-sans">
            <Navbar />
            

            <div className="flex-grow pt-24 pb-12">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">
                        {/* Left Column: Payment Form */}
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex flex-col gap-3">
                                <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Secure Payment</h1>
                                <p className="text-[#9da6b9] text-base font-normal">Review your trip details and complete payment to secure your booking.</p>
                            </div>
                            {/* Payment Method Selector */}
                            <div>
                                <h3 className="text-white text-lg font-bold mb-4">Payment Method</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    <button className="relative flex flex-col items-center justify-center p-4 rounded-xl border-2 border-primary bg-primary/10 text-primary transition-all">
                                        <CreditCard className="mb-2 w-8 h-8" />
                                        <span className="text-sm font-semibold">Card</span>
                                        <div className="absolute top-2 right-2 size-4 bg-primary rounded-full flex items-center justify-center">
                                            <Check className="text-white w-3 h-3 font-bold" />
                                        </div>
                                    </button>
                                    <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-700 bg-[#1a2332] text-gray-400 hover:border-primary hover:text-primary transition-all group">
                                        <Wallet className="mb-2 w-8 h-8 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-medium">PayPal</span>
                                    </button>
                                    <button className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-700 bg-[#1a2332] text-gray-400 hover:border-primary hover:text-primary transition-all group">
                                        <SmartphoneNfc className="mb-2 w-8 h-8 group-hover:scale-110 transition-transform" />
                                        <span className="text-sm font-medium">Apple Pay</span>
                                    </button>
                                </div>
                            </div>
                            {/* Credit Card Form */}
                            <div className="bg-[#1a2332] rounded-xl p-6 md:p-8 shadow-sm border border-transparent">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-white text-lg font-bold">Card Details</h3>
                                    <div className="flex gap-2">
                                        {/* Simplified card icons for now */}
                                        <div className="h-6 w-10 bg-gray-700 rounded flex items-center justify-center text-xs text-white">Visa</div>
                                        <div className="h-6 w-10 bg-gray-700 rounded flex items-center justify-center text-xs text-white">MC</div>
                                    </div>
                                </div>
                                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                                    <div className="space-y-1.5">
                                        <label className="text-[#9da6b9] text-sm font-medium">Card Number</label>
                                        <div className="relative">
                                            <input className="w-full bg-[#111318] border border-[#282e39] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="0000 0000 0000 0000" type="text" />
                                            <Lock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-5">
                                        <div className="space-y-1.5">
                                            <label className="text-[#9da6b9] text-sm font-medium">Expiry Date</label>
                                            <input className="w-full bg-[#111318] border border-[#282e39] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="MM / YY" type="text" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[#9da6b9] text-sm font-medium">CVC / CVV</label>
                                            <div className="relative">
                                                <input className="w-full bg-[#111318] border border-[#282e39] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="123" type="text" />
                                                <HelpCircle className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 cursor-help" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-1.5">
                                        <label className="text-[#9da6b9] text-sm font-medium">Cardholder Name</label>
                                        <input className="w-full bg-[#111318] border border-[#282e39] rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all" placeholder="Enter name exactly as on card" type="text" />
                                    </div>
                                    <div className="flex items-center gap-3 pt-2">
                                        <input className="size-4 rounded border-gray-600 bg-[#111318] text-primary focus:ring-primary" id="save-card" type="checkbox" />
                                        <label className="text-[#9da6b9] text-sm" htmlFor="save-card">Save card for future bookings</label>
                                    </div>
                                </form>
                            </div>
                            {/* Action Section */}
                            <div className="flex flex-col gap-4">
                                <div className="flex items-start gap-3 p-4 rounded-lg bg-primary/10 border border-primary/20">
                                    <Info className="text-primary mt-0.5 w-5 h-5" />
                                    <p className="text-sm text-blue-100">
                                        Upon completion, your rental contract will be automatically generated and emailed to your registered address.
                                    </p>
                                </div>
                                <Button className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-gradient-to-br from-[hsl(34,38%,64%)] to-[#e5cca8] font-bold uppercase tracking-widest shadow-md border-0 hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_0_20px_rgba(201,163,126,0.3)] rounded-none px-4 py-2 w-full text-[#0c1315] h-12">
                                    <span>Pay & Book ${finalTotal.toFixed(2)}</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                                <p className="text-center text-xs text-gray-500 mt-2">
                                    By clicking the button, you agree to our <a className="underline hover:text-slate-300" href="#">Terms of Service</a> and <a className="underline hover:text-slate-300" href="#">Privacy Policy</a>.
                                </p>
                                <div className="flex items-center justify-center gap-2 text-gray-600 text-xs mt-2">
                                    <Lock className="w-3 h-3" />
                                    <span>Payments are 256-bit SSL encrypted</span>
                                </div>
                            </div>
                        </div>
                        {/* Right Column: Booking Summary (Sticky) */}
                        <div className="lg:col-span-5 relative">
                            <div className="sticky top-24 flex flex-col gap-6">
                                {/* Summary Card */}
                                <div className="bg-[#1a2332] rounded-xl shadow-[0_0_4px_rgba(0,0,0,0.5)] border border-transparent overflow-hidden">
                                    {/* Car Image & Title */}
                                    <div className="p-4 pb-0">
                                        <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg relative" style={{ backgroundImage: `url('${car.image}')` }}>
                                            <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                                                <p className="text-white text-xs font-bold tracking-wide uppercase">{car.category}</p>
                                            </div>
                                        </div>
                                        <div className="mt-4 mb-2">
                                            <h3 className="text-white text-xl font-bold leading-tight">{car.name}</h3>
                                            <p className="text-[#9da6b9] text-sm mt-1">{car.transmission} • {car.category} • 2-4 Seats</p>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="h-px w-full bg-[#282e39] my-2"></div>
                                    {/* Trip Specifics */}
                                    <div className="p-5 flex flex-col gap-4">
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-[#111318] text-gray-400">
                                                <Calendar className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-[#9da6b9] uppercase tracking-wider font-semibold mb-0.5">Dates</p>
                                                <p className="text-white text-sm font-medium">{startDate ? `${formatDate(startDate)} - ${formatDate(endDate)}` : 'Select dates'}</p>
                                                {days > 0 && <p className="text-xs text-muted-foreground">({days} Days)</p>}
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-[#111318] text-gray-400">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-[#9da6b9] uppercase tracking-wider font-semibold mb-0.5">Pickup & Return</p>
                                                <p className="text-white text-sm font-medium">San Francisco Intl Airport</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="p-2 rounded-lg bg-[#111318] text-gray-400">
                                                <Gauge className="w-5 h-5" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-xs text-[#9da6b9] uppercase tracking-wider font-semibold mb-0.5">Mileage Limit</p>
                                                <p className="text-white text-sm font-medium">500km Included</p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Divider */}
                                    <div className="h-px w-full bg-[#282e39]"></div>
                                    {/* Price Breakdown */}
                                    <div className="p-5 bg-[#15181e]">
                                        <div className="space-y-3">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-[#9da6b9]">Daily Rate (${car.price} x {days})</span>
                                                <span className="text-white font-medium">${rentalCost.toFixed(2)}</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-[#9da6b9]">Full Coverage Insurance</span>
                                                <span className="text-white font-medium">$30.00</span>
                                            </div>
                                            <div className="flex justify-between text-sm">
                                                <span className="text-[#9da6b9]">Taxes & Fees</span>
                                                <span className="text-white font-medium">$62.00</span>
                                            </div>
                                             {extraKm > 0 && (
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-[#9da6b9]">Extra Km ({extraKm}km)</span>
                                                    <span className="text-white font-medium">${(extraKm * 0.35).toFixed(2)}</span>
                                                </div>
                                            )}
                                            <div className="h-px w-full bg-[#282e39] my-2"></div>
                                            <div className="flex justify-between items-end">
                                                <span className="text-white font-bold text-lg">Total Due</span>
                                                <span className="text-primary font-black text-2xl tracking-tight">${finalTotal.toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Support Box */}
                                <div className="rounded-lg border border-[#282e39] p-4 flex items-center justify-between bg-transparent">
                                    <div className="flex items-center gap-3">
                                        <div className="bg-green-900/30 p-2 rounded-full text-green-400">
                                            <ShieldCheck className="w-5 h-5" />
                                        </div>
                                        <div className="text-xs">
                                            <p className="font-bold text-white">Free Cancellation</p>
                                            <p className="text-[#9da6b9]">Before 24h of trip start</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
