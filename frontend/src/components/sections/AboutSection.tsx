
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import ImagePlaceholder from "@/components/ui/image-placeholder";

const AboutSection = () => {
  return (
    <Section id="about" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="animate-fade-in">
          <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Pioneering Excellence in <span className="text-primary">Innovation</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            With over a decade of experience, we've transformed thousands of businesses through cutting-edge solutions, strategic insights, and unwavering commitment to excellence.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            Our team of world-class experts brings together diverse perspectives and deep industry knowledge to deliver results that exceed expectations and drive sustainable growth.
          </p>
          <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300 shadow-lg">
            <Link to="/about">Discover Our Story</Link>
          </Button>
        </div>
        <div className="relative animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <ImagePlaceholder 
            height="h-[500px]"
            text="About Us Visual"
            className="hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary rounded-full animate-pulse"></div>
          <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-yellow-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
