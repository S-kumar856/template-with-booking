
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Digital Marketing: Trends to Watch in 2024",
      excerpt: "Discover the latest trends shaping the digital marketing landscape and how they can impact your business strategy.",
      date: "2024-01-15",
      author: "John Author",
      category: "Business",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "Building a Strong Online Presence: A Complete Guide", 
      excerpt: "Learn how to establish and maintain a powerful online presence that drives business growth and customer engagement.",
      date: "2024-01-10",
      author: "Jane Writer",
      category: "Technology",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Customer Experience: The Key to Business Success",
      excerpt: "Explore how exceptional customer experience can drive loyalty, growth, and competitive advantage in today's market.",
      date: "2024-01-05",
      author: "Mike Blogger",
      category: "Marketing", 
      readTime: "7 min read"
    },
    {
      id: 4,
      title: "Design Trends That Will Shape 2024",
      excerpt: "Stay ahead of the curve with these emerging design trends that will define the visual landscape this year.",
      date: "2024-01-01",
      author: "Sarah Content",
      category: "Design",
      readTime: "5 min read"
    },
    {
      id: 5,
      title: "The Power of Content Marketing",
      excerpt: "Learn how strategic content marketing can transform your brand's reach and engagement with your target audience.",
      date: "2023-12-28",
      author: "David Wilson",
      category: "Marketing",
      readTime: "6 min read"
    },
    {
      id: 6,
      title: "E-commerce Optimization Strategies",
      excerpt: "Discover proven techniques to optimize your e-commerce platform for better conversions and user experience.",
      date: "2023-12-25",
      author: "Lisa Chen",
      category: "Business",
      readTime: "9 min read"
    }
  ];

  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1);

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Blog</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest insights, tips, and news from our industry experts. 
              Discover actionable strategies to grow your business.
            </p>
          </div>

          {/* Featured Post */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-500 text-lg">Featured Image Placeholder</span>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="bg-primary text-white px-3 py-1 rounded text-xs mr-3">
                      FEATURED
                    </span>
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">
                      {featuredPost.category}
                    </span>
                    <span>{featuredPost.date}</span>
                    <span className="mx-2">•</span>
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 mb-4 hover:text-primary transition-colors duration-300">
                    {featuredPost.title}
                  </h2>
                  <p className="text-gray-600 mb-6 text-lg">{featuredPost.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {featuredPost.author}</span>
                    <Button asChild className="hover:scale-105 transition-transform duration-300">
                      <Link to={`/blog/${featuredPost.id}`}>Read Full Article</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {regularPosts.map((post, index) => (
              <Card 
                key={post.id} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 0.1}s` }}
              >
                <CardHeader>
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-gray-500">Featured Image Placeholder</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-2">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs mr-2">
                      {post.category}
                    </span>
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-primary transition-colors duration-300">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">By {post.author}</span>
                    <Button variant="outline" size="sm" className="hover:scale-105 transition-transform duration-300" asChild>
                      <Link to={`/blog/${post.id}`}>Read More</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Categories Filter */}
          <div className="mb-16 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Browse by Category</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {["All", "Business", "Technology", "Marketing", "Design"].map((category) => (
                <Button 
                  key={category} 
                  variant={category === "All" ? "default" : "outline"}
                  className="hover:scale-105 transition-transform duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Load More */}
          <div className="text-center mb-16 animate-fade-in" style={{ animationDelay: "0.9s" }}>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300">
              Load More Posts
            </Button>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-12 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
            <h2 className="text-3xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Subscribe to our newsletter to receive the latest articles, insights, and exclusive content directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-6 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <Button variant="secondary" className="px-8 hover:scale-105 transition-transform duration-300">
                Subscribe Now
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-70">
              No spam, unsubscribe at any time. We respect your privacy.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
