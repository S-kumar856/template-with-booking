
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Section from "@/components/ui/section";

const CTASection = () => {
  return (
    <Section background="white">
      <div className="text-center animate-fade-in">
        <h2 className="text-5xl font-bold mb-8 text-gray-900">Transform Your Business Today</h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-gray-600 leading-relaxed">
          Join thousands of successful businesses who have accelerated their growth with our proven solutions and expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Button 
            size="lg" 
            className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 shadow-lg bg-gradient-to-r from-primary to-primary/80"
            asChild
          >
            <Link to="/contact">Get Free Consultation</Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="text-lg px-10 py-4 hover:scale-105 transition-transform duration-300 shadow-lg"
            asChild
          >
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </Section>
  );
};

export default CTASection;
