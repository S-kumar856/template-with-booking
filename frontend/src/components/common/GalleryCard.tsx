
import { Card, CardContent } from "@/components/ui/card";
import ImagePlaceholder from "@/components/ui/image-placeholder";

interface GalleryCardProps {
  title: string;
  description: string;
  image?: string;
  index?: number;
}

const GalleryCard = ({ title, description, image, index = 0 }: GalleryCardProps) => {
  return (
    <Card 
      className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg animate-fade-in overflow-hidden group" 
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <ImagePlaceholder height="h-64" text="Gallery Image" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <CardContent className="p-6">
        <h3 className="font-bold text-gray-900 mb-2 text-lg">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default GalleryCard;
