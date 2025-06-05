
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link, useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();

  // Mock blog data - in a real app, this would come from your CMS or API
  const blogPosts = {
    "1": {
      title: "The Future of Digital Marketing: Trends to Watch in 2024",
      author: "John Author",
      date: "2024-01-15",
      category: "Business",
      readTime: "8 min read",
      excerpt: "Discover the latest trends shaping the digital marketing landscape and how they can impact your business strategy.",
      content: `
        <p>The digital marketing landscape is constantly evolving, and 2024 promises to bring exciting new developments that will reshape how businesses connect with their audiences. In this comprehensive guide, we'll explore the key trends that are set to dominate the industry.</p>
        
        <h2>1. Artificial Intelligence and Machine Learning</h2>
        <p>AI and ML are revolutionizing how we approach digital marketing. From personalized content recommendations to predictive analytics, these technologies are enabling marketers to create more targeted and effective campaigns.</p>
        
        <h2>2. Voice Search Optimization</h2>
        <p>With the growing popularity of voice assistants, optimizing for voice search has become crucial. Businesses need to adapt their SEO strategies to accommodate natural language queries and conversational search patterns.</p>
        
        <h2>3. Interactive Content</h2>
        <p>Static content is giving way to interactive experiences. Polls, quizzes, augmented reality experiences, and interactive videos are driving higher engagement rates and providing valuable data insights.</p>
        
        <h2>4. Privacy-First Marketing</h2>
        <p>With increasing privacy regulations and the phase-out of third-party cookies, marketers must adapt to a privacy-first approach while still delivering personalized experiences.</p>
        
        <h2>Conclusion</h2>
        <p>The future of digital marketing is bright and full of opportunities. By staying ahead of these trends and adapting your strategies accordingly, you can ensure your business remains competitive in the evolving digital landscape.</p>
      `
    },
    "2": {
      title: "Building a Strong Online Presence: A Complete Guide",
      author: "Jane Writer",
      date: "2024-01-10",
      category: "Technology",
      readTime: "6 min read",
      excerpt: "Learn how to establish and maintain a powerful online presence that drives business growth.",
      content: `
        <p>In today's digital age, having a strong online presence is essential for business success. This comprehensive guide will walk you through the steps needed to build and maintain an effective digital footprint.</p>
        
        <h2>Understanding Your Digital Identity</h2>
        <p>Your online presence encompasses all the ways your business appears on the internet. This includes your website, social media profiles, online reviews, and any content associated with your brand.</p>
        
        <h2>Key Components of Online Presence</h2>
        <p>A strong online presence consists of several interconnected elements that work together to create a cohesive brand experience across all digital touchpoints.</p>
        
        <h2>Website Optimization</h2>
        <p>Your website serves as the foundation of your online presence. It should be user-friendly, mobile-responsive, and optimized for search engines to ensure maximum visibility.</p>
        
        <h2>Social Media Strategy</h2>
        <p>Develop a comprehensive social media strategy that aligns with your business goals and resonates with your target audience across relevant platforms.</p>
      `
    },
    "3": {
      title: "Customer Experience: The Key to Business Success",
      author: "Mike Blogger",
      date: "2024-01-05",
      category: "Marketing",
      readTime: "7 min read",
      excerpt: "Explore how exceptional customer experience can drive loyalty, growth, and competitive advantage.",
      content: `
        <p>Customer experience has become the ultimate differentiator in today's competitive marketplace. Businesses that prioritize customer satisfaction and create memorable experiences are the ones that thrive.</p>
        
        <h2>What is Customer Experience?</h2>
        <p>Customer experience encompasses every interaction a customer has with your brand, from initial awareness through post-purchase support and beyond.</p>
        
        <h2>The Business Impact</h2>
        <p>Companies that excel in customer experience see increased customer loyalty, higher retention rates, and improved word-of-mouth marketing.</p>
        
        <h2>Measuring Success</h2>
        <p>Track key metrics like Net Promoter Score (NPS), Customer Satisfaction (CSAT), and Customer Effort Score (CES) to gauge your performance.</p>
      `
    },
    "4": {
      title: "Design Trends That Will Shape 2024",
      author: "Sarah Content",
      date: "2024-01-01",
      category: "Design",
      readTime: "5 min read",
      excerpt: "Stay ahead of the curve with these emerging design trends that will define the visual landscape.",
      content: `
        <p>Design trends evolve rapidly, and staying current is crucial for maintaining a modern, appealing brand presence. Here are the key design trends to watch in 2024.</p>
        
        <h2>Minimalist Aesthetics</h2>
        <p>Clean, uncluttered designs that focus on essential elements continue to dominate, providing better user experiences and faster loading times.</p>
        
        <h2>Bold Typography</h2>
        <p>Typography is taking center stage with bold, expressive fonts that make strong statements and improve readability across devices.</p>
        
        <h2>Sustainable Design</h2>
        <p>Eco-conscious design practices are gaining momentum, with designers focusing on digital sustainability and environmentally responsible choices.</p>
      `
    }
  };

  const post = blogPosts[id as keyof typeof blogPosts];
  const relatedPosts = Object.entries(blogPosts)
    .filter(([postId]) => postId !== id)
    .slice(0, 3);

  if (!post) {
    return (
      <Layout>
        <div className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Blog Header */}
          <div className="mb-12 animate-fade-in">
            <div className="flex items-center text-sm text-gray-500 mb-4">
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <span className="mx-2">•</span>
              <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                {post.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">{post.title}</h1>
            <div className="flex items-center text-gray-600 mb-8">
              <div className="w-10 h-10 bg-gray-200 rounded-full mr-4"></div>
              <div>
                <p className="font-semibold">{post.author}</p>
                <div className="flex items-center text-sm">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
            <div className="w-full h-96 bg-gray-200 rounded-lg flex items-center justify-center mb-8">
              <span className="text-gray-500 text-lg">Featured Image Placeholder</span>
            </div>
          </div>

          {/* Blog Content */}
          <div className="prose prose-lg max-w-none mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div dangerouslySetInnerHTML={{ __html: post.content }} />
          </div>

          {/* Author Bio */}
          <div className="bg-gray-50 rounded-lg p-8 mb-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex-shrink-0"></div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">About {post.author}</h3>
                <p className="text-gray-600 mb-4">
                  Placeholder bio for {post.author}. This section would contain information about the author's background, 
                  expertise, and other relevant details that establish credibility.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-primary hover:underline">Website</a>
                  <a href="#" className="text-primary hover:underline">Twitter</a>
                  <a href="#" className="text-primary hover:underline">LinkedIn</a>
                </div>
              </div>
            </div>
          </div>

          {/* Related Posts */}
          <div className="animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map(([postId, relatedPost]) => (
                <Card key={postId} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <CardHeader>
                    <div className="w-full h-32 bg-gray-200 rounded-lg mb-4"></div>
                    <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                    <CardDescription>{relatedPost.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" size="sm" asChild>
                      <Link to={`/blog/${postId}`}>Read More</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Back to Blog */}
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <Button variant="outline" asChild>
              <Link to="/blog">← Back to All Posts</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
