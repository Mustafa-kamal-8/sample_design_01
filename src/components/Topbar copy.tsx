// components/TopBar.tsx
"use client";

import React from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaRegSun, FaSearch } from 'react-icons/fa';

interface TopBarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const TopBar: React.FC<TopBarProps> = ({
  isSidebarOpen,
  toggleSidebar,
  isDarkMode,
  toggleTheme,
}) => {
  return (
    // --- CHANGE HERE: bg-[#3b5998] to bg-white or transparent ---
    // You can also add shadow-md if you want a subtle line under it.
    // For transparent, use 'bg-transparent'
    // For white, use 'bg-white' and consider 'text-gray-800' for elements
    <header className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md fixed top-0 right-0 z-50 md:left-80 md:w-auto w-full">
      <div className="flex items-center space-x-4">
        {/* Mobile menu toggle button (visible only on smaller screens) */}
        <button className="md:hidden text-2xl" onClick={toggleSidebar}>
          {isSidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* --- ADDED HERE: MetaMatch Logo --- */}
        {/* Based on image_046a22.png, logo is prominently in TopBar */}
        <Link href="/" className="text-blue-600 text-3xl font-bold"> {/* text-blue-600 for blue "Meta" part */}
          Meta<span className="text-gray-800">Match</span> {/* Span for "Match" in dark gray */}
        </Link>

        {/* Search Bar (optional) */}
        <div className="relative hidden md:block ml-4">
          <input
            type="text"
            placeholder="Search..."
            className="py-1 px-3 pl-10 rounded-md text-gray-800 bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <select className="bg-white text-gray-800 py-1 px-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500">
          <option>USD</option>
          <option>INR</option>
        </select>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition-colors duration-200">Log In</button>
        <FaRegSun
          className="text-gray-700 text-xl cursor-pointer" // Changed to gray for visibility on white background
          onClick={toggleTheme}
        />
      </div>
    </header>
  );
};

export default TopBar;