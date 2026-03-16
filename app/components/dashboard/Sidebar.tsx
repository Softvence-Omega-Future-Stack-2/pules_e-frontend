"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, FileText, MessageSquare, BarChart3, X } from "lucide-react";

interface NavItem {
  label: string;
  icon: React.ReactNode;
  path: string;
}

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

export default function Sidebar({ sidebarOpen, setSidebarOpen }: SidebarProps) {
  const pathname = usePathname();

  const menuItems: NavItem[] = [
    { label: "Overview", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
    { label: "Users", icon: <Users size={20} />, path: "/dashboard/users" },
    { label: "Content", icon: <FileText size={20} />, path: "/dashboard/content" },
    { label: "Groups", icon: <MessageSquare size={20} />, path: "/dashboard/groups" },
    { label: "Analytics", icon: <BarChart3 size={20} />, path: "/dashboard/analytics" },
  ];

  return (
    <>
      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <aside
        className={`
          bg-[#0a192f] text-white w-[280px] flex flex-col border-r border-white/5 min-h-screen
          fixed top-0 left-0 z-30 transition-transform duration-300
          md:static md:translate-x-0
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Close button - mobile only */}
        <button
          className="absolute top-4 right-4 md:hidden text-gray-400 hover:text-white"
          onClick={() => setSidebarOpen(false)}
        >
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="p-8  flex justify-center  ">
          <img src="/img/logo.svg" alt="logo" />
        </div>

        {/* Menu */}
        <nav className="flex-1 px-4">
          <ul className="space-y-2">
            {menuItems.map((item) => {
              const active = pathname === item.path;
              return (
                <li key={item.label}>
                  <Link
                    href={item.path}
                    onClick={() => setSidebarOpen(false)}
                    className={`flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-200 group ${
                      active
                        ? "bg-white/5 text-[#c5a059] border-r-2 border-[#c5a059]"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <span className={active ? "text-[#c5a059]" : "text-gray-400 group-hover:text-white"}>
                      {item.icon}
                    </span>
                    <span className="text-sm font-semibold tracking-wide">
                      {item.label}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Bottom */}
        {/* <div className="p-6 border-t border-white/5">
          <div className="bg-[#162a4a]/40 p-4 rounded-xl">
            <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">
              Admin Panel v1.0
            </p>
          </div>
        </div> */}
      </aside>
    </>
  );
}





// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { LayoutDashboard, Users, FileText, MessageSquare, BarChart3 } from "lucide-react";

// interface NavItem {
//   label: string;
//   icon: React.ReactNode;
//   path: string;
// }

// export default function Sidebar() {
//   const pathname = usePathname();

//   const menuItems: NavItem[] = [
//     { label: "Overview", icon: <LayoutDashboard size={20} />, path: "/dashboard" },
//     { label: "Users", icon: <Users size={20} />, path: "/dashboard/users" },
//     { label: "Content", icon: <FileText size={20} />, path: "/dashboard/content" },
//     { label: "Groups", icon: <MessageSquare size={20} />, path: "/dashboard/groups" },
//     { label: "Analytics", icon: <BarChart3 size={20} />, path: "/dashboard/analytics" },
//   ];

//   return (
//     <aside className="bg-[#0a192f] text-white w-[280px] flex flex-col border-r border-white/5 min-h-screen">
      
//       {/* Logo */}
//       <div className="p-8 mb-4 flex justify-center">
//         <img src="/img/logo.png" alt="logo" />
//       </div>

//       {/* Menu */}
//       <nav className="flex-1 px-4">
//         <ul className="space-y-2">
//           {menuItems.map((item) => {
//             const active = pathname === item.path;

//             return (
//               <li key={item.label}>
//                 <Link
//                   href={item.path}
//                   className={`flex items-center gap-4 px-6 py-4 rounded-lg transition-all duration-200 group ${
//                     active
//                       ? "bg-white/5 text-[#c5a059] border-r-2 border-[#c5a059]"
//                       : "text-gray-400 hover:bg-white/5 hover:text-white"
//                   }`}
//                 >
//                   <span className={active ? "text-[#c5a059]" : "text-gray-400 group-hover:text-white"}>
//                     {item.icon}
//                   </span>
//                   <span className="text-sm font-semibold tracking-wide">
//                     {item.label}
//                   </span>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>
//       </nav>

//       {/* Bottom */}
//       <div className="p-6 border-t border-white/5">
//         <div className="bg-[#162a4a]/40 p-4 rounded-xl">
//           <p className="text-[10px] text-gray-500 uppercase tracking-widest text-center">
//             Admin Panel v1.0
//           </p>
//         </div>
//       </div>
//     </aside>
//   );
// }