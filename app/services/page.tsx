"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Clock, MapPin, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
    {
        title: "Corporate Service",
        description: "Professional chauffeur services for your business meetings and corporate events. Punctuality and discretion guaranteed.",
        icon: BriefcaseIcon,
    },
    {
        title: "Airport Transfer",
        description: "Seamless transfers to and from the airport. Flight tracking included to ensure we are there when you land.",
        icon: PlaneIcon,
    },
    {
        title: "Wedding Events",
        description: "Make your special day even more memorable with our luxury fleet. Decorated vehicles available upon request.",
        icon: Sparkles,
    },
    {
        title: "Private Tours",
        description: "Explore the city or countryside in style. Customizable itineraries and knowledgeable chauffeurs.",
        icon: MapIcon,
    },
];

function BriefcaseIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    )
}

function PlaneIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12h20" />
            <path d="M20 12v-2a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v2" />
            <path d="M15 10l-3-7-3 7" />
            <path d="M12 22v-6" />
        </svg>
    )
}

function MapIcon({ className }: { className?: string }) {
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
            <line x1="9" x2="9" y1="3" y2="18" />
            <line x1="15" x2="15" y1="6" y2="21" />
        </svg>
    )
}


export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0c1315] flex flex-col text-white">
            <Navbar />
            <div className="pt-32 pb-24 flex-1 container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                    <div className="space-y-4">
                        <div className="inline-block px-3 py-1 text-primary text-sm font-bold tracking-[0.2em] uppercase border-l-2 border-primary pl-4">
                            What We Offer
                        </div>
                        <h1 className="text-4xl md:text-5xl font-normal tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            PREMIUM <span className="text-primary">SERVICES</span>
                        </h1>
                        <p className="text-[#a1a1a1] max-w-xl font-light tracking-wide text-lg">
                            Beyond just car rentals, we provide a complete luxury experience.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-white/5 border border-white/10 hover:border-primary/50 transition-colors duration-300">
                            <CardHeader>
                                <div className="w-12 h-12 bg-[#1a1f21] flex items-center justify-center mb-4 text-primary">
                                    <service.icon className="w-6 h-6" />
                                </div>
                                <CardTitle className="text-2xl text-white font-medium" style={{ fontFamily: 'var(--font-epilogue)' }}>{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-[#a1a1a1] leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                <Button variant="link" className="text-primary p-0 h-auto hover:text-white group">
                                    <Link href="/contact" className="flex items-center gap-2">
                                        Book Service <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Promo/CTA Section specific to Services */}
                <div className="mt-24 relative rounded-none overflow-hidden h-[400px] flex items-center justify-center group">
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562426522-684433018804?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center grayscale group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute inset-0 bg-black/60" />
                    <div className="relative z-10 text-center space-y-6 px-4">
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-widest" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            READY TO DRIVE?
                        </h2>
                        <Button variant="luxury" className="px-8 py-6 text-[#0c1315]" asChild>
                            <Link href="/contact">
                                CONTACT US NOW
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
