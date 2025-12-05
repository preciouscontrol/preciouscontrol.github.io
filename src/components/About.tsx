import { useTranslation } from "react-i18next";
import { Shield, Target, Users, Award, Calendar } from "lucide-react";

export const About = () => {
  const { t } = useTranslation();

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
      icon: Users,
      title: t("about.features.team.title"),
      desc: t("about.features.team.desc"),
    },
    {
      icon: Award,
      title: t("about.features.quality.title"),
      desc: t("about.features.quality.desc"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t("about.title")}
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              {t("about.description")}
            </p>
            
         </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-white rounded-xl border border-border shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="bg-primary/10 rounded-lg p-3">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
