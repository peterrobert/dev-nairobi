import React from "react";
const AuditForm = () => {
  return (
    <section id="audit-form" className="py-16 md:py-24 bg-brand-navy relative">
      <div className="absolute inset-0 bg-mesh opacity-20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-2xl md:rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* LEFT SIDE */}
          <div className="bg-brand-teal p-6 sm:p-8 md:p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-3 md:mb-4">
                Request Your Free Audit
              </h3>

              <p className="text-sm sm:text-base text-teal-50 mb-6 md:mb-8 opacity-90 leading-relaxed">
                Take the first step towards a higher-converting website. Fill
                out the form and we will get to work.
              </p>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-clock text-sm md:text-base"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      Quick Turnaround
                    </p>
                    <p className="text-xs md:text-sm text-teal-100">
                      Response within 1 business hour
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-location-dot text-sm md:text-base"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      Local Support
                    </p>
                    <p className="text-xs md:text-sm text-teal-100">
                      Based right here in Nairobi
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 md:gap-4">
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                    <i className="fa-solid fa-handshake text-sm md:text-base"></i>
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base">
                      No Obligation
                    </p>
                    <p className="text-xs md:text-sm text-teal-100">
                      100% free, no strings attached
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/20">
              <p className="text-xs md:text-sm text-teal-100 mb-3 md:mb-4">
                Prefer to chat directly?
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-brand-navy px-4 py-3 md:px-6 md:py-3 rounded-full font-bold text-sm md:text-base hover:bg-gray-50 transition-colors w-full justify-center"
              >
                <i className="fa-brands fa-whatsapp text-green-500 text-lg md:text-xl"></i>
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="p-6 sm:p-8 md:p-12 md:w-3/5 bg-gray-50">
            <form className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    Full Name
                  </label>
                  <input
                    className="w-full px-3 md:px-4 py-3 rounded-lg md:rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal outline-none bg-white text-sm md:text-base"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                    Business Name
                  </label>
                  <input
                    className="w-full px-3 md:px-4 py-3 rounded-lg md:rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal outline-none bg-white text-sm md:text-base"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                  Website URL
                </label>
                <input
                  className="w-full px-3 md:px-4 py-3 rounded-lg md:rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal outline-none bg-white text-sm md:text-base"
                  placeholder="https://yourwebsite.co.ke"
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                  WhatsApp Number
                </label>

                <div className="flex">
                  <span className="px-3 md:px-4 py-3 bg-gray-100 border border-r-0 rounded-l-lg text-gray-500 text-sm">
                    +254
                  </span>

                  <input
                    className="flex-1 px-3 md:px-4 py-3 border rounded-r-lg focus:ring-2 focus:ring-brand-teal outline-none bg-white text-sm md:text-base"
                    placeholder="712 345 678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs md:text-sm font-semibold text-gray-700 mb-1 md:mb-2">
                  What would you like to improve?
                </label>

                <textarea
                  rows="3"
                  className="w-full px-3 md:px-4 py-3 rounded-lg md:rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal outline-none bg-white resize-none text-sm md:text-base"
                  placeholder="We need more leads..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-navy text-white py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-gray-800 transition-all"
              >
                Request Free Website Audit
              </button>

              <p className="text-center text-[10px] md:text-xs text-gray-500">
                <i className="fa-solid fa-lock mr-1"></i>
                Your information is secure
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AuditForm;
