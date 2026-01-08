"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";

export function HeroSection() {
    // Random selection of images from the assets folder (1-19.jpg)
    const heroImages = [
        "/assets/4.jpg",
        "/assets/8.jpg",
        "/assets/12.jpg",
        "/assets/15.jpg",
        "/assets/19.jpg"
    ];

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Background with overlay */}
            <div className="absolute inset-0 z-0 bg-[#0c1315]">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c1315]/90 via-[#0c1315]/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent z-10" />

                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
                    />
                </AnimatePresence>
            </div>

            <div className="container relative z-20 px-4 md:px-6 flex flex-col items-start gap-8 mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl space-y-6"
                >
                    <div className="inline-block px-3 py-1 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 border-l-2 border-primary pl-4">
                        Premium Car Rental Service
                    </div>
                    <h1 className="text-3xl md:text-4xl font-normal tracking-[0.2em] leading-[1.2em] text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>
                        RIDE TO DESTINATIONS <br /> WITH MAXIMUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#e5cca8]">COMFORT</span>
                    </h1>
                    <p className="text-xl text-[#a1a1a1] max-w-xl font-light tracking-wide">
                        Experience the thrill of the open road with our curated fleet of luxury and sports vehicles.
                    </p>
                </motion.div>

                {/* Booking Widget - Floating Horizontal */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-5xl bg-[#0c1315]/90 backdrop-blur-md border border-white/5 p-8 shadow-2xl mt-12"
                >
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-end">
                        <div className="md:col-span-2 space-y-3">
                            <label className="text-xs uppercase tracking-widest text-[#a1a1a1]">Pick-up Location</label>
                            <div className="relative">
                                <Input placeholder="City, Airport, or Address" className="bg-transparent border-b border-white/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary placeholder:text-white/40 text-white font-medium pl-8" />
                                <MapPin className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                            </div>
                        </div>
                        <div className="md:col-span-2 space-y-3">
                            <label className="text-xs uppercase tracking-widest text-[#a1a1a1]">Pick-up Date</label>
                            <div className="relative">
                                <Input type="date" className="bg-transparent border-b border-white/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary text-white font-medium pl-8 [&::-webkit-calendar-picker-indicator]:invert" />
                                <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                            </div>
                        </div>
                        <div className="md:col-span-2 space-y-3">
                            <label className="text-xs uppercase tracking-widest text-[#a1a1a1]">Return Date</label>
                            <div className="relative">
                                <Input type="date" className="bg-transparent border-b border-white/20 rounded-none px-0 py-2 focus-visible:ring-0 focus-visible:border-primary text-white font-medium pl-8 [&::-webkit-calendar-picker-indicator]:invert" />
                                <Calendar className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <Button variant="luxury" className="w-full h-12 text-[#0c1315]">
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-10 z-20 flex items-center gap-4 text-white/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-xs uppercase tracking-[0.3em] -rotate-90 origin-left">Scroll</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
