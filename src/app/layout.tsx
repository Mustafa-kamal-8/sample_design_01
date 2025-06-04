"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "../components/context/ThemeContext";
import TopBar from "../components/Topbar";
import SideBar from "../components/Leftbar";
import Rightbar from "../components/rightbar"; // ✅ Import Right Sidebar

import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

const SIDEBAR_WIDTH = "w-64";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightbarOpen, setIsRightbarOpen] = useState(true); // ✅ Right sidebar toggle

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const toggleRightbar = () => setIsRightbarOpen(!isRightbarOpen); // ✅

  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300 ease-in-out">
            {/* Left Sidebar */}
            <SideBar
              isOpen={isSidebarOpen}
              toggleSidebar={toggleSidebar}
              sidebarWidth={SIDEBAR_WIDTH}
            />

            {/* Main + TopBar */}
          <div
  className={`flex flex-col flex-grow min-h-screen transition-all duration-300 ease-in-out ${
    isSidebarOpen ? "ml-64" : "ml-80"
  } ${isRightbarOpen ? "mr-64" : "mr-0"}`}
>
  {/* Centered TopBar */}
  <div className="w-full max-w-4xl mx-auto px-4">
    <TopBar toggleSidebar={toggleSidebar} />
  </div>

  {/* Centered Main Content */}
  <main className="flex-grow flex items-center justify-center p-5 overflow-y-auto">
    <div className="w-full max-w-5xl">
      {children}
    </div>
  </main>
</div>



            {/* Right Sidebar */}
            {isRightbarOpen && (
              <div className="hidden md:block w-64 bg-white dark:bg-gray-800 shadow-lg">
                <Rightbar
                  isOpen={isRightbarOpen}
                  toggleRightbar={toggleRightbar}
                />
              </div>
            )}

            {/* Mobile Overlay for Sidebar */}
            {isSidebarOpen && (
              <div
                className="fixed inset-0 bg-black bg-opacity-50 z-[1000] md:hidden"
                onClick={toggleSidebar}
              ></div>
            )}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
