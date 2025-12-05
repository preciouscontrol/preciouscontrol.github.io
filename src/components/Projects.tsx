import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useTranslation } from "react-i18next";

// Placeholder images - será substituído por fotos reais
const placeholderProjects = [
  {
    id: 1,
    category: "residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    category: "commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    category: "residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    category: "hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    category: "residential",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    category: "commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
];

export const Projects = ({ isHome = false }) => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "residential", "commercial", "hospitality"];

  const filteredProjects = selectedCategory === "all"
    ? placeholderProjects
    : placeholderProjects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projetos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {isHome && (
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              {t("projects.title")}
            </h2>
            <div className="w-16 h-1 bg-secondary mx-auto mb-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("projects.subtitle")}
            </p>
          </div>)}

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant="outline"
              className={`transition-all px-6 py-2 font-medium uppercase text-xs tracking-wide ${selectedCategory === category
                  ? "bg-primary text-white border-primary hover:bg-primary/90"
                  : "bg-white text-foreground border-border hover:bg-primary hover:text-white hover:border-primary"
                }`}
            >
              {t(`projects.categories.${category}`)}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className="overflow-hidden cursor-pointer card-hover animate-fade-in-up bg-white border-none shadow-md"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-56 overflow-hidden group">
                <img
                  src={project.image}
                  alt={t(`projects.types.${project.category}`)}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-semibold uppercase text-sm tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t(`projects.types.${project.category}`)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
