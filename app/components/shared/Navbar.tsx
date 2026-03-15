"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeHash, setActiveHash] = useState<string>('#home');
  const pathname = usePathname();
  const [featureOpen, setFeatureOpen] = useState(false);

  // ✅ Fix 1: ref শুধু features dropdown এর container এ attach করো
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', href: '/' },
    {
      name: 'All Features',
      href: '/features',
      children: [
        { name: 'All Features', href: '/features' },
        { name: 'Vitality Rebellion', href: '/features/vitality' },
        { name: 'Movement as Medicine', href: '/features/movement' },
      ],
    },
    { name: 'Fight Tool', href: '/fighttool' },
    { name: 'About', href: '/about' },
    { name: 'Numera', href: '/numera' },
    { name: 'Community', href: '/community' },
    { name: 'Blog', href: '/blog' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Support', href: '/support' },
  ];

  // ✅ Show active child name in dropdown button
  const getActiveChildName = (children: { name: string; href: string }[]) => {
    const activeChild = children.find((child) => pathname === child.href);
    return activeChild ? activeChild.name : null;
  };

  // ✅ Fix 2: outside click — শুধু featureOpen থাকলে close করো
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        featureOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setFeatureOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [featureOpen]); // ✅ featureOpen dependency add করো

  useEffect(() => {
    if (pathname !== '/') return;

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
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  const isActive = (href: string, hasChildren?: boolean): boolean => {
    if (href.startsWith('#')) {
      return pathname === '/' && activeHash === href;
    }
    // ✅ Parent with children: active if pathname starts with href (covers /features, /features/vitality etc.)
    if (hasChildren) {
      return pathname === href || pathname.startsWith(href + '/');
    }
    return pathname === href;
  };

  const linkClass = (href: string, hasChildren?: boolean) => {
    const active = isActive(href, hasChildren);
    return `
      text-sm sm:text-base font-medium leading-6 cursor-pointer transition-colors duration-200
      ${active
        ? 'text-amber-400 underline underline-offset-4 decoration-2'
        : 'text-[#F8F1E9] hover:text-amber-400 hover:underline hover:underline-offset-4 hover:decoration-2'
      }
    `;
  };

  return (
    <nav className="bg-[#001F3FF2] sticky top-0 z-50 text-white px-6 xl:px-18 py-2 relative">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/img/logo.svg" alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item.name} className="relative">

              {item.children ? (
               
                <div ref={dropdownRef}>
                  <div
                    className="flex items-center gap-1 cursor-pointer"
                    onClick={(e) => {
                      e.stopPropagation();
                      setFeatureOpen((prev) => !prev);
                    }}
                  >
                    
                    <span className={linkClass(item.href, true)}>
                      {getActiveChildName(item.children) ?? item.name}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-amber-400 ${featureOpen ? 'rotate-180' : ''}`}
                    />
                  </div>

                  {/* Dropdown */}
                  {featureOpen && (
                    <ul className="absolute top-8 left-0 bg-[#0a192f] border border-gray-700 rounded-md shadow-lg w-56 py-2 z-50">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className={`block px-4 py-2 text-sm hover:bg-[#C9A96E24] ${
                              pathname === child.href
                                ? 'text-amber-400'
                                : 'text-white hover:text-amber-400'
                            }`}
                            onClick={() => setFeatureOpen(false)}
                          >
                            {child.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ) : (
                <Link href={item.href} className={linkClass(item.href, false)}>
                  {item.name}
                </Link>
              )}

            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <button className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
            Join the Waitlist
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-amber-500 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a192f] border-t border-gray-800 lg:hidden z-50">
          <ul className="flex flex-col p-6 space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="font-lora">

                {item.children ? (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setFeatureOpen((prev) => !prev)}
                    >
                      <span className={`text-lg ${
                        pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'text-amber-400 underline underline-offset-4 decoration-2'
                          : 'text-[#F8F1E9]'
                      }`}>
                        {/* ✅ Mobile তেও active child নাম দেখাও */}
                        {getActiveChildName(item.children) ?? item.name}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${featureOpen ? 'rotate-180' : ''}`}
                      />
                    </div>

                    {featureOpen && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              className={`block text-base hover:bg-[#C9A96E24] py-1 ${
                                pathname === child.href
                                  ? 'text-amber-400'
                                  : 'text-gray-300 hover:text-amber-400'
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setFeatureOpen(false);
                              }}
                            >
                              {child.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`block text-lg hover:text-amber-400 ${
                      pathname === item.href ? 'text-amber-400' : 'text-[#F8F1E9]'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}

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