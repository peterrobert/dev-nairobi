import React from "react";

const PricePackages = () => {
  return (
    <section
      id="pricing-packages"
      className="py-12 px-6 bg-brand-light relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* <!-- Starter Package --> */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Starter</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">
              Perfect for new businesses needing a professional online presence.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-brand-navy">
                KES 25,000
              </span>
            </div>
            <button className="w-full bg-white border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white py-3 rounded-xl font-semibold transition-colors mb-8">
              Get Started
            </button>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                Includes:
              </p>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  Mobile-first design
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  Modern UI (up to 5 pages)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  Performance optimization
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  WhatsApp integration
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">SEO basics</span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  1 month free support
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Growth Package (Featured) --> */}
          <div className="bg-brand-navy rounded-3xl p-8 border border-brand-navy shadow-hover relative transform lg:-translate-y-4">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-emerald text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              Most Popular
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Growth</h3>
            <p className="text-slate-300 text-sm mb-6 h-10">
              For established SMEs looking to drive serious leads and sales.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-white">KES 50,000</span>
            </div>
            <button className="w-full bg-brand-emerald hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-colors mb-8 shadow-lg shadow-emerald-900/50">
              Get Started
            </button>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-white uppercase tracking-wide mb-4">
                Everything in Starter, plus:
              </p>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-200 text-sm">
                  Up to 10 custom pages
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-200 text-sm">
                  Advanced Conversion Rate Optimization
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-200 text-sm">
                  CMS Integration (Sanity CMS or Strapi CMS)
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-200 text-sm">
                  Advanced SEO setup
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-200 text-sm">
                  3 Month free support
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Premium Package --> */}
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300">
            <h3 className="text-2xl font-bold text-brand-navy mb-2">Premium</h3>
            <p className="text-slate-500 text-sm mb-6 h-10">
              Full-scale digital transformation for ambitious brands.
            </p>
            <div className="mb-8">
              <span className="text-4xl font-bold text-brand-navy">Custom</span>
            </div>
            <button className="w-full bg-white border-2 border-brand-navy text-brand-navy hover:bg-brand-navy hover:text-white py-3 rounded-xl font-semibold transition-colors mb-8">
              Contact Us
            </button>
            <div className="space-y-4">
              <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide mb-4">
                Everything in Growth, plus:
              </p>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  E-commerce functionality
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  Custom Web App features
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  Priority Support SLA
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  Dedicated Account Manager
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  Mpesa Intergration or any other payment gateway of your choice
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  Custom integrations
                </span>
              </div>
              <div className="flex items-start gap-3">
                <i className="fa-solid fa-check text-brand-emerald mt-1"></i>
                <span className="text-slate-600 text-sm">
                  6 Month free support
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricePackages;
