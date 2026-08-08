import { useSEO } from "@/hooks/useSEO";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { InfrastructureSection } from "@/components/InfrastructureSection";
import { PricingSection } from "@/components/PricingSection";
import { PaymentMethodsSection } from "@/components/PaymentMethodsSection";
import { Footer } from "@/components/Footer";
import { LogoCarousel } from "@/components/LogosCarousel";
import { PostersCarousel } from "@/components/postersCarousel";
import ReviewsCarousel from "./ReviewsCarousel";

const Index = () => {
  useSEO({ title: "HighStream — Premium IPTV Service" });
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroSection />
         <LogoCarousel />
         <PostersCarousel />
        {/* <TestimonialsSection /> */}
        <ReviewsCarousel />
        <InfrastructureSection />
        <PricingSection />
        <PaymentMethodsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
