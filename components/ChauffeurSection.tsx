"use client";

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const chauffeurs = [
    {
        name: "James Anderson",
        role: "Senior Chauffeur",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop",
        socials: { facebook: "#", twitter: "#", instagram: "#" }
    },
    {
        name: "Sarah Jenkins",
        role: "VIP Specialist",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop",
        socials: { facebook: "#", twitter: "#", telegram: "#" }
    },
    {
        name: "Michael Chen",
        role: "Luxury Driver",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2574&auto=format&fit=crop",
        socials: { facebook: "#", twitter: "#", linkedin: "#" }
    }
];

export function ChauffeurSection() {
    return (
        <section className="py-24 bg-[#0c1315] relative border-t border-white/5">
            <div className="container px-4 md:px-6 mx-auto text-center">
                <div className="mb-16 space-y-4">
                    <div className="inline-block px-3 py-1 text-primary text-xs font-bold tracking-[0.2em] uppercase border border-primary/30">
                        Meet The Team
                    </div>
                    <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                        OUR PROFESSIONAL <span className="text-primary">CHAUFFEURS</span>
                    </h2>
                    <p className="text-[#a1a1a1] max-w-2xl mx-auto font-light">
                        Highly trained, multilingual, and dedicated to providing you with a seamless and safe journey.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {chauffeurs.map((chauffeur, i) => (
                        <div key={i} className="group relative overflow-hidden bg-white/[0.02]">
                            <div className="aspect-[3/4] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src={chauffeur.image}
                                    alt={chauffeur.name}
                                    fill
                                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Overlay with socials */}
                                <div className="absolute inset-0 bg-[#0c1315]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        <Link href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                                            <Facebook className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                                            <Twitter className="w-5 h-5" />
                                        </Link>
                                        <Link href="#" className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center hover:bg-primary transition-colors">
                                            <Instagram className="w-5 h-5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="p-6 text-center border-t border-primary/20 bg-[#0c1315]">
                                <h3 className="text-xl font-bold text-white uppercase tracking-wider mb-1">{chauffeur.name}</h3>
                                <p className="text-primary text-sm font-medium tracking-widest">{chauffeur.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
