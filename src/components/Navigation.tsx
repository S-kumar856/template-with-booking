import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Pricing", path: "/pricing" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Book Now", path: "/booking" },
  ];

  const pageItems = [
    { name: "Products", path: "/products" },
    { name: "Blog", path: "/blog" },
    { name: "FAQ", path: "/faq" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Membership", path: "/membership" },
    { name: "Shopping Cart", path: "/cart" },
    { name: "User Dashboard", path: "/dashboard" },
    { name: "Privacy Policy", path: "/privacy" },
    { name: "Terms & Conditions", path: "/terms" },
    { name: "Help & Support", path: "/help" },
  ];

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-all duration-300 shadow-lg">
                L
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                YourBrand
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <NavigationMenu>
              <NavigationMenuList className="space-x-6">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <Link
                      to={item.path}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:bg-primary/5 hover:text-primary relative ${isActivePath(item.path)
                          ? "text-primary bg-primary/5"
                          : "text-gray-700 hover:text-primary"
                        }`}
                    >
                      {item.name}
                      {isActivePath(item.path) && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-primary rounded-full"></div>
                      )}
                    </Link>
                  </NavigationMenuItem>
                ))}

                {/* Pages Dropdown */}
                <NavigationMenuItem>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="flex items-center px-3 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-primary hover:bg-primary/5 transition-all duration-300">
                        Pages
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-md border border-gray-200 shadow-xl rounded-xl p-2">
                      {pageItems.map((page) => (
                        <DropdownMenuItem key={page.name} asChild>
                          <Link
                            to={page.path}
                            className={`flex w-full px-3 py-2 text-sm rounded-lg transition-all duration-200 hover:bg-primary/5 hover:text-primary ${isActivePath(page.path) ? "text-primary bg-primary/5" : "text-gray-700"
                              }`}
                          >
                            {page.name}
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Button className="ml-6 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-primary hover:bg-primary/5 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary transition-all duration-300"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 ${isActivePath(item.path)
                    ? "text-primary bg-primary/5 border-l-4 border-primary"
                    : "text-gray-700 hover:text-primary hover:bg-primary/5"
                  }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile Pages Section */}
            <div className="pt-4 border-t border-gray-200">
              <div className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                Pages
              </div>
              <div className="grid grid-cols-2 gap-2">
                {pageItems.map((page) => (
                  <Link
                    key={page.name}
                    to={page.path}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${isActivePath(page.path)
                        ? "text-primary bg-primary/5"
                        : "text-gray-600 hover:text-primary hover:bg-primary/5"
                      }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {page.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
