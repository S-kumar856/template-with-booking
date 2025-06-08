import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Star, ShoppingCart, Heart } from "lucide-react";

const ProductPage = () => {
  const products = [
    {
      id: 1,
      name: "Premium Business Suite",
      price: 299,
      originalPrice: 399,
      rating: 4.8,
      reviews: 124,
      category: "Business Tools",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      features: ["Advanced Analytics", "Team Collaboration", "24/7 Support", "Custom Branding"]
    },
    {
      id: 2,
      name: "Digital Marketing Toolkit",
      price: 199,
      originalPrice: 249,
      rating: 4.9,
      reviews: 89,
      category: "Marketing",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=300&fit=crop",
      features: ["SEO Tools", "Social Media Manager", "Email Campaigns", "Analytics Dashboard"]
    },
    {
      id: 3,
      name: "Web Development Package",
      price: 499,
      originalPrice: 599,
      rating: 4.7,
      reviews: 62,
      category: "Web Development",
      image: "https://images.unsplash.com/photo-1519389950473-47a04ca0ecd8?w=400&h=300&fit=crop",
      features: ["Custom Design", "Responsive Layout", "E-commerce Ready", "CMS Integration"]
    },
    {
      id: 4,
      name: "Financial Planning Software",
      price: 349,
      originalPrice: 449,
      rating: 4.6,
      reviews: 45,
      category: "Finance",
      image: "https://images.unsplash.com/photo-1507838153414-b4b79886a8a7?w=400&h=300&fit=crop",
      features: ["Budgeting Tools", "Investment Tracking", "Tax Planning", "Reporting"]
    }
  ];

  const productBundles = [
    {
      id: 1,
      name: "Starter Bundle",
      description: "Perfect for small businesses getting started",
      price: "$199",
      originalPrice: "$299",
      products: ["Basic CRM", "Email Marketing", "Analytics"],
      savings: "Save $100"
    },
    {
      id: 2,
      name: "Growth Bundle",
      description: "Ideal for growing businesses looking to scale",
      price: "$399",
      originalPrice: "$499",
      products: ["Advanced CRM", "Marketing Automation", "Business Intelligence"],
      savings: "Save $100"
    },
    {
      id: 3,
      name: "Enterprise Bundle",
      description: "Comprehensive suite for large organizations",
      price: "$799",
      originalPrice: "$999",
      products: ["Enterprise CRM", "AI Marketing", "Predictive Analytics"],
      savings: "Save $200"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="gradient" className="py-20 md:py-24 lg:py-28">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Our <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Products</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of products designed to transform your business and drive growth.
          </p>
        </div>
      </Section>

      {/* Products Grid */}
      <Section background="white">
        <SectionHeader 
          title="Featured Products"
          subtitle="Explore our best-selling products trusted by thousands of businesses worldwide."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={product.id} 
              className="group h-full bg-white shadow-lg border-0 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-white">
                    {product.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Button size="sm" variant="outline" className="bg-white/90 border-0 hover:bg-white">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              <CardHeader className="pb-3">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                    <span className="text-sm text-gray-600">{product.rating} ({product.reviews})</span>
                  </div>
                  {product.originalPrice > product.price && (
                    <Badge variant="destructive" className="text-xs">
                      Save ${product.originalPrice - product.price}
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  {product.name}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <ul className="space-y-1 mb-4 text-sm text-gray-600">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    {product.originalPrice > product.price && (
                      <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
                    )}
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-300" asChild>
                    <Link to={`/product/${product.id}`}>
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      View Details
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Product Bundles */}
      <Section background="gray">
        <SectionHeader 
          title="Product Bundles"
          subtitle="Save more with our carefully curated product bundles designed for maximum value."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productBundles.map((bundle, index) => (
            <Card 
              key={bundle.id}
              className="h-full bg-white shadow-lg border-0 transition-all duration-300 hover:shadow-2xl hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge className="bg-green-100 text-green-800">
                    {bundle.savings}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">{bundle.name}</CardTitle>
                <p className="text-gray-600">{bundle.description}</p>
              </CardHeader>

              <CardContent>
                <div className="mb-4">
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-3xl font-bold text-primary">{bundle.price}</span>
                    <span className="text-lg text-gray-500 line-through">{bundle.originalPrice}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Includes:</h4>
                  <ul className="space-y-2">
                    {bundle.products.map((product, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        {product}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300 hover:scale-105">
                  Get Bundle
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="primary" className="text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join thousands of satisfied customers who have already revolutionized their workflow with our products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 transition-all duration-300 hover:scale-105">
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary transition-all duration-300 hover:scale-105">
              <Link to="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ProductPage;
