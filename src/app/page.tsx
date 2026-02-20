import { FinalCtaSection } from "@/components/FinalCtaSection";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SiteFrame } from "@/components/SiteFrame";
import { SolutionSection } from "@/components/SolutionSection";

export default function Home() {
  return (
    <SiteFrame pathname="/">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <ServicesSection />
      <ProcessSection />
      <FinalCtaSection />
    </SiteFrame>
  );
}
