import { useTheme } from '../components/ThemeContext';

export function Privacy() {
  const { theme } = useTheme();

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
          Privacy Policy
        </h1>
        <div
          className="prose"
          style={{ color: theme.colors.onBackground }}
        >
          <p className="mb-4">Last updated: June 24, 2025</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Rou, developed by Kayoon Studio ("we," "our," "us"). Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you use our app.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p className="mb-4">
            We collect the following types of data:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>
              <strong>Personal Data:</strong> When you sign in using Google Sign-In, we may receive your name, email, and profile picture as provided by Google. This is used solely for authentication purposes.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect non-personal usage data such as app activity, crash reports, and performance metrics through Google Analytics and Crashlytics.
            </li>
          </ul>
          <p className="mb-4">
            All data is stored securely on <strong>Google Firebase</strong>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use collected data for:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>User authentication</li>
            <li>Fixing bugs and improving app performance</li>
            <li>Enhancing user experience through analytics</li>
          </ul>
          <p className="mb-4">
            We do not share your personal data with third parties. However, services like Google Sign-In, Firebase, and Google Analytics may process your data according to their own privacy policies.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Data Retention & Deletion</h2>
          <p className="mb-4">
            We retain your data as long as you use the app. If you wish to delete your account and associated data, you can submit a request via email at <a href="mailto:support@kayoon.org">support@kayoon.org</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Security Measures</h2>
          <p className="mb-4">
            We take reasonable measures to protect your data, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Secure authentication via Google Sign-In</li>
            <li>Firebase Security Rules to control access and protect stored data</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Third-Party Services</h2>
          <p className="mb-4">
            We use third-party services such as:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>Google Sign-In</strong> (for authentication)</li>
            <li><strong>Firebase</strong> (for backend storage)</li>
            <li><strong>Google Analytics & Crashlytics</strong> (for app analytics and debugging)</li>
          </ul>
          <p className="mb-4">
            These services may collect and process your data according to their respective privacy policies.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Compliance with Privacy Laws</h2>
          <p className="mb-4">
            We strive to comply with applicable privacy laws, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li><strong>General Data Protection Regulation (GDPR)</strong> (for users in the EU)</li>
            <li><strong>California Consumer Privacy Act (CCPA)</strong> (for users in California)</li>
          </ul>
          <p className="mb-4">
            If you have any concerns about your data rights, you may contact us at <a href="mailto:support@kayoon.org">support@kayoon.org</a>.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this policy from time to time. Any changes will be communicated within the app or via email (if applicable). Your continued use of the app after such updates constitutes acceptance of the revised policy.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this Privacy Policy or your data, you can reach us at:
          </p>
          <p className="mb-4">
            <strong>Email:</strong> <a href="mailto:support@kayoon.org">support@kayoon.org</a>
          </p>
        </div>
      </div>
    </div>
  );
}