import React from "react";

const CtaSection = () => {
  return (
    <section
      id="final-cta"
      className="py-24 bg-brand-light relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwgMCwgMCwgMC4wNSkiLz48L3N2Zz4=')] opacity-50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-brand-slate mb-6 tracking-tight">
          Ready to Improve Your Website?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Book a free website audit and discover how your website can perform
          better, load faster, and convert more customers in the Kenyan market.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-navy rounded-full hover:bg-brand-slate transition-all shadow-lg hover:-translate-y-1"
          >
            Book Free Website Audit
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#25D366] rounded-full hover:bg-[#128C7E] transition-all shadow-lg hover:-translate-y-1"
          >
            <i className="fa-brands fa-whatsapp text-xl mr-2"></i> Talk on
            WhatsApp
          </a>
        </div>

        <div className="flex items-center justify-center gap-6 text-sm text-gray-500 font-medium">
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-location-dot text-brand-emerald"></i>{" "}
            Nairobi-based support
          </span>
          <span className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-yellow-500"></i> Response within
            1 hour
          </span>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
