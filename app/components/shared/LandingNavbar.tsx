"use client"
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const LandingNavbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);



  return (
    <nav className="bg-[#001F3FF2] sticky top-0 z-50 text-white px-6 md:px-18 py-2 relative">
      <div className="flex items-center justify-between">

        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="/img/logo.svg" alt="Logo" />
        </div>

    
  

        {/* Desktop CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          {/* Explore the Full Site Button */}
      <a href="/site">
  <button className="bg-gradient-to-b from-[#8a6d3b] to-[#c5a059] px-5 py-4 rounded-md text-sm font-semibold text-white shadow-lg hover:brightness-110 transition-all cursor-pointer">
    Explore the Full Site
  </button>
</a>

          {/* Join the Waitlist Button */}
          <Link href="/waitlist">
          <button className="bg-gradient-to-b from-[#C9A96E] to-[#57431F] px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
            Join the Waitlist
          </button>
        </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-amber-500 focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0a192f] border-t border-gray-800 md:hidden z-50">
          <ul className="flex flex-col p-6 space-y-4">
           
            <li>
              <a href="/site">
                <button className="w-full bg-gradient-to-b from-[#8a6d3b] to-[#c5a059] border border-[#2a5298] py-4 rounded-md font-semibold text-white mb-2">
                  Explore the Full Site
                </button>
              </a>
            </li>
            <li>
              <button className="w-full bg-gradient-to-b from-[#C9A96E] to-[#57431F] py-4 rounded-md font-bold">
                Join the Waitlist
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default LandingNavbar;





// "use client"
// import { Menu, X } from "lucide-react";
// import { useState } from "react";


// const LandingNavbar: React.FC = () => {
//   const [isOpen, setIsOpen] = useState<boolean>(false);

//   const navItems = ['Home', 'Features', 'Community', 'About','Blog', 'Pricing', 'Shop'];

//   return (
//     <nav className="bg-[#001F3FF2] text-white px-6 md:px-18 py-2 relative">
//       <div className=" flex items-center justify-between">
        
//         {/* Logo Section */}
//         <div className="flex items-center gap-2">
          
//           <img src="/img/logo.svg" alt="Logo" />
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
//           <button className="bg-gradient-to-b from-[#C9A96E] to-[#57431F] px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
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
//                 className="text-lg font-medium hover:text-amber-400"
//                 onClick={() => setIsOpen(false)}
//               >
//                 {item}
//               </li>
//             ))}
//             <li>
//               <button className="w-full bg-gradient-to-b from-[#C9A96E] to-[#57431F]  py-4  rounded-md font-bold">
//                 Join the Waitlist
//               </button>
//             </li>
//           </ul>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default LandingNavbar
