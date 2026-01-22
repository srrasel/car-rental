"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
    Zap, 
    Gauge, 
    Settings, 
    Timer, 
    Shield, 
    Fuel, 
    Users, 
    Music, 
    CreditCard, 
    Lock, 
    CheckCircle,
    MapPin,
    ArrowRight,
    FileCheck,
    Route
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Golf7RPage() {
    const techSpecs = [
        { icon: Zap, label: "Moteur", value: "2.0 TSI" },
        { icon: Gauge, label: "Puissance", value: "300 ch" },
        { icon: Settings, label: "Transmission", value: "DSG automatique" },
        { icon: Shield, label: "Traction", value: "4Motion (4 roues motrices)" },
        { icon: Timer, label: "Accélération", value: "0–100 km/h en ~4.9s" },
        { icon: Fuel, label: "Consommation", value: "7–8 L/100 km" },
        { icon: Users, label: "Configuration", value: "5 places, 5 portes" },
        { icon: Music, label: "Équipement", value: "Multimédia, Bluetooth, Clim" },
    ];

    return (
        <main className="min-h-screen bg-[#0c1315]">
            <Navbar />
            
            <section className="pt-32 pb-24 bg-[#0c1315] relative overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        
                        {/* Left Column: Image & Highlights */}
                        <motion.div 
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="sticky top-24 space-y-8"
                        >
                            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-white/10 group shadow-2xl">
                                <Image 
                                    src="/assets/1.jpg" 
                                    alt="Volkswagen Golf 7 R" 
                                    fill 
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1315] via-transparent to-transparent opacity-60" />
                                
                                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                                    <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10 flex items-center gap-2">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span className="text-white text-sm font-bold">Lausanne, Suisse</span>
                                    </div>
                                    <div className="bg-primary px-4 py-2 rounded-xl text-[#0c1315] font-bold text-sm">
                                        Dès 150 CHF / jour
                                    </div>
                                </div>
                            </div>

                            {/* Quick Highlights Box */}
                            <div className="bg-[#1a1f21] p-6 rounded-2xl border border-white/5 grid grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider">Sécurité</p>
                                        <p className="text-white font-bold text-sm">Maximale</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <CheckCircle className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-muted-foreground uppercase tracking-wider">État</p>
                                        <p className="text-white font-bold text-sm">Impeccable</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Detailed Specs */}
                        <motion.div 
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-10"
                        >
                            {/* Header */}
                            <div className="space-y-4">
                                <div className="inline-block px-3 py-1 text-primary text-xs font-bold tracking-[0.2em] uppercase border border-primary/20 rounded-full bg-primary/5">
                                    TYPE DE VÉHICULE
                                </div>
                                <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                                    Volkswagen Golf 7 R <span className="text-primary">— 2014</span>
                                </h2>
                                <p className="text-[#a1a1a1] text-lg leading-relaxed font-light">
                                    La Golf 7 R est une berline sportive haut de gamme, parfaite pour les trajets urbains comme les longues distances. 
                                    Elle combine puissance, sécurité et confort.
                                </p>
                            </div>

                            {/* Tech Specs Grid */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Settings className="w-5 h-5 text-primary" />
                                    Caractéristiques techniques
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {techSpecs.map((spec, index) => (
                                        <div key={index} className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-primary/30 transition-colors">
                                            <spec.icon className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <div>
                                                <p className="text-xs text-muted-foreground uppercase font-bold">{spec.label}</p>
                                                <p className="text-white font-medium text-sm">{spec.value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Mileage Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Route className="w-5 h-5 text-primary" />
                                    Kilométrage
                                </h3>
                                <div className="bg-white/5 rounded-xl p-5 border border-white/5 space-y-3">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <span className="text-[#a1a1a1]">Inclus par jour</span>
                                        <span className="text-white font-bold">50 km</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                                        <span className="text-[#a1a1a1]">Km supplémentaires</span>
                                        <span className="text-white font-bold">0.35 CHF/km</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-primary">
                                        <CheckCircle className="w-4 h-4" />
                                        <span>Contrôle des kilomètres effectué à la restitution</span>
                                    </div>
                                </div>
                            </div>

                            {/* Insurance Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <Shield className="w-5 h-5 text-primary" />
                                    Assurance
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-white/5 rounded-xl p-5 border border-primary/20 relative overflow-hidden">
                                        <div className="absolute top-0 right-0 bg-primary px-2 py-1 rounded-bl-lg text-[10px] font-bold text-black uppercase">
                                            Inclus
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-1">Franchise Standard</p>
                                        <p className="text-2xl font-bold text-white">2’000 CHF</p>
                                    </div>
                                    <div className="bg-white/5 rounded-xl p-5 border border-white/5 hover:border-primary/50 transition-colors cursor-pointer group">
                                        <div className="flex items-center justify-between mb-1">
                                            <p className="text-sm text-muted-foreground">Option Réduite</p>
                                            <span className="text-primary text-xs font-bold">+20 CHF/jour</span>
                                        </div>
                                        <p className="text-2xl font-bold text-white group-hover:text-primary transition-colors">1’000 CHF</p>
                                    </div>
                                </div>
                            </div>

                            {/* Payment Section */}
                            <div className="space-y-4">
                                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                                    <CreditCard className="w-5 h-5 text-primary" />
                                    Paiement
                                </h3>
                                <div className="bg-[#1a1f21] rounded-xl p-5 border border-white/5 flex flex-col sm:flex-row gap-6 items-center">
                                    <div className="flex-1 space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Lock className="w-4 h-4 text-green-500" />
                                            <span className="text-white font-medium">Paiement 100% sécurisé</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FileCheck className="w-4 h-4 text-primary" />
                                            <span className="text-white font-medium">Contrat envoyé automatiquement</span>
                                        </div>
                                    </div>
                                    <Button variant="luxury" className="w-full sm:w-auto px-8" asChild>
                                        <Link href="/book-now">
                                            Réserver cette voiture
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                        </motion.div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
