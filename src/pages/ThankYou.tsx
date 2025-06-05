
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check } from "lucide-react";

const ThankYou = () => {
  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-scale-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Thank You!</h1>
            <p className="text-xl text-gray-600 mb-8">
              Your order has been successfully placed. We'll send you a confirmation email shortly.
            </p>
          </div>

          <Card className="text-left animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <CardHeader>
              <CardTitle>Order Details</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Order Number:</span>
                  <span className="font-semibold">#ORD-001234</span>
                </div>
                <div className="flex justify-between">
                  <span>Order Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total Amount:</span>
                  <span className="font-semibold">$357</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery:</span>
                  <span>3-5 business days</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-8 space-y-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-gray-600">
              Want to explore more products or learn about exclusive offers?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/upsell">Special Offers</Link>
              </Button>
              <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ThankYou;
