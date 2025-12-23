import Link from 'next/link'
import type { Metadata } from 'next'
import ServicesCarousel from '@/components/ServicesCarousel'
import ReviewsCarousel from '@/components/ReviewsCarousel'
import { contactInfo } from '@/config/contact'

export const metadata: Metadata = {
  title: 'SSR Auto Repair & Collision Service | Professional Auto Repair in Scarborough',
  description: `Expert auto repair and collision services in Scarborough, ON. Quality service, competitive prices. Visit us at ${contactInfo.address.full}`,
}

const featuredServices = [
  {
    title: 'Engine Repair & Diagnostics',
    description: 'Complete engine diagnostics and repair services. Our certified technicians can identify and fix any engine issues to keep your vehicle running smoothly.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527151/engine_repair_icwq1c.png',
  },
  {
    title: 'Collision Repair',
    description: 'Professional collision repair services to restore your vehicle after an accident. We handle everything from minor dents to major structural repairs.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527150/collision_rvkreq.png',
  },
  {
    title: 'Auto Body Work',
    description: 'Expert auto body repair including paint matching, dent removal, panel replacement, and full body restoration services.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527123/autobody_akaesy.png',
  },
  {
    title: 'Brake Service & Repair',
    description: 'Complete brake inspection, repair, and replacement services. Your safety is our priority, and we ensure your brakes are in perfect working condition.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527121/brake_klzme6.png',
  },
  {
    title: 'Transmission Service',
    description: 'Transmission repair, maintenance, and replacement services. We work on both manual and automatic transmissions for all vehicle makes and models.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527150/transmission_idogec.png',
  },
  {
    title: 'Suspension & Steering',
    description: 'Suspension and steering system repairs to ensure a smooth and safe ride. We handle shocks, struts, alignment, and more.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527149/suspension_hhhrey.png',
  },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-black via-black to-gray-900 text-white py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
              <span className="text-white">SSR AUTO REPAIR</span>
              <br />
              <span className="text-red-600">& COLLISION SERVICE</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
              Your trusted partner for quality auto repair and collision services in Scarborough
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-red-600 text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Our Services</h2>
            <p className="text-gray-400 text-base sm:text-lg px-4">Comprehensive auto repair and collision services</p>
          </div>
          <div className="relative px-8 md:px-12 lg:px-16">
            <ServicesCarousel services={featuredServices} />
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/services"
              className="inline-block bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3 sm:mb-4">Why Choose SSR Auto Repair?</h2>
            <p className="text-gray-400 text-base sm:text-lg px-4">Experience the difference of quality service</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-red-600 text-4xl sm:text-5xl mb-3 sm:mb-4">✓</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Expert Technicians</h3>
              <p className="text-gray-400 text-sm sm:text-base">Certified professionals with years of experience</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-4xl sm:text-5xl mb-3 sm:mb-4">⚡</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Fast Service</h3>
              <p className="text-gray-400 text-sm sm:text-base">Quick turnaround times without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-4xl sm:text-5xl mb-3 sm:mb-4">💰</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Competitive Prices</h3>
              <p className="text-gray-400 text-sm sm:text-base">Fair and transparent pricing for all services</p>
            </div>
            <div className="text-center">
              <div className="text-red-600 text-4xl sm:text-5xl mb-3 sm:mb-4">🛡️</div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Quality Guarantee</h3>
              <p className="text-gray-400 text-sm sm:text-base">We stand behind our work with a satisfaction guarantee</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsCarousel />
    </div>
  )
}

