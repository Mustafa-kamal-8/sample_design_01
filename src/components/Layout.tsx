// components/Layout.tsx
"use client";

import React, { useState } from "react";
import TopBar from "../components/Topbar";
import Leftbar from "../components/Leftbar"; // IMPORT THE RENAMED COMPONENT HERE
import Rightbar from "../components/rightbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      document.documentElement.classList.toggle("dark", newMode);
      return newMode;
    });
  };

  return (
<div className={`min-h-screen flex flex-col ${isDarkMode ? "dark" : ""}`}>
  <TopBar
    isSidebarOpen={isSidebarOpen}
    toggleSidebar={toggleSidebar}
    isDarkMode={isDarkMode}
    toggleTheme={toggleTheme}
  />

  {/* Main Layout: Left Sidebar + Main Content + Right Sidebar */}
  <div className="flex flex-1">
    {/* Left Sidebar */}
    <Leftbar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

    {/* Main Content - Adjusted for space */}
    <main className="flex-grow pt-4 p-4 md:ml-64 md:w-[60%] xl:w-[55%]">
      {children}
    </main>

    {/* Right Sidebar - Always visible on large screens */}
    <div className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-lg">
      <RightBar isOpen={isRightbarOpen} toggleRightbar={toggleRightbar} />
    </div>
  </div>
</div>

  );
};

export default Layout;
