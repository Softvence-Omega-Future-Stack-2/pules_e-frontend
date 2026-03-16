"use client";

import React, { useState, useRef, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Search, Bell, Menu, Check, CheckCheck, X } from "lucide-react";

interface DashboardHeaderProps {
  onMenuClick: () => void;
}

interface Notification {
  id: number;
  title: string;
  message: string;
  time: string;
  read: boolean;
  type: "info" | "warning" | "success";
}

const initialNotifications: Notification[] = [
  {
    id: 1,
    title: "New user registered",
    message: "Sarah Johnson just joined the platform.",
    time: "2 min ago",
    read: false,
    type: "info",
  },
  {
    id: 2,
    title: "Payment received",
    message: "Monthly subscription payment of $49 confirmed.",
    time: "15 min ago",
    read: false,
    type: "success",
  },
  {
    id: 3,
    title: "System alert",
    message: "Server load exceeded 80% threshold.",
    time: "1 hr ago",
    read: false,
    type: "warning",
  },
  {
    id: 4,
    title: "New feedback submitted",
    message: "A user left a 5-star review on the app.",
    time: "3 hrs ago",
    read: true,
    type: "info",
  },
  {
    id: 5,
    title: "Feature request",
    message: "10 users upvoted dark mode feature request.",
    time: "Yesterday",
    read: true,
    type: "info",
  },
];

const typeStyles = {
  info: {
    dot: "bg-blue-400",
    icon: "bg-blue-50 text-blue-500",
  },
  warning: {
    dot: "bg-amber-400",
    icon: "bg-amber-50 text-amber-500",
  },
  success: {
    dot: "bg-emerald-400",
    icon: "bg-emerald-50 text-emerald-500",
  },
};

const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick }) => {
  const pathname = usePathname();
  const [notifOpen, setNotifOpen] = useState(false);
  const [notifications, setNotifications] = useState<Notification[]>(initialNotifications);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const getTitle = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length === 1) return "Overview";
    const page = segments[1];
    return page.charAt(0).toUpperCase() + page.slice(1);
  };

  const currentTitle = getTitle(pathname);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const markAllRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const markOneRead = (id: number) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n))
    );
  };

  const removeNotification = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };

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
        {/* Search */}
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

        {/* Notification Bell */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setNotifOpen((prev) => !prev)}
            className="relative p-3 bg-white border border-gray-100 rounded-full shadow-sm hover:bg-gray-50 transition-colors cursor-pointer"
          >
            <Bell size={20} className="text-[#0a192f]" />
            {unreadCount > 0 && (
              <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white border-2 border-white">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          {/* Dropdown */}
          {notifOpen && (
            <div className="absolute right-0 mt-3 w-[360px] bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <h3 className="text-[#001F3F] font-bold text-base">Notifications</h3>
                  {unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {unreadCount} new
                    </span>
                  )}
                </div>
                {unreadCount > 0 && (
                  <button
                    onClick={markAllRead}
                    className="flex items-center gap-1 text-xs text-[#C9A96E] hover:text-[#a8843f] cursror-pointer font-medium transition-colors"
                  >
                    <CheckCheck size={14} />
                    Mark all read
                  </button>
                )}
              </div>

              {/* Notification List */}
              <ul className="max-h-[360px] overflow-y-auto divide-y divide-gray-50">
                {notifications.length === 0 ? (
                  <li className="flex flex-col items-center justify-center py-10 text-gray-400">
                    <Bell size={32} className="mb-2 opacity-30" />
                    <p className="text-sm">No notifications</p>
                  </li>
                ) : (
                  notifications.map((notif) => (
                    <li
                      key={notif.id}
                      onClick={() => markOneRead(notif.id)}
                      className={`flex items-start gap-3 px-5 py-4 cursor-pointer transition-colors hover:bg-gray-50 ${
                        !notif.read ? "bg-blue-50/40" : "bg-white"
                      }`}
                    >
                      {/* Dot indicator */}
                      <div className="mt-2 flex-shrink-0">
                        <span
                          className={`block h-2 w-2 rounded-full ${
                            !notif.read
                              ? typeStyles[notif.type].dot
                              : "bg-gray-300"
                          }`}
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <p
                          className={`text-sm font-semibold truncate ${
                            !notif.read ? "text-[#001F3F]" : "text-gray-500"
                          }`}
                        >
                          {notif.title}
                        </p>
                        <p className="text-xs text-gray-500 mt-0.5 leading-relaxed line-clamp-2">
                          {notif.message}
                        </p>
                        <p className="text-[11px] text-gray-400 mt-1">{notif.time}</p>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-1 flex-shrink-0 mt-1">
                        {!notif.read && (
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              markOneRead(notif.id);
                            }}
                            title="Mark as read"
                            className="p-1 rounded-full hover:bg-blue-100 text-blue-400 transition-colors cursor-pointer"
                          >
                            <Check size={13} />
                          </button>
                        )}
                        <button
                          onClick={(e) => removeNotification(notif.id, e)}
                          title="Remove"
                          className="p-1 rounded-full hover:bg-red-100 text-gray-400 hover:text-red-400 cursor-pointer transition-colors"
                        >
                          <X size={13} />
                        </button>
                      </div>
                    </li>
                  ))
                )}
              </ul>

              {/* Footer */}
              {/* {notifications.length > 0 && (
                <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50">
                  <button className="w-full text-center text-sm text-[#C9A96E] hover:text-[#a8843f] font-medium transition-colors cursor-pointer">
                    View all notifications
                  </button>
                </div>
              )} */}
            </div>
          )}
        </div>

        {/* Profile */}
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
// import { Search, Bell, Menu } from "lucide-react";

// interface DashboardHeaderProps {
//   onMenuClick: () => void;
// }

// const DashboardHeader: React.FC<DashboardHeaderProps> = ({ onMenuClick }) => {
//   const pathname = usePathname();

//   const getTitle = (path: string) => {
//     const segments = path.split("/").filter(Boolean);
//     if (segments.length === 1) return "Overview";
//     const page = segments[1];
//     return page.charAt(0).toUpperCase() + page.slice(1);
//   };

//   const currentTitle = getTitle(pathname);

//   return (
//     <header className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-2">
//         {/* Hamburger - mobile only */}
//         <button
//           className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
//           onClick={onMenuClick}
//         >
//           <Menu size={22} className="text-[#001F3F]" />
//         </button>
//       {/* Title */}
//       <div className="flex items-center gap-3">
      

//         <div className="flex flex-col items-start">
//           <h1 className="text-[#001F3F] text-2xl md:text-4xl font-bold">
//             {currentTitle}
//           </h1>
//           <p className="text-[#6B7280] text-sm mt-1 font-normal leading-5">
//             Platform Control Center
//           </p>
//         </div>
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
//             className="w-full bg-white/50 border border-borderColor rounded-full py-3 pl-12 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#c5a059]/20 transition-all"
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