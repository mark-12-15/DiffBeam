export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 py-14 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-semibold text-gray-900 text-base mb-2">DiffBeam Studios</p>
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
              <li><a href="#changelog" className="hover:text-gray-900 transition-colors">Changelog</a></li>
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
