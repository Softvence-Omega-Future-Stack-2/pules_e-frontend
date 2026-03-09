"use client";

import DashboardHeader from "../components/dashboard/DashboardHeader";
import Sidebar from "../components/dashboard/Sidebar";


export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content */}
      <div className="flex-1 flex flex-col bg-[#001F3F] p-4">
        <div className="bg-[#F8F1E9] p-5 rounded-3xl">
        <DashboardHeader/>
        <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}