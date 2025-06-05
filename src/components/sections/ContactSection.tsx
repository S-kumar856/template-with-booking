
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary to-primary/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-5xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-xl mb-10 opacity-90 leading-relaxed">
              Let's discuss how we can transform your business with our proven strategies and cutting-edge solutions.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Call Us</div>
                  <span className="opacity-90">+1 (555) 123-4567</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Email Us</div>
                  <span className="opacity-90">hello@yourbrand.com</span>
                </div>
              </div>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-6">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold">Visit Us</div>
                  <span className="opacity-90">123 Business Street, City, State 12345</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 shadow-2xl animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
                />
              </div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 transition-all duration-300"
              />
              <textarea 
                placeholder="Tell us about your project..." 
                rows={4}
                className="w-full px-6 py-4 rounded-xl bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none transition-all duration-300"
              ></textarea>
              <Button 
                type="submit" 
                variant="secondary" 
                size="lg"
                className="w-full hover:scale-105 transition-transform duration-300 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold py-4 text-lg"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
