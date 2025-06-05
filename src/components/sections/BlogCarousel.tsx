import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import BlogCard from "@/components/common/BlogCard";
import Autoplay from "embla-carousel-autoplay";

const BlogCarousel = () => {
  const blogPosts = [
    { id: 1, title: "10 Strategies to Scale Your Business in 2024", excerpt: "Discover proven methods to accelerate growth and expand your market reach...", date: "2024-01-15", category: "Business Growth", readTime: "5 min read" },
    { id: 2, title: "The Future of Digital Transformation", excerpt: "How emerging technologies are reshaping industries and creating new opportunities...", date: "2024-01-10", category: "Technology", readTime: "7 min read" },
    { id: 3, title: "Building a Customer-Centric Brand", excerpt: "Learn how to create authentic connections with your audience and build loyalty...", date: "2024-01-05", category: "Branding", readTime: "6 min read" },
    { id: 4, title: "Data-Driven Marketing Success", excerpt: "Leverage analytics and insights to optimize your marketing performance...", date: "2024-01-01", category: "Marketing", readTime: "8 min read" },
  ];

  return (
    <Section id="blog" background="gray">
      <SectionHeader
        title="Latest Insights"
        subtitle="Stay ahead with expert insights, industry trends, and actionable strategies."
      />

      <Carousel
        className="w-full max-w-5xl mx-auto"
        plugins={[Autoplay({ delay: 4500 })]}
        opts={{ align: "center", loop: true }}
      >
        <CarouselContent className="!ml-0">
          {blogPosts.map((post, index) => (
            <CarouselItem key={index} className="!pl-0 md:basis-1/2 lg:basis-1/3 flex flex-col items-stretch h-full px-4">
              <BlogCard {...post} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Section>
  );
};

export default BlogCarousel;
