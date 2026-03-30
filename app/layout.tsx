import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DiffBeam Studios — Simple Software for Everyday Problems',
  description:
    'DiffBeam Studios builds small, focused software that solves one real problem. No bloated subscriptions. No learning curve.',
  keywords: ['simple software', 'productivity tools', 'StoopKeep', 'landlord tools', 'DiffBeam'],
  openGraph: {
    title: 'DiffBeam Studios',
    description: 'Simple tools for people tired of doing things the hard way.',
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
      <body className="bg-[#faf9f7] text-gray-900 antialiased">
        {children}
      </body>
    </html>
  )
}
