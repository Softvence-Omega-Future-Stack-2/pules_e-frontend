

import React from 'react';



interface FeatureCard {
  title: string;
  description: string;
  image: string;
}


const features: FeatureCard[] = [
  {
    title: "Meet Numera: Your AI Coach",
    description: "Your AI coach who translates data into compassion, understands your cycle like a sister, and never judges your choices.",
    image: '/img/feature1.svg'
  },
  {
    title: "Fitness & Strength",
    description: "Steps, calories, max lifts, VO₂—track performance without making them identity markers. Your strength isn't just a number.",
    image: '/img/feature2.svg'
  },
  {
    title: "Cycle & Fertility",
    description: "Track cycle length, ovulation, BBT, and fertility windows with AI insights that honor your hormonal journey, not just your data points.",
    image: '/img/feature3.svg'
  },
  {
    title: "Hormonal Health",
    description: "Monitor estrogen, progesterone, thyroid, and more. Understand your hormonal patterns and how they impact mood, energy, and wellness.",
    image: '/img/feature4.svg'
  },
  {
    title: "Age & Life Stages",
    description: "Sleep quality, HRV, stress scores, blood pressure—optimize your health without the pressure. Your recovery matters more than perfection.",
    image: '/img/feature5.svg'
  },
  {
    title: "Beauty & Body Image",
    description: "Track measurements and aesthetic goals mindfully. Numera helps you separate self-worth from appearance metrics and cosmetic pressures.",
    image: '/img/feature6.svg'
  },
  {
    title: "Mental Health",
    description: "Connect mood patterns to your cycle. Track anxiety, stress, and emotional well-being with compassion—not just quantification.",
    image: '/img/feature7.svg'
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




// import React from 'react';
// import img1 from '../../assets/img/feature1.svg'
// import img2 from '../../assets/img/feature2.svg'
// import img3 from '../../assets/img/feature3.svg'
// import img4 from '../../assets/img/feature4.svg'
// import img5 from '../../assets/img/feature5.svg'
// import img6 from '../../assets/img/feature6.svg'

// interface FeatureCard {
//   title: string;
//   description: string;
//   image: string;
// }

// const features: FeatureCard[] = [
//   {
//     title: "Meet Numera: Your AI Coach",
//     description: "Numera translates raw data into compassionate, stage-specific fight plans. Not just 'drink more water'—culturally aware, actionable steps tailored to you.",
//     image: img1
//   },
//   {
//     title: "Reframing the Fight",
//     description: "'Fight the Number' with 'Fight Sister' tone: Your numbers don't define you—we fight them together, turning anxiety into empowerment.",
//     image: img2
//   },
//   {
//     title: "Life-Stage Companions",
//     description: "Dedicated Fight Sisters for fertility, menopause, pelvic floor, and more. Tailored tones, visuals, and tools for every chapter of your life.",
//     image: img3
//   },
//   {
//     title: "Mental + Hormonal Harmony",
//     description: "Link mood crashes to cycle shifts and tackle both with integrated support.",
//     image: img4
//   },
//   {
//     title: "Sisterhood Community",
//     description: "Accountability matching, private groups, and local resource finders to build your network of Fight Sisters.",
//     image: img5
//   },
//   {
//     title: "Non-Scale Victories",
//     description: "Track energy, mood stability, confidence—not just cycles or outcomes. Celebrate every win.",
//     image: img6
//   }
// ];

// const EmpoweringFeatures: React.FC = () => {
//   return (
//     <section className=" py-20 ">
//       <div className="">
//         {/* Header Section */}
//         <div className="text-center mb-16">
//           <h2 className="text-[#001F3F] text-4xl md:text-5xl lg:text-[64px] font-serif font-bold leading-6 md:leading-12 mb-6">
//             Empowering Features
//           </h2>
//           <p className="text-[#6B7280] text-lg md:text-xl font-normal leading-5">
//             Everything you need to take control of your health journey
//           </p>
//         </div>

//         {/* Responsive Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {features.map((feature, index) => (
//             <div 
//               key={index}
//               className={`relative group h-[400px] overflow-hidden rounded-2xl shadow-xl transition-transform duration-300 hover:-translate-y-2 ${
//                 index === 4  ? 'lg:col-start-2 ' 
//                  : index === 5
//     ? "lg:col-start-3"
//                 : '' 
//                 // Note: The specific offset in the image can be handled via manual margin or empty grid slots
//               }`}
//             >
//               {/* Card Image */}
//               <div 
//                 className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//                 style={{ backgroundImage: `url(${feature.image})` }}
//               >
//                 {/* Dark Overlay */}
//                 <div className="absolute inset-0 bg-black/40" />
//               </div>

//               {/* Text Content Area */}
//               <div className="absolute bottom-0 left-0 w-full p-6   border-t border-white/10 min-h-[140px]">
//                 <h3 className="text-[#F8F1E9] font-serif font-bold text-lg md:text-xl leading-7 mb-2">
//                   {feature.title}
//                 </h3>
//                 <p className="text-[#F8F1E9] text-sm font-normal leading-relaxed opacity-90">
//                   {feature.description}
//                 </p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EmpoweringFeatures;