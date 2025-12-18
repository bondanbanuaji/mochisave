export default function TermsPage() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto prose prose-lg">
        <h1 className="text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: January 2024</p>

        <section className="mb-8">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using MochiSave (&quot;Service&quot;), you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our Service.
          </p>
        </section>

        <section className="mb-8">
          <h2>2. Description of Service</h2>
          <p>
            MochiSave is a platform that allows users to download publicly available content from various social media platforms for personal use. We act as an intermediary tool and do not host or store the downloaded content.
          </p>
        </section>

        <section className="mb-8">
          <h2>3. User Responsibilities</h2>
          <p>You agree to:</p>
          <ul>
            <li>Use the Service only for lawful purposes and personal use</li>
            <li>Respect copyright and intellectual property rights</li>
            <li>Not download private or restricted content without permission</li>
            <li>Not use the Service to violate any platform&apos;s Terms of Service</li>
            <li>Not attempt to circumvent any security features</li>
            <li>Not abuse or overload our systems</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>4. Copyright and Intellectual Property</h2>
          <p>
            You are responsible for ensuring you have the right to download and use any content. MochiSave does not claim ownership of any downloaded content. We respect the intellectual property rights of others and expect users to do the same.
          </p>
          <div className="alert alert-warning mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <span><strong>Important:</strong> Downloading copyrighted content without permission may be illegal in your jurisdiction.</span>
          </div>
        </section>

        <section className="mb-8">
          <h2>5. Account Terms</h2>
          <ul>
            <li>You must provide accurate information when creating an account</li>
            <li>You are responsible for maintaining account security</li>
            <li>One account per person</li>
            <li>We reserve the right to suspend or terminate accounts that violate these terms</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>6. Subscription and Payments</h2>
          <p>For Premium subscriptions:</p>
          <ul>
            <li>Payments are processed securely through Stripe</li>
            <li>Subscriptions automatically renew unless canceled</li>
            <li>Refunds are provided within 7 days of initial purchase</li>
            <li>You can cancel your subscription at any time</li>
            <li>We reserve the right to change pricing with 30 days notice</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>7. Service Limitations</h2>
          <p>We strive to provide reliable service, but:</p>
          <ul>
            <li>The Service is provided &quot;as is&quot; without warranties</li>
            <li>We do not guarantee 100% uptime or availability</li>
            <li>Download quality and availability depend on source platforms</li>
            <li>Rate limits apply to prevent abuse</li>
            <li>We may temporarily suspend service for maintenance</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>8. Prohibited Activities</h2>
          <p>You may not:</p>
          <ul>
            <li>Use the Service for commercial purposes without permission</li>
            <li>Resell or redistribute downloaded content</li>
            <li>Use automated tools to scrape or abuse the Service</li>
            <li>Attempt to reverse engineer our platform</li>
            <li>Impersonate others or provide false information</li>
            <li>Interfere with other users&apos; use of the Service</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2>9. Termination</h2>
          <p>
            We reserve the right to terminate or suspend access to the Service immediately, without prior notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties, or for any other reason.
          </p>
        </section>

        <section className="mb-8">
          <h2>10. Limitation of Liability</h2>
          <p>
            MochiSave shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2>11. Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless MochiSave from any claims, damages, or expenses arising from your use of the Service or violation of these Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2>12. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms at any time. We will notify users of significant changes. Continued use of the Service after changes constitutes acceptance of the new Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2>13. Governing Law</h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
          </p>
        </section>

        <section className="mb-8">
          <h2>14. Contact Information</h2>
          <p>
            For questions about these Terms, please contact us at:
          </p>
          <ul>
            <li>Email: legal@mochisave.com</li>
            <li>Website: https://mochisave.com/contact</li>
          </ul>
        </section>

        <div className="bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8 mt-12">
          <h3 className="text-2xl font-bold mb-4">Questions?</h3>
          <p className="mb-4">
            If you have any questions about these Terms of Service, please don&apos;t hesitate to contact us.
          </p>
          <a href="/contact" className="btn bg-white text-primary hover:bg-gray-100 border-0">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}
