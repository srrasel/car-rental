import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { VehicleOneSection } from "@/components/VehicleOneSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ConditionsSection } from "@/components/ConditionsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c1315]">
      <Navbar />
      <HeroSection />
      <VehicleOneSection />
      <HowItWorksSection />
      <ConditionsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
