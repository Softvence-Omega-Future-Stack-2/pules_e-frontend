
"use client"
import React from 'react';


const VitabilityHero: React.FC = () => {
  return (
    <section className="relative min-h-screen   w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/vitalityHeroIMg.svg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1550px]  px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-[90px] font-lora  font-bold leading-tight lg:leading-[90px] max-w-5xl mx-auto mb-6">
        Vitality Rebellion
        </h1>
        
        <p className="text-secondaryColor text-xl md:text-2xl font-lora font-semibold leading-6 md:leading-8 mb-6  ">
       Fight Aging Numbers with Functional Vitality
        </p>

      <p className='text-lg md:text-xl font-normal text-[#FFFFFFCC] leading-6  md:leading-9 max-w-5xl mx-auto'>Refuse to let age milestones, energy dips, or hormonal shifts define you. Track vitality wins—not wrinkles. Build strength—not shame. Reclaim your body's wisdom at every age.</p>

      </div>
    </section>
  );
};

export default VitabilityHero;