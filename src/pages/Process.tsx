import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProcessSection from "@/components/sections/ProcessSection";
import CTASection from "@/components/sections/CTASection";

const Process = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ProcessSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Process;
