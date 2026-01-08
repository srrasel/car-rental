"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Gauge, Fuel, Search, Filter, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
    },
];

export default function FleetPage() {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredCars = cars.filter(car => {
        const matchesSearch = car.name.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === "All" || car.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <main className="min-h-screen bg-[#0c1315] flex flex-col text-white">
            <Navbar />
            <div className="pt-32 pb-24 flex-1 container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="inline-block px-3 py-1 text-primary text-sm font-bold tracking-[0.2em] uppercase border-l-2 border-primary pl-4">
                            Premium Collection
                        </div>
                        <h1 className="text-4xl md:text-5xl font-normal tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            OUR <span className="text-primary">FLEET</span>
                        </h1>
                        <p className="text-[#a1a1a1] max-w-xl font-light tracking-wide text-lg">
                            Browse our extensive collection of premium vehicles tailored for your comfort and style.
                        </p>
                    </div>

                    <div className="flex gap-4 w-full md:w-auto items-center">
                        <div className="relative w-full md:w-80">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1a1]" />
                            <Input
                                placeholder="Search by name..."
                                className="pl-10 bg-white/5 border-white/10 text-white placeholder:text-[#a1a1a1] focus:border-primary rounded-none h-12"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                        <Button variant="outline" className="gap-2 h-12 rounded-none border-white/10 text-white hover:bg-white/5 hover:text-white uppercase tracking-wider">
                            <Filter className="w-4 h-4" /> Filter
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredCars.map((car) => (
                        <Card key={car.id} className="group overflow-hidden bg-transparent border-none rounded-none">
                            <div className="aspect-[4/3] relative overflow-hidden mb-6 bg-[#1a1f21]">
                                <div className="absolute top-4 left-4 z-10 transition-transform duration-300">
                                    <span className="bg-white/10 backdrop-blur px-3 py-1 text-xs font-bold text-white uppercase tracking-wider border border-white/10">
                                        {car.category}
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
                                    <Button variant="luxury" className="rounded-full w-16 h-16 p-0 flex items-center justify-center" asChild>
                                        <Link href={`/fleet/${car.id}`}>
                                            <ArrowRight className="w-6 h-6" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                            <CardHeader className="p-0 mb-2">
                                <div className="flex justify-between items-baseline">
                                    <CardTitle className="text-2xl text-white font-medium group-hover:text-primary transition-colors">{car.name}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <Link href={`/fleet/${car.id}`}>
                                    <div className="flex justify-between items-center text-[#a1a1a1] border-t border-white/10 pt-4 mt-2 group-hover:border-primary/50 transition-colors">
                                        <div className="flex gap-4 text-xs font-bold uppercase tracking-wider">
                                            <span className="flex items-center gap-1"><Gauge className="w-3 h-3" /> {car.speed}</span>
                                            <span className="flex items-center gap-1"><Fuel className="w-3 h-3" /> {car.transmission}</span>
                                        </div>
                                        <span className="text-xl font-bold text-white">{car.price} CHF <span className="text-xs font-normal text-[#a1a1a1]">/ day</span></span>
                                    </div>
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
            <Footer />
        </main>
    );
}
