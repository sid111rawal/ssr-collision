import type { Metadata } from 'next'
import { contactInfo } from '@/config/contact'

export const metadata: Metadata = {
  title: 'About Us | SSR Auto Repair & Collision Service',
  description: 'Learn about SSR Auto Repair & Collision Service. Your trusted auto repair shop in Scarborough, ON with years of experience and commitment to quality.',
  keywords: 'about SSR auto repair, auto repair shop Scarborough, experienced mechanics, quality auto service',
}

export default function About() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 border-b border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            About <span className="text-red-600">SSR Auto Repair</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Your trusted partner for quality auto repair and collision services
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 sm:space-y-12">
            {/* Our Story */}
            <div className="bg-gray-900 border border-red-600 rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Story</h2>
              <div className="space-y-3 sm:space-y-4 text-gray-300 leading-relaxed text-sm sm:text-base">
                <p>
                  SSR Auto Repair & Collision Service has been serving the Scarborough community with dedication and excellence. 
                  We pride ourselves on providing top-quality auto repair and collision services to keep your vehicles running 
                  safely and efficiently.
                </p>
                <p>
                  Our team of certified technicians brings years of experience and expertise to every job. We understand that 
                  your vehicle is more than just transportation—it's an essential part of your daily life. That's why we treat 
                  every repair with the care and attention it deserves.
                </p>
                <p>
                  Located at {contactInfo.address.street} in {contactInfo.address.city}, we're conveniently accessible and committed to providing exceptional 
                  service to our customers. Whether you need routine maintenance, major repairs, or collision restoration, we're 
                  here to help.
                </p>
              </div>
            </div>

            {/* Our Mission */}
            <div className="bg-gray-900 border border-red-600 rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Mission</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                To provide exceptional auto repair and collision services that exceed our customers' expectations. We are committed 
                to honesty, integrity, and quality workmanship in everything we do. Our goal is to build lasting relationships with 
                our customers by providing reliable, affordable, and professional automotive services.
              </p>
            </div>

            {/* Our Values */}
            <div className="bg-gray-900 border border-red-600 rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Quality</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    We use only the highest quality parts and materials, ensuring your vehicle receives the best care possible.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Integrity</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Honest communication and transparent pricing. We'll always explain what needs to be done and why.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Expertise</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Our certified technicians stay up-to-date with the latest automotive technology and repair techniques.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-red-600 mb-2">Customer Service</h3>
                  <p className="text-gray-300 text-sm sm:text-base">
                    Your satisfaction is our priority. We work hard to ensure every customer leaves happy with our service.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-900 border border-red-600 rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Why Choose Us?</h2>
              <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base">
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span>Certified and experienced technicians</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span>State-of-the-art equipment and tools</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span>Competitive and transparent pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span>Quality guarantee on all work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span>Convenient location in Scarborough</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span>Fast turnaround times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-600 mr-3 text-lg sm:text-xl flex-shrink-0">✓</span>
                  <span>Excellent customer service</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 border-y border-red-600 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Experience the SSR Difference</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Visit us today and see why customers trust SSR Auto Repair & Collision Service
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  )
}

