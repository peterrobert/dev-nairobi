import React from "react";

const HeroSection = () => {
  return (
    <section
      id="process-hero"
      className="pt-40 pb-24 px-6 bg-brand-light relative text-center"
    >
      <div className="max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-emerald"></span>
          <span className="text-sm font-medium text-slate-600">
            Our Methodology
          </span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-bold text-brand-navy leading-[1.1] tracking-tight mb-6">
          How We Work
        </h1>
        <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          A proven, strategic approach designed specifically for Kenyan SMEs to
          turn visitors into loyal customers. No guesswork, just results.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
