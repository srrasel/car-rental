import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ShieldCheck, Timer, Car, CreditCard } from "lucide-react";

const services = [
    {
        title: "Premium Fleet",
        description: "Choose from our exclusive collection of high-end sports cars and luxury sedans.",
        icon: Car,
    },
    {
        title: "Instant Booking",
        description: "Book your dream car in minutes with our seamless online reservation system.",
        icon: Timer,
    },
    {
        title: "Secure Payments",
        description: "We use top-tier encryption to ensure your transactions are 100% safe and secure.",
        icon: CreditCard,
    },
    {
        title: "24/7 Support",
        description: "Our dedicated concierge team is always available to assist you on your journey.",
        icon: ShieldCheck,
    },
];

export function ServicesSection() {
    return (
        <section id="services" className="py-24 bg-background relative overflow-hidden">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold">Why Choose <span className="text-primary">LuxeDrive</span>?</h2>
                    <p className="text-muted-foreground max-w-2xl text-lg">
                        We invite you to experience a new era of car rental, where performance meets convenience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <Card key={index} className="bg-card/50 border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group">
                            <CardHeader>
                                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    <service.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors" />
                                </div>
                                <CardTitle className="text-xl">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription className="text-base">{service.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
