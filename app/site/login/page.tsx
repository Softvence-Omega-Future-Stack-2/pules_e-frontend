"use client"

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Link from 'next/link';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="bg-[#f7f1e9] min-h-screen flex flex-col items-center justify-center p-6 text-[#0f1c35]">
      
      {/* Logo & Branding */}
   {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/img/logo.svg" alt="Logo" />
        </div>

      {/* Main Login Header */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold leading-8 mb-3 text-primaryColor">Welcome </h1>
        <p className="text-[#6B7280] text-sm font-normal leading-5">Sign in to access your admin dashboard</p>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md">
        <form className="space-y-6">
          {/* Email Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold leading-4">Email Address</label>
            <input 
              type="email" 
              placeholder="admin@example.com"
              className="w-full p-4 rounded-xl border border-[#E5E7EB] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-secondaryColor  transition-all"
            />
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold leading-4">Password</label>
            <div className="relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Enter your password"
                className="w-full p-4 rounded-xl border border-[#E5E7EB] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-secondaryColor transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember & Forgot */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input 
                type="checkbox" 
                className="w-4 h-4 rounded border-gray-300 text-[#b08d57] focus:ring-[#b08d57]"
              />
              <span className="text-gray-500">Remember me</span>
            </label>
            <Link href="/forget_password" className="font-bold text-[#b08d57] hover:underline">
              Forgot password?
            </Link>
          </div>

          {/* Submit Button */}
          <Link href="/dashboard">
          <button className="w-full py-4 rounded-xl bg-gradient-to-b from-[#a68956] to-[#6d5532] text-white font-bold text-lg shadow-xl cursor-pointer shadow-black/10 hover:brightness-110 active:scale-[0.98] transition-all">
            Sign In
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;