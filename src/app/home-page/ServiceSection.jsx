import React from "react";

const ServiceSection = () => {
  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
              Services Designed for Growth
            </h2>
            <p className="text-slate-600">
              Comprehensive web solutions tailored for Kenyan businesses aiming
              to dominate their local market.
            </p>
          </div>
          <button className="bg-brand-navy text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-blue-900 transition-colors whitespace-nowrap">
            View All Services
          </button>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* <!-- Service 1 --> */}
          <div className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-emerald hover:shadow-soft transition-all cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-brand-navy mb-6 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-wand-magic-sparkles"></i>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Website Redesign
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Transform your outdated site into a modern conversion machine.
            </p>
            <div className="flex items-center text-brand-emerald text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              Learn more{" "}
              <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
            </div>
          </div>
          {/* <!-- Service 2 --> */}
          <div className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-emerald hover:shadow-soft transition-all cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-brand-navy mb-6 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-building"></i>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Business Websites
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Professional corporate sites that build immediate trust.
            </p>
            <div className="flex items-center text-brand-emerald text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              Learn more{" "}
              <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
            </div>
          </div>
          {/* <!-- Service 3 --> */}
          <div className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-emerald hover:shadow-soft transition-all cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-brand-navy mb-6 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Landing Pages
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              High-converting pages focused on a single call to action.
            </p>
            <div className="flex items-center text-brand-emerald text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              Learn more{" "}
              <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
            </div>
          </div>
          {/* <!-- Service 4 --> */}
          <div className="group bg-white p-6 rounded-3xl border border-slate-200 hover:border-brand-emerald hover:shadow-soft transition-all cursor-pointer relative overflow-hidden">
            <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center text-brand-navy mb-6 group-hover:bg-emerald-50 group-hover:text-brand-emerald transition-colors">
              <i className="fa-solid fa-mobile-button"></i>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Mobile Optimization
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Flawless experiences across all devices and screen sizes.
            </p>
            <div className="flex items-center text-brand-emerald text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0">
              Learn more{" "}
              <i className="fa-solid fa-arrow-right ml-1 text-xs"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
