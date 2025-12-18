import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import '@/styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import Providers from '@/components/Providers'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'MochiSave - Universal Social Media Downloader',
  description: 'Download videos, photos, and audio from your favorite social media platforms in seconds!',
  keywords: ['video downloader', 'social media downloader', 'instagram downloader', 'tiktok downloader', 'youtube downloader'],
  authors: [{ name: 'MochiSave Team' }],
  openGraph: {
    title: 'MochiSave - Universal Social Media Downloader',
    description: 'Download videos, photos, and audio from your favorite social media platforms in seconds!',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="font-outfit">
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}
