
import Layout from "@/components/Layout";
import Section from "@/components/ui/section";
import SectionHeader from "@/components/ui/section-header";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      category: "General Questions",
      questions: [
        {
          question: "What services do you offer?",
          answer: "We offer a comprehensive range of business solutions including digital marketing, web development, business consulting, and custom software solutions. Our services are designed to help businesses of all sizes achieve their goals and drive growth."
        },
        {
          question: "How do I get started?",
          answer: "Getting started is easy! Simply contact us through our website, schedule a consultation, or give us a call. We'll discuss your needs, provide a customized solution, and guide you through the entire process."
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer: "Yes, we work with businesses ranging from startups to large enterprises. Our solutions are scalable and can be customized to meet the specific needs and budget of any organization."
        }
      ]
    },
    {
      category: "Pricing & Billing",
      questions: [
        {
          question: "How much do your services cost?",
          answer: "Our pricing varies depending on the specific services and scope of work. We offer competitive rates and flexible pricing models including project-based, monthly retainers, and custom packages. Contact us for a personalized quote."
        },
        {
          question: "Do you offer payment plans?",
          answer: "Yes, we offer flexible payment options including monthly payment plans for larger projects. We accept various payment methods including credit cards, bank transfers, and online payments."
        },
        {
          question: "Is there a setup fee?",
          answer: "Setup fees vary depending on the service. Some services have no setup fee, while others may include an initial setup cost. This will be clearly outlined in your project proposal."
        }
      ]
    },
    {
      category: "Support & Maintenance",
      questions: [
        {
          question: "What kind of support do you provide?",
          answer: "We provide comprehensive support including technical assistance, regular maintenance, updates, and ongoing consultation. Our support team is available via email, phone, and live chat during business hours."
        },
        {
          question: "How quickly do you respond to support requests?",
          answer: "We typically respond to support requests within 2-4 hours during business hours. For urgent issues, we offer priority support with faster response times for our premium service clients."
        },
        {
          question: "Do you provide training?",
          answer: "Yes, we provide comprehensive training for all our solutions. This includes initial training sessions, documentation, video tutorials, and ongoing support to ensure your team can effectively use our services."
        }
      ]
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <Section background="gradient" className="py-20 md:py-24 lg:py-28">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Frequently Asked <span className="bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find answers to common questions about our services, pricing, and support. Can't find what you're looking for? Contact us directly.
          </p>
        </div>
      </Section>

      {/* FAQ Content */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div key={category.category} className="mb-12 animate-fade-in" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
                {category.category}
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                {category.questions.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`${categoryIndex}-${index}`}
                    className="border border-gray-200 rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="text-lg font-semibold text-gray-900 pr-4">
                        {faq.question}
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6">
                      <div className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </div>
      </Section>

      {/* Contact Support Section */}
      <Section background="gray">
        <div className="max-w-4xl mx-auto text-center">
          <SectionHeader 
            title="Still Have Questions?"
            subtitle="Our support team is here to help you with any additional questions or concerns."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                icon: MessageCircle,
                title: "Live Chat",
                description: "Chat with our support team in real-time",
                action: "Start Chat",
                link: "/contact"
              },
              {
                icon: Phone,
                title: "Phone Support",
                description: "Call us during business hours",
                action: "Call Now",
                link: "tel:+1-555-123-4567"
              },
              {
                icon: Mail,
                title: "Email Support",
                description: "Send us a detailed message",
                action: "Send Email",
                link: "mailto:support@company.com"
              }
            ].map((contact, index) => (
              <Card key={contact.title} className="text-center hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{contact.title}</h3>
                  <p className="text-gray-600 mb-6">{contact.description}</p>
                  <Button className="w-full" asChild>
                    {contact.link.startsWith('http') || contact.link.startsWith('tel:') || contact.link.startsWith('mailto:') ? (
                      <a href={contact.link}>{contact.action}</a>
                    ) : (
                      <Link to={contact.link}>{contact.action}</Link>
                    )}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default FAQ;
