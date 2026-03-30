export default function FounderNote() {
  return (
    <>
      {/* Founder's Note */}
      <section className="py-20 px-6 bg-[#1a3a5c]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-8">A note from the founder</p>

            {/* Avatar + identity */}
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-blue-200 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-[#1a3a5c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-semibold text-sm">The Founder</p>
                <p className="text-blue-300 text-xs">DiffBeam Studios</p>
              </div>
            </div>

            <p className="text-blue-100 text-base leading-loose mb-6">
              Hi — I build these tools because I was tired of seeing independent businesses
              overpay for clunky, over-featured software. When you use DiffBeam, you are
              supporting an indie developer, and I am personally here to help you succeed.
            </p>
            <blockquote className="font-display text-xl md:text-2xl font-semibold text-white leading-snug border-l-2 border-blue-400 pl-5 mb-8">
              &ldquo;Software that tries to do everything ends up doing nothing well. So I build small, focused tools instead.&rdquo;
            </blockquote>
            <a
              href="mailto:support@diffbeam.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-blue-400 pb-0.5 hover:border-white transition-colors"
            >
              support@diffbeam.com — I read every message.
            </a>
          </div>
        </div>
      </section>

      {/* The Lab */}
      <section id="lab" className="py-24 px-6 bg-[#faf9f7] border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-[#1a3a5c] uppercase tracking-widest mb-3">The Lab</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Got a workflow that&apos;s driving you crazy?
            </h2>
            <p className="text-gray-500 text-base leading-loose mb-6">
              Maybe it is a spreadsheet you have been patching together for years.
              Maybe it is something you do manually every week that just feels like
              it should be easier. Tell us about it.
            </p>

            <div className="bg-white border-l-4 border-[#1a3a5c] rounded-r-xl px-6 py-5 mb-8 shadow-sm">
              <p className="text-sm font-semibold text-gray-900 mb-1">Here&apos;s the deal</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                If the problem is common enough, we will build a tool to fix it.
                And if we do — you will get a{' '}
                <span className="font-semibold text-[#1a3a5c]">Lifetime Free Account</span>,
                on us. No strings attached.
              </p>
            </div>

            <a
              href="mailto:support@diffbeam.com?subject=Pain Point Submission"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#1a3a5c] text-white text-sm font-semibold rounded-lg hover:bg-[#152e4a] transition-colors shadow-sm"
            >
              Tell Us Your Pain Point
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
