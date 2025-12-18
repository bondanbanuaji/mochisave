export default function PrivacyPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2024</p>

        <section className="mb-8">
          <h2>1. Information We Collect</h2>
          <p>
            When you use MochiSave, we collect minimal information necessary to provide our services:
          </p>
          <ul>
            <li><strong>Account Information:</strong> Email, name, and profile picture (via Google OAuth)</li>
            <li><strong>Usage Data:</strong> URLs you submit for download, download history, and timestamps</li>
            <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>2. How We Use Your Information</h2>
          <p>We use the collected information to:</p>
          <ul>
            <li>Provide and maintain our download services</li>
            <li>Manage your account and subscription</li>
            <li>Send important service notifications</li>
            <li>Improve our platform and user experience</li>
            <li>Prevent fraud and abuse</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>3. Data Storage and Security</h2>
          <p>
            We take data security seriously:
          </p>
          <ul>
            <li>All data is encrypted in transit using HTTPS</li>
            <li>Downloaded files are temporarily stored and automatically deleted after 24 hours</li>
            <li>We never store the actual video/media files permanently</li>
            <li>Access to personal data is restricted to authorized personnel only</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>4. Third-Party Services</h2>
          <p>
            We use the following third-party services:
          </p>
          <ul>
            <li><strong>Google OAuth:</strong> For authentication</li>
            <li><strong>Stripe:</strong> For payment processing</li>
            <li><strong>Vercel:</strong> For hosting and CDN</li>
          </ul>
          <p>
            Each service has its own privacy policy governing data collection and use.
          </p>
        </section>

        <section className="mb-8">
          <h2>5. Cookies</h2>
          <p>
            We use cookies to:
          </p>
          <ul>
            <li>Keep you logged in</li>
            <li>Remember your preferences</li>
            <li>Analyze site usage</li>
          </ul>
          <p>You can disable cookies in your browser settings, but this may affect functionality.</p>
        </section>

        <section className="mb-8">
          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Export your data</li>
            <li>Opt-out of marketing communications</li>
          </ul>
          <p>
            To exercise these rights, contact us at privacy@mochisave.com
          </p>
        </section>

        <section className="mb-8">
          <h2>7. Children&apos;s Privacy</h2>
          <p>
            MochiSave is not intended for users under 13 years old. We do not knowingly collect information from children.
          </p>
        </section>

        <section className="mb-8">
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of significant changes via email or through our platform.
          </p>
        </section>

        <section className="mb-8">
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us:
          </p>
          <ul>
            <li>Email: privacy@mochisave.com</li>
            <li>Address: [Your Company Address]</li>
          </ul>
        </section>

        <div className="alert alert-info mt-12">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>
            By using MochiSave, you agree to this Privacy Policy and our Terms of Service.
          </span>
        </div>
      </div>
    </div>
  )
}
