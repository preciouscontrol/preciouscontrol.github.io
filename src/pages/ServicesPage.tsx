import HeroSection from "@/components/HeroSection";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { Services } from "@/components/Services";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("services.title")} | Preciouscontrol</title>
        <meta name="description" content={t("services.subtitle")} />
        <meta name="keywords" content="scaffolding services, site logistics, warehouse management, works at height" />
        <meta property="og:title" content={t("services.title") + " | Preciouscontrol"} />
        <meta property="og:description" content={t("services.subtitle")} />
        <link rel="canonical" href="https://preciouscontrol.github.io/services" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection title={t("services.title")} subtitle={t("services.subtitle")} />

      <main>
        <Services />
        <ProjectTimeline />
      </main>
    </>
  );
};

export default ServicesPage;
