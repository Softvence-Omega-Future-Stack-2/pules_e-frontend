import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Sign Up",
      description: "Create your account and tell us about your health journey, goals, and where you are in your cycle."
    },
    {
      number: 2,
      title: "Log Wins & BBT",
      description: "Track your Non-Scale Victories, basal body temperature, and how you're actually feeling—not just numbers."
    },
    {
      number: 3,
      title: "Get Numera Insights",
      description: "Receive compassionate, cycle-aware guidance from your AI coach who understands hormonal shifts."
    },
    {
      number: 4,
      title: "Join Arena",
      description: "Connect with Fight Sisters in private circles, share wins, and build your support network."
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-primaryColor leading-6 md:leading-12 font-lora text-center mb-16">
          How It Works
        </h2>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {steps.map((step) => (
            <div key={step.number} className="flex flex-col items-center text-center group">
              
              {/* Golden Gradient Number Circle */}
              <div style={{background: 'linear-gradient(180deg, #C9A96E 0%, #57431F 100%)'}} className="w-20 h-20 rounded-full  flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-6 transition-transform group-hover:scale-110 duration-300">
                {step.number}
              </div>

              {/* Step Title */}
              <h3 className="text-xl md:text-2xl leading-8 font-bold text-primaryColor font-lora mb-4">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-gray-500 leading-relaxed max-w-[250px] font-normal text-sm md:text-base leading-4">
                {step.description}
              </p>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;