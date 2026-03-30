import React from 'react';
import { Heart, Shield, Zap } from 'lucide-react';

const VitalityRebellion = () => {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="flex-1 space-y-8">
          <h2 className="text-[#0a192f] text-4xl md:text-5xl  font-bold leading-tight md:leading-18">
            What is the Vitality Rebellion?
          </h2>
          
          <div className="space-y-6 text-[#6B7280] text-base md:text-lg leading-relaxed">
            <p>
              The Vitality Rebellion is our answer to anti-aging culture that obsesses over appearances. We focus on functional vitality—the energy, recovery, hormonal balance, and strength that actually matter for living a vibrant life.
            </p>
            <p>
              Whether you're fighting perimenopause fatigue at 40, slower recovery at 35, or energy dips during luteal phases, we validate your battle and give you tools to win—without vanity metrics or shame.
            </p>
          </div>

          {/* Tracking List Card */}
          <div className="bg-[#F8F1E9] p-4 md:p-8 rounded-2xl border-l-4 border-[#c5a059]">
            <h4 className="text-[#0a192f] text-lg md:text-xl leadign-7 font-bold mb-4">What We Track for Vitality</h4>
            <ul className="space-y-3 text-[#6B7280] font-normal leading-6">
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <strong>Energy levels</strong> across your cycle phases
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <strong>Recovery time</strong> after workouts or stress
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <strong>Mobility & flexibility</strong> wins
              </li>
              <li className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059]"></span>
                <strong>Sleep quality</strong> and hormonal patterns (via BBT)
              </li>
            </ul>
          </div>
        </div>

        {/* Right Featured Card */}
        <div className="w-full lg:w-2/5">
          <div style={{background:'linear-gradient(135deg, #C9A96E 0%, #C0A168 7.14%, #B89962 14.29%, #AF925C 21.43%, #A78A56 28.57%, #9E8350 35.71%, #967B4B 42.86%, #8E7445 50%, #866D3F 57.14%, #7E663A 64.29%, #765E34 71.43%, #6E572F 78.57%, #66512A 85.71%, #5F4A24 92.86%, #57431F 100%)'}} className=" p-8 md:p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
            {/* Background Texture/glow effect can go here */}
            <h3 className="text-2xl md:text-3xl font-bold leading-7 mb-10">
              Why Vitality &gt; Anti-Aging
            </h3>

            <div className="space-y-5">
              {/* Feature 1 */}
              <div className="flex gap-4">
                <Heart className="shrink-0 text-[#f8f3ed]" size={28} />
                <div>
                  <h5 className="font-bold text-lg mb-1">Function Over Vanity</h5>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    We don't track wrinkles or "biological age." We track how you feel, move, and thrive.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4">
                <Shield className="shrink-0 text-[#f8f3ed]" size={28} />
                <div>
                  <h5 className="font-bold text-lg mb-1">Hormone-Honoring</h5>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Your BBT data ties directly to vitality—understanding luteal fatigue isn't laziness, it's biology.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4">
                <Zap className="shrink-0 text-[#f8f3ed]" size={28} />
                <div>
                  <h5 className="font-bold text-lg mb-1">Empowerment, Not Pressure</h5>
                  <p className="text-gray-200 text-sm leading-relaxed">
                    Celebrate strength gains and recovery wins—not chasing youth, but honoring wisdom.
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

export default VitalityRebellion;