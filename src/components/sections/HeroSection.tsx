import { ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import heroImage from "@/assets/hero-law-office.jpg";

const HeroSection = () => {
  const theme = useTheme().theme === "dark" ? "dark" : "light";

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const trustSignals = [
    "Client-Centred Advisory",
    "Risk-Focused Strategy",
    "Structured Retainership",
    "Confidential Engagement",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Modern law office interior at dusk"
          width={1920}
          height={1280}
          className="w-full h-full object-cover"
        />
        {/* Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-dark/95 via-charcoal-dark/80 to-charcoal-dark/40" />
        <div className="absolute inset-0 bg-charcoal-dark/40" />
      </div>

      {/* Gold Accent Lines */}
      <div className="absolute inset-0 overflow-hidden z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/30 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent" />
      </div>

      {/* Decorative glow */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl z-10" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-gold/10 rounded-full blur-3xl z-10" />

      <div className="container mx-auto px-4 pt-28 pb-16 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Prominent Logo */}
            <div className="flex items-center gap-4">
              <img
                src={theme === "dark" ? "/logo/rounded.png" : "/logo/nobg.png"}
                alt="Stallions Sterling Logo"
                width={72}
                height={72}
                className="object-contain drop-shadow-[0_4px_16px_rgba(212,175,55,0.35)]"
              />
              <div className="flex flex-col leading-tight">
                <span className="text-3xl md:text-4xl font-serif font-bold text-gold">
                  Stallions
                </span>
                <span className="text-sm md:text-base font-sans text-white/90 tracking-[0.3em] uppercase">
                  Sterling
                </span>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-gold/30">
              <Scale className="h-4 w-4 text-gold" />
              <span className="text-xs md:text-sm text-gold tracking-[0.2em] uppercase">
                Trusted Legal Partners · Est. 2024
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-[1.05] tracking-tight drop-shadow-lg">
              <span className="text-gold">Excellence</span>
              <span className="text-white"> in Legal &amp;</span>
              <br />
              <span className="text-white">Corporate Advisory.</span>
            </h1>

            <p className="text-lg md:text-xl text-white/85 max-w-xl leading-relaxed font-light drop-shadow">
              Strategic solutions. Trusted partnerships. Delivering measured,
              decisive results for businesses and individuals across Nigeria.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => scrollToSection("#contact")}
                size="lg"
                className="bg-gold hover:bg-gold-dark text-charcoal font-semibold px-8 shadow-lg shadow-gold/20"
              >
                Request a Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => scrollToSection("#services")}
                variant="outline"
                size="lg"
                className="border-gold/50 bg-white/5 backdrop-blur-sm text-white hover:bg-gold hover:text-charcoal hover:border-gold"
              >
                Explore Practice Areas
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/15">
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-gold">100+</p>
                <p className="text-xs md:text-sm text-white/70 tracking-wider uppercase mt-1">Matters Handled</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-gold">7</p>
                <p className="text-xs md:text-sm text-white/70 tracking-wider uppercase mt-1">Practice Areas</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-serif font-bold text-gold">2024</p>
                <p className="text-xs md:text-sm text-white/70 tracking-wider uppercase mt-1">Established</p>
              </div>
            </div>
          </div>

          {/* Floating accent card (desktop) */}
          <div className="hidden lg:flex justify-center items-center relative">
            <div className="relative">
              <div className="absolute -inset-8 bg-gold/10 rounded-full blur-3xl" />
              <div className="relative w-80 h-80 rounded-full border border-gold/30 flex items-center justify-center backdrop-blur-sm bg-charcoal-dark/30">
                <div className="w-64 h-64 rounded-full border border-gold/40 flex items-center justify-center">
                  <div className="w-48 h-48 rounded-full bg-gold/15 flex items-center justify-center border border-gold/30">
                    <Scale className="w-24 h-24 text-gold" />
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-6 right-0 bg-charcoal-dark/80 backdrop-blur-md rounded-lg p-4 border border-gold/30 shadow-xl">
              <p className="text-gold font-serif font-bold">Advisory-Led</p>
              <p className="text-xs text-white/70">Service Model</p>
            </div>
            <div className="absolute bottom-6 left-0 bg-charcoal-dark/80 backdrop-blur-md rounded-lg p-4 border border-gold/30 shadow-xl">
              <p className="text-gold font-serif font-bold">Risk-Focused</p>
              <p className="text-xs text-white/70">Legal Solutions</p>
            </div>
          </div>
        </div>

        {/* Trust Signal Strip */}
        <div className="mt-16 pt-8 border-t border-white/15">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {trustSignals.map((signal) => (
              <div key={signal} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="text-sm text-white/80">{signal}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 rounded-full border-2 border-gold/50 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 rounded-full bg-gold" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
