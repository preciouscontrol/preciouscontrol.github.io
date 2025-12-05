import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contato" className="bg-primary text-white">
      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center">
                <img src={logo} alt="Preciouscontrol Logo" className="h-28" />
              </div>
              <p className="text-white/80 leading-relaxed text-sm">
                {t("footer.description")}
              </p>
              <p className="text-secondary font-medium text-sm">
                {t("footer.tagline")}
              </p>
            </div>

            {/* Quick Links */}
            <div className="md:ml-32">
              <h3 className="font-display text-lg font-bold mb-4 text-white">{t("footer.quickLinks")}</h3>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    {t("nav.home")}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    {t("nav.about")}
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    {t("nav.services")}
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    {t("nav.projects")}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    {t("nav.contact")}
                  </Link>
                </li>
                <li>
                  <Link to="/quote" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    {t("nav.quote")}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-white">{t("footer.contactInfo")}</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <a href="mailto:general@preciouscontrol-services.com" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    general@preciouscontrol-services.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <a href="tel:+351912345678" className="text-white/80 hover:text-secondary transition-colors text-sm">
                    +351 912 345 678
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-white/80 text-sm">
                    Portalegre, Portugal
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Media 
            <div>
              <h3 className="font-display text-lg font-bold mb-4 text-white">{t("footer.socialMedia")}</h3>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-secondary transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-secondary transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-3 rounded-lg hover:bg-secondary transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            */}
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
