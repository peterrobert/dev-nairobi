import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden relative"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-light -z-10 rounded-bl-[100px] opacity-50"></div>
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-brand-emerald text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-emerald animate-pulse"></span>
            Nairobis Premium Web Studio
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold text-brand-navy leading-[1.1] tracking-tight mb-6">
            Modern Websites That Help Kenyan Businesses{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-navy to-blue-600">
              Win More Customers
            </span>
          </h1>
          <p className="text-lg text-slate-600 mb-10 leading-relaxed">
            We design and rebuild fast, mobile-first websites that improve
            trust, speed, and conversions for businesses in Nairobi and across
            Kenya.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-brand-emerald hover:bg-emerald-600 text-white px-8 py-4 rounded-xl font-medium transition-all shadow-lg shadow-emerald-200 flex items-center justify-center gap-2">
              Book Free Website Audit
              <i className="fa-solid fa-arrow-right text-sm"></i>
            </button>
            <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-8 py-4 rounded-xl font-medium transition-all flex items-center justify-center gap-2 shadow-sm">
              View Services
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-mobile-screen text-brand-emerald"></i>{" "}
              Mobile-first design
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-magnifying-glass text-brand-emerald"></i>{" "}
              SEO-ready structure
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-bolt text-brand-emerald"></i> Fast
              turnaround
            </div>
            <div className="flex items-center gap-2">
              <i className="fa-brands fa-whatsapp text-brand-emerald"></i>{" "}
              WhatsApp support
            </div>
          </div>
        </div>

        <div className="relative lg:h-150 flex items-center justify-center">
          <div className="absolute inset-0 bg-linear-to-tr from-blue-50 to-emerald-50 rounded-3xl transform rotate-3 scale-105 -z-10"></div>
          <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl border border-slate-100 bg-white">
            <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-amber-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-400"></div>
            </div>
            <div className="p-1">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
                alt="Dashboard Mockup"
                width={800}
                height={600}
                className="w-full h-auto object-cover rounded-[20px]"
              />
            </div>
          </div>

          {/* <!-- Floating Badge --> */}
          <div
            className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 animate-bounce"
            style={{ animationDuration: "3s" }}
          >
            <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-brand-emerald">
              <i className="fa-solid fa-briefcase text-xl"></i>
            </div>

            <div>
              <div className="text-xs text-slate-500 font-medium">
                Completed Projects
              </div>

              <div className="text-xl font-bold text-brand-navy">
                3 Live Websites
              </div>

              <div className="text-xs text-slate-400">
                Production-ready builds
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
