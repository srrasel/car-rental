"use client";

import { motion } from "framer-motion";
import { Calendar, Gauge, CreditCard } from "lucide-react";

export function HowItWorksSection() {
    const steps = [
        {
            icon: Calendar,
            title: "1. Choisissez vos dates",
            description: "Minimum 2 jours. Les dates déjà réservées sont automatiquement bloquées.",
        },
        {
            icon: Gauge,
            title: "2. Sélectionnez vos kilomètres",
            description: "50 km inclus par jour. Possibilité d’ajouter des kilomètres : 0.35 CHF/km.",
        },
        {
            icon: CreditCard,
            title: "3. Payez en ligne",
            description: "Le paiement est 100% sécurisé. Vous recevez immédiatement votre contrat automatique.",
        },
    ];

    return (
        <section className="py-24 bg-[#0c1315] relative">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-epilogue)' }}>
                        Comment ça <span className="text-primary">fonctionne ?</span>
                    </h2>
                    <div className="h-1 w-20 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                            className="bg-[#1a1f21] p-8 rounded-2xl border border-white/5 hover:border-primary/30 transition-all text-center group relative overflow-hidden"
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shine_1.5s_infinite]" />
                            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full flex items-center justify-center border border-primary/20 group-hover:scale-110 transition-transform relative z-10">
                                <step.icon className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4 relative z-10">{step.title}</h3>
                            <p className="text-[#a1a1a1] leading-relaxed relative z-10">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
