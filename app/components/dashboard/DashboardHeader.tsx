"use client";

import React from 'react';
import { usePathname } from 'next/navigation';
import { Search, Bell } from 'lucide-react';

const DashboardHeader: React.FC = () => {
  const pathname = usePathname();

  // Function to format the title based on the route
  // e.g., /analytics -> Analytics, / -> Overview (as default)
  const getTitle = (path: string) => {
    if (path === '/' || path === '/overview') return 'Overview';
    const segment = path.split('/').filter(Boolean)[0];
    return segment.charAt(0).toUpperCase() + segment.slice(1);
  };

  const currentTitle = getTitle(pathname);

  return (
    <header className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
      {/* Dynamic Route Title */}
      <div className="flex flex-col items-start">
        <h1 className="text-[#0a192f] text-4xl md:text-5xl font-serif font-bold tracking-tight">
          {currentTitle}
        </h1>
        <p className="text-gray-400 text-sm mt-1 font-medium">
          Platform Control Center
        </p>
      </div>

      {/* Search and Profile Controls */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        {/* Search Bar */}
        <div className="relative flex-1 md:w-80">
          <Search 
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" 
            size={18} 
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white border border-gray-100 rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all shadow-sm"
          />
        </div>

        {/* Notification Bell */}
        <button className="relative p-3 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-colors">
          <Bell size={20} className="text-[#0a192f]" />
          <span className="absolute top-2 right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
            12
          </span>
        </button>

        {/* User Avatar */}
        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img 
              src="/path-to-avatar.jpg" 
              alt="User" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;