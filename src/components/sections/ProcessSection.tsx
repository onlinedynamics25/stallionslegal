import { MessageSquare, Shield, FileCheck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProcessSection = () => {
  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Understand the Client & Context",
      subtitle: "Listen first. Clarify objectives. Define scope.",
      description: "We begin every engagement by understanding your situation, objectives, and constraints. No assumptions. No generic advice. Every matter is assessed on its own facts.",
      outcome: "Clear brief, defined scope, and aligned expectations.",
    },
    {
      number: "02",
      icon: Shield,
      title: "Identify Legal Risk & Exposure",
      subtitle: "What could go wrong — legally, financially, or procedurally?",
      description: "We analyse your matter to identify legal risks, compliance gaps, and exposure points before they become problems.",
      outcome: "Risk map and legal position clarity.",
    },
    {
      number: "03",
      icon: FileCheck,
      title: "Provide Safe, Implementable Solutions",
      subtitle: "Advice that can be acted upon, enforced, and defended.",
      description: "Our recommendations are practical, lawful, and structured for execution — not abstract legal theory.",
      outcome: "Clear legal advice with defined next steps.",
    },
    {
      number: "04",
      icon: CheckCircle,
      title: "Support Execution & Compliance",
      subtitle: "Law is effective only when properly applied.",
      description: "We assist with documentation, implementation, follow-up, and compliance support to ensure advice translates into results.",
      outcome: "Legal protection embedded into action.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">How We Work</span>
          <div className="w-12 h-1 bg-gold mt-2 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-6">
            Our Process Is Structured. Our Advice Is Practical.
          </h2>
        </div>

        {/* Process Timeline - Desktop */}
        <div className="hidden lg:block relative mb-16">
          {/* Connection Line */}
          <div className="absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          
          <div className="grid grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Number & Icon */}
                <div className="flex flex-col items-center mb-6">
                  <span className="text-gold font-serif font-bold text-lg mb-2">{step.number}</span>
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center relative z-10">
                    <step.icon className="h-7 w-7 text-gold" />
                  </div>
                </div>
                
                {/* Content */}
                <div className="text-center">
                  <h3 className="font-serif font-semibold text-lg text-primary mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gold italic mb-3">
                    {step.subtitle}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    {step.description}
                  </p>
                  <div className="bg-cream rounded-lg p-3">
                    <p className="text-xs font-medium text-primary">
                      <span className="text-gold">Outcome:</span> {step.outcome}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Timeline - Mobile/Tablet */}
        <div className="lg:hidden space-y-8 mb-16">
          {steps.map((step, index) => (
            <div key={step.number} className="flex gap-6">
              {/* Left: Number & Icon */}
              <div className="flex flex-col items-center">
                <span className="text-gold font-serif font-bold text-lg mb-2">{step.number}</span>
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-gold" />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-full bg-gold/20 mt-4" />
                )}
              </div>
              
              {/* Right: Content */}
              <div className="flex-1 pb-8">
                <h3 className="font-serif font-semibold text-lg text-primary mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-gold italic mb-3">
                  {step.subtitle}
                </p>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {step.description}
                </p>
                <div className="bg-cream rounded-lg p-3">
                  <p className="text-xs font-medium text-primary">
                    <span className="text-gold">Outcome:</span> {step.outcome}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line & CTA */}
        <div className="text-center border-t border-border pt-12">
          <p className="text-xl font-serif font-semibold text-primary mb-2">
            Safe Solutions. Real Relationships.
          </p>
          <p className="text-muted-foreground mb-8">
            Law delivered with structure, clarity, and professional responsibility.
          </p>
          <Button
            onClick={scrollToContact}
            className="bg-gold hover:bg-gold-dark text-primary font-semibold"
          >
            Request a Consultation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
