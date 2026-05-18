import React from "react";

const LoadMore = () => {
  return (
    <div className="flex justify-center mt-12">
      <button className="group relative px-8 py-3 rounded-full bg-brand-navy text-white text-sm font-medium shadow-md hover:shadow-xl transition-all duration-300 active:scale-95">
        <span className="flex items-center gap-2">
          Load More
          <i className="fa-solid fa-arrow-down group-hover:translate-y-0.5 transition-transform duration-300"></i>
        </span>

        {/* subtle glow effect */}
        <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>
  );
};

export default LoadMore;
