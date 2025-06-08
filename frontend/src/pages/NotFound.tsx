
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="text-9xl font-bold text-primary mb-4 animate-pulse">404</div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
            <p className="text-xl text-gray-600 mb-8">
              Oops! The page you're looking for doesn't exist. It might have been moved, deleted, or you entered the wrong URL.
            </p>
            
            <div className="space-y-4">
              <Button size="lg" asChild className="hover:scale-105 transition-transform duration-300">
                <Link to="/">Return to Homepage</Link>
              </Button>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
                  <Link to="/products">Browse Products</Link>
                </Button>
                <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
                  <Link to="/services">View Services</Link>
                </Button>
                <Button variant="outline" asChild className="hover:scale-105 transition-transform duration-300">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
