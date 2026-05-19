import React from "react";

const WhatIncludedSection = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-tealLight text-brand-teal font-semibold text-sm mb-4">
              <i className="fa-solid fa-magnifying-glass-chart"></i>
              <span>Comprehensive Analysis</span>
            </div>
            <h2 className="text-4xl font-bold mb-6">
              What the Free Audit Includes
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              We dont just run automated tools. Our human experts review your
              site to provide actionable, business-focused advice.
            </p>
            <a
              href="#audit-form"
              className="text-brand-teal font-bold text-lg hover:text-teal-600 flex items-center gap-2 group"
            >
              Claim Your Audit Now
              <i className="fa-solid fa-arrow-right transform group-hover:translate-x-1 transition-transform"></i>
            </a>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {/* <!-- Feature Item --> */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-tealLight shrink-0 flex items-center justify-center text-brand-teal text-xl">
                <i className="fa-solid fa-bolt"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Speed Analysis</h4>
                <p className="text-gray-500 text-sm">
                  We test load times and identify heavy assets slowing you down.
                </p>
              </div>
            </div>

            {/* <!-- Feature Item --> */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-brand-terracottaLight shrink-0 flex items-center justify-center text-brand-terracotta text-xl">
                <i className="fa-solid fa-crop-simple"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">UX & Usability</h4>
                <p className="text-gray-500 text-sm">
                  Review of navigation flow and how easily users find
                  information.
                </p>
              </div>
            </div>

            {/* <!-- Feature Item --> */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-50 shrink-0 flex items-center justify-center text-blue-500 text-xl">
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">SEO Structure</h4>
                <p className="text-gray-500 text-sm">
                  Check for basic on-page SEO setup and visibility issues.
                </p>
              </div>
            </div>

            {/* <!-- Feature Item --> */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-green-50 shrink-0 flex items-center justify-center text-green-500 text-xl">
                <i className="fa-solid fa-bullseye"></i>
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Conversion Check</h4>
                <p className="text-gray-500 text-sm">
                  Analysis of your CTAs and lead generation setup.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIncludedSection;
