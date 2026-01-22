"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function PromoSection() {
    return (
        <section className="relative py-32 bg-fixed bg-center bg-cover" style={{ backgroundImage: "url('/assets/12.jpg')" }}>
            <div className="absolute inset-0 bg-black/70 backdrop-blur-[2px]" />

            <div className="max-w-[1200px] mx-auto relative z-10 px-4 md:px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="max-w-2xl space-y-6">
                    <h2 className="text-5xl md:text-7xl font-normal text-white tracking-tighter leading-none" style={{ fontFamily: 'var(--font-epilogue)' }}>
                        PREMIUM <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffcea0]">CARS RENTAL</span>
                    </h2>
                    <div className="flex flex-col md:flex-row gap-12 pt-6">
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">21<span className="text-primary">+</span></div>
                            <div className="text-sm uppercase tracking-widest text-white/60">Years of <br />Excellence</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-white mb-2">157<span className="text-primary">k</span></div>
                            <div className="text-sm uppercase tracking-widest text-white/60">Happy <br />Customers</div>
                        </div>
                    </div>
                </div>

                <div className="space-y-6 max-w-sm">
                    <p className="text-white/80 text-lg leading-relaxed">
                        Unlock the ultimate driving experience with our exclusive fleet. Whether for business or pleasure, we ensure every mile is memorable.
                    </p>
                    <Button variant="luxury" className="w-full text-[#0c1315] py-8 text-lg" asChild>
                        <Link href="/fleet">
                            Explore Fleet
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
