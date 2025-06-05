import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import ServiceCard from "@/components/common/ServiceCard";
import Autoplay from "embla-carousel-autoplay";
import { Settings, Zap, Palette, BarChart } from "lucide-react";

const ServicesCarousel = () => {
  const services = [
    {
      title: "Premium Consulting",
      description: "Expert business consulting services to accelerate your growth",
      price: "$299",
      image: "Service Image 1",
      icon: Settings
    },
    {
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies",
      price: "$449",
      image: "Service Image 2",
      icon: Zap
    },
    {
      title: "Brand Development",
      description: "Complete brand identity and positioning services",
      price: "$599",
      image: "Service Image 3",
      icon: Palette
    },
    {
      title: "Marketing Automation",
      description: "Advanced marketing automation and analytics",
      price: "$349",
      image: "Service Image 4",
      icon: BarChart
    },
  ];

  return (
    <Section id="services" background="white">
      <SectionHeader
        title="Our Premium Services"
        subtitle="Comprehensive solutions designed to accelerate your growth and maximize your potential."
      />

      <Carousel
        className="w-full max-w-5xl mx-auto"
        plugins={[Autoplay({ delay: 3000 })]}
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="!ml-0">
          {services.map((service, index) => (
            <CarouselItem key={index} className="!pl-0 md:basis-1/2 lg:basis-1/3 flex justify-center w-full">
              <ServiceCard {...service} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default ServicesCarousel;
