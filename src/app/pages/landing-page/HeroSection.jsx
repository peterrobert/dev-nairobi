import React from 'react'

const HeroSection = () => {
  return (
     <section id="hero" className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-hero-glow">
            {/* <!-- Background Elements --> */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-primary/20 rounded-full blur-[120px] opacity-50"></div>
                {/* <!-- Stars/Particles simulation --> */}
                <div className="absolute top-[20%] left-[10%] w-1 h-1 bg-white rounded-full opacity-50"></div>
                <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-white rounded-full opacity-30"></div>
                <div className="absolute bottom-[20%] left-[20%] w-2 h-2 bg-primary rounded-full opacity-40 blur-[1px]"></div>
            </div>

            <div className="max-w-360 mx-auto px-6 lg:px-12 relative z-10 w-full flex flex-col items-center text-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm mb-8">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    <span className="text-xs font-medium text-gray-300 tracking-wider uppercase">Available for new projects in Nairobi</span>
                </div>

                <h1 className="font-display text-5xl md:text-7xl lg:text-[84px] leading-[1.1] font-bold text-white mb-6 tracking-tight max-w-4xl glow-text">
                    Websites that work on <br className="hidden md:block" />
                    <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-500">your terms</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
                    I build high-performance, conversion-focused websites for local businesses in Nairobi. Get more leads, look professional, and take control of your online presence.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4 mb-16 w-full sm:w-auto">
                    <a href="#" className="w-full sm:w-auto h-14 px-8 rounded-full bg-white text-black font-semibold text-base flex items-center justify-center hover:bg-gray-100 transition-colors">
                        Get a Free Website Review
                    </a>
                    <a href="#work" className="w-full sm:w-auto h-14 px-8 rounded-full border border-white/20 bg-white/5 text-white font-semibold text-base flex items-center justify-center hover:bg-white/10 transition-colors backdrop-blur-sm">
                        View My Work
                    </a>
                </div>

                {/* <!-- Trust Line --> */}
                <div className="flex flex-col items-center gap-4">
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-widest">Trusted by growing businesses in Kenya</p>
                    <div className="flex items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        <i className="fa-brands fa-aws text-3xl hover:text-[#FF9900]"></i>
                        <i className="fa-brands fa-stripe text-3xl hover:text-[#008CDD]"></i>
                        <i className="fa-brands fa-google text-2xl hover:text-[#4285F4]"></i>
                        <i className="fa-brands fa-figma text-3xl hover:text-[#F24E1E]"></i>
                    </div>
                </div>
            </div>
            
            {/* <!-- Decorative Planet/Sphere --> */}
            <div className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-150 h-150 rounded-full bg-linear-to-b from-primary/40 to-transparent blur-3xl opacity-30 pointer-events-none"></div>
        </section>
  )
}

export default HeroSection