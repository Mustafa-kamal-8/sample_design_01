// components/ThemeToggle.tsx
'use client';

import React from 'react';
import { useTheme } from './context/ThemeContext'; // Ensure this path is correct
import { FaSun, FaMoon } from 'react-icons/fa'; // Import sun and moon icons

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-md flex items-center justify-center text-xl
                 bg-accent hover:bg-accent-hover text-accent-foreground
                 transition-colors duration-200"
      aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {theme === 'dark' ? (
        <FaSun className="text-sidebar-foreground" /> // Sun icon for light mode
      ) : (
        <FaMoon className="text-sidebar-foreground" /> // Moon icon for dark mode
      )}
    </button>
  );
}