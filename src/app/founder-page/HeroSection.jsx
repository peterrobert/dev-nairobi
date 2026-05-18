import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden mesh-bg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
              <span className="text-xs font-semibold text-brand-navy tracking-wide uppercase">
                Founder-Led Web Studio
              </span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-brand-slate leading-[1.1] tracking-tight mb-6">
              Helping Kenyan Businesses Build Modern Websites That{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-navy to-brand-emerald">
                Drive Growth
              </span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
              I am Peter Robert Ndungu, a full stack web developer with 5+ years
              of experience building scalable, high-performance web applications
              and modern business websites focused on speed, trust, and
              conversions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-brand-slate rounded-full hover:bg-brand-navy transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group bg-black"
              >
                Book Free Website Audit
                <i className="fa-solid fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-brand-slate bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all shadow-sm"
              >
                <i className="fa-regular fa-folder-open mr-2"></i>
                View Portfolio
              </a>
            </div>

            <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                <i className="fa-solid fa-check-circle text-brand-emerald"></i>{" "}
                5+ Years Experience
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-100 shadow-sm">
                <i className="fa-solid fa-code text-brand-navy"></i> Full Stack
                Developer
              </div>
            </div>
          </div>

          <div className="relative lg:h-150 flex items-center justify-center">
            {/* <!-- Abstract geometric placeholder instead of portrait for generic SaaS feel --> */}
            <div className="absolute inset-0 bg-linear-to-br from-brand-light to-blue-50 rounded-4xl transform rotate-3 scale-105 -z-10"></div>
            <div className="relative w-full max-w-md aspect-4/5 rounded-4xl overflow-hidden shadow-2xl border border-white/50 bg-white p-2">
              <Image
                src="/peter.png"
                alt="Peter Robert Ndungu"
                width={200}
                height={200}
                className="w-full h-full object-contain rounded-3xl co"
              />

              {/* <!-- Floating Badges --> */}
              <div
                className="absolute top-8 -left-6 glass-card px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce"
                style={{ animationDuration: "3s" }}
              >
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <i className="fa-brands fa-react text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Expertise</p>
                  <p className="text-sm font-bold text-gray-900">
                    React + Rails
                  </p>
                </div>
              </div>

              <div
                className="absolute bottom-12 -right-6 glass-card px-4 py-3 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce"
                style={{ animationDuration: "4s", animationDelay: "1s" }}
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                  <i className="fa-solid fa-mobile-screen text-xl"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">Focus</p>
                  <p className="text-sm font-bold text-gray-900">
                    Mobile-First
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
