import React from 'react';

const OurStory = () => {
  const storyData = [
    {
      title: "Origin",
      content: "Fight the Number was born from a simple truth: women's health shouldn't be reduced to numbers on a scale or lines on a chart. We're tired of diet culture, tired of shame-based wellness, and tired of apps that make you feel worse about your body."
    },
    {
      title: "Philosophy",
      content: "We believe in cycle-aware care, compassionate AI guidance, and community support over competition. Your luteal phase fatigue isn't laziness. Your perimenopause weight shift isn't failure. Your body is doing exactly what it's designed to do—and we're here to help you understand, honor, and fight for it."
    },
    {
      title: "Vision",
      content: "By 2030, we envision a world where women track their Victories as naturally as checking their phone. Where Numera AI coaches millions through hormonal transitions with empathy and evidence. Where Fight Sisters worldwide refuse to let numbers define their worth."
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  text-primaryColor leading-6 md:leading-12 font-lora text-center mb-6 ">
            Our Story
          </h2>
        </div>

        {/* Story Blocks */}
        <div className="space-y-12">
          {storyData.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">
            
       {/* Vertical Accent Line */}
<div className="absolute left-0 top-0 bottom-0 w-[3.5px] bg-[#C9A96E] rounded-[12px]" />
              
              <div className="space-y-4">
                <h3 className="text-primaryColor leading-7 md:leading-11 text-2xl md:text-3xl font-lora font-bold mb-4">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] text-base md:text-lg leading-relaxed font-normal">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurStory;