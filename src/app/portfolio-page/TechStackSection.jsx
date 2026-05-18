import React from "react";

const TechStackSection = () => {
  return (
    <section
      id="portfolio-filters"
      className="py-8 px-6 border-b border-slate-100 bg-white sticky top-20 z-40"
    >
      <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
        {/* Next.js */}
        <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-black hover:text-black text-sm font-medium transition-all bg-white flex items-center gap-2">
          <i className="fa-brands fa-react text-sky-500"></i>
          Next.js
        </button>

        {/* React */}
        <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-500 text-sm font-medium transition-all bg-white flex items-center gap-2">
          <i className="fa-brands fa-react text-blue-500"></i>
          React
        </button>

        {/* Tailwind */}
        <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-cyan-500 hover:text-cyan-500 text-sm font-medium transition-all bg-white flex items-center gap-2">
          <i className="fa-solid fa-wind text-cyan-500"></i>
          Tailwind
        </button>

        {/* Ruby on Rails */}
        <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-red-500 hover:text-red-500 text-sm font-medium transition-all bg-white flex items-center gap-2">
          <i className="fa-solid fa-gem text-red-500"></i>
          Rails
        </button>

        {/* Sanity */}
        <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-pink-500 hover:text-pink-500 text-sm font-medium transition-all bg-white flex items-center gap-2">
          <i className="fa-solid fa-database text-pink-500"></i>
          Sanity
        </button>

        {/* Strapi */}
        <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-indigo-500 hover:text-indigo-500 text-sm font-medium transition-all bg-white flex items-center gap-2">
          <i className="fa-solid fa-cube text-indigo-500"></i>
          Strapi
        </button>

        {/* M-Pesa */}
        <button className="px-6 py-2 rounded-full border border-slate-200 text-slate-600 hover:border-green-600 hover:text-green-600 text-sm font-medium transition-all bg-white flex items-center gap-2">
          <i className="fa-solid fa-mobile-screen-button text-green-600"></i>
          M-Pesa
        </button>
      </div>
    </section>
  );
};

export default TechStackSection;
