import { About } from "@/components/About";
import HeroSection from "@/components/HeroSection";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const AboutPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <Helmet>
        <title>{t("about.heroTitle")} | Preciouscontrol</title>
        <meta name="description" content={t("about.description")} />
        <meta name="keywords" content="about Preciouscontrol, company mission, scaffolding expertise, safety standards" />
        <meta property="og:title" content={t("about.heroTitle") + " | Preciouscontrol"} />
        <meta property="og:description" content={t("about.description")} />
        <link rel="canonical" href="https://preciouscontrol.github.io/about" />
      </Helmet>
      
      <HeroSection title={t("about.heroTitle")} subtitle={t("about.heroSubtitle")} />

      <main>
        <About />
      </main>
    </>
  );
};

export default AboutPage;
