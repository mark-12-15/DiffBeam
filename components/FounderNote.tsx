export default function FounderNote() {
  return (
    <>
      {/* Founder's Note */}
      <section className="py-20 px-6 bg-[#1a3a5c]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-6">A note from the founder</p>
            <blockquote className="font-display text-2xl md:text-3xl font-semibold text-white leading-snug mb-8">
              &ldquo;I built this because I kept seeing the same thing: software that tries to do everything ends up doing nothing well.&rdquo;
            </blockquote>
            <p className="text-blue-100 text-base leading-loose mb-6">
              So I build small, focused tools instead. One problem. One solution. Done.
              If something is not working for you, or you have a question about your data,
              my email is right below. I read every message.
            </p>
            <a
              href="mailto:support@diffbeam.com"
              className="inline-flex items-center gap-2 text-sm font-semibold text-white border-b border-blue-400 pb-0.5 hover:border-white transition-colors"
            >
              support@diffbeam.com
            </a>
            <p className="mt-4 text-blue-400 text-sm">— Founder, DiffBeam Studios</p>
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
