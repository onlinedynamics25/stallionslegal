import { Building2, Briefcase, Users, Shield } from "lucide-react";

const TrustedPartnersSection = () => {
  const partners = [
    {
      icon: Building2,
      name: "Corporate Clients",
      description: "Counsel for established enterprises",
    },
    {
      icon: Briefcase,
      name: "SMEs & Startups",
      description: "Legal foundations for growth",
    },
    {
      icon: Users,
      name: "Professionals",
      description: "Advisory for industry leaders",
    },
    {
      icon: Shield,
      name: "Property Owners",
      description: "Safeguarding real estate interests",
    },
  ];

  return (
    <section className="py-20 md:py-24 bg-charcoal dark:bg-charcoal-light border-y border-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-gold font-medium uppercase tracking-[0.3em] text-xs">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-cream mt-4 tracking-tight">
            Clients Who Value Our Counsel
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center p-8 rounded-lg bg-charcoal-light dark:bg-background/50 border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-gold-dark/30 flex items-center justify-center mb-4">
                <partner.icon className="h-7 w-7 text-gold-light" />
              </div>
              <h3 className="font-serif font-semibold text-cream mb-2 text-lg">
                {partner.name}
              </h3>
              <p className="text-sm text-cream/60 leading-relaxed">{partner.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-cream/50 text-sm mt-10 max-w-xl mx-auto leading-relaxed">
          From ambitious startups to established institutions, we deliver
          dependable legal guidance across every industry we serve.
        </p>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
