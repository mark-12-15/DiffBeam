export default function FounderNote() {
  return (
    <section id="lab" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">The Lab / Request a Tool</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Have a painful workflow?<br />Let us fix it.
          </h2>
          <p className="text-gray-500 text-base leading-relaxed mb-6">
            We build tools based on real problems. If your daily work involves messy spreadsheets,
            lost data, or repetitive manual tasks — whether you&apos;re a landlord, freelancer,
            or small business owner — tell us about it.
          </p>

          {/* The Offer */}
          <div className="bg-blue-50 border border-blue-100 rounded-xl px-6 py-5 mb-8">
            <p className="text-sm font-semibold text-blue-900 mb-1">Here&apos;s the deal</p>
            <p className="text-sm text-blue-700 leading-relaxed">
              If your problem is common enough and we build a DiffBeam tool to solve it, you will
              get a <span className="font-semibold">Lifetime Free Account</span> for that tool,
              plus direct input on its features.
            </p>
          </div>

          <a
            href="mailto:support@diffbeam.com?subject=Pain Point Submission"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Submit a Pain Point
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
