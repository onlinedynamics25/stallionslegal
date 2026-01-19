import { Award, Users, Target, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in every case we handle.",
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "Your needs and goals are our top priority.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We are committed to achieving the best outcomes.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We operate with honesty and transparency.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-cream">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-gold font-medium uppercase tracking-wider text-sm">About Our Firm</span>
              <div className="w-12 h-1 bg-gold mt-2" />
            </div>

            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
              Welcome to Stallions Sterling Law Firm
            </h2>

            <p className="text-muted-foreground leading-relaxed">
              Founded in 2024, Stallions Sterling Law Firm has quickly established itself as a 
              premier legal practice in Kenya. We are dedicated to providing exceptional legal 
              services with a focus on building lasting relationships with our clients.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced attorneys brings diverse expertise across multiple practice 
              areas, ensuring comprehensive legal support for individuals and businesses alike. 
              We believe in delivering personalized solutions that address the unique needs of 
              each client.
            </p>

            <blockquote className="border-l-4 border-gold pl-6 italic text-lg text-primary font-serif">
              "Safe Solutions, Real Relationships"
            </blockquote>

            <Button 
              variant="outline"
              className="border-gold text-primary hover:bg-gold hover:text-primary-foreground"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-2 gap-6">
            {values.map((value, index) => (
              <div 
                key={value.title}
                className="bg-background p-6 rounded-lg shadow-sm border border-border hover:shadow-md transition-shadow group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <value.icon className="h-6 w-6 text-gold" />
                </div>
                <h3 className="font-serif font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
