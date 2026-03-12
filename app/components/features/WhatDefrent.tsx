"use client";

import React from 'react';
import { Check, X } from 'lucide-react';

const WhatMakesUsDifferent = () => {
  return (
    <div className="min-h-screen bg-[#fcfaf8] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold  text-primaryColor leading-6 md:leading-12 font-lora text-center mb-6 ">
            What Makes Us Different
          </h1>
          <p className="text-[#6B7280] text-lg md:text-xl leading-7 font-normal ">
            Fight the Number vs. traditional cycle tracking apps
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="overflow-x-auto  border border-gray-100 shadow-xl bg-white">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#0a192f] text-white">
                <th className="p-6 md:p-8  text-base">Feature</th>
                <th className="p-6 md:p-8  text-base text-secondaryColor">Fight the Number</th>
                <th className="p-6 md:p-8  text-base opacity-70">Flo / Clue</th>
              </tr>
            </thead>
        <tbody className="divide-y divide-[#E5E7EB]">
  <ComparisonRow 
    feature="Non-Scale Victories Focus" 
    ftn="Primary tracking metric" 
    competitor="Not available" 
    ftnHasCheck={true} 
    competitorHasCheck={false} 
  />
  <ComparisonRow 
    feature="AI Coach (Numera)" 
    ftn="Compassionate, cycle-aware" 
    competitor="Generic tips only" 
    ftnHasCheck={true} 
    competitorHasCheck={false} 
  />
  <ComparisonRow 
    feature="Anti-Diet Culture" 
    ftn="Core philosophy" 
    competitor="Weight loss features" 
    ftnHasCheck={true} 
    competitorHasCheck={false} 
  />
  <ComparisonRow 
    feature="Community Circles" 
    ftn="Life-stage specific" 
    competitor="Basic forums" 
    ftnHasCheck={true} 
    competitorHasCheck={false} 
  />
  <ComparisonRow 
    feature="BBT Integration" 
    ftn="With AI insights" 
    competitor="Basic tracking" 
    ftnHasCheck={true} 
    competitorHasCheck={true} 
  />
  <ComparisonRow 
    feature="Mental Health + Hormones" 
    ftn="Integrated approach" 
    competitor="Separate tracking" 
    ftnHasCheck={true} 
    competitorHasCheck={false} 
  />
</tbody>
          </table>
        </div>

      
      </div>
    </div>
  );
};

/* Helper Component for Table Rows */
/* Helper Component for Table Rows */
const ComparisonRow = ({ feature, ftn, competitor }: any) => (
  <tr className="group hover:bg-[#fcfaf8] transition-colors">
    {/* Feature Name */}
    <td className="p-6 md:p-8 font-normal text-base text-primaryColor leading-6">{feature}</td>

    {/* Fight the Number Column - always check */}
    <td className="p-6 md:p-8">
      <div className="flex items-center gap-2 text-[#c5a059] font-medium">
        <Check size={18} />
        <span>{ftn}</span>
      </div>
    </td>

    {/* Flo / Clue Column - only show icon if "Not available" or "Basic tracking" */}
    <td className="p-6 md:p-8">
      <div className="flex items-center gap-2 text-gray-400">
        {competitor === "Not available" && <X size={18} className="opacity-50" />}
        {competitor === "Basic tracking" && <Check size={18} className="opacity-50" />}
        <span>{competitor}</span>
      </div>
    </td>
  </tr>
);

export default WhatMakesUsDifferent;