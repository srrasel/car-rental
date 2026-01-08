"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Fleet", href: "/fleet" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                scrolled
                    ? "bg-[#0c1315]/80 backdrop-blur-md border-white/5 py-3"
                    : "bg-transparent py-6"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <Image
                        src="/logo/logo2.png"
                        alt="LuxeDrive"
                        width={150}
                        height={70}
                        className="h-8 md:h-10 w-auto object-contain"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    <div className="flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors hover:text-primary relative py-1 uppercase tracking-widest",
                                    pathname === link.href ? "text-primary" : "text-white/80"
                                )}
                                style={{ fontFamily: 'var(--font-sora)' }}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <Button
                        variant="luxury"
                        className="px-6 tracking-widest uppercase text-xs font-bold transition-all duration-300"
                        asChild
                    >
                        <Link href="/contact">
                            Book Now
                        </Link>
                    </Button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-full transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Menu className="w-6 h-6 text-white" />
                </button>
            </div>

            {/* Mobile Menu - Right Side Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 bottom-0 w-[85%] max-w-[320px] bg-[#0c1315] border-l border-white/10 p-0 shadow-2xl z-50 md:hidden flex flex-col"
                        >
                            <div className="p-6 border-b border-white/5 flex justify-between items-center bg-[#0c1315]">
                                <div className="w-32">
                                    <Image
                                        src="/logo/logo2.png"
                                        alt="LuxeDrive"
                                        width={280}
                                        height={100}
                                        className="h-8 w-auto object-contain"
                                    />
                                </div>
                                <button onClick={() => setIsOpen(false)} className="text-white hover:text-primary transition-colors p-2 hover:bg-white/10 rounded-full">
                                    <X className="w-6 h-6" />
                                </button>
                            </div>

                            <div className="flex flex-col p-6 gap-2 bg-[#0c1315] h-full overflow-y-auto">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-lg font-medium text-white hover:text-primary transition-colors uppercase tracking-wider py-4 border-b border-white/5"
                                        onClick={() => setIsOpen(false)}
                                        style={{ fontFamily: 'var(--font-epilogue)' }}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <div className="mt-8">
                                    <Button variant="luxury" className="w-full text-[#0c1315] py-6 text-sm" asChild>
                                        <Link href="/contact">
                                            Book a Ride
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}
