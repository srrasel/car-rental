"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Gauge, Fuel, Info, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Mock data - normally would come from API/DB
const featuredCars = [
    {
        id: 1,
        name: "Porsche 911 GT3",
        image: "/assets/1.jpg",
        price: 450,
        speed: "310 km/h",
        transmission: "Automatic",
        category: "Sports",
    },
    {
        id: 2,
        name: "Mercedes-AMG GT",
        image: "/assets/5.jpg",
        price: 380,
        speed: "305 km/h",
        transmission: "Automatic",
        category: "Luxury",
    },
    {
        id: 3,
        name: "Audi RS e-tron GT",
        image: "/assets/9.jpg",
        price: 420,
        speed: "250 km/h",
        transmission: "Electric",
        category: "Electric",
    },
];

export function FeaturedCars() {
    return (
        <section className="py-32 bg-[#0c1315] relative">
            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
                    <div className="space-y-4">
                        <div className="text-primary text-sm font-bold tracking-[0.2em] uppercase pl-4 border-l-2 border-primary">
                            Exclusive Selection
                        </div>
                        <h2 className="text-5xl md:text-6xl font-normal text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            LUXURY <span className="text-primary">FLEET</span>
                        </h2>
                    </div>
                    <Button variant="luxury" className="hidden md:flex gap-2 text-[#0c1315] text-sm font-bold px-4 w-[300px] justify-center items-center" asChild>
                        <Link href="/fleet" className="flex gap-2 justify-center items-center">
                            View All Cars <ArrowRight className="w-4 h-4" />
                        </Link>
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredCars.map((car) => (
                        <Card key={car.id} className="group overflow-hidden bg-transparent border-none rounded-none">
                            <div className="aspect-[4/3] relative overflow-hidden mb-6 bg-[#1a1f21]">
                                <div className="absolute top-4 left-4 z-10">
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
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Button className="rounded-full w-16 h-16 bg-primary text-black hover:scale-110 transition-transform">
                                        <ArrowRight className="w-6 h-6" />
                                    </Button>
                                </div>
                            </div>
                            <CardHeader className="p-0 mb-2">
                                <div className="flex justify-between items-baseline">
                                    <CardTitle className="text-2xl text-white font-medium group-hover:text-primary transition-colors">{car.name}</CardTitle>
                                </div>
                            </CardHeader>
                            <CardContent className="p-0">
                                <div className="flex justify-between items-center text-[#a1a1a1] border-t border-white/10 pt-4 mt-2">
                                    <span className="text-sm font-light">Starting from</span>
                                    <span className="text-xl font-bold text-white">{car.price} CHF <span className="text-xs font-normal text-[#a1a1a1]">/ day</span></span>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <div className="mt-12 text-center md:hidden">
                        <Button variant="luxury" className="w-full text-[#0c1315]" asChild>
                            <Link href="/fleet" className="text-sm">
                                View All Cars
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
