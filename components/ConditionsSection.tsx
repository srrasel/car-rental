"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import Link from "next/link";

export function ConditionsSection() {
    const conditions = [
        "Minimum 2 jours",
        "50 km/jour inclus",
        "Km supplémentaires : 0.35 CHF/km",
        "Assurance optionnelle : Franchise 2’000 CHF (standard)",
        "Franchise 1’000 CHF (+20 CHF/jour)",
        "Permis + pièce d’identité obligatoires",
        "Contrôle des kilomètres effectué sur place",
        "Contrat envoyé automatiquement après paiement"
    ];

    return (
        <section className="py-24 bg-[#0c1315] relative border-t border-white/5">
            <div className="max-w-[1000px] mx-auto px-4 md:px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-br from-[#1a1f21] to-[#121618] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            Conditions <span className="text-primary">Principales</span>
                        </h2>
                        <p className="text-[#a1a1a1]">Tout ce que vous devez savoir avant de réserver</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                        {conditions.map((condition, index) => (
                            <motion.div 
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="flex items-center gap-3 text-white/90"
                            >
                                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                                <span>{condition}</span>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button 
                            variant="luxury" 
                            size="lg" 
                            className="w-full md:w-auto text-[#0c1315] font-bold px-12 py-6 text-lg"
                            asChild
                        >
                            {/* Scroll to top or specific booking area, or fleet page if we had a specific booking flow. 
                                Since user wants "Réserver maintenant" on Home, and Home has the booking widget in Hero,
                                maybe scroll to Hero or go to a booking page.
                                I'll link to /fleet/golf-7-r (which doesn't exist yet but I should probably make the hero booking widget work or link to fleet).
                                Actually, the user says "Louez votre voiture à Lausanne en quelques clics...". 
                                The hero booking widget should probably just redirect to a checkout or fleet page.
                                I'll set it to scroll to top for now or just Link to a booking section.
                            */}
                            <Link href="#booking-widget">
                                Réserver maintenant
                            </Link>
                        </Button>
                        <p className="mt-4 text-xs text-[#a1a1a1] flex items-center justify-center gap-2">
                            <AlertCircle className="w-4 h-4" /> 
                            Paiement 100% sécurisé
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
