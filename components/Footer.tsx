export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-extrabold text-base leading-none">B</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="leading-none">
                  <span className="font-medium text-slate-500 text-sm">Diff</span>
                  <span className="font-extrabold text-slate-900 tracking-tight text-sm">Beam</span>
                </span>
                <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-[0.18em] mt-0.5">Studios</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 leading-relaxed">
              Single-purpose SaaS tools for professionals and independent businesses.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Navigate</p>
            <ul className="space-y-2.5 text-sm text-gray-500">
              <li><a href="#toolbox" className="hover:text-gray-900 transition-colors">The Toolbox</a></li>
              <li><a href="#lab" className="hover:text-gray-900 transition-colors">The Lab</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">Contact</p>
            <a
              href="mailto:support@diffbeam.com"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors"
            >
              support@diffbeam.com
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-200 space-y-2">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-xs text-gray-400">
              © 2026 DiffBeam Studios. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-xs text-gray-400">
              <a href="/privacy-policy" className="hover:text-gray-600 transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="/terms-of-service" className="hover:text-gray-600 transition-colors">Terms of Service</a>
              <span>|</span>
              <a href="/refund-policy" className="hover:text-gray-600 transition-colors">Refund Policy</a>
            </div>
          </div>
          <p className="text-xs text-gray-400">
            DiffBeam Studios serves customers worldwide. Legal entity: Tianjin Heping District Juexing Network Technology Studio, China.
          </p>
        </div>
      </div>
    </footer>
  )
}
