import React from "react";
import HeroSection from "./HeroSection";
import TechStackSection from "./TechStackSection";
import ProjectGrid from "./ProjectGrid";
import MetricsSection from "./MetricsSection";
import CtaSection from "./CtaSection";
import StickySection from "../componets/StickySection";

const Portfolio = () => {
  return (
    <>
      <HeroSection />
      <TechStackSection />
      <ProjectGrid />
      <MetricsSection />
      <CtaSection />
      <StickySection />
    </>
  );
};

export default Portfolio;
