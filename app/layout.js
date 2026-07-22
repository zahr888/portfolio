import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hammami Med Zahreddin - Portfolio',
  description: 'AI, Full-Stack & Automation Engineer. Building AI-powered products, full-stack apps, and the automation pipelines that keep them running in production.',
  icons: {
    icon: '/portfolio/favicon.svg',
    shortcut: '/portfolio/favicon.svg',
    apple: '/portfolio/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
