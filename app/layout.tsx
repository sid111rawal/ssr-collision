import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import CallButton from '@/components/CallButton'
import { contactInfo } from '@/config/contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SSR Auto Repair & Collision Service | Professional Auto Repair in Scarborough',
  description: `Expert auto repair and collision services in Scarborough, ON. Quality service, competitive prices. Visit us at ${contactInfo.address.full}`,
  keywords: 'auto repair, collision repair, car service, Scarborough, Danforth Ave, auto body shop, car maintenance',
  authors: [{ name: 'SSR Auto Repair & Collision Service' }],
  openGraph: {
    title: 'SSR Auto Repair & Collision Service',
    description: 'Expert auto repair and collision services in Scarborough, ON',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://ssrautorepair.com/img/logo.png',
        width: 1200,
        height: 630,
        alt: 'SSR Auto Repair & Collision Service',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://ssrautorepair.com',
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
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AutomotiveRepair",
              "name": "SSR Auto Repair & Collision Service",
              "image": "https://ssrautorepair.com/img/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": contactInfo.address.street,
                "addressLocality": contactInfo.address.city,
                "addressRegion": contactInfo.address.province,
                "postalCode": contactInfo.address.postalCode,
                "addressCountry": contactInfo.address.country
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": contactInfo.coordinates.latitude,
                "longitude": contactInfo.coordinates.longitude
              },
              "url": "https://ssrautorepair.com",
              "telephone": contactInfo.phoneLink.replace('tel:', ''),
              "priceRange": "$$",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen pt-24 md:pt-28">
          {children}
        </main>
        <Footer />
        <CallButton />
      </body>
    </html>
  )
}

