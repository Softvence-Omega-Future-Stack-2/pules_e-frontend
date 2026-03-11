"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { Search, Bell, Menu } from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick }) => {
  const pathname = usePathname();

  const getTitle = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 1) return "Overview";
    const page = segments[1];
    return page.charAt(0).toUpperCase() + page.slice(1);
  };

  const currentTitle = getTitle(pathname);

  return (
    <header className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
        {/* Hamburger - mobile only */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
          onClick={onMenuClick}
        >
          <Menu size={22} className="text-[#001F3F]" />
        </button>
      {/* Title */}
      <div className="flex items-center gap-3">
      

        <div className="flex flex-col items-start">
          <h1 className="text-[#001F3F] text-2xl md:text-4xl font-bold">
            {currentTitle}
          </h1>
          <p className="text-[#6B7280] text-sm mt-1 font-normal leading-5">
            Platform Control Center
          </p>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-4 w-full md:w-auto">
        <div className="relative flex-1 md:w-80">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-white/50 border border-borderColor rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all"
          />
        </div>

        <button className="relative p-3 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-color cursor-pointer">
          <Bell size={20} className="text-[#0a192f]" />
          <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
            12
          </span>
        </button>

        <div className="flex items-center gap-3">
          <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img
              src="/img/profileImg.png"
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






// "use client";

// import React from "react";
// import { usePathname } from "next/navigation";
// import { Search, Bell } from "lucide-react";

// const DashboardHeader: React.FC = () => {
//   const pathname = usePathname();

//   const getTitle = (path: string) => {
//     const segments = path.split("/").filter(Boolean);

//     // /dashboard
//     if (segments.length === 1) {
//       return "Overview";
//     }

//     // /dashboard/users
//     const page = segments[1];

//     return page.charAt(0).toUpperCase() + page.slice(1);
//   };

//   const currentTitle = getTitle(pathname);

//   return (
//     <header className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
//       {/* Title */}
//       <div className="flex flex-col items-start">
//         <h1 className="text-[#001F3F] text-2xl md:text-4xl  font-bold ">
//           {currentTitle}
//         </h1>

//         <p className="text-[#6B7280] text-sm mt-1 font-normal leading-5">
//           Platform Control Center
//         </p>
//       </div>

//       {/* Right Side */}
//       <div className="flex items-center gap-4 w-full md:w-auto">
//         <div className="relative flex-1 md:w-80">
//           <Search
//             className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
//             size={18}
//           />

//           <input
//             type="text"
//             placeholder="Search..."
//             className="w-full bg-white/50 border border-borderColor rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all "
//           />
//         </div>

//         <button className="relative p-3 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-color cursor-pointer">
//           <Bell size={20} className="text-[#0a192f]" />

//           <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
//             12
//           </span>
//         </button>

//         <div className="flex items-center gap-3">
//           <div className="h-12 w-12 rounded-full overflow-hidden border-2 border-white shadow-md">
//             <img
//               src="/img/profileImg.png"
//               alt="User"
//               className="h-full w-full object-cover"
//             />
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default DashboardHeader;