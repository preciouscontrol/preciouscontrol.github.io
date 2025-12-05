import React from "react";

type HeroSectionProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  sectionClassName?: string;
  containerClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const HeroSection = ({
  title,
  subtitle,
  sectionClassName = "bg-primary py-16",
  containerClassName = "container mx-auto px-4 text-center",
  titleClassName = "text-4xl md:text-5xl font-display font-bold text-white mb-4",
  subtitleClassName = "text-white/80 text-lg max-w-2xl mx-auto",
}: HeroSectionProps) => {
  return (
    <section className={sectionClassName}>
      <div className={containerClassName}>
        <h1 className={titleClassName}>{title}</h1>
        {subtitle && <p className={subtitleClassName}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default HeroSection;
