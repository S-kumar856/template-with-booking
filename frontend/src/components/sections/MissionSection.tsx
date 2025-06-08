
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/ui/section";
import ImagePlaceholder from "@/components/ui/image-placeholder";

const MissionSection = () => {
  return (
    <Section id="mission" background="gray">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative order-2 lg:order-1 animate-fade-in">
          <ImagePlaceholder 
            height="h-[500px]"
            text="Mission Visual"
            gradient="from-primary/10 to-primary/20"
            className="hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute -top-8 -left-8 w-20 h-20 bg-yellow-400 rounded-full animate-bounce"></div>
        </div>
        <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
            Empowering Your <span className="text-primary">Future</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Our mission is to democratize success by providing world-class tools, strategies, and support that enable every business to reach its full potential in the digital age.
          </p>
          <p className="text-lg text-gray-600 mb-10 leading-relaxed">
            We believe in the power of innovation, the strength of collaboration, and the importance of sustainable growth that benefits not just businesses, but entire communities.
          </p>
          <Button variant="outline" size="lg" asChild className="hover:scale-105 transition-transform duration-300 shadow-lg">
            <Link to="/about">Our Vision</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default MissionSection;
