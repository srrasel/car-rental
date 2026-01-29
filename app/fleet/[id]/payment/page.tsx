"use client";

import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import { allCars } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { 
    CreditCard, 
    Check, 
    Wallet, 
    SmartphoneNfc, 
    ShieldCheck,
    ChevronLeft
} from "lucide-react";

// Payment Gateways
import { loadStripe } from "@stripe/stripe-js";
import { Elements, PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

// Stripe will be initialized dynamically from Settings

// Stripe Checkout Form Component
const CheckoutForm = ({ amount, onSuccess }: { amount: number, onSuccess: () => void }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [message, setMessage] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                // Return URL is not strictly needed if we handle redirect manually or use redirect: "if_required"
                return_url: window.location.origin + "/dashboard", 
            },
            redirect: "if_required",
        });

        if (error) {
            setMessage(error.message || "An unexpected error occurred.");
        } else if (paymentIntent && paymentIntent.status === "succeeded") {
            setMessage("Payment succeeded!");
            onSuccess();
        } else {
            setMessage("Unexpected state.");
        }

        setIsLoading(false);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <PaymentElement />
            <Button 
                disabled={isLoading || !stripe || !elements} 
                className="w-full bg-primary text-black hover:bg-white font-bold"
            >
                {isLoading ? "Processing..." : `Pay ${(amount).toFixed(2)} CHF`}
            </Button>
            {message && <div className="text-red-400 text-sm mt-2">{message}</div>}
        </form>
    );
};

export default function PaymentPage() {
    const params = useParams();
    const searchParams = useSearchParams();
    const router = useRouter();
    const id = params?.id ? parseInt(params.id as string) : null;
    const car = allCars.find(c => c.id === id);

    const startDate = searchParams.get("startDate") || "";
    const endDate = searchParams.get("endDate") || "";
    // const extraKm = parseInt(searchParams.get("extraKm") || "0");
    const totalPrice = parseFloat(searchParams.get("totalPrice") || "0");

    const [paymentMethod, setPaymentMethod] = useState<"stripe" | "paypal">("stripe");
    const [clientSecret, setClientSecret] = useState("");
    const [stripePromise, setStripePromise] = useState<ReturnType<typeof loadStripe> | null>(null);
    const [paypalClientId, setPaypalClientId] = useState<string | null>(null);
    const [currency, setCurrency] = useState<string>("usd");

    // Load public settings (Stripe publishable key, PayPal client ID, currency)
    useEffect(() => {
        async function loadSettings() {
            try {
                const res = await fetch("/api/settings");
                if (res.ok) {
                    const data = await res.json();
                    const key = data.stripePublishableKey || "pk_test_placeholder";
                    setStripePromise(loadStripe(key));
                    setPaypalClientId(data.paypalClientId || "test");
                    setCurrency((data.currency || "USD").toLowerCase());
                } else {
                    // Fallbacks if settings API not available
                    setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder"));
                    setPaypalClientId("test");
                    setCurrency("usd");
                }
            } catch {
                setStripePromise(loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_test_placeholder"));
                setPaypalClientId("test");
                setCurrency("usd");
            }
        }
        loadSettings();
    }, []);

    // Create Payment Intent when Stripe selected and amount known
    useEffect(() => {
        if (paymentMethod === "stripe" && totalPrice > 0) {
            fetch("/api/create-payment-intent", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ amount: totalPrice, currency }),
            })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
        }
    }, [totalPrice, paymentMethod, currency]);

    const handleBookingSuccess = async (method: string) => {
        try {
            const res = await fetch("/api/bookings", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    carId: id,
                    startDate,
                    endDate,
                    totalPrice,
                    paymentMethod: method,
                }),
            });

            if (res.ok) {
                router.push("/dashboard?booking=success");
            } else {
                alert("Booking failed to save, but payment succeeded. Contact support.");
            }
        } catch (error) {
            console.error("Booking error:", error);
            alert("An error occurred while saving your booking.");
        }
    };

    if (!car) return <div className="min-h-screen flex items-center justify-center bg-[#0c1315] text-white">Car not found</div>;

    const days = (startDate && endDate) ? Math.ceil(Math.abs(new Date(endDate).getTime() - new Date(startDate).getTime()) / (1000 * 60 * 60 * 24)) || 1 : 0;

    return (
        <main className="min-h-screen bg-[#0c1315] text-white flex flex-col font-sans">
            <Navbar />
            
            <div className="flex-grow pt-24 pb-12">
                <div className="max-w-[1200px] mx-auto px-4 md:px-10 py-8 md:py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 xl:gap-16">
                        {/* Left Column: Payment Form */}
                        <div className="lg:col-span-7 flex flex-col gap-8">
                            {/* Header */}
                            <div className="flex flex-col gap-3">
                                <Button variant="ghost" className="w-fit pl-0 hover:bg-transparent hover:text-primary mb-2" onClick={() => router.back()}>
                                    <ChevronLeft className="w-4 h-4 mr-2" />
                                    Back to details
                                </Button>
                                <h1 className="text-white text-3xl md:text-4xl font-black leading-tight tracking-[-0.033em]">Secure Payment</h1>
                                <p className="text-[#9da6b9] text-base font-normal">Review your trip details and complete payment to secure your booking.</p>
                            </div>

                            {/* Payment Method Selector */}
                            <div>
                                <h3 className="text-white text-lg font-bold mb-4">Payment Method</h3>
                                <div className="grid grid-cols-3 gap-3">
                                    <button 
                                        onClick={() => setPaymentMethod("stripe")}
                                        className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${paymentMethod === 'stripe' ? 'border-primary bg-primary/10 text-primary' : 'border-gray-700 bg-[#1a2332] text-gray-400 hover:border-primary hover:text-primary'}`}
                                    >
                                        <CreditCard className="mb-2 w-8 h-8" />
                                        <span className="text-sm font-semibold">Card</span>
                                        {paymentMethod === 'stripe' && (
                                            <div className="absolute top-2 right-2 size-4 bg-primary rounded-full flex items-center justify-center">
                                                <Check className="text-white w-3 h-3 font-bold" />
                                            </div>
                                        )}
                                    </button>
                                    <button 
                                        onClick={() => setPaymentMethod("paypal")}
                                        className={`relative flex flex-col items-center justify-center p-4 rounded-xl border-2 transition-all ${paymentMethod === 'paypal' ? 'border-primary bg-primary/10 text-primary' : 'border-gray-700 bg-[#1a2332] text-gray-400 hover:border-primary hover:text-primary'}`}
                                    >
                                        <Wallet className="mb-2 w-8 h-8" />
                                        <span className="text-sm font-medium">PayPal</span>
                                        {paymentMethod === 'paypal' && (
                                            <div className="absolute top-2 right-2 size-4 bg-primary rounded-full flex items-center justify-center">
                                                <Check className="text-white w-3 h-3 font-bold" />
                                            </div>
                                        )}
                                    </button>
                                </div>
                            </div>

                            {/* Payment Form Container */}
                            <div className="bg-[#1a2332] rounded-xl p-6 md:p-8 shadow-sm border border-transparent">
                                {paymentMethod === "stripe" && (
                                    <>
                                        <h3 className="text-white text-lg font-bold mb-6">Pay with Card</h3>
                                        {clientSecret && stripePromise ? (
                                            <Elements options={{ clientSecret, appearance: { theme: 'night' } }} stripe={stripePromise}>
                                                <CheckoutForm amount={totalPrice} onSuccess={() => handleBookingSuccess("STRIPE")} />
                                            </Elements>
                                        ) : (
                                            <div className="text-center py-4">Loading payment details...</div>
                                        )}
                                    </>
                                )}

                                {paymentMethod === "paypal" && (
                                    <>
                                        <h3 className="text-white text-lg font-bold mb-6">Pay with PayPal</h3>
                                        <PayPalScriptProvider options={{ clientId: paypalClientId || "test", currency: currency.toUpperCase() }}>
                                            <PayPalButtons 
                                                style={{ layout: "vertical", color: "blue", shape: "rect", label: "pay" }}
                                                createOrder={(data, actions) => {
                                                    return actions.order.create({
                                                        intent: "CAPTURE", // Explicit intent
                                                        purchase_units: [
                                                            {
                                                                amount: {
                                                                    currency_code: currency.toUpperCase(),
                                                                    value: totalPrice.toString(),
                                                                },
                                                            },
                                                        ],
                                                    });
                                                }}
                                                onApprove={async (data, actions) => {
                                                    if (actions.order) {
                                                        await actions.order.capture();
                                                        handleBookingSuccess("PAYPAL");
                                                    }
                                                }}
                                            />
                                        </PayPalScriptProvider>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Right Column: Order Summary */}
                        <div className="lg:col-span-5">
                             <div className="bg-[#1a2332] rounded-xl p-6 border border-[#232f48] sticky top-24">
                                <h3 className="text-white text-xl font-bold mb-4">Booking Summary</h3>
                                <div className="flex gap-4 mb-6">
                                    <div className="w-24 h-16 bg-cover bg-center rounded-lg" style={{ backgroundImage: `url('${car.image}')` }}></div>
                                    <div>
                                        <h4 className="font-bold text-white">{car.name}</h4>
                                        <p className="text-sm text-muted-foreground">{car.category}</p>
                                    </div>
                                </div>
                                
                                <div className="space-y-3 text-sm border-t border-[#232f48] pt-4">
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Duration</span>
                                        <span className="text-white">{days} Days</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">Start Date</span>
                                        <span className="text-white">{new Date(startDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">End Date</span>
                                        <span className="text-white">{new Date(endDate).toLocaleDateString()}</span>
                                    </div>
                                    <div className="border-t border-[#232f48] my-2"></div>
                                    <div className="flex justify-between text-lg font-bold">
                                        <span className="text-white">Total</span>
                                        <span className="text-primary">{totalPrice.toFixed(2)} CHF</span>
                                    </div>
                                </div>
                                
                                <div className="mt-6 bg-primary/10 rounded-lg p-3 flex items-start gap-3">
                                    <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                    <p className="text-xs text-muted-foreground">
                                        Free cancellation up to 48 hours before pick-up. 
                                        Security deposit of 500 CHF will be blocked on your card.
                                    </p>
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
