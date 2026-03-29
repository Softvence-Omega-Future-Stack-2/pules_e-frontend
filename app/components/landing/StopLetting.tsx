"use client"


import React from 'react';

const StopLetting: React.FC = () => {
  return (
    <section className="bg-primaryColor text-white py-10 md:py-24 px-6 ">
      <div className="max-w-5xl mx-auto text-center space-y-12">
        
        {/* Main Headline Group */}
        <div className="space-y-4">
          <h2 className="text-4xl md:text-6xl max-w-4xl leading-10 md:leading-24 font-bold text-white tracking-tight">
            Stop Letting Numbers Define You.
          </h2>
          <h3 className="text-3xl md:text-6xl eading-10 md:leading-24 font-bold text-secondaryColor">
            Start Understanding Your Body.
          </h3>
        </div>

        {/* Subtext */}
        <p className="text-[#FFFFFFE5] text-xl md:text-2xl font-normal max-w-2xl mx-auto font-normal">
          Be among the first to experience Numera and take control of your health journey.
        </p>

        {/* Responsive Form */}
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="w-full px-6 py-4 bg-[#FFFFFFF2] border border-[#FEE685] text-[#001a2c] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c5a367] placeholder:text-slate-400 transition-all"
            required
          />
          <button
            type="submit"
            className="w-full sm:w-auto whitespace-nowrap px-8 py-4 bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] cursor-pointer  text-white font-serif font-semibold rounded-lg shadow-lg hover:brightness-110 transition-all active:scale-95"
          >
            Start Tracking Today
          </button>
        </form>

        {/* Social Proof / Footer Note */}
        <p className="text-sm text-[#FFFFFFB2] font-normal leading-5 tracking-wide">
          Join 10,000+ women on the waitlist. Launching 2026.
        </p>
      </div>
    </section>
  );
};

export default StopLetting;