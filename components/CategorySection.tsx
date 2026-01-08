"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

// Using local assets 1-19
const categories = [
    { id: "all", label: "All Cars" },
    { id: "sports", label: "Sports" },
    { id: "luxury", label: "Luxury" },
    { id: "suv", label: "SUV" },
];

const categoryData = [
    { id: 1, name: "Porsche 911 GT3", category: "sports", image: "/assets/1.jpg", price: "450" },
    { id: 2, name: "Mercedes-AMG GT", category: "luxury", image: "/assets/5.jpg", price: "380" },
    { id: 3, name: "Audi RS e-tron", category: "sports", image: "/assets/9.jpg", price: "420" },
    { id: 4, name: "Range Rover", category: "suv", image: "/assets/15.jpg", price: "500" },
    { id: 5, name: "BMW M8", category: "sports", image: "/assets/12.jpg", price: "400" },
    { id: 6, name: "Lamborghini", category: "sports", image: "/assets/19.jpg", price: "650" },
];

export function CategorySection() {
    const [activeTab, setActiveTab] = useState("all");

    const filteredCars = activeTab === "all"
        ? categoryData
        : categoryData.filter(car => car.category === activeTab);

    return (
        <section className="py-24 bg-[#0c1315]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <div className="inline-block px-3 py-1 text-primary text-xs font-bold tracking-[0.2em] uppercase border-l-2 border-primary pl-4">
                            The Collection
                        </div>
                        <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            A HIGH VARIETY <br /> OF <span className="text-primary">OPTIONS</span>
                        </h2>
                    </div>

                    <div className="flex flex-wrap gap-2 md:gap-4">
                        {categories.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 py-2 text-sm font-bold uppercase tracking-widest transition-all duration-300 border ${activeTab === tab.id
                                    ? "bg-primary text-black border-primary"
                                    : "bg-transparent text-white/50 border-white/10 hover:border-primary hover:text-white"
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence>
                        {filteredCars.map((car) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                key={car.id}
                                className="group relative aspect-[16/10] overflow-hidden bg-white/5 cursor-pointer"
                            >
                                <Image
                                    src={car.image}
                                    alt={car.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">{car.name}</h3>
                                        <p className="text-primary font-bold">{car.price} CHF <span className="text-xs text-white/60 font-normal">/ Day</span></p>
                                    </div>
                                    <Button className="w-10 h-10 rounded-full bg-white/10 text-white hover:bg-primary hover:text-black p-0">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </Button>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
