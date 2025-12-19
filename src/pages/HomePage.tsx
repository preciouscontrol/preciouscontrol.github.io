import { ConstructionHero } from "@/components/ConstructionHero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { ProjectTimeline } from "@/components/ProjectTimeline";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>Preciouscontrol | Works at height Solutions</title>
        <meta name="description" content={t("hero.subtitle")} />
        <meta name="keywords" content="scaffolding, site logistics, warehouse management, works at height" />
        <meta property="og:title" content="Preciouscontrol | Works at height Solutions" />
        <meta property="og:description" content={t("hero.subtitle")} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://preciouscontrol-services.com" />
      </Helmet>
      <ConstructionHero />
      <About />
      <Services isHome={true} />
      <ProjectTimeline />
    </>
  );
};

export default HomePage;
