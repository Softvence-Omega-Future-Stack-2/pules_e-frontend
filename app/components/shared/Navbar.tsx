"use client";

import React, { useState } from 'react';
// You can use lucide-react or any icon library
import { Menu, X } from 'lucide-react';
import logo from '/public/img/logo.png'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const navItems = ['Home', 'Features', 'Community', 'About'];

  return (
    <nav className="bg-[#001F3FF2] text-white px-6 md:px-18 py-2 relative">
      <div className=" flex items-center justify-between">
        
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          
        <img src="/img/logo.png" alt="" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium">
          {navItems.map((item) => (
            <li key={item} className="hover:text-amber-400 text-[#F8F1E9] tex-sm sm:text-base font-medium leading-6 cursor-pointer transition-colors">
              {item}
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-b from-[#C9A96E] to-[#57431F] px-8 py-4 rounded-md text-sm font-bold shadow-lg hover:brightness-110 cursor-pointer transition-all">
            Join the Waitlist
          </button>
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
            {navItems.map((item) => (
              <li 
                key={item} 
                className="text-lg font-medium hover:text-amber-400"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </li>
            ))}
            <li>
              <button className="w-full bg-gradient-to-b from-[#C9A96E] to-[#57431F]  py-4  rounded-md font-bold">
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