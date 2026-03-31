"use client";

import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import CartIcon from './cartIcon';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [activeHash, setActiveHash] = useState<string>('#home');
  const pathname = usePathname();
  const [featureOpen, setFeatureOpen] = useState(false);
  const [mobileFeatureOpen, setMobileFeatureOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: 'Home', href: '/site/home' },
    {
      name: 'All Features',
      href: '/site/features',
      children: [
        { name: 'All Features', href: '/site/features' },
        { name: 'Vitality Rebellion', href: '/site/features/vitality' },
        { name: 'Movement as Medicine', href: '/site/features/movement' },
        { name: 'Fight Tool', href: '/site/fighttool' },
        { name: 'Numera', href: '/site/numera' },
      ],
    },
    { name: 'About', href: '/site/about' },
    { name: 'Community', href: '/site/community' },
    { name: 'Blog', href: '/site/blog' },
    { name: 'Pricing', href: '/site/pricing' },
    { name: 'Support', href: '/site/support' },
    { name: 'Shop', href: '/site/shop' },
  ];

  const getActiveChildName = (children: { name: string; href: string }[]) => {
    const activeChild = children.find((child) => pathname === child.href);
    return activeChild ? activeChild.name : null;
  };


  const isActive = (href: string, hasChildren?: boolean, children?: { name: string; href: string }[]): boolean => {
    if (href.startsWith('#')) {
      return pathname === '/' && activeHash === href;
    }
    if (hasChildren && children) {
     
      const childMatch = children.some(
        (child) => pathname === child.href || pathname.startsWith(child.href + '/')
      );
      return pathname === href || pathname.startsWith(href + '/') || childMatch;
    }
    return pathname === href || pathname.startsWith(href + '/');
  };

  const linkClass = (href: string, hasChildren?: boolean, children?: { name: string; href: string }[]) => {
    const active = isActive(href, hasChildren, children);
    return `
      text-sm sm:text-base font-medium leading-6 cursor-pointer transition-colors duration-200
      ${active
        ? 'text-amber-400 underline underline-offset-4 decoration-2'
        : 'text-[#F8F1E9] hover:text-amber-400 hover:underline hover:underline-offset-4 hover:decoration-2'
      }
    `;
  };

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
  }, [featureOpen]);

  useEffect(() => {
    if (pathname !== '/') return;
    const sectionIds = ['home', 'features', 'community', 'about'];
    const observers: IntersectionObserver[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveHash(`#${id}`); },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [pathname]);

  useEffect(() => {
    setIsOpen(false);
    setFeatureOpen(false);
    setMobileFeatureOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <nav className="bg-[#001F3FF2] sticky top-0 z-50 text-white px-6 xl:px-18 py-2 relative">
      <div className="flex items-center justify-between">

        {/* Logo */}
        <Link href="/site">
          <div className="flex items-center gap-2 cursor-pointer">
            <img src="/img/logo.svg" alt="Logo" />
          </div>
        </Link>

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
                    {/* ✅ item.children pass করা হচ্ছে */}
                    <span className={linkClass(item.href, true, item.children)}>
                      {getActiveChildName(item.children) ?? item.name}
                    </span>
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 text-amber-400 ${featureOpen ? 'rotate-180' : ''}`}
                    />
                  </div>

                  {featureOpen && (
                    <ul className="absolute top-8 left-0 bg-[#0a192f] border border-gray-700 rounded-md shadow-lg w-56 py-2 z-50">
                      {item.children.map((child) => (
                        <li key={child.name}>
                          <Link
                            href={child.href}
                            className={`block px-4 py-2 ${linkClass(child.href)}`}
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
        <div className="hidden lg:block lg:flex gap-4">
            <Link href="/site/cart">
          <button className='cursor-pointer'>
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M29.2656 2.7334H26.599L23.0523 19.2934C22.9222 19.8999 22.5847 20.442 22.098 20.8265C21.6113 21.2111 21.0058 21.4139 20.3856 21.4001H7.34562C6.73872 21.3991 6.15031 21.1911 5.67759 20.8105C5.20486 20.4299 4.87611 19.8994 4.74562 19.3067L2.54562 9.40007H25.1723M19.9987 28C19.9987 28.7364 20.5957 29.3333 21.332 29.3333C22.0684 29.3333 22.6654 28.7364 22.6654 28C22.6654 27.2636 22.0684 26.6667 21.332 26.6667C20.5957 26.6667 19.9987 27.2636 19.9987 28ZM5.33203 28C5.33203 28.7364 5.92898 29.3333 6.66536 29.3333C7.40174 29.3333 7.9987 28.7364 7.9987 28C7.9987 27.2636 7.40174 26.6667 6.66536 26.6667C5.92898 26.6667 5.33203 27.2636 5.33203 28Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg> */}
<CartIcon/>
          </button>
          </Link>
          <Link href="/waitlist">
            <button className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] px-2 xl:px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
              Join the Waitlist
            </button>
          </Link>
          <Link href="/site/login">
            <button className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] px-2 xl:px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
              Login
            </button>
          </Link>
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
        <div className="fixed top-0 left-0 w-full h-screen bg-[#0a192f] border-t border-gray-800 lg:hidden z-50 overflow-y-auto">
          <ul className="flex flex-col p-6 pt-16 space-y-4">
            {navItems.map((item) => (
              <li key={item.name} className="font-lora">
                {item.children ? (
                  <>
                    <div
                      className="flex items-center justify-between cursor-pointer"
                      onClick={() => setMobileFeatureOpen((prev) => !prev)}
                    >
                      <span className={`text-lg ${
                        // ✅ Mobile তেও children check
                        item.children.some(child => pathname === child.href)
                          ? 'text-amber-400 underline underline-offset-4 decoration-2'
                          : pathname === item.href || pathname.startsWith(item.href + '/')
                          ? 'text-amber-400 underline underline-offset-4 decoration-2'
                          : 'text-[#F8F1E9]'
                      }`}>
                        {getActiveChildName(item.children) ?? item.name}
                      </span>
                      <ChevronDown
                        size={18}
                        className={`transition-transform duration-200 ${mobileFeatureOpen ? 'rotate-180' : ''}`}
                      />
                    </div>

                    {mobileFeatureOpen && (
                      <ul className="mt-2 ml-4 space-y-2">
                        {item.children.map((child) => (
                          <li key={child.name}>
                            <Link
                              href={child.href}
                              className={`block text-base py-2 px-2 rounded hover:bg-[#C9A96E24] ${
                                pathname === child.href
                                  ? 'text-amber-400 underline underline-offset-4 decoration-2'
                                  : 'text-gray-300 hover:text-amber-400'
                              }`}
                              onClick={() => {
                                setIsOpen(false);
                                setMobileFeatureOpen(false);
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
              <Link href="/waitlist">
                <button className="w-full font-lora bg-gradient-to-b from-[#C9A96E] to-[#57431F] py-4 rounded-md font-bold">
                  Join the Waitlist
                </button>
              </Link>
            </li>
            <li>
              <Link href="/login">
                <button className="w-full font-lora bg-gradient-to-b from-[#C9A96E] to-[#57431F] py-4 rounded-md font-bold">
                  Login
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;




// "use client";

// import React, { useState, useEffect, useRef } from 'react';
// import { ChevronDown, Menu, X } from 'lucide-react';
// import Link from 'next/link';
// import { usePathname } from 'next/navigation';

// const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);
//   const [activeHash, setActiveHash] = useState<string>('#home');
//   const pathname = usePathname();
//   const [featureOpen, setFeatureOpen] = useState(false);


//   const dropdownRef = useRef<HTMLDivElement>(null);

//   const navItems = [
//     { name: 'Home', href: '/' },
//     {
//       name: 'All Features',
//       href: '/features',
//       children: [
//         { name: 'All Features', href: '/features' },
//         { name: 'Vitality Rebellion', href: '/features/vitality' },
//         { name: 'Movement as Medicine', href: '/features/movement' },
//       ],
//     },
//     { name: 'Fight Tool', href: '/fighttool' },
//     { name: 'About', href: '/about' },
//     { name: 'Numera', href: '/numera' },
//     { name: 'Community', href: '/community' },
//     { name: 'Blog', href: '/blog' },
//     { name: 'Pricing', href: '/pricing' },
//     { name: 'Support', href: '/support' },
//   ];

//   const getActiveChildName = (children: { name: string; href: string }[]) => {
//     const activeChild = children.find((child) => pathname === child.href);
//     return activeChild ? activeChild.name : null;
//   };

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         featureOpen &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as Node)
//       ) {
//         setFeatureOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [featureOpen]);

//   useEffect(() => {
//     if (pathname !== '/') return;

//     const sectionIds = ['home', 'features', 'community', 'about'];
//     const observers: IntersectionObserver[] = [];

//     sectionIds.forEach((id) => {
//       const el = document.getElementById(id);
//       if (!el) return;

//       const observer = new IntersectionObserver(
//         ([entry]) => {
//           if (entry.isIntersecting) {
//             setActiveHash(`#${id}`);
//           }
//         },
//         { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
//       );

//       observer.observe(el);
//       observers.push(observer);
//     });

//     return () => observers.forEach((o) => o.disconnect());
//   }, [pathname]);

//   const isActive = (href: string, hasChildren?: boolean): boolean => {
//     if (href.startsWith('#')) {
//       return pathname === '/' && activeHash === href;
//     }
 
//     if (hasChildren) {
//       return pathname === href || pathname.startsWith(href + '/');
//     }
//     return pathname === href;
//   };

//   const linkClass = (href: string, hasChildren?: boolean) => {
//     const active = isActive(href, hasChildren);
//     return `
//       text-sm sm:text-base font-medium leading-6 cursor-pointer transition-colors duration-200
//       ${active
//         ? 'text-amber-400 underline underline-offset-4 decoration-2'
//         : 'text-[#F8F1E9] hover:text-amber-400 hover:underline hover:underline-offset-4 hover:decoration-2'
//       }
//     `;
//   };

//   return (
//     <nav className="bg-[#001F3FF2] sticky top-0 z-50 text-white px-6 xl:px-18 py-2 relative">
//       <div className="flex items-center justify-between">

//         {/* Logo */}
//         <div className="flex items-center gap-2">
//           <img src="/img/logo.svg" alt="Logo" />
//         </div>

//         {/* Desktop Nav */}
//         <ul className="hidden lg:flex space-x-8 text-sm font-medium">
//           {navItems.map((item) => (
//             <li key={item.name} className="relative">

//               {item.children ? (
               
//                 <div ref={dropdownRef}>
//                   <div
//                     className="flex items-center gap-1 cursor-pointer"
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setFeatureOpen((prev) => !prev);
//                     }}
//                   >
                    
//                     <span className={linkClass(item.href, true)}>
//                       {getActiveChildName(item.children) ?? item.name}
//                     </span>
//                     <ChevronDown
//                       size={16}
//                       className={`transition-transform duration-200 text-amber-400 ${featureOpen ? 'rotate-180' : ''}`}
//                     />
//                   </div>

//                   {/* Dropdown */}
//                   {featureOpen && (
//                     <ul className="absolute top-8 left-0 bg-[#0a192f] border border-gray-700 rounded-md shadow-lg w-56 py-2 z-50">
//                       {item.children.map((child) => (
//                         <li key={child.name}>
//                           <Link
//                             href={child.href}
//                             className={`block px-4 py-2 text-sm hover:bg-[#C9A96E24] ${
//                               pathname === child.href
//                                 ? 'text-amber-400'
//                                 : 'text-white hover:text-amber-400'
//                             }`}
//                             onClick={() => setFeatureOpen(false)}
//                           >
//                             {child.name}
//                           </Link>
//                         </li>
//                       ))}
//                     </ul>
//                   )}
//                 </div>
//               ) : (
//                 <Link href={item.href} className={linkClass(item.href, false)}>
//                   {item.name}
//                 </Link>
//               )}

//             </li>
//           ))}
//         </ul>

//         {/* Desktop CTA */}
//         <div className="hidden lg:block lg:flex gap-4">
//            <Link href="/waitlist">
//           <button className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] px-2 xl:px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
//             Join the Waitlist
//           </button>
//           </Link>
//            <Link href="/login">
//           <button className="bg-gradient-to-b font-lora from-[#C9A96E] to-[#57431F] px-2 xl:px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
//             Login
//           </button>
//           </Link>
//         </div>

//         {/* Mobile Toggle */}
//         <div className="lg:hidden flex items-center">
//           <button onClick={() => setIsOpen(!isOpen)} className="text-amber-500 focus:outline-none">
//             {isOpen ? <X size={28} /> : <Menu size={28} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-[#0a192f] border-t border-gray-800 lg:hidden z-50">
//           <ul className="flex flex-col p-6 space-y-4">
//             {navItems.map((item) => (
//               <li key={item.name} className="font-lora">

//                 {item.children ? (
//                   <>
//                     <div
//                       className="flex items-center justify-between cursor-pointer"
//                       onClick={() => setFeatureOpen((prev) => !prev)}
//                     >
//                       <span className={`text-lg ${
//                         pathname === item.href || pathname.startsWith(item.href + '/')
//                           ? 'text-amber-400 underline underline-offset-4 decoration-2'
//                           : 'text-[#F8F1E9]'
//                       }`}>
                        
//                         {getActiveChildName(item.children) ?? item.name}
//                       </span>
//                       <ChevronDown
//                         size={18}
//                         className={`transition-transform duration-200 ${featureOpen ? 'rotate-180' : ''}`}
//                       />
//                     </div>

//                     {featureOpen && (
//                       <ul className="mt-2 ml-4 space-y-2">
//                         {item.children.map((child) => (
//                           <li key={child.name}>
//                             <Link
//                               href={child.href}
//                               className={`block text-base hover:bg-[#C9A96E24] py-1 ${
//                                 pathname === child.href
//                                   ? 'text-amber-400'
//                                   : 'text-gray-300 hover:text-amber-400'
//                               }`}
//                               onClick={() => {
//                                 setIsOpen(false);
//                                 setFeatureOpen(false);
//                               }}
//                             >
//                               {child.name}
//                             </Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </>
//                 ) : (
//                   <Link
//                     href={item.href}
//                     className={`block text-lg hover:text-amber-400 ${
//                       pathname === item.href ? 'text-amber-400' : 'text-[#F8F1E9]'
//                     }`}
//                     onClick={() => setIsOpen(false)}
//                   >
//                     {item.name}
//                   </Link>
//                 )}

//               </li>
//             ))}

//             <li>
//                <Link href="/waitlist">
//               <button className="w-full font-lora bg-gradient-to-b from-[#C9A96E] to-[#57431F] py-4 rounded-md font-bold">
//                 Join the Waitlist
//               </button>
//               </Link>
//             </li>
//             <li>
//                <Link href="/login">
//               <button className="w-full font-lora bg-gradient-to-b from-[#C9A96E] to-[#57431F] py-4 rounded-md font-bold">
//                 Login
//               </button>
//               </Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;



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