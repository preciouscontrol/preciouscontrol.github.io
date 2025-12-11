import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { BlueprintSection } from "./BlueprintSection";

export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

type GalleryProps = {
  images: GalleryImage[];
  columns?: number;
  title?: string;
};

const Gallery = ({ images, title }: GalleryProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const goToPrevious = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length);
    }
  };
  const goToNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length);
    }
  };

  const currentImage = selectedIndex !== null ? images[selectedIndex] : null;

  return (
    <>
      <div className="mx-auto px-4">
        {/* Gallery Grid */}
        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 sm:gap-3 md:gap-4"
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-sm
                aspect-square
                transition-all duration-700 ease-out
                "opacity-100 translate-y-0`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
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
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-all duration-500">
                <div className="bg-construction rounded-full p-2 sm:p-3 transform scale-50 group-hover:scale-100 group-active:scale-100 transition-transform duration-500">
                  <ZoomIn className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
                </div>
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
                <span className="text-primary-foreground/70">{String(images.length).padStart(2, "0")}</span>
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
