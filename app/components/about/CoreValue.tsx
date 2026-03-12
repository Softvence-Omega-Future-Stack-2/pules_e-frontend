import React from 'react';
import { Heart, Target, Zap } from 'lucide-react';

const CoreValues = () => {
  const values = [
    {
      icon: <Heart className="text-[#c5a059]" size={24} />,
      title: "Body Neutrality",
      desc: "We don't demand you love your body every day—we ask you to respect it, listen to it, and stop letting scales and charts steal your peace."
    },
    {
      icon: <Target className="text-[#c5a059]" size={24} />,
      title: "NSVs First",
      desc: "Energy, confidence, hormonal awareness, community connections—these are the victories that matter. Not pounds lost or calories burned."
    },
    {
      icon: <Zap className="text-[#c5a059]" size={24} />,
      title: "Compassion",
      desc: "Whether you're in your follicular power phase or drowning in luteal fatigue, Numera and our community meet you exactly where you are—without judgment."
    }
  ];

  return (
    <section className="py-24 bg-[#F8F1E9]  px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  text-primaryColor leading-6 md:leading-12 font-lora text-center mb-6 ">
            Our Core Values
          </h2>
        </div>

        {/* Values Grid - Responsive 1 to 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white p-10 rounded-xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-start"
            >
              {/* Gold Icon */}
              <div className="mb-6 opacity-80 group-hover:opacity-100">
                {item.icon}
              </div>
              
              <h3 className="text-primaryColor text-xl md:text-2xl leading-8  font-bold mb-4">
                {item.title}
              </h3>
              
              <p className="text-[#6B7280] text-sm md:text-base leading-relaxed font-normal">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoreValues;