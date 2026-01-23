import { ChevronDown, ChevronUp, HelpCircle, Mail, MessageCircle, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../layout/Footer";
import Navigation from "../layout/Navigation";

const faqItems = [
  {
    id: 1,
    question: "What services do you offer?",
    answer: "We offer comprehensive automotive services including routine maintenance, repairs, diagnostics, AC servicing, clutch replacement, detailing, and specialized mechanical services. Our expert technicians handle everything from basic oil changes to complex engine repairs."
  },
  {
    id: 2,
    question: "How do I book an appointment?",
    answer: "You can book an appointment through our website by clicking on any service, calling our helpline, or visiting our service center directly. We recommend booking in advance to secure your preferred time slot."
  },
  {
    id: 3,
    question: "Do you provide warranty on services?",
    answer: "Yes, we provide warranty on all our services. Most services come with a 1000 km or 3-month warranty, whichever comes first. Premium services may have extended warranty periods. Please check specific service details for warranty information."
  },
  {
    id: 4,
    question: "What are your operating hours?",
    answer: "We are open Monday to Saturday from 9:00 AM to 7:00 PM, and Sunday from 10:00 AM to 5:00 PM. Emergency services are available 24/7 for breakdowns and urgent repairs."
  },
  {
    id: 5,
    question: "Do you offer pickup and drop service?",
    answer: "Yes! We provide free pickup and drop service for most of our service packages within city limits. Our team will collect your vehicle from your location and deliver it back after service completion."
  },
  {
    id: 6,
    question: "What payment methods do you accept?",
    answer: "We accept all major payment methods including cash, credit/debit cards, UPI, digital wallets, and bank transfers. We also offer easy EMI options for services above a certain amount."
  },
  {
    id: 7,
    question: "How long does a typical service take?",
    answer: "Service duration varies by type. Basic services take 2-4 hours, comprehensive services take 6-8 hours, and major repairs may require 1-2 days. We provide accurate time estimates when you book your service."
  },
  {
    id: 8,
    question: "Can I track my service progress?",
    answer: "Absolutely! Once your service is in progress, you will receive real-time updates via SMS and email. You can also call our service center anytime to check the status of your vehicle."
  },
];

const FAQ = () => {
  const [expandedId, setExpandedId] = useState(1);

  const toggleItem = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
  <div className="min-h-screen bg-white">
    <Navigation />

    <div className="bg-gradient-to-b from-gray-50 to-white min-h-screen">
      {/* Hero Section */}
      <div className="px-4 sm:px-6 lg:px-16 py-16 bg-gradient-to-br from-red-600 to-red-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <HelpCircle className="w-16 h-16 mx-auto mb-4 opacity-90" strokeWidth={1.5} />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg opacity-90">
            Find answers to common questions about our services
          </p>
        </div>
      </div>


        {/* Search Bar */}
        <div className="px-4 sm:px-6 lg:px-16 -mt-8">
          <div className="max-w-3xl mx-auto">
            <div className="relative bg-white rounded-xl shadow-lg p-2">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 text-gray-700 placeholder-gray-400 focus:outline-none rounded-lg"
              />
              <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="px-4 sm:px-6 lg:px-16 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {faqItems.map((item) => {
                const isExpanded = expandedId === item.id;
                
                return (
                  <div
                    key={item.id}
                    className={`bg-white rounded-xl overflow-hidden transition-all border-2 ${
                      isExpanded 
                        ? "border-red-600 shadow-lg" 
                        : "border-gray-200 shadow-md hover:border-gray-300"
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(item.id)}
                      className={`w-full flex items-center justify-between p-6 text-left transition-colors ${
                        isExpanded 
                          ? "bg-red-50" 
                          : "bg-white hover:bg-gray-50"
                      }`}
                    >
                      <span className={`text-lg font-semibold pr-4 ${
                        isExpanded ? "text-red-600" : "text-gray-900"
                      }`}>
                        {item.question}
                      </span>
                      
                      <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        isExpanded ? "bg-red-600" : "bg-gray-200"
                      }`}>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-white" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-600" />
                        )}
                      </div>
                    </button>

                    {isExpanded && (
                      <div className="px-6 pb-6 pt-2">
                        <p className="text-gray-700 leading-relaxed">
                          {item.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Still Have Questions Section */}
        <div className="px-4 sm:px-6 lg:px-16 pb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900 to-black rounded-2xl shadow-xl p-8 md:p-12 text-center text-white">
            <MessageCircle className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Still Have Questions?
            </h2>
            <p className="text-gray-300 mb-6">
              Our support team is here to help you 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Mail size={20} />
                Contact Us
              </Link>
           <a   
                href="tel:+1800456789"
                className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;