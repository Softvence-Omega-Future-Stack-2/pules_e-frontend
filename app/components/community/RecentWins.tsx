import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';

const RecentWins = () => {
  const wins = [
    {
      user: "LutealWarrior42",
      avatar: "/img/recenWins1.svg",
      content: "Day 23 of my cycle and I actually said NO to a social event I didn't have energy for. No guilt. No apology. Just honoring my body. 🎉",
      likes: 127,
      comments: 23
    },
    {
      user: "PerimenopausalQueen",
      avatar: "/img/recentwins2.svg",
      content: "Finally found a doctor who LISTENED when I described my symptoms. She's checking my hormones and didn't once say 'you're too young.' Thank you to this community for teaching me to advocate for myself. ❤️",
      likes: 342,
      comments: 67
    },
    {
      user: "FightSister_Sarah",
      avatar: "/img/recentwins3.svg",
      content: "BBT tracking showed me I ovulated 3 days later than 'normal'—and Numera helped me understand this is totally fine. I'm learning to trust my body's timeline, not some app's prediction.",
      likes: 89,
      comments: 15
    },
    {
      user: "CycleAware_Mama",
      avatar: "/img/recentwins4.svg",
      content: "Week 2 of tracking energy instead of weight. I have SO MUCH more awareness of what my body needs. This is the revolution I didn't know I needed. 🔥",
      likes: 215,
      comments: 41
    }
  ];

  return (
    <section className="py-20  px-6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold  text-primaryColor leading-9 md:leading-12 font-lora text-center mb-6">
            Recent Wins from the Arena
          </h2>
          <p className="text-[#6B7280] text-xl font-lora md:text-2xl font-normal leading-relaxed">
            Real celebrations from Fight Sisters (anonymized for privacy)
          </p>
        </div>

        {/* Wins Feed */}
        <div className="space-y-6">
          {wins.map((win, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="flex gap-4">
                {/* User Avatar */}
                <div className="shrink-0">
                  <img 
                    src={win.avatar} 
                    alt={win.user} 
                    className="w-10 h-10 rounded-full border border-gray-100 shadow-sm" 
                  />
                </div>

                {/* Content Area */}
                <div className="space-y-3">
                  <h4 className="text-primaryColor font-bold text-base leading-6 ">
                    {win.user}
                  </h4>
                  <p className="ttext-primaryColor font-normal text-base leading-6">
                    {win.content}
                  </p>
                  
                  {/* Engagement Actions */}
                  <div className="flex items-center gap-6 pt-2">
                    <button className="flex items-center gap-2 text-[#6B7280] text-sm font-normal hover:text-rose-500 transition-colors cursor-pointer">
                      <Heart size={16} />
                      <span className="text-xs font-bold">{win.likes} likes</span>
                    </button>
                    <button className="flex items-center gap-2 text-[#6B7280] text-sm font-normal hover:text-rose-500 transition-colors cursor-pointer">
                      <MessageCircle size={16} />
                      <span className="text-xs font-bold">{win.comments} comments</span>
                    </button>
                  </div>
                </div>
              </div> 
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentWins;