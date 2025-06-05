
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const UpsellFunnel = () => {
  const offers = [
    { id: 1, title: "Premium Package", originalPrice: "$299", salePrice: "$199", savings: "$100" },
    { id: 2, title: "Extended Warranty", originalPrice: "$99", salePrice: "$49", savings: "$50" },
    { id: 3, title: "Exclusive Membership", originalPrice: "$199", salePrice: "$99", savings: "$100" },
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Special Limited-Time Offers!</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't miss out on these exclusive deals available only for our valued customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <Card 
                key={offer.id} 
                className="relative hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in border-2 border-primary/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Save {offer.savings}
                  </span>
                </div>
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">{offer.title}</CardTitle>
                  <CardDescription>Limited time offer - don't miss out!</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-primary">{offer.salePrice}</span>
                    <span className="ml-2 text-lg text-gray-500 line-through">{offer.originalPrice}</span>
                  </div>
                  <div className="space-y-3 mb-6">
                    <p className="text-gray-600">✓ Feature placeholder 1</p>
                    <p className="text-gray-600">✓ Feature placeholder 2</p>
                    <p className="text-gray-600">✓ Feature placeholder 3</p>
                  </div>
                  <Button className="w-full hover:scale-105 transition-transform duration-300">
                    Add to Order
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-gray-600 mb-4">Not interested in additional offers?</p>
            <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
              <Link to="/">Continue to Homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default UpsellFunnel;
