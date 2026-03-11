
import { 
  Brain, 
  TrendingUp, 
  Trophy, 
  Calendar, 
  Users, 
  MapPin, 
  Heart, 
  Smartphone 
} from 'lucide-react';

const PowerfullFeatures = () => {
  const features = [
    {
      title: "Numera AI Coach",
      description: "Your compassionate AI companion translates raw data into actionable, culturally aware insights. Numera doesn't just tell you to 'drink more water'—she understands your luteal phase fatigue and offers real support.",
      icon: <Brain size={20} className="text-[#B89463]" />
    },
    {
      title: "BBT Tracker",
      description: "Track your basal body temperature to understand your cycle phases. Numera helps you see patterns and anticipate hormonal shifts before they happen.",
      icon: <TrendingUp size={20} className="text-[#B89463]" />
    },
    {
      title: "Non-Scale Victories",
      description: "Energy levels, mood stability, confidence boosts—these are the wins that matter. Track what truly reflects your wellness, not just weight.",
      icon: <Trophy size={20} className="text-[#B89463]" />
    },
    {
      title: "Phase Challenges",
      description: "Get phase-specific challenges that work WITH your cycle. Strength training in follicular, gentle movement in luteal—your body knows best.",
      icon: <Calendar size={20} className="text-[#B89463]" />
    },
    {
      title: "Fight Sister Community",
      description: "Join private circles for your life stage—fertility, perimenopause, pelvic floor recovery. Accountability matching and local resource finders included.",
      icon: <Users size={20} className="text-[#B89463]" />
    },
    {
      title: "Geo-Recommendations",
      description: "Find cycle-friendly gyms, therapists, and wellness providers in your area. Real recommendations from real Fight Sisters.",
      icon: <MapPin size={20} className="text-[#B89463]" />
    },
    {
      title: "Mental Health Integration",
      description: "Link mood crashes to cycle shifts. Tackle hormonal and mental health together with integrated tracking and support.",
      icon: <Heart size={20} className="text-[#B89463]" />
    },
    {
      title: "Mobile-First Experience",
      description: "Track on-the-go with our mobile app. BBT logging at bedside, quick win entries, and Numera conversations wherever you are.",
      icon: <Smartphone size={20} className="text-[#B89463]" />
    }
  ];

  return (
    <div className="w-full py-20">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-primaryColor leading-6 md:leading-12 font-lora text-center mb-16">
          Powerful Features
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-[1.5rem] p-8 shadow-sm border border-transparent hover:border-[#E8DFD3] transition-all duration-300 flex flex-col gap-4 shadow-black/[0.02]"
            >
              {/* Icon */}
              <div className="mb-2">
                {feature.icon}
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl md:text-2xl leading-8 font-bold text-primaryColor mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed  font-normal text-sm md:text-base leading-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PowerfullFeatures;