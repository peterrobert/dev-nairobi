import React from "react";

const ProblemSection = () => {
  return (
    <section id="problem" className="py-24 bg-brand-light px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">
            Why Most Business Websites Lose Customers
          </h2>
          <p className="text-slate-600">
            In todays digital landscape, a poor website is a silent business
            killer. Here is what might be holding you back.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Problem Card 1 --> */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-red-50 text-red-500 flex items-center justify-center mb-6">
              <i className="fa-solid fa-hourglass-half text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Slow Loading Speeds
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Slow loading websites reduce conversions by up to 7% for every
              second of delay.
            </p>
          </div>
          {/* <!-- Problem Card 2 --> */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-500 flex items-center justify-center mb-6">
              <i className="fa-solid fa-mobile-screen text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Poor Mobile Experience
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Over 60% of traffic in Kenya is mobile. A broken mobile view
              drives users straight to competitors.
            </p>
          </div>
          {/* <!-- Problem Card 3 --> */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-500 flex items-center justify-center mb-6">
              <i className="fa-solid fa-eye-slash text-xl"></i>
            </div>
            <h3 className="text-lg font-semibold text-brand-navy mb-2">
              Outdated Design
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              First impressions matter. An outdated design reduces trust and
              perceived value immediately.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#services"
            className="inline-flex items-center gap-2 text-brand-navy font-medium hover:text-blue-700 transition-colors"
          >
            See how we solve this{" "}
            <i className="fa-solid fa-arrow-right text-sm"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
