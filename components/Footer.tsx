import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0c1315] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Image
                                src="/logo/logo2.png"
                                alt="LuxeDrive"
                                width={280}
                                height={100}
                                className="h-12 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-[#a1a1a1] text-sm leading-relaxed max-w-xs">
                            Premier luxury car rental service delivering excellence, comfort, and style for your journey. Experience the extraordinary.
                        </p>
                        <div className="flex gap-4">
                            {/* Social Icons */}
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary hover:text-black transition-all duration-300">
                                    <Icon className="w-4 h-4" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Company</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'About Us', href: '/about' },
                                { name: 'Services', href: '/services' },
                                { name: 'Our Fleet', href: '/fleet' },
                                { name: 'Testimonials', href: '/testimonials' },
                                { name: 'Contact', href: '/contact' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[#a1a1a1] hover:text-primary transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Vehicles</h3>
                        <ul className="space-y-4">
                            {[
                                { name: 'Sports Cars', href: '/fleet?category=Sports' },
                                { name: 'Luxury SUVs', href: '/fleet?category=SUV' },
                                { name: 'Convertibles', href: '/fleet?category=Convertible' },
                                { name: 'Electric', href: '/fleet?category=Electric' },
                                { name: 'Chauffeur Service', href: '/services' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <Link href={item.href} className="text-[#a1a1a1] hover:text-primary transition-colors text-sm">
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-6">Contact</h3>
                        <ul className="space-y-4 text-sm text-[#a1a1a1]">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>Lausanne, Suisse</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <span>+41 xx xxx xx xx</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>contact@rentago.ch</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-[#a1a1a1] uppercase tracking-wider">
                    <p>&copy; {new Date().getFullYear()} Rentago. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
