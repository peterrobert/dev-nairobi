import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark border-t border-white/5 pt-16 pb-8">
      <div className="max-w-360 mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12 border-b border-white/5 pb-12">
          <div className="text-center md:text-left">
            <a
              href="#"
              className="flex items-center gap-2 justify-center md:justify-start mb-4"
            >
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl">
                D
              </div>
              <span className="font-display font-semibold text-xl tracking-wide text-white">
                DevNairobi
              </span>
            </a>
            <p className="text-gray-500 text-sm max-w-xs">
              Premium web development for service businesses in Nairobi, Kenya.
            </p>
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all border border-white/5"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all border border-white/5"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all border border-white/5"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600">
          <p>&copy; 2026 DevNairobi. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
