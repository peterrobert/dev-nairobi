import Image from "next/image";
import React from "react";

const SolutionSection = () => {
  return (
    <section id="solution" className="py-24 relative">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
              The Solution
            </h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Websites engineered for local dominance
            </h3>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              I dont just build pretty pages. I build digital assets designed to
              convert visitors into paying customers for your Nairobi business.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-primary text-xs"></i>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">
                    Conversion Optimized Design
                  </h5>
                  <p className="text-gray-500 text-sm">
                    Strategic layouts that guide visitors naturally toward
                    contacting you.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-primary text-xs"></i>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">
                    Local SEO Integration
                  </h5>
                  <p className="text-gray-500 text-sm">
                    Built-in optimization to help you rank higher in Nairobi
                    local searches.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                  <i className="fa-solid fa-check text-primary text-xs"></i>
                </div>
                <div>
                  <h5 className="text-white font-semibold mb-1">
                    WhatsApp Integration
                  </h5>
                  <p className="text-gray-500 text-sm">
                    Direct connection to the most popular communication channel
                    in Kenya.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="relative glass-card rounded-4xl p-2 overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
              <div className="absolute inset-0 bg-linear-to-br from-primary/10 to-transparent"></div>
              <div className="relative bg-dark rounded-[28px] overflow-hidden border border-white/5 h-100 flex items-center justify-center">
                <Image
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/d2bd80f40c-ab3007143dcc0114ddc0.png"
                  alt="modern clean dashboard interface showing website analytics and performance metrics dark mode"
                  fill
                  className="object-cover opacity-80"
                  sizes="100vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
