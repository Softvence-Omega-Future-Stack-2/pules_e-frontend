
import React from 'react';

const ReducesSection: React.FC = () => {
  const points = [
    "The number on the scale",
    "The number of days in your cycle",
    "The number that predicts fertility",
    "The number that says you're running out of time",
  ];

  return (
    <section className="bg-[#001F3F] text-white py-24 px-6  flex items-center justify-center">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl  text-secondaryColor font-bold mb-16 leading-tight">
          The world reduces women to  numbers.
        </h2>

        {/* Responsive Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6 text-left max-w-2xl mx-auto mb-16">
          {points.map((text, index) => (
            <div key={index} className="flex items-start gap-3">
              <span className="text-secondaryColor mt-1.5">•</span>
              <p className="text-lg md:text-xl font-normal tracking-wide text-white">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Conclusion Text */}
        <div className="space-y-4">
          <p className="text-xl md:text-2xl  font-medium text-white">
            But those numbers alone don't explain your body.
          </p>
          <p className="text-white text-lg font-normal">
            They create stress, confusion, and pressure.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ReducesSection;