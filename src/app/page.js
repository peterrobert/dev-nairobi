import CaseStudiesSection from "./pages/landing-page/CaseStudiesSection";
import HeroSection from "./pages/landing-page/HeroSection";
import ProblemSection from "./pages/landing-page/ProblemSection";
import SolutionSection from "./pages/landing-page/SolutionSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <CaseStudiesSection />
    </>
  );
}
