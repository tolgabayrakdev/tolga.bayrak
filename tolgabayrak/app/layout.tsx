import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tolga Bayrak - Yazılım Geliştirme Uzmanı | Giresun",
  description:
    "Tolga Bayrak - Giresun'da Web, Mobil ve SaaS yazılım geliştirme. Node.js, React, Next.js, PostgreSQL, API geliştirme ve bulut tabanlı çözümler.",
  keywords:
    "Giresun yazılım geliştirme, yazılım uzmanı Giresun, web yazılım geliştirme hizmeti, mobil uygulama geliştirme, SaaS yazılım geliştirme, özel yazılım çözümleri, Giresun freelance yazılım uzmanı, Next.js, React, Node.js",
  authors: [{ name: "Tolga Bayrak" }],
  creator: "Tolga Bayrak",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tolgabayrak.dev",
    title: "Tolga Bayrak - Yazılım Geliştirme Uzmanı",
    description: "Kurumsal dijital çözümler, SaaS platformları ve modern web uygulamaları geliştiriyorum.",
    siteName: "Tolga Bayrak",
    images: [
      {
        url: "https://tolgabayrak.dev/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tolga Bayrak - Yazılım Geliştirme Uzmanı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolga Bayrak - Yazılım Geliştirme Uzmanı",
    description: "Modern yazılım çözümleri, SaaS platformları ve Web3 uygulamaları geliştiriyorum.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export const viewport = {
  themeColor: "#0f172a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="tr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="canonical" href="https://tolgabayrak.dev" />
        <meta name="google-site-verification" content="verification-code-here" />
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
