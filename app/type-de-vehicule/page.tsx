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
    Route,
    Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TypeDeVehiculePage() {
    const techSpecs = [
        { icon: Zap, label: "Moteur", value: "2.0 TSI" },
        { icon: Gauge, label: "Puissance", value: "300 ch" },
        { icon: Settings, label: "Transmission", value: "DSG automatique" },
        { icon: Shield, label: "Traction", value: "4Motion (4WD)" },
        { icon: Timer, label: "0-100 km/h", value: "~4.9s" },
        { icon: Fuel, label: "Consommation", value: "7–8 L/100 km" },
        { icon: Users, label: "Places", value: "5 places, 5 portes" },
        { icon: Music, label: "Multimédia", value: "Bluetooth, Clim" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <main className="min-h-screen bg-[#0c1315] text-white selection:bg-primary/30">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/assets/1.jpg"
                        alt="Volkswagen Golf 7 R Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0c1315]/80 via-[#0c1315]/50 to-[#0c1315]" />
                    <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 text-center space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-md mb-6">
                            Type de Véhicule
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            Volkswagen <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Golf 7 R</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-300 font-light max-w-2xl mx-auto">
                            L'alliance parfaite entre performance sportive et confort quotidien.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <Button variant="luxury" size="xl" asChild className="mt-8">
                            <Link href="/book-now">
                                Réserver maintenant
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </section>

            <div className="max-w-7xl mx-auto px-4 md:px-6 py-20 -mt-20 relative z-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8"
                >
                    {/* Main Info Card */}
                    <motion.div variants={itemVariants} className="lg:col-span-2 space-y-8">
                        {/* Description */}
                        <div className="bg-[#1a1f21]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3">
                                <Info className="text-primary" />
                                Description
                            </h2>
                            <p className="text-gray-300 leading-relaxed text-lg">
                                La Golf 7 R est une berline sportive haut de gamme, parfaite pour les trajets urbains comme les longues distances.
                                Elle combine puissance, sécurité et confort avec une finition exceptionnelle.
                                Que ce soit pour une escapade le week-end ou un déplacement professionnel, elle saura répondre à toutes vos attentes.
                            </p>
                        </div>

                        {/* Tech Specs Grid */}
                        <div className="bg-[#1a1f21]/80 backdrop-blur-xl border border-white/10 p-8 rounded-3xl shadow-2xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                <Settings className="text-primary" />
                                Caractéristiques Techniques
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {techSpecs.map((spec, index) => (
                                    <div key={index} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-primary/30 hover:bg-white/10 transition-all group">
                                        <spec.icon className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
                                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">{spec.label}</p>
                                        <p className="text-white font-semibold">{spec.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Sidebar / Secondary Info */}
                    <motion.div variants={itemVariants} className="space-y-6">
                        {/* Mileage */}
                        <div className="bg-[#1a1f21]/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl hover:border-primary/30 transition-colors">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Route className="text-primary w-5 h-5" />
                                Kilométrage
                            </h3>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                                    <span className="text-gray-400 text-sm">Inclus / jour</span>
                                    <span className="font-bold text-xl">50 km</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white/5 rounded-xl">
                                    <span className="text-gray-400 text-sm">Supplémentaire</span>
                                    <span className="font-bold text-primary">0.35 CHF/km</span>
                                </div>
                                <p className="text-xs text-gray-500 flex items-center gap-1">
                                    <CheckCircle className="w-3 h-3" /> Contrôle à la restitution
                                </p>
                            </div>
                        </div>

                        {/* Insurance */}
                        <div className="bg-[#1a1f21]/80 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl hover:border-primary/30 transition-colors">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <Shield className="text-primary w-5 h-5" />
                                Assurance
                            </h3>
                            <div className="space-y-3">
                                <div className="relative p-4 rounded-xl border border-primary/20 bg-primary/5 overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-primary px-2 py-1 rounded-bl-lg text-[10px] font-bold text-black uppercase">Standard</div>
                                    <p className="text-xs text-gray-400 uppercase font-bold">Franchise</p>
                                    <p className="text-2xl font-bold">2’000 CHF</p>
                                </div>
                                <div className="p-4 rounded-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                                    <div className="flex justify-between items-center mb-1">
                                        <p className="text-xs text-gray-400 uppercase font-bold group-hover:text-primary transition-colors">Option Réduite</p>
                                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded">+20 CHF/j</span>
                                    </div>
                                    <p className="text-xl font-bold text-gray-300 group-hover:text-white">1’000 CHF</p>
                                </div>
                            </div>
                        </div>

                        {/* Payment */}
                        <div className="bg-gradient-to-br from-[#1a1f21]/90 to-primary/10 backdrop-blur-xl border border-white/10 p-6 rounded-3xl shadow-xl">
                            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                                <CreditCard className="text-primary w-5 h-5" />
                                Paiement Sécurisé
                            </h3>
                            <ul className="space-y-3 mb-6">
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <Lock className="w-4 h-4 text-green-400" />
                                    Transaction cryptée 100%
                                </li>
                                <li className="flex items-center gap-2 text-sm text-gray-300">
                                    <FileCheck className="w-4 h-4 text-primary" />
                                    Contrat auto. après validation
                                </li>
                            </ul>
                            <Button className="w-full font-bold" size="lg" asChild>
                                <Link href="/book-now">
                                    Réserver <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            <Footer />
        </main>
    );
}
