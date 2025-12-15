import HeroSection from "@/components/HeroSection";
import Gallery, { GalleryImage, ProjectCategory, ProjectSubtype } from "@/components/Gallery";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { BlueprintSection } from "@/components/BlueprintSection";

// Mapeamento de nomes de pastas para tipos (português → slug)
const categoryMapping: Record<string, ProjectCategory> = {
  "Andaime": "scaffolding",
  "Logistica": "logistics",
};

const subtypeMapping: Record<string, ProjectSubtype> = {
  // Andaimes
  "Escadas": "stairs",
  "Suspenso": "suspended",
  "Rolante": "rolling",
  "Abrigos": "shelters",
  "Coberturas provisórias": "temporary-covers",
  "Fachada": "facade",
  "Passarelas": "walkways",
  // Logística
  "Instalações provisórias": "temporary-facilities",
  "Energia provisória": "temporary-power",
  "Transportes": "transport",
  "Armazenagem": "storage",
};

// Buscar automaticamente todas as imagens das pastas usando Vite's import.meta.glob
const getProjectImages = (): GalleryImage[] => {
  // Glob pattern sem eager - apenas mapeia os paths, não carrega as imagens
  const imageModules = import.meta.glob(
    "/public/projects/**/*.jpg",
    { eager: false }
  );

  const images: GalleryImage[] = [];
  let id = 1;

  // Processar cada path encontrado (muito mais rápido)
  Object.keys(imageModules).forEach((path) => {
    // path: /public/projects/Andaimes/Escadas/1.jpg
    const parts = path.replace(/^\/public\/projects\//, "").split("/");
    
    if (parts.length >= 3) {
      const categoryName = parts[0];
      const subtypeName = parts.slice(1, -1).join("/");

      const category = categoryMapping[categoryName] as ProjectCategory;
      const subtype = subtypeMapping[subtypeName] as ProjectSubtype;

      if (category && subtype) {
        images.push({
          id: `project-${id}`,
          src: path.replace(/^\/public/, ""),
          alt: `${categoryName} - ${subtypeName}`,
          category,
          subtype,
        });
        id++;
      }
    }
  });

  return images.sort((a, b) => {
    const numA = parseInt(a.id.replace("project-", ""));
    const numB = parseInt(b.id.replace("project-", ""));
    return numA - numB;
  });
};

const ProjectsPage = () => {
  const { t } = useTranslation();
  const projectImages = getProjectImages();

  return (
    <>
      <Helmet>
        <title>{t("projects.title")} | Preciouscontrol</title>
        <meta name="description" content={t("projects.subtitle")} />
        <meta name="keywords" content="projects, portfolio, scaffolding projects, logistics, andaimes, completed work" />
        <meta property="og:title" content={t("projects.title") + " | Preciouscontrol"} />
        <meta property="og:description" content={t("projects.subtitle")} />
        <link rel="canonical" href="https://preciouscontrol.github.io/projects" />
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
