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
          {/* Card 1: StoopKeep */}
          <div className="flex flex-col p-8 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-sm transition-all">
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
              href="https://stoopkeep.com"
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

          {/* Card 2: In the Lab */}
          <div className="flex flex-col p-8 bg-white rounded-xl border border-dashed border-gray-300 hover:border-gray-400 transition-all">
            {/* Icon */}
            <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-100 text-gray-400 mb-6">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>

            <div className="flex items-center gap-2 mb-3">
              <h3 className="text-xl font-bold text-gray-400">In the Lab...</h3>
            </div>

            <p className="text-gray-400 leading-relaxed flex-grow mb-6">
              We are constantly exploring new ideas to eliminate busywork.
              Have a painful workflow? Tell us about it and help shape what we build next.
            </p>

            <a
              href="#lab"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-gray-600 transition-colors"
            >
              Submit a pain point
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
