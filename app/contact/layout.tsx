import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | SSR Auto Repair & Collision Service',
  description: 'Contact SSR Auto Repair & Collision Service at 3254 Danforth Ave, Scarborough, ON M1L 1C2. Get a free estimate or schedule your service today.',
  keywords: 'contact SSR auto repair, auto repair Scarborough, car service contact, Danforth Ave auto shop',
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

