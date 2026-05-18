import React from "react";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Transparent Pricing
          </h2>
          <p className="text-slate-600">
            Simple, predictable pricing for world-className web design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
          {/* <!-- Tier 1 --> */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Starter
            </h3>
            <p className="text-sm text-slate-500 mb-6">
              Perfect for new businesses.
            </p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-brand-navy">
                KSh 25k
              </span>
            </div>
            <button className="w-full py-3 rounded-xl border border-slate-200 text-brand-navy font-medium hover:bg-slate-50 transition-colors mb-8">
              Get Started
            </button>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> 5 Page
                Website
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> Mobile
                Responsive
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> Basic
                SEO
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> 1 Month
                Of Free Support
              </li>
            </ul>
          </div>

          {/* <!-- Tier 2 (Popular) --> */}
          <div className="bg-brand-navy rounded-3xl p-8 shadow-xl relative transform md:-translate-y-4">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-emerald text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Growth</h3>
            <p className="text-sm text-blue-200 mb-6">For established SMEs.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-white">KSh 50k</span>
            </div>
            <button className="w-full py-3 rounded-xl bg-brand-emerald text-white font-medium hover:bg-emerald-600 transition-colors mb-8">
              Get Started
            </button>
            <ul className="space-y-4 text-sm text-blue-100">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> Up to
                10 Pages
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> Custom
                UI/UX Design
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                Advanced SEO Setup
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> CMS
                Integration (Sanity or Strapi - your choice)
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> 3
                Months Of Free Support
              </li>
            </ul>
          </div>

          {/* <!-- Tier 3 --> */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Premium
            </h3>
            <p className="text-sm text-slate-500 mb-6">Complex requirements.</p>
            <div className="mb-6">
              <span className="text-3xl font-bold text-brand-navy">Custom</span>
            </div>
            <button className="w-full py-3 rounded-xl border border-slate-200 text-brand-navy font-medium hover:bg-slate-50 transition-colors mb-8">
              Contact Us
            </button>
            <ul className="space-y-4 text-sm text-slate-600">
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                E-commerce Ready
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> Custom
                Web Apps
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> Mpesa
                Intergration or any other payment gateway of your choice
              </li>
              <li className="flex items-center gap-3">
                <i className="fa-solid fa-check text-brand-emerald"></i> 6
                Months Of Free Support
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
