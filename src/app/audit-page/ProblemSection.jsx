import React from "react";

const ProblemSection = () => {
  return (
    <section id="problems" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Most Business Websites Lose Customers Without Realizing It
          </h2>
          <p className="text-xl text-gray-600">
            Are these hidden issues costing you sales in Nairobi is competitive
            market?
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* <!-- Problem Card 1 --> */}
          <div className="bg-gray-50 rounded-4xl p-8 border border-gray-100 hover:shadow-soft transition-all duration-300 group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-terracotta text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-hourglass-half"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Slow Loading Times</h3>
            <p className="text-gray-600 mb-4">
              Visitors leave if your site takes more than 3 seconds to load,
              especially on mobile networks.
            </p>
            <div className="bg-white px-4 py-2 rounded-xl text-sm font-medium text-brand-terracotta border border-brand-terracotta/20 inline-block">
              Impact: High Bounce Rate
            </div>
          </div>

          {/* <!-- Problem Card 2 --> */}
          <div className="bg-gray-50 rounded-4xl p-8 border border-gray-100 hover:shadow-soft transition-all duration-300 group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-teal text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-mobile-button"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Poor Mobile Experience</h3>
            <p className="text-gray-600 mb-4">
              Over 70% of Kenyan users browse on mobile. If it is hard to read
              or tap, they leave.
            </p>
            <div className="bg-white px-4 py-2 rounded-xl text-sm font-medium text-brand-teal border border-brand-teal/20 inline-block">
              Impact: Lost Mobile Sales
            </div>
          </div>

          {/* <!-- Problem Card 3 --> */}
          <div className="bg-gray-50 rounded-4xl p-8 border border-gray-100 hover:shadow-soft transition-all duration-300 group">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-navy text-2xl mb-6 shadow-sm group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-shield-halved"></i>
            </div>
            <h3 className="text-xl font-bold mb-3">Weak Trust Signals</h3>
            <p className="text-gray-600 mb-4">
              Missing SSL certificates, unclear contact info, or outdated design
              makes businesses look unreliable.
            </p>
            <div className="bg-white px-4 py-2 rounded-xl text-sm font-medium text-brand-navy border border-brand-navy/20 inline-block">
              Impact: Low Credibility
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
