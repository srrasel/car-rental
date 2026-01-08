"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-24 bg-[#0c1315]">
            <div className="container px-4 md:px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map Placeholder */}
                    {/* Map Integration */}
                    <div className="relative min-h-[400px] lg:h-full bg-white/5 overflow-hidden group border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
                            className="absolute inset-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700 opacity-80 hover:opacity-100"
                            style={{ border: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>

                    {/* Contact Form & Info */}
                    <div className="space-y-12">
                        <div className="space-y-4">
                            <div className="inline-block px-3 py-1 text-primary text-xs font-bold tracking-[0.2em] uppercase border-l-2 border-primary pl-4">
                                Get In Touch
                            </div>
                            <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                                LOCATION AND <span className="text-primary">CONTACT</span>
                            </h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide mb-1">Address</h4>
                                        <p className="text-[#a1a1a1] text-sm">1234 Luxury Lane, New York, NY 10001, USA</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide mb-1">Phone</h4>
                                        <p className="text-[#a1a1a1] text-sm">+41 22 555 0199</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-primary shrink-0">
                                        <Mail className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide mb-1">Email</h4>
                                        <p className="text-[#a1a1a1] text-sm">concierge@luxedrive.com</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-primary shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide mb-1">Working Hours</h4>
                                        <p className="text-[#a1a1a1] text-sm">Mon-Sat: 09:00 - 20:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form className="space-y-6 bg-white/[0.02] p-8 border border-white/5">
                            <h3 className="text-white font-bold uppercase tracking-widest text-lg">Send Message</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <Input placeholder="Your Name" className="bg-transparent border-white/10 text-white focus:border-primary rounded-none" />
                                <Input placeholder="Your Email" className="bg-transparent border-white/10 text-white focus:border-primary rounded-none" />
                            </div>
                            <textarea
                                placeholder="Message"
                                className="w-full h-32 bg-transparent border border-white/10 text-white p-3 focus:outline-none focus:border-primary resize-none placeholder:text-muted-foreground text-sm"
                            />
                            <Button variant="luxury" className="w-full text-[#0c1315] h-12">
                                SendMessage
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
