import { FinalCtaSection } from "@/components/FinalCtaSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SolutionSection } from "@/components/SolutionSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[34rem] bg-[radial-gradient(circle_at_top,_rgba(15,23,42,0.08),_transparent_65%)]" />

      <Header />

      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ServicesSection />
        <ProcessSection />
        <FinalCtaSection />
      </main>

      <Footer />
    </div>
  );
}
