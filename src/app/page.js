import CtaSection from "./home-page/CtaSection";
import HeroSection from "./home-page/HeroSection";
import PricingSection from "./home-page/PricingSection";
import ProblemSection from "./home-page/ProblemSection";
import ServiceSection from "./home-page/ServiceSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServiceSection />
      <PricingSection />
      <CtaSection />
    </>
  );
}
