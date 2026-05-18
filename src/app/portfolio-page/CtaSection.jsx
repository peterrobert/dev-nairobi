import React from "react";

const CtaSection = () => {
  return (
    <section id="final-cta" className="py-24 px-6 bg-brand-light">
      <div className="max-w-5xl mx-auto bg-white rounded-4xl border border-slate-100 shadow-soft p-12 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-brand-navy mb-6">
            Ready for your own success story?
          </h2>
          <p className="text-slate-600 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation audit of your current website. We will
            show you exactly how we can improve your speed, design, and
            conversions.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-emerald hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
              Book Free Website Audit
            </button>
            <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
              <i className="fa-brands fa-whatsapp text-lg text-brand-emerald"></i>{" "}
              WhatsApp Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
