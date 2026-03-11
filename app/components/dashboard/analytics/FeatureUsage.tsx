import React from 'react';
import { Heart, Sparkles, MessageSquare, UserCheck, Activity } from 'lucide-react';

interface Feature {
  label: string;
  percentage: number;
  icon: React.ReactNode;
}

const featureData: Feature[] = [
  { label: "Cycle Tracking", percentage: 89, icon: <Heart size={24} className="text-white fill-current" /> },
  { label: "AI Coach", percentage: 76, icon: <Sparkles size={24} className="text-white fill-current" /> },
  { label: "Community", percentage: 68, icon: <MessageSquare size={24} className="text-white fill-current" /> },
  { label: "Partner Match", percentage: 54, icon: <UserCheck size={24} className="text-white" /> },
  { label: "Life Stage", percentage: 48, icon: <Activity size={24} className="text-white" /> },
];

const FeatureUsage = () => {
  return (
    <div className="w-full ">
      {/* Main Card */}
      <div className=" bg-[#FFFFFFB2]  rounded-2xl p-4 md:p-8  border border-[#FFFFFF80]">
        
        {/* Title */}
        <h2 className="text-lg md:text-xl font-bold text-primaryColor leading-7 font-lora mb-6">
          Feature Usage
        </h2>

        {/* Feature List */}
        <div className="space-y-8">
          {featureData.map((item, index) => (
            <div key={index} className="flex items-center gap-6">
              
              {/* Icon Box */}
              <div className="shrink-0 w-16 h-16 bg-[#B89463] rounded-2xl flex items-center justify-center shadow-md shadow-[#B89463]/20">
                {item.icon}
              </div>

              {/* Progress & Text Wrapper */}
              <div className="flex-1 space-y-2">
                <div className="flex justify-between items-end">
                  <span className="text-xl font-bold text-[#1A2B3C] font-lora tracking-tight">
                    {item.label}
                  </span>
                  <span className="text-lg font-bold text-[#B89463] font-lora opacity-80">
                    {item.percentage}%
                  </span>
                </div>

                {/* Progress Bar Track */}
                <div className="h-2.5 w-full bg-[#FAF3EA] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[#B89463] rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeatureUsage;