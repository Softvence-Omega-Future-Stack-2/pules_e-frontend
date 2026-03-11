"use client";

import React from 'react';

interface FeatureCard {
  title: string;
  description: string;
  image: string;
}

// Move all SVGs to /public/img/ folder and reference them with string paths
const features: FeatureCard[] = [
  {
    title: "Meet Numera: Your AI Coach",
    description: "Numera translates raw data into compassionate, stage-specific fight plans. Not just 'drink more water'—culturally aware, actionable steps tailored to you.",
    image: '/img/feature1.svg'
  },
  {
    title: "Reframing the Fight",
    description: "'Fight the Number' with 'Fight Sister' tone: Your numbers don't define you—we fight them together, turning anxiety into empowerment.",
    image: '/img/feature2.svg'
  },
  {
    title: "Life-Stage Companions",
    description: "Dedicated Fight Sisters for fertility, menopause, pelvic floor, and more. Tailored tones, visuals, and tools for every chapter of your life.",
    image: '/img/feature3.svg'
  },
  {
    title: "Mental + Hormonal Harmony",
    description: "Link mood crashes to cycle shifts and tackle both with integrated support.",
    image: '/img/feature4.svg'
  },
  {
    title: "Sisterhood Community",
    description: "Accountability matching, private groups, and local resource finders to build your network of Fight Sisters.",
    image: '/img/feature5.svg'
  },
  {
    title: "Non-Scale Victories",
    description: "Track energy, mood stability, confidence—not just cycles or outcomes. Celebrate every win.",
    image: '/img/feature6.svg'
  }
];

const EmpoweringFeatures: React.FC = () => {
  return (
    <section className="py-20">
      <div>
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-[#001F3F] text-4xl md:text-5xl lg:text-[64px] font-lora font-bold mb-6">
            Empowering Features
          </h2>
          <p className="text-[#6B7280] text-lg md:text-xl font-lora font-normal">
            Everything you need to take control of your health journey
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative group h-[400px] font-lora overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
                index === 4 ? 'lg:col-start-2' : index === 5 ? 'lg:col-start-3' : ''
              }`}
            >
              {/* Card Image */}
              <div
                className="absolute inset-0 bg-cover font-lora bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${feature.image})` }}
              >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Text Content Area */}
              <div className="absolute bottom-0 left-0  w-full p-6 border-t border-white/10 min-h-[140px]">
                <h3 className="text-[#F8F1E9] font-lora font-lora font-bold text-lg md:text-xl mb-2">
                  {feature.title}
                </h3>
                <p className="text-[#F8F1E9] text-sm font-lora font-normal opacity-90">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmpoweringFeatures;