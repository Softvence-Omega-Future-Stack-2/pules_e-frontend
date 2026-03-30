import React from 'react';
import { Calendar, User } from 'lucide-react';

const BlogHero = () => {
  return (
    <section className="py-20 bg-[#0a192f] px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-10">
          
          {/* 1. Left Content Side */}
          <div className="w-full lg:w-1/2 space-y-8 order-2 lg:order-1 text-left">
            {/* Decorative Badge */}
            <div className="flex items-center gap-2">
        
              <span className="bg-secondaryColor text-white text-sm font-bold t px-3 py-1 rounded-full border border-[#c5a059]/30">
                Featured
              </span>
            </div>

            <h2 className="text-white text-4xl md:text-5xl  font-bold leading-tight md:leading-12 mb-6">
              Understanding BBT for Cycle Awareness
            </h2>

            <p className="text-[#FFFFFFCC] text-lg md:text-xl font-normal leading-relaxed  md:leading-9 max-w-xl">
              Learn how basal body temperature tracking can help you understand your hormonal patterns and anticipate cycle shifts.
            </p>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <div className="flex items-center gap-2 text-[#FFFFFF99] text-sm font-mnormal leading-6">
                <Calendar size={16}  />
                <span>March 1, 2026</span>
              </div>
               <div className="flex items-center gap-2 text-[#FFFFFF99] text-sm font-mnormal leading-6">
                <User size={16}  />
                <span>Dr. Sarah Chen</span>
              </div>
            </div>

            {/* Premium Gold Button */}
            <div className="">
              <button className="bg-gradient-to-b font-lora text-white from-[#C9A96E] to-[#57431F] px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
                Read Article
              </button>
            </div>
          </div>

          {/* 2. Right Image Side */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative group">
              {/* Soft Outer Glow */}
              <div className="absolute -inset-4 bg-[#c5a059]/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video lg:aspect-square">
                <img 
                  src="/img/blogHeroImg.svg" 
                  alt="BBT Device Interface" 
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogHero;