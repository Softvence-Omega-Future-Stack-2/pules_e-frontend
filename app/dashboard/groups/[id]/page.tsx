"use client";

import React from 'react';
import { User, Heart, Activity, Ban, MapPin, Calendar, Mail, MessageSquare, MessageCircle, Eye } from 'lucide-react';

const GroupDetailsPage = () => {

  const posts = [
    {
      id: 1,
      author: "Maria Rodriguez",
      avatar: "https://i.pravatar.cc/150?u=maria",
      time: "2 hours ago",
      content: "Just wanted to share my journey and thank everyone for the support. This community has been amazing! 💕",
      comments: 12,
      views: 156,
      likes: 24,
    },
    {
      id: 2,
      author: "Amanda White",
      avatar: "https://i.pravatar.cc/150?u=amanda",
      time: "5 hours ago",
      content: "Looking for advice on managing symptoms naturally. What has worked for you?",
      comments: 8,
      views: 89,
      likes: 18,
    },
    {
      id: 3,
      author: "Lisa Thompson",
      avatar: "https://i.pravatar.cc/150?u=lisa",
      time: "1 day ago",
      content: "Celebrating a small victory today! Remember, progress is progress no matter how small. Keep going! ✨",
      comments: 15,
      views: 234,
      likes: 42,
    }
  ];
  return (
    <div className="min-h-screen bg-[#fcfaf8] border-1 border-borderColor mt-6 rounded-3xl pb-20">
      {/* Dark Header */}
   <div className="relative p-4 md:p-8 mb-7 rounded-2xl"  style={{ background: "linear-gradient(180deg, #001F3F 0%, #0A2540 100%)" }}>
  <div  className="flex items-center gap-6">
  

    {/* Info */}
    <div className="flex flex-col gap-1">
      <h1 className="text-white text-2xl md:text-3xl font-bold leading-6 leading-tight">
        PCOS Warriors
      </h1>
      <p className="text-[#C9A96E] text-base md:text-lg font-norlam leading-7">Support Group • 342 members</p>
      <div className="flex gap-2 mt-1">
        <span   style={{ backgroundColor: 'rgba(0, 201, 80, 0.2)' }} className="px-4 py-2 bg-[#00C95033] text-emerald-400 text-sm font-bold leading-4 uppercase  rounded-full ">
          Active
        </span>
        
      </div>
    </div>
  </div>
</div>

 <main className=" px-6  space-y-8">
{/* --- Section 1: About This Group --- */}
        <section className="bg-[#F8F1E9CC] rounded-2xl p-4 md:p-8 border border-[#C9A96E4D] ">
          <div className="flex items-center gap-2 mb-8 pb-4">
            <MessageSquare size={20} className="text-[#B89463]" />
            <h2 className="text-lg font-bold leading-7 text-primaryColor leading-5">About This Group</h2>
          </div>

          <div className="space-y-6">
            <div>
              <p className="text-xs  text-[#6B7280] font-normal leading-4 mb-1">Group Name</p>
              <h3 className="text-base font-semibold text-primaryColor leading-6 ">PCOS Warriors</h3>
            </div>
            
            <div>
              <p className="text-xs text-[#6B7280] font-normal leading-4 mb-1">Category</p>
              <h3 className="text-base font-semibold text-primaryColor leading-6 ">Life Stage Support</h3>
            </div>

            <div>
              <p className="text-xs text-[#6B7280] font-normal leading-4 mb-1">Created</p>
              <h3 className="text-base font-semibold text-primaryColor leading-6 ">January 15, 2025</h3>
            </div>

            <div>
              <p className="text-xs text-[#6B7280] font-normal leading-4 mb-2">Privacy</p>
              <span className="inline-block bg-[#DCFCE7] text-[#008236] px-4 py-1 rounded-full text-sm font-medium border border-[#7BF1A8]">
                Public Group
              </span>
            </div>
          </div>
        </section>


        {/* --- Section 2: Recent Posts --- */}
         <section className="bg-[#F8F1E9CC] rounded-2xl p-4 md:p-8 border border-[#C9A96E4D] ">
          <h2 className="text-lg font-bold leading-7 text-primaryColor leading-5 pb-4">
            Recent Posts
          </h2>

          <div className="space-y-4">
            {posts.map((post) => (
              <div key={post.id} className="bg-[#FFFFFFB2] rounded-2xl p-6 shadow-sm border border-[#EDE4D9]">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-4">
                    <img src={post.avatar} alt={post.author} className="w-12 h-12 rounded-full object-cover border-2 border-[#FAF3EA]" />
                    <div>
                      <h4 className="font-semibold text-sm text-primaryColor  leading-6">{post.author}</h4>
                      <p className="text-xs text-[#6B7280] font-normal leading-4">{post.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Heart size={14} />
                    <span className="text-xs font-medium">{post.likes}</span>
                  </div>
                </div>

                <p className="text-primaryColor leading-relaxed    text-base">
                  "{post.content}"
                </p>

                <div className="flex gap-6 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-2 text-gray-400">
                    <MessageCircle size={16} />
                    <span className="text-xs text-[#6B7280] font-normal leading-4">{post.comments} comments</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400">
                    <Eye size={16} />
                    <span className="text-xs text-[#6B7280] font-normal leading-4">{post.views} views</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

</main>
     
    </div>
  );
};



export default GroupDetailsPage;