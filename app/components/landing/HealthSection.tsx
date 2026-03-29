
import React from 'react';

const HealthHero: React.FC = () => {
  return (
    <section className="bg-white py-10 px-6 md:py-22 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        
        {/* Main Headline Group */}
        <div className="space-y-2">
          <h2 className="text-[2.2rem] md:text-5xl lg:text-6xl  font-bold text-primaryColor tracking-tight leading-tight lg:leading-20">
            Your Health Is Not a Single Number.
          </h2>
          <h3 className="text-[2rem] md:text-5xl lg:text-6xl font-bold text-secondaryColor tracking-tight leading-tight lg:leading-20 ">
            It's a Pattern.
          </h3>
        </div>

        {/* Description Paragraph */}
        <div className="max-w-4xl mx-auto pt-4">
          <p className="text-[#6B7280] text-lg md:text-xl leading-relaxed font-normal leading-8 ">
            Fight the Number helps women understand their bodies by interpreting 
            the patterns behind their health data. Our AI coach, Numera, 
            connects the dots between cycle signals, symptoms, and lifestyle 
            factors to reveal meaningful insights.
          </p>
        </div>

      </div>
    </section>
  );
};

export default HealthHero;