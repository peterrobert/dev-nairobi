import React from "react";

const TrustSection = () => {
  return (
    <section id="trust-section" className="py-24 px-6 bg-brand-gray/20">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Why this process works for Kenyan businesses
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We understand the local market nuances and build systems that
            resonate with your specific audience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-brand-emerald text-2xl shrink-0">
              <i className="fa-solid fa-mobile-screen"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-brand-navy mb-2">
                Mobile-First Reality
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Over 80% of internet traffic in Kenya is mobile. Our designs are
                built for smartphones first, ensuring fast load times on local
                networks.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-brand-emerald text-2xl shrink-0">
              <i className="fa-brands fa-whatsapp"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-brand-navy mb-2">
                WhatsApp Driven
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                We integrate frictionless WhatsApp funnels directly into the UX,
                matching how Kenyans prefer to communicate and buy.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-brand-emerald text-2xl shrink-0">
              <i className="fa-solid fa-bolt"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-brand-navy mb-2">
                Speed & Trust
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Premium visuals combined with lightweight code build instant
                credibility while respecting user data costs.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft flex items-start gap-6">
            <div className="w-14 h-14 rounded-full bg-brand-light flex items-center justify-center text-brand-emerald text-2xl shrink-0">
              <i className="fa-solid fa-chart-line"></i>
            </div>
            <div>
              <h4 className="text-xl font-bold text-brand-navy mb-2">
                Data-Backed Decisions
              </h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                No guessing. We set up clear analytics so you can see exactly
                how visitors interact and where they drop off.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
