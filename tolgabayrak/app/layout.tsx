import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tolga Bayrak - Yazılım Mühendisi | Full-Stack Developer",
  description:
    "Tolga Bayrak — Full-stack yazılım mühendisi. Node.js, TypeScript, Express.js, React, Next.js, Java, Spring Boot, Python, FastAPI ve PostgreSQL ile modern web uygulamaları geliştiriyor.",
  keywords: [
    "Tolga Bayrak",
    "yazılım mühendisi",
    "full-stack developer",
    "full-stack geliştirici",
    "Node.js developer",
    "TypeScript developer",
    "React developer",
    "Next.js developer",
    "Java Spring Boot developer",
    "Python FastAPI developer",
    "Express.js",
    "PostgreSQL",
    "backend developer",
    "frontend developer",
    "web geliştirici",
    "software engineer Turkey",
    "Giresun yazılım mühendisi",
  ].join(", "),
  authors: [{ name: "Tolga Bayrak" }],
  creator: "Tolga Bayrak",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://tolgabayrak.vercel.app",
    title: "Tolga Bayrak - Yazılım Mühendisi | Full-Stack Developer",
    description:
      "Node.js, TypeScript, React, Next.js, Java Spring Boot ve Python FastAPI ile ölçeklenebilir full-stack uygulamalar geliştiren yazılım mühendisi.",
    siteName: "Tolga Bayrak",
    images: [
      {
        url: "https://tolgabayrak.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Tolga Bayrak - Yazılım Mühendisi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tolga Bayrak - Yazılım Mühendisi",
    description:
      "Node.js, TypeScript, React, Next.js, Java Spring Boot ve Python FastAPI ile full-stack geliştirme yapıyorum.",
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
        <link rel="canonical" href="https://tolgabayrak.vercel.app" />
        <meta name="google-site-verification" content="D5SxVqiZdr4kWJtqgdJMFXxmWBZcA1e1h2LqSnhAYIY" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://tolgabayrak.vercel.app/#person",
                  name: "Tolga Bayrak",
                  jobTitle: "Yazılım Mühendisi",
                  url: "https://tolgabayrak.vercel.app",
                  email: "bayraktolga28@gmail.com",
                  address: {
                    "@type": "PostalAddress",
                    addressLocality: "Giresun",
                    addressCountry: "TR",
                  },
                  knowsAbout: [
                    "Node.js", "TypeScript", "Express.js",
                    "React.js", "Next.js",
                    "Java", "Spring Boot",
                    "Python", "Flask", "FastAPI",
                    "PostgreSQL", "Docker", "AWS",
                    "REST API", "Microservices",
                  ],
                  description:
                    "Node.js, TypeScript, React, Next.js, Java Spring Boot ve Python FastAPI ile full-stack web uygulamaları geliştiren yazılım mühendisi.",
                },
                {
                  "@type": "WebSite",
                  "@id": "https://tolgabayrak.vercel.app/#website",
                  url: "https://tolgabayrak.vercel.app",
                  name: "Tolga Bayrak",
                  description: "Tolga Bayrak — Full-Stack Yazılım Mühendisi kişisel portfolyo sitesi.",
                  publisher: { "@id": "https://tolgabayrak.vercel.app/#person" },
                  inLanguage: "tr-TR",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
