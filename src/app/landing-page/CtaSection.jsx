import React from "react";

const CtaSection = () => {
  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5 border-y border-white/5"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-250 h-75 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-200 mx-auto px-6 relative z-10 text-center">
        <h2 className="font-display text-5xl md:text-6xl font-bold text-white mb-6">
          Ready to upgrade your web presence?
        </h2>
        <p className="text-xl text-gray-400 mb-10">
          Stop losing clients to competitors with better websites. Lets build
          something that actually grows your business.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-black font-semibold text-base flex items-center justify-center hover:bg-gray-100 transition-colors shadow-lg shadow-white/10"
          >
            Get a Free Website Review
          </a>
          <a
            href="#"
            className="w-full sm:w-auto h-14 px-8 rounded-full bg-[#25D366] text-white font-semibold text-base flex items-center justify-center hover:bg-[#20BD5A] transition-colors shadow-lg shadow-[#25D366]/20"
          >
            <i className="fa-brands fa-whatsapp text-xl mr-2"></i> Chat on
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
