
import React from 'react';
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
const FAQSection = () => {
  return (

<>
   {/* FAQ Section */}
   <Section background="gray">
        <SectionHeader 
          title="Frequently Asked Questions"
          subtitle="Got questions? We've got answers. If you can't find what you're looking for, feel free to contact us."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {[
            {
              question: "Can I change my plan anytime?",
              answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle."
            },
            {
              question: "Is there a free trial?",
              answer: "We offer a 14-day free trial for all plans. No credit card required to get started."
            },
            {
              question: "What payment methods do you accept?",
              answer: "We accept all major credit cards, PayPal, and bank transfers for Enterprise plans."
            },
            {
              question: "Can I cancel anytime?",
              answer: "Yes, you can cancel your subscription at any time. Your account will remain active until the end of your billing period."
            }
          ].map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">{faq.question}</h4>
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Start Your Free Trial
          </Button>
        </div>
      </Section>
    </>
  );
};

export default FAQSection;
