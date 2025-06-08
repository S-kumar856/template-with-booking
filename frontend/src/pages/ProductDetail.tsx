
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import ImagePlaceholder from "@/components/ui/image-placeholder";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, useParams } from "react-router-dom";
import { Star, Heart, ShoppingCart } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  const relatedProducts = [
    { id: 1, name: "Related Product 1", price: 149, rating: 4.5 },
    { id: 2, name: "Related Product 2", price: 199, rating: 4.7 },
    { id: 3, name: "Related Product 3", price: 299, rating: 4.8 },
    { id: 4, name: "Related Product 4", price: 399, rating: 4.9 },
  ];

  return (
    <Layout>
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="animate-fade-in">
            <ImagePlaceholder 
              height="h-96"
              text="Main Product Image"
              className="mb-4"
            />
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((img) => (
                <ImagePlaceholder 
                  key={img}
                  width="w-full" 
                  height="h-20"
                  text="IMG"
                  className="cursor-pointer hover:scale-105 transition-transform duration-300"
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="outline">Category Name</Badge>
              <div className="flex items-center">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                <span className="text-sm text-gray-600">4.8 (124 reviews)</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product {id} Name</h1>
            <div className="text-3xl font-bold text-primary mb-6">$199.99</div>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Detailed product description placeholder. Replace with your actual product description, 
              features, specifications, and benefits. This should be comprehensive and compelling.
            </p>

            <div className="space-y-4 mb-8">
              <h3 className="text-lg font-semibold">Key Features:</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Premium quality materials and construction</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Advanced technology integration</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>User-friendly design and interface</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span>Comprehensive warranty and support</span>
                </li>
              </ul>
            </div>

            <div className="flex space-x-4 mb-8">
              <Button size="lg" className="flex-1 hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/cart">
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300">
                <Heart className="w-5 h-5 mr-2" />
                Save for Later
              </Button>
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Product Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">SKU:</span>
                    <span className="font-medium">PRD-{id}-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Category:</span>
                    <span className="font-medium">Business Solutions</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Availability:</span>
                    <span className="text-green-600 font-medium">In Stock</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping:</span>
                    <span className="font-medium">Free shipping on orders over $100</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Return Policy:</span>
                    <span className="font-medium">30-day money-back guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <Card key={product.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-4">
                  <ImagePlaceholder 
                    height="h-48"
                    text="Product Image"
                    className="mb-4"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline" className="text-xs">Similar</Badge>
                    <div className="flex items-center">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
                      <span className="text-xs text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-primary">${product.price}</span>
                    <Button size="sm" asChild>
                      <Link to={`/product/${product.id}`}>View</Link>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ProductDetail;
