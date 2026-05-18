import React from "react";

const ComparisonTable = () => {
  return (
    <section id="comparison-table" className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy text-center mb-16">
          Compare all features
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-slate-100">
                <th className="py-6 px-4 text-slate-500 font-medium w-1/3">
                  Features
                </th>
                <th className="py-6 px-4 text-brand-navy font-bold text-lg text-center w-2/9">
                  Starter
                </th>
                <th className="py-6 px-4 text-brand-emerald font-bold text-lg text-center w-2/9 bg-brand-light/50 rounded-t-xl">
                  Growth
                </th>
                <th className="py-6 px-4 text-brand-navy font-bold text-lg text-center w-2/9">
                  Premium
                </th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-5 px-4 text-slate-700 font-medium">
                  Pages Included
                </td>
                <td className="py-5 px-4 text-slate-600 text-center">
                  Up to 5
                </td>
                <td className="py-5 px-4 text-brand-navy font-semibold text-center bg-brand-light/50">
                  Up to 10
                </td>
                <td className="py-5 px-4 text-slate-600 text-center">
                  Unlimited
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-5 px-4 text-slate-700 font-medium">
                  Mobile-First Design
                </td>
                <td className="py-5 px-4 text-center">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
                <td className="py-5 px-4 text-center bg-brand-light/50">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
                <td className="py-5 px-4 text-center">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-5 px-4 text-slate-700 font-medium">
                  WhatsApp Integration
                </td>
                <td className="py-5 px-4 text-center">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
                <td className="py-5 px-4 text-center bg-brand-light/50">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
                <td className="py-5 px-4 text-center">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-5 px-4 text-slate-700 font-medium">
                  SEO Optimization
                </td>
                <td className="py-5 px-4 text-slate-600 text-center">Basic</td>
                <td className="py-5 px-4 text-brand-navy font-semibold text-center bg-brand-light/50">
                  Advanced
                </td>
                <td className="py-5 px-4 text-slate-600 text-center">
                  Enterprise
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-5 px-4 text-slate-700 font-medium">
                  CMS (Sanity or Strapi)
                </td>
                <td className="py-5 px-4 text-center text-slate-300">
                  <i className="fa-solid fa-minus"></i>
                </td>
                <td className="py-5 px-4 text-center bg-brand-light/50">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
                <td className="py-5 px-4 text-center">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-5 px-4 text-slate-700 font-medium">
                  E-commerce Features
                </td>
                <td className="py-5 px-4 text-center text-slate-300">
                  <i className="fa-solid fa-minus"></i>
                </td>
                <td className="py-5 px-4 text-center text-slate-300 bg-brand-light/50">
                  <i className="fa-solid fa-minus"></i>
                </td>
                <td className="py-5 px-4 text-center">
                  <i className="fa-solid fa-check text-brand-emerald"></i>
                </td>
              </tr>
              <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                <td className="py-5 px-4 text-slate-700 font-medium">
                  Free Support Period
                </td>
                <td className="py-5 px-4 text-slate-600 text-center">
                  1 Month
                </td>
                <td className="py-5 px-4 text-brand-navy font-semibold text-center bg-brand-light/50 rounded-b-xl">
                  3 Month
                </td>
                <td className="py-5 px-4 text-slate-600 text-center">
                  6 Months
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
