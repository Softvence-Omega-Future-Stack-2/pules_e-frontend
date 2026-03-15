import React from 'react';

const SupportBanner = () => {
  return (
    <section className="bg-[#0a192f] py-24 px-6 text-center">
      <div className="max-w-4xl mx-auto space-y-6">
        
        {/* Main Heading */}
        <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-10 md:leading-20 ">
          We're Here to Help
        </h2>

        {/* Subtext */}
        <p className="text-[#FFFFFFCC] text-xl md:text-2xl font-normal o leading-relaxed md:leading-9">
          Find answers, get support, and learn more about Fight the Number.
        </p>

    

      </div>
    </section>
  );
};

export default SupportBanner;