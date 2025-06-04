// components/Topbar.tsx
'use client';

import React from 'react';
import ThemeToggle from './ThemeToggle';
import { FaBars, FaSearch } from 'react-icons/fa'; // Import FaSearch for the search icon
import Link from 'next/link';

interface TopbarProps {
  toggleSidebar: () => void;
}

export default function Topbar({ toggleSidebar }: TopbarProps) {
  return (
    <header className="p-4 flex items-center justify-between
                       bg-sidebar-background text-sidebar-foreground
                       shadow-md transition-colors duration-300 ease-in-out">

      {/* Left section: Mobile menu button and Logo */}
      <div className="flex items-center space-x-4">
        <button onClick={toggleSidebar} className="md:hidden p-2 text-xl">
          <FaBars />
        </button>
        <Link href="/" className="text-xl font-bold md:hidden">
          MetaMatch
        </Link>
      </div>

      {/* Right Section: Search, Login, Theme Toggle */}
      <div className="flex items-center space-x-4">
        {/* Search Input */}
        <div className="relative hidden md:block"> {/* Hidden on mobile, block on medium screens and up */}
          <input
            type="text"
            placeholder="Search..."
            className="py-2 pl-10 pr-4 rounded-md bg-input-background text-input-foreground
                       focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent
                       transition-colors duration-200"
          />
          {/* Explicitly setting icon color: dark grey in light mode, white in dark mode */}
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-600 dark:text-white" />
        </div>

        {/* Login Button */}
        <Link href="/login" className="hidden md:block py-2 px-4 rounded-md
                                       bg-primary text-primary-foreground
                                       hover:bg-primary-hover transition-colors duration-200">
          Login
        </Link>

        {/* Theme Toggle */}
        <ThemeToggle />
      </div>
    </header>
  );
}