import { ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustSignals = [
    "Client-Centred Legal Advisory",
    "Risk-Focused Legal Solutions",
    "Structured Retainership Services",
    "Professional, Confidential Engagements",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-background text-foreground overflow-hidden"
    >
      {/* Gold Accent Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-charcoal-light border border-gold/20">
              <Scale className="h-4 w-4 text-gold" />
              <span className="text-sm text-gold">
                Trusted Legal Partners Since 2024
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
              <span className="text-gold">Safe Solutions.</span>
              <br />
              Real Relationships.
            </h1>

            <p className="text-lg text-foreground/80 max-w-lg leading-relaxed">
              Practical legal counsel built on trust, structure, and disciplined
              execution. We focus on risk prevention, legal clarity, and
              long-term client relationships — not reactive advice or
              unnecessary complexity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-8"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("#services")}
                variant="outline"
                size="lg"
                className="border-gold/40 text-primary-background hover:bg-charcoal-light hover:text-gold"
              >
                Explore Our Practice Areas
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-charcoal-light">
              <div>
                <p className="text-3xl font-serif font-bold text-gold">100+</p>
                <p className="text-sm text-foreground/60">Matters Handled</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-gold">7</p>
                <p className="text-sm text-foreground/60">Practice Areas</p>
              </div>
              <div>
                <p className="text-3xl font-serif font-bold text-gold">2024</p>
                <p className="text-sm text-foreground/60">Established</p>
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
            <div className="absolute top-10 right-10 bg-charcoal-light/90 backdrop-blur-sm rounded-lg p-4 border border-gold/20 ">
              <p className="text-gold font-serif font-bold">Advisory-Led</p>
              <p className="text-xs text-primary-foreground/60 dark:text-foreground/60  ">
                Service Model
              </p>
            </div>
            <div className="absolute bottom-10 left-0 bg-charcoal-light/90 backdrop-blur-sm rounded-lg p-4 border border-gold/20">
              <p className="text-gold font-serif font-bold">Risk-Focused</p>
              <p className="text-xs text-primary-foreground/60 dark:text-foreground/60 ">
                Legal Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Trust Signal Strip */}
        <div className="mt-16 pt-8 border-t border-charcoal-light">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-sm text-foreground/70">{signal}</span>
              </div>
            ))}
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
