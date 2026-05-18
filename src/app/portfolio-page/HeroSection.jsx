import React from "react";

const HeroSection = () => {
  return (
    <section
      id="portfolio-hero"
      className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden relative bg-brand-light"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl lg:text-7xl font-bold text-brand-navy leading-[1.1] tracking-tight mb-6">
          Website Transformations That Drive Real Business Results
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Explore our recent projects where we turned underperforming websites
          into high-converting digital assets for Kenyan SMEs.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
