import React, { useState } from "react";
import { navbarLinks } from "../constants";
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import Logo from '../assets/diit.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state
  const [searchOpen, setSearchOpen] = useState(false); // Search input state
  const [openDropdown, setOpenDropdown] = useState(null); // Mobile dropdown state

  const toggleMobileMenu = () => {
    setIsOpen(!isOpen);
    setOpenDropdown(null); // Close all dropdowns when toggling the menu
  };

  const handleDropdownClick = (index) => {
    // Toggle the dropdown for the specific index
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white px-4 py-3 relative">
      <div className="container mx-auto flex justify-between items-center relative">
        {/* Brand */}
        <div className="w-16 lg:w-20">
          <a href="/"><img src={Logo} alt="DIIT Logo" /></a>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden lg:flex gap-6 items-center">
          {navbarLinks.map((link) => (
            <div key={link.name} className="relative group">
              <a href={link.href} className="flex items-center gap-1">
                {link.name}
                {link.dropdown && <ChevronDown size={16} />}
              </a>
              {/* Desktop Dropdown Menu */}
              {link.dropdown && (
                <div className="absolute left-0 hidden group-hover:block bg-white border border-blue-400 text-black space-y-3 rounded shadow-lg z-50 w-80 px-5 py-5 duration-300">
                  {link.dropdown.map((item, dropIndex) => (
                    <a 
                      key={dropIndex} 
                      href="#" 
                      className="block space-y-5 hover:text-gray-400 duration-300"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Search Icon */}
        <div className="relative hidden lg:flex items-center gap-4">
          <button onClick={() => setSearchOpen(!searchOpen)} className="text-gray-600">
            <Search size={20} />
          </button>
          <button className="bg-blue-700 text-white px-4 py-2 rounded hover:bg-blue-800">
            Apply Now
          </button>
          {searchOpen && (
            <div className="absolute top-12 right-0 bg-white text-black rounded shadow-lg p-2 z-50">
              <input
                type="text"
                placeholder="Search..."
                className="px-3 py-2 border rounded w-64 focus:outline-none"
              />
            </div>
          )}
        </div>
        
        {/* Mobile Search and Menu Icons */}
        <div className="flex items-center lg:hidden">
          {/* Mobile Search Icon */}
          <button 
            onClick={() => setSearchOpen(!searchOpen)} 
            className="mr-4 text-gray-600"
          >
            <Search size={20} />
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={toggleMobileMenu} className="text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Search */}
      {searchOpen && (
        <div className="lg:hidden bg-white text-black p-3 absolute top-full left-0 right-0 z-50">
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 border rounded w-full focus:outline-none"
          />
        </div>
      )}

      {/* Mobile Sliding Menu */}
      <div 
        className={`
          fixed top-0 right-0 w-3/4 md:w-2/5 h-full bg-indigo-950 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
          z-50 overflow-y-auto
        `}
      >
        <div className="p-4 flex justify-end">
          <button onClick={toggleMobileMenu} className="text-white">
            <X size={24} />
          </button>
        </div>

        <div className="px-4">
          {navbarLinks.map((link, index) => (
            <div key={link.name} className="mb-4">
              <div 
                className="flex items-center justify-between py-2 text-white cursor-pointer"
                onClick={() => handleDropdownClick(index)} // Handle dropdown toggle on click
              >
                <span className="uppercase font-medium">{link.name}</span>
                {link.dropdown && (
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${
                      openDropdown === index ? "rotate-180" : "rotate-0"
                    }`}
                  />
                )}
              </div>
              
              {/* Mobile Dropdown */}
              {link.dropdown && openDropdown === index && (
                <div className="pl-4 mt-2 space-y-2">
                  {link.dropdown.map((item, dropIndex) => (
                    <a 
                      key={dropIndex} 
                      href="#" 
                      className="block text-sm text-white uppercase"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
