import React from "react";

const CtaSection = () => {
  return (
    <section id="final-cta" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto bg-brand-navy rounded-4xl p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/cubes.png')] opacity-10"></div>
        <div className="relative z-10">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
            Not sure what you need?
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-2xl mx-auto">
            Get a free, no-obligation audit of your current digital presence. We
            will tell you exactly whats working and what needs improvement.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-brand-emerald hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg flex items-center justify-center gap-2">
              Book Free Website Audit
            </button>
            <button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
              <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp Contact
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
