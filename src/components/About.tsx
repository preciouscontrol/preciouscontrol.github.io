import { useTranslation } from "react-i18next";
import { Shield, Target, Users, Timer, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BlueprintSection } from "@/components/BlueprintSection";

// Animated Scaffolding SVG Component
const ScaffoldingAnimation = () => (
  <svg
    className="w-full h-full"
    viewBox="0 0 200 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Vertical poles */}
    {[0, 50, 100, 150].map((x, i) => (
      <line
        key={`v-${i}`}
        x1={x + 25}
        y1="300"
        x2={x + 25}
        y2="20"
        stroke="currentColor"
        strokeWidth="3"
        className="text-construction animate-scaffold-build"
        style={{ animationDelay: `${i * 0.2}s`, transformOrigin: "bottom" }}
      />
    ))}

    {/* Horizontal bars */}
    {[0, 60, 120, 180, 240].map((y, i) => (
      <line
        key={`h-${i}`}
        x1="25"
        y1={y + 30}
        x2="175"
        y2={y + 30}
        stroke="currentColor"
        strokeWidth="2"
        className="text-blueprint/60 animate-fade-in-up"
        style={{ animationDelay: `${0.8 + i * 0.15}s` }}
      />
    ))}

    {/* Diagonal braces */}
    {[0, 60, 120, 180].map((y, i) => (
      <g key={`d-${i}`}>
        <line
          x1="25"
          y1={y + 30}
          x2="75"
          y2={y + 90}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-construction/50 animate-fade-in-left"
          style={{ animationDelay: `${1.2 + i * 0.1}s` }}
        />
        <line
          x1="125"
          y1={y + 30}
          x2="175"
          y2={y + 90}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-construction/50 animate-fade-in-right"
          style={{ animationDelay: `${1.2 + i * 0.1}s` }}
        />
      </g>
    ))}

    {/* Platform rectangles */}
    {[60, 180].map((y, i) => (
      <rect
        key={`p-${i}`}
        x="25"
        y={y + 25}
        width="150"
        height="8"
        fill="currentColor"
        className="text-construction/30 animate-scale-in"
        style={{ animationDelay: `${1.5 + i * 0.2}s` }}
      />
    ))}
  </svg>
);

export const About = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation(0.1);

  const features = [
    {
      icon: Shield,
      title: t("about.features.safety.title"),
      desc: t("about.features.safety.desc"),
    },
    {
      icon: Target,
      title: t("about.features.precision.title"),
      desc: t("about.features.precision.desc"),
    },
    {
      icon: Timer,
      title: t("about.features.efficiency.title"),
      desc: t("about.features.efficiency.desc"),
    },
    {
      icon: Users,
      title: t("about.features.team.title"),
      desc: t("about.features.team.desc"),
    },
  ];

  return (
    <BlueprintSection
      title={t("about.title")}
      subtitle={t("about.description")}
      showCorners={true}
    >
      {/* Background Scaffolding Animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-10">
        <div className="hidden lg:block absolute -right-7 top-0 h-full w-1/2 lg:w-1/3">
          <ScaffoldingAnimation />
        </div>
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto">
        {/* Main content */}
        <div className="relative z-10 space-y-6">

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`relative group bg-card rounded-sm border border-border p-4 sm:p-6 
                  hover:border-construction/50 hover:shadow-lg hover:shadow-construction/10
                  transition-all duration-500
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="relative flex-shrink-0">
                    <div className="bg-blueprint/10 rounded-full p-3 sm:p-4 group-hover:bg-construction/20 transition-all duration-300">
                      <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-blueprint group-hover:text-construction transition-colors duration-300" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground mb-1 uppercase tracking-wide text-xs sm:text-sm group-hover:text-blueprint transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-construction group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Vision & Values */}
        <div className={`grid md:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-12 transition-all duration-700 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
          {/* Vision */}
          <div className="relative bg-blueprint text-primary-foreground p-6 sm:p-8 rounded-sm overflow-hidden">
            <div className="absolute inset-0 blueprint-grid opacity-10" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-2 h-2 bg-construction" />
                <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base">{t("about.vision.title")}</h4>
              </div>
              <p className="text-primary-foreground/80 leading-relaxed text-xs sm:text-sm">
                {t("about.vision.text")}
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="relative bg-construction text-primary-foreground p-6 sm:p-8 rounded-sm overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="w-2 h-2 bg-primary" />
                <h4 className="font-display font-bold uppercase tracking-wider text-sm sm:text-base">{t("about.values.title")}</h4>
              </div>
              <p className="text-primary-foreground/90 leading-relaxed text-xs sm:text-sm">
                {t("about.values.text")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </BlueprintSection>
  );
};
