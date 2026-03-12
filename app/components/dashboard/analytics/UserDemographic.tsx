import React from 'react';

interface Demographic {
  label: string;
  percentage: number;
}

const demographicsData: Demographic[] = [
  { label: "Age 18-24", percentage: 18 },
  { label: "Age 25-34", percentage: 42 },
  { label: "Age 35-44", percentage: 28 },
  { label: "Age 45+", percentage: 12 },
];

const UserDemographics = () => {
  return (
    <div className="w-full ">
      {/* Bento Card Container */}
      <div className=" bg-[#FFFFFFB2]  rounded-2xl p-4 md:p-8  border border-[#FFFFFF80]">
        
        {/* Title */}
        <h2 className="text-lg md:text-xl font-bold text-primaryColor leading-7 font-lora mb-6">
          User Demographics
        </h2>

        {/* Progress Bars List */}
        <div className="space-y-10">
          {demographicsData.map((item, index) => (
            <div key={index} className="space-y-3">
              {/* Label & Percentage Row */}
              <div className="flex justify-between items-end">
                <span className="text-xl font-bold text-[#1A2B3C] font-lora tracking-tight">
                  {item.label}
                </span>
                <span className="text-xl font-bold text-[#B89463] font-lora leading-none">
                  {item.percentage}%
                </span>
              </div>

              {/* Progress Bar Track */}
              <div className="h-4 w-full bg-[#FAF3EA] rounded-full overflow-hidden">
                {/* Active Progress Fill */}
                <div 
                  className="h-full bg-[#B89463] rounded-full transition-all duration-1000 ease-out"
                  style={{ width: `${item.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDemographics;