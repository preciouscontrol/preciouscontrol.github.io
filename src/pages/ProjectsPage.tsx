import HeroSection from "@/components/HeroSection";
import Gallery, { GalleryImage } from "@/components/Gallery";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const ProjectsPage = () => {
  const { t } = useTranslation();

  // Generate numbered images from /public/projects/ directory (1.jpg, 2.jpg, etc.)
  const projectImages: GalleryImage[] = Array.from({ length: 75 }, (_, i) => ({
    id: `project-${i + 1}`,
    src: `projects/chernobyl (${i + 1}).jpg`,
    alt: `Project1 ${i + 1}`,
    title: `Project 1`,
  }));
  
  return (
    <>
      <Helmet>
        <title>{t("projects.title")} | Preciouscontrol</title>
        <meta name="description" content={t("projects.subtitle")} />
        <meta name="keywords" content="projects, portfolio, scaffolding projects, completed work, case studies" />
        <meta property="og:title" content={t("projects.title") + " | Preciouscontrol"} />
        <meta property="og:description" content={t("projects.subtitle")} />
        <link rel="canonical" href="https://preciouscontrol.github.io/projects" />
      </Helmet>

      {/* Hero Section */}
      <HeroSection title={t("projects.title")} subtitle={t("projects.subtitle")} />

      <main>
        {/*<Projects /> Placeholder for future Projects component integration */}
        <Gallery images={projectImages} title={t("projects.title")} />
      </main>
    </>
  );
};

export default ProjectsPage;
