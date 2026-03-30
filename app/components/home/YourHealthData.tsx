
import React from 'react';
import { ShieldCheck, Settings, Award } from 'lucide-react'; 

const YourHealthData: React.FC = () => {
  const trustPoints = [
    {
      title: "End-to-End Encryption",
      desc: "Your data is encrypted and secure at all times",
      icon: <ShieldCheck className="w-8 h-8 text-[#001a2c]" />,
    },
    {
      title: "No Selling Data",
      desc: "We never sell your health information to third parties",
      icon: <Settings className="w-8 h-8 text-[#001a2c]" />,
    },
    {
      title: "You Control Your Data",
      desc: "Delete or export your data anytime you choose",
      icon: <Award className="w-8 h-8 text-[#001a2c]" />,
    },
  ];

  return (
    <section className="bg-[#001F3F] text-white py-24 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Title */}
        <h2 className="text-3xl md:text-5x lg:text-6xl  font-bold leading-10 md:leading-24 text-secondaryColor mb-20 tracking-wide">
          Your Health Data Belongs to You.
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-24">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex flex-col items-center group">
              {/* Icon Circle */}
              <div className="w-16 h-16 bg-[#c5a367] rounded-full flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(197,163,103,0.3)] group-hover:scale-110 transition-transform duration-300">
                {point.icon}
              </div>
              
              {/* Text */}
              <h3 className="text-xl md:text-2xl   font-bold leading-6 md:leading-8 mb-3 tracking-tight">
                {point.title}
              </h3>
              <p className="text-[#FFFFFFCC] text-base sm:text-lg font-normal  leading-relaxed max-w-[240px]">
                {point.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Footer Quote */}
        <div className="max-w-3xl mx-auto ">
          <p className="text-[#FFFFFFE5] text-lg md:text-xl  font-normal  opacity-80 leading-relaxed">
            "Privacy-first architecture built for women's health. Your intimate health data <br className="hidden md:block" /> 
            deserves the highest level of protection."
          </p>
        </div>
        
      </div>
    </section>
  );
};

export default YourHealthData;