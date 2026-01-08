"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { 
    ArrowRight, 
    Check, 
    ShieldCheck, 
    Zap, 
    Heart, 
    Flag, 
    Rocket, 
    Globe, 
    Car
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
    return (
        <main className="flex min-h-screen flex-col bg-[#0c1315] text-white font-sans">
            <Navbar />

            {/* Hero Section */}
            <section className="relative flex min-h-[00px] flex-col items-center justify-center overflow-hidden py-20 px-4">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c1315] via-[#0c1315]/80 to-transparent z-10"></div>
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <div 
                        className="h-full w-full bg-cover bg-center" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCd8g5wMxflTqpX---NYt0gIB3AgycSFCtfmlDkKRUstfdveCHOWiO3f1FLC8e3jLHIgu36cJWaKDxQGuClNG3R2cyeJMRyEB-9pa5IZz2TLqSkyi-f0RhEg8i4icyRwjzTRrIxCBT3TK2kdRF8PWCTTKb6yLjGC2UjpQ0iXD8dmtTfrQIcC7l4OMsfLJwqfOx3V7ZMTNmf6z-dBlenhjQFwAJAM9rlZgEb8AA79JxaKD913Gd6Y8hJkMOPxOeBL9w4g4KG_o0tB36t')" }}
                    ></div>
                </div>
                
                <div className="relative z-20 max-w-4xl text-center flex flex-col items-center gap-6">
                    <div className="inline-flex items-center rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary backdrop-blur-sm">
                        <span className="mr-2 h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        Redefining Mobility
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white leading-tight tracking-tight">
                        Driving the Future of <br/>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#e5cca8]">Car Rental</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed">
                        Connecting owners and drivers with seamless technology. Experience the simplified journey where transparency meets performance.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-4 justify-center">
                        <Link href="/fleet" className="h-12 px-8 text-base font-bold text-[#0c1315] bg-primary hover:bg-[#e5cca8] rounded-lg transition-all shadow-lg shadow-primary/30 flex items-center gap-2">
                            Browse Fleet
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>


            {/* Mission Section */}
            <section className="py-20 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-2 text-primary font-bold tracking-wider text-sm uppercase">
                                <span className="w-8 h-[2px] bg-primary"></span>
                                Our Mission
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                                Simplifying the journey, so you can focus on the road.
                            </h2>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                We handle the contracts, payments, and insurance so you don't have to. Our mission is to make car rental transparent, accessible, and enjoyable for everyone. We believe that renting a car should be as easy as driving one.
                            </p>
                            <ul className="flex flex-col gap-4 mt-4">
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                                        <Check className="w-4 h-4 font-bold" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white">Transparent Pricing</h4>
                                        <p className="text-sm text-slate-400">No hidden fees, what you see is what you pay.</p>
                                    </div>
                                </li>
                                <li className="flex items-start gap-3">
                                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary">
                                        <Check className="w-4 h-4 font-bold" />
                                    </div>
                                    <div>
                                        <h4 className="text-base font-bold text-white">Instant Verification</h4>
                                        <p className="text-sm text-slate-400">Get approved in minutes with our AI-powered system.</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="relative group">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-[#e5cca8] rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
                            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-[#1a2332] shadow-2xl border border-white/10">
                                <div 
                                    className="h-full w-full bg-cover bg-center" 
                                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDus9qZjpTdNlkQwBroaRXgdzlH9z558dqkfE7A_stqVWMlBKopgKgTn446y5b4ZT5jqtOz2c88RjM8aPqEe-99sB7Njx5eP9takiBWIvkrDoJMQ7t4uUJAt4w0u9QAaCGFTXPvqJmbICGxJVH5hdrWcJ79YNPqTpTpOBmFS27JmkgR2g7LYi9-nWbmmgDWIOAdVaiLqPm2QZb-FoGzHGBrkrrQP1pLqbdvgJIyfUvUuDbEWD6cm3u-xrjQt51e9lWSI8vQ0Pu2GtpT')" }}
                                ></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values/Features Grid */}
            <section className="py-20 bg-[#1a2332] border-t border-[#232f48]/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-white mb-4">Core Values</h2>
                        <p className="text-slate-400">Built on trust, driven by technology. We are committed to providing the best experience possible.</p>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Value 1 */}
                        <div className="group p-8 rounded-2xl bg-[#0c1315] border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-[#0c1315] transition-colors">
                                <ShieldCheck className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Reliability First</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Every vehicle is inspected and verified. Our 24/7 roadside assistance ensures you're never alone on your journey.
                            </p>
                        </div>
                        {/* Value 2 */}
                        <div className="group p-8 rounded-2xl bg-[#0c1315] border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-[#0c1315] transition-colors">
                                <Zap className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Speed & Efficiency</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Skip the counter. Our digital-first approach means you can unlock your car with your phone and go.
                            </p>
                        </div>
                        {/* Value 3 */}
                        <div className="group p-8 rounded-2xl bg-[#0c1315] border border-white/5 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                            <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-[#0c1315] transition-colors">
                                <Heart className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">Customer Obsessed</h3>
                            <p className="text-slate-400 leading-relaxed">
                                We build features based on your feedback. Our support team is dedicated to solving your problems instantly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-white text-center mb-16">Our Journey</h2>
                    <div className="relative space-y-12 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:-translate-x-px before:bg-gradient-to-b before:from-transparent before:via-gray-700 before:to-transparent md:before:mx-auto md:before:translate-x-0">
                        {/* Timeline Item 1 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-background bg-primary text-[#0c1315] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Flag className="w-5 h-5" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-[#1a2332] shadow-sm border border-white/5">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <span className="font-bold text-white">Founded</span>
                                    <time className="font-medium text-primary text-sm">2018</time>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">RentalCo started as a small peer-to-peer sharing experiment in San Francisco with just 10 cars.</p>
                            </div>
                        </div>
                        {/* Timeline Item 2 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-[#1a2332] text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Rocket className="w-5 h-5" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-[#1a2332] shadow-sm border border-white/5">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <span className="font-bold text-white">Series A Funding</span>
                                    <time className="font-medium text-primary text-sm">2020</time>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">Secured $15M to expand operations to 10 major cities and launch our instant-booking mobile app.</p>
                            </div>
                        </div>
                        {/* Timeline Item 3 */}
                        <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-primary bg-[#1a2332] text-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                                <Globe className="w-5 h-5" />
                            </div>
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl bg-[#1a2332] shadow-sm border border-white/5">
                                <div className="flex items-center justify-between space-x-2 mb-1">
                                    <span className="font-bold text-white">Global Expansion</span>
                                    <time className="font-medium text-primary text-sm">2023</time>
                                </div>
                                <p className="text-slate-400 text-sm leading-relaxed">Crossed 10,000 active users and expanded into Europe. Introduced the premium "Black" fleet for luxury rentals.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 px-6">
                <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary z-0"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>
                    {/* Abstract decorative image background */}
                    <div 
                        className="absolute inset-0 mix-blend-overlay opacity-30 bg-cover bg-center" 
                        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCNN4NQB91pxWTjko6ym3rODQCeKBVtzdd91wllLKRxRVBGMJJPpB2H1anpMxFLzHUHJHbvA6AB06mIrLoBpMHGXfVEGcywNLmWV6nrNQi-m6Pu4flDIKaHt-0mNwc57CHxZHyBNeXe9xgfhnWA-Ty4lAtjQuE7aYxRYxJB_ZZ_aRk5HcHTCTvm6ZZJ5N_XDBqp2hQRJ1leQ2xdwzEa1xtc-PCcAR5DI2CzT-XA7DKCr0iXsWEiTB-CXeAz87OUl3nZfSMfpJnvJoAE')" }}
                    ></div>
                    <div className="relative z-20 p-10 md:p-20 flex flex-col md:flex-row items-center justify-between gap-10">
                        <div className="max-w-xl">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to start your journey?</h2>
                            <p className="text-blue-100 text-lg">Join thousands of drivers who have switched to the modern way of renting. No paperwork, just drive.</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                            <Link href="/fleet" className="h-12 px-8 text-base font-bold text-primary bg-white hover:bg-gray-100 rounded-lg transition-colors flex items-center justify-center">
                                Get Started
                            </Link>
                            <Link href="/contact" className="h-12 px-8 text-base font-bold text-white bg-black/30 hover:bg-black/50 border border-white/20 rounded-lg transition-colors flex items-center justify-center">
                                Contact Sales
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}