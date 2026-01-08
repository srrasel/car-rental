"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactSection } from "@/components/ContactSection";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-[#0c1315] flex flex-col text-white">
            <Navbar />
            <div className="pt-20 flex-1">
                {/* Reusing the ContactSection as it is already perfectly styled and contains map + form */}
                <ContactSection />
            </div>
            <Footer />
        </main>
    );
}
