import { useTranslation } from "react-i18next";
import { Construction, Truck, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BlueprintSection } from "@/components/BlueprintSection";

export const Services = ({ isHome = false }) => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

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
    <BlueprintSection
      title={isHome ? t("services.title") : t("services.heroTitle")}
      subtitle={isHome ? t("services.subtitle") : undefined}
      className={isHome ? "bg-muted/50" : "bg-background"}
    >
      <div ref={ref} className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className={`group relative bg-card rounded-sm border border-border overflow-hidden
              hover:border-construction/40 hover:shadow-xl hover:shadow-construction/5
              transition-all duration-500
              ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="p-6 sm:p-8">
              {/* Header */}
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="bg-blueprint/10 rounded-full p-3 sm:p-4 group-hover:bg-construction/20 transition-all duration-500">
                  <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blueprint group-hover:text-construction transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-display font-bold text-blueprint uppercase tracking-wider">
                    {service.title}
                  </h3>
                  <div className="h-0.5 w-8 sm:w-12 bg-construction mt-1 group-hover:w-16 sm:group-hover:w-20 transition-all duration-500" />
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 sm:mb-6 text-sm sm:text-base">
                {service.description}
              </p>

              {/* Items list */}
              <ul className="space-y-3 sm:space-y-4">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className={`flex items-start gap-2 sm:gap-3 transition-all duration-500 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}
                    style={{ transitionDelay: `${index * 150 + itemIndex * 100 + 300}ms` }}
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-construction" />
                    </div>
                    <span className="text-foreground/80 text-xs sm:text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Phase indicator */}
              <div className="absolute top-4 right-4 font-mono text-xs text-muted-foreground/50">
                <span className="text-construction">0{index + 1}</span>/02
              </div>
            </div>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-construction group-hover:w-full transition-all duration-700" />
          </div>
        ))}
      </div>
    </BlueprintSection>
  );
};
