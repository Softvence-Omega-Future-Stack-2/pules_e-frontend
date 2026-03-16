"use client";

// Page 1: app/dashboard/content/page.tsx
// শুধু Title + Search + Stat Cards

import React, { useState } from "react";
import { Search, X } from "lucide-react";
import FightSisterCompanionsPage from "@/app/components/dashboard/content/FightSisterCompanions";
import ContentCard from "@/app/components/dashboard/content/ContetnCard";



const ContentManagementPage: React.FC = () => {
  const [query, setQuery] = useState("");

 

  return (
    <div className="min-h-screen py-8">

      {/* Title + Search */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-5">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-primaryColor leading-6 font-lora mb-2">
            Content Management
          </h1>
          <p className="text-[#6B7280] text-sm font-normal leading-5 nt-1  font-lora">
            Manage Fight Sister companions for the mobile app
          </p>
        </div>

        {/* Search */}
        <div className="relative w-full sm:w-72">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search content..."
            className="w-full bg-white border border-gray-200 rounded-xl py-2.5 pl-9 pr-9 text-sm text-[#001F3F] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#c5a059]/30 shadow-sm transition-all"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

    <ContentCard/>
      <FightSisterCompanionsPage/>
    </div>
  );
};

export default ContentManagementPage;