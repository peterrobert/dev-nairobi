import React from "react";
import HeroSection from "./HeroSection";
import ProblemSection from "./ProblemSection";
import WhatIncludedSection from "./WhatIncludedSection";
import HowItWorks from "./HowItWorks";
import AuditForm from "./AuditForm";
import CtaSection from "./CtaSection";

const Audit = () => {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <WhatIncludedSection />
      <HowItWorks />
      <AuditForm />
      <CtaSection />
    </>
  );
};

export default Audit;
