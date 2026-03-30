import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — diffbeam studios',
}

export default function TermsOfService() {
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
          <h1 className="text-3xl md:text-4xl font-light text-white mb-3">Terms of Service</h1>
          <p className="text-xs text-slate-500 font-mono">Last updated: March 28, 2026</p>
        </div>

        <div className="space-y-8 text-slate-400 font-light leading-relaxed">

          <section>
            <h2 className="text-base font-medium text-white mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using any product or service offered by diffbeam studios (operated by <strong className="text-slate-300 font-normal">Tianjin Heping District Juexing Network Technology Studio</strong>), you agree to be bound by these Terms of Service. If you do not agree, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">2. Description of Services</h2>
            <p>
              diffbeam studios provides lightweight, single-purpose digital tools designed to simplify professional workflows. Current products include StoopKeep and BeamFlow. Services may be updated, modified, or discontinued at our discretion, with reasonable notice provided to active users.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">3. Purchases and Payments</h2>
            <ul className="space-y-2 list-none pl-0">
              {[
                'Payments are processed securely by Lemon Squeezy, acting as Merchant of Record.',
                'Prices are listed in USD. Additional taxes may apply based on your jurisdiction.',
                'One-time purchase licenses are perpetual for the version purchased. Continued updates may require a new purchase depending on the product tier.',
                'We do not store your payment card information.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]/50 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">4. License and Acceptable Use</h2>
            <p>Upon purchase, you receive a non-exclusive, non-transferable license to use the product for personal or commercial purposes. You may not:</p>
            <ul className="mt-3 space-y-2 list-none pl-0">
              {[
                'Resell, sublicense, or redistribute the software or its source code',
                'Reverse engineer or attempt to extract proprietary algorithms',
                'Use our tools to facilitate illegal activity or harm third parties',
                'Circumvent technical access controls or license enforcement',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#00d4ff]/50 mt-2 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">5. Intellectual Property</h2>
            <p>
              All content, code, design, and brand assets of diffbeam studios are the intellectual property of Tianjin Heping District Juexing Network Technology Studio. Unauthorized reproduction or use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">6. Disclaimer of Warranties</h2>
            <p>
              Our products are provided &quot;as is&quot; without warranties of any kind, express or implied. We do not guarantee uninterrupted availability or that the software will meet every use case without configuration. Tax-related outputs (e.g., from StoopKeep) are provided as organizational aids and do not constitute professional tax advice.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, diffbeam studios shall not be liable for any indirect, incidental, or consequential damages arising from your use of our services. Our total liability shall not exceed the amount paid by you for the applicable product in the 12 months preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">8. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the People&apos;s Republic of China. Disputes shall be resolved in the courts of Tianjin, China, or through mutually agreed alternative dispute resolution.
            </p>
          </section>

          <section>
            <h2 className="text-base font-medium text-white mb-3">9. Contact</h2>
            <p>
              For questions regarding these Terms, contact us at:{' '}
              <a href="mailto:support@diffbeam.com" className="text-[#00d4ff] hover:underline">support@diffbeam.com</a>
            </p>
          </section>

        </div>

        {/* Policy nav footer */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap gap-4 text-xs text-slate-500">
          <Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy →</Link>
          <Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy →</Link>
        </div>
      </main>
    </div>
  )
}
