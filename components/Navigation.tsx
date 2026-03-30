'use client'

import { useState } from 'react'

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="font-semibold text-gray-900 text-base tracking-tight">
          DiffBeam Studios
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-500">
          <a href="#toolbox" className="hover:text-gray-900 transition-colors">The Toolbox</a>
          <a href="#lab" className="hover:text-gray-900 transition-colors">The Lab</a>
          <a href="#changelog" className="hover:text-gray-900 transition-colors">Changelog</a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-500 hover:text-gray-900 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4 text-sm text-gray-600 border-t border-gray-100">
          <a href="#toolbox" className="hover:text-gray-900 pt-4" onClick={() => setMenuOpen(false)}>The Toolbox</a>
          <a href="#lab" className="hover:text-gray-900" onClick={() => setMenuOpen(false)}>The Lab</a>
          <a href="#changelog" className="hover:text-gray-900" onClick={() => setMenuOpen(false)}>Changelog</a>
        </div>
      )}
    </nav>
  )
}
