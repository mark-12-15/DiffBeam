export default function HeroSection() {
  return (
    <section className="pt-32 pb-28 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-block mb-8 px-3 py-1 rounded-full bg-blue-50 border border-blue-100">
          <span className="text-xs text-blue-600 font-medium tracking-wide">
            Independent Studio · Tianjin, China
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight mb-6">
          Stop paying for<br />software bloat.
        </h1>

        {/* H2 */}
        <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
          DiffBeam Studios builds lightweight, single-purpose SaaS tools for professionals.
          We solve exactly one problem per tool. Nothing more, nothing less.
        </p>

        {/* CTA */}
        <a
          href="#toolbox"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Explore The Toolbox
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>

        {/* Infrastructure trust strip */}
        <div className="mt-16 pt-10 border-t border-gray-100">
          <p className="text-xs text-gray-400 mb-5">Built on trusted infrastructure</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            {[
              { name: "Supabase", note: "Data & Auth" },
              { name: "Vercel", note: "Hosting" },
              { name: "Lemon Squeezy", note: "Payments" },
              { name: "Stripe", note: "Card Processing" },
            ].map((p) => (
              <div key={p.name} className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 bg-gray-50">
                <span className="text-sm font-semibold text-gray-700">{p.name}</span>
                <span className="text-xs text-gray-400">{p.note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
