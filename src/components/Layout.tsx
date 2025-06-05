
import { ReactNode } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import NewsletterPopup from "./common/NewsletterPopup";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

const Layout = ({ children, className = "" }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navigation />
      <main className={`flex-grow ${className}`}>
        {children}
      </main>
      <Footer />
      <NewsletterPopup />
    </div>
  );
};

export default Layout;
