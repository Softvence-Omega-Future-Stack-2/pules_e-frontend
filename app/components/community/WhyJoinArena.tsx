import React from 'react';
import { Shield, Users, Trophy, MessageSquare, Heart, MapPin } from 'lucide-react';

const WhyJoinArena = () => {
  const benefits = [
    {
      icon: <Shield className="text-[#c5a059]" size={20} />,
      title: "Safe Space",
      desc: "Share your struggles, wins, and questions without judgment. Anonymous options available for sensitive topics."
    },
    {
      icon: <Users className="text-[#c5a059]" size={20} />,
      title: "Phase Circles",
      desc: "Join life-stage specific groups: Fertility, Perimenopause, PCOS, and more. Connect with sisters who truly understand."
    },
    {
      icon: <Trophy className="text-[#c5a059]" size={20} />,
      title: "Wins Sharing",
      desc: "Celebrate Non-Scale Victories together. Your energy boost is just as worthy of celebration as anyone else's PR."
    },
    {
      icon: <MessageSquare className="text-[#c5a059]" size={20} />,
      title: "Real-Time Support",
      desc: "Struggling in luteal phase? Post to your circle and get instant support from sisters who've been there."
    },
    {
      icon: <Heart className="text-[#c5a059]" size={20} />,
      title: "Accountability Matching",
      desc: "Find your Fight Sister accountability partner based on goals, life stage, and communication style."
    },
    {
      icon: <MapPin className="text-[#c5a059]" size={20} />,
      title: "Local Connections",
      desc: "Find cycle-friendly providers, gyms, and therapists in your area—recommended by real Fight Sisters."
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold  text-primaryColor leading-6 md:leading-12 font-lora text-center mb-6 ">
            Why Join the Arena
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-8">
          {benefits.map((item, idx) => (
            <div 
              key={idx} 
              className="relative bg-[#F8F1E9] p-4 md:p-8 rounded-lg border border-transparent hover:border-[#c5a059]/30 transition-all duration-300 group pt-12"
            >
              {/* Icon Circle */}
              <div className="w-12 h-12 absolute -top-5  bg-[#0a192f] rounded-full flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform">
                {item.icon}
              </div>
              
              <h3 className="text-primaryColor font-lora font-bold text-2xl md:text-3xl my-6 ">
                {item.title}
              </h3>
              
              <p className="text-[#6B7280] text-xl font-lora md:text-2xl font-normal leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyJoinArena;