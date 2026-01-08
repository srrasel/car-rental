"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gauge, Fuel, Search, Filter, ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";

// Mock Data
const cars = [
    {
        id: 1,
        name: "Porsche 911 GT3",
        image: "/assets/1.jpg",
        price: 450,
        speed: "310 km/h",
        category: "Sports",
        transmission: "Automatic",
        passengers: 2,
        luggage: 1,
        location: "New York"
    },
    {
        id: 2,
        name: "Mercedes-AMG GT",
        image: "/assets/5.jpg",
        price: 380,
        speed: "305 km/h",
        category: "Luxury",
        transmission: "Automatic",
        passengers: 2,
        luggage: 2,
        location: "London"
    },
    {
        id: 3,
        name: "Audi RS e-tron GT",
        image: "/assets/9.jpg",
        price: 420,
        speed: "250 km/h",
        category: "Electric",
        transmission: "Automatic",
        passengers: 4,
        luggage: 3,
        location: "Dubai"
    },
    {
        id: 4,
        name: "BMW M8 Competition",
        image: "/assets/12.jpg",
        price: 400,
        speed: "305 km/h",
        category: "Sports",
        transmission: "Automatic",
        passengers: 4,
        luggage: 2,
        location: "Los Angeles"
    },
    {
        id: 5,
        name: "Range Rover Autobiography",
        image: "/assets/15.jpg",
        price: 500,
        speed: "225 km/h",
        category: "SUV",
        transmission: "Automatic",
        passengers: 5,
        luggage: 4,
        location: "Miami"
    },
    {
        id: 6,
        name: "Lamborghini Huracán",
        image: "/assets/19.jpg",
        price: 650,
        speed: "325 km/h",
        category: "Supercar",
        transmission: "Automatic",
        passengers: 2,
        luggage: 1,
        location: "Paris"
    },
];

function FleetContent() {
    const searchParams = useSearchParams();
    const locationParam = searchParams.get("location");
    
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCars = cars.filter(car => {
        const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || car.category === selectedCategory;
        const matchesLocation = !locationParam || (car.location && car.location.toLowerCase().includes(locationParam.toLowerCase()));
        return matchesSearch && matchesCategory && matchesLocation;
    });

    return (
        <main className="min-h-screen bg-[#0c1315] flex flex-col text-white font-sans">
            <Navbar />
           
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[500px] w-full bg-[#0c1315] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/assets/5.jpg" 
                        alt="Fleet Hero" 
                        fill 
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1315] via-transparent to-transparent" />
                </div>
                
                <div className="relative z-10 text-center px-4 pt-20 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-block px-3 py-1 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-6 border-l-2 border-primary pl-4">
                            The Collection
                        </div>
                        <h1 className="text-5xl md:text-8xl font-normal tracking-tight text-white mb-8" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#e5cca8]">FLEET</span>
                        </h1>
                        <p className="text-[#a1a1a1] text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                            Discover our curated selection of high-performance and luxury vehicles tailored for your journey.
                            {locationParam && <span className="block mt-4 text-primary font-medium text-base">📍 Showing results for: {locationParam}</span>}
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Search & Filter Bar - Floating */}
            <div className="relative z-20 -mt-16 px-4 mb-20">
                <div className="max-w-4xl mx-auto bg-[#1a1f21]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                        <Input 
                            placeholder="Search by model name..." 
                            className="pl-12 bg-black/20 border-white/10 h-14 rounded-xl text-white placeholder:text-[#a1a1a1] focus:border-primary/50 focus:ring-primary/20 text-lg"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <Button variant="outline" className="h-14 px-8 rounded-xl border-white/10 text-white bg-white/5 hover:bg-primary hover:text-black hover:border-primary uppercase tracking-widest font-bold transition-all duration-300 w-full md:w-auto">
                        <Filter className="w-4 h-4 mr-2" /> Filter
                    </Button>
                </div>
            </div>

            <div className="flex-1 max-w-[1400px] mx-auto px-4 md:px-8 pb-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCars.length > 0 ? (
                        filteredCars.map((car) => (
                        <Card key={car.id} className="group overflow-hidden bg-[#1a1f21] border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="aspect-[4/3] relative overflow-hidden">
                                <div className="absolute top-4 left-4 z-10 transition-transform duration-300">
                                    <span className="bg-white/10 backdrop-blur-md px-3 py-1 text-xs font-bold text-white uppercase tracking-wider border border-white/10 rounded-full">
                                        {car.category}
                                    </span>
                                </div>
                                <div className="absolute top-4 right-4 z-10 transition-transform duration-300">
                                    <span className="bg-black/60 backdrop-blur-md px-3 py-1 text-xs font-bold text-white uppercase tracking-wider border border-white/10 flex items-center gap-1 rounded-full">
                                        <MapPin className="w-3 h-3 text-primary" /> {car.location}
                                    </span>
                                </div>
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                />
                                { /* Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Button variant="luxury" className="rounded-full w-16 h-16 p-0 flex items-center justify-center shadow-lg shadow-primary/20 scale-0 group-hover:scale-100 transition-transform duration-500 delay-100" asChild>
                                        <Link href={`/fleet/${car.id}`}>
                                            <ArrowRight className="w-6 h-6" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <CardHeader className="p-6 pb-2">
                                <div className="flex justify-between items-baseline">
                                    <CardTitle className="text-2xl text-white font-bold group-hover:text-primary transition-colors">{car.name}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-6 pt-2">
                                <Link href={`/fleet/${car.id}`}>
                                    <div className="flex justify-between items-center text-[#a1a1a1] border-t border-white/10 pt-4 mt-2 group-hover:border-primary/50 transition-colors">
                                        <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
                                            <span className="flex items-center gap-1"><Gauge className="w-3 h-3 text-primary/70" /> {car.speed}</span>
                                            <span className="flex items-center gap-1"><Fuel className="w-3 h-3 text-primary/70" /> {car.transmission}</span>
                                        </div>
                                        <span className="text-xl font-bold text-white">{car.price} CHF <span className="text-xs font-normal text-[#a1a1a1]">/ day</span></span>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    ))
                    ) : (
                        <div className="col-span-full text-center py-20 text-[#a1a1a1]">
                            <p className="text-xl">No vehicles found matching your criteria.</p>
                            <Button variant="link" onClick={() => window.location.href = '/fleet'} className="text-primary mt-4">
                                Clear Filters
                            </Button>
                        </div>
                    )}
                </div>
            </div>
          <Footer/>
        </main>
    );
}

export default function FleetPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#0c1315] flex items-center justify-center text-white">Loading...</div>}>
            <FleetContent />
        </Suspense>
    );
}
