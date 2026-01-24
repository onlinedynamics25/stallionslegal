import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "How We Work", href: "/process" },
  { name: "Contact Us", href: "/#contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const sectionId = href.substring(1);
      if (location.pathname === "/") {
        const element = document.querySelector(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate("/");
        setTimeout(() => {
          const element = document.querySelector(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
          }
        }, 100);
      }
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname === href;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-charcoal-light">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="flex flex-col leading-tight">
              <span className="text-2xl font-serif font-bold text-gold">
                Stallions
              </span>
              <span className="text-sm font-sans text-primary-foreground tracking-widest uppercase">
                Sterling
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              link.href.startsWith("/#") ? (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.href)}
                  className="text-primary-foreground/80 hover:text-gold transition-colors font-medium"
                >
                  {link.name}
                </button>
              ) : (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`transition-colors font-medium ${
                    isActive(link.href)
                      ? "text-gold"
                      : "text-primary-foreground/80 hover:text-gold"
                  }`}
                >
                  {link.name}
                </Link>
              )
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
              onClick={() => handleNavClick("/#contact")}
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
                link.href.startsWith("/#") ? (
                  <button
                    key={link.name}
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/80 hover:text-gold transition-colors font-medium text-left py-2"
                  >
                    {link.name}
                  </button>
                ) : (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`transition-colors font-medium text-left py-2 ${
                      isActive(link.href)
                        ? "text-gold"
                        : "text-primary-foreground/80 hover:text-gold"
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              ))}
              <a
                href="tel:+254719407999"
                className="flex items-center gap-2 text-primary-foreground/80 hover:text-gold transition-colors py-2"
              >
                <Phone className="h-4 w-4" />
                <span>+254 719 407 999</span>
              </a>
              <Button
                onClick={() => handleNavClick("/#contact")}
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
