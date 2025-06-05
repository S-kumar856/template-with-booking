
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  index?: number;
  buttonText?: string;
  buttonLink?: string;
}

const PricingCard = ({ 
  name, 
  price, 
  period, 
  description, 
  features, 
  popular = false, 
  index = 0,
  buttonText = "Get Started",
  buttonLink = "/pricing"
}: PricingCardProps) => {
  return (
    <Card 
      className={`relative h-full transition-all duration-300 hover:shadow-2xl hover:scale-105 border-0 shadow-lg animate-fade-in ${
        popular 
          ? "ring-2 ring-primary bg-gradient-to-br from-primary/5 to-white" 
          : "hover:shadow-xl bg-white"
      }`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-1 shadow-lg">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-6 pt-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        
        <div className="flex items-baseline justify-center mb-4">
          <span className="text-4xl md:text-5xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-1">/{period}</span>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 pb-8">
        <ul className="space-y-4 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start">
              <Check className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button 
          className={`w-full py-6 text-base font-semibold transition-all duration-300 hover:scale-105 ${
            popular 
              ? "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl" 
              : "bg-white border-2 border-primary text-primary hover:bg-primary hover:text-white"
          }`}
          asChild
        >
          <Link to={buttonLink}>{buttonText}</Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default PricingCard;
