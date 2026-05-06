import CaseStudiesSection from "./landing-page/CaseStudiesSection";
import CtaSection from "./landing-page/CtaSection";
import HeroSection from "./landing-page/HeroSection";
import ProblemSection from "./landing-page/ProblemSection";
import ProcessSection from "./landing-page/ProcessSection";
import SolutionSection from "./landing-page/SolutionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CaseStudiesSection />
      <ProcessSection />
      <CtaSection />
    </>
  );
}
