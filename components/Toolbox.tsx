export default function Toolbox() {
  return (
    <section id="toolbox" className="py-24 px-6 bg-gray-50 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="mb-14">
          <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-3">The Toolbox</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            Single-purpose power.
          </h2>
          <p className="mt-3 text-gray-500 text-base max-w-lg">
            Each tool solves exactly one problem. Nothing more, nothing less.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: StoopKeep — elevated, finished product */}
          <div className="flex flex-col p-8 bg-white rounded-xl border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-blue-50 text-blue-600 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-gray-900">StoopKeep</h3>
              <span className="text-xs font-medium text-emerald-600 bg-emerald-50 border border-emerald-100 px-2 py-0.5 rounded-full">Live</span>
            </div>

            <p className="text-gray-600 leading-relaxed flex-grow mb-6">
              The lightweight ledger and maintenance tracker built for US landlords.
              Stop losing receipts and track tenant tickets effortlessly.
            </p>

            <a
              href="https://stoopkeep.diffbeam.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
            >
              Visit StoopKeep
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Card 2: What should we build next? */}
          <div className="flex flex-col p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 transition-all">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-200 text-gray-500 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-gray-700">What should we build next?</h3>
            </div>

            <p className="text-gray-500 leading-relaxed flex-grow mb-6">
              Hate your current spreadsheet? Tell us about your most painful daily chore.
              If we build a simple tool to fix it, you get a Lifetime Free Account.
            </p>

            <a
              href="mailto:support@diffbeam.com?subject=Tool Idea"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-800 transition-colors"
            >
              Tell us your idea
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
