import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "How We Work", href: "#process" },
  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-charcoal-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-serif font-bold text-gold">
                Stallions
              </span>
              <span className="text-sm font-sans text-primary-foreground tracking-widest uppercase">
                Sterling
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollToSection(link.href)}
                className="text-primary-foreground/80 hover:text-gold transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+254719407999"
              className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="text-sm">+254 719 407 999</span>
            </a>
            <Button
              onClick={() => scrollToSection("#contact")}
              className="bg-gold hover:bg-gold-dark text-primary font-semibold"
            >
              Request Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-charcoal-light">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors font-medium text-left py-2"
                >
                  {link.name}
                </button>
              ))}
              <a
                href="tel:+254719407999"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors py-2"
              >
                <Phone className="h-4 w-4" />
                <span>+254 719 407 999</span>
              </a>
              <Button
                onClick={() => scrollToSection("#contact")}
                className="bg-gold hover:bg-gold-dark text-primary font-semibold w-full mt-2"
              >
                Request Consultation
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
