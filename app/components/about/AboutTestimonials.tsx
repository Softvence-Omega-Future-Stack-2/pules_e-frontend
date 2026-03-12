import React from 'react';

const AboutTestimonials = () => {
  const reviews = [
    {
      text: "For the first time, I'm tracking something other than weight—and it's transforming everything.",
      name: "Sarah M.",
      role: "Beta Tester"
    },
    {
      text: "Numera gets my luteal phase struggles. No judgment, just real support when I need it most.",
      name: "Priya K.",
      role: "Early Adopter"
    },
    {
      text: "The Fight Sister community is unlike anything I've experienced. We lift each other up instead of competing.",
      name: "Jessica T.",
      role: "Community Member"
    }
  ];

  return (
    <section className="py-24 bg-[#0a192f] px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  text-white leading-6 md:leading-12 font-lora text-center mb-6 ">
            What Fight Sisters Are Saying
          </h2>
        </div>

        {/* Testimonial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-[#162a45] p-10 rounded-2xl border border-[#C9A96E33] flex flex-col justify-between h-full hover:border-[#c5a059]/30 transition-all group"
            >
              {/* Quote Text */}
              <p className="text-white text-lg italic leading-relaxed mb-6 font-normal">
                "{item.text}"
              </p>
              
              {/* Divider & Author */}
              <div className="space-y-4">
                <div className="w-full h-px bg-white/10 group-hover:bg-[#c5a059]/30 transition-colors" />
                <div className="space-y-1">
                  <h4 className="text-[#c5a059] font-bold text-base leading-6">
                    {item.name}
                  </h4>
                  <p className="text-[#FFFFFFB2] text-sm font-normal ">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AboutTestimonials;