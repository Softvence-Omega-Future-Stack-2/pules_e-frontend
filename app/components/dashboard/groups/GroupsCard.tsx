"use client";

import React from "react";
import { MessageSquare, Eye } from "lucide-react";
import Link from "next/link";

// --- Types & Data ---
interface CommunityGroup {
  id: number;
  title: string;
  members: number;
  posts: number;
}

const communityData: CommunityGroup[] = [
  { id: 1, title: "PCOS Warriors", members: 342, posts: 1847 },
  { id: 2, title: "Postpartum Journey", members: 289, posts: 1523 },
  { id: 3, title: "TTC Support Circle", members: 412, posts: 2156 },
  { id: 4, title: "Pregnancy Wellness", members: 278, posts: 1342 },
  { id: 5, title: "Menopause Together", members: 198, posts: 892 },
];

// --- Main Component ---
export default function GroupCard() {
  return (
    <div className="min-h-screen mt-6 text-[#2D3748]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {communityData.map((group) => (
          <div
            key={group.id}
            className="bg-white rounded-3xl p-4 md:p-8 border border-borderColor hover:shadow-md transition-shadow duration-300 flex flex-col gap-6"
          >
            {/* Icon */}
            <div className="w-14 h-14 bg-[#B89463] rounded-2xl flex items-center justify-center shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)]">
              <MessageSquare className="text-white w-7 h-7 opacity-90" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-primaryColor leading-7">
              {group.title}
            </h3>

            {/* Stats */}
            <div className="flex gap-4">
              <div className="flex-1 bg-[#F8F1E980] rounded-2xl py-5 px-2 text-center">
                <p className="text-xl tracking-tight font-bold text-primaryColor leading-7 mb-1">
                  {group.members}
                </p>
                <p className="text-xs text-[#6B7280]">Members</p>
              </div>

              <div className="flex-1 bg-[#F8F1E980] rounded-2xl py-5 px-2 text-center">
                <p className="text-xl tracking-tight font-bold text-primaryColor leading-7 mb-1">
                  {group.posts}
                </p>
                <p className="text-xs text-[#6B7280]">Posts</p>
              </div>
            </div>

            {/* Action Button */}
            <Link
              href={`/dashboard/groups/${group.id}`}
              className="w-full mt-2 py-3.5 bg-[#F8F1E9] hover:bg-amber-50 active:scale-[0.98] transition-all rounded-2xl flex items-center justify-center gap-2 text-primaryColor font-semibold border border-[#001F3F1A]"
            >
              <Eye size={18} className="opacity-70" />
              <span className="text-sm">View</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}