import { useState, useMemo } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn, Filter } from "lucide-react";
import { useTranslation } from "react-i18next";

export type ProjectCategory = "scaffolding" | "logistics";

export type ProjectSubtype = 
  // Scaffolding subtypes
  | "stairs" | "suspended" | "rolling" | "shelters" | "temporary-covers" | "facade" | "walkways"
  // Logistics subtypes
  | "temporary-facilities" | "temporary-power" | "transport" | "storage";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
  category?: ProjectCategory;
  subtype?: ProjectSubtype;
};

type GalleryProps = {
  images: GalleryImage[];
  columns?: number;
  title?: string;
};

const Gallery = ({ images, title }: GalleryProps) => {
  const { t } = useTranslation();
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | "all">("all");
  const [activeSubtype, setActiveSubtype] = useState<ProjectSubtype | "all">("all");
  const [displayCount, setDisplayCount] = useState(5); // Mostrar 5 imagens inicialmente

  const scaffoldingSubtypes: ProjectSubtype[] = [
    "stairs", "suspended", "rolling", "shelters", "temporary-covers", "facade", "walkways"
  ];

  const logisticsSubtypes: ProjectSubtype[] = [
    "temporary-facilities", "temporary-power", "transport", "storage"
  ];

  const getSubtypes = () => {
    if (activeCategory === "scaffolding") return scaffoldingSubtypes;
    if (activeCategory === "logistics") return logisticsSubtypes;
    return [];
  };

  const filteredImages = useMemo(() => {
    return images.filter((img) => {
      if (activeCategory !== "all" && img.category !== activeCategory) return false;
      if (activeSubtype !== "all" && img.subtype !== activeSubtype) return false;
      return true;
    });
  }, [images, activeCategory, activeSubtype]);

  // Mostrar apenas as imagens até displayCount
  const displayedImages = filteredImages.slice(0, displayCount);
  const hasMore = displayCount < filteredImages.length;

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + filteredImages.length) % filteredImages.length);
    }
  };
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % filteredImages.length);
    }
  };

  const currentImage = selectedIndex !== null ? filteredImages[selectedIndex] : null;

  const handleCategoryChange = (category: ProjectCategory | "all") => {
    setActiveCategory(category);
    setActiveSubtype("all");
    setDisplayCount(5); // Reset pagination ao mudar categoria
  };

  const handleLoadMore = () => {
    setDisplayCount((prev) => prev + 5);
  };

  return (
    <>
      <div className="mx-auto px-4">
        {/* Filter Section */}
        <div className="mb-6 sm:mb-8">
          {/* Main Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-4">
            <div className="flex items-center gap-2 text-construction mr-2">
              <Filter className="h-4 w-4" />
              <span className="font-mono text-xs uppercase tracking-wider hidden sm:inline">
                {t("projects.filter")}
              </span>
            </div>
            
            <button
              onClick={() => handleCategoryChange("all")}
              className={`px-4 py-2 rounded-sm font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300
                ${activeCategory === "all" 
                  ? "bg-construction text-primary-foreground shadow-lg" 
                  : "bg-blueprint-dark/50 text-primary-foreground/70 hover:bg-blueprint-dark hover:text-primary-foreground border border-blueprint-line/30"
                }`}
            >
              {t("projects.categories.all")}
            </button>
            
            <button
              onClick={() => handleCategoryChange("scaffolding")}
              className={`px-4 py-2 rounded-sm font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300
                ${activeCategory === "scaffolding" 
                  ? "bg-blueprint text-primary-foreground shadow-lg" 
                  : "bg-blueprint-dark/50 text-primary-foreground/70 hover:bg-blueprint-dark hover:text-primary-foreground border border-blueprint-line/30"
                }`}
            >
              {t("projects.categories.scaffolding")}
            </button>
            
            <button
              onClick={() => handleCategoryChange("logistics")}
              className={`px-4 py-2 rounded-sm font-mono text-xs sm:text-sm uppercase tracking-wider transition-all duration-300
                ${activeCategory === "logistics" 
                  ? "bg-blueprint text-primary-foreground shadow-lg" 
                  : "bg-blueprint-dark/50 text-primary-foreground/70 hover:bg-blueprint-dark hover:text-primary-foreground border border-blueprint-line/30"
                }`}
            >
              {t("projects.categories.logistics")}
            </button>
          </div>

          {/* Subtypes */}
          {activeCategory !== "all" && (
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 animate-fade-in">
              <button
                onClick={() => setActiveSubtype("all")}
                className={`px-3 py-1.5 rounded-sm font-mono text-[10px] sm:text-xs transition-all duration-300
                  ${activeSubtype === "all" 
                    ? "bg-construction/80 text-primary-foreground" 
                    : "bg-blueprint-dark/30 text-primary-foreground/60 hover:bg-blueprint-dark/50 hover:text-primary-foreground/80 border border-blueprint-line/20"
                  }`}
              >
                {t("projects.subtypes.all")}
              </button>
              
              {getSubtypes().map((subtype) => (
                <button
                  key={subtype}
                  onClick={() => setActiveSubtype(subtype)}
                  className={`px-3 py-1.5 rounded-sm font-mono text-[10px] sm:text-xs transition-all duration-300
                    ${activeSubtype === subtype 
                      ? "bg-construction/80 text-primary-foreground" 
                      : "bg-blueprint-dark/30 text-primary-foreground/60 hover:bg-blueprint-dark/50 hover:text-primary-foreground/80 border border-blueprint-line/20"
                    }`}
                >
                  {t(`projects.subtypes.${subtype}`)}
                </button>
              ))}
            </div>
          )}

          {/* Results count */}
          <div className="text-center mt-4">
            <span className="font-mono text-xs text-primary-foreground/50">
              {displayedImages.length} de {filteredImages.length} {t("projects.results")}
            </span>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
          {displayedImages.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-sm
                aspect-square
                transition-all duration-500 ease-out
                animate-fade-in`}
              style={{ animationDelay: `${index * 50}ms` }}
              onClick={() => openLightbox(index)}
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-blueprint-dark/0 group-hover:bg-blueprint-dark/60 transition-all duration-500" />

              {/* Hover content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500 p-2">
                <div className="bg-construction rounded-full p-2 sm:p-3 transform scale-50 group-hover:scale-100 group-active:scale-100 transition-transform duration-500 mb-2">
                  <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
                {image.subtype && (
                  <span className="font-mono text-[10px] sm:text-xs text-primary-foreground/90 bg-blueprint/80 px-2 py-0.5 rounded-sm text-center">
                    {t(`projects.subtypes.${image.subtype}`)}
                  </span>
                )}
              </div>

              {/* Border accent */}
              <div className="absolute inset-0 border border-transparent group-hover:border-construction/50 rounded-sm transition-all duration-500" />

              {/* Image number */}
              <div className="absolute bottom-1 left-1 sm:bottom-2 sm:left-2 font-mono text-[10px] sm:text-xs text-primary-foreground/80 bg-blueprint-dark/60 px-1 rounded">
                #{String(index + 1).padStart(2, "0")}
              </div>
            </div>
          ))}
        </div>

        {/* No results message */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <p className="font-mono text-primary-foreground/50">{t("projects.noResults")}</p>
          </div>
        )}

        {/* Load More Button */}
        {hasMore && filteredImages.length > 0 && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2.5 rounded-sm font-mono text-sm uppercase tracking-wider transition-all duration-300
                bg-blueprint hover:bg-blueprint-light text-primary-foreground shadow-lg hover:shadow-xl active:scale-95"
            >
              {t("projects.loadMore")} +5
            </button>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {currentImage && (
        <div
          className="fixed inset-0 z-50 bg-blueprint-dark/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-construction rounded-sm p-2 hover:bg-construction-light transition-colors z-20"
            aria-label="Close lightbox"
          >
            <X className="h-5 w-5 text-primary-foreground" />
          </button>

          <div
            className="relative w-full h-full flex flex-col items-center justify-center px-2 sm:px-4"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Category/Subtype info */}
            {currentImage.subtype && (
              <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10">
                <span className="font-mono text-xs sm:text-sm text-primary-foreground bg-blueprint/80 px-3 py-1 rounded-sm">
                  {t(`projects.subtypes.${currentImage.subtype}`)}
                </span>
              </div>
            )}

            {/* Main image */}
            <div className="relative w-full flex-1 flex items-center justify-center min-h-0 py-12 sm:py-16">
              <img
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-blueprint/80 hover:bg-blueprint rounded-sm p-2 sm:p-3 transition-colors z-10"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-blueprint/80 hover:bg-blueprint rounded-sm p-2 sm:p-3 transition-colors z-10"
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-6 sm:w-10 h-0.5 bg-construction" />
              <span className="font-mono text-sm text-primary-foreground">
                <span className="text-construction">{String(selectedIndex! + 1).padStart(2, "0")}</span>
                <span className="text-primary-foreground/50 mx-1">/</span>
                <span className="text-primary-foreground/70">{String(filteredImages.length).padStart(2, "0")}</span>
              </span>
              <div className="w-6 sm:w-10 h-0.5 bg-construction" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
