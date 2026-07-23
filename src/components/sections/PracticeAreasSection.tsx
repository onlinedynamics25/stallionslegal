import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import corporateImg from "@/assets/practice-corporate.jpg";
import propertyImg from "@/assets/practice-property.jpg";
import contractImg from "@/assets/practice-contract.jpg";
import employmentImg from "@/assets/practice-employment.jpg";
import disputeImg from "@/assets/practice-dispute.jpg";
import retainerImg from "@/assets/practice-retainer.jpg";
import complianceImg from "@/assets/practice-compliance.jpg";

const PracticeAreasSection = () => {
  const practiceAreas = [
    {
      image: corporateImg,
      title: "Corporate & Commercial Law",
      description: "Company formation, corporate governance, contracts, commercial advisory, and compliance.",
    },
    {
      image: propertyImg,
      title: "Property & Real Estate Law",
      description: "Property transactions, leases, tenancy matters, property advisory, and related disputes.",
    },
    {
      image: contractImg,
      title: "Contract Law",
      description: "Drafting, vetting, negotiation, enforcement, and risk review of commercial and private contracts.",
    },
    {
      image: employmentImg,
      title: "Employment & Labour Law",
      description: "Employment contracts, HR advisory, workplace compliance, and labour-related disputes.",
    },
    {
      image: disputeImg,
      title: "Dispute Resolution & Advisory",
      description: "Pre-litigation advisory, demand notices, negotiation, and strategic dispute management.",
    },
    {
      image: retainerImg,
      title: "Legal Retainership Services",
      description: "Ongoing legal support for businesses, SMEs, and professionals through structured retainership arrangements.",
    },
    {
      image: complianceImg,
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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {practiceAreas.map((area) => (
            <Card
              key={area.title}
              className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-border hover:border-gold/40 bg-background flex flex-col"
            >
              {/* Cover Image */}
              <div className="relative w-full aspect-[16/10] overflow-hidden">
                <img
                  src={area.image}
                  alt={area.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-serif font-semibold text-lg text-primary-foreground drop-shadow-md">
                    {area.title}
                  </h3>
                  <div className="w-10 h-0.5 bg-gold mt-2" />
                </div>
              </div>

              <CardContent className="p-6 flex-1">
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
