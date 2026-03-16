"use client";

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  User,
  Lock,
  EyeOff,
  Eye,
} from "lucide-react";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [showCurrent, setShowCurrent] = useState(false);
const [showNew, setShowNew] = useState(false);
const [showConfirm, setShowConfirm] = useState(false);

const [image, setImage] = useState("/img/profile.png");

const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  const file = e.target.files?.[0];
  if (file) {
    const preview = URL.createObjectURL(file);
    setImage(preview);
  }
};

  return (
    <div className=" mt-7 min-h-screen  text-[#0f1c35]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#FFFFFFCC] rounded-2xl p-4 md:p-8 shadow-xl shadow-black/5 flex flex-col items-center border border-white">
            
            {/* Avatar */}
           <div className="relative mb-6">
  <div className="w-32 h-32 rounded-full border-4 border-[#b08d57] overflow-hidden p-1">
    <img
      src={image}
      alt="Profile"
      className="w-full h-full object-cover rounded-full"
    />
  </div>

  {/* Hidden Input */}
  <input
    type="file"
    accept="image/*"
    id="profileUpload"
    className="hidden"
    onChange={handleImageChange}
  />

  {/* Camera Button */}
  <label
    htmlFor="profileUpload"
    className="absolute bottom-1 right-1 bg-[#b08d57] p-2 rounded-full text-white shadow-lg hover:scale-110 transition-transform cursor-pointer"
  >
    <Camera className="w-4 h-4" />
  </label>
</div>

            <h2 className="text-base  font-bold leading-4 mb-6">
              Sarah Anderson
            </h2>

            {/* Contact */}
            <div className="w-full space-y-4 text-sm text-[#6B7280] font-normal mb-8">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#6B7280]" />
                <span>admin@example.com</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#6B7280]" />
                <span>+1 (555) 123-4567</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#6B7280]" />
                <span>San Francisco, CA</span>
              </div>

              <div className="flex items-center gap-3">
                <Calendar className="w-4 h-4 text-[#6B7280]" />
                <span>Joined January 15, 2024</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-[#fdf7f0] p-4 rounded-2xl text-center">
                <div className="text-xl font-serif font-bold">156</div>
                <div className="text-[10px]  text-[#6B7280]">
                  Actions
                </div>
              </div>

              <div className="bg-[#fdf7f0] p-4 rounded-2xl text-center">
                <div className="text-xl font-serif font-bold">3</div>
                <div className="text-[10px] text-[#6B7280]">
                  Contents
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Content */}
        <main className="lg:col-span-8 space-y-6">
          
          {/* Tabs */}
          <div className="inline-flex bg-white p-1.5 rounded-full shadow-sm border border-gray-100">
            
            <button
              onClick={() => setActiveTab("profile")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-base font-medium transition-all cursor-pointer ${
                activeTab === "profile"
                  ? "bg-[#b08d57] text-white shadow-md"
                  : "text-[#0A0A0A] hover:bg-gray-50"
              }`}
            >
              <User className="w-4 h-4" />
              Profile Details
            </button>

            <button
              onClick={() => setActiveTab("security")}
              className={`flex items-center gap-2 px-6 py-2 rounded-full text-base font-medium transition-all cursor-pointer ${
                activeTab === "security"
                  ? "bg-[#b08d57] text-white shadow-md"
                  : "text-[#0A0A0A] hover:bg-gray-50"
              }`}
            >
              <Lock className="w-4 h-4" />
              Security
            </button>

          </div>

          {/* Form Container */}
          <div className="bg-[#FFFFFFCC] rounded-[40px] p-4 md:p-10 shadow-xl shadow-black/5 min-h-[400px] border border-white">

            {/* PROFILE TAB */}
            {activeTab === "profile" && (
              <>
                <h3 className="text-base md:text-xl  font-bold leading-4 mb-8">
                  Personal Information
                </h3>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">

                  <div className="space-y-2">
                    <label className="text-sm font-bold leading-4 mb-2">
                      Full Name
                    </label>

                    <input
                      type="text"
                      defaultValue="Sarah Anderson"
                      className="w-full bg-[#F3F3F5] border border-[#00000000] rounded-xl p-4 text-[#0A0A0A] text-sm focus:ring-1 focus:ring-[#C9A96E]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold leading-4 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      defaultValue="admin@example.com"
                      className="w-full bg-[#F3F3F5] border border-[#00000000] rounded-xl p-4 text-[#0A0A0A] text-sm focus:ring-1 focus:ring-[#C9A96E]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold leading-4 mb-2">
                      Phone Number
                    </label>

                    <input
                      type="text"
                      defaultValue="+1 (555) 123-4567"
                      className="w-full bg-[#F3F3F5] border border-[#00000000] rounded-xl p-4 text-[#0A0A0A] text-sm focus:ring-1 focus:ring-[#C9A96E]"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold leading-4 mb-2">
                      Location
                    </label>

                    <input
                      type="text"
                      defaultValue="San Francisco, CA"
                      className="w-full bg-[#F3F3F5] border border-[#00000000] rounded-xl p-4 text-[#0A0A0A] text-sm focus:ring-1 focus:ring-[#C9A96E]"
                    />
                  </div>

                </form>
              </>
            )}

            {/* SECURITY TAB */}
            {activeTab === "security" && (
              <>
                <h3 className="ext-base md:text-xl  font-bold leading-4 mb-8">
                  Change Password
                </h3>

               <form className="grid grid-cols-1 gap-y-6">

  {/* Current Password */}
  <div className="space-y-2">
    <label className="text-sm font-bold leading-4 mb-2">
      Current Password
    </label>

    <div className="relative">
      <input
        type={showCurrent ? "text" : "password"}
        placeholder="Enter current password"
        className="w-full bg-[#F3F3F5] border border-transparent rounded-xl p-4 pr-12 text-[#0A0A0A] text-sm focus:ring-1 focus:ring-[#C9A96E]"
      />

      <button
        type="button"
        onClick={() => setShowCurrent(!showCurrent)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
      >
        {showCurrent ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  </div>

  {/* New Password */}
  <div className="space-y-2">
    <label className="text-sm font-bold leading-4 mb-2">
      New Password
    </label>

    <div className="relative">
      <input
        type={showNew ? "text" : "password"}
        placeholder="Enter new password"
        className="w-full bg-[#F3F3F5] border border-transparent rounded-xl p-4 pr-12 text-[#0A0A0A] text-sm focus:ring-1 focus:ring-[#C9A96E]"
      />

      <button
        type="button"
        onClick={() => setShowNew(!showNew)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
      >
        {showNew ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  </div>

  {/* Confirm Password */}
  <div className="space-y-2">
    <label className="text-sm font-bold leading-4 mb-2">
      Confirm New Password
    </label>

    <div className="relative">
      <input
        type={showConfirm ? "text" : "password"}
        placeholder="Confirm new password"
        className="w-full bg-[#F3F3F5] border border-transparent rounded-xl p-4 pr-12 text-[#0A0A0A] text-sm focus:ring-1 focus:ring-[#C9A96E]"
      />

      <button
        type="button"
        onClick={() => setShowConfirm(!showConfirm)}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
      >
        {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
      </button>
    </div>
  </div>



</form>

  <button style={{background: 'linear-gradient(180deg, #C9A96E 0%, #BFA066 10%, #B5965E 20%, #AB8D57 30%, #A1844F 40%, #977B48 50%, #8D7240 60%, #846939 70%, #7A6131 80%, #71582A 90%, #685023 100%)'}} className="bg-[#b08d57] mt-4 text-white py-3 px-8 rounded-xl font-semibold hover:opacity-90 transition cursor-pointer">
    Update Password
  </button>


              </>
            )}

          </div>
        </main>
      </div>
    </div>
  );
};

export default ProfilePage;