import React from "react";

const AuditForm = () => {
  return (
    <section id="audit-form" className="py-24 bg-brand-navy relative">
      <div className="absolute inset-0 bg-mesh opacity-20"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col md:flex-row">
          {/* <!-- Form Info Side --> */}
          <div className="bg-brand-teal p-10 md:p-12 text-white md:w-2/5 flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Request Your Free Audit
              </h3>
              <p className="text-teal-50 mb-8 opacity-90">
                Take the first step towards a higher-converting website. Fill
                out the form, and we will get to work.
              </p>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Quick Turnaround</p>
                    <p className="text-sm text-teal-100">
                      Response within 1 business hour
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="font-semibold">Local Support</p>
                    <p className="text-sm text-teal-100">
                      Based right here in Nairobi
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <i className="fa-solid fa-handshake"></i>
                  </div>
                  <div>
                    <p className="font-semibold">No Obligation</p>
                    <p className="text-sm text-teal-100">
                      100% free, no strings attached
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <p className="text-sm text-teal-100 mb-4">
                Prefer to chat directly?
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 bg-white text-brand-navy px-6 py-3 rounded-full font-bold hover:bg-gray-50 transition-colors w-full justify-center"
              >
                <i className="fa-brands fa-whatsapp text-green-500 text-xl"></i>{" "}
                WhatsApp Us
              </a>
            </div>
          </div>

          {/* <!-- Form Fields Side --> */}
          <div className="p-10 md:p-12 md:w-3/5 bg-gray-50">
            <form action="#" method="POST" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-white"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="business"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-white"
                    placeholder="Acme Corp"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="website"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Website URL
                </label>
                <input
                  type="url"
                  id="website"
                  name="website"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-white"
                  placeholder="https://www.yourwebsite.co.ke"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="whatsapp"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  WhatsApp Number
                </label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-gray-200 bg-gray-100 text-gray-500 font-medium">
                    +254
                  </span>
                  <input
                    type="tel"
                    id="whatsapp"
                    name="whatsapp"
                    className="flex-1 px-4 py-3 rounded-r-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-white"
                    placeholder="712 345 678"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="goals"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  What would you like to improve?
                </label>
                <textarea
                  id="goals"
                  name="goals"
                  rows="3"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-teal focus:border-brand-teal outline-none transition-all bg-white resize-none"
                  placeholder="e.g., We need more leads, site is too slow..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-navy text-white py-4 rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-md transform hover:-translate-y-0.5"
              >
                Request Free Website Audit
              </button>

              <p className="text-center text-xs text-gray-500 mt-4">
                <i className="fa-solid fa-lock mr-1"></i> Your information is
                secure and will never be shared.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuditForm;
