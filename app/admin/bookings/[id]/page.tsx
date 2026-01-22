"use client";

import { 
    Car, 
    Calendar, 
    Bell,
    Edit,
    Printer,
    User,
    MapPin,
    CreditCard,
    Gauge,
    Send,
    Save,
    Flag,
    AlertTriangle,
    CheckCircle2
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function BookingDetailsPage({ params }: { params: { id: string } }) {
    // Mock data based on the snippet
    const booking = {
        id: `#${params.id}`,
        status: "Awaiting Return",
        createdOn: "Oct 10, 2023",
        client: {
            name: "John Doe",
            location: "Zurich, Switzerland",
            phone: "+41 79 123 45 67",
            license: "CH-882910",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmpf_tIu47jJAhiRFjmOxtV7MOrtNXEgV0Z_HaxyE1aqxuGNlbcgfb9gpxhHOn5yJCp82nE7MsbZ2m3Z90rbprjnDUvp45g5fHpWLREEpBxAHdEoFLE83s3NJdN4zI634Fh1wEiluYQipKL0iLpP2lUAU7MePRRkFNTZ728S_NqDJncWI0IajzGh1Gyw8_9jHLB8mW39ODXtyRsPKjIq3uT1oSHk5uY1fgJJpgEdEtnVRYRKp0gu0y6_GqvgQphcbwpujC4kW5sNFI"
        },
        vehicle: {
            name: "Tesla Model 3",
            trim: "Long Range AWD",
            plate: "ZH-123456",
            color: "Pearl White",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB24AWciQw_VL6Hvxu3tsoC_OKAcxfI0ivvrBKgGtBu__Qs563ampAZ-2kPRtHZPO_uHhyGloiLAZm1IZ7OssNRrm6roxJjTQzvA37HY8JAZLHwJ_ciZIHdjglZL1-WoUsSTTGKhsbe3Ih7eVzAWixqUGAqY3xn3jKgm6b8IWazW5oeAiRLWKEH9Iuka7P2IaCxj2N4OlGD2_0sqfI6YhKP8hVG6-jDBptFNxRAkaMGQbpWfNmepSUvar29Vi6HL9Mm_yfc1SJDuvq2"
        },
        trip: {
            pickup: "Oct 12, 2023 • 10:00 AM",
            return: "Oct 15, 2023 • 10:00 AM",
            includedMileage: "500 km"
        },
        mileage: {
            start: 12500,
            end: 13085,
            limit: 500,
            rate: 0.50
        }
    };

    const [endMileage, setEndMileage] = useState(booking.mileage.end);
    
    const distanceDriven = endMileage - booking.mileage.start;
    const excessDistance = Math.max(0, distanceDriven - booking.mileage.limit);
    const extraCost = excessDistance * booking.mileage.rate;

    return (
        <div className="flex h-full flex-col overflow-hidden bg-[#0c1315] relative">
            <div className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-8">
                    
                    {/* Top Bar (Optional, to match snippet functionality but keeping admin style) */}
                    <div className="w-full flex justify-between items-center border-b border-white/5 pb-4">
                        <div className="flex items-center gap-2 text-sm text-[#9da6b9]">
                            <Link href="/admin" className="hover:text-primary transition-colors">Dashboard</Link>
                            <span>/</span>
                            <Link href="/admin" className="hover:text-primary transition-colors">Bookings</Link>
                            <span>/</span>
                            <span className="text-white font-medium">Booking {booking.id}</span>
                        </div>
                        <div className="flex items-center gap-4">
                             <button className="p-2 text-[#9da6b9] hover:text-white hover:bg-white/5 rounded-full transition-colors">
                                <Bell className="w-5 h-5" />
                            </button>
                            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
                                <div className="text-right hidden sm:block">
                                    <p className="text-sm font-semibold text-white leading-tight">Alex Morgan</p>
                                    <p className="text-xs text-[#9da6b9]">Owner</p>
                                </div>
                                <div className="h-9 w-9 rounded-full bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-bold">
                                    AM
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Page Header */}

                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                            <div className="flex flex-col gap-2">
                                <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>Booking {booking.id}</h1>
                                <div className="flex items-center gap-3">
                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-500 border border-orange-500/20 uppercase tracking-wider">
                                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                                        {booking.status}
                                    </span>
                                    <span className="text-[#9da6b9] text-sm font-normal">Created on {booking.createdOn}</span>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#1a1f21] border border-white/10 text-[#9da6b9] text-sm font-bold hover:bg-white/5 hover:text-white transition-colors">
                                    <Edit className="w-4 h-4" />
                                    <span className="hidden sm:inline">Edit Booking</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 h-10 px-4 rounded-lg bg-[#1a1f21] border border-white/10 text-[#9da6b9] text-sm font-bold hover:bg-white/5 hover:text-white transition-colors">
                                    <Printer className="w-4 h-4" />
                                </button>
                            </div>
                        </div>

                        {/* Info Cards Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            
                            {/* Client Card */}
                            <div className="bg-[#1a1f21] rounded-xl p-6 border border-white/5 shadow-sm">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-white font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                                        <User className="w-5 h-5 text-primary" />
                                        Client Details
                                    </h3>
                                    <span className="text-xs font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">Verified</span>
                                </div>
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="h-12 w-12 rounded-full bg-white/5 bg-cover bg-center border border-white/10" style={{ backgroundImage: `url(${booking.client.image})` }}></div>
                                    <div>
                                        <p className="text-white font-bold text-lg">{booking.client.name}</p>
                                        <p className="text-[#9da6b9] text-sm">{booking.client.location}</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#9da6b9]">Phone</span>
                                        <span className="text-white font-medium text-right">{booking.client.phone}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#9da6b9]">License</span>
                                        <span className="text-white font-medium text-right">{booking.client.license}</span>
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
                                    <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/20">Premium</span>
                                </div>
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="h-16 w-24 rounded-lg bg-white/5 bg-cover bg-center border border-white/10 shrink-0" style={{ backgroundImage: `url(${booking.vehicle.image})` }}></div>
                                    <div>
                                        <p className="text-white font-bold text-lg leading-tight">{booking.vehicle.name}</p>
                                        <p className="text-[#9da6b9] text-sm mt-1">{booking.vehicle.trim}</p>
                                    </div>
                                </div>
                                <div className="pt-4 border-t border-white/10 space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#9da6b9]">Plate Number</span>
                                        <span className="text-white font-medium text-right font-mono bg-black/30 px-2 py-0.5 rounded border border-white/5">{booking.vehicle.plate}</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#9da6b9]">Color</span>
                                        <span className="text-white font-medium text-right">{booking.vehicle.color}</span>
                                    </div>
                                </div>
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
                                                <p className="text-white text-sm font-medium">{booking.trip.pickup}</p>
                                            </div>
                                            <div>
                                                <p className="text-xs text-[#9da6b9] uppercase font-bold tracking-wider mb-1">Return</p>
                                                <p className="text-white text-sm font-medium">{booking.trip.return}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/10">
                                    <div className="flex justify-between items-center">
                                        <span className="text-[#9da6b9] text-sm">Included Mileage</span>
                                        <span className="text-white font-bold text-lg">{booking.trip.includedMileage}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mileage and Calculation Section */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                            
                            {/* Mileage Input Module */}
                            <div className="lg:col-span-7 bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm overflow-hidden">
                                <div className="p-6 border-b border-white/5">
                                    <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                        <Gauge className="w-5 h-5 text-primary" />
                                        Mileage Entry
                                    </h3>
                                    <p className="text-[#9da6b9] text-sm mt-1">Enter the vehicle's odometer reading upon return to calculate final costs.</p>
                                </div>
                                <div className="p-6 grid gap-8">
                                    <div className="flex flex-col sm:flex-row gap-6">
                                        {/* Start Mileage */}
                                        <div className="flex-1">
                                            <label className="block text-xs font-bold text-[#9da6b9] uppercase tracking-wider mb-2">Start Mileage</label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <MapPin className="w-5 h-5 text-[#9da6b9]" />
                                                </div>
                                                <input 
                                                    className="block w-full pl-10 pr-12 py-3 bg-black/20 border border-white/10 rounded-lg text-[#9da6b9] text-lg font-mono font-medium focus:ring-0 cursor-not-allowed" 
                                                    disabled 
                                                    type="text" 
                                                    value={booking.mileage.start.toLocaleString()}
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
                                                    onChange={(e) => setEndMileage(Number(e.target.value))}
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
                                                <span className="text-red-500 text-sm font-bold">Over Limit</span>
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

                            {/* Cost Calculator */}
                            <div className="lg:col-span-5 flex flex-col">
                                <div className="bg-[#1a1f21] rounded-xl border border-white/5 shadow-sm flex flex-col h-full">
                                    <div className="p-6 border-b border-white/5 bg-white/[0.02]">
                                        <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                            <CreditCard className="w-5 h-5 text-primary" />
                                            Cost Summary
                                        </h3>
                                    </div>
                                    <div className="p-6 flex-1 flex flex-col gap-4">
                                        {/* List of Calculations */}
                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-[#9da6b9]">Authorized Limit</span>
                                                <span className="text-white font-medium">{booking.mileage.limit} km</span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-[#9da6b9]">Distance Driven</span>
                                                <span className="text-white font-medium">{distanceDriven} km</span>
                                            </div>
                                            <div className="h-px bg-white/10 my-2"></div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className={excessDistance > 0 ? "text-red-500 font-medium" : "text-emerald-500 font-medium"}>Excess Distance</span>
                                                <span className={excessDistance > 0 ? "text-red-500 font-bold" : "text-emerald-500 font-bold"}>
                                                    {excessDistance > 0 ? `+ ${excessDistance} km` : "0 km"}
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-[#9da6b9]">Penalty Rate</span>
                                                <span className="text-white font-medium">{booking.mileage.rate.toFixed(2)} CHF / km</span>
                                            </div>
                                        </div>
                                        <div className="mt-auto pt-6 border-t border-white/5">
                                            <div className="flex justify-between items-end mb-6">
                                                <span className="text-[#9da6b9] font-medium">Total Extra Cost</span>
                                                <span className="text-3xl font-black text-primary tracking-tight">CHF {extraCost.toFixed(2)}</span>
                                            </div>
                                            <button className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-[#0c1315] font-bold py-3.5 px-4 rounded-lg shadow-lg shadow-primary/20 transition-all transform active:scale-[0.98] uppercase tracking-wider">
                                                <Send className="w-5 h-5" />
                                                Send Payment Link
                                            </button>
                                            <button className="w-full mt-3 flex items-center justify-center gap-2 text-[#9da6b9] hover:text-white hover:bg-white/5 font-semibold py-2 px-4 rounded-lg transition-colors text-sm">
                                                <Save className="w-4 h-4" />
                                                Save as Draft
                                            </button>
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