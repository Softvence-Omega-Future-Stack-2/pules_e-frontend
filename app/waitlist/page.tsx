import { PenTool, ShieldCheck, Sparkles, Users } from 'lucide-react';
import React from 'react';

const WaitlistSection = () => {
    const features = [
    { 
      title: 'Early Beta Access', 
      desc: 'Be first to try Numera before public launch',
      icon: <Sparkles className="w-4 h-4 text-white" /> 
    },
    { 
      title: 'Exclusive Perks', 
      desc: 'Lifetime discount + premium features unlocked',
      icon: <ShieldCheck className="w-4 h-4 text-white" /> 
    },
    { 
      title: 'Community Access', 
      desc: 'Join our exclusive community of early adopters',
      icon: <Users className="w-4 h-4 text-white" /> 
    },
    { 
      title: 'Shape the Product', 
      desc: "Your feedback will directly influence Numera's development",
      icon: <PenTool className="w-4 h-4 text-white" /> 
    },
  ];
  return (
    <section className="bg-[#f7f1e9] min-h-screen py-12 px-6 lg:px-24 flex items-center justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* Left Column: Text & Form */}
        <div className="space-y-8">
          <header>
            <h1 className="text-4xl md:text-5xl  font-bold leading-8 md:leading-19 text-primaryColor mb-4">
              Join the Waitlist
            </h1>
            <p className="text-[#6B7280] text-lg md:text-xl font-normal md:leading-8  leading-relaxed">
              Be among the first to experience Numera—your AI companion for 
              fighting the numbers and reclaiming your vitality.
            </p>
          </header>

          {/* Features List */}
          <ul className="space-y-4">
            {features.map((feature, i) => (
             <li key={i} className="flex gap-4 items-start">
      <div style={{background:'linear-gradient(135deg, #C9A96E 0%, #C0A168 7.69%, #B69861 15.38%, #AD905B 23.08%, #A48854 30.77%, #9B804E 38.46%, #927848 46.15%, #8A7042 53.85%, #81683C 61.54%, #786136 69.23%, #705930 76.92%, #67522A 84.62%, #5F4A25 92.31%, #57431F 100%)'}} className="w-8 h-8 rounded-full text-white flex items-center justify-center shrink-0">
        {feature.icon} {/* This now renders the actual icon */}
      </div>
      <div>
        <h4 className="font-bold text-lg sm:text-xl leading-8 text-primaryColor ">{feature.title}</h4>
        <p className="text-sm sm:text-base leading-6 font-normal text-[#62748E]">{feature.desc}</p>
      </div>
    </li>
            ))}
          </ul>

          {/* Registration Form */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-black/5 max-w-md border border-white">
            <form className="space-y-6">
              <div>
                <label className="block text-base  font-semibold leading-6 mb-2 ">Full Name *</label>
                <input 
                  type="text" 
                  placeholder="Enter your name"
                  className="w-full p-3 rounded-lg border border-[#C9A96E4D] bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondaryColor"
                />
              </div>
              <div>
                <label className="block text-base  font-semibold leading-6 mb-2 ">Email Address *</label>
                <input 
                  type="email" 
                  placeholder="your.email@example.com"
                  className="w-full p-3 rounded-lg border border-[#C9A96E4D] bg-gray-50 focus:outline-none focus:ring-1 focus:ring-secondaryColor"
                />
              </div>
              
              <div style={{background: 'linear-gradient(135deg, rgba(201, 169, 110, 0.10) 0%, rgba(87, 67, 31, 0.10) 100%)'}} 
              className=" p-4 rounded-xl text-sm font-semibol leading-5 text-gray-500 ">
                <span  className="font-bold text-primaryColor">Launching 2026.</span> By joining the waitlist, you&apos;ll receive exclusive updates and early access opportunities.
              </div>

              <button  style={{background:'linear-gradient(180deg, #C9A96E 0%, #C0A168 7.14%, #B89962 14.29%, #AF925C 21.43%, #A78A56 28.57%, #9E8350 35.71%, #967B4B 42.86%, #8E7445 50%, #866D3F 57.14%, #7E663A 64.29%, #765E34 71.43%, #6E572F 78.57%, #66512A 85.71%, #5F4A24 92.86%, #57431F 100%)'}} 
              className="w-full py-4 rounded-xl text-white font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
                Secure Your Spot
              </button>
            </form>
          </div>
          <p className="text-center text-sm text-[#62748E] font-normal leading-5 max-w-md">
            We respect your privacy. Your information will never be shared.
          </p>
        </div>

        {/* Right Column: Visuals */}
        <div className="space-y-6 h-full flex flex-col justify-center">
          {/* Main Hero Image Card */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/img/waitlistImg1.svg" 
              alt="Community Yoga" 
              className="w-full h-[500px] object-cover"
            />
            {/* Overlay Stats */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/90 backdrop-blur-md rounded-2xl p-6 flex justify-around text-center border border-white/20">
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-secondaryColor">2,500+</div>
                <div className="text-sm font-normal text-[#62748E] leading-5 ">Joined</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-secondaryColor">2026</div>
                <div className="text-sm font-normal text-[#62748E] leading-5">Launch Year</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-serif font-bold text-secondaryColor">100%</div>
                <div className="text-sm font-normal text-[#62748E] leading-5">Free Beta</div>
              </div>
            </div>
          </div>

          {/* Secondary Inset Image */}
          <div className="rounded-3xl overflow-hidden shadow-lg h-48 border-[6px] border-white/30">
            <img 
              src="/img/waitlistImg2.svg" 
              alt="Meditation" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default WaitlistSection;