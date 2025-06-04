// components/context/ThemeContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme === 'light' || storedTheme === 'dark') {
        return storedTheme;
      }
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  // This single useEffect is responsible for:
  // 1. Applying the correct class to the <html> element.
  // 2. Persisting the theme to localStorage.
  // It runs initially, and then every time the 'theme' state changes.
  useEffect(() => {
    const root = document.documentElement;

    // Remove both classes to ensure only the current one is applied
    root.classList.remove("light", "dark");
    // Add the current theme class
    root.classList.add(theme);

    // *** IMPORTANT: Persist the theme to localStorage ***
    localStorage.setItem('theme', theme);

    console.log(`[ThemeProvider] Applied theme: "${theme}" to <html>. ClassList: ${root.classList.value}`);
  }, [theme]); // Dependency array: this effect re-runs when the 'theme' state changes

  const toggleTheme = () => {
    setThemeState(prevTheme => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      console.log(`[ThemeProvider] Toggling from "${prevTheme}" to "${newTheme}"`);
      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};