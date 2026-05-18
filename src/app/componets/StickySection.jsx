import React from "react";

const StickySection = () => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-slate-200 p-4 z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.05)] md:hidden">
      <div className="flex gap-3 max-w-md mx-auto">
        <button className="flex-1 bg-brand-navy text-white py-3 rounded-xl text-sm font-medium hover:bg-blue-900 transition-colors">
          Book Audit
        </button>
        <button className="flex-1 bg-brand-emerald text-white py-3 rounded-xl text-sm font-medium hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2">
          <i className="fa-brands fa-whatsapp"></i> Chat
        </button>
      </div>
    </div>
  );
};

export default StickySection;
