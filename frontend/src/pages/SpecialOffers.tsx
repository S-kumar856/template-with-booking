
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const SpecialOffers = () => {
  const offers = [
    {
      title: "Limited Time: 50% Off",
      description: "Get 50% off your first purchase with code WELCOME50",
      originalPrice: "$200",
      discountPrice: "$100",
      validUntil: "2024-02-01",
      code: "WELCOME50"
    },
    {
      title: "Bundle Deal",
      description: "Buy 2 services and get the 3rd one absolutely free",
      originalPrice: "$450",
      discountPrice: "$300",
      validUntil: "2024-01-31",
      code: "BUNDLE3"
    },
    {
      title: "Early Bird Special",
      description: "Book in advance and save 30% on all appointments",
      originalPrice: "$150",
      discountPrice: "$105",
      validUntil: "2024-01-28",
      code: "EARLY30"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Special Offers & Promotions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on these exclusive deals and limited-time offers. Save big on our premium services!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {offers.map((offer, index) => (
              <Card 
                key={offer.title} 
                className="relative hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-red-200"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold animate-pulse">
                    Limited Time
                  </span>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl text-center">{offer.title}</CardTitle>
                  <CardDescription className="text-center">{offer.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-green-600">{offer.discountPrice}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">{offer.originalPrice}</span>
                  </div>
                  <div className="bg-gray-100 rounded-lg p-3 mb-4">
                    <p className="text-sm text-gray-600 mb-1">Use code:</p>
                    <p className="font-mono font-bold text-lg">{offer.code}</p>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">Valid until {offer.validUntil}</p>
                  <Button className="w-full hover:scale-105 transition-transform duration-300" asChild>
                    <Link to="/checkout">Claim Offer</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-12 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold mb-4">Never Miss a Deal!</h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Subscribe to our newsletter and be the first to know about exclusive offers, flash sales, and special promotions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" className="px-8 hover:scale-105 transition-transform duration-300">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Terms */}
          <div className="mt-12 text-center text-gray-600 animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <p className="text-sm">
              * Offers cannot be combined with other promotions. Terms and conditions apply. 
              See individual offer details for specific terms.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SpecialOffers;
