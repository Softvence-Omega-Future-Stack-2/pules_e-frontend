import React from 'react';
import { Heart, Moon, Shield, Star, Sun, Zap } from 'lucide-react';

const MovemetnMedicine = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="flex-1 space-y-8">
          <h2 className="text-[#0a192f] text-4xl md:text-5xl  font-bold leading-tight md:leading-18">
           What is Movement as Medicine?
          </h2>
          
          <div className="space-y-6 text-[#6B7280] text-base md:text-lg leading-relaxed">
            <p>
             Movement as Medicine is our answer to fitness culture that obsesses over calories burned, weight lost, and "no pain, no gain." We focus on empowered movement—strength, mobility, joy, and recovery that honor your cycle and defy aging stereotypes.
            </p>
            <p>
            Whether you're fighting fitness plateaus at 38, rebuilding strength postpartum, or honoring luteal fatigue, we validate your battle and give you tools to win—with phase-specific workouts, NSV tracking, and Numera's compassionate coaching.
            </p>
          </div>

          {/* Tracking List Card */}
          <div className="bg-[#F8F1E9] p-4 md:p-8 rounded-2xl border-l-4 border-[#c5a059]">
            <h4 className="text-[#0a192f] text-lg md:text-xl leadign-7 font-bold mb-4">What We Track for Fitness</h4>
            <ul className="space-y-3 text-[#6B7280] font-normal leading-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <strong>Strength gains</strong>  (not weight lost)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <strong> Mobility & flexibility</strong> improvements
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <strong>Recovery rituals </strong> (rest as productive)
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <strong>Movement joy </strong> (yoga, dance, walks—anything that feels good)
              </li>
            </ul>
          </div>
        </div>

        {/* Right Featured Card */}
        <div className="w-full lg:w-2/5">
          <div style={{background:'linear-gradient(135deg, #C9A96E 0%, #C0A168 7.14%, #B89962 14.29%, #AF925C 21.43%, #A78A56 28.57%, #9E8350 35.71%, #967B4B 42.86%, #8E7445 50%, #866D3F 57.14%, #7E663A 64.29%, #765E34 71.43%, #6E572F 78.57%, #66512A 85.71%, #5F4A24 92.86%, #57431F 100%)'}} className=" p-8 md:p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
            {/* Background Texture/glow effect can go here */}
            <h3 className="text-2xl md:text-3xl font-bold leading-7 mb-10">
              Why Phase-Specific Fitness?
            </h3>

            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <Sun className="shrink-0 text-[#f8f3ed]" size={28} />
                <div>
                  <h5 className="font-bold text-lg mb-1">Follicular Power</h5>
                  <p className="text-gray-200 text-sm leading-relaxed">
                   High energy, rising estrogen—perfect for HIIT, strength training, and pushing limits.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
               <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
  <path d="M11.6938 18.2404C11.5888 17.8332 11.3765 17.4615 11.0791 17.1641C10.7817 16.8667 10.41 16.6545 10.0028 16.5494L2.7832 14.6877C2.66003 14.6528 2.55162 14.5786 2.47443 14.4764C2.39723 14.3743 2.35547 14.2497 2.35547 14.1217C2.35547 13.9936 2.39723 13.8691 2.47443 13.767C2.55162 13.6648 2.66003 13.5906 2.7832 13.5557L10.0028 11.6928C10.4099 11.5878 10.7815 11.3757 11.0789 11.0786C11.3762 10.7814 11.5886 10.41 11.6938 10.0029L13.5555 2.78334C13.5901 2.65968 13.6642 2.55073 13.7665 2.47313C13.8688 2.39552 13.9937 2.35352 14.1221 2.35352C14.2506 2.35352 14.3754 2.39552 14.4777 2.47313C14.58 2.55073 14.6542 2.65968 14.6888 2.78334L16.5493 10.0029C16.6543 10.4102 16.8666 10.7818 17.164 11.0792C17.4614 11.3766 17.8331 11.5889 18.2403 11.694L25.4599 13.5545C25.5841 13.5887 25.6935 13.6628 25.7716 13.7652C25.8496 13.8677 25.8918 13.9929 25.8918 14.1217C25.8918 14.2505 25.8496 14.3757 25.7716 14.4782C25.6935 14.5806 25.5841 14.6547 25.4599 14.6889L18.2403 16.5494C17.8331 16.6545 17.4614 16.8667 17.164 17.1641C16.8666 17.4615 16.6543 17.8332 16.5493 18.2404L14.6876 25.46C14.653 25.5837 14.5789 25.6926 14.4766 25.7702C14.3743 25.8479 14.2494 25.8899 14.121 25.8899C13.9926 25.8899 13.8677 25.8479 13.7654 25.7702C13.6631 25.6926 13.5889 25.5837 13.5543 25.46L11.6938 18.2404Z" stroke="white" strokeWidth="2.35358" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M23.5352 3.5293V8.23645" stroke="white" strokeWidth="2.35358" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M25.8888 5.88379H21.1816" stroke="white" strokeWidth="2.35358" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4.70703 20.0049V22.3585" stroke="white" strokeWidth="2.35358" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M5.88287 21.1816H3.5293" stroke="white" strokeWidth="2.35358" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                <div>
                  <h5 className="font-bold text-lg mb-1">Ovulatory Peak</h5>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Peak strength and endurance—go for PRs, long runs, or challenging classes.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <Moon className="shrink-0 text-[#f8f3ed]" size={28} />
                <div>
                  <h5 className="font-bold text-lg mb-1">Luteal Recovery</h5>
                  <p className="text-gray-200 text-sm leading-relaxed">
                   Progesterone slows you down—honor it with yoga, walks, stretching, or rest days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MovemetnMedicine;