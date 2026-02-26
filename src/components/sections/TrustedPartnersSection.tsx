import { Building2, Briefcase, Users, Shield } from "lucide-react";

const TrustedPartnersSection = () => {
  const partners = [
    {
      icon: Building2,
      name: "Corporate Clients",
      description: "Trusted by leading businesses",
    },
    {
      icon: Briefcase,
      name: "SMEs & Startups",
      description: "Supporting growing enterprises",
    },
    {
      icon: Users,
      name: "Professionals",
      description: "Advising industry professionals",
    },
    {
      icon: Shield,
      name: "Property Owners",
      description: "Protecting real estate interests",
    },
  ];

  return (
    <section className="py-16 bg-charcoal dark:bg-charcoal-light border-y border-gold/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-cream mt-3">
            Clients Who Trust Our Counsel
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex flex-col items-center text-center p-6 rounded-lg bg-charcoal-light dark:bg-background/50 border border-gold/20 hover:border-gold/40 transition-colors"
            >
              <div className="w-14 h-14 rounded-full bg-gold-dark/30 flex items-center justify-center mb-4">
                <partner.icon className="h-7 w-7 text-gold-light" />
              </div>
              <h3 className="font-serif font-semibold text-cream mb-1">
                {partner.name}
              </h3>
              <p className="text-sm text-cream/60">{partner.description}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-cream/50 text-sm mt-8">
          From startups to established corporations, we provide dependable legal
          guidance across industries.
        </p>
      </div>
    </section>
  );
};

export default TrustedPartnersSection;
