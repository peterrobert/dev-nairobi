import React from "react";

const HowItWorks = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-200 bg-brand-tealLight/30 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple 3-Step Process</h2>
          <p className="text-xl text-gray-600">
            No complex onboarding. Just actionable insights delivered quickly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* <!-- Connecting Line (Desktop) --> */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -z-10 transform -translate-y-1/2"></div>

          {/* <!-- Step 1 --> */}
          <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm text-center relative z-10">
            <div className="w-16 h-16 bg-brand-navy text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">
              1
            </div>
            <h3 className="text-xl font-bold mb-3">Submit Details</h3>
            <p className="text-gray-600">
              Fill out the short form below with your website URL and contact
              info.
            </p>
          </div>

          {/* <!-- Step 2 --> */}
          <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm text-center relative z-10">
            <div className="w-16 h-16 bg-brand-teal text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">
              2
            </div>
            <h3 className="text-xl font-bold mb-3">We Analyze</h3>
            <p className="text-gray-600">
              Our team manually reviews your sites performance, UX, and
              structure.
            </p>
          </div>

          {/* <!-- Step 3 --> */}
          <div className="bg-white rounded-4xl p-8 border border-gray-100 shadow-sm text-center relative z-10">
            <div className="w-16 h-16 bg-brand-terracotta text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg border-4 border-white">
              3
            </div>
            <h3 className="text-xl font-bold mb-3">Get Insights</h3>
            <p className="text-gray-600">
              Receive a clear, actionable report via WhatsApp or Email within 24
              hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
