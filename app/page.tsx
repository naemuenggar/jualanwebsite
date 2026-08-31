import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustMarquee } from "@/components/TrustMarquee";
import { PainPoints } from "@/components/PainPoints";
import { PortfolioBento } from "@/components/PortfolioBento";
import { ProcessSteps } from "@/components/ProcessSteps";
import { WhyUs } from "@/components/WhyUs";
import { Pricing } from "@/components/Pricing";
import { Testimonials } from "@/components/Testimonials";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <PainPoints />
        <PortfolioBento />
        <ProcessSteps />
        <WhyUs />
        <Pricing />
        <Testimonials />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
