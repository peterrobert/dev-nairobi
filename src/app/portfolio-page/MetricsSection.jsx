import React from "react";

const MetricsSection = () => {
  return (
    <section
      id="metrics"
      className="py-24 px-6 bg-brand-navy border-y border-slate-800"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-16">
          Aggregate Impact Across All Projects
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="p-6">
            <div className="text-5xl font-bold text-brand-emerald mb-2">
              250%
            </div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Avg. Speed Improvement
            </div>
          </div>
          <div className="p-6 border-l border-slate-800">
            <div className="text-5xl font-bold text-brand-emerald mb-2">
              68%
            </div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Avg. Conversion Increase
            </div>
          </div>
          <div className="p-6 border-l border-slate-800">
            <div className="text-5xl font-bold text-brand-emerald mb-2">
              95+
            </div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Mobile Optimization Score
            </div>
          </div>
          <div className="p-6 border-l border-slate-800">
            <div className="text-5xl font-bold text-brand-emerald mb-2">
              40+
            </div>
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Projects Completed
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
