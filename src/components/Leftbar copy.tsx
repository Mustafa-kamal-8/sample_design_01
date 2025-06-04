// components/Leftbar.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaUserCircle, FaCaretDown, FaCaretUp } from 'react-icons/fa';

interface LeftbarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  isDarkMode: boolean; // Add isDarkMode to the interface
}

const Leftbar: React.FC<LeftbarProps> = ({ isOpen, toggleSidebar, isDarkMode }) => { // Destructure isDarkMode from props
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown((prev) => (prev === label ? null : label));
  };

  const routes = [
    {
      label: "Main",
      items: [
        { href: "/", label: "Home" },
        { href: "/courses", label: "Courses" },
        { href: "/live-classes", label: "Live Classes" },
        { href: "/recorded-classes", label: "Recorded Classes" },
      ],
    },
    {
      label: "Content",
      items: [
        { href: "/blog", label: "Blog" },
        { href: "/discussion-forum", label: "Discussion Forum" },
        { href: "/quiz-contest", label: "Quiz Contest" },
      ],
    },
    {
      label: "Coaching",
      items: [
        { href: "/become-coach", label: "Become a Coach" },
        { href: "/coach-guidelines", label: "Coach Guidelines" },
        { href: "/one-on-one", label: "1-on-1 Consulting" },
        { href: "/book-session", label: "Book a Session" },
      ],
    },
    {
      label: "Company",
      items: [
        { href: "/about", label: "About Us" },
        { href: "/contact", label: "Contact" },
        { href: "/faq", label: "FAQ" },
        { href: "/membership", label: "Membership" },
      ],
    },
  ];

  return (
    <>
      <aside
        className={`fixed top-0 left-0 w-80 h-full shadow-lg transform transition-transform duration-300 ease-in-out z-[1001]
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0 md:shadow-none md:border-r
          ${isDarkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-100 border-gray-200'}`} // Conditional styling for the overall sidebar
      >
        {/* MetaMatch Logo with conditional background */}
        <div className={`p-4 flex items-center justify-center h-16
            ${isDarkMode ? 'bg-gray-900' : 'bg-[#3b5998]'}`}> {/* Darker gray for dark mode, original blue for light mode */}
           <Link href="/" className="text-white text-3xl font-bold"> {/* Logo text is white for visibility on both backgrounds */}
             MetaMatch
           </Link>
        </div>

        {/* Navigation content */}
        <div className="h-[calc(100%-64px)] overflow-y-auto"> {/* Added overflow-y-auto for scrollable content if it exceeds height */}
          <nav className="flex flex-col p-4">
            {routes.map((section) => {
              const isCurrentDropdownOpen = openDropdown === section.label;
              return (
                <div key={section.label} className="mb-2">
                  <button
                    onClick={() => toggleDropdown(section.label)}
                    className={`flex justify-between items-center w-full py-2 px-3 rounded-md transition-colors duration-200
                      ${isDarkMode ? 'text-white hover:bg-gray-700' : 'text-gray-900 hover:bg-gray-200'}
                      font-semibold text-lg`}
                  >
                    <span>{section.label}</span>
                    {isCurrentDropdownOpen ?
                      <FaCaretUp className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} /> :
                      <FaCaretDown className={isDarkMode ? 'text-gray-400' : 'text-gray-600'} />}
                  </button>

                  {/* Dropdown Content */}
                  {isCurrentDropdownOpen && (
                    <ul className="mt-1 space-y-0.5 pl-4">
                      {section.items.map((route) => (
                        <li key={route.href}>
                          <Link
                            href={route.href}
                            onClick={() => {
                              toggleSidebar(); // Close mobile sidebar if open
                              setOpenDropdown(null); // Close the current dropdown
                            }}
                            className={`block py-1.5 px-2 rounded-md transition-colors duration-200 text-base
                              ${isDarkMode ?
                                'text-gray-200 hover:bg-black-700' : // Dark mode link color and hover
                                'text-gray-700 hover:bg-black-00' // Light mode link color and hover
                              }
                              ${pathname === route.href ? // Active link styling
                                (isDarkMode ? 'bg-blue-800 text-white font-medium' : 'bg-blue-100 text-blue-700 font-medium') : ''
                              }`}
                          >
                            {route.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}

            {/* Admin Profile Section with conditional styling */}
            <div className={`flex items-center space-x-3 mt-6 pt-4 border-t
              ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
              <FaUserCircle className={isDarkMode ? 'text-gray-300 text-2xl' : 'text-gray-700 text-2xl'} />
              <span className={isDarkMode ? 'text-gray-300 text-base' : 'text-gray-700 text-base'}>Admin</span>
            </div>
          </nav>
        </div>
      </aside>

      {/* Overlay for mobile sidebar */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[1000] md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
};

export default Leftbar;