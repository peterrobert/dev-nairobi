import React from "react";
import HeroSection from "./HeroSection";
import ProfileTimelineSection from "./ProfileTimelineSection";
import TechStackSection from "./TechStackSection";
import FeaturedSection from "./FeaturedSection";
import CtaSection from "./CtaSection";

const Founder = () => {
  return (
    <div className="antialiased font-sans m-0 p-0 selection:bg-brand-emerald selection:text-white">
      <HeroSection />
      <ProfileTimelineSection />
      <TechStackSection />
      <FeaturedSection />
      <CtaSection />
    </div>
  );
};

export default Founder;
