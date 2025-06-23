import React from 'react';
import { useTheme } from '../components/ThemeContext';
import { CheckCircle, Clock, Calendar, Star } from 'lucide-react';

export function Home() {
  const { theme } = useTheme();

  const features = [
    {
      icon: <CheckCircle size={24} />,
      title: 'Simple Task Management',
      description: 'Create and manage your daily routines with ease',
    },
    {
      icon: <Clock size={24} />,
      title: 'Time-based Reminders',
      description: 'Never miss a task with customizable notifications',
    },
    {
      icon: <Calendar size={24} />,
      title: 'Daily Planning',
      description: 'Plan your day efficiently with our intuitive interface',
    },
    {
      icon: <Star size={24} />,
      title: 'Habit Tracking',
      description: 'Build better habits with progress tracking and insights',
    },
  ];

  return (
    <div style={{ backgroundColor: theme.colors.background }}>
      {/* Hero Section */}
      <div className="relative min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
          <div className="text-center">
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8"
              style={{ color: theme.colors.primary }}
            >
              Simplify Your Daily Routines
            </h1>
            <p
              className="text-xl mb-12 max-w-2xl mx-auto"
              style={{ color: theme.colors.onBackground }}
            >
              Rou helps you build and maintain healthy habits through simple,
              effective routine management.
            </p>
            <div className="flex justify-center space-x-4">
              <button
                className="px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme.colors.primary,
                  color: theme.colors.onPrimary,
                }}
              >
                Get Started
              </button>
              <button
                className="px-8 py-3 rounded-full font-semibold text-lg shadow-lg transition-transform hover:scale-105"
                style={{
                  backgroundColor: theme.colors.secondaryContainer,
                  color: theme.colors.onSecondaryContainer,
                }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-lg"
                style={{ backgroundColor: theme.colors.surface }}
              >
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                  style={{ backgroundColor: theme.colors.primaryContainer }}
                >
                  <div style={{ color: theme.colors.primary }}>
                    {feature.icon}
                  </div>
                </div>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ color: theme.colors.onSurface }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-sm"
                  style={{ color: theme.colors.onSurfaceVariant }}
                >
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}