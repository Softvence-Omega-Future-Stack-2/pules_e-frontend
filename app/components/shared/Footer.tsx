import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  const footerLinks = {
    Product: [
      { name: 'Features', path: '/features' },
      { name: 'Pricing', path: '/pricing' },
      { name: 'Fight Tool', path: '/fighttool' },
    ],
    Company: [
      { name: 'About', path: '/about' },
      { name: 'Blog', path: '/blog' },
      { name: 'Community', path: '/community' },
    ],
    Support: [
      { name: 'Help Center', path: '/support' },
      { name: 'Privacy Policy', path: '/support' },
      { name: 'Terms of Service', path: '/support' },
    ],
  };

  return (
    <footer className="bg-[#001a2c] text-white pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-2 space-y-6">
            <div className="relative w-12 h-12">
              <Image 
                src="/img/logo.svg"
                alt="Fight the Number Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <p className="text-[#FFFFFFB2] text-sm max-w-xs leading-relaxed font-normal">
              Your AI coach for understanding your body beyond the numbers.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="space-y-6">
              <h4 className="text-lg font-bold text-slate-100 leading-5 tracking-wider">
                {category}
              </h4>
              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.path}
                      className="text-[#FFFFFFB2] hover:text-[#c5a367] transition-colors text-sm font-normal leading-5"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-[#FFFFFF80] text-sm font-normal leading-5 tracking-widest uppercase">
            © 2026 Fight the Number. All rights reserved. Numbers measure women. Understanding empowers them.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;




// "use client"
// import React from 'react';
// import Link from 'next/link';


// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#0a192f] text-white px-6 border-t border-white/5 flex flex-col items-center justify-between" >
//       {/* Main Container for shared alignment */}
//       <div className="w-full max-w-5xl mx-auto pt-7">
        
//         {/* Top Content: Logo, Links, Contact all aligned to the same grid start */}
//         <div className="grid grid-cols-1 md:grid-cols-3  gap-12 mb-8">
          
//           {/* Brand/Logo Column */}
//           <div className="flex flex-col items-start">
//             <div className="flex items-center gap-2 mb-6">
              
//              <img src="/img/logo.svg" alt="" />
//             </div>
//             <p className="text-[#EDE4D9] text-sm font-lora md:text-base font-normal leading-relaxed mb-4 text-left">
//               Empowering women through AI-powered  health coaching and community support.
//             </p>
//             <p className="text-[#C9A96E] font-lora text-sm italic font-semibold leading-6">
//               "Reclaim Your Power — Beyond the Number"
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col font-lora items-start">
//             <h4 className="text-[#C9A96E] font-normal text-base md:text-lg leadiing-6 mb-6">Quick Links</h4>
//             <ul className="space-y-4 text-sm md:text-base text-[#EDE4D9] leading-6 text-left">
//               <li>
//                 <Link href="/" className="hover:text-amber-400 cursor-pointer transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/features" className="hover:text-amber-400 cursor-pointer transition-colors">
//                   Features
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="hover:text-amber-400 cursor-pointer transition-colors">
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/pricing" className="hover:text-amber-400 cursor-pointer transition-colors font-semibold">
//                   Join Waitlist
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="flex flex-col font-lora items-start">
//             <h4 className="text-[#C9A96E] font-semibold text-base md:text-lg leading-6 mb-6">Contact</h4>
//             <a
//               href="mailto:privacy@fightthenumber.com"
//               className="text-sm md:text-base font-normal text-[#EDE4D9] leading-4 hover:text-amber-400 cursor-pointer"
//             >
//               privacy@fightthenumber.com
//             </a>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-white/10 mb-8" />

//         {/* Copyright & Policy Links */}
//         <div className="text-center mb-10">
//           <p className="text-sm font-normal font-lora leading-5 text-[#EDE4D9] mb-4">
//             © 2026 Fight the Number. All rights reserved.
//           </p>
//           <div className="flex justify-center gap-6 text-base font-lora font-medium ">
//             <span className="cursor-pointer text-[#EDE4D9] hover:text-amber-400">Privacy Policy</span>
//             <span className="text-gray-700">|</span>
//             <span className="cursor-pointer text-[#EDE4D9] hover:text-amber-400">Terms of Use</span>
//           </div>
//         </div>

//         {/* Privacy Policy Card - Aligned with the content above */}
//         <div className="bg-[#162a4a]/40 backdrop-blur-md border border-white/10 font-lora rounded-2xl p-3 md:p-6 text-left">
//           <h3 className="text-[#C9A96E]  font-bold text-lg leading-7 mb-4">Privacy Policy</h3>
//           <p className="text-[#EDE4D9] text-sm leading-5 font-normal mb-4 ">Effective Date: February 24, 2026</p>
          
//           <div className="space-y-3 text-sm text-[#EDE4D9] font-normal  leading-relaxed max-w-3xl">
//             <p>At Fight the Number, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or join our waitlist.</p>
            
//             <p><strong className="text-[#C9A96E]">Information We Collect:</strong> We collect email addresses and optional details like name and life stage for waitlist purposes.</p>
            
//             <p><strong className="text-[#C9A96E]">How We Use It:</strong> To notify you about launches, updates, and personalized content. We do not sell your data.</p>
//             <p><strong className="text-[#C9A96E]">Data Security:</strong>  We use industry-standard measures to protect your information.</p>
//             <p><strong className="text-[#C9A96E]"> Your Rights:</strong>  You can unsubscribe or request data deletion anytime. Contact: privacy@fightthenumber.com</p>
//             <p><strong className="text-[#C9A96E]">Changes:</strong>   We may update this policy; check back periodically.</p>
//           </div>
//            <p className='text-sm font-normal font-lora leading-5 text-[#EDE4D9]'>By joining, you consent to this policy.</p>
//         </div>
//       </div>

//       {/* Bottom spacing for balance */}
//       <div className="pb-10" />
//     </footer>
//   );
// };

// export default Footer;





// "use client"
// import React from 'react';


// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-[#0a192f] text-white px-6 border-t border-white/5 flex flex-col items-center justify-between" >
//       {/* Main Container for shared alignment */}
//       <div className="w-full max-w-5xl mx-auto pt-7">
        
//         {/* Top Content: Logo, Links, Contact all aligned to the same grid start */}
//         <div className="grid grid-cols-1 md:grid-cols-3  gap-12 mb-8">
          
//           {/* Brand/Logo Column */}
//           <div className="flex flex-col items-start">
//             <div className="flex items-center gap-2 mb-6">
              
//              <img src="/img/logo.svg" alt="" />
//             </div>
//             <p className="text-[#EDE4D9] text-sm font-lora md:text-base font-normal leading-relaxed mb-4 text-left">
//               Empowering women through AI-powered  health coaching and community support.
//             </p>
//             <p className="text-[#C9A96E] font-lora text-sm italic font-semibold leading-6">
//               "Reclaim Your Power — Beyond the Number"
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div className="flex flex-col font-lora items-start">
//             <h4 className="text-[#C9A96E] font-normal text-base md:text-lg leadiing-6 mb-6">Quick Links</h4>
//             <ul className="space-y-4 text-sm md:text-base text-[#EDE4D9] leading-6 text-left">
//               <li className="hover:text-amber-400 cursor-pointer transition-colors">Home</li>
//               <li className="hover:text-amber-400 cursor-pointer transition-colors">Features</li>
//               <li className="hover:text-amber-400 cursor-pointer transition-colors">About</li>
//               <li className="hover:text-amber-400 cursor-pointer transition-colors font-semibold">Join Waitlist</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="flex flex-col font-lora items-start">
//             <h4 className="text-[#C9A96E] font-semibold text-base md:text-lg leading-6 mb-6">Contact</h4>
//             <p className="text-sm md:text-base font-normal text-[#EDE4D9] leading-4 hover:text-amber-400 cursor-pointer">
//               privacy@fightthenumber.com
//             </p>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="w-full h-px bg-white/10 mb-8" />

//         {/* Copyright & Policy Links */}
//         <div className="text-center mb-10">
//           <p className="text-sm font-normal font-lora leading-5 text-[#EDE4D9] mb-4">
//             © 2026 Fight the Number. All rights reserved.
//           </p>
//           <div className="flex justify-center gap-6 text-base font-lora font-medium ">
//             <span className="cursor-pointer text-[#EDE4D9] hover:text-amber-400">Privacy Policy</span>
//             <span className="text-gray-700">|</span>
//             <span className="cursor-pointer text-[#EDE4D9] hover:text-amber-400">Terms of Use</span>
//           </div>
//         </div>

//         {/* Privacy Policy Card - Aligned with the content above */}
//         <div className="bg-[#162a4a]/40 backdrop-blur-md border border-white/10 font-lora rounded-2xl p-3 md:p-6 text-left">
//           <h3 className="text-[#C9A96E]  font-bold text-lg leading-7 mb-4">Privacy Policy</h3>
//           <p className="text-[#EDE4D9] text-sm leading-5 font-normal mb-4 ">Effective Date: February 24, 2026</p>
          
//           <div className="space-y-3 text-sm text-[#EDE4D9] font-normal  leading-relaxed max-w-3xl">
//             <p>At Fight the Number, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website or join our waitlist.</p>
            
//             <p><strong className="text-[#C9A96E]">Information We Collect:</strong> We collect email addresses and optional details like name and life stage for waitlist purposes.</p>
            
//             <p><strong className="text-[#C9A96E]">How We Use It:</strong> To notify you about launches, updates, and personalized content. We do not sell your data.</p>
//             <p><strong className="text-[#C9A96E]">Data Security:</strong>  We use industry-standard measures to protect your information.</p>
//             <p><strong className="text-[#C9A96E]"> Your Rights:</strong>  You can unsubscribe or request data deletion anytime. Contact: privacy@fightthenumber.com</p>
//             <p><strong className="text-[#C9A96E]">Changes:</strong>   We may update this policy; check back periodically.</p>
//           </div>
//            <p className='text-sm font-normal font-lora leading-5 text-[#EDE4D9]'>By joining, you consent to this policy.</p>
//         </div>
//       </div>

//       {/* Bottom spacing for balance */}
//       <div className="pb-10" />
//     </footer>
//   );
// };

// export default Footer;