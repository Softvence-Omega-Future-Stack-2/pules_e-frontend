// "use client";

// import React from "react";

// import { Link } from "lucide-react";


// const WhyFight: React.FC = () => {
//   return (
//     <section className="py-20">
//       <div className="flex flex-col lg:flex-row items-center gap-12 xl:gap-24">
        
//         {/* Image Section */}
//         <div className="w-full lg:w-1/2 relative">
//           <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-transform duration-500">
//             <img
//               src="/img/fight.svg"
//               alt="Fight Sisters" 
//               className="w-full h-auto object-cover aspect-[4/3] lg:aspect-auto"
          
//             />
//           </div>

//           {/* Subtle glow effect behind image */}
//           <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-amber-100/50 blur-3xl rounded-full" />
//         </div>

//         {/* Content Section */}
//         <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
//           <h2 className="text-[#001F3F] text-4xl md:text-5xl font-bold mb-8 font-lora leading-tight md:leading-12">
//             Why Fight the Number?
//           </h2>
          
//           <div className="space-y-6 text-[#374151] text-base md:text-lg font-lora font-normal leading-relaxed max-w-xl">
//             <p>
//               Current femtech tracks and reports—but we fight back. Our 
//               hyper-personalized tool covers hormonal health, fertility, pelvic 
//               floor, menopause, mental health, and more.
//             </p>
            
//             <p>
//               Join a community of Fight Sisters turning challenges into triumphs. 
//               We believe your numbers don't define you—together, we transform 
//               anxiety into empowerment and data into action.
//             </p>
//           </div>
         
//           <Link href="/waitlist">
//           <button className="mt-10 px-10 py-4 rounded-md font-lora font-bold text-white shadow-xl transition-all
//             bg-gradient-to-b from-[#C9A96E] to-[#57431F] hover:brightness-110 active:scale-95 cursor-pointer">
//             Start Your Fight
//           </button>
//           </Link>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default WhyFight;




import Image from 'next/image';
import React from 'react';


const ScienceSection: React.FC = () => {
  const points = [
    {
      title: "Evidence-Based Cycle Science",
      desc: "Numera analyzes patterns based on reproductive health research and behavioral data science. Every insight is grounded in scientific literature."
    },
    {
      title: "Advisory Experts",
      desc: "Our team includes reproductive health specialists, endocrinologists, and women's health researchers who guide our AI development."
    },
    {
      title: "Transparent AI",
      desc: "Our AI safety model ensures every recommendation is explainable and based on your unique health patterns—no black box algorithms."
    }
  ];

  return (
    <section className="bg-[#f5f0e8] py-10 px-6 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Title: Centered on mobile, left-aligned on desktop if preferred, but centered here to match image */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primaryColor leading-10 md:leading-24 text-center mb-16 md:mb-24">
          Built With Science in Mind
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-stretch">
          
          {/* Left: Scientific Points */}
          <div className="order-2 lg:order-1 space-y-8">
            {points.map((item, index) => (
              <div key={index} className="space-y-3">
                <h3 className="text-xl md:text-2xl  font-bold leading-6 md:leading-8 text-[#001a2c] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#6B7280] leading-relaxed font-normal text-base md:text-lg ">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Scientific Imagery */}
<div className="order-1 lg:order-2 w-full flex justify-center lg:justify-end">
  <div className="relative w-full h-full lg:min-h-[110%] lg:-my-12 overflow-hidden rounded-2xl shadow-2xl">
    <Image
      src="/img/fight.svg" 
      alt="Science and Research Team"
      fill
      className="object-cover"
    />
    <div className="absolute inset-0 bg-amber-900/5 mix-blend-multiply" />
  </div>
</div>

        </div>
      </div>
    </section>
  );
};

export default ScienceSection;