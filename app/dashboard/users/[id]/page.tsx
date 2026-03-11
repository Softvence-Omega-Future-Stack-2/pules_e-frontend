"use client";

import React from 'react';
import { User, Heart, Activity, Ban, MapPin, Calendar, Mail, MessageSquare } from 'lucide-react';

const UserDetailsPage = () => {
  return (
    <div className="min-h-screen bg-[#fcfaf8] border-1 border-borderColor mt-6 rounded-3xl pb-20">
      {/* Dark Header */}
   <div className="relative p-4 md:p-8 mb-7 rounded-2xl"  style={{ background: "linear-gradient(180deg, #001F3F 0%, #0A2540 100%)" }}>
  <div  className="flex items-center gap-6">
    {/* Avatar - overlapping bottom */}
    <div className="relative z-10 shrink-0">
      <div className="w-24 h-24 rounded-full border-[3px] border-[#c5a059] overflow-hidden shadow-xl">
        <img src="/img/user1.png" alt="Profile" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Info */}
    <div className="flex flex-col gap-1">
      <h1 className="text-white text-2xl md:text-3xl font-bold leading-6 leading-tight">
        Sarah Martinez
      </h1>
      <p className="text-[#C9A96E] text-base md:text-lg font-norlam leading-7">sarah.m@email.com</p>
      <div className="flex gap-2 mt-1">
        <span   style={{ backgroundColor: 'rgba(0, 201, 80, 0.2)' }} className="px-4 py-2 bg-[#00C95033] text-emerald-400 text-sm font-bold leading-4 uppercase  rounded-full ">
          Active
        </span>
        <span style={{background: 'rgba(201, 169, 110, 0.20)'}} className="px-4 py-2  text-[#C9A96E] text-sm font-bold leading-4 uppercase rounded-full ">
          PCOS
        </span>
      </div>
    </div>
  </div>
</div>

      {/* Main Content Area */}
      <main className=" px-6  space-y-8">
        
        {/* TOP SECTION: Personal Info & Health Profile in Flex Row */}
        <div className="flex flex-col lg:flex-row  gap-6">
          {/* Personal Information Card */}
          <section style={{background: 'rgba(248, 241, 233, 0.80)'}} className="flex-1  p-8 rounded-2xl  border border-borderColor">
            <div className="flex items-center gap-3 text-[#c5a059] mb-8">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M18 21C18 18.8783 17.1571 16.8434 15.6569 15.3431C14.1566 13.8429 12.1217 13 10 13M10 13C7.87827 13 5.84344 13.8429 4.34315 15.3431C2.84285 16.8434 2 18.8783 2 21M10 13C12.7614 13 15 10.7614 15 8C15 5.23858 12.7614 3 10 3C7.23858 3 5 5.23858 5 8C5 10.7614 7.23858 13 10 13ZM22 20C22 16.63 20 13.5 18 12C18.6575 11.5067 19.1832 10.859 19.5306 10.1142C19.8781 9.3694 20.0366 8.55042 19.9921 7.72975C19.9476 6.90908 19.7015 6.11204 19.2755 5.40915C18.8496 4.70626 18.2569 4.11921 17.55 3.69995" strokeWidth="1.5"
strokeLinecap="round"
strokeLinejoin="round" />
</svg>
              <h2 className="font-bold text-xl leading-5 text-primaryColor">Personal Information</h2>
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <InfoItem label="Full Name" value="Sarah Martinez" />
              <InfoItem label="Email Address" value="sarah.m@email.com" />
              <InfoItem label="Location" value="San Francisco, CA" />
              <InfoItem label="Member Since" value="2 hours ago" />
            </div>
          </section>

          {/* Health Profile Card */}
          <section  style={{background: 'rgba(248, 241, 233, 0.80)'}} className="flex-1 bg-white p-4 md:p-8 rounded-2xl border border-borderColor">
            <div className="flex items-center gap-3 text-[#c5a059] mb-8">
              <Heart size={20} />
              <h2 className="font-bold text-xl leading-5 text-primaryColor">Health Profile</h2>
            </div>
            <div className="grid grid-cols-2 gap-y-8 gap-x-4">
              <div className="flex flex-col gap-1">
                <span className="text-sm text-[#6B7280]  font-normal leading-4">Life Stage</span>
                <span className="w-fit px-3 py-1 bg-[#C9A96E33] border border-[#c5a059]/30 text-[#C9A96E] text-sm font-bold rounded-full">PCOS</span>
              </div>
              <InfoItem label="Cycle Day" value="Day 14 of 28" />
              <InfoItem label="Support Groups" value="3 Groups" />
              <InfoItem label="Partner Match" value="Rachel Green" />
            </div>
          </section>
        </div>

        {/* MIDDLE SECTION: Recent Activity */}
        <section className="bg-[#F8F1E9CC] p-4 md:p-8 rounded-2xl border border-[#C9A96E4D]">
          <div className="flex items-center gap-3 text-[#c5a059] mb-8">
            <Activity size={20} />
            <h2 className="font-bold text-xl leading-5 text-primaryColor">Recent Activity</h2>
          </div>
          <div className="space-y-4">
            <ActivityRow text="Logged cycle day 14" time="2 hours ago" />
            <ActivityRow text="AI Coach session completed" time="5 hours ago" />
            <ActivityRow text="Posted in PCOS Warriors group" time="1 day ago" />
          </div>
        </section>

        {/* BOTTOM SECTION: Suspend Action */}
        <div className="pt-4 flex justify-end">
          <button className="flex items-center gap-2 px-8 py-4 bg-red-50 text-red-500 border border-[#FFA2A2] rounded-2xl font-bold hover:bg-red-500 hover:text-white transition-all cursor-pointer group">
            <Ban size={18} className="group-hover:rotate-12 transition-transform" />
            Suspend Account
          </button>
        </div>
      </main>
    </div>
  );
};

/* Components */
const InfoItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1">
    <span className="text-sm text-[#6B7280]  font-normal leading-4">{label}</span>
    <span className="text-lg font-bold text-primaryColor leadinig-7">{value}</span>
  </div>
);

const ActivityRow = ({ text, time }: { text: string; time: string }) => (
  <div className="flex flex-col p-5 bg-[#FFFFFF80] rounded-2xl border border-transparent hover:border-gray-100 transition-all">
    <span className="text-base font-semibold leading-6 text-primaryColor">{text}</span>
    <span className="text-sm text-[#6B7280] font-normal leading-4.5">{time}</span>
  </div>
);

export default UserDetailsPage;