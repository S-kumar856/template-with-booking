
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ImagePlaceholder from "@/components/ui/image-placeholder";
import { Linkedin, Twitter, Mail } from "lucide-react";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
  email?: string;
  index?: number;
}

const TeamMemberCard = ({ 
  name, 
  role, 
  bio, 
  image, 
  linkedin, 
  twitter, 
  email,
  index = 0 
}: TeamMemberCardProps) => {
  return (
    <Card 
      className="text-center hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-6">
        <div className="relative mx-auto mb-6">
          {image ? (
            <img 
              src={image} 
              alt={name}
              className="w-32 h-32 rounded-full object-cover mx-auto"
            />
          ) : (
            <ImagePlaceholder 
              width="w-32" 
              height="h-32" 
              className="rounded-full mx-auto"
              text="Photo"
            />
          )}
          <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
        <p className="text-lg text-primary font-medium">{role}</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-600 leading-relaxed">{bio}</p>
        
        {(linkedin || twitter || email) && (
          <div className="flex justify-center space-x-3 pt-4">
            {linkedin && (
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Linkedin className="w-4 h-4" />
              </Button>
            )}
            {twitter && (
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Twitter className="w-4 h-4" />
              </Button>
            )}
            {email && (
              <Button variant="outline" size="sm" className="w-10 h-10 p-0">
                <Mail className="w-4 h-4" />
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default TeamMemberCard;
