import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import HorizontalBrandSection from "@/components/HorizontalBrandSection";
import FeaturesSection from "@/components/FeaturesSection";
import TabsSection from "@/components/TabsSection";
import StepsSection from "@/components/StepsSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

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
