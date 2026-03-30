// components/AICoachSection.tsx
import Link from 'next/link';
import React from 'react';

const AICoachSection: React.FC = () => {
  const features = [
    { title: "Explains cycle changes", desc: "Understand hormonal shifts and what they mean for you" },
    { title: "Identifies health patterns", desc: "Discover connections you never knew existed" },
    { title: "Offers personalized insights", desc: "Tailored to your unique biology and lifestyle" },
    { title: "Guides better daily decisions", desc: "Know when to push and when to rest" },
  ];

  return (
    <section className="bg-[#001F3F] text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-secondaryColor text-center mb-16">
          Meet Numera — Your AI Health Coach
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: UI/App Mockup Preview */}
          <div className="bg-[#001F3FCC] p-8 rounded-3xl border border-white/5 shadow-2xl relative">
            <div className="space-y-4 bg-[#001F3FCC] p-3 md:p-8">
              {/* Message 1 */}
              <div className="bg-secondaryColor text-primaryColor p-5 rounded-xl rounded-bl-none max-w-[90%]">
                <p className="text-sm md:text-base font-semibold">
                  "Your sleep and stress patterns suggest your cycle may shift earlier this month."
                </p>
              </div>
              {/* Message 2 (User) */}
              <div className="bg-[#16334a] p-4 rounded-xl rounded-br-none ml-auto max-w-[80%] text-slate-300">
                <p className="text-sm">"What should I focus on this week?"</p>
              </div>
              {/* Message 3 */}
              <div className="bg-[#c5a367] text-[#001a2c] p-5 rounded-xl rounded-bl-none max-w-[90%]">
                <p className="text-sm md:text-base font-serif italic font-semibold">
                  "Based on your luteal phase, prioritize rest and gentle movement. Your energy levels may naturally decrease—listen to your body."
                </p>
              </div>
            </div>
          </div>

          {/* Right: Feature List */}
          <div className="space-y-10">
            <div className="space-y-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="bg-[#c5a367] rounded-full p-1 mt-1 shrink-0">
                    <svg className="w-4 h-4 text-[#001a2c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl leading-8 font-bold text-slate-100">{f.title}</h4>
                    <p className="text-[#FFFFFFCC] font-normal leading-6  text-sm sm:text-base">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
             <Link href="/site/numera">
          <button  className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] px-2 xl:px-8 py-4 w-full rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
           Meet Numera
          </button>
          </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AICoachSection;