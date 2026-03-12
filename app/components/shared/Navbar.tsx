"use client";

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeHash, setActiveHash] = useState<string>('#home');
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Features', href: '/features' },
    { name: 'About', href: '/about' },
    { name: 'Numera', href: '/numera' },
    { name: 'Community', href: '/community' },
    
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
  ];

  // Track which section is currently visible using IntersectionObserver
  useEffect(() => {
    if (pathname !== '/') return; // only on home page

    const sectionIds = ['home', 'features', 'community', 'about'];

    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${id}`);
          }
        },
        {
          rootMargin: '-40% 0px -55% 0px', // triggers when section is roughly in middle of screen
          threshold: 0,
        }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const isActive = (href: string): boolean => {
    if (href.startsWith('#')) {
      // Hash links only active on home page, based on scroll position
      return pathname === '/' && activeHash === href;
    }
    // Page links match pathname
    return pathname === href;
  };

  const linkClass = (href: string) => {
    const active = isActive(href);
    return `
      text-sm sm:text-base font-medium leading-6 cursor-pointer transition-colors duration-200
      ${active
        ? 'text-amber-400 underline underline-offset-4 decoration-2'
        : 'text-[#F8F1E9] hover:text-amber-400 hover:underline hover:underline-offset-4 hover:decoration-2'
      }
    `;
  };

  return (
    <nav className="bg-[#001F3FF2] sticky top-0 z-50 text-white px-6 md:px-18 py-2 relative">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/img/logo.svg" alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              {item.href.startsWith('#') ? (
                <a href={item.href} className={linkClass(item.href)}>
                  {item.name}
                </a>
              ) : (
                <Link href={item.href} className={linkClass(item.href)}>
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
            Join the Waitlist
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-amber-500 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a192f] border-t border-gray-800 md:hidden z-50">
          <ul className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <li
                key={item.name}
                className={`text-lg font-medium font-lora transition-colors duration-200 ${
                  isActive(item.href)
                    ? 'text-amber-400 underline underline-offset-4 decoration-2'
                    : 'text-[#F8F1E9] hover:text-amber-400'
                }`}
                onClick={() => setIsOpen(false)}
              >
                <a href={item.href}>{item.name}</a>
              </li>
            ))}
            <li>
              <button className="w-full font-lora bg-gradient-to-b from-[#C9A96E] to-[#57431F] py-4 rounded-md font-bold">
                Join the Waitlist
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




// "use client";

// import React, { useState } from 'react';
// // You can use lucide-react or any icon library
// import { Menu, X } from 'lucide-react';



// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const navItems = ['Home', 'Features','About', "Numera", 'Community', ,'Blog','Pricing','Support'];

//   return (
//     <nav className="bg-[#001F3FF2] sticky top-0 z-50  text-white px-6 md:px-18 py-2 relative">
//       <div className=" flex items-center justify-between">

//         {/* Logo Section */}
//         <div className="flex items-center gap-2">

    
//         <img src="/img/logo.svg" alt="" />
//         </div>

//         {/* Desktop Navigation */}
//         <ul className="hidden md:flex space-x-8 text-sm font-medium">
//           {navItems.map((item) => (
//             <li key={item} className="hover:text-amber-400 text-[#F8F1E9] tex-sm sm:text-base font-medium leading-6 cursor-pointer transition-colors">
//               {item}
//             </li>
//           ))}
//         </ul>

//         {/* Desktop CTA */}
//         <div className="hidden md:block">
          
//           <button className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
//             Join the Waitlist
//           </button>
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden flex items-center">
//           <button 
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-amber-500 focus:outline-none"
//           >
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu Dropdown */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-[#0a192f] border-t border-gray-800 md:hidden z-50">
//           <ul className="flex flex-col p-6 space-y-4">
//             {navItems.map((item) => (
//               <li 
//                 key={item} 
            
//                 className="text-lg font-medium font-lora hover:text-amber-400"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </li>
//             ))}
//             <li>
              
//               <button className="w-full font-lora bg-gradient-to-b from-[#C9A96E] to-[#57431F]  py-4  rounded-md font-bold">
//                 Join the Waitlist
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };
// export default Navbar