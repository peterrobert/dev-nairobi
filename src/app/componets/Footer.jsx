import React from "react";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-slate-900 pt-20 pb-10 px-6 border-t border-slate-800"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-lg bg-brand-emerald flex items-center justify-center text-white font-bold text-xl">
              N
            </div>
            <span className="font-bold text-xl text-white tracking-tight">
              NairobiWeb
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Premium web design and development for ambitious Kenyan businesses.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a
                href="#"
                className="hover:text-brand-emerald transition-colors"
              >
                Web Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-emerald transition-colors"
              >
                Landing Pages
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-emerald transition-colors"
              >
                SEO Optimization
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-3 text-sm text-slate-400">
            <li>
              <a
                href="#"
                className="hover:text-brand-emerald transition-colors"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-emerald transition-colors"
              >
                Process
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-brand-emerald transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
        <p>&copy; 2024 NairobiWeb Agency. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
