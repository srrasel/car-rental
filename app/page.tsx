import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { FeaturedCars } from "@/components/FeaturedCars";
import { FeaturesSection } from "@/components/FeaturesSection";
import { SafetySection } from "@/components/SafetySection";
import { ChauffeurSection } from "@/components/ChauffeurSection";
import { PromoSection } from "@/components/PromoSection";
import { CategorySection } from "@/components/CategorySection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c1315]">
      <Navbar />
      <HeroSection />
      <FeaturedCars />
      <FeaturesSection />
      <SafetySection />
      <ChauffeurSection />
      <PromoSection />
      <CategorySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
