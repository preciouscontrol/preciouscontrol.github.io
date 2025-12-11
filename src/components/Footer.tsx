import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const Footer = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <footer id="contato" className="bg-primary text-white overflow-hidden" ref={ref}>
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className={`space-y-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center">
                <img src={logo} alt="Preciouscontrol Logo" className="h-28 hover:scale-105 transition-transform duration-300" />
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                {t("footer.description")}
              </p>
              <p className="text-secondary font-medium text-sm">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Quick Links */}
            <div className={`md:ml-32 transition-all duration-700 delay-150 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="font-display text-lg font-bold mb-4 text-white">{t("footer.quickLinks")}</h3>
              <ul className="space-y-3">
                {[
                  { to: "/", label: "nav.home" },
                  { to: "/about", label: "nav.about" },
                  { to: "/services", label: "nav.services" },
                  { to: "/projects", label: "nav.projects" },
                  { to: "/contact", label: "nav.contact" },
                ].map((link, index) => (
                  <li key={link.to} style={{ transitionDelay: `${index * 50 + 200}ms` }}>
                    <Link 
                      to={link.to} 
                      className="text-white/80 hover:text-secondary hover:translate-x-2 transition-all duration-300 text-sm inline-block"
                    >
                      {t(link.label)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="font-display text-lg font-bold mb-4 text-white">{t("footer.contactInfo")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 group">
                  <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="mailto:general@preciouscontrol-services.com" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    general@preciouscontrol-services.com
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <a href="tel:+351915633807" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    +351 915 633 807
                  </a>
                </li>
                <li className="flex items-start gap-3 group">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-white/80 text-sm">
                    Portalegre, Portugal
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-white/60">
            <p>© {new Date().getFullYear()} {t("footer.rights")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
