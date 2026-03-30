import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — diffbeam studios',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#080c10] text-slate-300">
      {/* Top nav */}
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link href="/" className="font-light tracking-[0.2em] text-white text-sm uppercase">
            <span className="text-[#00d4ff]">diff</span>beam studios
          </Link>
          <Link href="/" className="text-xs text-slate-500 hover:text-white transition-colors">
            ← Back to Home
          </Link>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs text-[#00d4ff] tracking-widest uppercase mb-3">Legal</p>
          <h1 className="text-3xl md:text-4xl font-light text-white mb-3">Privacy Policy</h1>
          <p className="text-xs text-slate-500 font-mono">Last updated: March 28, 2026</p>
        </div>

        <div className="prose prose-sm max-w-none space-y-8 text-slate-400 font-light leading-relaxed">

          <section>
            <h2 className="text-base font-medium text-white mb-3">1. Who We Are</h2>
            <p>
              diffbeam studios is operated by <strong className="text-slate-300 font-normal">Tianjin Heping District Juexing Network Technology Studio</strong>, located in Tianjin, China. We build lightweight, single-purpose digital tools designed to simplify complex workflows.
            </p>
            <p className="mt-3">
              For privacy-related inquiries, contact us at:{' '}
              <a href="mailto:support@diffbeam.com" className="text-[#00d4ff] hover:underline">support@diffbeam.com</a>
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">2. Information We Collect</h2>
            <p>We collect only what is necessary to provide our services:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Email address (when you contact us or create an account)',
                'Purchase information (processed by Lemon Squeezy — we do not store your payment card details)',
                'Usage data (anonymous analytics to improve product performance)',
                'Information you voluntarily submit through forms or support requests',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]/50 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">3. How We Use Your Information</h2>
            <p>Your information is used solely to:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Deliver and maintain the services you purchased',
                'Respond to support requests and inquiries',
                'Send product updates (only if you opt in)',
                'Improve our tools based on aggregated, anonymous usage patterns',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]/50 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-slate-500">
              We do <strong className="text-slate-400">not</strong> sell, rent, or share your personal data with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">4. Zero-Retention Policy</h2>
            <p>
              We follow a strict zero-retention policy: personal data is not stored beyond what is operationally required. When you request deletion of your data, we act within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">5. Third-Party Services</h2>
            <p>We use the following third-party services, each governed by their own privacy policy:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Lemon Squeezy — payment processing and order management',
                'Vercel — website hosting and infrastructure',
                'Google Fonts — font delivery (no personal data collected)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]/50 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">6. Cookies</h2>
            <p>
              We use only essential session cookies required for site functionality. We do not use tracking cookies or third-party advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">7. Your Rights</h2>
            <p>You have the right to:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Access the personal data we hold about you',
                'Request correction of inaccurate data',
                'Request deletion of your data',
                'Withdraw consent at any time',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]/50 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              To exercise these rights, email us at{' '}
              <a href="mailto:support@diffbeam.com" className="text-[#00d4ff] hover:underline">support@diffbeam.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">8. Changes to This Policy</h2>
            <p>
              We may update this policy as our services evolve. The "Last updated" date at the top reflects the most recent revision. Continued use of our services constitutes acceptance of the updated policy.
            </p>
          </section>

        </div>

        {/* Policy nav footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-xs text-slate-500">
          <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service →</Link>
          <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy →</Link>
        </div>
      </main>
    </div>
  )
}
