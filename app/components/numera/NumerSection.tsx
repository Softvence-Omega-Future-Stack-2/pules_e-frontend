import React from 'react';
import { Sparkles } from 'lucide-react';

const NumeraSection = () => {
  return (
    <section className="py-24 bg-[#0a192f] px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Content Area */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="flex items-center gap-3">
              <Sparkles className="text-[#c5a059]" size={28} />
              <h2 className="text-white text-5xl md:text-6xl leading-10 md:leading-20 font-bold">
                Numera
              </h2>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-[#c5a059] text-2xl md:text-3xl font-semibold leading-5 md:leading-10">
                Your AI Coach Who Gets It
              </h3>
              <p className="text-[#FFFFFFCC] text-lg md:text-xl  leading-relaxed max-w-xl">
                Not another chatbot spewing generic wellness tips. Numera is your compassionate companion who understands cycle phases, honors your energy levels, and fights the numbers with you—not against you.
              </p>
            </div>
          </div>

          {/* Right Chat Interface Area */}
          <div className="relative order-1 lg:order-2">
            {/* Outer Glow Effect */}
            <div className="absolute -inset-4 bg-[#c5a059]/10 rounded-[2rem] blur-2xl" />
            
            <div className="relative bg-[#162a45] border border-white/10 p-6 md:p-10 rounded-[2rem] shadow-2xl">
              {/* AI Message Bubble */}
              <div className="bg-[#0a192f] p-6 rounded-2xl rounded-tl-none border border-white/5 rounded-xl mb-6">
                <p className="text-[#c5a059] text-base font-bold uppercase tracking-widest mb-3">Numera:</p>
                <p className="text-[#FFFFFFE5] italic text-base font-normal  leading-relaxed">
                  "Hey fighter, how's your luteal phase treating you today? I noticed you logged low energy—that's completely normal and nothing to fight against. Let's talk about what support would feel good right now."
                </p>
              </div>

              {/* User Input Mockup */}
              <div className="flex justify-end">
                <div className="bg-[#c5a059] px-6 py-3 rounded-2xl rounded-br-none shadow-lg">
                  <p className="text-[#0a192f] font-normal cursor-pointer text-base">
                    I'm so tired and feel guilty for not working out...
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

export default NumeraSection;