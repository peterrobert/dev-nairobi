import React from "react";

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 relative">
      <div className="max-w-360 mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
          How it works
        </h2>
        <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-16">
          Simple, transparent process
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* <!-- Connecting line for desktop --> */}
          <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-px bg-white/10 z-0"></div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-dark border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black">
              <span className="font-display text-2xl font-bold text-white">
                01
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Discovery & Strategy
            </h4>
            <p className="text-gray-400 text-sm max-w-62.5">
              We discuss your business goals, target audience, and current
              digital bottlenecks.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-primary border border-primary-light/20 flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
              <span className="font-display text-2xl font-bold text-white">
                02
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">
              Design & Build
            </h4>
            <p className="text-gray-400 text-sm max-w-62.5">
              I craft a custom, high-performance website tailored to convert
              your specific audience.
            </p>
          </div>

          <div className="relative z-10 flex flex-col items-center">
            <div className="w-24 h-24 rounded-full bg-dark border border-white/10 flex items-center justify-center mb-6 shadow-lg shadow-black">
              <span className="font-display text-2xl font-bold text-white">
                03
              </span>
            </div>
            <h4 className="text-xl font-bold text-white mb-2">Launch & Grow</h4>
            <p className="text-gray-400 text-sm max-w-62.5">
              We launch the site, integrate analytics, and ensure everything
              runs flawlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
