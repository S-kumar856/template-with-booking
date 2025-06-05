
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
      </section>

      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                  <Send className="w-6 h-6 text-primary" />
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName" className="text-base font-medium">First Name *</Label>
                    <Input id="firstName" placeholder="John" className="mt-2 h-12" />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-base font-medium">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" className="mt-2 h-12" />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email" className="text-base font-medium">Email Address *</Label>
                  <Input id="email" type="email" placeholder="john@example.com" className="mt-2 h-12" />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-base font-medium">Phone Number</Label>
                  <Input id="phone" placeholder="(555) 123-4567" className="mt-2 h-12" />
                </div>
                <div>
                  <Label htmlFor="subject" className="text-base font-medium">Subject *</Label>
                  <Input id="subject" placeholder="How can we help you?" className="mt-2 h-12" />
                </div>
                <div>
                  <Label htmlFor="message" className="text-base font-medium">Message *</Label>
                  <Textarea 
                    id="message" 
                    rows={6} 
                    placeholder="Tell us more about your inquiry..." 
                    className="mt-2 resize-none"
                  />
                </div>
                <Button 
                  size="lg" 
                  className="w-full md:w-auto px-8 py-3 text-lg hover:scale-105 transition-transform duration-300"
                >
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Contact Details */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600 leading-relaxed">
                      123 Business Street<br />
                      Suite 100<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">(555) 123-4567</p>
                    <p className="text-gray-600">(555) 987-6543</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@yourbrand.com</p>
                    <p className="text-gray-600">support@yourbrand.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Contact */}
            <Card className="shadow-lg border-0 bg-gradient-to-br from-primary to-primary/90 text-white">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Need Immediate Assistance?</h3>
                <p className="mb-4 opacity-90">Call us directly for urgent inquiries</p>
                <Button variant="secondary" size="lg" className="w-full">
                  Call Now: (555) 123-4567
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Map Section */}
      <Section background="gray">
        <SectionHeader 
          title="Visit Our Office"
          subtitle="We're located in the heart of the business district. Drop by for a coffee and chat!"
        />
        <Card className="shadow-lg border-0 overflow-hidden">
          <div className="w-full h-96 bg-gray-200 flex items-center justify-center relative">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Interactive Map</h3>
              <p className="text-gray-600">Google Maps integration would go here</p>
              <p className="text-sm text-gray-500 mt-2">123 Business Street, New York, NY 10001</p>
            </div>
          </div>
        </Card>
      </Section>
    </Layout>
  );
};

export default ContactUs;
