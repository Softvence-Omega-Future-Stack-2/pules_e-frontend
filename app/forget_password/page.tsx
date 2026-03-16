import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link'; // Assuming Next.js routing

const ForgotPasswordPage = () => {
  return (
    <div className="bg-[#f7f1e9] min-h-screen flex flex-col items-center justify-center p-6 font-sans text-[#0f1c35]">
      
      {/* Logo Section */}
      <div className="flex flex-col items-center mb-10">
        <img 
          src="/img/logo.svg" 
          alt="Fight The Number Logo" 
          className="w-14 h-auto mb-3"
        />
       
      </div>

      {/* Header Text */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-3xl font-bold leading-8 mb-3 text-primaryColor">Forgot Password?</h1>
        <p className="text-[#6B7280] font-normal leading-4 text-sm max-w-[280px] md:max-w-none mx-auto">
          No worries! Enter your email and we'll send you reset instructions.
        </p>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md space-y-6">
        <form className="space-y-8">
          <div className="space-y-2">
            <label className="block text-sm font-semibold leading-4">Email Address</label>
            <input 
              type="email" 
              placeholder="admin@example.com"
              className="w-full p-4 rounded-xl border border-[#E5E7EB] bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-secondaryColor transition-all"
            />
          </div>

          <button className="w-full py-4 rounded-xl bg-gradient-to-b from-[#a68956] to-[#6d5532] text-white font-bold text-lg shadow-xl shadow-black/10 hover:brightness-105 cursor-pointer active:scale-[0.98] transition-all">
            Send Reset Link
          </button>
        </form>

        {/* Back to Login Navigation */}
        <Link 
          href="/login" 
          className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-white text-[#0f1c35] font-bold shadow-sm border border-white hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft size={18} />
          <span>Back to Login</span>
        </Link>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;