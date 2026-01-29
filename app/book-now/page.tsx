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
    Lock
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { useState, useEffect, Suspense } from "react";
import { cn } from "@/lib/utils";
import { allCars } from "@/lib/data";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";

function BookingContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [dateRange, setDateRange] = useState({ 
        start: searchParams.get("pickup") || "", 
        end: searchParams.get("return") || "" 
    });
    const [extraKm, setExtraKm] = useState("0");
    
    // Get car from URL or default to first
    const carId = parseInt(searchParams.get("carId") || "1");
    const [selectedCar] = useState(allCars.find(c => c.id === carId) || allCars[0]);

    const [totalPrice, setTotalPrice] = useState(0);
    const [days, setDays] = useState(0);
    const [files, setFiles] = useState<{ license: File | null; identity: File | null }>({
        license: null,
        identity: null
    });
    const [paymentMethod, setPaymentMethod] = useState("stripe");
    const [currency, setCurrency] = useState<string>("CHF");
    const [gateways, setGateways] = useState<{ stripe: boolean; paypal: boolean }>({ stripe: true, paypal: true });
    
    // Form Data State
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleBooking = async () => {
        if (!selectedCar) return;

        try {
            const bookingData = {
                carId: selectedCar.id,
                startDate: dateRange.start,
                endDate: dateRange.end,
                totalPrice: totalPrice,
                paymentMethod: paymentMethod === "test" ? "SIMULATION" : paymentMethod.toUpperCase(),
                user: formData // In a real app, user ID comes from session, but here we might need to handle guest or ensure auth
            };

            // If using Test Gateway, call API directly
            if (paymentMethod === "test") {
                const res = await fetch("/api/bookings", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(bookingData),
                });

                if (res.ok) {
                    router.push("/dashboard?booking=success");
                } else {
                    const errorData = await res.json().catch(() => ({}));
                    console.error("Booking failed:", errorData);
                    alert(`Booking failed: ${errorData.error || "Unknown error"}. ${errorData.details || "Please try again."}`);
                }
            } else if (paymentMethod === "stripe") {
                // Redirect to the dedicated payment page for Stripe
                router.push(`/fleet/${selectedCar.id}/payment?startDate=${dateRange.start}&endDate=${dateRange.end}&totalPrice=${totalPrice}`);
            } else {
                alert("Payment method not fully implemented in this demo.");
            }
        } catch (error) {
            console.error("Booking error:", error);
            alert("An error occurred.");
        }
    };


    // Calculate days
    useEffect(() => {
        if (dateRange.start && dateRange.end) {
            const start = new Date(dateRange.start);
            const end = new Date(dateRange.end);
            
            // Validate dates
            if (end < start) {
                setDays(0);
                return;
            }

            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
            // If same day, count as 1 day, but we need min 2 days check
            const calculatedDays = diffDays === 0 ? 1 : diffDays + 1; // Include start day
            
            setDays(calculatedDays);
        } else {
            setDays(0);
        }
    }, [dateRange]);

    // Calculate total price
    useEffect(() => {
        if (selectedCar && days > 0) {
            let price = selectedCar.price * days;
            
            // Add extra km price
            if (extraKm === "50") price += 17.50;
            if (extraKm === "100") price += 35.00;

            setTotalPrice(price);
        } else {
            setTotalPrice(0);
        }
    }, [selectedCar, days, extraKm]);

    const handleFileChange = (type: 'license' | 'identity', e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFiles(prev => ({ ...prev, [type]: e.target.files![0] }));
        }
    };

    const isFormValid = days >= 2 && 
                        files.license && 
                        files.identity && 
                        formData.firstName.trim() !== "" && 
                        formData.lastName.trim() !== "" && 
                        formData.email.trim() !== "" && 
                        formData.phone.trim() !== "" && 
                        formData.address.trim() !== "";

    // Load public settings for currency and enabled gateways
    useEffect(() => {
        async function loadSettings() {
            try {
                const res = await fetch("/api/settings");
                if (res.ok) {
                    const data = await res.json();
                    setCurrency((data.currency || "USD").toUpperCase());
                    setGateways({
                        stripe: !!data.stripePublishableKey,
                        paypal: !!data.paypalClientId,
                    });
                    if (!data.stripePublishableKey && data.paypalClientId) {
                        setPaymentMethod("paypal");
                    }
                }
            } catch {
                // Keep defaults
            }
        }
        loadSettings();
    }, []);
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
            transition: { type: "spring" as const, stiffness: 100 }
        }
    };

    return (
        <main className="min-h-screen bg-[#05080a] text-white flex flex-col font-sans selection:bg-primary/30">
            <Navbar />
            
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-500/5 rounded-full blur-[120px]" />
            </div>

            <section className="flex-grow pt-32 pb-20 px-4 md:px-6 relative z-10">
                <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"
                    >
                        {/* LEFT COLUMN - FORM */}
                        <div className="lg:col-span-8 space-y-12">
                            <motion.div variants={itemVariants}>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-12" />
                                    <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">Réservation en ligne</span>
                                    <div className="h-px bg-gradient-to-r from-transparent via-primary to-transparent w-12" />
                                </div>
                                <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                                    Réservez votre <br/>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/50">Expérience</span>
                                </h1>
                                <p className="text-[#a1a1a1] text-lg max-w-xl leading-relaxed">
                                    Complétez le formulaire ci-dessous en quelques étapes simples. 
                                    Votre contrat de location sera généré automatiquement.
                                </p>
                            </motion.div>

                            {/* 01. DATES */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-lg font-bold font-epilogue text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                                        01
                                    </div>
                                    <h2 className="text-2xl font-bold">Dates de location</h2>
                                </div>
                                
                                <div className="bg-[#0c1315]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-xl hover:border-white/10 transition-colors duration-300">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div className="space-y-3 group">
                                            <Label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider group-focus-within:text-primary transition-colors">Date de départ</Label>
                                            <div className="relative">
                                                <Input 
                                                    type="date" 
                                                    className="bg-black/20 border-white/10 text-white h-14 px-4 rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                                    value={dateRange.start}
                                                    onChange={(e) => setDateRange(prev => ({ ...prev, start: e.target.value }))}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-3 group">
                                            <Label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider group-focus-within:text-primary transition-colors">Date de retour</Label>
                                            <div className="relative">
                                                <Input 
                                                    type="date" 
                                                    className="bg-black/20 border-white/10 text-white h-14 px-4 rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all"
                                                    value={dateRange.end}
                                                    onChange={(e) => setDateRange(prev => ({ ...prev, end: e.target.value }))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3 text-sm text-[#a1a1a1] bg-white/5 p-4 rounded-2xl mt-6 border border-white/5">
                                        <Info className="w-5 h-5 text-primary shrink-0" />
                                        <div>
                                            <p className="mb-1"><span className={cn("font-bold transition-colors", days < 2 && days > 0 ? "text-red-500" : "text-white")}>Minimum 2 jours de location</span></p>
                                            <p className="text-white/60 text-xs">Les dates indisponibles sont automatiquement grisées dans le calendrier.</p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 02. MILEAGE */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-lg font-bold font-epilogue text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                                        02
                                    </div>
                                    <h2 className="text-2xl font-bold">Kilométrage</h2>
                                </div>

                                <div className="bg-[#0c1315]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-xl">
                                    <div className="flex items-center justify-between bg-gradient-to-r from-primary/10 to-transparent p-4 rounded-2xl border border-primary/20 mb-8">
                                        <span className="text-white font-bold flex items-center gap-2">
                                            <Route className="w-4 h-4 text-primary" />
                                            Inclus dans le forfait
                                        </span>
                                        <span className="text-primary font-bold bg-primary/10 px-3 py-1 rounded-lg">100 km / jour</span>
                                    </div>

                                    <Label className="text-sm font-medium text-white mb-4 block">Ajouter des kilomètres supplémentaires</Label>
                                    <RadioGroup value={extraKm} onValueChange={setExtraKm} className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                        {[
                                            { value: "0", label: "Standard", sub: "100 km / jour", price: "Inclus" },
                                            { value: "50", label: "+50 km", sub: "Total: 150 km/j", price: "+17.50 CHF/j" },
                                            { value: "100", label: "+100 km", sub: "Total: 200 km/j", price: "+35.00 CHF/j" },
                                        ].map((option) => (
                                            <div 
                                                key={option.value}
                                                className={cn(
                                                    "relative overflow-hidden border rounded-2xl p-5 cursor-pointer transition-all duration-300 group",
                                                    extraKm === option.value 
                                                        ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]" 
                                                        : "border-white/10 hover:border-white/20 hover:bg-white/5"
                                                )}
                                            >
                                                <RadioGroupItem value={option.value} id={`km-${option.value}`} className="sr-only" />
                                                <Label htmlFor={`km-${option.value}`} className="cursor-pointer block w-full relative z-10">
                                                    <div className="font-bold mb-1 text-lg">{option.label}</div>
                                                    <div className="text-xs text-[#a1a1a1] mb-3">{option.sub}</div>
                                                    <div className={cn("font-bold text-sm", extraKm === option.value ? "text-primary" : "text-white")}>
                                                        {option.price}
                                                    </div>
                                                </Label>
                                                {extraKm === option.value && (
                                                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 blur-xl rounded-full" />
                                                )}
                                            </div>
                                        ))}
                                    </RadioGroup>
                                    <p className="text-xs text-[#a1a1a1] text-right mt-2 flex items-center justify-end gap-1">
                                        <Info className="w-3 h-3" />
                                        0.35 CHF par km supplémentaire hors forfait
                                    </p>
                                </div>
                            </motion.div>

                            {/* 03. PERSONAL INFO */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-lg font-bold font-epilogue text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                                        03
                                    </div>
                                    <h2 className="text-2xl font-bold">Vos informations</h2>
                                </div>

                                <div className="bg-[#0c1315]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-xl">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className="space-y-3 group">
                                            <Label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider">Prénom</Label>
                                            <Input 
                                                name="firstName"
                                                value={formData.firstName}
                                                onChange={handleInputChange}
                                                className="bg-black/20 border-white/10 text-white h-14 px-4 rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all" 
                                                placeholder="Jean" 
                                            />
                                        </div>
                                        <div className="space-y-3 group">
                                            <Label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider">Nom</Label>
                                            <Input 
                                                name="lastName"
                                                value={formData.lastName}
                                                onChange={handleInputChange}
                                                className="bg-black/20 border-white/10 text-white h-14 px-4 rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all" 
                                                placeholder="Dupont" 
                                            />
                                        </div>
                                        <div className="space-y-3 group">
                                            <Label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider">Email</Label>
                                            <div className="relative">
                                                <Input 
                                                    name="email"
                                                    value={formData.email}
                                                    onChange={handleInputChange}
                                                    className="bg-black/20 border-white/10 text-white h-14 pl-12 rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all" 
                                                    placeholder="jean.dupont@email.com" 
                                                    type="email" 
                                                />
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1a1] group-focus-within:text-primary transition-colors" />
                                            </div>
                                        </div>
                                        <div className="space-y-3 group">
                                            <Label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider">Téléphone</Label>
                                            <div className="relative">
                                                <Input 
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleInputChange}
                                                    className="bg-black/20 border-white/10 text-white h-14 pl-12 rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all" 
                                                    placeholder="+41 79 123 45 67" 
                                                    type="tel" 
                                                />
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1a1] group-focus-within:text-primary transition-colors" />
                                            </div>
                                        </div>
                                        <div className="space-y-3 md:col-span-2 group">
                                            <Label className="text-xs font-bold text-[#a1a1a1] uppercase tracking-wider">Adresse complète</Label>
                                            <div className="relative">
                                                <Input 
                                                    name="address"
                                                    value={formData.address}
                                                    onChange={handleInputChange}
                                                    className="bg-black/20 border-white/10 text-white h-14 pl-12 rounded-xl focus:ring-1 focus:ring-primary/50 focus:border-primary/50 transition-all" 
                                                    placeholder="Rue de la Gare 1, 1000 Lausanne" 
                                                />
                                                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#a1a1a1] group-focus-within:text-primary transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 04. DOCUMENTS */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-lg font-bold font-epilogue text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                                        04
                                    </div>
                                    <h2 className="text-2xl font-bold">Documents obligatoires</h2>
                                </div>

                                <div className="bg-[#0c1315]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-xl">
                                    <p className="text-sm text-[#a1a1a1] mb-6 flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-primary" />
                                        Vos documents sont stockés de manière sécurisée et cryptée.
                                    </p>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <label className={cn(
                                            "relative overflow-hidden border border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group",
                                            files.license 
                                                ? "border-primary/50 bg-primary/5" 
                                                : "border-white/20 hover:border-primary/50 hover:bg-white/5"
                                        )}>
                                            <Input 
                                                type="file" 
                                                className="hidden" 
                                                accept="image/*,.pdf"
                                                onChange={(e) => handleFileChange('license', e)}
                                            />
                                            <div className={cn(
                                                "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                                                files.license 
                                                    ? "bg-primary/20 text-primary scale-110" 
                                                    : "bg-white/5 text-white/40 group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-110"
                                            )}>
                                                {files.license ? <CheckCircle className="w-8 h-8" /> : <Upload className="w-8 h-8" />}
                                            </div>
                                            <p className="font-bold text-white mb-1">Permis de conduire</p>
                                            <p className="text-xs text-[#a1a1a1]">
                                                {files.license ? <span className="text-primary font-medium">{files.license.name}</span> : "Glisser ou cliquer pour uploader"}
                                            </p>
                                        </label>

                                        <label className={cn(
                                            "relative overflow-hidden border border-dashed rounded-2xl p-8 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer group",
                                            files.identity 
                                                ? "border-primary/50 bg-primary/5" 
                                                : "border-white/20 hover:border-primary/50 hover:bg-white/5"
                                        )}>
                                            <Input 
                                                type="file" 
                                                className="hidden" 
                                                accept="image/*,.pdf"
                                                onChange={(e) => handleFileChange('identity', e)}
                                            />
                                            <div className={cn(
                                                "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-all duration-300",
                                                files.identity 
                                                    ? "bg-primary/20 text-primary scale-110" 
                                                    : "bg-white/5 text-white/40 group-hover:bg-primary/10 group-hover:text-primary group-hover:scale-110"
                                            )}>
                                                {files.identity ? <CheckCircle className="w-8 h-8" /> : <Upload className="w-8 h-8" />}
                                            </div>
                                            <p className="font-bold text-white mb-1">Pièce d'identité</p>
                                            <p className="text-xs text-[#a1a1a1]">
                                                {files.identity ? <span className="text-primary font-medium">{files.identity.name}</span> : "Glisser ou cliquer pour uploader"}
                                            </p>
                                        </label>
                                    </div>
                                </div>
                            </motion.div>

                            {/* 05. PAYMENT */}
                            <motion.div variants={itemVariants} className="space-y-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 text-lg font-bold font-epilogue text-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.2)]">
                                        05
                                    </div>
                                    <h2 className="text-2xl font-bold">Moyen de paiement</h2>
                                </div>

                                <div className="bg-[#0c1315]/50 border border-white/5 rounded-3xl p-8 backdrop-blur-xl">
                                    <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-1 gap-4">
                                        {/* Stripe */}
                                        <div 
                                            className={cn(
                                                "relative overflow-hidden border rounded-2xl p-4 cursor-pointer transition-all duration-300 group",
                                                paymentMethod === "stripe" 
                                                    ? "border-primary bg-primary/10 shadow-[0_0_20px_rgba(var(--primary-rgb),0.1)]" 
                                                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                                            )}
                                        >
                                            <RadioGroupItem value="stripe" id="pay-stripe" className="sr-only" />
                                            <Label htmlFor="pay-stripe" className="cursor-pointer flex items-center gap-4 w-full relative z-10">
                                                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                                                    <CreditCard className="w-6 h-6 text-white" />
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="font-bold text-lg text-white">Carte Bancaire</div>
                                                    <div className="text-xs text-[#a1a1a1]">Paiement sécurisé via Stripe</div>
                                                </div>
                                                <div className="flex gap-2 opacity-50">
                                                     <div className="w-8 h-5 bg-white/10 rounded border border-white/10"></div>
                                                     <div className="w-8 h-5 bg-white/10 rounded border border-white/10"></div>
                                                </div>
                                            </Label>
                                            {paymentMethod === "stripe" && (
                                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-primary/20 blur-xl rounded-full" />
                                            )}
                                        </div>

                                        {/* PayPal */}
                                        {gateways.paypal && (
                                        <div 
                                            className={cn(
                                                "relative overflow-hidden border rounded-2xl p-4 cursor-pointer transition-all duration-300 group",
                                                paymentMethod === "paypal" 
                                                    ? "border-[#003087] bg-[#003087]/10 shadow-[0_0_20px_rgba(0,48,135,0.2)]" 
                                                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                                            )}
                                        >
                                            <RadioGroupItem value="paypal" id="pay-paypal" className="sr-only" />
                                            <Label htmlFor="pay-paypal" className="cursor-pointer flex items-center gap-4 w-full relative z-10">
                                                <div className="w-12 h-12 rounded-xl bg-[#003087] flex items-center justify-center text-white font-bold text-xl italic font-serif">
                                                    P
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="font-bold text-lg text-white">PayPal</div>
                                                    <div className="text-xs text-[#a1a1a1]">Rapide et sécurisé</div>
                                                </div>
                                            </Label>
                                            {paymentMethod === "paypal" && (
                                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-[#003087]/20 blur-xl rounded-full" />
                                            )}
                                        </div>
                                        )}

                                        {/* Test Gateway */}
                                        <div 
                                            className={cn(
                                                "relative overflow-hidden border rounded-2xl p-4 cursor-pointer transition-all duration-300 group",
                                                paymentMethod === "test" 
                                                    ? "border-green-500 bg-green-500/10 shadow-[0_0_20px_rgba(34,197,94,0.2)]" 
                                                    : "border-white/10 hover:border-white/20 hover:bg-white/5"
                                            )}
                                        >
                                            <RadioGroupItem value="test" id="pay-test" className="sr-only" />
                                            <Label htmlFor="pay-test" className="cursor-pointer flex items-center gap-4 w-full relative z-10">
                                                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center text-green-500 border border-green-500/30">
                                                    <Shield className="w-6 h-6" />
                                                </div>
                                                <div className="flex-grow">
                                                    <div className="font-bold text-lg text-white">Test Gateway</div>
                                                    <div className="text-xs text-[#a1a1a1]">Simulateur de paiement (Admin)</div>
                                                </div>
                                                <span className="text-[10px] font-bold uppercase bg-green-500/20 text-green-400 px-2 py-1 rounded">Dev Mode</span>
                                            </Label>
                                            {paymentMethod === "test" && (
                                                <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-green-500/20 blur-xl rounded-full" />
                                            )}
                                        </div>
                                    </RadioGroup>
                                </div>
                            </motion.div>
                        </div>

                        {/* RIGHT COLUMN - SUMMARY */}
                        <div className="lg:col-span-4 space-y-8">
                             {/* Sticky Summary */}
                             <motion.div 
                                variants={itemVariants} 
                                className="sticky top-24"
                             >
                                <div className="bg-[#0c1315] border border-white/10 rounded-[2rem] overflow-hidden shadow-2xl relative">
                                    {/* Ambient Glow behind card */}
                                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[80px] pointer-events-none" />

                                    {/* Header Image */}
                                    <div className="relative h-48 w-full bg-gradient-to-b from-[#1a1f21] to-[#0c1315] p-6 flex flex-col items-center justify-center group">
                                        <Image 
                                            src={selectedCar?.image || "/assets/golf7r.png"} 
                                            alt={selectedCar?.name || "Golf 7 R"}
                                            fill
                                            className="object-contain p-4 transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                            Sélectionné
                                        </div>
                                    </div>

                                    <div className="p-6 space-y-6 relative z-10">
                                        <div>
                                            <h3 className="text-2xl font-bold font-epilogue mb-2">{selectedCar?.name}</h3>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 text-[#a1a1a1]">300 ch</span>
                                                <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 text-[#a1a1a1]">4Motion</span>
                                                <span className="text-[10px] font-bold px-2 py-1 rounded bg-white/5 border border-white/10 text-[#a1a1a1]">Automatique</span>
                                            </div>
                                        </div>

                                        <div className="space-y-3">
                                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                                <span className="text-[#a1a1a1] text-sm">Durée de location</span>
                                                <span className={cn("font-bold font-mono", days > 0 && days < 2 ? "text-red-500" : "text-white")}>
                                                    {days} jours
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                                <span className="text-[#a1a1a1] text-sm">Prix journalier</span>
                                                <span className="font-bold font-mono">{selectedCar?.price} {currency}</span>
                                            </div>
                                            {extraKm !== "0" && (
                                                <div className="flex justify-between items-center py-2 border-b border-white/5">
                                                    <span className="text-[#a1a1a1] text-sm">Option Kilométrage</span>
                                                    <span className="font-bold font-mono text-primary">+{extraKm === "50" ? "17.50" : "35.00"} CHF/j</span>
                                                </div>
                                            )}
                                            <div className="flex justify-between items-center py-2 border-b border-white/5">
                                                <span className="text-[#a1a1a1] text-sm">Frais de service</span>
                                                <span className="font-bold text-green-400 text-[10px] uppercase tracking-wider bg-green-400/10 px-2 py-0.5 rounded">Offerts</span>
                                            </div>
                                        </div>

                                        <div className="bg-white/5 rounded-xl p-5 border border-white/5">
                                            <div className="flex justify-between items-end mb-1">
                                                <span className="text-base font-bold text-white/80">Total estimé</span>
                                                <span className="text-3xl font-bold text-primary font-epilogue">{totalPrice.toFixed(2)} <span className="text-sm text-primary/50">{currency}</span></span>
                                            </div>
                                            <p className="text-[10px] text-[#a1a1a1] text-right">TVA incluse</p>
                                        </div>

                                        <div className="space-y-4">
                                            <Button 
                                                onClick={handleBooking}
                                                disabled={!isFormValid}
                                                className={cn(
                                                    "w-full h-14 text-base font-bold transition-all duration-300 rounded-xl group disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none disabled:hover:scale-100 hover:scale-[1.02]",
                                                    paymentMethod === "paypal" 
                                                        ? "bg-[#003087] hover:bg-[#003087]/90 shadow-[0_0_30px_rgba(0,48,135,0.3)] text-white"
                                                        : paymentMethod === "test"
                                                            ? "bg-green-600 hover:bg-green-500 shadow-[0_0_30px_rgba(22,163,74,0.3)] text-white"
                                                            : "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]"
                                                )}
                                            >
                                                <span className="mr-2">
                                                    {paymentMethod === "paypal" ? "Payer avec PayPal" : 
                                                     paymentMethod === "test" ? "Simuler le Paiement" : 
                                                     "Payer par Carte"}
                                                </span>
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                            </Button>
                                            
                                            <div className="flex items-center justify-center gap-2 text-[10px] text-white/30">
                                                <Lock className="w-3 h-3" />
                                                <span>Paiement 100% sécurisé et crypté</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Trust Badges */}
                                <div className="mt-8 flex items-center justify-center gap-6 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
                                    <CreditCard className="w-8 h-8 text-white" />
                                    <div className="h-8 w-px bg-white/20"></div>
                                    <Shield className="w-8 h-8 text-white" />
                                    <div className="h-8 w-px bg-white/20"></div>
                                    <div className="text-xs font-bold text-white border border-white/50 px-3 py-1.5 rounded-full tracking-widest">SSL SECURE</div>
                                </div>
                             </motion.div>
                        </div>

                    </motion.div>
                </div>
            </section>
            
            <Footer />
        </main>
    );
}

export default function BookingPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-[#05080a] flex items-center justify-center text-white">Loading...</div>}>
            <BookingContent />
        </Suspense>
    );
}
