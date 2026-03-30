import React from 'react';
import { TrendingUp, Calendar, Activity } from 'lucide-react';

const BBTTrackingSection = () => {
  const cards = [
    {
      title: "Perimenopause Detection",
      description: "BBT fluctuations can reveal perimenopause shifts years before traditional tests. Numera helps you understand what's happening—and how to adapt.",
      icon: <TrendingUp size={24} className="text-white" />,
      cite: "image_700d55.png"
    },
    {
      title: "Cycle-Aware Recovery",
      description: "Track how recovery time changes across your cycle. Your luteal phase needs rest—not because you're aging, but because progesterone slows everything down.",
      icon: <Calendar size={24} className="text-white" />,
      cite: "image_700d55.png"
    },
    {
      title: "Stress & HRV Connection",
      description: "Combine BBT with wearable data (HRV, sleep) to see how stress impacts vitality. Fight burnout with data-driven compassion.",
      icon: <Activity size={24} className="text-white" />,
      cite: "image_700d55.png"
    }
  ];

  return (
    <section className="py-24 bg-[#f8f3ed] px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Title & Subtext */}
        <h2 className="text-[#0a192f] text-4xl md:text-5xl  font-bold  leading-6 md:leading-18 mb-6">
          How BBT Tracking Fights Aging Hormone Shifts
        </h2>
        <p className="text-[#6B7280] text-lg md:text-xl max-w-3xl mx-auto mb-16 italic">
          Your basal body temperature isn't just for fertility—it's a window into hormonal balance, stress, and vitality at every age.
        </p>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <div 
              key={idx} 
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 text-left border border-gray-50 flex flex-col items-center md:items-start text-center md:text-left"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 bg-[#8a6d3b] rounded-full flex items-center justify-center mb-6 shadow-lg shadow-[#8a6d3b]/20">
                {card.icon}
              </div>
              
              <h3 className="text-[#0a192f] text-xl md:text-2xl font-bold leading-6  mb-4 ">
                {card.title}
              </h3>
              <p className="text-[#6B7280]  leading-relaxed text-sm md:text-base">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BBTTrackingSection;