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
    description: "Your compassionate AI companion translates raw data into actionable, culturally aware insights. Numera doesn't just tell you to 'drink more water'—she understands your luteal phase fatigue and offers real support.",
    image: '/img/feature1.svg'
  },
  {
    title: "Non-Scale Victories",
    description: "Energy levels, mood stability, confidence boosts—these are the wins that matter. Track what truly reflects your wellness, not just weight.",
    image: '/img/feature2.svg'
  },
  {
    title: "Fight Sister Community",
    description: "Join private circles for your life stage—fertility, perimenopause, pelvic floor recovery. Accountability matching and local resource finders included.",
    image: '/img/feature3.svg'
  },
  {
    title: "Mental Health Integration",
    description: "Link mood crashes to cycle shifts. Tackle hormonal and mental health together with integrated tracking and support.",
    image: '/img/feature4.svg'
  },
  {
    title: "BBT Tracker",
    description: "Track your basal body temperature to understand your cycle phases. Numera helps you see patterns and anticipate hormonal shifts before they happen.",
    image: '/img/feature7.svg'
  },
  {
    title: "Phase Challenges",
    description: "Get phase-specific challenges that work WITH your cycle. Strength training in follicular, gentle movement in luteal—your body knows best.",
    image: '/img/feature5.svg'
  },
  {
    title: "Geo-Recommendations",
    description: "Find cycle-friendly gyms, therapists, and wellness providers in your area. Real recommendations from real Fight Sisters.",
    image: '/img/feature6.svg'
  },
  {
    title: "Mobile-First Experience",
    description: "Track on-the-go with our mobile app. BBT logging at bedside, quick win entries, and Numera conversations wherever you are.",
    image: '/img/feature8.svg'
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
                index === 4 ? 'lg:col-start-1' : index === 5 ? 'lg:col-start-2' : ''
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