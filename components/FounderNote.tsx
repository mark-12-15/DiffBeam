export default function FounderNote() {
  return (
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
  )
}
