import React from "react";

const HeroSection = () => {
  return (
    <section
      id="services-hero"
      className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden relative bg-brand-light"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white -z-10 rounded-bl-[100px] opacity-50"></div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-brand-emerald text-sm font-medium mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
          Our Expertise
        </div>
        <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight mb-6">
          Web Design Services That Help Kenyan Businesses Grow Online
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Conversion-focused websites designed for speed, trust, and customer
          acquisition. We build digital assets that work for you 24/7.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-brand-emerald hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
            Book Free Website Audit
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </button>
          <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
            <i className="fa-brands fa-whatsapp text-lg text-brand-emerald"></i>
            WhatsApp Chat
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
