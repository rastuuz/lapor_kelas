import React, { createContext, useContext, useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    setTimeout(() => setIsTransitioning(false), 300);
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);

// Theme Toggle Component
export function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className="relative w-16 h-9 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 dark:from-primary-500/30 dark:to-secondary-500/30 border border-primary-500/20 dark:border-primary-500/30 transition-all duration-300 hover:scale-105"
    >
      <motion.div
        animate={{ x: isDark ? 28 : 4 }}
        className="absolute top-1 w-7 h-7 rounded-full bg-white dark:bg-dark-card shadow-lg flex items-center justify-center"
      >
        {isDark ? (
          <span className="text-yellow-400">🌙</span>
        ) : (
          <span className="text-yellow-500">☀️</span>
        )}
      </motion.div>
    </button>
  );
}