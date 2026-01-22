"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, Gauge, Zap, Settings, Timer, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VehicleOneSection() {
    const features = [
        { icon: Zap, label: "300 chevaux – moteur 2.0 TSI" },
        { icon: Settings, label: "Transmission intégrale 4Motion" },
        { icon: Gauge, label: "Boîte DSG automatique" },
        { icon: Timer, label: "Accélération 0–100 km/h en ~4.9s" },
        { icon: Shield, label: "Confort, performance et stabilité sur route" },
    ];

    return (
        <section className="py-24 bg-[#0c1315] relative overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col gap-4 mb-16 text-center"
                >
                    <div className="inline-block px-3 py-1 text-primary text-sm font-bold tracking-[0.2em] uppercase border border-primary/20 rounded-full mx-auto bg-primary/5">
                        Notre véhicule disponible
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                        Volkswagen Golf 7 R <span className="text-primary">(2014)</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto text-lg">
                        Une voiture sportive, confortable et idéale pour vos trajets en Suisse.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 group"
                    >
                        {/* Placeholder image - Replace with actual Golf 7 R image */}
                        <Image 
                            src="/assets/1.jpg" 
                            alt="Volkswagen Golf 7 R" 
                            fill 
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0c1315] to-transparent opacity-60" />
                    </motion.div>

                    <div className="space-y-8">
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="bg-[#1a1f21] p-8 rounded-2xl border border-white/5"
                        >
                            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                                <Zap className="text-primary w-6 h-6" /> Points forts
                            </h3>
                            <ul className="space-y-4">
                                {features.map((feature, index) => (
                                    <motion.li 
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3 text-white/80 group"
                                    >
                                        <div className="mt-1 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                            <feature.icon className="w-3 h-3 text-primary" />
                                        </div>
                                        <span>{feature.label}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
