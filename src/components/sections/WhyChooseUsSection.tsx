import { Shield, Users, FileText, Lightbulb, Scale } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Safe Solutions",
      description: "We prioritise risk identification, prevention, and legal protection. Our advice is conservative where necessary, strategic where required, and always grounded in law and commercial reality.",
    },
    {
      icon: Users,
      title: "Real Relationships",
      description: "We build long-term professional relationships, not one-off transactions. Clients have direct access, clear communication, and consistent legal guidance.",
    },
    {
      icon: FileText,
      title: "Structured Legal Thinking",
      description: "Our work is process-driven, documented, and auditable — ensuring reliability, continuity, and clarity in every engagement.",
    },
    {
      icon: Lightbulb,
      title: "Practical Legal Insight",
      description: "We do not offer abstract legal theory. We provide implementable legal solutions that align with real-world business, property, and personal realities.",
    },
    {
      icon: Scale,
      title: "Integrity & Professional Discipline",
      description: "We operate with confidentiality, ethical rigour, and respect for both the letter and spirit of the law.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">Why Choose Us</span>
          <div className="w-12 h-1 bg-gold mt-2 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-6">
            Your Trusted Legal Partners
          </h2>
          <p className="text-muted-foreground mt-4">
            Discover what sets Stallions Sterling apart from other law firms.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.title}
              className="text-center group p-6 rounded-lg hover:bg-cream transition-colors"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                {/* Outer ring */}
                <div className="w-20 h-20 rounded-full border-2 border-gold/20 absolute group-hover:scale-110 transition-transform duration-300" />
                {/* Inner circle */}
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                  <benefit.icon className="h-8 w-8 text-gold" />
                </div>
              </div>
              <h3 className="font-serif font-semibold text-lg text-primary mb-3">
                {benefit.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
