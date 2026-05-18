import React from "react";
import Image from "next/image";

const ProfileTimelineSection = () => {
  return (
    <section id="profile-timeline" className="py-24 bg-brand-light relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-slate mb-4">
            Meet Peter Robert Ndungu
          </h2>
          <p className="text-lg text-gray-600">
            Full stack web developer with experience designing scalable
            applications, improving performance, optimizing UX, and building
            modern frontend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* <!-- Profile Card --> */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-3xl p-8 shadow-soft border border-gray-100 sticky top-32">
              <div className="w-24 h-24 rounded-2xl overflow-hidden mb-6 border-4 border-white shadow-md mx-auto">
                <Image
                  src="/peter.png"
                  alt="Profile"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-center text-brand-slate mb-2">
                Peter Robert Ndungu
              </h3>
              <p className="text-sm text-center text-brand-emerald font-medium mb-6">
                Founder & Lead Developer
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy shrink-0 mt-0.5">
                    <i className="fa-solid fa-bolt text-sm"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Performance Optimization
                    </p>
                    <p className="text-xs text-gray-500">
                      Expert in Core Web Vitals
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy shrink-0 mt-0.5">
                    <i className="fa-solid fa-plug text-sm"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      API Integrations
                    </p>
                    <p className="text-xs text-gray-500">
                      Seamless third-party connections
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-brand-navy shrink-0 mt-0.5">
                    <i className="fa-solid fa-layer-group text-sm"></i>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      UX-Focused Frontend
                    </p>
                    <p className="text-xs text-gray-500">
                      React, Next.js, TailwindCSS
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center gap-4 pt-6 border-t border-gray-100">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-brand-navy hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-github text-lg"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#0A66C2] hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-linkedin-in text-lg"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-600 hover:bg-[#00B37E] hover:text-white transition-colors"
                >
                  <i className="fa-brands fa-hackerrank text-lg"></i>
                </a>
              </div>
            </div>
          </div>

          {/* <!-- Timeline --> */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-soft border border-gray-100">
              <h3 className="text-2xl font-bold text-brand-slate mb-10 flex items-center gap-3">
                <i className="fa-solid fa-clock-rotate-left text-brand-emerald"></i>{" "}
                Experience Timeline
              </h3>

              <div className="relative border-l-2 border-gray-100 ml-4 space-y-12">
                {/* <!-- Role 1 --> */}
                <div className="relative pl-8">
                  <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-brand-emerald border-4 border-white shadow-sm"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      Leadforge Studio
                    </h4>
                    <span className="text-sm font-medium text-brand-navy bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      2026 — Present
                    </span>
                  </div>
                  <p className="text-brand-emerald font-medium mb-4">
                    Founder & Full-Stack Developer
                  </p>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-brand-emerald mt-1 text-xs"></i>
                      <span>
                        Built fast, conversion-focused websites that help
                        businesses increase online inquiries and customer trust.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-brand-emerald mt-1 text-xs"></i>
                      <span>
                        Delivered modern full-stack web applications using
                        Next.js, React, Ruby on Rails, Tailwind, Sanity CMS with
                        clean, scalable architecture.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-brand-emerald mt-1 text-xs"></i>
                      <span>
                        Integrated real-world business systems like booking
                        flows, CMS dashboards, and M-Pesa payments for Kenyan
                        businesses.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* <!-- Role 2 --> */}
                <div className="relative pl-8">
                  <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-brand-emerald border-4 border-white shadow-sm"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      The Ultimate Collaboration (TUC)
                    </h4>
                    <span className="text-sm font-medium text-brand-navy bg-blue-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      2019 — 2025
                    </span>
                  </div>
                  <p className="text-brand-emerald font-medium mb-4">
                    Full Stack Web Developer
                  </p>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-brand-emerald mt-1 text-xs"></i>
                      <span>
                        Built reusable React component systems improving UI
                        consistency.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-brand-emerald mt-1 text-xs"></i>
                      <span>
                        Improved feature delivery speed by 30% through modular
                        architecture.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-brand-emerald mt-1 text-xs"></i>
                      <span>
                        Introduced React Query for optimized data fetching and
                        state management.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-brand-emerald mt-1 text-xs"></i>
                      <span>
                        Implemented Redis caching reducing API response times by
                        40%.
                      </span>
                    </li>
                  </ul>
                </div>

                {/* <!-- Role 3 --> */}
                <div className="relative pl-8">
                  <div className="absolute -left-2.25 top-1 w-4 h-4 rounded-full bg-gray-300 border-4 border-white shadow-sm"></div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                    <h4 className="text-xl font-bold text-gray-900">
                      Microverse
                    </h4>
                    <span className="text-sm font-medium text-gray-500 bg-gray-50 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0">
                      2020 — 2023
                    </span>
                  </div>
                  <p className="text-gray-500 font-medium mb-4">
                    Code Reviewer
                  </p>
                  <ul className="space-y-3 text-gray-600 text-sm">
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-gray-400 mt-1 text-xs"></i>
                      <span>
                        Reviewed 2,000+ projects ensuring code quality and best
                        practices.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-gray-400 mt-1 text-xs"></i>
                      <span>
                        Ranked among top 1% reviewers globally within the
                        platform.
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <i className="fa-solid fa-check text-gray-400 mt-1 text-xs"></i>
                      <span>
                        Specialized in React, Rails, and scalable frontend
                        architecture.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileTimelineSection;
