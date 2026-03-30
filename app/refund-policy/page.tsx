import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Refund Policy — diffbeam studios',
}

export default function RefundPolicy() {
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
          <h1 className="text-3xl md:text-4xl font-light text-white mb-3">Refund Policy</h1>
          <p className="text-xs text-slate-500 font-mono">Last updated: March 28, 2026</p>
        </div>

        <div className="space-y-8 text-slate-400 font-light leading-relaxed">

          {/* Highlight box */}
          <div className="p-5 rounded-xl border border-[#00d4ff]/10 bg-[#00d4ff]/5">
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="text-[#00d4ff] font-medium">Our commitment:</span> We stand behind the quality of every tool we ship. If something isn&apos;t working as described, we will make it right — with a refund or a fix, your choice.
            </p>
          </div>

          <section>
            <h2 className="text-base font-medium text-white mb-3">1. 14-Day Money-Back Guarantee</h2>
            <p>
              All one-time purchases come with a <strong className="text-slate-300 font-normal">14-day money-back guarantee</strong> from the date of purchase. If you are not satisfied with your purchase for any reason, contact us within 14 days for a full refund — no questions asked.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">2. How to Request a Refund</h2>
            <p>To request a refund, email us at{' '}
              <a href="mailto:support@diffbeam.com" className="text-[#00d4ff] hover:underline">support@diffbeam.com</a>{' '}
              with:
            </p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Your order number or the email used for purchase',
                'The product name',
                'A brief description of the issue (optional, but helps us improve)',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]/50 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              We will process your refund within <strong className="text-slate-300 font-normal">3–5 business days</strong>. Refunds are issued to the original payment method via Lemon Squeezy.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">3. Eligibility</h2>
            <ul className="space-y-2 list-none pl-0">
              {[
                'Requests must be made within 14 days of the original purchase date.',
                'Each order is eligible for one refund request.',
                'Refunds are not available for accounts found to be abusing the policy (e.g., repeated purchase-and-refund cycles).',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]/50 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">4. After the 14-Day Window</h2>
            <p>
              If you experience a technical issue beyond the 14-day period due to a bug or product defect, please still reach out. We review these cases individually and are committed to resolving genuine product failures, even if a cash refund may not apply.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">5. Subscription Products</h2>
            <p>
              Currently, diffbeam studios does not offer subscription-based products. All purchases are one-time. Should subscription plans be introduced in the future, a separate cancellation and refund policy will be published.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">6. Payment Processing</h2>
            <p>
              All transactions are processed by <strong className="text-slate-300 font-normal">Lemon Squeezy</strong>, acting as Merchant of Record. Your billing statement may show &quot;Lemon Squeezy&quot; rather than diffbeam studios — this is expected and compliant.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">7. Contact</h2>
            <p>
              Questions about a purchase or refund? We respond within 1 business day.
            </p>
            <a
              href="mailto:support@diffbeam.com"
              className="mt-3 inline-flex items-center gap-2 text-sm text-[#00d4ff] hover:underline"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@diffbeam.com
            </a>
          </section>

        </div>

        {/* Policy nav footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-xs text-slate-500">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy →</Link>
          <Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service →</Link>
        </div>
      </main>
    </div>
  )
}
