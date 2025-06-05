
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PricingCard from "@/components/common/PricingCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const MembershipPage = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "month",
      description: "Perfect for individuals getting started",
      features: ["Up to 5 projects", "Basic analytics", "Email support", "Standard templates", "Mobile responsive design"],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "month", 
      description: "Great for growing businesses",
      features: ["Unlimited projects", "Advanced analytics", "Priority support", "Premium templates", "Custom branding", "A/B testing"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "month",
      description: "For large organizations",
      features: ["Everything in Professional", "Custom integrations", "Dedicated manager", "24/7 phone support", "Custom training", "SLA guarantee"],
      popular: false
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-white via-yellow-200 to-white bg-clip-text text-transparent">
              Membership Plans
            </h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90 leading-relaxed">
              Choose the perfect membership plan for your needs. Upgrade or downgrade anytime with our flexible options.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <Section background="white">
        <SectionHeader 
          title="Choose Your Plan"
          subtitle="Flexible pricing options designed to grow with your business needs."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} {...plan} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Not sure which plan is right for you?</h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Contact our team for a personalized recommendation based on your specific needs and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button size="lg" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/contact">Contact Sales</Link>
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform duration-300" asChild>
              <Link to="/booking">Schedule Demo</Link>
            </Button>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default MembershipPage;
