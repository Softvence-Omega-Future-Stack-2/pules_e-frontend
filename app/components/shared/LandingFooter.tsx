
"use client"
import React from 'react';
import Link from 'next/link';


const LandingFooter: React.FC = () => {
  return (
    <footer className="bg-[#0a192f] text-white px-6 border-t border-white/5 flex flex-col items-center justify-between" >
      {/* Main Container for shared alignment */}
      <div className="w-full max-w-5xl mx-auto pt-7">
        
        {/* Top Content: Logo, Links, Contact all aligned to the same grid start */}
        <div className="grid grid-cols-1 md:grid-cols-3  gap-12 mb-8">
          
          {/* Brand/Logo Column */}
          <div className="flex flex-col items-start">
            <div className="flex items-center gap-2 mb-6">
              
             <img src="/img/logo.svg" alt="" />
            </div>
            <p className="text-[#EDE4D9] text-sm font-lora md:text-base font-normal leading-relaxed mb-4 text-left">
              Empowering women through AI-powered  health coaching and community support.
            </p>
            <p className="text-[#C9A96E] font-lora text-sm italic font-semibold leading-6">
              "Reclaim Your Power — Beyond the Number"
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col font-lora items-start">
            <h4 className="text-[#C9A96E] font-normal text-base md:text-lg leadiing-6 mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm md:text-base text-[#EDE4D9] leading-6 text-left">
              <li>
                <Link href="/" className="hover:text-amber-400 cursor-pointer transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/site/features" className="hover:text-amber-400 cursor-pointer transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/site/about" className="hover:text-amber-400 cursor-pointer transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/waitlist" className="hover:text-amber-400 cursor-pointer transition-colors font-semibold">
                  Join Waitlist
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col font-lora items-start">
            <h4 className="text-[#C9A96E] font-semibold text-base md:text-lg leading-6 mb-6">Contact</h4>
            <a
              href="mailto:privacy@fightthenumber.com"
              className="text-sm md:text-base font-normal text-[#EDE4D9] leading-4 hover:text-amber-400 cursor-pointer"
            >
              privacy@fightthenumber.com
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/10 mb-8" />

        {/* Copyright & Policy Links */}
        <div className="text-center mb-10">
          <p className="text-sm font-normal font-lora leading-5 text-[#EDE4D9] mb-4">
            © 2026 Fight the Number. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 text-base font-lora font-medium ">
              <Link href="/site/support" className="hover:text-amber-400 cursor-pointer transition-colors font-semibold">
                 Privacy Policy

                </Link>
            <span className="text-gray-700">|</span>
               <Link href="/site/support" className="hover:text-amber-400 cursor-pointer transition-colors font-semibold">
                Terms of Use

                </Link>
         
          </div>
        </div>

        {/* Privacy Policy Card - Aligned with the content above */}
        <div className="bg-[#162a4a]/40 backdrop-blur-md border border-white/10 font-lora rounded-2xl p-3 md:p-6 text-left">
          <h3 className="text-[#C9A96E]  font-bold text-lg leading-7 mb-4">Privacy Policy</h3>
          <p className="text-[#EDE4D9] text-sm leading-5 font-normal mb-4 ">Effective Date: February 24, 2026</p>
          
          <div className="space-y-3 text-sm text-[#EDE4D9] font-normal  leading-relaxed max-w-3xl">
            <p>At Fight the Number, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or join our waitlist.</p>
            
            <p><strong className="text-[#C9A96E]">Information We Collect:</strong> We collect email addresses and optional details like name and life stage for waitlist purposes.</p>
            
            <p><strong className="text-[#C9A96E]">How We Use It:</strong> To notify you about launches, updates, and personalized content. We do not sell your data.</p>
            <p><strong className="text-[#C9A96E]">Data Security:</strong>  We use industry-standard measures to protect your information.</p>
            <p><strong className="text-[#C9A96E]"> Your Rights:</strong>  You can unsubscribe or request data deletion anytime. Contact: privacy@fightthenumber.com</p>
            <p><strong className="text-[#C9A96E]">Changes:</strong>   We may update this policy; check back periodically.</p>
          </div>
           <p className='text-sm font-normal font-lora leading-5 text-[#EDE4D9]'>By joining, you consent to this policy.</p>
        </div>
      </div>

      {/* Bottom spacing for balance */}
      <div className="pb-10" />
    </footer>
  );
};

export default LandingFooter;




