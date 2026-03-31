"use client"

import React, { useState } from 'react';
import { Check, X } from 'lucide-react';

const PricingPlans = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      price: "0",
      tagline: "Start your fight with essential tools",
      buttonText: "Start Free",
      features: [
        { text: "Basic cycle tracking", included: true },
        { text: "NSV logging (3 per week)", included: true },
        { text: "Limited Numera conversations", included: true },
        { text: "Access to public Arena", included: true },
        { text: "Educational blog access", included: true },
        { text: "No BBT tracking", included: false },
        { text: "No private circles", included: false },
        { text: "No accountability matching", included: false },
        { text: "Ads supported", included: false },
      ]
    },
    {
      name: "Fight Sister",
      price: isAnnual ? "6.67" : "8.99",
      period: isAnnual ? "/yr" : "/mo",
      tagline: "Full access to all features and community",
      buttonText: "Get Started",
      isFeatured: true,
      features: [
        { text: "Unlimited BBT tracking with insights", included: true },
        { text: "Unlimited NSV logging", included: true },
        { text: "Full Numera AI conversations", included: true },
        { text: "Access to all private circles", included: true },
        { text: "Accountability partner matching", included: true },
        { text: "Phase-specific challenges", included: true },
        { text: "Geo-based provider recommendations", included: true },
        { text: "Ad-free experience", included: true },
        { text: "Priority support", included: true },
      ]
    },
    {
      name: "Sister for Life",
      price: "199.99",
      period: "one-time",
      tagline: "One-time payment, lifetime support (limited to first 500)",
      buttonText: "Join for Life",
      features: [
        { text: "Everything in Fight Sister", included: true },
        { text: "Lifetime access (no recurring fees)", included: true },
        { text: "Early access to new features", included: true },
        { text: "Exclusive community events", included: true },
        { text: "Priority beta testing", included: true },
        { text: "Lifetime price lock guarantee", included: true },
        { text: "Unlimited BBT tracking with insights", included: true },
        { text: "Full Numera AI conversations", included: true },
        { text: "Ad-free experience", included: true },
      ]
    }
  ];

  return (
    <section className="py-24 bg-[#fcfaf8] px-6">
      <div className="max-w-7xl mx-auto">

        {/* Toggle */}
      <div className="flex justify-center mb-16">
  <div className="relative bg-[#ede3d5] p-1 rounded-xl flex items-center gap-1">

    {/* sliding pill */}
    <span
      className={`absolute top-1 bottom-1 rounded-lg transition-all duration-300 ease-in-out ${
        isAnnual
          ? "bg-[#c5a059] left-[calc(50%+2px)] right-1"
          : "bg-[#c5a059] left-1 right-[calc(50%+2px)]"
      }`}
    />

    {/* Monthly */}
    <button
      onClick={() => setIsAnnual(false)}
      className={`relative z-10 px-8 py-2.5 rounded-lg text-base font-bold   leading-6 transition-colors duration-300 cursor-pointer ${
        !isAnnual ? "text-white" : "text-[#6B7280] hover:text-gray-700"
      }`}
    >
      Monthly
    </button>

    {/* Annual */}
    <button
      onClick={() => setIsAnnual(true)}
      className={`relative z-10 px-8 py-2.5 rounded-lg text-base font-bold leading-6 transition-colors duration-300 flex items-center gap-2 cursor-pointer ${
        isAnnual ? "text-white" : "text-gray-500 hover:text-gray-700"
      }`}
    >
      Annual
      <span
        className={`text-[10px] transition-opacity duration-300 ${
          isAnnual ? "opacity-80" : "opacity-60"
        }`}
      >
        (Save 25%)
      </span>
    </button>

  </div>
</div>

        {/* Pricing Grid — equal height via grid rows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className={`group relative bg-white p-8 md:p-10 rounded-[2rem] shadow-sm border-2 transition-all duration-300 hover:shadow-xl flex flex-col ${
                plan.isFeatured
                  ? 'border-transparent hover:border-[#c5a059]'
                  : 'border-transparent hover:border-[#c5a059]'
              }`}
            >
              {plan.isFeatured && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#8a6d3b] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap">
                  Best Value
                </span>
              )}

              {/* Top section */}
              <div className="mb-8">
                <h3 className="text-primaryColor text-2xl md:text-3xl  font-bold leading-8 mb-2">{plan.name}</h3>
                <p className="text-[#6B7280] text-base font-normal mb-6">{plan.tagline}</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[#0a192f] text-4xl md:text-5xl font-bold leading-12">${plan.price}</span>
                  <span className="text-gray-400 font-medium">{plan.period}</span>
                </div>
                {plan.isFeatured && isAnnual && (
                  <p className="text-[#c5a059] text-xs font-bold mt-2">$6.67/mo billed annually (less than $0.22/day)</p>
                )}
              </div>
              
              {/* Button */}
             <button
  className="w-full py-4 rounded-xl font-bold mb-8 transition-all duration-300 cursor-pointer
  bg-[#f8f3ed] text-[#0a192f]
  hover:bg-gradient-to-b hover:from-[#c5a059] hover:to-[#8a6d3b]
  hover:text-white hover:shadow-lg hover:shadow-[#c5a059]/30"
>
  {plan.buttonText}
</button>

              {/* Features — flex-1 pushes this to fill remaining height */}
              <div className="space-y-4 flex-1">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    {feat.included ? (
                      <Check size={18} className="text-[#c5a059] shrink-0 mt-0.5" />
                    ) : (
                      <X size={18} className="text-gray-300 shrink-0 mt-0.5" />
                    )}
                    <span className={`text-sm ${feat.included ? 'text-[#0a192f] font-medium' : 'text-gray-400'}`}>
                      {feat.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PricingPlans;