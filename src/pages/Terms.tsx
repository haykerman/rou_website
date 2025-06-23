import { useTheme } from "../components/ThemeContext";

export function Terms() {
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
          Terms of Service
        </h1>
        <div className="prose" style={{ color: theme.colors.onBackground }}>
          <p className="mb-4">Last updated: June 24, 2024</p>

          <h2 className="text-xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing or using Rou, you agree to be bound by these Terms of
            Service.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. User Accounts</h2>
          <p className="mb-4">
            You are responsible for maintaining the confidentiality of your
            account credentials and for all activities under your account.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Acceptable Use</h2>
          <p className="mb-4">You agree not to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Use the service for any illegal purpose</li>
            <li>Share account credentials</li>
            <li>Attempt to gain unauthorized access</li>
            <li>Upload malicious content</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Termination</h2>
          <p className="mb-4">
            We reserve the right to terminate or suspend access to our service
            immediately, without prior notice, for any violation of these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Contact</h2>
          <p className="mb-4">
            For any questions about these Terms, please contact us at:
            support@kayoon.org
          </p>
        </div>
      </div>
    </div>
  );
}
