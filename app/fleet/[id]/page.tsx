"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Calendar, Fuel, Gauge, Award, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState, use, useEffect } from "react";
// import { useParams } from "next/navigation"; // Not needed if using params prop in Next.js 15+ async components, 
// but this is a client component, so we can use `useParams` or receive params as prop.
// Next.js 15+ strictly suggests awaiting params in server components, but for client components `useParams` hook is standard.
import { useParams } from "next/navigation";

// Mock Data (duplicated for now, in real app would be shared or fetched)
const allCars = [
    {
        id: 1,
        name: "Porsche 911 GT3",
        image: "/assets/1.jpg",
        price: 450,
        speed: "310 km/h",
        transmission: "Automatic",
        category: "Sports",
        description: "The Porsche 911 GT3 is a high-performance homologation special of the Porsche 911 sports car. It is a line of high-performance models, which began with the 1973 911 Carrera RS.",
        features: ["Carbon Ceramic Brakes", "Bucket Seats", "Sport Chrono Package", "BOSE Surround Sound"]
    },
    {
        id: 2,
        name: "Mercedes-AMG GT",
        image: "/assets/5.jpg",
        price: 380,
        speed: "305 km/h",
        transmission: "Automatic",
        category: "Luxury",
        description: "The Mercedes-AMG GT is a grand tourer produced in coupé and roadster bodystyles by German automobile manufacturer Mercedes-AMG.",
        features: ["Burmester Sound", "Nappa Leather", "Active Aerodynamics", "Driver Assistance"]
    },
    {
        id: 3,
        name: "Audi RS e-tron GT",
        image: "/assets/9.jpg",
        price: 420,
        speed: "250 km/h",
        transmission: "Electric",
        category: "Electric",
        description: "The Audi e-tron GT is a battery electric executive car produced by Audi since late 2020. It shares its platform with the Porsche Taycan.",
        features: ["Matrix LED Headlights", "Bang & Olufsen 3D Sound", "Adaptive Air Suspension", "Panoramic Glass Roof"]
    },
    {
        id: 4,
        name: "BMW M8 Competition",
        image: "/assets/12.jpg",
        price: 400,
        speed: "305 km/h",
        transmission: "Automatic",
        category: "Sports",
        description: "The BMW M8 Competition is the high-performance version of the BMW 8 Series. Ideally suited for long distance journeys.",
        features: ["Laserlight Headlights", "Bowers & Wilkins Sound", "M Sport Seats", "Driving Assistant Professional"]
    },
    {
        id: 5,
        name: "Range Rover Autobiography",
        image: "/assets/15.jpg",
        price: 500,
        speed: "225 km/h",
        transmission: "Automatic",
        category: "SUV",
        description: "The Range Rover Autobiography represents the pinnacle of refined capability and luxury in the SUV market.",
        features: ["Meridian Signature Sound", "Executive Class Seating", "Pixel LED Headlights", "Terrain Response 2"]
    },
    {
        id: 6,
        name: "Lamborghini Huracán",
        image: "/assets/19.jpg",
        price: 650,
        speed: "325 km/h",
        transmission: "Automatic",
        category: "Supercar",
        description: "The Lamborghini Huracán is the perfect fusion of technology and design. With its crisp, streamlined lines, the exterior is designed to cut through the air.",
        features: ["V10 Engine", "Magnetorheological Suspension", "Carbon Fiber Chassis", "LDVI System"]
    },
];

export default function CarDetailPage() {
    const params = useParams();
    const id = params?.id ? parseInt(params.id as string) : null;
    const car = allCars.find(c => c.id === id);

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [extraKm, setExtraKm] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        if (startDate && endDate && car) {
            const start = new Date(startDate);
            const end = new Date(endDate);
            const diffTime = Math.abs(end.getTime() - start.getTime());
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)) || 1; // Minimum 1 day calculation

            const rentalCost = diffDays * car.price;
            const extraKmCost = extraKm * 0.35;

            setTotalPrice(rentalCost + extraKmCost);
        }
    }, [startDate, endDate, extraKm, car]);

    // Handle case where id is not yet available or car not found
    if (!id) return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    if (!car) return <div className="min-h-screen flex items-center justify-center">Car not found</div>;

    return (
        <main className="min-h-screen bg-background flex flex-col">
            <Navbar />
            <div className="pt-24 pb-12 container mx-auto px-4 md:px-6 flex-1">
                {/* Breadcrumb or Back Link could go here */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column: Images and Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src={car.image}
                                alt={car.name}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute top-4 left-4 bg-background/80 backdrop-blur px-4 py-2 rounded-full border border-white/10">
                                <span className="font-bold text-lg">{car.category}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex justify-between items-start">
                                <h1 className="text-4xl md:text-5xl font-bold">{car.name}</h1>
                                <div className="text-right">
                                    <div className="text-3xl font-bold text-primary">{car.price} CHF</div>
                                    <div className="text-muted-foreground">per day</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-6 border-y border-border">
                                <div className="flex flex-col items-center justify-center p-4 bg-card rounded-xl text-center gap-2">
                                    <Gauge className="w-6 h-6 text-primary" />
                                    <span className="font-semibold">{car.speed}</span>
                                    <span className="text-xs text-muted-foreground">Top Speed</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 bg-card rounded-xl text-center gap-2">
                                    <Fuel className="w-6 h-6 text-primary" />
                                    <span className="font-semibold">{car.transmission}</span>
                                    <span className="text-xs text-muted-foreground">Transmission</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 bg-card rounded-xl text-center gap-2">
                                    <Award className="w-6 h-6 text-primary" />
                                    <span className="font-semibold">Premium</span>
                                    <span className="text-xs text-muted-foreground">Class</span>
                                </div>
                                <div className="flex flex-col items-center justify-center p-4 bg-card rounded-xl text-center gap-2">
                                    <MapPin className="w-6 h-6 text-primary" />
                                    <span className="font-semibold">Zurich</span>
                                    <span className="text-xs text-muted-foreground">Location</span>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4">Description</h2>
                                <p className="text-muted-foreground leading-relaxed text-lg">
                                    {car.description}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-2xl font-bold mb-4">Features</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {car.features.map((feature, idx) => (
                                        <div key={idx} className="flex items-center gap-2 bg-card/50 p-3 rounded-lg">
                                            <CheckCircle className="w-5 h-5 text-primary" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Booking Form */}
                    <div className="lg:col-span-1">
                        <Card className="sticky top-28 border-primary/20 bg-card/80 backdrop-blur shadow-2xl">
                            <CardHeader>
                                <CardTitle>Book this Car</CardTitle>
                                <CardDescription>Configure your rental details</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium">Dates</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted-foreground">Start</label>
                                            <Input
                                                type="date"
                                                value={startDate}
                                                onChange={(e) => setStartDate(e.target.value)}
                                            />
                                        </div>
                                        <div className="space-y-1">
                                            <label className="text-xs text-muted-foreground">End</label>
                                            <Input
                                                type="date"
                                                value={endDate}
                                                onChange={(e) => setEndDate(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium flex justify-between">
                                        <span>Extra Kilometers</span>
                                        <span className="text-primary font-bold">+{extraKm * 0.35} CHF</span>
                                    </label>
                                    <div className="text-xs text-muted-foreground mb-2">50km / day included. Extra: 0.35 CHF/km</div>
                                    <Input
                                        type="number"
                                        min="0"
                                        placeholder="Enter extra km needed"
                                        value={extraKm}
                                        onChange={(e) => setExtraKm(parseInt(e.target.value) || 0)}
                                    />
                                </div>

                                <div className="pt-4 border-t border-border space-y-2">
                                    <div className="flex justify-between text-sm">
                                        <span>Daily Rate ({car.price} CHF)</span>
                                        <span>{totalPrice > 0 ? (totalPrice - extraKm * 0.35).toFixed(2) : "0.00"} CHF</span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span>Extra Km Cost</span>
                                        <span>{(extraKm * 0.35).toFixed(2)} CHF</span>
                                    </div>
                                    <div className="flex justify-between text-xl font-bold pt-2 text-primary">
                                        <span>Total</span>
                                        <span>{totalPrice.toFixed(2)} CHF</span>
                                    </div>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full h-12 text-lg font-bold bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-700">
                                    Proceed to Payment
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
            <Footer />
        </main>
    );
}
