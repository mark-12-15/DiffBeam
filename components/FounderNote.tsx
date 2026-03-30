export default function FounderNote() {
  return (
    <section className="py-20 px-6 bg-[#1a3a5c]">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold text-blue-300 uppercase tracking-widest mb-8">A note from the founder</p>

            {/* Avatar + identity */}
            <div className="flex items-center gap-4 mb-8">
              <img
                src="https://api.dicebear.com/8.x/notionists/svg?seed=DiffBeamFounder&backgroundColor=f8fafc"
                alt="Founder of DiffBeam"
                className="w-12 h-12 rounded-full object-cover shadow-sm border border-blue-200 flex-shrink-0"
              />
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
