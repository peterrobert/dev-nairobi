import React from "react";

function HeroSection() {
  return (
    <section
      id="page-header"
      className="py-16 md:py-24 relative overflow-hidden border-b border-white/5 bg-dark-surface"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary/10 rounded-full blur-[100px] -mr-40 -mt-40 pointer-events-none"></div>
      </div>
      <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10">
        <h1 className="font-display text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight glow-text">
          Selected Work
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl leading-relaxed">
          A collection of conversion-focused websites engineered for service
          businesses in Nairobi. Explore my recent projects and see how I help
          businesses dominate their local market.
        </p>
      </div>
    </section>
  );
}

export default HeroSection;
