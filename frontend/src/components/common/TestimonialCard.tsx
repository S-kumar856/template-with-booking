import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  rating: number;
  text: string;
  image: string;
  index?: number;
}

const TestimonialCard = ({ name, role, rating, text, image, index = 0 }: TestimonialCardProps) => {
  return (
    <Card
      className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-gray-200 shadow-lg h-full min-h-[400px] w-full bg-white animate-fade-in flex flex-col justify-between"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-6">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/30 rounded-full flex items-center justify-center">
            <span className="text-primary text-sm font-medium">IMG</span>
          </div>
          <div>
            <CardTitle className="text-xl">{name}</CardTitle>
            <CardDescription className="text-base">{role}</CardDescription>
          </div>
        </div>
        <div className="flex space-x-1 mb-4">
          {[...Array(rating)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 italic text-lg leading-relaxed">"{text}"</p>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
