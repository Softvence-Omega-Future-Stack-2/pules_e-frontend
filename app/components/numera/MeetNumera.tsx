import React from 'react';

const MeetNumera = () => {
  const features = [
    {
      title: "Cycle-Smart Guidance",
      desc: "Numera knows the difference between follicular phase energy and luteal phase fatigue. She adjusts her advice based on where you are in your cycle, not some one-size-fits-all plan."
    },
    {
      title: "Culturally Aware",
      desc: "Your wellness journey isn't generic—neither is Numera. She understands cultural contexts, food traditions, and that 'just drink water' isn't always the answer."
    },
    {
      title: "Compassionate, Never Pushy",
      desc: "Skipped tracking for a week? Numera welcomes you back without guilt. Ate 'off plan'? She reminds you there's no such thing as failure here."
    },
    {
      title: "Evidence-Based Insights",
      desc: "Every recommendation is grounded in hormonal science, women's health research, and real experiences from thousands of Fight Sisters."
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header with Decorative Badge */}
        <div className="text-center mb-6 relative">
         
          <h2 className="text-4xl md:text-6xl font-lora font-bold leading-6 md:leading-[4rem] mb-4">
            Meet Numera
          </h2>
          <p className="text-[#6B7280] text-xl font-lora md:text-2xl font-semibold leading-8 mb-6">
            Your AI coach who translates data into compassion, understands your cycle like a sister, and never judges your choices.
          </p>
        </div>

        {/* Central Character Image */}
        <div className="flex justify-center mb-6">
          <div className="relative h-[300px] w-[300px]  aspect-square rounded-[2rem] overflow-hidden shadow-2xl border-4 border-[#f8f3ed]">
            <img 
              src="/img/feature1.svg" 
              alt="Numera AI" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="bg-[#f8f3ed] p-8 md:p-10 rounded-xl hover:shadow-md transition-shadow"
            >
              <h3 className="text-primaryColor text-xl md:text-2xl font-medium font-lora leading-7 mb-6">
                {feature.title}
              </h3>
              <p className="text-[#6B7280] text-base leading-relaxed font-normal">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetNumera;