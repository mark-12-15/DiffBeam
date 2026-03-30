import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DiffBeam Studios — Single-Purpose SaaS Tools for Professionals',
  description:
    'DiffBeam Studios builds lightweight, single-purpose SaaS tools for professionals. We solve exactly one problem per tool.',
  keywords: ['SaaS tools', 'productivity', 'StoopKeep', 'landlord tools', 'DiffBeam'],
  openGraph: {
    title: 'DiffBeam Studios',
    description: 'Stop paying for software bloat.',
    siteName: 'DiffBeam Studios',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
