"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
    MapPin, 
    Calendar, 
    Gauge, 
    CheckCircle, 
    Star, 
    Share2, 
    Heart, 
    Zap, 
    Users, 
    ChevronDown, 
    BadgeCheck,
    Grid,
    Settings,
    Fuel,
    Info
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { allCars } from "@/lib/data";

export default function CarDetailPage() {
    const params = useParams();
    const id = params?.id ? parseInt(params.id as string) : null;
    const car = allCars.find(c => c.id === id);
    const similarCars = allCars.filter(c => c.id !== id).slice(0, 4);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [extraKm, setExtraKm] = useState(0);
    const [insuranceOption, setInsuranceOption] = useState('standard');
    const [totalPrice, setTotalPrice] = useState(0);
    const [days, setDays] = useState(0);

    useEffect(() => {
        if (startDate && endDate && car) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = end.getTime() - start.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            setDays(diffDays > 0 ? diffDays : 0);

            if (diffDays >= 2) {
                const rentalCost = diffDays * car.price;
                const extraKmCost = extraKm * 0.35;
                setTotalPrice(rentalCost + extraKmCost);
            } else {
                setTotalPrice(0);
            }
        } else {
             setTotalPrice(0);
             setDays(0);
        }
    }, [startDate, endDate, extraKm, car]);

    // Handle case where id is not yet available or car not found
    if (!id) return <div className="min-h-screen flex items-center justify-center bg-[#0c1315] text-white">Chargement...</div>;
    if (!car) return <div className="min-h-screen flex items-center justify-center bg-[#0c1315] text-white">Voiture non trouvée</div>;

    const serviceFee = 45;
    const tax = 62;
    const finalTotal = totalPrice > 0 ? totalPrice + serviceFee + tax : 0;
    const isDateValid = days >= 2;

    return (
        <main className="min-h-screen bg-[#0c1315] text-white flex flex-col font-sans">
            <Navbar />
            <div className="pt-24 pb-12 flex-1">
                <div className="layout-container mx-auto max-w-[1200px] px-4 py-8 lg:px-8">
                    {/* Breadcrumbs */}
                    <nav className="flex flex-wrap gap-2 mb-6 text-sm">
                        <Link className="text-muted-foreground hover:text-white transition-colors" href="/">Accueil</Link>
                        <span className="text-muted-foreground">/</span>
                        <Link className="text-muted-foreground hover:text-white transition-colors" href="/fleet">Notre Collection</Link>
                        <span className="text-muted-foreground">/</span>
                        <span className="text-white font-medium">{car.name}</span>
                    </nav>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                        {/* Left Column: Media & Details */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Hero Gallery */}
                            <div className="space-y-4">
                                <div 
                                    className="w-full aspect-video rounded-2xl bg-center bg-cover bg-no-repeat shadow-2xl relative group overflow-hidden" 
                                    style={{ backgroundImage: `url('${car.image}')` }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60"></div>
                                    <button className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-white/20 transition">
                                        <Grid className="w-5 h-5" />
                                        <span className="text-sm font-medium">Voir la galerie</span>
                                    </button>
                                </div>
                                <div className="grid grid-cols-4 gap-3">
                                    {/* Using same image for thumbnails as we don't have multiple images in mock data */}
                                    <div className="aspect-[4/3] rounded-lg bg-center bg-cover cursor-pointer ring-2 ring-primary" style={{ backgroundImage: `url('${car.image}')` }}></div>
                                    <div className="aspect-[4/3] rounded-lg bg-center bg-cover cursor-pointer hover:opacity-80 transition opacity-70" style={{ backgroundImage: `url('${car.image}')` }}></div>
                                    <div className="aspect-[4/3] rounded-lg bg-center bg-cover cursor-pointer hover:opacity-80 transition opacity-70" style={{ backgroundImage: `url('${car.image}')` }}></div>
                                    <div className="aspect-[4/3] rounded-lg bg-center bg-cover cursor-pointer hover:opacity-80 transition relative flex items-center justify-center bg-[#232f48]">
                                        <span className="text-white font-medium text-lg">+3</span>
                                    </div>
                                </div>
                            </div>

                            {/* Car Header & Core Specs */}
                            <div className="flex flex-col gap-6 border-b border-[#232f48] pb-8">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                    <div>
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-primary/20 text-primary border border-primary/20">{car.category}</span>
                                            <div className="flex items-center gap-1 text-yellow-400">
                                                <Star className="w-4 h-4 fill-current" />
                                                <span className="text-white text-xs font-bold">4.9</span>
                                                <span className="text-muted-foreground text-xs font-normal">(128)</span>
                                            </div>
                                        </div>
                                        <h1 className="text-white text-4xl md:text-5xl font-black tracking-tight mb-2">{car.name}</h1>
                                        <p className="text-muted-foreground text-lg">2014 • {car.category} • {car.transmission}</p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button className="size-10 rounded-full bg-[#232f48] flex items-center justify-center text-white hover:bg-primary hover:text-white transition-colors">
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                        <button className="size-10 rounded-full bg-[#232f48] flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-colors">
                                            <Heart className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>

                                {/* Quick Specs Grid */}
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <div className="bg-[#1a2332] p-4 rounded-xl flex flex-col gap-1 border border-[#232f48]">
                                        <Gauge className="w-6 h-6 text-primary mb-1" />
                                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Vitesse Max</span>
                                        <span className="text-white font-bold text-lg">{car.speed}</span>
                                    </div>
                                    <div className="bg-[#1a2332] p-4 rounded-xl flex flex-col gap-1 border border-[#232f48]">
                                        <Fuel className="w-6 h-6 text-primary mb-1" />
                                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Transmission</span>
                                        <span className="text-white font-bold text-lg truncate" title={car.transmission}>{car.transmission}</span>
                                    </div>
                                    <div className="bg-[#1a2332] p-4 rounded-xl flex flex-col gap-1 border border-[#232f48]">
                                        <Users className="w-6 h-6 text-primary mb-1" />
                                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Places</span>
                                        <span className="text-white font-bold text-lg">5 Adultes</span>
                                    </div>
                                    <div className="bg-[#1a2332] p-4 rounded-xl flex flex-col gap-1 border border-[#232f48]">
                                        <Zap className="w-6 h-6 text-primary mb-1" />
                                        <span className="text-muted-foreground text-xs font-medium uppercase tracking-wider">Puissance</span>
                                        <span className="text-white font-bold text-lg">300 ch</span>
                                    </div>
                                </div>
                            </div>

                            {/* Description & Features */}
                            <div className="grid md:grid-cols-3 gap-8 border-b border-[#232f48] pb-8">
                                <div className="md:col-span-2 space-y-4">
                                    <h3 className="text-white text-xl font-bold">Description du véhicule</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {car.description}
                                    </p>
                                </div>
                                <div className="md:col-span-1 space-y-4">
                                    <h3 className="text-white text-xl font-bold">Caractéristiques</h3>
                                    <ul className="space-y-3">
                                        {car.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-center gap-3 text-muted-foreground text-sm">
                                                <CheckCircle className="w-5 h-5 text-primary" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Reviews Section */}
                            <div className="space-y-6">
                                <div className="flex items-center justify-between">
                                    <h3 className="text-white text-xl font-bold">Avis clients</h3>
                                    <a className="text-primary text-sm font-medium hover:underline" href="#">Voir les 128 avis</a>
                                </div>
                                <div className="flex flex-wrap gap-x-8 gap-y-6 bg-[#1a2332] p-6 rounded-2xl border border-[#232f48]">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-baseline gap-3">
                                            <p className="text-white text-5xl font-black leading-tight tracking-tighter">4.9</p>
                                            <p className="text-muted-foreground text-sm">sur 5</p>
                                        </div>
                                        <div className="flex gap-0.5 text-[#fbbf24]">
                                            {[1, 2, 3, 4].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                                            <Star className="w-5 h-5 fill-current opacity-50" />
                                        </div>
                                        <p className="text-muted-foreground text-sm">Basé sur 128 réservations vérifiées</p>
                                    </div>
                                    <div className="h-16 w-px bg-[#232f48] hidden md:block"></div>
                                    <div className="grid flex-1 min-w-[200px] grid-cols-[20px_1fr_40px] items-center gap-y-2">
                                        {[
                                            { s: 5, p: 87 },
                                            { s: 4, p: 10 },
                                            { s: 3, p: 2 },
                                            { s: 2, p: 1 },
                                            { s: 1, p: 0 },
                                        ].map((r) => (
                                            <div key={r.s} className="contents text-xs font-medium">
                                                <p className="text-white">{r.s}</p>
                                                <div className="flex h-1.5 flex-1 overflow-hidden rounded-full bg-[#232f48]">
                                                    <div className="rounded-full bg-primary" style={{ width: `${r.p}%` }}></div>
                                                </div>
                                                <p className="text-muted-foreground text-right">{r.p}%</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Sticky Booking Card */}
                        <div className="lg:col-span-1">
                            <div className="sticky top-24 flex flex-col gap-4">
                                <div className="rounded-2xl bg-[#1a2332] p-6 border border-[#232f48] shadow-2xl relative overflow-hidden">
                                    {/* Decorative gradient blob */}
                                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 blur-[50px] rounded-full pointer-events-none"></div>
                                    
                                    <div className="relative z-10">
                                        <div className="flex items-end gap-2 mb-6">
                                            <span className="text-white text-4xl font-black tracking-tight">{car.price} CHF</span>
                                            <span className="text-muted-foreground text-base mb-1.5">/ jour</span>
                                        </div>
                                        
                                        <div className="flex flex-col gap-4">
                                            {/* Date Selection */}
                                            <div className="grid grid-cols-2 gap-3">
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-xs font-semibold text-muted-foreground uppercase">Départ</label>
                                                    <div className="bg-[#111722] border border-[#232f48] rounded-lg flex items-center gap-2 hover:border-primary/50 transition overflow-hidden">
                                                        <Input 
                                                            type="date" 
                                                            value={startDate}
                                                            onChange={(e) => setStartDate(e.target.value)}
                                                            className="bg-transparent border-0 text-white focus-visible:ring-0 text-xs p-3 h-auto w-full" 
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-1.5">
                                                    <label className="text-xs font-semibold text-muted-foreground uppercase">Retour</label>
                                                    <div className="bg-[#111722] border border-[#232f48] rounded-lg flex items-center gap-2 hover:border-primary/50 transition overflow-hidden">
                                                         <Input 
                                                            type="date" 
                                                            value={endDate}
                                                            onChange={(e) => setEndDate(e.target.value)}
                                                            className="bg-transparent border-0 text-white focus-visible:ring-0 text-xs p-3 h-auto w-full" 
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            {/* Warning for Minimum Days */}
                                            {startDate && endDate && !isDateValid && (
                                                <div className="flex items-start gap-2 text-red-400 text-xs bg-red-400/10 p-2 rounded-lg border border-red-400/20">
                                                    <Info className="w-4 h-4 shrink-0 mt-0.5" />
                                                    <span>Minimum 2 jours de location requis.</span>
                                                </div>
                                            )}

                                            {/* Extra Km */}
                                            <div className="flex flex-col gap-1.5">
                                                <div className="flex justify-between items-center">
                                                    <label className="text-xs font-semibold text-muted-foreground uppercase">Km supplémentaires</label>
                                                    <span className="text-[10px] text-primary bg-primary/10 px-1.5 py-0.5 rounded">0.35 CHF / km</span>
                                                </div>
                                                <div className="bg-[#111722] border border-[#232f48] rounded-lg flex items-center gap-2 hover:border-primary/50 transition p-1">
                                                     <Input
                                                        type="number"
                                                        min="0"
                                                        placeholder="Ajouter des km (en plus des 50km/j)"
                                                        value={extraKm}
                                                        onChange={(e) => setExtraKm(parseInt(e.target.value) || 0)}
                                                        className="bg-transparent border-0 text-white focus-visible:ring-0 h-9"
                                                    />
                                                </div>
                                                <p className="text-[10px] text-muted-foreground text-right">50 km inclus par jour</p>
                                            </div>

                                            {/* Location */}
                                            <div className="flex flex-col gap-1.5">
                                                <label className="text-xs font-semibold text-muted-foreground uppercase">Lieu de prise en charge</label>
                                                <div className="bg-[#111722] border border-[#232f48] rounded-lg p-3 flex items-center justify-between cursor-pointer hover:border-primary/50 transition">
                                                    <div className="flex items-center gap-2">
                                                        <MapPin className="w-4 h-4 text-muted-foreground" />
                                                        <span className="text-white text-sm">{car.location || "Lausanne"}</span>
                                                    </div>
                                                    <ChevronDown className="w-4 h-4 text-muted-foreground" />
                                                </div>
                                            </div>

                                            <div className="my-2 border-t border-[#232f48] border-dashed"></div>
                                            
                                            {isDateValid && totalPrice > 0 ? (
                                                <>
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-muted-foreground">Location ({days} jours)</span>
                                                        <span className="text-white font-medium">{(days * car.price).toFixed(2)} CHF</span>
                                                    </div>
                                                    {extraKm > 0 && (
                                                        <div className="flex justify-between items-center text-sm">
                                                            <span className="text-muted-foreground">Km supp. ({extraKm} km)</span>
                                                            <span className="text-white font-medium">{(extraKm * 0.35).toFixed(2)} CHF</span>
                                                        </div>
                                                    )}
                                                    {insuranceOption === 'reduced' && (
                                                        <div className="flex justify-between items-center text-sm">
                                                            <span className="text-muted-foreground">Assurance réduite</span>
                                                            <span className="text-white font-medium">{(days * 20).toFixed(2)} CHF</span>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-muted-foreground">Frais de service</span>
                                                        <span className="text-white font-medium">{serviceFee.toFixed(2)} CHF</span>
                                                    </div>
                                                    <div className="flex justify-between items-center text-sm">
                                                        <span className="text-muted-foreground">TVA</span>
                                                        <span className="text-white font-medium">{tax.toFixed(2)} CHF</span>
                                                    </div>
                                                    <div className="my-2 border-t border-[#232f48]"></div>
                                                    <div className="flex justify-between items-center">
                                                        <span className="text-white font-bold text-lg">Total</span>
                                                        <span className="text-primary font-black text-2xl">{finalTotal.toFixed(2)} CHF</span>
                                                    </div>
                                                </>
                                            ) : (
                                                <div className="text-center py-4 text-muted-foreground text-sm">
                                                    Sélectionnez vos dates pour voir le prix
                                                </div>
                                            )}
                                        </div>

                                        <Button 
                                            className="w-full mt-6 bg-primary text-black hover:bg-white hover:text-black font-bold h-12 text-base"
                                            disabled={!isDateValid || totalPrice === 0}
                                        >
                                            Réserver maintenant
                                        </Button>
                                        
                                        <p className="text-center text-[10px] text-muted-foreground mt-3">
                                            Paiement 100% sécurisé. Contrat envoyé automatiquement.
                                        </p>
                                    </div>
                                </div>

                                {/* Help Box */}
                                <div className="bg-[#1a2332] p-4 rounded-xl border border-[#232f48] flex items-center gap-4">
                                    <div className="size-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                                        <Settings className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">Besoin d'aide ?</h4>
                                        <p className="text-muted-foreground text-xs">Contactez notre support 24/7 pour toute question.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
