"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, Quote, User, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

const testimonials = [
    {
        id: 1,
        name: "James Anderson",
        role: "CEO, TechFlow",
        content: "The chauffeur service was absolutely impeccable. The driver was punctual, professional, and the vehicle was pristine. Highly recommended for business travel.",
        rating: 5,
        date: "March 15, 2024",
        verified: true,
        initials: "JA"
    },
    {
        id: 2,
        name: "Sarah Jenkins",
        role: "Event Planner",
        content: "I rented the Bentley Continental for my wedding, and it was the highlight of our entrance. The booking process was smooth, and the team was incredibly helpful.",
        rating: 5,
        date: "February 28, 2024",
        verified: true,
        initials: "SJ"
    },
    {
        id: 3,
        name: "Michael Chen",
        role: "Frequent Traveler",
        content: "I've used many car rental services, but this one stands out. The condition of the cars is unmatched, and the customer support is available 24/7 as promised.",
        rating: 5,
        date: "March 10, 2024",
        verified: true,
        initials: "MC"
    },
    {
        id: 4,
        name: "Emily Rodriguez",
        role: "Marketing Director",
        content: "Exceptional experience from start to finish. The Range Rover was perfect for our family trip to the mountains. Safety features were top-notch.",
        rating: 4,
        date: "January 20, 2024",
        verified: true,
        initials: "ER"
    },
    {
        id: 5,
        name: "David Wright",
        role: "Entrepreneur",
        content: "The sports car collection is impressive. Driving the Ferrari 488 was a dream come true. Worth every penny for the experience.",
        rating: 5,
        date: "March 05, 2024",
        verified: true,
        initials: "DW"
    },
    {
        id: 6,
        name: "Lisa Thompson",
        role: "Luxury Lifestyle Blogger",
        content: "Stunning fleet and white-glove service. Every detail is thought of, from the bottled water to the wifi connectivity. Will definitely book again.",
        rating: 5,
        date: "February 15, 2024",
        verified: true,
        initials: "LT"
    }
];

export default function TestimonialsPage() {
    return (
        <main className="min-h-screen bg-[#0c1315] selection:bg-primary selection:text-black">
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('/assets/1.jpg')] bg-cover bg-center opacity-20" />
                <div className="absolute inset-0 bg-gradient-to-b from-[#0c1315] via-[#0c1315]/80 to-[#0c1315]" />
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            CUSTOMER <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffcea0]">STORIES</span>
                        </h1>
                        <p className="text-[#a1a1a1] text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                            Discover why hundreds of customers trust us for their luxury transportation needs. Read their genuine experiences.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-12 border-y border-white/5 bg-white/2">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">150k+</div>
                            <div className="text-sm text-[#a1a1a1] uppercase tracking-wider">Happy Clients</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">4.9/5</div>
                            <div className="text-sm text-[#a1a1a1] uppercase tracking-wider">Average Rating</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">98%</div>
                            <div className="text-sm text-[#a1a1a1] uppercase tracking-wider">Return Rate</div>
                        </div>
                        <div>
                            <div className="text-3xl md:text-4xl font-bold text-white mb-1">24/7</div>
                            <div className="text-sm text-[#a1a1a1] uppercase tracking-wider">Support</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={testimonial.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-[#1a1f21] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all group relative"
                            >
                                {/* Quote Icon Background */}
                                <Quote className="absolute top-8 right-8 w-12 h-12 text-white/5 group-hover:text-primary/10 transition-colors" />

                                {/* Stars */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star 
                                            key={i} 
                                            className={`w-4 h-4 ${i < testimonial.rating ? "fill-primary text-primary" : "text-white/20"}`} 
                                        />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-white/80 mb-8 leading-relaxed relative z-10 min-h-[80px]">
                                    "{testimonial.content}"
                                </p>

                                {/* User Info */}
                                <div className="flex items-center gap-4 border-t border-white/5 pt-6">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-primary font-bold text-lg border border-primary/20">
                                        {testimonial.initials}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{testimonial.name}</h4>
                                        <p className="text-[#a1a1a1] text-xs uppercase tracking-wide">{testimonial.role}</p>
                                    </div>
                                </div>

                                {/* Verified Badge */}
                                {testimonial.verified && (
                                    <div className="absolute bottom-6 right-6 flex items-center gap-1 text-primary/60 text-[10px] uppercase tracking-widest font-bold">
                                        <CheckCircle className="w-3 h-3" /> Verified
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA / Submit Review Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-primary/5" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto bg-[#1a1f21] rounded-3xl p-8 md:p-12 border border-white/10 text-center">
                        <MessageSquare className="w-16 h-16 text-primary mx-auto mb-6 opacity-80" />
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Share Your Experience</h2>
                        <p className="text-[#a1a1a1] text-lg mb-8 max-w-2xl mx-auto">
                            We value your feedback. Help us improve and let others know about your journey with our luxury fleet.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button className="bg-primary text-black hover:bg-[#b5952f] h-12 px-8 rounded-xl font-bold">
                                Write a Review
                            </Button>
                            <Button variant="outline" className="border-white/20 text-black hover:bg-primary h-12 px-8 rounded-xl font-bold" asChild>
                                <Link href="/contact">Contact Support</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}