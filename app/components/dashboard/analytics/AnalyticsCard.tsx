import React from 'react';
import { TrendingUp, Activity, Clock, CheckCircle } from 'lucide-react';

const AnalyticsCard = () => {
  const stats = [
    {
      label: "New Sign-ups",
      value: "5,842",
      icon: <TrendingUp size={24} className="text-white" />,
      subtext: ""
    },
    {
      label: "Engagement Rate",
      value: "68.4%",
      icon: <Activity size={24} className="text-white" />,
      subtext: "Daily active users"
    },
    {
      label: "Avg Session Time",
      value: "14m 32s",
      icon: <Clock size={24} className="text-white" />,
      subtext: ""
    },
    {
      label: "Retention Rate",
      value: "82.6%",
      icon: <CheckCircle size={24} className="text-white" />,
      subtext: ""
    }
  ];

  return (
    <div className="w-full ">
      <div className="">
        
       
        {/* --- Stats Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#FFFFFFB2]  rounded-2xl p-4 md:p-8  border border-[#FFFFFF80] flex flex-col gap-6"
            >
              {/* Icon Container */}
              <div className="w-14 h-14 bg-[#B89463] rounded-2xl flex items-center justify-center shadow-md">
                {item.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-2xl font-bold text-primaryColor leading-5 md:leading-8 font-lora mb-1">
                  {item.value}
                </h3>
                <p className="text-[#6B7280] font-semibold text-sm mb-1 leading-4 opacity-80">
                  {item.label}
                </p>
                {item.subtext && (
                  <p className="text-[#6B7280] text-xs font-normal mt-2 font-lora leading-4">
                    {item.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AnalyticsCard;