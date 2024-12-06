import React from "react";
import { Phone, Mail, User, LogIn } from "lucide-react";

const TopBar = () => {
  return (
    <div className="hidden lg:flex bg-darkBlue text-white py-2 text-sm">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Section: Phone and Email */}
        <div className="flex items-center gap-4">
          <a href="#" className="flex items-center gap-1">
            <Phone size={16} className="text-white" /> +880 1713-493287
          </a>
          <a href="#" className="flex items-center gap-1">
            <Mail size={16} className="text-white" /> admission@diit.edu.bd
          </a>
        </div>

        {/* Middle Section: Marquee Text */}
        <div className="flex-1 mx-4 overflow-hidden">
          <marquee behavior="scroll" direction="left">
            🎉 Welcome to DIIT! | Admissions Open for 2024 | Contact us for more
            details. 🎓
          </marquee>
        </div>

        {/* Right Section: Buttons */}
        <div className="flex items-center gap-4">
          <button className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-200 flex items-center gap-2">
            <User size={16} />
            Faculty Login
          </button>
          <button className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-200 flex items-center gap-2">
            <LogIn size={16} />
            Student Login
          </button>
          <button className="bg-white text-blue-700 px-3 py-1 rounded hover:bg-gray-200 flex items-center gap-2">
            <User size={16} />
            Alumni
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
