
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ImagePlaceholder from "@/components/ui/image-placeholder";

interface BlogCardProps {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  index?: number;
}

const BlogCard = ({ id, title, excerpt, date, category, readTime, index = 0 }: BlogCardProps) => {
  return (
    <Card 
      className="hover:shadow-2xl transition-all duration-500 hover:scale-105 border-0 shadow-lg h-full animate-fade-in"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <CardHeader className="pb-4">
        <ImagePlaceholder 
          height="h-48"
          text="Blog Image"
          className="mb-6"
        />
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs mr-3">
            {category}
          </span>
          <span>{readTime}</span>
        </div>
        <CardTitle className="text-xl leading-tight">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">{excerpt}</CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">{date}</span>
          <Button variant="outline" size="sm" asChild className="hover:scale-110 transition-transform duration-300">
            <Link to={`/blog/${id}`}>Read More</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
