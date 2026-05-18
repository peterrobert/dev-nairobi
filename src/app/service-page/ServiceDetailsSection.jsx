import React from "react";

const ServiceDetailsSection = () => {
  return (
    <div className="bg-white">
      {/* <!-- Service 1: Website Redesign --> */}
      <section
        id="service-redesign"
        className="py-24 px-6 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-navy mb-8">
              <i className="fa-solid fa-wand-magic-sparkles text-3xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Website Redesign
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Turn outdated websites into modern conversion-focused business
              assets.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">
                  Deliverables:
                </h4>
                <ul className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Modern UI design
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i> UX
                    restructuring
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Mobile-first optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Speed improvements
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i> SEO
                    structure
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <h4 className="font-semibold text-brand-navy text-sm mb-1">
                    Timeline:
                  </h4>
                  <p className="text-sm text-slate-600">5–10 days typical</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy text-sm mb-1">
                    Best For:
                  </h4>
                  <p className="text-sm text-slate-600">
                    Restaurants, Clinics, Real Estate, NGOs, Startups
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-navy hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm">
                Book Audit for This Service
              </button>
              <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-brand-emerald"></i>{" "}
                WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-brand-light p-8 rounded-4xl border border-slate-100">
            <h3 className="text-xl font-bold text-brand-navy mb-6">
              Business Impact
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-arrow-up text-sm"></i> 45%
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Higher Conversions
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-arrow-up text-sm"></i> 3x
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  More Inquiries
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-check text-sm"></i>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Improved Trust
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-mobile-screen text-sm"></i>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Better Mobile Exp.
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-semibold text-brand-navy text-sm mb-2">
                Mini Case Snippet:
              </h4>
              <p className="text-sm text-slate-600 italic">
                NairobiWeb redesigned our clinics website. Within two weeks,
                online appointment bookings increased by 60% due to the new
                mobile-friendly layout and clear CTAs - Dr. Kamau, City Health
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service 2: Business Websites --> */}
      <section
        id="service-business"
        className="py-24 px-6 border-b border-slate-100 bg-slate-50"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 bg-white p-8 rounded-4xl border border-slate-100 shadow-sm">
            <h3 className="text-xl font-bold text-brand-navy mb-6">
              Business Impact
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-brand-light p-4 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-shield-halved text-sm"></i>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Instant Credibility
                </div>
              </div>
              <div className="bg-brand-light p-4 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-clock text-sm"></i>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  24/7 Sales Rep
                </div>
              </div>
              <div className="bg-brand-light p-4 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-chart-line text-sm"></i>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Scalable Foundation
                </div>
              </div>
              <div className="bg-brand-light p-4 rounded-xl border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-arrow-up text-sm"></i> 2x
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Lead Generation
                </div>
              </div>
            </div>

            <div className="bg-brand-light p-6 rounded-2xl border border-slate-100">
              <h4 className="font-semibold text-brand-navy text-sm mb-2">
                Mini Case Snippet:
              </h4>
              <p className="text-sm text-slate-600 italic">
                We launched our real estate agency with a custom site from
                NairobiWeb. The professional look immediately helped us close a
                major commercial lease - Sarah, Prime Properties
              </p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-brand-navy mb-8 border border-slate-100">
              <i className="fa-solid fa-building text-3xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Business Websites
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Professional corporate sites that build immediate trust and
              generate qualified leads.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">
                  Deliverables:
                </h4>
                <ul className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Custom Brand Identity
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Service Showcases
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Lead Capture Forms
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i> CRM
                    Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Professional Copywriting
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <h4 className="font-semibold text-brand-navy text-sm mb-1">
                    Timeline:
                  </h4>
                  <p className="text-sm text-slate-600">10–15 days typical</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy text-sm mb-1">
                    Best For:
                  </h4>
                  <p className="text-sm text-slate-600">
                    Consultancies, Agencies, B2B Services, Retail
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-navy hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm">
                Book Audit for This Service
              </button>
              <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-brand-emerald"></i>{" "}
                WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service 3: Landing Pages --> */}
      <section
        id="service-landing"
        className="py-24 px-6 border-b border-slate-100"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-brand-navy mb-8">
              <i className="fa-solid fa-rocket text-3xl"></i>
            </div>
            <h2 className="text-4xl font-bold text-brand-navy mb-4">
              Landing Pages
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              High-converting pages focused on a single call to action for your
              marketing campaigns.
            </p>

            <div className="space-y-6 mb-10">
              <div>
                <h4 className="font-semibold text-brand-navy mb-3">
                  Deliverables:
                </h4>
                <ul className="grid grid-cols-2 gap-3 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Persuasive Copywriting
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i> A/B
                    Testing Setup
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Fast Load Times
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Analytics Integration
                  </li>
                  <li className="flex items-center gap-2">
                    <i className="fa-solid fa-check text-brand-emerald"></i>{" "}
                    Clear CTA Hierarchy
                  </li>
                </ul>
              </div>

              <div className="flex items-center gap-8">
                <div>
                  <h4 className="font-semibold text-brand-navy text-sm mb-1">
                    Timeline:
                  </h4>
                  <p className="text-sm text-slate-600">3–5 days typical</p>
                </div>
                <div>
                  <h4 className="font-semibold text-brand-navy text-sm mb-1">
                    Best For:
                  </h4>
                  <p className="text-sm text-slate-600">
                    Product Launches, Ad Campaigns, Event Registrations
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-navy hover:bg-blue-900 text-white px-6 py-3 rounded-xl font-medium transition-all shadow-sm">
                Book Audit for This Service
              </button>
              <button className="bg-white border border-slate-200 hover:border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                <i className="fa-brands fa-whatsapp text-brand-emerald"></i>{" "}
                WhatsApp
              </button>
            </div>
          </div>

          <div className="bg-brand-light p-8 rounded-4xl border border-slate-100">
            <h3 className="text-xl font-bold text-brand-navy mb-6">
              Business Impact
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-arrow-down text-sm"></i> 30%
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Lower CPA
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-arrow-up text-sm"></i> 5x
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Higher ROAS
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-bullseye text-sm"></i>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Targeted Messaging
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 text-center">
                <div className="text-2xl font-bold text-brand-emerald mb-1">
                  <i className="fa-solid fa-bolt text-sm"></i>
                </div>
                <div className="text-xs text-slate-500 font-medium">
                  Rapid Deployment
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <h4 className="font-semibold text-brand-navy text-sm mb-2">
                Mini Case Snippet:
              </h4>
              <p className="text-sm text-slate-600 italic">
                Our Facebook ad campaign was failing until NairobiWeb built a
                dedicated landing page. Conversion rates jumped from 1.2% to
                6.8% overnight - John, TechStart Kenya
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetailsSection;
