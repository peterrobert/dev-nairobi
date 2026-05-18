import Link from "next/link";
import Image from "next/image";
import React from "react";

const NavBar = () => {
  return (
    <nav
      id="header"
      className="fixed w-full z-50 glass-nav border-b border-slate-100 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-navy flex items-center justify-center overflow-hidden">
            <Image
              src="/leadForge.png"
              alt="Logo"
              width={50}
              height={50}
              className="object-cover"
            />
          </div>
          <span className="font-bold text-xl text-brand-navy tracking-tight">
            Leadforge Studio
          </span>
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="#"
            className="text-brand-navy font-medium text-sm border-b-2 border-brand-navy py-7"
          >
            Home
          </Link>
          <Link
            href="#services"
            className="text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
          >
            Services
          </Link>
          <Link
            href="#portfolio"
            className="text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#pricing"
            className="text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
          >
            Pricing
          </Link>
          <Link
            href="#process"
            className="text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
          >
            Process
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="hidden md:flex items-center gap-2 text-brand-emerald font-medium text-sm hover:text-emerald-600 transition-colors"
          >
            <i className="fa-brands fa-whatsapp text-lg"></i>
            <span>Chat</span>
          </Link>
          <button className="bg-brand-navy hover:bg-blue-900 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-all shadow-sm hover:shadow-md">
            Book Audit
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
