import { useState, useEffect } from "react";
import { ChevronDown, FileText, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import hero1 from "@/assets/hero-4.jpg";
import hero2 from "@/assets/hero-5.jpg";
import hero3 from "@/assets/hero-6.jpg";

const images = [hero1, hero2, hero3];

export const Hero = () => {
  const { t } = useTranslation();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    const heroHeight = window.innerHeight * 0.9;
    window.scrollTo({
      top: heroHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImage ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image}
            alt={`Preciouscontrol Project ${index + 1}`}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
        </div>
      ))}

      <div className="absolute inset-0 flex flex-col items-start justify-center lg:px-4">
        <div className="container mx-auto">
          <div className="max-w-2xl">
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white uppercase tracking-wide animate-fade-in-up">
              {t("hero.title")}
            </h1>
            <p className="text-xl md:text-2xl italic mb-2 text-white/90 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              {t("hero.tagline")}
            </p>
            <div className="w-20 h-1 bg-secondary mb-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }} />
            <p className="text-base md:text-lg max-w-xl mb-8 text-white/85 animate-fade-in-up leading-relaxed" style={{ animationDelay: "0.2s" }}>
              {t("hero.subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <Link
                to="/quote"
                className="bg-secondary text-white px-8 py-3 font-semibold hover:bg-brand-orange-light transition-all uppercase text-sm tracking-wide rounded flex items-center justify-center gap-2"
              >
                <FileText className="h-5 w-5" />
                {t("hero.requestQuote")}
              </Link>
              <Link
                to="/services"
                className="bg-white/20 backdrop-blur-sm border border-white/40 text-white px-8 py-3 font-semibold hover:bg-white hover:text-primary transition-all uppercase text-sm tracking-wide rounded flex items-center justify-center gap-2"
              >
                {t("hero.learnMore")}
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 ml-[-22px] text-white animate-bounce cursor-pointer hover:scale-110 transition-transform"
        aria-label="Scroll to content"
      >
        <ChevronDown size={40} />
      </button>

      <div className="absolute bottom-8 right-8 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentImage
                ? "bg-secondary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
