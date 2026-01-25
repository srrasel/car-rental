"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Sparkles, Clock, MapPin, ArrowRight, Briefcase, Plane, Crown, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        title: "Corporate Service",
        description: "Professional chauffeur services for your business meetings and corporate events. Punctuality and discretion guaranteed.",
        icon: Briefcase,
        image: "/assets/1.jpg"
    },
    {
        title: "Airport Transfer",
        description: "Seamless transfers to and from the airport. Flight tracking included to ensure we are there when you land.",
        icon: Plane,
        image: "/assets/2.jpg"
    },
    {
        title: "Wedding Events",
        description: "Make your special day even more memorable with our luxury fleet. Decorated vehicles available upon request.",
        icon: Sparkles,
        image: "/assets/3.jpg"
    },
    {
        title: "Private Tours",
        description: "Explore the city or countryside in style. Customizable itineraries and knowledgeable chauffeurs.",
        icon: MapPin,
        image: "/assets/4.jpg"
    },
    {
        title: "VIP Protection",
        description: "Enhanced security transport for VIPs requiring extra safety measures and trained security drivers.",
        icon: Shield,
        image: "/assets/8.jpg"
    },
    {
        title: "Event Transport",
        description: "Coordinated transportation for large events, galas, and red carpet premieres.",
        icon: Crown,
        image: "/assets/9.jpg"
    }
];

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-[#0c1315] flex flex-col text-white font-sans">
            <Navbar />
            
            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] w-full bg-[#0c1315] overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/assets/6.jpg" 
                        alt="Services Hero" 
                        fill 
                        className="object-cover opacity-60"
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
                            Excellence in Motion
                        </div>
                        <h1 className="text-5xl md:text-7xl font-normal tracking-tight text-white mb-8" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            PREMIUM <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#e5cca8]">SERVICES</span>
                        </h1>
                        <p className="text-[#a1a1a1] text-lg md:text-2xl font-light tracking-wide max-w-2xl mx-auto leading-relaxed">
                            Beyond just car rentals, we provide a complete luxury experience tailored to your specific needs.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="flex-1 max-w-[1400px] mx-auto px-4 md:px-8 py-24 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="group overflow-hidden bg-[#1a1f21] border border-white/5 rounded-2xl hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full">
                            <div className="h-48 relative overflow-hidden">
                                <Image 
                                    src={service.image} 
                                    alt={service.title} 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/10 text-primary">
                                    <service.icon className="w-6 h-6" />
                                </div>
                            </div>
                            <CardHeader className="p-8 pb-4">
                                <CardTitle className="text-2xl text-white font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="p-8 pt-0 flex-grow flex flex-col justify-between">
                                <p className="text-[#a1a1a1] leading-relaxed mb-6 text-lg">
                                    {service.description}
                                </p>
                                <Link href="/book-now" className="inline-flex items-center gap-2 text-primary font-bold tracking-wide uppercase text-sm hover:text-white transition-colors group/link">
                                    Réserver maintenant <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                                </Link>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="w-full bg-[#1a1f21] py-24 border-y border-white/5">
                <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                    <div className="text-center mb-16">
                         <h2 className="text-3xl md:text-5xl font-normal text-white mb-6" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            WHY CHOOSE <span className="text-primary">US</span>
                        </h2>
                        <p className="text-[#a1a1a1] max-w-2xl mx-auto text-lg">
                            We define the standard for luxury transportation with our unwavering commitment to quality.
                        </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="text-center px-4">
                            <div className="w-20 h-20 bg-[#0c1315] rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-xl shadow-primary/5">
                                <Star className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">First Class Experience</h3>
                            <p className="text-[#a1a1a1]">Every detail is curated to ensure your journey is comfortable, relaxing, and memorable.</p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-20 h-20 bg-[#0c1315] rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-xl shadow-primary/5">
                                <Clock className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Punctuality Guaranteed</h3>
                            <p className="text-[#a1a1a1]">We value your time. Our drivers arrive early to ensure you are never late for your engagement.</p>
                        </div>
                        <div className="text-center px-4">
                            <div className="w-20 h-20 bg-[#0c1315] rounded-full flex items-center justify-center mx-auto mb-6 border border-white/10 shadow-xl shadow-primary/5">
                                <Shield className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">Safety First</h3>
                            <p className="text-[#a1a1a1]">Our vehicles are rigorously maintained and our drivers are trained in defensive driving.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className="py-24 px-4 text-center">
                 <h2 className="text-3xl md:text-4xl font-normal text-white mb-8" style={{ fontFamily: 'var(--font-epilogue)' }}>
                    Ready to Experience <span className="text-primary">Luxury?</span>
                </h2>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Button className="bg-primary text-black hover:bg-[#b5952f] h-14 px-8 rounded-xl text-lg font-bold" asChild>
                        <Link href="/book-now">Book a Vehicle</Link>
                    </Button>
                    <Button variant="outline" className="border-white/20 text-black hover:bg-white/10 hover:text-white h-14 px-8 rounded-xl text-lg font-bold" asChild>
                        <Link href="/contact">Contact Support</Link>
                    </Button>
                </div>
            </div>

            <Footer />
        </main>
    );
}
