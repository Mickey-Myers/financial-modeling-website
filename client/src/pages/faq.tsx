import { ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // Placeholder FAQ items - will be replaced with your content
  const faqItems = [
    {
      question: "What types of financial models do you build?",
      answer: "We build a wide range of financial models including startup pitch deck models, LBO models, DCF valuations, merger models, and custom financial planning tools tailored to your specific business needs."
    },
    {
      question: "How long does it take to build a financial model?",
      answer: "Most standard models are completed within 1-2 weeks. Complex models like LBOs or multi-entity consolidations may take 2-3 weeks. Rush delivery is available for an additional fee."
    },
    {
      question: "Who builds the models?",
      answer: "All models are handbuilt by our team of former Investment Bankers, Private Equity professionals, and experienced financial analysts. We never use AI or automated tools."
    },
    {
      question: "What's included in the delivery?",
      answer: "You receive the Excel model file, comprehensive documentation, scenario testing, and a walkthrough session. We also provide 30 days of support for questions or minor adjustments."
    },
    {
      question: "Do you work with startups or only established companies?",
      answer: "We work with companies of all sizes, from pre-revenue startups to $100M+ enterprises. Our models are tailored to your specific stage and requirements."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <div className="bg-slate-800/50 border-b border-slate-700/50">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center gap-4 mb-4">
            <a 
              href="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </a>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-300">
            Everything you need to know about our financial modeling services
          </p>
        </div>
      </div>

      {/* FAQ Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openItems.includes(index);
            return (
              <div 
                key={index}
                className="bg-slate-800/60 border border-slate-700/40 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-700/50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-white pr-4">
                    {item.question}
                  </h3>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#a3865a] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#a3865a] flex-shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-300 leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center p-8 bg-slate-800/60 border border-slate-700/40 rounded-lg">
          <h3 className="text-2xl font-bold text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-300 mb-6">
            Get in touch and we'll respond within 24 hours
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-[#a3865a] hover:bg-[#8f7249] text-slate-900 px-6 py-3 font-semibold rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
} 