"use client";

import { useState } from "react";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-[#001F3F] p-4">
        <div className="bg-[#F8F1E9] p-3 md:p-5 rounded-3xl">
        <DashboardHeader onMenuClick={() => setSidebarOpen(true)}/>
        <main className="">{children}</main>
        </div>
      </div>
    </div>
  );
}