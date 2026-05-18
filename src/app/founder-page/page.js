import React from "react";
import HeroSection from "./HeroSection";
import ProfileTimelineSection from "./ProfileTimelineSection";

const Founder = () => {
  return (
    <div className="antialiased font-sans m-0 p-0 selection:bg-brand-emerald selection:text-white">
      <HeroSection />
      <ProfileTimelineSection />
    </div>
  );
};

export default Founder;
