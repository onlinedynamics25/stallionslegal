import { Building2, Users, Shield, Home, Calculator, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Comprehensive legal solutions for businesses, including formations, contracts, mergers, and compliance matters.",
    },
    {
      icon: Users,
      title: "Family Law",
      description: "Compassionate representation in divorce, custody, adoption, and other family-related legal matters.",
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Vigorous defense of your rights in criminal proceedings, from minor offenses to serious charges.",
    },
    {
      icon: Home,
      title: "Real Estate",
      description: "Expert guidance in property transactions, title disputes, landlord-tenant matters, and development projects.",
    },
    {
      icon: Calculator,
      title: "Tax Law",
      description: "Strategic tax planning, compliance assistance, and representation in disputes with tax authorities.",
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
            We offer a wide range of legal services to meet your needs, 
            backed by expertise and dedication to achieving the best outcomes.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {practiceAreas.map((area, index) => (
            <Card 
              key={area.title}
              className="group hover:shadow-lg transition-all duration-300 border-border hover:border-gold/30 bg-background"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-lg bg-primary flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-300">
                  <area.icon className="h-7 w-7 text-gold group-hover:text-primary transition-colors duration-300" />
                </div>
                <h3 className="font-serif font-semibold text-xl text-primary mb-3">
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
