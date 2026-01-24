import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PracticeAreasSection from "@/components/sections/PracticeAreasSection";
import CTASection from "@/components/sections/CTASection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PracticeAreasSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
