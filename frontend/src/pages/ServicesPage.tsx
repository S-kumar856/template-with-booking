
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesPage = () => {
  const services = [
    {
      title: "Service Package 1",
      description: "Comprehensive service description placeholder. Replace with your actual service details.",
      price: "Starting at $299",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
    },
    {
      title: "Service Package 2",
      description: "Premium service description placeholder. Replace with your actual service details.",
      price: "Starting at $599",
      features: ["All features from Package 1", "Additional Feature 1", "Additional Feature 2", "Priority Support"]
    },
    {
      title: "Service Package 3",
      description: "Enterprise service description placeholder. Replace with your actual service details.",
      price: "Custom Pricing",
      features: ["All features from Package 2", "Enterprise Feature 1", "Enterprise Feature 2", "Dedicated Account Manager"]
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of services designed to meet your specific needs. 
              Placeholder text for services overview.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <Card 
                key={service.title} 
                className={`hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in ${
                  index === 1 ? 'border-2 border-primary transform scale-105' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {index === 1 && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-primary mb-6">{service.price}</div>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full hover:scale-105 transition-transform duration-300" asChild>
                    <Link to="/booking">Book This Service</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Why Choose Us Section */}
          <div className="bg-gray-50 rounded-lg p-12 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Our Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                "Expert Team",
                "Quality Guarantee",
                "24/7 Support"
              ].map((benefit, index) => (
                <div key={benefit} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit}</h3>
                  <p className="text-gray-600">Placeholder description for {benefit.toLowerCase()}.</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
