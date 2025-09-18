'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Code, BookOpen, Play, Terminal, Home, Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load dark mode preference from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navItems = [
    { href: '/', label: 'Home', icon: Home },
    { href: '/tutorials', label: 'Tutorials', icon: BookOpen },
    { href: '/practice', label: 'Practice', icon: Play },
    { href: '/blog', label: 'Blog', icon: Code },
    { href: '/editor', label: 'Code Editor', icon: Terminal },
  ];

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 animate-slide-in-down transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group animate-fade-in-left">
            <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition-all duration-300 group-hover:scale-110 hover-glow">
              <Code className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors duration-300">EduCode</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 px-3 py-2 rounded-md hover:bg-blue-50 dark:hover:bg-gray-800 hover-lift animate-fade-in-up",
                    `animate-delay-${(index + 2) * 100}`
                  )}
                >
                  <Icon className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            
            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-110 animate-fade-in-up animate-delay-700"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 transition-transform duration-300" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300" />
              )}
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden animate-fade-in-right">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 rounded-md transition-all duration-300 hover:scale-110 hover:bg-blue-50 dark:hover:bg-gray-800"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? 
                <X className="h-6 w-6 transition-transform duration-300 rotate-90" /> : 
                <Menu className="h-6 w-6 transition-transform duration-300" />
              }
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'md:hidden transition-all duration-500 ease-in-out overflow-hidden',
            isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="py-4 space-y-2">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-4 py-3 rounded-md transition-all duration-300 hover-lift",
                    isOpen ? `animate-fade-in-left animate-delay-${index * 100}` : ''
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  <span className="font-medium">{item.label}</span>
                </Link>
              );
            })}
            
            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className={cn(
                "flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 px-4 py-3 rounded-md transition-all duration-300 hover-lift w-full",
                isOpen ? `animate-fade-in-left animate-delay-${navItems.length * 100}` : ''
              )}
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 transition-transform duration-300" />
              ) : (
                <Moon className="h-5 w-5 transition-transform duration-300" />
              )}
              <span className="font-medium">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
