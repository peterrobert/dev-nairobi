import React from "react";

const CtaSection = () => {
  return (
    <section
      id="trust-cta"
      className="py-24 px-6 bg-brand-navy text-white relative overflow-hidden"
    >
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <div className="grid sm:grid-cols-3 gap-8 mb-16 border-b border-slate-700 pb-16">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 text-brand-emerald text-2xl border border-slate-700">
              <i className="fa-solid fa-tags"></i>
            </div>
            <h4 className="text-lg font-bold mb-2">No Hidden Fees</h4>
            <p className="text-sm text-slate-400">
              What you see is what you pay. Transparent pricing always.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 text-brand-emerald text-2xl border border-slate-700">
              <i className="fa-solid fa-rocket"></i>
            </div>
            <h4 className="text-lg font-bold mb-2">Fast Delivery</h4>
            <p className="text-sm text-slate-400">
              Streamlined process to get your site live in weeks, not months.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-slate-800/50 flex items-center justify-center mb-4 text-brand-emerald text-2xl border border-slate-700">
              <i className="fa-solid fa-location-dot"></i>
            </div>
            <h4 className="text-lg font-bold mb-2">Nairobi-Based Support</h4>
            <p className="text-sm text-slate-400">
              Local team understanding local business needs.
            </p>
          </div>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold mb-6">
          Ready to grow your online presence?
        </h2>
        <p className="text-slate-400 text-lg mb-10 max-w-2xl mx-auto">
          Lets discuss how we can build a website that works as hard as you do.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-brand-emerald hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-emerald-900/50 flex items-center justify-center gap-2">
            Book Free Website Audit
          </button>
          <button className="bg-transparent border border-slate-600 hover:border-slate-400 hover:bg-slate-800 text-white px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
            <i className="fa-brands fa-whatsapp text-lg text-brand-emerald"></i>{" "}
            Chat on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
