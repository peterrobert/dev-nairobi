import React from "react";

const FeaturedSection = () => {
  return (
    <section
      id="featured-project"
      className="py-24 bg-black text-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-6">
              <i className="fa-solid fa-star text-brand-emerald text-xs"></i>
              <span className="text-xs font-semibold tracking-wide uppercase text-gray-200">
                Featured Project
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-6">BookFy</h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Modern appointment booking frontend application built with React,
              TypeScript, and TailwindCSS designed for scalable backend
              integration and responsive user experience.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-10">
              <div className="flex flex-col gap-1">
                <i className="fa-solid fa-mobile-screen text-brand-emerald text-xl mb-2"></i>
                <span className="font-semibold">Responsive Design</span>
                <span className="text-sm text-gray-400">
                  Mobile-first approach
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <i className="fa-solid fa-cubes text-brand-emerald text-xl mb-2"></i>
                <span className="font-semibold">Scalable Architecture</span>
                <span className="text-sm text-gray-400">Component-driven</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-brand-slate bg-brand-emerald rounded-full hover:bg-white transition-colors"
              >
                <i className="fa-solid fa-arrow-up-right-from-square mr-2"></i>{" "}
                Live Preview
              </a>
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transition-colors"
              >
                <i className="fa-brands fa-github mr-2"></i> View Code
              </a>
            </div>
          </div>

          <div className="relative">
            {/* <!-- Browser Mockup --> */}
            <div className="rounded-xl overflow-hidden border border-white/10 bg-[#1e1e1e] shadow-2xl relative z-10 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              <div className="h-8 bg-[#2d2d2d] flex items-center px-4 gap-2 border-b border-white/10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="h-75 w-full bg-linear-to-br from-gray-800 to-gray-900 p-6 flex items-center justify-center">
                <span className="text-gray-500 font-mono text-sm">
                  &lt;AppDashboard /&gt;
                </span>
              </div>
            </div>

            {/* <!-- Code Accent --> */}
            <div className="absolute -bottom-8 -right-8 bg-[#0d1117] border border-white/10 rounded-lg p-4 shadow-xl z-20 w-64 transform rotate-3">
              <pre className="text-sm">
                <code>
                  <span className="text-pink-400">return</span> ({"\n  "}
                  &lt;<span className="text-green-400">Provider</span> store=
                  {"{store}"}&gt;
                  {"\n    "}
                  &lt;<span className="text-green-400">AppRouter</span> /&gt;
                  {"\n  "}
                  &lt;/<span className="text-green-400">Provider</span>&gt;
                  {"\n"})
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
