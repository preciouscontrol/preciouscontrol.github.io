import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

interface BlueprintSectionProps {
  children: ReactNode;
  className?: string;
  showGrid?: boolean;
  showCorners?: boolean;
  title?: string;
  subtitle?: string;
  dark?: boolean;
}

export const BlueprintSection = ({
  children,
  className = "",
  showGrid = true,
  showCorners = true,
  title,
  subtitle,
  dark = false,
}: BlueprintSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className={`relative py-12 sm:py-16 md:py-20 overflow-hidden ${
        dark ? "bg-blueprint-dark text-primary-foreground" : "bg-background"
      } ${className}`}
    >
      {/* Blueprint Grid Background */}
      {showGrid && (
        <div className="absolute inset-0 blueprint-grid opacity-30 sm:opacity-40 pointer-events-none" />
      )}

      {/* Decorative Technical Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-10 left-10 w-16 sm:w-20 h-16 sm:h-20 border border-blueprint-light/30 rounded-full opacity-50" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-24 sm:w-32 h-24 sm:h-32 border border-construction/20 rotate-45 opacity-30" />

      {/* Measurement Lines - Hidden on mobile */}
      <div className="hidden md:block absolute left-4 top-20 bottom-20 w-px bg-blueprint-light/20" />
      <div className="hidden md:block absolute right-4 top-20 bottom-20 w-px bg-blueprint-light/20" />

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        {(title || subtitle) && (
          <div className={`text-center mb-8 sm:mb-12 md:mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}>
            {title && (
              <div className="relative inline-block mb-3 sm:mb-4">
                {/* Technical decorations around title - Hidden on mobile */}
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2">
                  <div className="w-8 h-px bg-construction" />
                  <div className="w-2 h-2 border border-construction rotate-45" />
                </div>
                <div className="absolute -right-16 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-2">
                  <div className="w-2 h-2 border border-construction rotate-45" />
                  <div className="w-8 h-px bg-construction" />
                </div>
                
                <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-wider uppercase ${
                  dark ? "text-primary-foreground" : "text-blueprint"
                }`}>
                  {title}
                </h2>
              </div>
            )}
            
            {subtitle && (
              <p className={`text-sm sm:text-base md:text-lg max-w-2xl mx-auto font-sans px-4 sm:px-0 ${
                dark ? "text-primary-foreground/80" : "text-muted-foreground"
              }`}>
                {subtitle}
              </p>
            )}
            
            {/* Decorative line under header */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mt-4 sm:mt-6">
              <div className="h-px w-10 sm:w-16 bg-blueprint-light/50" />
              <div className="w-2 h-2 sm:w-3 sm:h-3 border-2 border-construction rotate-45" />
              <div className="h-px w-10 sm:w-16 bg-blueprint-light/50" />
            </div>
          </div>
        )}

        {/* Corner Brackets - Hidden on mobile, smaller on tablet */}
        {showCorners && (
          <>
            <div className="hidden lg:block absolute top-6 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-t-2 border-construction/50" />
            <div className="hidden lg:block absolute top-6 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-t-2 border-construction/50" />
            <div className="hidden lg:block absolute bottom-4 sm:-bottom-8 left-4 sm:left-8 w-8 sm:w-12 h-8 sm:h-12 border-l-2 border-b-2 border-construction/50" />
            <div className="hidden lg:block absolute bottom-4 sm:-bottom-8 right-4 sm:right-8 w-8 sm:w-12 h-8 sm:h-12 border-r-2 border-b-2 border-construction/50" />
          </>
        )}

        {children}
      </div>
    </section>
  );
};
