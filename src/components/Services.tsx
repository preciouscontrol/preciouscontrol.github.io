import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Construction, Truck, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = ({ isHome = false }) => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Construction,
      title: t("services.scaffolding.title"),
      description: t("services.scaffolding.description"),
      items: [
        t("services.scaffolding.items.design"),
        t("services.scaffolding.items.management"),
        t("services.scaffolding.items.audit"),
      ],
    },
    {
      icon: Truck,
      title: t("services.logistics.title"),
      description: t("services.logistics.description"),
      items: [
        t("services.logistics.items.facilities"),
        t("services.logistics.items.energy"),
        t("services.logistics.items.transport"),
        t("services.logistics.items.storage"),
      ],
    },
  ];

  return (
    <section id="services" className={`py-20 ${isHome ? "bg-muted" : "bg-background"}`}>
      <div className="container mx-auto px-4">
        {isHome && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t("services.title")}
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("services.subtitle")}
            </p>
          </div>)}

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-lg border border-border hover:shadow-xl transition-all duration-300 group"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary/10 rounded-xl p-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">
                  {service.title}
                </h3>
              </div>

              <p className="text-muted-foreground mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground/80 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/quote">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white">
              {t("hero.requestQuote")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
