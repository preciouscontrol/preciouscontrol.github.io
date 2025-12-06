import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

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

const Gallery = ({ images, columns = 3, title }: GalleryProps) => {
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
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">

        {/* Gallery Grid */}
        <div
          className={`grid gap-6 mb-8 md:grid-cols-${columns}`}
        >
          {images.map((image, index) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {currentImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors z-10"
            aria-label="Close lightbox"
          >
            <X className="h-6 w-6 text-black" />
          </button>

          <div 
            className="relative max-w-4xl w-full max-h-[80vh] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-full h-[70vh] object-contain rounded-lg"
            />

            {/* Navigation Buttons */}
            <button
              onClick={goToPrevious}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 md:-translate-x-16 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-6 w-6 text-black" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 md:translate-x-16 bg-white rounded-full p-2 hover:bg-gray-200 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="h-6 w-6 text-black" />
            </button>

            {/* Image Counter */}
            <div className="mt-4 text-white text-sm">
              {selectedIndex! + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
