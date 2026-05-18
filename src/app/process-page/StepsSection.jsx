import React from "react";

const StepsSection = () => {
  return (
    <section id="process-steps" className="py-24 px-6 bg-white relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-3 gap-12 lg:gap-8 relative">
          {/* <!-- Step 1: Discovery --> */}
          <div className="relative z-10 flex flex-col group">
            <div className="hidden lg:block step-connector-horizontal group-last:hidden"></div>
            <div className="lg:hidden step-connector group-last:hidden"></div>

            <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg mb-6 relative z-10 shadow-md">
              1
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 flex-1">
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy mb-6">
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">
                Discovery
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                We dive deep into your business goals, target audience in Kenya,
                and current digital bottlenecks.
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-light px-3 py-1.5 rounded-lg border border-slate-100">
                <i className="fa-solid fa-bullseye text-brand-emerald text-xs"></i>
                <span className="text-xs font-semibold text-slate-700">
                  Outcome: Clear Project Roadmap
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Step 2: Strategy --> */}
          <div className="relative z-10 flex flex-col group mt-8 lg:mt-0">
            <div className="hidden lg:block step-connector-horizontal group-last:hidden"></div>
            <div className="lg:hidden step-connector group-last:hidden"></div>

            <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg mb-6 relative z-10 shadow-md">
              2
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 flex-1">
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy mb-6">
                <i className="fa-solid fa-chess-knight text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">
                Strategy
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Crafting a conversion-focused architecture and content plan
                tailored to how your customers make decisions.
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-light px-3 py-1.5 rounded-lg border border-slate-100">
                <i className="fa-solid fa-bullseye text-brand-emerald text-xs"></i>
                <span className="text-xs font-semibold text-slate-700">
                  Outcome: Wireframes & IA
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Step 3: UX Design --> */}
          <div className="relative z-10 flex flex-col group mt-8 lg:mt-0">
            <div className="hidden lg:block step-connector-horizontal group-last:hidden"></div>
            <div className="lg:hidden step-connector group-last:hidden"></div>

            <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg mb-6 relative z-10 shadow-md">
              3
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 flex-1">
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy mb-6">
                <i className="fa-solid fa-pen-nib text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">
                UX Design
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Translating strategy into high-fidelity, premium visuals that
                build trust and guide users to action.
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-light px-3 py-1.5 rounded-lg border border-slate-100">
                <i className="fa-solid fa-bullseye text-brand-emerald text-xs"></i>
                <span className="text-xs font-semibold text-slate-700">
                  Outcome: Final Design Mocks
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Step 4: Development --> */}
          <div className="relative z-10 flex flex-col group mt-8 lg:mt-12">
            <div className="hidden lg:block step-connector-horizontal group-last:hidden"></div>
            <div className="lg:hidden step-connector group-last:hidden"></div>

            <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg mb-6 relative z-10 shadow-md">
              4
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 flex-1">
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy mb-6">
                <i className="fa-solid fa-code text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">
                Development
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Building clean, fast-loading, and responsive code optimized for
                performance on all devices.
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-light px-3 py-1.5 rounded-lg border border-slate-100">
                <i className="fa-solid fa-bullseye text-brand-emerald text-xs"></i>
                <span className="text-xs font-semibold text-slate-700">
                  Outcome: Functional Staging Site
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Step 5: Optimization --> */}
          <div className="relative z-10 flex flex-col group mt-8 lg:mt-12">
            <div className="hidden lg:block step-connector-horizontal group-last:hidden"></div>
            <div className="lg:hidden step-connector group-last:hidden"></div>

            <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg mb-6 relative z-10 shadow-md">
              5
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 flex-1">
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy mb-6">
                <i className="fa-solid fa-gauge-high text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">
                Optimization
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Rigorous testing for speed, SEO basics, and WhatsApp integration
                readiness before launch.
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-light px-3 py-1.5 rounded-lg border border-slate-100">
                <i className="fa-solid fa-bullseye text-brand-emerald text-xs"></i>
                <span className="text-xs font-semibold text-slate-700">
                  Outcome: QA Passed & Live Site
                </span>
              </div>
            </div>
          </div>

          {/* <!-- Step 6: Support --> */}
          <div className="relative z-10 flex flex-col group mt-8 lg:mt-12">
            <div className="hidden lg:block step-connector-horizontal group-last:hidden"></div>
            <div className="lg:hidden step-connector group-last:hidden"></div>

            <div className="w-12 h-12 rounded-full bg-brand-navy text-white flex items-center justify-center font-bold text-lg mb-6 relative z-10 shadow-md">
              6
            </div>

            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-soft hover:shadow-hover transition-all duration-300 flex-1">
              <div className="w-12 h-12 rounded-xl bg-brand-light flex items-center justify-center text-brand-navy mb-6">
                <i className="fa-solid fa-headset text-xl"></i>
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-3">
                Support
              </h3>
              <p className="text-slate-500 text-sm mb-6 leading-relaxed">
                Ongoing maintenance, security updates, and performance
                monitoring to ensure long-term success.
              </p>
              <div className="inline-flex items-center gap-2 bg-brand-light px-3 py-1.5 rounded-lg border border-slate-100">
                <i className="fa-solid fa-bullseye text-brand-emerald text-xs"></i>
                <span className="text-xs font-semibold text-slate-700">
                  Outcome: Peace of Mind
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StepsSection;
