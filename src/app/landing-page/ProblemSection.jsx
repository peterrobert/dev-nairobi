import React from "react";

const ProblemSection = () => {
  return (
    <section
      id="problems"
      className="py-24 bg-dark-surface relative border-t border-white/5"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs font-bold text-primary tracking-widest uppercase mb-3">
            The Challenge
          </h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            You should be in the pilots seat
          </h3>
          <p className="text-gray-400 text-lg">
            Most local businesses struggle with outdated websites that repel
            customers instead of attracting them. Heres whats holding you back.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* <!-- Problem Card 1 --> */}
          <div className="glass-card rounded-3xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-white/5">
              <i className="fa-solid fa-mobile-screen text-2xl text-gray-300 group-hover:text-primary transition-colors"></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 font-display">
              Not Mobile Friendly
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              Over 80% of your Nairobi customers are browsing on their phones.
              If your site requires pinching and zooming, they are leaving.
            </p>
          </div>

          {/* <!-- Problem Card 2 --> */}
          <div className="glass-card rounded-3xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-white/5">
              <i className="fa-solid fa-gauge-high text-2xl text-gray-300 group-hover:text-primary transition-colors"></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 font-display">
              Slow Loading Speeds
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              Slow sites kill conversions. With varying internet speeds across
              the city, your site needs to load instantly to capture leads.
            </p>
          </div>

          {/* <!-- Problem Card 3 --> */}
          <div className="glass-card rounded-3xl p-8 hover:border-white/10 transition-colors group">
            <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors border border-white/5">
              <i className="fa-solid fa-magnifying-glass-chart text-2xl text-gray-300 group-hover:text-primary transition-colors"></i>
            </div>
            <h4 className="text-xl font-bold text-white mb-3 font-display">
              Invisible on Google
            </h4>
            <p className="text-gray-400 leading-relaxed text-sm">
              If you are not showing up when locals search for your services,
              you are handing business directly to your competitors.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
