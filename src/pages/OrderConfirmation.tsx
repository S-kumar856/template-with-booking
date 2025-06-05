
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Check, Package, Truck, Clock } from "lucide-react";

const OrderConfirmation = () => {
  return (
    <Layout>
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 animate-scale-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-10 h-10 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Order Confirmed!</h1>
            <p className="text-xl text-gray-600">
              Thank you for your purchase. Your order has been successfully processed and is being prepared for shipment.
            </p>
          </div>

          <div className="space-y-6">
            <Card className="animate-fade-in border-0 shadow-lg" style={{ animationDelay: "0.1s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2 text-primary" />
                  Order Summary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Order Number:</span>
                    <span className="font-semibold">#ORD-123456</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Order Date:</span>
                    <span className="font-medium">{new Date().toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center border-b pb-2">
                    <span className="text-gray-600">Payment Method:</span>
                    <span className="font-medium">**** **** **** 1234</span>
                  </div>
                  <div className="flex justify-between items-center font-semibold text-lg pt-2">
                    <span>Total Amount:</span>
                    <span className="text-primary">$357.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-0 shadow-lg" style={{ animationDelay: "0.2s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Package className="w-5 h-5 mr-2 text-primary" />
                  Items Ordered
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">Premium Business Suite</span>
                      <span className="text-gray-500 block text-sm">Quantity: 2</span>
                    </div>
                    <span className="font-semibold">$198.00</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                    <div>
                      <span className="font-medium">Digital Marketing Toolkit</span>
                      <span className="text-gray-500 block text-sm">Quantity: 1</span>
                    </div>
                    <span className="font-semibold">$149.00</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-gray-500 pt-2 border-t">
                    <span>Shipping & Handling</span>
                    <span>$10.00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-fade-in border-0 shadow-lg" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Truck className="w-5 h-5 mr-2 text-primary" />
                  Shipping & Delivery
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Processing Time</h4>
                      <p className="text-gray-600 text-sm">Your order will be processed within 1-2 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Truck className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <h4 className="font-medium">Estimated Delivery</h4>
                      <p className="text-gray-600 text-sm">3-5 business days from processing completion</p>
                    </div>
                  </div>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm text-gray-700">
                      <strong>Next Steps:</strong><br />
                      • Confirmation email sent to your registered email address<br />
                      • Tracking information will be provided once shipped<br />
                      • You can track your order status in your dashboard
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12 space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/dashboard">Track Your Order</Link>
              </Button>
              <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
                <Link to="/products">Continue Shopping</Link>
              </Button>
            </div>
            <p className="text-gray-600">
              Questions about your order? <Link to="/contact" className="text-primary hover:underline font-medium">Contact our support team</Link>
            </p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default OrderConfirmation;
