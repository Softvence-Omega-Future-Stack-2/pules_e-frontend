import Link from 'next/link';
import React from 'react';


const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: `url('/img/heroImg.svg')` }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1550px] px-6 text-center text-white">
        <h1 className="text-4xl md:text-6xl lg:text-[90px]   font-bold leading-tight lg:leading-[90px] mb-6">
          Fight the Number
        </h1>
        
        <p className="text-secondaryColor text-xl md:text-2xl max-w-md mx-auto font-semibold leading-6 md:leading-8 mb-6  ">
        Refuse to Let a Single Number Define You.
Reclaim Your Body's Rhythm. 
        </p>

        <p className=" text-xl md:text-2xl text-[#FFFFFFE5] font-normal px-10 md:px-20 leading-6 md:leading-9 mb-8 opacity-90">
        Tired of the scale, the cycle charts, and the metrics dictating your worth? Numera, your AI companion, fights back—with unwavering empathy, cycle-aware insights, and shame-free guidance that honors exactly where your energy stands today.
        </p>

        {/* Form Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full max-w-2xl mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="w-full md:flex-1 px-6 py-4 rounded-md bg-white text-gray-900  border border-borderColor focus:outline-none placeholder:text-gray-400"
          />
            <Link href="/waitlist">
          <button className="w-full md:w-auto  rounded-md font-bold text-white transition-all 
           bg-gradient-to-b from-[#C9A96E] to-[#57431F] px-8 py-4 hover:brightness-110 shadow-lg active:scale-95 whitespace-nowrap cursor-pointer">
            Join the Waitlist
          </button>
          </Link>
        </div>

        <p className="mt-8 text-sm text-white font-normal leading-5 ">
          Be first for beta access + exclusive launch perks. Launching 2026.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;