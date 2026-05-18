import React from "react";
import Image from "next/image";
import LoadMore from "../componets/LoadMore";

const ProjectGrid = () => {
  return (
    <section id="project-grid" className="py-24 px-6 bg-brand-light">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* <!-- Project 1 --> */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-4xl border border-slate-100 shadow-soft hover:shadow-hover transition-all">
          <div className="relative rounded-2xl overflow-hidden border border-slate-100 group">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/bf85301889-7a9abe863a87f17a581c.png"
              alt="Clean, modern e-commerce website redesign for a Kenyan boutique, showcasing a before and after split view, SaaS style"
              width={1200}
              height={400}
              className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-navy uppercase tracking-wider">
              E-commerce
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Nairobi Boutique Redesign
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Transformed a slow, outdated online store into a high-speed,
              mobile-optimized e-commerce platform that significantly boosted
              sales and customer retention.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-bolt text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  +300% Speed
                </span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-arrow-trend-up text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  +85% Conversions
                </span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-mobile-screen text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  99/100 Mobile Score
                </span>
              </div>
            </div>

            <button className="bg-brand-navy hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2">
              View Case Study <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        {/* <!-- Project 2 --> */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-4xl border border-slate-100 shadow-soft hover:shadow-hover transition-all">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              City Health Clinic Portal
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Developed a patient-centric web portal with integrated booking
              systems, clear service descriptions, and trust-building elements
              tailored for a leading Nairobi clinic.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-calendar-check text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  +120% Bookings
                </span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-magnifying-glass text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  Page 1 Local SEO
                </span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-users text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  3x More Leads
                </span>
              </div>
            </div>

            <button className="bg-brand-navy hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2">
              View Case Study <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="order-1 lg:order-2 relative rounded-2xl overflow-hidden border border-slate-100 group">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/3972558af4-768969799eb8379f2f24.png"
              alt="Professional medical clinic website design showing an easy booking interface and trust signals, SaaS style"
              width={1200}
              height={400}
              className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-navy uppercase tracking-wider">
              Clinics
            </div>
          </div>
        </div>

        {/* <!-- Project 3 --> */}
        <div className="grid lg:grid-cols-2 gap-12 items-center bg-white p-8 rounded-4xl border border-slate-100 shadow-soft hover:shadow-hover transition-all">
          <div className="relative rounded-2xl overflow-hidden border border-slate-100 group">
            <Image
              src="https://storage.googleapis.com/uxpilot-auth.appspot.com/9fa1b6d450-a6bd73cd0ba3f180781b.png"
              alt="Premium real estate property listing website design with large imagery and clear contact CTAs, SaaS style"
              width={1200}
              height={400}
              className="w-full h-100 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-brand-navy uppercase tracking-wider">
              Real Estate
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-brand-navy mb-4">
              Prime Properties Kenya
            </h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              A complete overhaul of a real estate agencys site, focusing on
              immersive property galleries, fast load times, and direct WhatsApp
              integration for immediate inquiry capture.
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-message text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  5x WhatsApp Chats
                </span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-image text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  Optimized Media
                </span>
              </div>
              <div className="flex items-center gap-2 bg-emerald-50 px-4 py-2 rounded-xl border border-emerald-100">
                <i className="fa-solid fa-clock-rotate-left text-brand-emerald"></i>
                <span className="text-sm font-semibold text-brand-navy">
                  -60% Bounce Rate
                </span>
              </div>
            </div>

            <button className="bg-brand-navy hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm flex items-center gap-2">
              View Case Study <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>
      </div>
      <LoadMore />
    </section>
  );
};

export default ProjectGrid;
