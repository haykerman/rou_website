import React from 'react';
import { Link } from 'react-router-dom';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeContext';

export function Navbar() {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <nav
      style={{ backgroundColor: theme.colors.surface }}
      className="fixed w-full top-0 z-50 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.svg" alt="Rou Logo" className="h-8 w-8" />
              <span
                style={{ color: theme.colors.primary }}
                className="ml-2 text-xl font-bold"
              >
                Rou
              </span>
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
              style={{ color: theme.colors.primary }}
            >
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}