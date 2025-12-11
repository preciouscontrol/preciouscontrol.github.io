import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { ContactForm } from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BlueprintSection } from "@/components/BlueprintSection";

const ContactPage = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const contactItems = [
    { icon: Phone, title: "footer.phone", content: "+351 915 633 807", href: "tel:+351915633807" },
    { icon: Mail, title: "footer.email", content: "general@preciouscontrol-services.com", href: "mailto:general@preciouscontrol-services.com" },
    { icon: MapPin, title: "footer.location", content: "Portalegre, Portugal", href: null },
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>{t("nav.contact")} | Preciouscontrol</title>
        <meta name="description" content={t("contact.heroSubtitle")} />
        <meta name="keywords" content="contact, get in touch, inquiry, scaffolding services, support" />
        <meta property="og:title" content={t("nav.contact") + " | Preciouscontrol"} />
        <meta property="og:description" content={t("contact.heroSubtitle")} />
        <link rel="canonical" href="https://preciouscontrol.github.io/contact" />
      </Helmet>

      <HeroSection title={t("nav.contact")} subtitle={t("contact.heroSubtitle")} />
    <BlueprintSection>

      <section className="py-16 bg-transparent overflow-hidden" ref={ref}>
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-2xl font-display font-bold text-foreground mb-8">
                {t("contact.info")}
              </h2>
              
              <div className="space-y-6">
                {contactItems.map((item, index) => (
                  <div 
                    key={index}
                    className={`flex items-start gap-4 p-4 bg-muted rounded-lg 
                      hover:shadow-lg hover:-translate-y-1 hover:bg-muted/80
                      transition-all duration-500 group
                      ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                    style={{ transitionDelay: `${index * 100 + 200}ms` }}
                  >
                    <div className="bg-primary rounded-full p-3 group-hover:bg-secondary group-hover:scale-110 transition-all duration-300">
                      <item.icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{t(item.title)}</h3>
                      {item.href ? (
                        <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                          {item.content}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className={`bg-white p-8 rounded-xl shadow-lg border border-border
              hover:shadow-2xl transition-all duration-500
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <h2 className="text-2xl font-display font-bold text-foreground mb-6">
                {t("contact.sendMessage")}
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
          </BlueprintSection>

    </div>
  );
};

export default ContactPage;
