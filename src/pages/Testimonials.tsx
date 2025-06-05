
import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Business Owner",
      rating: 5,
      text: "Placeholder testimonial text. Replace with actual customer feedback and experience with your services.",
      image: "placeholder"
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      rating: 5,
      text: "Another placeholder testimonial. Include specific benefits and results the customer experienced.",
      image: "placeholder"
    },
    {
      name: "Emily Davis",
      role: "Freelancer",
      rating: 5,
      text: "Third placeholder testimonial. Highlight the value and satisfaction your customers receive.",
      image: "placeholder"
    },
    {
      name: "David Wilson",
      role: "Startup Founder",
      rating: 5,
      text: "Fourth placeholder testimonial. Showcase the transformation or improvement your service provided.",
      image: "placeholder"
    },
    {
      name: "Lisa Anderson",
      role: "Project Manager",
      rating: 5,
      text: "Fifth placeholder testimonial. Emphasize the professional quality and reliability of your service.",
      image: "placeholder"
    },
    {
      name: "Robert Taylor",
      role: "Consultant",
      rating: 5,
      text: "Sixth placeholder testimonial. Include measurable results and positive outcomes when possible.",
      image: "placeholder"
    }
  ];

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Here's what our satisfied customers have to say about their experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={testimonial.name} 
                className="hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                      <span className="text-gray-500 text-sm">IMG</span>
                    </div>
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                  <div className="flex space-x-1 mt-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-lg">★</span>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="bg-primary text-white rounded-lg p-8">
              <h2 className="text-3xl font-bold mb-4">Join Our Happy Customers</h2>
              <p className="text-xl mb-6 opacity-90">
                Ready to experience the quality and service our customers love?
              </p>
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
