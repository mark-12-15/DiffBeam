const trustBadges = [
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    label: '256-bit SSL Encryption',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10h.01M12 10h.01M15 10h.01" />
      </svg>
    ),
    label: 'US-Based Data Storage',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    label: 'Secure Checkout',
  },
  {
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
    label: 'We Never Sell Your Data',
  },
]

export default function HeroSection() {
  return (
    <section className="pt-32 pb-28 px-6 bg-[#faf9f7]">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-block mb-8 px-3 py-1 rounded-full bg-white border border-gray-200 shadow-sm">
          <span className="text-xs text-gray-500 font-medium tracking-wide">
            A boutique software workshop
          </span>
        </div>

        {/* H1 */}
        <h1 className="font-display text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6" style={{ letterSpacing: '-0.02em' }}>
          Simple tools for people tired of<br />doing things the hard way.
        </h1>

        {/* H2 */}
        <p className="text-lg md:text-xl text-gray-500 leading-loose max-w-2xl mx-auto mb-10">
          We build small, focused software that solves one real problem — and nothing else.
          No bloated subscriptions. No learning curve.
        </p>

        {/* CTA */}
        <a
          href="#toolbox"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3a5c] text-white text-sm font-semibold rounded-lg hover:bg-[#152e4a] transition-colors shadow-sm"
        >
          See Our Tools
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Consumer trust badges */}
        <div className="mt-16 pt-10 border-t border-gray-200">
          <p className="text-xs text-gray-400 uppercase tracking-widest mb-6">Your security, our priority</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-gray-200 bg-white shadow-sm">
                <span className="text-[#1a3a5c]">{b.icon}</span>
                <span className="text-xs font-semibold text-gray-700">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
