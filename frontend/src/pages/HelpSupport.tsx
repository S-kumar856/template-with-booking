
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HelpSupport = () => {
  const supportOptions = [
    {
      title: "Live Chat",
      description: "Get instant help from our support team",
      available: "24/7",
      action: "Start Chat"
    },
    {
      title: "Phone Support",
      description: "Speak directly with a support representative",
      available: "Mon-Fri 9AM-6PM",
      action: "Call Now"
    },
    {
      title: "Email Support",
      description: "Send us a detailed message about your issue",
      available: "Response within 24 hours",
      action: "Send Email"
    }
  ];

  const faqItems = [
    {
      question: "How do I reset my password?",
      answer: "Click on 'Forgot Password' on the login page and follow the instructions sent to your email."
    },
    {
      question: "How can I update my billing information?",
      answer: "Go to your account dashboard and select 'Billing' to update your payment methods."
    },
    {
      question: "Where can I track my order?",
      answer: "You can track your order in the 'Orders' section of your account dashboard."
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Help & Support</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're here to help! Choose the support option that works best for you.
            </p>
          </div>

          {/* Support Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {supportOptions.map((option, index) => (
              <Card 
                key={option.title} 
                className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl">{option.title}</CardTitle>
                  <CardDescription>{option.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">{option.available}</p>
                  <Button className="w-full hover:scale-105 transition-transform duration-300">
                    {option.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" />
                  <Input placeholder="Last Name" />
                </div>
                <Input placeholder="Email Address" type="email" />
                <Input placeholder="Subject" />
                <select className="w-full p-2 border border-gray-300 rounded-md">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Feature Request</option>
                  <option>Bug Report</option>
                </select>
                <Textarea placeholder="Describe your issue or question in detail..." rows={6} />
                <Button className="w-full hover:scale-105 transition-transform duration-300">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* FAQ Section */}
            <div className="space-y-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {faqItems.map((item, index) => (
                    <div key={index}>
                      <h3 className="font-semibold text-gray-900 mb-2">{item.question}</h3>
                      <p className="text-gray-600 text-sm">{item.answer}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Knowledge Base</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Browse our comprehensive knowledge base for detailed guides and tutorials.
                  </p>
                  <Button variant="outline" className="w-full">
                    Browse Knowledge Base
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>System Status</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                    <span className="text-sm font-medium">All Systems Operational</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Check our status page for real-time updates on system performance.
                  </p>
                  <Button variant="outline" size="sm" className="mt-2">
                    View Status Page
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HelpSupport;
