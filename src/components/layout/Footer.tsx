import { Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = [
    "Corporate & Commercial Law",
    "Property & Real Estate Law",
    "Contract Law",
    "Employment & Labour Law",
    "Dispute Resolution",
    "Legal Retainership",
    "Regulatory Compliance",
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "How We Work", href: "#process" },
    { name: "Contact Us", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-serif font-bold text-gold">Stallions</span>
              <span className="text-sm font-sans tracking-widest uppercase">Sterling</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              A client-focused law practice founded on the conviction that effective legal 
              solutions must be both technically sound and relationally grounded.
            </p>
            <p className="text-gold italic text-sm">
              "Safe Solutions, Real Relationships"
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-charcoal-light flex items-center justify-center hover:bg-gold hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold">Practice Areas</h3>
            <ul className="space-y-3">
              {practiceAreas.map((area) => (
                <li key={area}>
                  <button
                    onClick={() => scrollToSection("#services")}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {area}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-gold shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Nigeria
                </span>
              </li>
              <li>
                <a href="tel:+254719407999" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                  <Phone className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-sm">+254 719 407 999</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@stallionssterling.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-gold transition-colors">
                  <Mail className="h-5 w-5 text-gold shrink-0" />
                  <span className="text-sm">info@stallionssterling.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-charcoal-light">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
            <p>&copy; {currentYear} Stallions Sterling Law Firm. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
