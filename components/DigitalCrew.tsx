const pillars = [
  {
    id: 'privacy',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: 'Your data is private, full stop.',
    body: 'We make money from software sales — not from selling your information. Your records are encrypted and stored on US-based servers. We have zero interest in your data beyond making your app work.',
  },
  {
    id: 'support',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'You get a real person, not a ticket number.',
    body: 'When something is wrong, you email us and the person who built the software responds. No chatbots. No scripts. No waiting three business days.',
  },
  {
    id: 'simplicity',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    title: 'We only build what you actually need.',
    body: 'Every tool we ship solves one specific problem. No feature bloat, no confusing upgrades, no "premium tier" that hides the useful stuff. If it does not help you, it does not ship.',
  },
]

export default function DigitalCrew() {
  return (
    <section className="py-24 px-6 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="mb-14">
          <p className="text-xs font-semibold text-[#1a3a5c] uppercase tracking-widest mb-3">Why Trust Us</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900">
            We take your trust seriously.
          </h2>
          <p className="mt-4 text-gray-500 text-base leading-relaxed max-w-lg">
            You might be uploading tax records, financial data, or other private information.
            Here is exactly how we handle it.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p) => (
            <div key={p.id} className="flex flex-col gap-4 p-7 bg-[#faf9f7] rounded-xl border border-gray-200">
              <div className="w-11 h-11 flex items-center justify-center rounded-lg bg-[#1a3a5c]/10 text-[#1a3a5c] flex-shrink-0">
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
