import React from "react";

const TechStackSection = () => {
  return (
    <section
      id="tech-stack"
      className="py-24 bg-white border-y border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-brand-slate mb-4">
            Technologies & Tools
          </h2>
          <p className="text-gray-600">
            A modern, scalable stack chosen for performance, maintainability,
            and rapid development cycles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Frontend --> */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-navy mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-desktop text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Frontend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                React
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                TypeScript
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                Javascript
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                Next.js
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                TailwindCSS
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                Redux
              </span>
            </div>
          </div>

          {/* <!-- Backend --> */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-navy mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-server text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">Backend</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-red-200 transition-colors">
                Ruby on Rails
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-blue-200 transition-colors">
                PostgreSQL
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-yellow-200 transition-colors">
                Python
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-green-200 transition-colors">
                Express.js
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-green-200 transition-colors">
                Sanity CMS
              </span>
            </div>
          </div>

          {/* <!-- Tools --> */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-hover transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-brand-navy mb-6 group-hover:scale-110 transition-transform">
              <i className="fa-solid fa-screwdriver-wrench text-xl"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Tools & Workflow
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
                Git & GitHub
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
                RSpec
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
                Jest / RTL
              </span>
              <span className="px-4 py-2 bg-white rounded-lg text-sm font-medium text-gray-700 shadow-sm border border-gray-100 hover:border-gray-300 transition-colors">
                TDD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
