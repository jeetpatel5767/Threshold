import { useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import HorizontalBrandSection from "@/components/sections/HorizontalBrandSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import TabsSection from "@/components/sections/TabsSection";
import StepsSection from "@/components/sections/StepsSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  useEffect(() => {
    document.body.classList.add("threshold-body");
    return () => document.body.classList.remove("threshold-body");
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HorizontalBrandSection />
      <FeaturesSection />
      <TabsSection />
      <StepsSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
