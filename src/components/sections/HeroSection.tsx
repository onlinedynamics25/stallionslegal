import { ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-primary overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--gold)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-navy-light border border-gold/20">
              <Scale className="h-4 w-4 text-gold" />
              <span className="text-sm text-gold">Trusted Legal Partners Since 2024</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-primary-foreground leading-tight">
              <span className="text-gold">Stallions Sterling</span>
              <br />
              Law Firm
            </h1>

            <p className="text-lg text-primary-foreground/80 max-w-lg leading-relaxed">
              Delivering personalized legal solutions with integrity and excellence. 
              We protect your rights and guide you through complex legal matters 
              with expertise and compassion.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-primary font-semibold px-8"
              >
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                onClick={() => scrollToSection("#services")}
                variant="outline"
                size="lg"
                className="border-gold/40 text-primary-foreground hover:bg-navy-light hover:text-gold"
              >
                Our Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-navy-light">
              <div>
                <p className="text-3xl font-serif font-bold text-gold">500+</p>
                <p className="text-sm text-primary-foreground/60">Cases Handled</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-gold">98%</p>
                <p className="text-sm text-primary-foreground/60">Success Rate</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-gold">15+</p>
                <p className="text-sm text-primary-foreground/60">Expert Attorneys</p>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="w-80 h-80 rounded-full border-2 border-gold/20 flex items-center justify-center">
              <div className="w-64 h-64 rounded-full border-2 border-gold/30 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gold/10 flex items-center justify-center">
                  <Scale className="w-24 h-24 text-gold" />
                </div>
              </div>
            </div>
            {/* Floating badges */}
            <div className="absolute top-10 right-10 bg-navy-light/90 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
              <p className="text-gold font-serif font-bold">24/7</p>
              <p className="text-xs text-primary-foreground/60">Legal Support</p>
            </div>
            <div className="absolute bottom-10 left-0 bg-navy-light/90 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
              <p className="text-gold font-serif font-bold">Award</p>
              <p className="text-xs text-primary-foreground/60">Winning Firm</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gold/40 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
