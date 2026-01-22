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
    Mail,
    ChevronRight,
    Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function BookingPage() {
    const [dateRange, setDateRange] = useState({ start: "", end: "" });
    const [extraKm, setExtraKm] = useState("0");

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <main className="min-h-screen bg-[#0c1315] text-white flex flex-col font-sans selection:bg-primary/30">
            <Navbar />
            
            {/* Background Elements */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <section className="pt-32 pb-24 relative z-10">
                <div className="max-w-7xl mx-auto px-4 md:px-6">
                    
                    {/* Header */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center mb-16 max-w-3xl mx-auto"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/80">Espace Réservation</span>
                        </div>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-6 leading-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                            Réservez votre <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/50">véhicule</span>
                        </h1>
                        
                        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                            Finalisez votre location en quelques étapes simples. 
                            <br className="hidden md:block" />
                            Votre contrat sera généré automatiquement.
                        </p>
                    </motion.div>

                    <motion.div 
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                    >
                        
                        {/* Left Column: Form */}
                        <div className="lg:col-span-8 space-y-8">
                            
                            {/* Dates de location */}
                            <motion.div variants={itemVariants} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                                <div className="relative bg-[#13181a]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 text-primary shadow-lg shadow-primary/10">
                                            <Calendar className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-white">Dates de location</h2>
                                            <p className="text-sm text-white/50">Sélectionnez votre période</p>
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3">
                                            <Label className="text-xs font-bold text-primary/80 uppercase tracking-wider ml-1">Départ</Label>
                                            <div className="relative group/input">
                                                <Input type="date" className="bg-white/5 border-white/10 text-white h-14 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300" />
                                                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover/input:opacity-100 transition-opacity pointer-events-none" />
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-xs font-bold text-primary/80 uppercase tracking-wider ml-1">Retour</Label>
                                            <div className="relative group/input">
                                                <Input type="date" className="bg-white/5 border-white/10 text-white h-14 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300" />
                                                <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover/input:opacity-100 transition-opacity pointer-events-none" />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6 flex items-start gap-3 text-sm text-white/60 bg-white/5 p-4 rounded-xl border border-white/5">
                                        <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                        <div className="space-y-1">
                                            <p className="font-medium text-white">Conditions de réservation</p>
                                            <p>Minimum 2 jours de location. Les dates indisponibles sont grisées.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Kilométrage */}
                            <motion.div variants={itemVariants} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                                <div className="relative bg-[#13181a]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 text-primary shadow-lg shadow-primary/10">
                                            <Route className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-white">Kilométrage</h2>
                                            <p className="text-sm text-white/50">Gérez vos déplacements</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between bg-gradient-to-r from-white/10 to-white/5 p-5 rounded-xl border border-white/10">
                                            <div className="flex items-center gap-3">
                                                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                                                    <Check className="w-4 h-4 text-white" />
                                                </div>
                                                <span className="text-white font-medium">Inclus par jour</span>
                                            </div>
                                            <span className="text-2xl font-bold text-primary">100 km</span>
                                        </div>

                                        <div className="space-y-4">
                                            <Label className="text-sm font-medium text-white/80 ml-1">Ajouter des km supplémentaires</Label>
                                            <RadioGroup defaultValue="0" className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                                {[
                                                    { value: "0", label: "Aucun", price: "Inclus" },
                                                    { value: "50", label: "+50 km", price: "+17.50 CHF" },
                                                    { value: "100", label: "+100 km", price: "+35.00 CHF" }
                                                ].map((option) => (
                                                    <div key={option.value} className="relative">
                                                        <RadioGroupItem value={option.value} id={`km-${option.value}`} className="peer sr-only" />
                                                        <Label 
                                                            htmlFor={`km-${option.value}`} 
                                                            className="flex flex-col items-center justify-center gap-2 p-4 rounded-xl border border-white/10 bg-white/5 cursor-pointer transition-all duration-300 hover:bg-white/10 peer-checked:border-primary peer-checked:bg-primary/10 peer-checked:shadow-[0_0_20px_rgba(var(--primary-rgb),0.2)]"
                                                        >
                                                            <span className="font-bold text-lg text-white">{option.label}</span>
                                                            <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded-full">{option.price}</span>
                                                        </Label>
                                                    </div>
                                                ))}
                                            </RadioGroup>
                                            <p className="text-xs text-white/40 text-right italic">0.35 CHF/km supplémentaire</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Informations personnelles */}
                            <motion.div variants={itemVariants} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                                <div className="relative bg-[#13181a]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 text-primary shadow-lg shadow-primary/10">
                                            <User className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-white">Informations personnelles</h2>
                                            <p className="text-sm text-white/50">Vos coordonnées</p>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3">
                                            <Label className="text-xs font-bold text-primary/80 uppercase tracking-wider ml-1">Prénom</Label>
                                            <Input type="text" placeholder="John" className="bg-white/5 border-white/10 text-white h-14 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20" />
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-xs font-bold text-primary/80 uppercase tracking-wider ml-1">Nom</Label>
                                            <Input type="text" placeholder="Doe" className="bg-white/5 border-white/10 text-white h-14 px-4 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                                        <div className="space-y-3">
                                            <Label className="text-xs font-bold text-primary/80 uppercase tracking-wider ml-1">Email</Label>
                                            <div className="relative">
                                                <Input type="email" placeholder="john.doe@example.com" className="bg-white/5 border-white/10 text-white h-14 pl-12 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20" />
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                                                    <Mail className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="space-y-3">
                                            <Label className="text-xs font-bold text-primary/80 uppercase tracking-wider ml-1">Téléphone</Label>
                                            <div className="relative">
                                                <Input type="tel" placeholder="+41 79 123 45 67" className="bg-white/5 border-white/10 text-white h-14 pl-12 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20" />
                                                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                                                    <Phone className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mt-6">
                                        <Label className="text-xs font-bold text-primary/80 uppercase tracking-wider ml-1">Adresse complète</Label>
                                        <div className="relative">
                                            <Input type="text" placeholder="Rue, NPA, Ville" className="bg-white/5 border-white/10 text-white h-14 pl-12 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all placeholder:text-white/20" />
                                            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40">
                                                <MapPin className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Documents obligatoires */}
                            <motion.div variants={itemVariants} className="group relative">
                                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
                                <div className="relative bg-[#13181a]/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-xl">
                                    <div className="flex items-center gap-4 mb-8">
                                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center border border-primary/20 text-primary shadow-lg shadow-primary/10">
                                            <FileText className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-white">Documents obligatoires</h2>
                                            <p className="text-sm text-white/50">Vérification d'identité</p>
                                        </div>
                                    </div>

                                    <p className="text-sm text-white/60 mb-6 bg-white/5 p-4 rounded-xl border border-white/5">
                                        Pour valider votre réservation, merci d’envoyer vos documents. 
                                        <span className="block mt-1 text-primary">Formats acceptés : PDF, JPG, PNG.</span>
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <label className="group/upload relative border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/upload:opacity-100 transition-opacity" />
                                            <Input type="file" className="hidden" accept="image/*,.pdf" />
                                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover/upload:scale-110 group-hover/upload:bg-primary/20 transition-all duration-300">
                                                <Upload className="w-7 h-7 text-white/60 group-hover/upload:text-primary transition-colors" />
                                            </div>
                                            <div className="relative z-10">
                                                <p className="text-base font-bold text-white group-hover/upload:text-primary transition-colors">Permis de conduire</p>
                                                <p className="text-xs text-white/40 mt-1">(Recto + Verso)</p>
                                            </div>
                                        </label>
                                        
                                        <label className="group/upload relative border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center gap-4 hover:border-primary/50 hover:bg-white/5 transition-all duration-300 cursor-pointer overflow-hidden">
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover/upload:opacity-100 transition-opacity" />
                                            <Input type="file" className="hidden" accept="image/*,.pdf" />
                                            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center group-hover/upload:scale-110 group-hover/upload:bg-primary/20 transition-all duration-300">
                                                <Upload className="w-7 h-7 text-white/60 group-hover/upload:text-primary transition-colors" />
                                            </div>
                                            <div className="relative z-10">
                                                <p className="text-base font-bold text-white group-hover/upload:text-primary transition-colors">Pièce d'identité</p>
                                                <p className="text-xs text-white/40 mt-1">CNI ou Passeport</p>
                                            </div>
                                        </label>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                        {/* Right Column: Payment & Summary */}
                        <div className="lg:col-span-4 sticky top-32">
                            <motion.div 
                                variants={itemVariants}
                                className="relative group"
                            >
                                <div className="absolute -inset-0.5 bg-gradient-to-b from-primary/20 to-emerald-500/20 rounded-2xl opacity-100 blur-sm" />
                                <div className="relative bg-[#13181a] backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                                    {/* Decoration */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-[100px] pointer-events-none" />
                                    
                                    <div className="flex items-center gap-4 mb-8 relative z-10">
                                        <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 text-emerald-500">
                                            <Shield className="w-6 h-6" />
                                        </div>
                                        <div>
                                            <h2 className="text-xl font-bold text-white">Paiement</h2>
                                            <p className="text-sm text-white/50">100% Sécurisé</p>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-8">
                                        <div className="flex items-start gap-3 text-sm text-white/80">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-500" />
                                            </div>
                                            <span className="leading-tight">Confirmation immédiate par email</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm text-white/80">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-500" />
                                            </div>
                                            <span className="leading-tight">Contrat généré automatiquement</span>
                                        </div>
                                        <div className="flex items-start gap-3 text-sm text-white/80">
                                            <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 mt-0.5">
                                                <Check className="w-3 h-3 text-emerald-500" />
                                            </div>
                                            <span className="leading-tight">Aucun frais caché</span>
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-white/10 space-y-4">
                                        <div className="flex justify-between items-end mb-4">
                                            <span className="text-white/60">Total estimé</span>
                                            <span className="text-2xl font-bold text-white">--- CHF</span>
                                        </div>
                                        
                                        <Button className="w-full h-14 text-base font-bold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary hover:scale-[1.02] transition-all duration-300 shadow-lg shadow-primary/20 rounded-xl group">
                                            <span>Payer & Réserver</span>
                                            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                        
                                        <p className="text-center text-[10px] text-white/30 leading-tight">
                                            En validant votre paiement, vous acceptez nos conditions générales de location et notre politique de confidentialité.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Trust Badges */}
                            <motion.div 
                                variants={itemVariants}
                                className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                            >
                                <CreditCard className="w-8 h-8 text-white" />
                                <div className="h-8 w-px bg-white/20"></div>
                                <Shield className="w-8 h-8 text-white" />
                                <div className="h-8 w-px bg-white/20"></div>
                                <div className="text-xs font-bold text-white border border-white/50 px-2 py-1 rounded">SSL</div>
                            </motion.div>
                        </div>

                    </motion.div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}
