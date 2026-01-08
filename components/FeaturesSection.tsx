"use client";

import { Shield, MapPin, Music, Coffee, Clock, Wifi } from "lucide-react";

const features = [
    {
        icon: Shield,
        title: "Safety First",
        description: "Our vehicles are rigorously maintained and inspected to ensure your absolute safety.",
    },
    {
        icon: MapPin,
        title: "Any Location",
        description: "We pick you up and drop you off at any location of your choice with precision.",
    },
    {
        icon: Music,
        title: "Entertainment",
        description: "Premium sound systems and entertainment options for a pleasant journey.",
    },
    {
        icon: Coffee,
        title: "Comfort & Style",
        description: "Experience the ultimate comfort with our luxury heated leather seats and climate control.",
    },
    {
        icon: Clock,
        title: "Punctuality",
        description: "Our professional chauffeurs are always on time, respecting your schedule.",
    },
    {
        icon: Wifi,
        title: "Connectivity",
        description: "High-speed Wi-Fi available in all our luxury vehicles for your convenience.",
    },
];

export function FeaturesSection() {
    return (
        <section className="py-24 bg-[#0c1315] relative overflow-hidden">
            {/* Subtle background glow */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container px-4 md:px-6 mx-auto relative z-10">
                <div className="flex flex-col md:flex-row gap-12 items-start justify-between mb-16">
                    <div className="max-w-2xl">
                        <div className="inline-block px-3 py-1 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-4 border-l-2 border-primary pl-4">
                            Why Choose Us
                        </div>
                        <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            RIDE TO DESTINATIONS <br /> WITH MAXIMUM <span className="text-primary">COMFORT</span>
                        </h2>
                    </div>
                    <p className="text-[#a1a1a1] max-w-md text-lg leading-relaxed pt-8 font-light">
                        We offer more than just a ride; we deliver an exceptional experience tailored to your highest standards of luxury and convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white/[0.02] border border-white/5 hover:bg-white/[0.05] hover:border-primary/30 transition-all duration-500 rounded-none relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/[0.02] -mr-8 -mt-8 rounded-full transition-transform group-hover:scale-150 duration-700" />

                            <div className="mb-6 inline-flex p-4 bg-[#0c1315] border border-white/10 text-primary group-hover:text-white group-hover:bg-primary transition-colors duration-300">
                                <feature.icon className="w-8 h-8" />
                            </div>

                            <h3 className="text-xl font-normal text-white mb-3 tracking-wide group-hover:text-primary transition-colors" style={{ fontFamily: 'var(--font-epilogue)' }}>
                                {feature.title}
                            </h3>
                            <p className="text-white/80 text-sm leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
