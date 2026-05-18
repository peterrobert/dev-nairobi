"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();

  const isActive = (path) => pathname === path;
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
            href="/"
            className={
              isActive("/")
                ? "text-brand-navy font-medium text-sm border-b-2 border-brand-navy py-7"
                : "text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
            }
          >
            Home
          </Link>

          <Link
            href="/service-page"
            className={
              isActive("/service-page")
                ? "text-brand-navy font-medium text-sm border-b-2 border-brand-navy py-7"
                : "text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
            }
          >
            Services
          </Link>

          <Link
            href="/portfolio-page"
            className={
              isActive("/portfolio-page")
                ? "text-brand-navy font-medium text-sm border-b-2 border-brand-navy py-7"
                : "text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
            }
          >
            Portfolio
          </Link>

          <Link
            href="/founder-page"
            className={
              isActive("/founder-page")
                ? "text-brand-navy font-medium text-sm border-b-2 border-brand-navy py-7"
                : "text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
            }
          >
            Founder
          </Link>

          <Link
            href="/price-page"
            className={
              isActive("/price-page")
                ? "text-brand-navy font-medium text-sm border-b-2 border-brand-navy py-7"
                : "text-slate-500 hover:text-brand-navy font-medium text-sm transition-colors"
            }
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
