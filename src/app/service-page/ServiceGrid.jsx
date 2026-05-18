import React from "react";

const ServiceGrid = () => {
  return (
    <section
      id="services-anchor-grid"
      className="py-20 px-6 bg-white border-b border-slate-100"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <a
            href="#service-redesign"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 hover:border-brand-emerald hover:shadow-soft transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-wand-magic-sparkles text-xl"></i>
            </div>
            <span className="text-sm font-semibold text-brand-navy">
              Website Redesign
            </span>
          </a>
          <a
            href="#service-business"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 hover:border-brand-emerald hover:shadow-soft transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-building text-xl"></i>
            </div>
            <span className="text-sm font-semibold text-brand-navy">
              Business Websites
            </span>
          </a>
          <a
            href="#service-landing"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 hover:border-brand-emerald hover:shadow-soft transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-rocket text-xl"></i>
            </div>
            <span className="text-sm font-semibold text-brand-navy">
              Landing Pages
            </span>
          </a>
          <a
            href="#service-mobile"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 hover:border-brand-emerald hover:shadow-soft transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-mobile-button text-xl"></i>
            </div>
            <span className="text-sm font-semibold text-brand-navy">
              Mobile Optimization
            </span>
          </a>
          <a
            href="#service-speed"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 hover:border-brand-emerald hover:shadow-soft transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-bolt text-xl"></i>
            </div>
            <span className="text-sm font-semibold text-brand-navy">
              Speed Optimization
            </span>
          </a>
          <a
            href="#service-uiux"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 hover:border-brand-emerald hover:shadow-soft transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-pen-nib text-xl"></i>
            </div>
            <span className="text-sm font-semibold text-brand-navy">
              UI/UX Improvements
            </span>
          </a>
          <a
            href="#service-seo"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 hover:border-brand-emerald hover:shadow-soft transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-magnifying-glass-chart text-xl"></i>
            </div>
            <span className="text-sm font-semibold text-brand-navy">
              SEO Basics
            </span>
          </a>
          <a
            href="#service-maintenance"
            className="flex flex-col items-center justify-center p-6 rounded-2xl border border-slate-100 hover:border-brand-emerald hover:shadow-soft transition-all text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center text-brand-navy mb-4 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-screwdriver-wrench text-xl"></i>
            </div>
            <span className="text-sm font-semibold text-brand-navy">
              Maintenance/Support
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServiceGrid;
