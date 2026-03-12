"use client"

import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ExampleConversations = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      title: "Luteal Phase Support",
      content: "Deep dive into how Numera provides emotional and physical support during your luteal phase, focusing on energy management and self-compassion."
    },
    {
      title: "Perimenopause Energy",
      content: "Understand the fluctuations in your energy levels during perimenopause and how to adjust your daily routine to honor your body's changing needs."
    },
    {
      title: "BBT Insights",
      content: "Learn how tracking your Basal Body Temperature (BBT) provides critical insights into your hormonal health beyond just ovulation."
    }
  ];

  return (
    <section className="py-24 bg-[#F8F1E9] px-6">
      <div className="max-w-3xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-lora font-bold leading-6 md:leading-[4rem] mb-4">
            Example Conversations
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-primaryColor text-lg md:text-xl leading-7 font-bold">
                  {item.title}
                </span>
                <div className="text-[#c5a059] shrink-0">
                  {openIndex === idx ? <Minus size={24} /> : <Plus size={24} />}
                </div>
              </button>

              {/* Accordion Content */}
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-6 md:p-8 pt-0 text-gray-500 font-medium leading-relaxed">
                  {item.content}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ExampleConversations;