import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";

const ContactPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("nav.contact")} | Preciouscontrol</title>
        <meta name="description" content={t("contact.heroSubtitle")} />
        <meta name="keywords" content="contact, get in touch, inquiry, scaffolding services, support" />
        <meta property="og:title" content={t("nav.contact") + " | Preciouscontrol"} />
        <meta property="og:description" content={t("contact.heroSubtitle")} />
        <link rel="canonical" href="https://preciouscontrol.github.io/contact" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection title={t("nav.contact")} subtitle={t("contact.heroSubtitle")} />

      {/* Contact Content */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                {t("contact.info")}
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="bg-primary rounded-full p-3">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("footer.phone")}</h3>
                    <a href="tel:+351915633807" className="text-muted-foreground hover:text-primary transition-colors">
                      +351 915 633 807
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="bg-primary rounded-full p-3">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("footer.email")}</h3>
                    <a href="mailto:general@preciouscontrol-services.com" className="text-muted-foreground hover:text-primary transition-colors">
                      general@preciouscontrol-services.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
                  <div className="bg-primary rounded-full p-3">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{t("footer.location")}</h3>
                    <p className="text-muted-foreground">Portalegre, Portugal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg border border-border">
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                {t("contact.sendMessage")}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
