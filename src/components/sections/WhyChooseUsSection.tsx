import { CheckCircle2, Shield, Clock, MessageSquare } from "lucide-react";

const WhyChooseUsSection = () => {
  const benefits = [
    {
      icon: Shield,
      title: "Experienced Attorneys",
      description: "Our team comprises seasoned legal professionals with decades of combined experience across diverse practice areas.",
    },
    {
      icon: CheckCircle2,
      title: "Client-Focused Approach",
      description: "We prioritize understanding your unique situation and tailoring our legal strategies to meet your specific needs and goals.",
    },
    {
      icon: Clock,
      title: "Proven Track Record",
      description: "With a 98% success rate, we have consistently delivered favorable outcomes for our clients in complex legal matters.",
    },
    {
      icon: MessageSquare,
      title: "Transparent Communication",
      description: "We keep you informed at every step, ensuring you understand your options and the progress of your case.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.title}
              className="text-center group"
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
