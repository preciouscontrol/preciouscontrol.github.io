import { useState, useEffect } from "react";
import { Menu, X, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.png";

export const Navbar = () => {
  const { t } = useTranslation();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/services", label: t("nav.services") },
    { to: "/projects", label: t("nav.projects") },
    { to: "/contact", label: t("nav.contact") },
  ];

  return (
    <nav className={`sticky top-0 z-40 bg-white transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src={logo} 
              alt="Preciouscontrol Logo" 
              className="h-14 transition-all duration-300 group-hover:scale-110 group-hover:rotate-1" 
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-medium text-foreground transition-all duration-300 hover:text-primary hover:-translate-y-0.5 uppercase text-sm tracking-wide relative group ${
                  location.pathname === link.to ? "text-primary" : ""
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {link.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ${
                  location.pathname === link.to ? "w-full" : "w-0 group-hover:w-full"
                }`} />
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center gap-4">
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden transition-transform duration-300 hover:scale-110 active:scale-95"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-foreground transition-transform duration-300 rotate-0" size={28} />
            ) : (
              <Menu className="text-foreground transition-transform duration-300" size={28} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-white border-t border-border overflow-hidden transition-all duration-500 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-medium py-2 text-foreground hover:text-primary hover:translate-x-2 transition-all duration-300 uppercase text-sm ${
                location.pathname === link.to ? "text-primary" : ""
              }`}
              style={{ 
                transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                opacity: isMobileMenuOpen ? 1 : 0,
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div 
            className="pt-2 transition-all duration-300"
            style={{ 
              transitionDelay: isMobileMenuOpen ? '250ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
            }}
          >
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  );
};
