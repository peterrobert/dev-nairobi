import React from "react";

const CtaSection = () => {
  return (
    <section
      id="cta"
      className="py-24 bg-brand-tealLight/30 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-mesh opacity-50"></div>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-brand-navy">
          Ready to Improve Your Website?
        </h2>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Get expert insights into what’s limiting your website performance and
          customer conversions. Stop guessing, start growing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#audit-form"
            className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:-translate-y-1"
          >
            Request Free Audit
          </a>
          <a
            href="#"
            className="bg-white text-gray-800 px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-50 transition-all shadow-sm border border-gray-200 flex items-center justify-center gap-2"
          >
            <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>{" "}
            WhatsApp Chat
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
