import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-mesh min-h-[90vh] flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* <!-- Hero Content --> */}
          <div className="text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-tealLight text-brand-teal font-semibold text-sm mb-6 border border-brand-teal/20">
              <i className="fa-solid fa-stethoscope"></i>
              <span>Free Website Health Check</span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
              Get a{" "}
              <span className="text-brand-teal relative">
                Free Website Audit
                <svg
                  className="absolute w-full h-3 -bottom-1 left-0 text-brand-teal/30"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 5 Q 50 10 100 5"
                    stroke="currentColor"
                    strokeWidth={4}
                    fill="transparent"
                  />
                </svg>
              </span>{" "}
              <br />
              for Your Business
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              We will review your website and identify what is hurting your
              speed, mobile experience, trust, and customer conversions.
              Tailored for Nairobi businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a
                href="#audit-form"
                className="bg-brand-teal text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-teal-500 transition-all shadow-glow hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Start Free Audit <i className="fa-solid fa-arrow-right"></i>
              </a>
              <a
                href="#"
                className="bg-white text-gray-800 border-2 border-gray-200 px-8 py-4 rounded-full font-bold text-lg hover:border-green-500 hover:text-green-600 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <i className="fa-brands fa-whatsapp text-xl text-green-500"></i>{" "}
                Talk on WhatsApp
              </a>
            </div>

            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm font-medium text-gray-500">
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-check-circle text-brand-teal"></i>{" "}
                Mobile-first review
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-check-circle text-brand-teal"></i>{" "}
                Performance analysis
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fa-solid fa-check-circle text-brand-teal"></i> UX
                insights
              </span>
            </div>
          </div>

          {/* <!-- Hero Illustration / Dashboard Mockup --> */}
          <div className="relative lg:ml-10">
            <div className="absolute inset-0 bg-linear-to-tr from-brand-teal/20 to-brand-terracotta/20 rounded-[3rem] blur-3xl transform rotate-3"></div>

            <div className="relative bg-white rounded-[2.5rem] shadow-soft border border-gray-100 p-6 overflow-hidden">
              {/* <!-- Browser Chrome --> */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-50">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
                <div className="ml-4 bg-gray-50 rounded-full px-4 py-1.5 text-xs text-gray-400 font-mono w-full flex items-center gap-2">
                  <i className="fa-solid fa-lock text-brand-teal"></i>{" "}
                  yourwebsite.co.ke
                </div>
              </div>

              {/* <!-- Dashboard Content --> */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-brand-tealLight/50 p-4 rounded-3xl border border-brand-teal/10">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-teal mb-3 shadow-sm">
                    <i className="fa-solid fa-gauge-high text-xl"></i>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Performance Score
                  </p>
                  <p className="text-2xl font-bold text-brand-navy">92/100</p>
                </div>
                <div className="bg-brand-terracottaLight/50 p-4 rounded-3xl border border-brand-terracotta/10">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-brand-terracotta mb-3 shadow-sm">
                    <i className="fa-solid fa-mobile-screen text-xl"></i>
                  </div>
                  <p className="text-sm text-gray-500 font-medium">
                    Mobile Usability
                  </p>
                  <p className="text-2xl font-bold text-brand-navy">
                    Excellent
                  </p>
                </div>
              </div>

              {/* <!-- Friendly Illustration Area --> */}
              <div className="bg-gray-50 rounded-3xl p-6 flex flex-col items-center justify-center text-center border border-gray-100 relative overflow-hidden h-48">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Data Analysis"
                    fill
                    className="object-cover opacity-10 mix-blend-luminosity"
                  />
                </div>
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-3">
                    <i className="fa-solid fa-leaf text-3xl text-brand-teal"></i>
                  </div>
                  <h3 className="font-bold text-lg text-brand-navy">
                    Growing Your Online Presence
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Healthy websites attract more local customers.
                  </p>
                </div>
              </div>

              {/* <!-- Floating Badges --> */}
              <div className="absolute -right-6 top-1/3 bg-white p-3 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-3 transform rotate-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                  <i className="fa-solid fa-arrow-trend-up"></i>
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium">
                    Conversions
                  </p>
                  <p className="text-sm font-bold">+45%</p>
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
