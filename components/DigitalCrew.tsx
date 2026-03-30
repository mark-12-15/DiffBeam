const pillars = [
  {
    id: 'process',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    title: 'Problem first, always',
    body: 'We do not start with a product idea. Every tool begins with a workflow that actually hurts — something real people are doing manually, or paying too much to fix. If the problem is not painful enough, we do not build.',
  },
  {
    id: 'data',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Your data stays yours',
    body: 'Data is stored on Supabase (US-hosted), payments are handled by Lemon Squeezy and Stripe. We never sell, share, or mine your data. Our business model is software subscriptions — not your information.',
  },
  {
    id: 'support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'No support tickets, no bots',
    body: 'When something breaks or does not make sense, you email us and a human who wrote the code responds. No tier-1 support scripts, no chatbot, no wait-three-business-days policy.',
  },
]

export default function DigitalCrew() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">Why Trust Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            How we actually work.
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-lg">
            No investor pressure, no growth-hacking, no dark patterns. Here is exactly how we build and operate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {pillars.map((p) => (
            <div key={p.id} className="flex flex-col gap-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 flex-shrink-0">
                {p.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-gray-900 mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
