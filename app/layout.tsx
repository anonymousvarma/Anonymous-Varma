import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const display = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Cygnus Seeds — Quality Hybrid Seeds for Indian Farmers',
    template: '%s | Cygnus Seeds',
  },
  description:
    'Cygnus Seeds develops and supplies high-yielding, disease-resistant hybrid vegetable, melon and field crop seeds for Indian agro-climatic conditions.',
  keywords: [
    'Cygnus Seeds',
    'hybrid seeds India',
    'vegetable seeds',
    'watermelon seeds',
    'okra seeds',
    'tomato hybrid',
    'field crop seeds',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Cygnus Seeds — Quality Hybrid Seeds for Indian Farmers',
    description:
      'High-yielding, disease-resistant hybrid vegetable, melon and field crop seeds bred for Indian growing conditions.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1d5b3a',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${body.variable} ${display.variable}`}>
      <body className="font-sans antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
