
import React from 'react';
import Image from 'next/image';

const PatternsSection: React.FC = () => {
  return (
    <section className="bg-[#F8F1E9] py-16 px-6 md:py-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Image Container */}
        <div className="relative aspect-square w-full max-w-md mx-auto lg:max-w-none group">
          <div className="absolute -inset-1 bg-slate-300/20 rounded-2xl blur-sm transition duration-1000 group-hover:duration-200" />
          <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src="/img/feature1.svg"
              alt="Portrait showing patterns"
              fill
              className="object-cover hover:scale-110 transition-transform duration-500 "
              priority
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-6 lg:pl-12">
          <h2 className="text-2xl  md:text-5xl lg:text-6xl font-bold leading-8 md:leading-17 text-primaryColor">
           Numbers don't tell the whole story. Patterns do.
           
          </h2>

          <div className="space-y-6 max-w-lg">
            <p className="text-[#374151] text-lg sm:text-xl font-normal  leading-relaxed md:leading-8">
              Fight the Number uses AI to interpret your health data 
              and reveal the patterns behind it.
            </p>
            
            <p className="text-[#374151] text-lg sm:text-xl font-normal  leading-relaxed md:leading-8">
              Instead of guessing what a number means, Numera 
              explains what your body may be experiencing and what 
              to do next.
            </p>
          </div>

      
        </div>

      </div>
    </section>
  );
};

export default PatternsSection;