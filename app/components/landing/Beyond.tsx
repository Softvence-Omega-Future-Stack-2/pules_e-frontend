"use client";

import React from "react";
import { Smile, Zap, Moon, Battery } from "lucide-react";

interface MetricCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const MetricCard: React.FC<MetricCardProps> = ({ title, description, icon }) => (
  <div className="relative overflow-visible bg-white p-3 md:p-8 lg:p-10 rounded-xl shadow-sm border border-gray-100 flex flex-col items-start pt-12">
    {/* Icon Badge */}
    <div className="absolute -top-5 left-8 bg-[#0a192f] text-[#C9A96E] p-3 rounded-full shadow-lg flex items-center justify-center">
      {icon}
    </div>

    <h3 className="text-primaryColor font-bold text-2xl md:text-3xl mb-6">
      {title}
    </h3>
    <p className="text-[#6B7280] text-xl md:text-2xl font-normal leading-relaxed">
      {description}
    </p>
  </div>
);

const BeyondTheScale: React.FC = () => {
  const metrics = [
    {
      title: "Luminous Days",
      description: "Sustained vitality that carries you through",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
        >
          <path
            d="M14.8164 2.46948V12.3473"
            stroke="#C9A96E"
            strokeWidth="2.46946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.08984 13.4955L7.83081 15.2365"
            stroke="#C9A96E"
            strokeWidth="2.46946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.47266 22.2251H4.94211"
            stroke="#C9A96E"
            strokeWidth="2.46946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M24.6992 22.2251H27.1687"
            stroke="#C9A96E"
            strokeWidth="2.46946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.5496 13.4956L21.8086 15.2366"
            stroke="#C9A96E"
            strokeWidth="2.46946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M27.1672 27.1641H2.47266"
            stroke="#C9A96E"
            strokeWidth="2.46946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9.87891 7.4084L14.8178 2.46948L19.7567 7.4084"
            stroke="#C9A96E"
            strokeWidth="2.46946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M19.7567 22.225C19.7567 20.9152 19.2364 19.6589 18.3102 18.7327C17.3839 17.8065 16.1277 17.2861 14.8178 17.2861C13.5079 17.2861 12.2517 17.8065 11.3255 18.7327C10.3993 19.6589 9.87891 20.9152 9.87891 22.225"
            stroke="#C9A96E"
            strokeWidth="2.46946"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    { title: "Emotional Steadiness", description: "Moments where you feel centered and calm", icon: <Smile size={30} /> },
    { title: "Quiet Resilience", description: "Strength that grows from within, not forced", icon: <Zap size={30} /> },
    { title: "Restful Sleep", description: "Waking refreshed, body honored", icon: <Moon size={30} /> },
    { title: "Energy Alignment", description: "Working with your rhythm, not against it", icon: <Battery size={30} /> },
    {
      title: "Cycle Harmony",
      description: "Understanding and embracing your flow",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
        >
          <path
            d="M2.33203 6.99682C3.03171 7.57989 3.73139 8.16295 5.24736 8.16295C8.1627 8.16295 8.1627 5.83069 11.078 5.83069C14.11 5.83069 13.8767 8.16295 16.9087 8.16295C19.824 8.16295 19.824 5.83069 22.7394 5.83069C24.2553 5.83069 24.955 6.41375 25.6547 6.99682"
            stroke="#C9A96E"
            strokeWidth="2.33227"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.33203 13.9936C3.03171 14.5767 3.73139 15.1598 5.24736 15.1598C8.1627 15.1598 8.1627 12.8275 11.078 12.8275C14.11 12.8275 13.8767 15.1598 16.9087 15.1598C19.824 15.1598 19.824 12.8275 22.7394 12.8275C24.2553 12.8275 24.955 13.4106 25.6547 13.9936"
            stroke="#C9A96E"
            strokeWidth="2.33227"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M2.33203 20.9904C3.03171 21.5734 3.73139 22.1565 5.24736 22.1565C8.1627 22.1565 8.1627 19.8242 11.078 19.8242C14.11 19.8242 13.8767 22.1565 16.9087 22.1565C19.824 22.1565 19.824 19.8242 22.7394 19.8242C24.2553 19.8242 24.955 20.4073 25.6547 20.9904"
            stroke="#C9A96E"
            strokeWidth="2.33227"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24">
      <div className="max-w-[1287px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-[#001F3F] text-4xl md:text-5xl lg:text-[64px] font-serif font-bold mb-6">
            Beyond the Scale
          </h2>
          <p className="text-[#6B7280] text-lg md:text-xl font-normal px-3 md:px-10 leading-5">
            "We measure what truly matters. Your victories are not found in numbers—they're felt in your bones, seen in your stride, heard in the quiet affirmations you whisper to yourself."
          </p>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {metrics.map((metric, index) => (
            <MetricCard key={index} {...metric} />
          ))}
        </div>

        {/* Quote Footer */}
        <div className="mt-16 text-center">
          <p className="text-[#0a192f] text-lg md:text-2xl font-normal font-serif italic max-w-3xl mx-auto leading-relaxed md:leading-10">
            "I no longer allow one number to silence my strength. I have chosen to fight for how alive I feel, not how I weigh."
          </p>
          <span className="block mt-4 text-secondaryColor text-base md:text-lg font-bold leading-7">
            — This could be you
          </span>
        </div>
      </div>
    </section>
  );
};

export default BeyondTheScale;