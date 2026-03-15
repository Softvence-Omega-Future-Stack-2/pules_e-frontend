
"use client"
import React from 'react';


const FightHero: React.FC = () => {
  return (
    <section className="relative h-[500px]   w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/img/fightHeroImg.svg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1550px] px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-[90px] font-lora  font-bold leading-tight lg:leading-[90px] max-w-5xl mb-6">
         What Numbers Are You Fighting?
        </h1>
        
        <p className="text-secondaryColor text-xl md:text-2xl font-lora font-semibold leading-6 md:leading-8 mb-6  ">
       Select all that apply, and we'll create a personalized Fight the Number plan just for you.
        </p>

      

      </div>
    </section>
  );
};

export default FightHero;