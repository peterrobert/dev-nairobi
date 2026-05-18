import React from "react";
import HeroSection from "./HeroSection";
import ServiceGrid from "./ServiceGrid";
import ServiceDetailsSection from "./ServiceDetailsSection";
import StickySection from "../componets/StickySection";
import CtaSection from "./CtaSection";

const Services = () => {
  return (
    <>
      <HeroSection />
      <ServiceGrid />
      <ServiceDetailsSection />
      <CtaSection />
      <StickySection />
    </>
  );
};

export default Services;
