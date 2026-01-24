import { Analytics } from "@vercel/analytics/react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import TrustedPartnersSection from "@/components/sections/TrustedPartnersSection";
import CTASection from "@/components/sections/CTASection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <TrustedPartnersSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <Analytics />
    </div>
  );
};

export default Index;
