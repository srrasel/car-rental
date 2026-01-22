"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Calendar } from "lucide-react";
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
    const router = useRouter();
    const [pickupDate, setPickupDate] = React.useState("");
    const [returnDate, setReturnDate] = React.useState("");

    const handleSearch = () => {
        const params = new URLSearchParams();
        if (pickupDate) params.set("pickup", pickupDate);
        if (returnDate) params.set("return", returnDate);
        // Redirect to fleet or specific car page. Since we have one car, maybe fleet is fine.
        router.push(`/fleet?${params.toString()}`);
    };

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, [heroImages.length]);

    const scrollToBooking = () => {
        const bookingSection = document.getElementById('booking-widget');
        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative flex flex-col md:block md:h-screen md:min-h-[700px] bg-[#0c1315]">
            {/* Background with overlay - Mobile Height constrained, Desktop Full */}
            <div className="absolute top-0 left-0 w-full h-[65vh] md:h-full z-0 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0c1315]/90 via-[#0c1315]/60 to-transparent z-10" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent z-10" />
                {/* Mobile bottom fade to blend with dark body */}
                <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#0c1315] to-transparent z-20 md:hidden" />

                <AnimatePresence mode="popLayout">
                    <motion.div
                        key={currentImageIndex}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full bg-cover bg-[center_top] md:bg-center"
                        style={{ backgroundImage: `url('${heroImages[currentImageIndex]}')` }}
                    />
                </AnimatePresence>
            </div>

            <div className="max-w-[1200px] mx-auto relative z-20 px-4 md:px-6 flex flex-col items-start gap-8 md:gap-12 md:justify-center md:h-full pt-32 md:pt-20">
                {/* Hero Text Content */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl space-y-6 min-h-[40vh] md:min-h-0 flex flex-col justify-center"
                >
                    <div className="inline-block px-3 py-1 text-primary text-sm font-bold tracking-[0.2em] uppercase mb-4 border-l-2 border-primary pl-4">
                        Location de voitures à Lausanne
                    </div>
                    <h1 className="text-3xl md:text-5xl font-normal tracking-[0.05em] leading-[1.2em] text-white" style={{ fontFamily: 'var(--font-epilogue)' }}>
                        LOUEZ VOTRE VOITURE À <br /> LAUSANNE EN <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#e5cca8]">QUELQUES CLICS</span>
                    </h1>
                    <p className="text-xl text-[#a1a1a1] max-w-xl font-light tracking-wide leading-relaxed">
                        Avec Rentago.ch, réservez votre véhicule rapidement et en toute simplicité. Choisissez vos dates, sélectionnez vos kilomètres, payez en ligne et recevez automatiquement votre contrat.
                    </p>

                    {/* Mobile Only CTA */}
                    <div className="md:hidden pt-4">
                        <Button variant="luxury" onClick={scrollToBooking} className="w-full max-w-xs text-[#0c1315]">
                            Réserver maintenant
                        </Button>
                    </div>
                </motion.div>

                {/* Booking Widget */}
                <motion.div
                    id="booking-widget"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="w-full max-w-5xl bg-[#0c1315] md:bg-[#0c1315]/90 md:backdrop-blur-md border border-white/10 md:border-white/5 p-6 md:p-8 shadow-2xl mt-0 md:mt-0 z-30"
                >
                    <div className="grid grid-cols-1 md:grid-cols-7 gap-6 items-end">
                        <div className="md:col-span-3 space-y-3">
                            <label className="text-xs uppercase tracking-widest text-[#a1a1a1]">Date de départ</label>
                            <div className="relative">
                                <Input 
                                    type="date" 
                                    className="h-12 bg-white/5 border border-white/10 rounded-lg px-4 pl-10 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary text-white [&::-webkit-calendar-picker-indicator]:invert" 
                                    value={pickupDate}
                                    onChange={(e) => setPickupDate(e.target.value)}
                                />
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                            </div>
                        </div>
                        <div className="md:col-span-3 space-y-3">
                            <label className="text-xs uppercase tracking-widest text-[#a1a1a1]">Date de retour</label>
                            <div className="relative">
                                <Input 
                                    type="date" 
                                    className="h-12 bg-white/5 border border-white/10 rounded-lg px-4 pl-10 focus-visible:ring-1 focus-visible:ring-primary focus-visible:border-primary text-white [&::-webkit-calendar-picker-indicator]:invert" 
                                    value={returnDate}
                                    onChange={(e) => setReturnDate(e.target.value)}
                                />
                                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-primary" />
                            </div>
                        </div>
                        <div className="md:col-span-1">
                            <Button variant="luxury" className="w-full h-12 text-[#0c1315] font-bold" onClick={handleSearch}>
                                <ChevronRight className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator - Desktop Only */}
            <motion.div
                className="absolute bottom-10 left-10 z-20 hidden md:flex items-center gap-4 text-white/50"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
                <span className="text-xs uppercase tracking-[0.3em] -rotate-90 origin-left">Scroll</span>
                <div className="w-[1px] h-24 bg-gradient-to-b from-primary to-transparent" />
            </motion.div>
        </section>
    );
}
