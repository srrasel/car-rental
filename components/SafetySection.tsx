"use client";

import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function SafetySection() {
    return (
        <section className="py-24 bg-[#0c1315] relative">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="order-2 lg:order-1 space-y-8">
                        <div className="space-y-4">
                            <div className="inline-block px-3 py-1 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2 border-l-2 border-primary pl-4">
                                Peace of Mind
                            </div>
                            <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                                WE CARE OF YOUR <br /> <span className="text-primary">SAFETY</span> AND CONVENIENCE
                            </h2>
                            <p className="text-[#a1a1a1] text-lg leading-relaxed font-light">
                                Your safety is our top priority. We implement rigorous sanitization protocols and vehicle inspections to ensure a worry-free journey every time you ride with us.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {[
                                "24/7 Roadside Assistance Support",
                                "Fully Insured and Licensed Vehicles",
                                "Professional Background-Checked Chauffeurs",
                                "Regular Comprehensive Vehicle Inspections",
                                "GPS Tracking and Real-Time Updates"
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                                    <span className="text-white/90 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>

                        <Button variant="luxury" className="text-[#0c1315] mt-4 group" asChild>
                            <Link href="/book-now" className="flex items-center gap-2">
                                Réserver maintenant <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>
                    </div>

                    {/* Image Content */}
                    <div className="order-1 lg:order-2 relative">
                        <div className="relative aspect-[4/5] md:aspect-square w-full max-w-lg mx-auto lg:mr-0 lg:ml-auto">
                            {/* Decorative border frame */}
                            <div className="absolute inset-0 border-2 border-primary/20 translate-x-4 translate-y-4 z-0" />

                            <div className="relative w-full h-full overflow-hidden bg-[#1a1f21] z-10">
                                <Image
                                    src="/assets/15.jpg" // Using Range Rover image for safety/robustness feel
                                    alt="Safety and Convenience"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                />
                                {/* Overlay gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1315] via-transparent to-transparent opacity-60" />
                            </div>

                            {/* Floating badge */}
                            <div className="absolute bottom-10 left-[-20px] z-20 bg-primary/90 backdrop-blur text-black p-6 shadow-2xl max-w-[200px]">
                                <div className="text-4xl font-bold mb-1">100%</div>
                                <div className="text-xs font-bold uppercase tracking-widest leading-tight">Safety <br /> Guarantee</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
