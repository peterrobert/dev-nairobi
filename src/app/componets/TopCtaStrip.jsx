import React from "react";

const TopCtaStrip = () => {
  return (
    <section
      id="top-cta-strip"
      className="bg-primary/10 border-b border-primary/20 py-4"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-medium text-gray-300">
          Ready for a high-performance website?
        </p>
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-xs font-semibold text-white bg-primary hover:bg-primary-hover px-4 py-2 rounded-full transition-colors"
          >
            Get a Free Website Review
          </a>
          <a
            href="#"
            className="text-xs font-semibold text-[#25D366] hover:text-white transition-colors flex items-center gap-1"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i> WhatsApp Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default TopCtaStrip;
