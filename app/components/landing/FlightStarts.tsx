"use client";

import React from "react";

export const CheckCircleIcon: React.FC = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
      <g clipPath="url(#clip0_124_428)">
        <path
          d="M18.33 8.40784C18.714 10.2923 18.4403 12.2514 17.5546 13.9585C16.669 15.6656 15.2249 17.0175 13.4631 17.7887C11.7013 18.5599 9.72844 18.7039 7.8734 18.1965C6.01836 17.6892 4.39331 16.5612 3.26926 15.0008C2.1452 13.4403 1.59008 11.5416 1.69648 9.62141C1.80287 7.70119 2.56435 5.87548 3.85391 4.44874C5.14348 3.022 6.8832 2.08047 8.78293 1.78117C10.6827 1.48187 12.6276 1.84289 14.2934 2.80402"
          stroke="#C9A96E"
          strokeWidth="1.68157"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M7.57031 9.24827L10.0927 11.7706L18.5005 3.36279"
          stroke="#C9A96E"
          strokeWidth="1.68157"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_124_428">
          <rect width="20.1788" height="20.1788" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const FlightStarts: React.FC = () => {
  const benefits = [
    "Priority beta access to Numera",
    "Exclusive early features + community invites",
    "First look at tools that finally make women's health personal",
    "Join a movement of women reclaiming their power",
  ];

  return (
    <section className="relative min-h-[80vh] w-full flex items-center justify-center py-20 px-6 overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/path-to-your-beach-warrior-img.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172bf2] via-[#0f172be6] to-[#7b3306e6]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl w-full text-center text-white">
        <h2 className="text-4xl md:text-6xl font-bold leading-6 md:leading-[4rem] mb-4">
          Your Fight Starts Here.
        </h2>

        <p className="text-secondaryColor text-xl md:text-2xl font-semibold leading-5 mb-8">
          Don't Let Another Cycle Pass You By.
        </p>

        <p className="max-w-2xl mx-auto text-[#CAD5E2] text-base md:text-lg font-normal leading-relaxed mb-12">
          The app is in active development—powered by Numera's cutting-edge AI coaching, built with real women's input. This is more than an app. This is your declaration of sovereignty.
        </p>

        {/* Glassmorphism Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl max-w-[840px] p-8 md:p-12 shadow-2xl mx-auto">
          <h3 className="text-xl md:text-2xl font-medium leading-7 mb-6">Join the waitlist and secure:</h3>

          <ul className="flex flex-col items-start gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-3 text-left text-gray-200">
                <CheckCircleIcon />
                <span className="text-base md:text-lg font-normal leading-6">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Form */}
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full md:flex-1 px-6 py-3.5 rounded-md bg-white text-gray-900 border border-borderColor focus:outline-none placeholder:text-gray-400"
            />
            <button className="w-full md:w-auto px-10 py-4 rounded-lg font-bold text-white transition-all bg-gradient-to-b from-[#C9A96E] to-[#57431F] hover:brightness-110 active:scale-95 cursor-pointer">
              Secure Your Spot
            </button>
          </div>
        </div>

        <p className="mt-12 text-sm font-normal text-white leading-5">
          Made with grit, empathy, and zero BS. Launching 2026.
        </p>
      </div>
    </section>
  );
};

export default FlightStarts;