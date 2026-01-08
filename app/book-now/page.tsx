"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Calendar, 
    CheckCircle, 
    ChevronRight, 
    Fuel, 
    Gauge, 
    Headphones, 
    Settings, 
    SlidersHorizontal, 
    Users, 
    Zap,
    ArrowRight
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function BookNowPage() {
    // State to track selected car (defaulting to Tesla Model 3 ID or similar)
    const [selectedCar, setSelectedCar] = useState<number>(1);
    
    // Using the same images/data from the HTML provided by user for fidelity
    // In a real app, this would come from a database or shared constant
    const cars = [
        {
            id: 1,
            name: "Tesla Model 3",
            subtitle: "Long Range Dual Motor",
            price: 85,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBVQiia0OhBoN58nAg_9TL1TqT_AuTrqNZcb38IL9BBN66EQ2IzMUReG4WLwvGh21bra_rqbEz9DKTor95raXVfJmwNNuR6Auc7ms25uishxtLSMfwTqHgXGlOocnF2SPL6QXyiSbzXBfAeXfi0rKBT4JA-kjg3cjvU5qL0WgVTRFTT_G0U796w-DkNkEwan_RDAnD9lfB6vpvJtTWWVL0U4Y3lQ2g_5R9V0hlPHHVNUhrCLWt8oO5jkANNYBw0OsNrZSRPObZiil1e",
            badge: "BEST SELLER",
            features: [
                { icon: Zap, label: "Electric" },
                { icon: Settings, label: "Auto" },
                { icon: Users, label: "5 Seats" },
                { icon: Gauge, label: "3.1s 0-60" }
            ],
            available: true
        },
        {
            id: 2,
            name: "BMW X5",
            subtitle: "xDrive40i M Sport",
            price: 110,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-qG5OOtdBA_n_iVf_fLNhs7q5o_1Ri5qBINSYUeV1b9JEcS-r3TeQR5iQ0AqpT6FiLQ9pjQHdNWMqZCn9XXeMy-FRx4_NFxl9zzHnPIOBle_Tq5LvdZ_nV8ydQiHzieE1eo-s_xWea_gd5NYoGW8ZDQ8oEDYTdliSyZSHXTamSzyclfgi2KMv0_zSyuhk_6RWk1S8AbYhpI_KglhM4fSIo2R20DUMI3C1Y4Cl-JgL8lCULvMxanvjNXOTVxd3Oz0XMaBlpPRJ61IO",
            badge: null,
            features: [
                { icon: Fuel, label: "Gasoline" },
                { icon: Settings, label: "Auto" },
                { icon: Users, label: "7 Seats" }
            ],
            available: true
        },
        {
            id: 3,
            name: "Mercedes C-Class",
            subtitle: "C300 Sedan",
            price: 95,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA3fLPb0xjIsNj1wrrGMmEyHPkfUBZBPboQhNn6CeO9avG9MumiqJPp2KkywHEWS-7H5kXER05A3l2Qu_jjhYM7H6bM8sx91ZNRFxS_yPG8Nq5ok1LnsiRDnu4zUtlz8u1GxhJR7DSwTi5M9MoYgpyNhqhk14r78wiQscJUyj2hR2AXdKvdQAirdBqp5GSrvCTjuT4JA8eKwUlD9x2RVttIYa0mAeGMqXjDkPhlBWd2wLdS_E0VeOcDntJYL4cKdzdENj5GcMyaxw5s",
            badge: null,
            features: [
                { icon: Fuel, label: "Hybrid" },
                { icon: Settings, label: "Auto" },
                { icon: Users, label: "5 Seats" }
            ],
            available: true
        },
        {
            id: 4,
            name: "Porsche 911",
            subtitle: "Carrera S",
            price: 250,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYiBNYp9qUCYoHg2nPbySfQuh5cRskP8fMasv96pm7Ee4kAHmDOILZ1odgrBE9lc2TBHg3vANn03Jw1NFZxAkpGu758_UX8C67Crn2839ail_0V0VQNNMeLXm_IKjUSjP8MvbG-FUipc3Ax-2x0dTGcK7FbhLQP0pI9HfiDDBzmtUnL0RT4hNDTUXIEd6lh1OnwyPeQ_RXoQ4h0ygTl6dOlm1Fo_6XLuk3vXb9GSFiDtkN_R-I1tChGB9KYIrCKnLv8YUKJ2GeEOIA",
            badge: null,
            features: [
                { icon: Fuel, label: "Gasoline" },
                { icon: Settings, label: "Manual" },
                { icon: Users, label: "2 Seats" }
            ],
            available: true
        }
    ];

    const currentCar = cars.find(c => c.id === selectedCar) || cars[0];

    return (
        <main className="min-h-screen bg-[#0c1315] text-white flex flex-col font-sans">
            <Navbar />
            
            {/* Sub Hero Section */}
            <div className="relative h-[40vh] min-h-[400px] w-full bg-[#0c1315] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/assets/19.jpg" 
                        alt="Luxury Fleet" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1315] via-transparent to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-4 pt-20 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-block px-3 py-1 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 border-l-2 border-primary pl-4">
                            Secure Your Booking
                        </div>
                        <h1 className="text-4xl md:text-6xl font-normal tracking-tight text-white mb-6" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            RESERVE YOUR <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#e5cca8]">JOURNEY</span>
                        </h1>
                        <p className="text-[#a1a1a1] text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
                            Choose from our exclusive collection of premium vehicles for an unforgettable driving experience.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-12 md:px-8 lg:px-12 flex flex-col lg:flex-row gap-8">
                
                {/* Left Column: Filters & Car List */}
                <div className="flex-1 flex flex-col gap-6 min-w-0">
                    
                    {/* Page Heading & Filters */}
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-white text-3xl font-black tracking-tight">Select a Vehicle</h1>
                            <p className="text-[#a1a1a1] text-base">Browse our premium fleet available for your dates.</p>
                        </div>
                        
                        {/* Quick Filter Bar */}
                        <div className="flex flex-wrap gap-3 py-2">
                            <div className="flex items-center gap-2 bg-[#1a1f21] border border-white/10 rounded-lg px-3 py-2 text-sm text-white">
                                <SlidersHorizontal className="w-[18px] h-[18px] text-[#a1a1a1]" />
                                <span>Filters</span>
                            </div>
                            <div className="flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-lg px-3 py-2 text-sm text-primary font-medium cursor-pointer">
                                <span>All Types</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1a1f21] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#a1a1a1] hover:text-white hover:border-white/20 cursor-pointer transition-colors">
                                <span>Electric</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1a1f21] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#a1a1a1] hover:text-white hover:border-white/20 cursor-pointer transition-colors">
                                <span>Luxury</span>
                            </div>
                            <div className="flex items-center gap-2 bg-[#1a1f21] border border-white/10 rounded-lg px-3 py-2 text-sm text-[#a1a1a1] hover:text-white hover:border-white/20 cursor-pointer transition-colors">
                                <span>SUV</span>
                            </div>
                        </div>
                    </div>

                    {/* Car List Grid */}
                    <div className="flex flex-col gap-4">
                        {cars.map((car) => {
                            const isSelected = selectedCar === car.id;
                            return (
                                <div 
                                    key={car.id}
                                    onClick={() => setSelectedCar(car.id)}
                                    className={`group relative flex flex-col md:flex-row bg-[#1a1f21] rounded-xl border overflow-hidden transition-all cursor-pointer
                                        ${isSelected 
                                            ? 'border-primary shadow-[0_0_15px_rgba(212,175,55,0.15)] hover:shadow-[0_0_20px_rgba(212,175,55,0.25)]' 
                                            : 'border-white/10 hover:border-primary/50 hover:shadow-lg'
                                        }`}
                                >
                                    <div 
                                        className={`w-full md:w-72 lg:w-80 h-48 md:h-auto bg-cover bg-center shrink-0 transition-all duration-500 ${!isSelected && 'grayscale group-hover:grayscale-0'}`} 
                                        style={{ backgroundImage: `url("${car.image}")` }}
                                    >
                                        {car.badge && (
                                            <div className="absolute top-3 left-3 bg-primary text-black text-xs font-bold px-2 py-1 rounded">
                                                {car.badge}
                                            </div>
                                        )}
                                    </div>
                                    
                                    <div className="flex flex-1 flex-col justify-between p-5 gap-4">
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <h3 className="text-xl font-bold text-white">{car.name}</h3>
                                                <p className="text-[#a1a1a1] text-sm mt-1">{car.subtitle}</p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-2xl font-bold text-white">${car.price}</p>
                                                <p className="text-[#a1a1a1] text-xs">per day</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex flex-wrap gap-4 text-sm text-[#a1a1a1]">
                                            {car.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-1.5">
                                                    <feature.icon className="w-[18px] h-[18px]" />
                                                    <span>{feature.label}</span>
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-auto">
                                            {car.available && isSelected ? (
                                                <div className="flex items-center gap-1 text-green-400 text-xs font-medium">
                                                    <CheckCircle className="w-[16px] h-[16px]" />
                                                    <span>Available now</span>
                                                </div>
                                            ) : <div />}
                                            
                                            <button className={`text-sm font-bold px-5 py-2 rounded-lg transition-colors ${
                                                isSelected 
                                                ? 'bg-primary hover:bg-[#b5952f] text-black' 
                                                : 'bg-[#1a1f21] border border-white/10 hover:bg-white/5 text-white font-medium'
                                            }`}>
                                                {isSelected ? 'Selected' : 'Select'}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Right Column: Booking Configuration (Sticky Sidebar) */}
                <div className="w-full lg:w-[420px] shrink-0">
                    <div className="sticky top-24 flex flex-col gap-4">
                        <div className="bg-[#1a1f21] border border-white/10 rounded-xl shadow-2xl overflow-hidden">
                            <div className="p-5 border-b border-white/10 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-white">Booking Summary</h3>
                                <span className="text-xs text-[#a1a1a1] font-medium px-2 py-1 bg-white/5 rounded">Draft</span>
                            </div>
                            
                            <div className="p-5 flex flex-col gap-6">
                                {/* Selected Car Preview */}
                                <div className="flex items-center gap-4 p-3 rounded-lg bg-black/40 border border-white/10">
                                    <div 
                                        className="h-16 w-24 rounded bg-cover bg-center" 
                                        style={{ backgroundImage: `url("${currentCar.image}")` }}
                                    ></div>
                                    <div className="flex flex-col">
                                        <span className="text-white font-bold">{currentCar.name}</span>
                                        <span className="text-xs text-[#a1a1a1]">${currentCar.price} / day</span>
                                    </div>
                                </div>
                                
                                {/* Date Selection */}
                                <div className="flex flex-col gap-3">
                                    <label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider">Rental Period</label>
                                    <div className="grid grid-cols-2 gap-3">
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-[#a1a1a1]">PICK-UP</span>
                                            <div className="h-10 bg-black/40 border border-white/10 rounded flex items-center px-3 gap-2">
                                                <Calendar className="text-primary w-[16px] h-[16px]" />
                                                <span className="text-sm font-medium">Oct 12, 10:00</span>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-[10px] text-[#a1a1a1]">DROP-OFF</span>
                                            <div className="h-10 bg-black/40 border border-white/10 rounded flex items-center px-3 gap-2">
                                                <Calendar className="text-primary w-[16px] h-[16px]" />
                                                <span className="text-sm font-medium">Oct 15, 10:00</span>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-[#a1a1a1] text-right">Duration: 3 Days</p>
                                </div>
                                
                                {/* Mileage Config */}
                                <div className="flex flex-col gap-4 py-4 border-t border-white/10 border-dashed">
                                    <div className="flex justify-between items-center">
                                        <label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider">Extra Kilometers</label>
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded">+200 km</span>
                                    </div>
                                    <div className="relative pt-2">
                                        <input 
                                            className="w-full h-1.5 bg-white/10 rounded-lg appearance-none cursor-pointer accent-primary" 
                                            max="3" 
                                            min="0" 
                                            step="1" 
                                            type="range" 
                                            defaultValue="1"
                                        />
                                        <div className="flex justify-between text-[10px] text-[#a1a1a1] mt-2 font-medium">
                                            <span>Included</span>
                                            <span className="text-primary">+200km</span>
                                            <span>+500km</span>
                                            <span>Unlimited</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center justify-between p-3 rounded bg-black/40 border border-white/10">
                                        <div className="flex items-center gap-2">
                                            <Gauge className="text-[#a1a1a1] w-[18px] h-[18px]" />
                                            <span className="text-sm text-[#a1a1a1]">Total Authorized</span>
                                        </div>
                                        <span className="text-sm font-bold text-white">1200 km</span>
                                    </div>
                                </div>
                                
                                {/* Price Breakdown */}
                                <div className="flex flex-col gap-3 pt-2">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#a1a1a1]">Rental (3 days x ${currentCar.price})</span>
                                        <span className="text-white">${currentCar.price * 3}.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#a1a1a1]">Extra Mileage Package</span>
                                        <span className="text-white">$25.00</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-[#a1a1a1]">Service Fee</span>
                                        <span className="text-white">$15.00</span>
                                    </div>
                                    <div className="h-px bg-white/10 my-1"></div>
                                    <div className="flex justify-between items-end">
                                        <span className="text-base font-bold text-white">Total</span>
                                        <span className="text-3xl font-black text-white">${(currentCar.price * 3) + 40}.00</span>
                                    </div>
                                </div>
                                
                                {/* CTA */}
                                <Link href={`/fleet/${currentCar.id}/payment`}>
                                    <button className="w-full h-12 flex items-center justify-center gap-2 bg-primary hover:bg-[#b5952f] text-black text-base font-bold rounded-lg shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98]">
                                        <span>Proceed to Payment</span>
                                        <ArrowRight className="w-[20px] h-[20px]" />
                                    </button>
                                </Link>
                                <p className="text-[11px] text-center text-[#a1a1a1]">
                                    By proceeding, you agree to our <Link className="text-primary underline" href="#">Terms of Service</Link>.
                                </p>
                            </div>
                        </div>
                        
                        {/* Help Card */}
                        <div className="bg-[#1a1f21] border border-white/10 rounded-xl p-4 flex items-center gap-4">
                            <div className="h-10 w-10 rounded-full bg-black/40 flex items-center justify-center shrink-0">
                                <Headphones className="text-[#a1a1a1] w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-sm font-bold text-white">Need Help?</p>
                                <p className="text-xs text-[#a1a1a1]">Call us at <span className="text-white font-medium">+1 (555) 123-4567</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer />
        </main>
    );
}