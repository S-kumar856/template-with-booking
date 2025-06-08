import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PricingCard from "@/components/common/PricingCard";
import Autoplay from "embla-carousel-autoplay";

const PricingCarousel = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: "$29",
      period: "/month",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Email support",
        "Basic analytics"
      ],
      popular: false,
      icon: "🚀"
    },
    {
      name: "Professional",
      description: "Ideal for growing enterprise businesses",
      price: "$99",
      period: "/month",
      features: [
        "Up to 25 team members",
        "100GB storage",

        "Advanced analytics",
        "Custom integrations"
      ],
      popular: false,
      icon: "⭐"
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: "$299",
      period: "/month",
      features: [
        "Unlimited team members",
        "1TB storage",
        "24/7 dedicated support",

        "Custom solutions",

      ],
      popular: false,
      icon: "🏢"
    }
  ];

  return (
    <Section id="pricing" background="gray">
      <SectionHeader
        title="Choose Your Plan"
        subtitle="Select the perfect plan that fits your needs and budget. Upgrade or downgrade at any time."
      />

      <div className="block md:hidden">
        <Carousel
          className="w-full max-w-sm mx-auto"
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent className="!ml-0">
            {pricingPlans.map((plan, index) => (
              <CarouselItem key={index} className="!pl-0 px-4 flex flex-col items-center w-full max-w-sm">
                <PricingCard {...plan} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      <div className="hidden md:flex justify-center">
        <Carousel
          className="w-full max-w-5xl mx-auto"
          plugins={[Autoplay({ delay: 4000 })]}
          opts={{ align: "center", loop: true }}
        >
          <CarouselContent className="!ml-0">
            {pricingPlans.map((plan, index) => (
              <CarouselItem
                key={index}
                className="!pl-0 md:basis-1/2 lg:basis-1/3 flex justify-center w-full"
              >
                <PricingCard {...plan} index={index} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </Section>
  );
};

export default PricingCarousel;
