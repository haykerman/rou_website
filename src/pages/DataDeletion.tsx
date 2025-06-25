import React, { useState } from 'react';
import { useTheme } from '../components/ThemeContext';

export function DataDeletion() {
  const { theme } = useTheme();
  const [email, setEmail] = useState('');

  // Function to generate mailto link
  const getMailtoLink = () => {
    const subject = encodeURIComponent('Data Deletion Request');
    const body = encodeURIComponent(
      `Hello,\n\nI would like to request deletion of all my data associated with this email: ${email}\n\nThank you.`
    );
    return `mailto:support@kayoon.org?subject=${subject}&body=${body}`;
  };

  return (
    <div
      className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: theme.colors.background }}
    >
      <div className="max-w-3xl mx-auto py-12">
        <h1
          className="text-3xl font-bold mb-8"
          style={{ color: theme.colors.primary }}
        >
          Request Data Deletion
        </h1>
        <div className="prose" style={{ color: theme.colors.onBackground }}>
          <p className="mb-6">
            If you wish to delete all your data from our app, please enter your email address below and click the button. This will open your email app with a pre-filled message to our support team.
          </p>
          <form className="space-y-4 max-w-md" onSubmit={e => e.preventDefault()}>
            <label htmlFor="email" className="block font-medium">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 rounded border focus:outline-none focus:ring-2"
              style={{
                backgroundColor: theme.colors.surface,
                color: theme.colors.onSurface,
                borderColor: theme.colors.outline,
              }}
              placeholder="your@email.com"
            />
            <a
              href={getMailtoLink()}
              className="inline-block px-6 py-2 rounded font-semibold shadow transition-transform hover:scale-105 text-center"
              style={{
                backgroundColor: theme.colors.primary,
                color: theme.colors.onPrimary,
                pointerEvents: email ? 'auto' : 'none',
                opacity: email ? 1 : 0.6,
              }}
              tabIndex={email ? 0 : -1}
              aria-disabled={!email}
              onClick={e => {
                if (!email) e.preventDefault();
              }}
            >
              Request Deletion
            </a>
          </form>
        </div>
      </div>
    </div>
  );
} 