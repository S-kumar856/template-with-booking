import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import TestimonialCard from "@/components/common/TestimonialCard";
import Autoplay from "embla-carousel-autoplay";

const TestimonialsCarousel = () => {
  const testimonials = [
    { name: "Sarah Johnson", role: "CEO, TechStart", rating: 5, text: "Absolutely transformed our business operations. The results exceeded all expectations!", image: "Customer Image 1" },
    { name: "Michael Chen", role: "Founder, InnovateCorp", rating: 5, text: "Professional, reliable, and incredibly effective. Highly recommend to any business owner.", image: "Customer Image 2" },
    { name: "Emily Davis", role: "Director, GrowthLabs", rating: 5, text: "Outstanding service quality and customer support. They truly care about your success.", image: "Customer Image 3" },
    { name: "David Wilson", role: "Manager, ScaleUp", rating: 5, text: "Best investment we made for our company. The ROI was immediate and substantial.", image: "Customer Image 4" },
  ];

  return (
    <Section id="testimonials" background="gray">
      <SectionHeader
        title="Success Stories"
        subtitle="Hear from the industry leaders who have transformed their businesses with our solutions."
      />

      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[Autoplay({ delay: 4000 })]}
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="!ml-0">
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="!pl-0 md:basis-1/2 lg:basis-1/3 flex flex-col items-stretch h-full px-4">
              <TestimonialCard {...testimonial} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default TestimonialsCarousel;
