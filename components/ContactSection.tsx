"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-24 bg-[#0c1315]">
            <div className="max-w-[1200px] mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Map Placeholder */}
                    {/* Map Integration */}
                    <div className="relative min-h-[400px] lg:h-full bg-white/5 overflow-hidden group border border-white/10">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d43929.56396472455!2d6.586664984252632!3d46.52857317789726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c293ecd89a7e5%3A0x81f9a0d8d0354163!2sLausanne%2C%20Switzerland!5e0!3m2!1sen!2s!4v1650000000000!5m2!1sen!2s"
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
                                Contact & Assistance
                            </div>
                            <h2 className="text-4xl md:text-5xl font-normal text-white tracking-tight" style={{ fontFamily: 'var(--font-epilogue)' }}>
                                NOUS <span className="text-primary">CONTACTER</span>
                            </h2>
                            <p className="text-[#a1a1a1]">
                                Pour toute question sur la location ou la réservation, vous pouvez nous contacter directement.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-primary shrink-0">
                                        <MapPin className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide mb-1">Localisation</h4>
                                        <p className="text-[#a1a1a1] text-sm">Lausanne, Suisse</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-primary shrink-0">
                                        <Phone className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide mb-1">Téléphone</h4>
                                        <p className="text-[#a1a1a1] text-sm">+41 xx xxx xx xx</p>
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
                                        <p className="text-[#a1a1a1] text-sm">contact@rentago.ch</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="w-12 h-12 bg-white/5 flex items-center justify-center text-primary shrink-0">
                                        <Clock className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold uppercase tracking-wide mb-1">Horaires</h4>
                                        <p className="text-[#a1a1a1] text-sm">9h00 – 20h00, 7/7</p>
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
