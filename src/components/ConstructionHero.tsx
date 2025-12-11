import { useState, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import hero1 from "@/assets/hero-4.jpg";
import hero2 from "@/assets/hero-5.jpg";
import hero3 from "@/assets/hero-6.jpg";

const images = [hero1, hero2, hero3];

export const ConstructionHero = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const heroHeight = window.innerHeight * 0.95;
    window.scrollTo({ top: heroHeight, behavior: "smooth" });
  };

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Images */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1500 ${
            index === currentImage ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <img
            src={image}
            alt={`Preciouscontrol Project ${index + 1}`}
            className="h-full w-full object-cover"
          />
          {/* Simple gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blueprint-dark/80 via-blueprint-dark/40 to-transparent" />
        </div>
      ))}

      {/* Main Content */}
      <div className="absolute inset-0 flex flex-col justify-center">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl">
            {/* Main Title */}
            <h1 className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-primary-foreground uppercase tracking-wide leading-tight transition-all duration-1000 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <span className="block">{t("hero.title")}</span>
              <span className="block text-base md:text-xl text-secondary mt-2">
                {t("hero.tagline")}
              </span>
            </h1>

            {/* Simple decorative line */}
            <div className={`flex items-center gap-3 mb-4 sm:mb-6 transition-all duration-700 delay-300 ${
              isLoaded ? "opacity-100" : "opacity-0"
            }`}>
              <div className="h-1 w-16 sm:w-24 bg-construction" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-construction rotate-45" />
            </div>

            {/* Subtitle */}
            <p className={`text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 text-primary-foreground/80 leading-relaxed transition-all duration-700 delay-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              {t("hero.subtitle")}
            </p>

            {/* CTA Buttons */}
            <div className={`flex flex-col sm:flex-row gap-3 sm:gap-4 transition-all duration-700 delay-700 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}>
              <Link
                to="/services"
                className="group relative overflow-hidden bg-construction text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 font-display font-semibold uppercase text-xs sm:text-sm tracking-widest rounded-sm flex items-center justify-center gap-3 hover:shadow-lg hover:shadow-construction/30 transition-all duration-300"
              >
                <span className="relative z-10">{t("hero.learnMore")}</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-construction-light translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
              </Link>
            
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - Hidden on mobile */}
      <button
        onClick={scrollToContent}
        className="sm:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-primary-foreground flex-col items-center gap-2 cursor-pointer hover:text-construction transition-colors group"
        aria-label="Scroll to content"
      >
        <ChevronDown size={28} className="animate-bounce-subtle" />
      </button>

      {/* Image Navigation */}
      <div className="absolute bottom-6 sm:bottom-8 right-4 sm:right-8 flex gap-2 sm:gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`relative w-8 sm:w-12 h-1 rounded-full overflow-hidden transition-all duration-300 ${
              index === currentImage ? "bg-construction" : "bg-primary-foreground/30 hover:bg-primary-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
