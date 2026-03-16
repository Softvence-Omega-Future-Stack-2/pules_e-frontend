
"use client"
import React from 'react';


const MovementHero: React.FC = () => {
  return (
    <section className="relative min-h-screen   w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/movmentHeroImg.svg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1550px]  px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-[90px] font-lora  font-bold leading-tight lg:leading-[90px] max-w-5xl mx-auto mb-6">
       Movement as Medicine
        </h1>
        
        <p className="text-secondaryColor text-xl md:text-2xl font-lora font-semibold leading-6 md:leading-8 mb-6  ">
       Empowered Fitness for Every Phase of Your Cycle
        </p>

      <p className='text-lg md:text-xl font-normal text-[#FFFFFFCC] leading-6 max-w-5xl mx-auto'>
       Refuse to let fitness plateaus or calorie counts define you. Build strength your body actually wants—not what "should" work. Honor your cycle, defy aging myths, and celebrate movement wins beyond the scale.
        </p>

      </div>
    </section>
  );
};

export default MovementHero;