import Layout from "@/components/Layout";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import MissionSection from "@/components/sections/MissionSection";
import ServicesCarousel from "@/components/sections/ServicesCarousel";
import TestimonialsCarousel from "@/components/sections/TestimonialsCarousel";
import PricingCarousel from "@/components/sections/PricingCarousel";
import BlogCarousel from "@/components/sections/BlogCarousel";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import FAQSection from "@/components/common/faqSection";
import BookingSection from "@/components/sections/BookingSection";
import BookingForm from "./BookingForm";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-0">
        <HeroSection />
        <AboutSection />
        <CTASection />
        <TestimonialsCarousel />
        <ServicesCarousel />
        <PricingCarousel />
        <BookingSection />
        <BookingForm />
        <ContactSection />
        <FAQSection />
        <MissionSection />
        <BlogCarousel />
      </div>
    </Layout>
  );
};

export default Index;
