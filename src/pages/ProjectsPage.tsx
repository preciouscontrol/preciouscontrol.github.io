import HeroSection from "@/components/HeroSection";
import Gallery from "@/components/Gallery";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { BlueprintSection } from "@/components/BlueprintSection";
import { projectImages } from "@/data/projectImages";

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>{t("projects.title")} | Preciouscontrol</title>
        <meta name="description" content={t("projects.subtitle")} />
        <meta name="keywords" content="projects, portfolio, scaffolding projects, logistics, andaimes, completed work" />
        <meta property="og:title" content={t("projects.title") + " | Preciouscontrol"} />
        <meta property="og:description" content={t("projects.subtitle")} />
        <link rel="canonical" href="https://preciouscontrol-services.com/projects" />
      </Helmet>

      <HeroSection title={t("projects.title")} subtitle={t("projects.subtitle")} />

      <main>
        <BlueprintSection>
          <Gallery images={projectImages} title={t("projects.heroTitle")} />
        </BlueprintSection>
      </main>
    </>
  );
};

export default ProjectsPage;
