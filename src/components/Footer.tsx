import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

export function Footer() {
  const { theme } = useTheme();

  return (
    <footer
      style={{ backgroundColor: theme.colors.surface }}
      className="w-full py-8 mt-auto"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            <img src="/logo.svg" alt="Rou Logo" className="h-6 w-6" />
            <span
              style={{ color: theme.colors.primary }}
              className="text-lg font-bold"
            >
              Rou
            </span>
          </div>
          <div className="flex space-x-6">
            <Link
              to="/privacy"
              style={{ color: theme.colors.onSurface }}
              className="hover:opacity-80"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              style={{ color: theme.colors.onSurface }}
              className="hover:opacity-80"
            >
              Terms of Service
            </Link>
          </div>
          <p
            style={{ color: theme.colors.onSurfaceVariant }}
            className="text-sm"
          >
            © 2024 Rou. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}