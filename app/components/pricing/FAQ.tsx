"use client"


import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQSection = () => {
  // State to track which FAQ is currently open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you can cancel your subscription at any time through your account settings. You will continue to have access until the end of your current billing period."
    },
    {
      question: "What's included in the free plan?",
      answer: "The free plan includes basic cycle tracking, limited Numera conversations, and access to our public Arena community."
    },
    {
      question: "How does Numera AI work?",
      answer: "Numera uses hormonal science and your personal data to provide cycle-aware, compassionate guidance tailored to your energy levels and phase."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. We prioritize your privacy with end-to-end encryption, and your personal health data is never sold to third parties."
    },
    {
      question: "Can I upgrade or downgrade later?",
      answer: "Yes, you can switch between plans at any time. Price adjustments will be applied automatically to your next billing cycle."
    },
    {
      question: "What if I'm not satisfied?",
      answer: "We offer a 14-day money-back guarantee if you feel Fight the Number isn't the right fit for your journey."
    }
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F8F1E9] px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-[#0a192f] text-4xl md:text-5xl  font-bold leading-12">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
            >
              <button 
                onClick={() => toggleAccordion(idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
              >
                <span className="text-[#0a192f] text-lg md:text-xl  font-bold leading-8">
                  {faq.question}
                </span>
                <div className="text-[#c5a059] shrink-0 ml-4">
                  {openIndex === idx ? (
                    <Minus size={20} strokeWidth={3} />
                  ) : (
                    <Plus size={20} strokeWidth={3} />
                  )}
                </div>
              </button>

              {/* Collapsible Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx 
                    ? 'max-h-[500px] opacity-100 border-t border-gray-50' 
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 text-gray-500 font-medium leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQSection;