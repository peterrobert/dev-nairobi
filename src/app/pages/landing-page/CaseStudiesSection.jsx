import React from "react";
import Image from "next/image";

const CaseStudiesSection = () => {
  return (
    <section
      id="work"
      className="py-24 bg-dark-surface border-y border-white/5"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
              Selected Work
            </h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-white">
              Recent Projects
            </h3>
          </div>
          <a
            href="#"
            className="text-white hover:text-primary transition-colors flex items-center gap-2 font-medium"
          >
            View all case studies{" "}
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Highlighted Project: Wisaguard --> */}
          <div className="md:col-span-2 glass-card rounded-4xl p-2 border-primary/30 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px] -mr-32 -mt-32"></div>
            <div className="flex flex-col lg:flex-row gap-8 bg-dark rounded-[28px] p-8 relative z-10 border border-white/5 h-full">
              <div className="lg:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="inline-flex px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-6 border border-primary/30">
                    Featured Project
                  </div>
                  <h4 className="font-display text-3xl font-bold text-white mb-4">
                    Wisaguard Security
                  </h4>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    A complete digital overhaul for a leading Nairobi security
                    firm. We built a high-performance corporate site focused on
                    lead generation and trust-building.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-8">
                    <span className="px-3 py-1 rounded-md bg-white/5 text-gray-300 text-xs border border-white/10">
                      Next.js
                    </span>
                    <span className="px-3 py-1 rounded-md bg-white/5 text-gray-300 text-xs border border-white/10">
                      Tailwind
                    </span>
                    <span className="px-3 py-1 rounded-md bg-white/5 text-gray-300 text-xs border border-white/10">
                      CMS
                    </span>
                  </div>
                </div>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 h-12 px-6 rounded-full bg-white text-black font-semibold text-sm w-max hover:bg-gray-200 transition-colors"
                >
                  View Case Study <i className="fa-solid fa-arrow-right"></i>
                </a>
              </div>
              <div className="lg:w-1/2 rounded-[20px] overflow-hidden border border-white/10 relative h-75 lg:h-auto">
                <Image
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e7b623155d-b714de26c4540c5e097e.png"
                  alt="modern security company website landing page mockup dark theme sleek"
                  width={1200}
                  height={800}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* <!-- Project 2 --> */}
          {/* <!-- Project 2 --> */}
          <div className="glass-card rounded-3xl p-2 border-white/10 group">
            <div className="bg-dark rounded-[20px] p-6 border border-white/5 h-full flex flex-col">
              <div className="rounded-xl overflow-hidden mb-6 h-48 border border-white/5 relative">
                <Image
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/a0aa3cccdf-c4d3a4e50ca4f114cc53.png"
                  alt="modern clean utility website mockup dark mode"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h4 className="font-display text-xl font-bold text-white">
                  Kikuyu Water Company
                </h4>
                <span className="text-xs text-gray-500">Utility</span>
              </div>

              <p className="text-gray-400 text-sm mb-6 grow">
                Clean, modern website for a water utility company focused on
                clarity, trust, and service accessibility.
              </p>

              <a
                href="https://kikuyuwater.co.ke/"
                target="_blank"
                className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center gap-2"
              >
                View Site <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
          {/* <!-- Project 3 --> */}
          <div className="glass-card rounded-3xl p-2 border-white/10 group">
            <div className="bg-dark rounded-[20px] p-6 border border-white/5 h-full flex flex-col">
              <div className="rounded-xl overflow-hidden mb-6 h-48 border border-white/5 relative">
                <Image
                  src="https://storage.googleapis.com/uxpilot-auth.appspot.com/e906bce778-99444bf4be15db523b9f.png"
                  alt="modern care home website mockup dark mode"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <i className="fa-solid fa-arrow-up-right"></i>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start mb-2">
                <h4 className="font-display text-xl font-bold text-white">
                  Peace Abounds Adult Family Home
                </h4>
                <span className="text-xs text-gray-500">Healthcare</span>
              </div>

              <p className="text-gray-400 text-sm mb-6 grow">
                Compassion-focused website designed to build trust and clearly
                communicate care services and support.
              </p>

              <a
                href="https://peace-abounds.vercel.app/"
                target="_blank"
                className="text-sm font-medium text-white hover:text-primary transition-colors flex items-center gap-2"
              >
                View Site <i className="fa-solid fa-arrow-right text-xs"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
