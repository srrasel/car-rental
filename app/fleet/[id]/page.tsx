"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    MapPin, 
    Calendar, 
    Gauge, 
    CheckCircle, 
    Star, 
    Share2, 
    Heart, 
    Zap, 
    Users, 
    ChevronDown, 
    BadgeCheck,
    Grid,
    Settings,
    Fuel
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { allCars } from "@/lib/data";

export default function CarDetailPage() {
    const params = useParams();
    const id = params?.id ? parseInt(params.id as string) : null;
    const car = allCars.find(c => c.id === id);
    const similarCars = allCars.filter(c => c.id !== id).slice(0, 4);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [extraKm, setExtraKm] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (startDate && endDate && car) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; // Minimum 1 day calculation

            const rentalCost = diffDays * car.price;
            const extraKmCost = extraKm * 0.35;

            setTotalPrice(rentalCost + extraKmCost);
        } else if (car) {
             // Reset or default
             setTotalPrice(0);
        }
    }, [startDate, endDate, extraKm, car]);

    // Handle case where id is not yet available or car not found
    if (!id) return <div className="min-h-screen flex items-center justify-center bg-[#0c1315] text-white">Loading...</div>;
    if (!car) return <div className="min-h-screen flex items-center justify-center bg-[#0c1315] text-white">Car not found</div>;

    const days = (startDate && endDate) ? Math.ceil(Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) || 1 : 0;
    const serviceFee = 45;
    const tax = 62;
    const finalTotal = totalPrice > 0 ? totalPrice + serviceFee + tax : 0;

    return (
        <main className="min-h-screen bg-[#0c1315] text-white flex flex-col font-sans">
            <Navbar />
            <div className="pt-24 pb-12 flex-1">
                <div className="layout-container mx-auto max-w-[1200px] px-4 py-8 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex flex-wrap gap-2 mb-6 text-sm">
                        <Link className="text-muted-foreground hover:text-white transition-colors" href="/">Home</Link>
                        <span className="text-muted-foreground">/</span>
                        <Link className="text-muted-foreground hover:text-white transition-colors" href="/fleet">Fleet</Link>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-white font-medium">{car.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left Column: Media & Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Hero Gallery */}
                            <div className="space-y-4">
                                <div 
                                    className="w-full aspect-video rounded-2xl bg-center bg-cover bg-no-repeat shadow-2xl relative group overflow-hidden" 
                                    style={{ backgroundImage: `url('${car.image}')` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                    <button className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition">
                                        <Grid className="w-5 h-5" />
                                        <span className="text-sm font-medium">View Gallery</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                    {/* Using same image for thumbnails as we don't have multiple images in mock data */}
                                    <div className="aspect-[4/3] rounded-lg bg-center bg-cover cursor-pointer ring-2 ring-primary" style={{ backgroundImage: `url('${car.image}')` }}></div>
                                    <div className="aspect-[4/3] rounded-lg bg-center bg-cover cursor-pointer hover:opacity-80 transition opacity-70" style={{ backgroundImage: `url('${car.image}')` }}></div>
                                    <div className="aspect-[4/3] rounded-lg bg-center bg-cover cursor-pointer hover:opacity-80 transition opacity-70" style={{ backgroundImage: `url('${car.image}')` }}></div>
                                    <div className="aspect-[4/3] rounded-lg bg-center bg-cover cursor-pointer hover:opacity-80 transition relative flex items-center justify-center bg-[#232f48]">
                                        <span className="text-white font-medium text-lg">+3</span>
                                    </div>
                                </div>
                            </div>

                            {/* Car Header & Core Specs */}
                            <div className="flex flex-col gap-6 border-b border-[#232f48] pb-8">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/20">{car.category}</span>
                                            <div className="flex items-center gap-1 text-yellow-400">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="text-white text-xs font-bold">4.9</span>
                                                <span className="text-muted-foreground text-xs font-normal">(128)</span>
                                            </div>
                                        </div>
                                        <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-2">{car.name}</h1>
                                        <p className="text-muted-foreground text-lg">2024 • {car.category} • {car.transmission}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="size-10 rounded-full bg-[#232f48] flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                        <button className="size-10 rounded-full bg-[#232f48] flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-colors">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Quick Specs Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-[#1a2332] p-4 rounded-xl flex flex-col gap-1 border border-[#232f48]">
                                        <Gauge className="w-6 h-6 text-primary mb-1" />
                                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Top Speed</span>
                                        <span className="text-white font-bold text-lg">{car.speed}</span>
                                    </div>
                                    <div className="bg-[#1a2332] p-4 rounded-xl flex flex-col gap-1 border border-[#232f48]">
                                        <Fuel className="w-6 h-6 text-primary mb-1" />
                                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Transmission</span>
                                        <span className="text-white font-bold text-lg truncate" title={car.transmission}>{car.transmission}</span>
                                    </div>
                                    <div className="bg-[#1a2332] p-4 rounded-xl flex flex-col gap-1 border border-[#232f48]">
                                        <Users className="w-6 h-6 text-primary mb-1" />
                                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Seats</span>
                                        <span className="text-white font-bold text-lg">2-4 Adults</span>
                                    </div>
                                    <div className="bg-[#1a2332] p-4 rounded-xl flex flex-col gap-1 border border-[#232f48]">
                                        <Zap className="w-6 h-6 text-primary mb-1" />
                                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Power</span>
                                        <span className="text-white font-bold text-lg">High Perf</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description & Features */}
                            <div className="grid md:grid-cols-3 gap-8 border-b border-[#232f48] pb-8">
                                <div className="md:col-span-2 space-y-4">
                                    <h3 className="text-white text-xl font-bold">Vehicle Description</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {car.description}
                                    </p>
                                </div>
                                <div className="md:col-span-1 space-y-4">
                                    <h3 className="text-white text-xl font-bold">Features</h3>
                                    <ul className="space-y-3">
                                        {car.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-muted-foreground text-sm">
                                                <CheckCircle className="w-5 h-5 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Reviews Section */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-xl font-bold">Ratings & Reviews</h3>
                                    <a className="text-primary text-sm font-medium hover:underline" href="#">View all 128 reviews</a>
                                </div>
                                <div className="flex flex-wrap gap-x-8 gap-y-6 bg-[#1a2332] p-6 rounded-2xl border border-[#232f48]">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-baseline gap-3">
                                            <p className="text-white text-5xl font-black leading-tight tracking-tighter">4.9</p>
                                            <p className="text-muted-foreground text-sm">out of 5</p>
                                        </div>
                                        <div className="flex gap-0.5 text-[#fbbf24]">
                                            {[1, 2, 3, 4].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                                            <Star className="w-5 h-5 fill-current opacity-50" />
                                        </div>
                                        <p className="text-muted-foreground text-sm">Based on 128 verified bookings</p>
                                    </div>
                                    <div className="h-16 w-px bg-[#232f48] hidden md:block"></div>
                                    <div className="grid flex-1 min-w-[200px] grid-cols-[20px_1fr_40px] items-center gap-y-2">
                                        {[
                                            { s: 5, p: 87 },
                                            { s: 4, p: 10 },
                                            { s: 3, p: 2 },
                                            { s: 2, p: 1 },
                                            { s: 1, p: 0 },
                                        ].map((r) => (
                                            <div key={r.s} className="contents text-xs font-medium">
                                                <p className="text-white">{r.s}</p>
                                                <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-[#232f48]">
                                                    <div className="rounded-full bg-primary" style={{ width: `${r.p}%` }}></div>
                                                </div>
                                                <p className="text-muted-foreground text-right">{r.p}%</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sticky Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 flex flex-col gap-4">
                                <div className="rounded-2xl bg-[#1a2332] p-6 border border-[#232f48] shadow-2xl relative overflow-hidden">
                                    {/* Decorative gradient blob */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-end gap-2 mb-6">
                                            <span className="text-white text-4xl font-black tracking-tight">${car.price}</span>
                                            <span className="text-muted-foreground text-base mb-1.5">/ day</span>
                                        </div>
                                        
                                        <div className="flex flex-col gap-4">
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-xs font-semibold text-muted-foreground uppercase">Pick-up</label>
                                                    <div className="bg-[#111722] border border-[#232f48] rounded-lg flex items-center gap-2 hover:border-primary/50 transition overflow-hidden">
                                                        <Input 
                                                            type="date" 
                                                            value={startDate}
                                                            onChange={(e) => setStartDate(e.target.value)}
                                                            className="bg-transparent border-0 text-white focus-visible:ring-0 text-xs p-3 h-auto" 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-xs font-semibold text-muted-foreground uppercase">Drop-off</label>
                                                    <div className="bg-[#111722] border border-[#232f48] rounded-lg flex items-center gap-2 hover:border-primary/50 transition overflow-hidden">
                                                         <Input 
                                                            type="date" 
                                                            value={endDate}
                                                            onChange={(e) => setEndDate(e.target.value)}
                                                            className="bg-transparent border-0 text-white focus-visible:ring-0 text-xs p-3 h-auto" 
                                                        />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-muted-foreground uppercase">Extra Km</label>
                                                <div className="bg-[#111722] border border-[#232f48] rounded-lg flex items-center gap-2 hover:border-primary/50 transition p-1">
                                                     <Input
                                                        type="number"
                                                        min="0"
                                                        placeholder="Add extra km"
                                                        value={extraKm}
                                                        onChange={(e) => setExtraKm(parseInt(e.target.value) || 0)}
                                                        className="bg-transparent border-0 text-white focus-visible:ring-0 h-9"
                                                    />
                                                </div>
                                            </div>

                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-muted-foreground uppercase">Location</label>
                                                <div className="bg-[#111722] border border-[#232f48] rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-primary/50 transition">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4 text-muted-foreground" />
                                                        <span className="text-white text-sm">Zurich Airport</span>
                                                    </div>
                                                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                                </div>
                                            </div>

                                            <div className="my-2 border-t border-[#232f48] border-dashed"></div>
                                            
                                            {totalPrice > 0 ? (
                                                <>
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-muted-foreground">${car.price} x {days} days</span>
                                                        <span className="text-white">${(days * car.price).toFixed(2)}</span>
                                                    </div>
                                                    {extraKm > 0 && (
                                                         <div className="flex justify-between items-center text-sm">
                                                            <span className="text-muted-foreground">Extra Km ({extraKm})</span>
                                                            <span className="text-white">${(extraKm * 0.35).toFixed(2)}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-muted-foreground">Service Fee</span>
                                                        <span className="text-white">${serviceFee}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-muted-foreground">Tax</span>
                                                        <span className="text-white">${tax}</span>
                                                    </div>
                                                    <div className="flex justify-between items-center pt-2 border-t border-[#232f48]/50 mt-2">
                                                        <span className="text-white font-bold">Total</span>
                                                        <span className="text-white font-bold text-xl">${finalTotal.toFixed(2)}</span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="text-center text-muted-foreground text-sm py-2">
                                                    Select dates to calculate price
                                                </div>
                                            )}

                                            <Link 
                                                href={startDate && endDate ? `/fleet/${id}/payment?startDate=${startDate}&endDate=${endDate}&extraKm=${extraKm}&totalPrice=${totalPrice}` : "#"}
                                                className={`w-full block text-center py-3 bg-gradient-to-br from-[hsl(34,38%,64%)] to-[#e5cca8] font-bold uppercase tracking-widest shadow-md border-0 hover:scale-[1.02] transition-transform duration-300 hover:shadow-[0_0_20px_rgba(201,163,126,0.3)] rounded-none text-[#0c1315] ${(!startDate || !endDate) ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                                            >
                                                Book Now
                                            </Link>
                                        </div>
                                        
                                        <div className="mt-4 flex items-center justify-center gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500" />
                                            <span className="text-muted-foreground text-xs">Free cancellation up to 48h before pickup</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Host Info (Optional Context) */}
                                <div className="rounded-xl bg-[#1a2332] p-4 border border-[#232f48] flex items-center gap-4">
                                    <div className="size-12 rounded-full bg-cover bg-center bg-gray-600 flex items-center justify-center text-white font-bold">LF</div>
                                    <div>
                                        <p className="text-white text-sm font-bold">Hosted by LuxeFleet</p>
                                        <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                            <BadgeCheck className="w-3 h-3 text-blue-400" />
                                            <span>Verified Partner</span>
                                        </div>
                                    </div>
                                    <button className="ml-auto text-primary text-sm font-medium hover:text-white transition">Contact</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Similar Vehicles Section */}
                    <div className="mt-20 border-t border-[#232f48] pt-10">
                        <h3 className="text-white text-2xl font-bold mb-6">Similar Vehicles</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {similarCars.map((simCar) => (
                                <Link key={simCar.id} href={`/fleet/${simCar.id}`} className="bg-[#1a2332] rounded-xl border border-[#232f48] overflow-hidden group hover:border-primary/50 transition-colors block">
                                    <div className="aspect-[16/10] bg-cover bg-center relative" style={{ backgroundImage: `url('${simCar.image}')` }}>
                                        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-2 py-1 rounded text-white text-xs font-bold">${simCar.price}/day</div>
                                    </div>
                                    <div className="p-4 flex flex-col gap-2">
                                        <div>
                                            <h4 className="text-white font-bold text-lg group-hover:text-primary transition-colors">{simCar.name}</h4>
                                            <p className="text-muted-foreground text-sm">{simCar.category} • {simCar.transmission}</p>
                                        </div>
                                        <div className="flex items-center gap-4 mt-2 border-t border-[#232f48] pt-3">
                                            <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                                <Gauge className="w-4 h-4" /> {simCar.speed}
                                            </div>
                                            <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                                <Users className="w-4 h-4" /> 2
                                            </div>
                                            <div className="flex items-center gap-1 text-muted-foreground text-xs">
                                                <Settings className="w-4 h-4" /> Auto
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
