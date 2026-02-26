import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden border-b border-gold-light dark:border-gold-light/20 ">
      {/* Gold Accent Lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-gold/10 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Legal Advice You Can <span className="text-gold">Rely On</span>
          </h2>

          <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
            Whether you require one-off legal guidance or ongoing legal support,
            our approach is deliberate, transparent, and outcome-driven. We help
            you understand your legal position, manage risk, and make informed
            decisions with confidence.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-gold hover:bg-gold-dark text-primary-foreground font-semibold px-8 w-full sm:w-auto"
            >
              Book an Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <a href="tel:+254719407999">
              <Button
                variant="outline"
                size="lg"
                className="border-gold/40 text-primary-background hover:bg-charcoal-light hover:text-gold w-full sm:w-auto"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Us Now
              </Button>
            </a>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-16 pt-12 border-t border-charcoal-light">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              Built for Long-Term Legal Support
            </h3>
            <p className="text-foreground/70 mb-6">
              Our retainership model is designed for businesses and
              professionals who value consistency, accessibility, and proactive
              legal guidance. We work alongside you — anticipating risk,
              maintaining compliance, and protecting your interests as your
              affairs evolve.
            </p>
            <Button
              variant="outline"
              className="border-gold/40 text-primary-background hover:bg-charcoal-light hover:text-gold"
            >
              View Retainership Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
