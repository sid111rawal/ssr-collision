import Link from 'next/link'
import Image from 'next/image'
import { contactInfo } from '@/config/contact'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div>
            <Image
              src="/img/logo.png"
              alt="SSR Auto Repair & Collision Service"
              width={180}
              height={72}
              className="h-10 sm:h-12 w-auto object-contain mb-3 sm:mb-4"
            />
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">SSR Auto Repair & Collision Service</h3>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Your trusted partner for quality auto repair and collision services in Scarborough.
            </p>
            <div className="text-gray-400 text-sm sm:text-base">
              <p className="mb-1">{contactInfo.address.street}</p>
              <p className="mb-1">{contactInfo.address.city}, {contactInfo.address.province} {contactInfo.address.postalCode}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-red-600 transition-colors text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-red-600 transition-colors text-sm sm:text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-red-600 transition-colors text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-red-600 transition-colors text-sm sm:text-base">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Contact Us</h3>
            <div className="space-y-2 text-gray-400 text-sm sm:text-base">
              <p>
                Cell:{' '}
                <a href={contactInfo.phoneLink} className="hover:text-red-600 transition-colors">
                  {contactInfo.phone}
                </a>
              </p>
              <p>
                Office:{' '}
                <a href={contactInfo.officePhoneLink} className="hover:text-red-600 transition-colors">
                  {contactInfo.officePhone}
                </a>
              </p>
              <p>
                Email:{' '}
                <a href={contactInfo.emailLink} className="hover:text-red-600 transition-colors">
                  {contactInfo.email}
                </a>
              </p>
              <p className="mt-3 sm:mt-4">Hours:</p>
              <p className="text-xs sm:text-sm">{contactInfo.hours.weekdays}</p>
              <p className="text-xs sm:text-sm">{contactInfo.hours.sunday}</p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h3 className="text-white text-lg sm:text-xl font-bold mb-3 sm:mb-4">Find Us</h3>
            <div className="rounded-lg overflow-hidden border border-red-600/30">
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || ''}&q=${encodeURIComponent(contactInfo.address.full)}`}
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
            <a
              href={contactInfo.address.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-600 hover:text-red-500 text-xs sm:text-sm mt-2 inline-block"
            >
              View larger map →
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-xs sm:text-sm">
          <p>&copy; {new Date().getFullYear()} SSR Auto Repair & Collision Service. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

