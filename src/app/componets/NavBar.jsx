import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div
      id="header"
      className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300"
    >
      <div className="max-w-360 mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
            D
          </div>
          <span className="font-display font-semibold text-xl tracking-wide text-white">
            DevNairobi
          </span>
        </a>

        {/* <!-- Desktop Nav --> */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className="text-sm font-medium text-white hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            href="/work-page"
            className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
          >
            Work
          </Link>
          <a
            href="#"
            className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
          >
            About Us
          </a>
          <a
            href="#"
            className="text-sm font-medium text-gray-400 hover:text-primary transition-colors"
          >
            Contact
          </a>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#"
            className="h-10 px-6 rounded-full bg-white text-black font-semibold text-sm flex items-center hover:bg-gray-100 transition-colors"
          >
            Get a Free Website Review
          </a>
        </div>

        {/* <!-- Mobile Menu Button --> */}
        <button className="md:hidden text-gray-300 hover:text-white p-2">
          <i className="fa-solid fa-bars text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
