
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const JoinMovement: React.FC = () => {
  return (
    <section className="bg-white py-10 px-6 md:py-22">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
        {/* Left Side: Community Image */}
        <div className="relative aspect-square w-full max-w-lg mx-auto lg:max-w-none">
          <div className="relative h-full w-full overflow-hidden rounded-3xl shadow-xl">
            <Image
              src="/img/joinMovmentImg.svg" // Replace with your image
              alt="Community of women"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col space-y-8 text-left">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl  font-bold text-primaryColor leading-10 md:leading-20">
              Join the Movement
            </h2>
            <p className="text-[#6B7280] text-lg sm:text-xl  font-normal leading-8 tracking-wide">
              Fight the Number is more than an app.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl md:text-2xl  font-semibold  text-primaryColor leading-snug md:leading-7">
              It’s a new way of thinking about women's health — <br className="hidden md:block" />
              where understanding replaces judgment.
            </h3>
            
            <p className="text-[#6B7280] text-lg sm:text-xl  font-normal leading-8 max-w-xl">
              Join thousands of Fight Sisters who refuse to let numbers define 
              their worth. Together, we’re building a community that celebrates 
              every woman's unique journey to wellness.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
             <Link href="/site/community">
            <button className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] text-white px-2 xl:px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
              Join the Community
            </button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default JoinMovement;