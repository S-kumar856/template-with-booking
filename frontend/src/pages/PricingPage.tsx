
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import PricingCard from "@/components/common/PricingCard";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import FAQSection from "@/components/common/faqSection";
const PricingPage = () => {
  const pricingPlans = [
    {
      name: "Starter",
      description: "Perfect for small teams getting started",
      price: "$29",
      period: "/month",
      features: [
        "Up to 5 team members",
        "10GB storage",
        "Email support",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      description: "Ideal for growing businesses",
      price: "$99",
      period: "/month",
      features: [
        "Up to 25 team members",
        "100GB storage",
        "Priority support",
        "Advanced analytics",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      description: "For large organizations with advanced needs",
      price: "$299",
      period: "/month",
      features: [
        "Unlimited team members",
        "1TB storage",
        "24/7 dedicated support",
        "Advanced security",
        "Custom solutions",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const comparisonFeatures = [
    { feature: "Team Members", starter: "5", professional: "25", enterprise: "Unlimited" },
    { feature: "Storage", starter: "10GB", professional: "100GB", enterprise: "1TB" },
    { feature: "Support", starter: "Email", professional: "Priority", enterprise: "24/7 Dedicated" },
    { feature: "Analytics", starter: "Basic", professional: "Advanced", enterprise: "Enterprise" },
    { feature: "API Access", starter: false, professional: true, enterprise: true },
    { feature: "Custom Integrations", starter: false, professional: true, enterprise: true },
    { feature: "SSO", starter: false, professional: false, enterprise: true },
    { feature: "On-premise", starter: false, professional: false, enterprise: true },
  ];

  return (
    <Layout>
      <Section background="white">
        <SectionHeader 
          title="Choose Your Perfect Plan"
          subtitle="Select the plan that best fits your needs and scale as you grow. All plans include our core features with varying limits and support levels."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} {...plan} index={index} />
          ))}
        </div>

        {/* Feature Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/5 to-primary/10 px-8 py-6">
            <h3 className="text-2xl font-bold text-gray-900 text-center">Feature Comparison</h3>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-4 px-6 font-semibold text-gray-900">Features</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Starter</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Professional</th>
                  <th className="text-center py-4 px-6 font-semibold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisonFeatures.map((item, index) => (
                  <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                    <td className="py-4 px-6 font-medium text-gray-900">{item.feature}</td>
                    <td className="py-4 px-6 text-center">
                      {typeof item.starter === 'boolean' ? (
                        item.starter ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-gray-600">{item.starter}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof item.professional === 'boolean' ? (
                        item.professional ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-gray-600">{item.professional}</span>
                      )}
                    </td>
                    <td className="py-4 px-6 text-center">
                      {typeof item.enterprise === 'boolean' ? (
                        item.enterprise ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-red-400 mx-auto" />
                      ) : (
                        <span className="text-gray-600">{item.enterprise}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
     <FAQSection />
    </Layout>
  );
};

export default PricingPage;
