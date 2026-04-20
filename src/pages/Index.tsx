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

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navbar />
    <HeroSection />
    {/* <HorizontalBrandSection /> */}
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

export default Index;
