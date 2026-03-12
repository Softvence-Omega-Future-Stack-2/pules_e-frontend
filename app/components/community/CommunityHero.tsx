
"use client"
import React from 'react';


const CommunityHero: React.FC = () => {
  return (
    <section className="relative min-h-screen  w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/communityHeroImg.svg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1550px] px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-[90px] font-lora  font-bold leading-tight lg:leading-[90px] mb-6">
          Sisterhood in the Fight
        </h1>
        
        <p className="text-secondaryColor text-xl md:text-2xl font-lora font-semibold leading-6 md:leading-8 mb-6  ">
        Everything you need to understand your body, track what matters, and fight back against the numbers that try to define you.
        </p>

      

      </div>
    </section>
  );
};

export default CommunityHero;