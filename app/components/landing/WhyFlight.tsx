"use client";

import React from "react";
import Image from "next/image";


const WhyFight: React.FC = () => {
  return (
    <section className="py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
        
        {/* Image Section */}
        <div className="w-full lg:w-1/2 relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
            <img
              src="/img/fight.svg"
              alt="Fight Sisters" 
              className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
          
            />
          </div>

          {/* Subtle glow effect behind image */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-amber-100/50 blur-3xl rounded-full" />
        </div>

        {/* Content Section */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
          <h2 className="text-[#001F3F] text-4xl md:text-5xl font-bold mb-8 leading-tight md:leading-12">
            Why Fight the Number?
          </h2>
          
          <div className="space-y-6 text-[#374151] text-base md:text-lg font-normal leading-relaxed max-w-xl">
            <p>
              Current femtech tracks and reports—but we fight back. Our 
              hyper-personalized tool covers hormonal health, fertility, pelvic 
              floor, menopause, mental health, and more.
            </p>
            
            <p>
              Join a community of Fight Sisters turning challenges into triumphs. 
              We believe your numbers don't define you—together, we transform 
              anxiety into empowerment and data into action.
            </p>
          </div>

          <button className="mt-10 px-10 py-4 rounded-md font-bold text-white shadow-xl transition-all
            bg-gradient-to-b from-[#C9A96E] to-[#57431F] hover:brightness-110 active:scale-95 cursor-pointer">
            Start Your Fight
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhyFight;