import { useTranslation } from "react-i18next";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ClipboardCheck, Truck, HardHat, CheckCircle2, Ruler, Building } from "lucide-react";

const timelineSteps = [
  {
    icon: ClipboardCheck,
    titleKey: "timeline.step1.title",
    descKey: "timeline.step1.desc",
    phase: "01",
  },
  {
    icon: Ruler,
    titleKey: "timeline.step2.title",
    descKey: "timeline.step2.desc",
    phase: "02",
  },
  {
    icon: Truck,
    titleKey: "timeline.step3.title",
    descKey: "timeline.step3.desc",
    phase: "03",
  },
  {
    icon: HardHat,
    titleKey: "timeline.step4.title",
    descKey: "timeline.step4.desc",
    phase: "04",
  },
  {
    icon: Building,
    titleKey: "timeline.step5.title",
    descKey: "timeline.step5.desc",
    phase: "05",
  },
];

export const ProjectTimeline = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative py-12 sm:py-16 md:py-24 bg-blueprint-dark overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 blueprint-grid opacity-10" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-construction/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-construction/50 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
            <div className="h-px w-8 sm:w-12 bg-construction" />
            <span className="text-construction font-mono text-xs sm:text-sm uppercase tracking-widest">
              {t("timeline.badge")}
            </span>
            <div className="h-px w-8 sm:w-12 bg-construction" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-primary-foreground uppercase tracking-wider mb-3 sm:mb-4">
            {t("timeline.title")}
          </h2>
          
          <p className="text-primary-foreground/70 max-w-2xl mx-auto text-sm sm:text-base px-4">
            {t("timeline.subtitle")}
          </p>
        </div>

        {/* Timeline - Grid layout for mobile */}
        <div className="relative max-w-5xl mx-auto">
          {/* Central line - Hidden on mobile */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-construction via-blueprint-light to-construction -translate-x-1/2 hidden lg:block" />

          {/* Mobile: Grid layout, Desktop: Alternating timeline */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:block gap-4 sm:gap-6 lg:space-y-0">
            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative ${index === timelineSteps.length - 1 ? "col-span-2 sm:col-span-1" : ""} transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Mobile Card */}
                  <div className="lg:hidden bg-blueprint/50 backdrop-blur-sm border border-blueprint-light/30 p-4 sm:p-5 rounded-sm group hover:border-construction/50 transition-all duration-300">
                    {/* Icon and Phase */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-construction/20 border-2 border-construction flex items-center justify-center flex-shrink-0">
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-construction" />
                      </div>
                      <span className="font-display text-lg sm:text-xl font-bold text-construction">{step.phase}</span>
                    </div>
                    
                    <h3 className="font-display text-sm sm:text-base font-bold text-primary-foreground uppercase tracking-wide mb-1 sm:mb-2">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-primary-foreground/70 text-xs sm:text-sm leading-relaxed">
                      {t(step.descKey)}
                    </p>
                  </div>

                  {/* Desktop Timeline Item */}
                  <div className={`hidden lg:flex items-center ${isLeft ? "flex-row" : "flex-row-reverse"}`}>
                    {/* Content side */}
                    <div className={`w-1/2 ${isLeft ? "pr-12 text-right" : "pl-12 text-left"}`}>
                      <div className={`bg-blueprint/50 backdrop-blur-sm border border-blueprint-light/30 p-6 rounded-sm relative group hover:border-construction/50 transition-all duration-300 ${
                        isLeft ? "mr-8" : "ml-8"
                      }`}>
                        {/* Phase number */}
                        <div className={`absolute top-4 ${isLeft ? "right-4" : "left-4"}`}>
                          <span className="font-mono text-xs text-construction/60">PHASE</span>
                          <span className="font-display text-2xl font-bold text-construction ml-1">{step.phase}</span>
                        </div>

                        <div className={`pt-8 ${isLeft ? "pr-16" : "pl-16"}`}>
                          <h3 className="font-display text-xl font-bold text-primary-foreground uppercase tracking-wide mb-2">
                            {t(step.titleKey)}
                          </h3>
                          <p className="text-primary-foreground/70 text-sm leading-relaxed">
                            {t(step.descKey)}
                          </p>
                        </div>

                        {/* Decorative corner */}
                        <div className={`absolute bottom-0 ${isLeft ? "right-0" : "left-0"} w-8 h-8 border-b-2 ${isLeft ? "border-r-2" : "border-l-2"} border-construction/30 group-hover:border-construction transition-colors`} />
                      </div>
                    </div>

                    {/* Center icon */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-full bg-blueprint-dark border-2 border-construction flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-construction" />
                        </div>
                      </div>
                    </div>

                    {/* Empty side for layout */}
                    <div className="w-1/2" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
};
