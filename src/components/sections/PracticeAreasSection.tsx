import { Building2, Home, FileText, Users, Scale, Briefcase, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: Building2,
      title: "Corporate & Commercial Law",
      description: "Company formation, corporate governance, contracts, commercial advisory, and compliance.",
    },
    {
      icon: Home,
      title: "Property & Real Estate Law",
      description: "Property transactions, leases, tenancy matters, property advisory, and related disputes.",
    },
    {
      icon: FileText,
      title: "Contract Law",
      description: "Drafting, vetting, negotiation, enforcement, and risk review of commercial and private contracts.",
    },
    {
      icon: Users,
      title: "Employment & Labour Law",
      description: "Employment contracts, HR advisory, workplace compliance, and labour-related disputes.",
    },
    {
      icon: Scale,
      title: "Dispute Resolution & Advisory",
      description: "Pre-litigation advisory, demand notices, negotiation, and strategic dispute management.",
    },
    {
      icon: Briefcase,
      title: "Legal Retainership Services",
      description: "Ongoing legal support for businesses, SMEs, and professionals through structured retainership arrangements.",
    },
    {
      icon: ShieldCheck,
      title: "Regulatory & Compliance Advisory",
      description: "Guidance on statutory compliance, regulatory exposure, and legal risk mitigation.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-gold font-medium uppercase tracking-wider text-sm">Our Practice Areas</span>
          <div className="w-12 h-1 bg-gold mt-2 mx-auto" />
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mt-6">
            Comprehensive Legal Services
          </h2>
          <p className="text-muted-foreground mt-4">
            Stallions Sterling Law Firm provides structured legal services across advisory, 
            transactional, and dispute-resolution mandates. Each service is delivered with 
            clarity of scope, defined process, and professional accountability.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreas.map((area) => (
            <Card 
              key={area.title}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-gold/30 bg-background"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <area.icon className="h-7 w-7 text-gold group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-primary mb-3">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {area.description}
                </p>
              </CardContent>
              <CardFooter className="px-6 pb-6 pt-0">
                <button className="inline-flex items-center text-gold hover:text-gold-dark font-medium text-sm group/link">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            size="lg"
            className="border-gold text-primary hover:bg-gold hover:text-primary-foreground"
          >
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;
