"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    Calendar, 
    CreditCard, 
    FileText, 
    Upload, 
    CheckCircle, 
    Shield, 
    Info,
    ArrowRight,
    MapPin,
    Route,
    User,
    Phone,
    Mail
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function BookingPage() {
    const [dateRange, setDateRange] = useState({ start: "", end: "" });
    const [extraKm, setExtraKm] = useState("0");

    return (
        <main className="min-h-screen bg-[#0c1315] text-white flex flex-col font-sans">
            <Navbar />
            
            <section className="pt-32 pb-24 bg-[#0c1315] relative overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-4 md:px-6 relative z-10">
                    
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block px-3 py-1 text-primary text-xs font-bold tracking-[0.2em] uppercase border border-primary/20 rounded-full bg-primary/5 mb-4">
                            RÉSERVATION
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            Réservez votre <span className="text-primary">voiture</span>
                        </h1>
                        <p className="text-[#a1a1a1] text-lg max-w-2xl mx-auto">
                            Veuillez remplir le formulaire de réservation. <br />
                            Votre contrat vous sera envoyé automatiquement après paiement.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                        
                        {/* Left Column: Form */}
                        <motion.div 
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="lg:col-span-2 space-y-8"
                        >
                            {/* Dates de location */}
                            <div className="bg-[#1a1f21] p-6 rounded-2xl border border-white/5 space-y-6">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Dates de location</h2>
                                </div>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold text-[#a1a1a1] uppercase">Départ</Label>
                                        <Input type="date" className="bg-black/20 border-white/10 text-white h-12" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold text-[#a1a1a1] uppercase">Retour</Label>
                                        <Input type="date" className="bg-black/20 border-white/10 text-white h-12" />
                                    </div>
                                </div>
                                
                                <div className="flex items-start gap-2 text-sm text-[#a1a1a1] bg-white/5 p-3 rounded-lg">
                                    <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                    <div>
                                        <p><span className="text-white font-medium">Minimum 2 jours</span></p>
                                        <p>Les dates déjà prises sont automatiquement bloquées</p>
                                    </div>
                                </div>
                            </div>

                            {/* Kilométrage */}
                            <div className="bg-[#1a1f21] p-6 rounded-2xl border border-white/5 space-y-6">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <Route className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Kilométrage</h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center justify-between bg-black/20 p-4 rounded-xl border border-white/10">
                                        <span className="text-white font-medium">Inclus par jour</span>
                                        <span className="text-primary font-bold">100 km</span>
                                    </div>

                                    <div className="space-y-3">
                                        <Label className="text-sm font-medium text-white">Ajouter des km supplémentaires</Label>
                                        <RadioGroup defaultValue="0" className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                            <div className="flex items-center justify-between space-x-2 border border-white/10 rounded-xl p-3 cursor-pointer hover:border-primary/50 transition-colors [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/5">
                                                <RadioGroupItem value="0" id="km-0" className="border-white/20 text-primary" />
                                                <Label htmlFor="km-0" className="flex-1 cursor-pointer text-sm">Aucun</Label>
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 border border-white/10 rounded-xl p-3 cursor-pointer hover:border-primary/50 transition-colors [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/5">
                                                <RadioGroupItem value="50" id="km-50" className="border-white/20 text-primary" />
                                                <Label htmlFor="km-50" className="flex-1 cursor-pointer text-sm">+50 km</Label>
                                            </div>
                                            <div className="flex items-center justify-between space-x-2 border border-white/10 rounded-xl p-3 cursor-pointer hover:border-primary/50 transition-colors [&:has(:checked)]:border-primary [&:has(:checked)]:bg-primary/5">
                                                <RadioGroupItem value="100" id="km-100" className="border-white/20 text-primary" />
                                                <Label htmlFor="km-100" className="flex-1 cursor-pointer text-sm">+100 km</Label>
                                            </div>
                                        </RadioGroup>
                                        <p className="text-xs text-[#a1a1a1] text-right">0.35 CHF/km supplémentaire</p>
                                    </div>
                                </div>
                            </div>

                            {/* Informations personnelles */}
                            <div className="bg-[#1a1f21] p-6 rounded-2xl border border-white/5 space-y-6">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Informations personnelles</h2>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold text-[#a1a1a1] uppercase">Prénom</Label>
                                        <Input type="text" placeholder="Votre prénom" className="bg-black/20 border-white/10 text-white h-12 placeholder:text-white/20" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold text-[#a1a1a1] uppercase">Nom</Label>
                                        <Input type="text" placeholder="Votre nom" className="bg-black/20 border-white/10 text-white h-12 placeholder:text-white/20" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold text-[#a1a1a1] uppercase">Email</Label>
                                        <div className="relative">
                                            <Input type="email" placeholder="exemple@email.com" className="bg-black/20 border-white/10 text-white h-12 pl-10 placeholder:text-white/20" />
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1a1]" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="text-xs font-bold text-[#a1a1a1] uppercase">Téléphone</Label>
                                        <div className="relative">
                                            <Input type="tel" placeholder="+41 79 123 45 67" className="bg-black/20 border-white/10 text-white h-12 pl-10 placeholder:text-white/20" />
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1a1]" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label className="text-xs font-bold text-[#a1a1a1] uppercase">Adresse complète</Label>
                                    <div className="relative">
                                        <Input type="text" placeholder="Rue, NPA, Ville" className="bg-black/20 border-white/10 text-white h-12 pl-10 placeholder:text-white/20" />
                                        <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#a1a1a1]" />
                                    </div>
                                </div>
                            </div>

                            {/* Documents obligatoires */}
                            <div className="bg-[#1a1f21] p-6 rounded-2xl border border-white/5 space-y-6">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                        <FileText className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Documents obligatoires</h2>
                                </div>

                                <p className="text-sm text-[#a1a1a1]">Pour valider votre réservation, merci d’envoyer vos documents (Téléchargement obligatoire sur le formulaire) :</p>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <label className="border border-dashed border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group relative">
                                        <Input type="file" className="hidden" accept="image/*,.pdf" />
                                        <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Upload className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">Permis de conduire</p>
                                            <p className="text-xs text-[#a1a1a1]">(Recto + Verso)</p>
                                        </div>
                                    </label>
                                    <label className="border border-dashed border-white/20 rounded-xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:border-primary/50 hover:bg-white/5 transition-all cursor-pointer group relative">
                                        <Input type="file" className="hidden" accept="image/*,.pdf" />
                                        <div className="w-12 h-12 rounded-full bg-black/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                                            <Upload className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-white">Pièce d'identité</p>
                                            <p className="text-xs text-[#a1a1a1]">Carte d'identité ou Passeport</p>
                                        </div>
                                    </label>
                                </div>
                            </div>

                        </motion.div>

                        {/* Right Column: Payment & Summary */}
                        <motion.div 
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="sticky top-24 space-y-6"
                        >
                            <div className="bg-[#1a1f21] p-6 rounded-2xl border border-white/5 space-y-6 shadow-xl">
                                <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                                        <Shield className="w-5 h-5" />
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Paiement sécurisé</h2>
                                </div>

                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-white/80">
                                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                        <span>Paiement 100% en ligne</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-white/80">
                                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                                        <span>Contrat automatique envoyé par email après validation</span>
                                    </div>
                                </div>

                                <div className="pt-4 border-t border-white/10">
                                    <Button variant="luxury" className="w-full h-12 text-base group">
                                        Payer & Recevoir mon contrat
                                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </Button>
                                    <p className="text-center text-xs text-[#a1a1a1] mt-3">
                                        En cliquant, vous acceptez nos conditions générales de location.
                                    </p>
                                </div>
                            </div>

                            {/* Trust Badges */}
                            <div className="flex items-center justify-center gap-4 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                                <CreditCard className="w-8 h-8 text-white" />
                                <div className="h-6 w-px bg-white/20"></div>
                                <Shield className="w-8 h-8 text-white" />
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
