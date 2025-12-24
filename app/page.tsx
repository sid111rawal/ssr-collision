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
      <section className="relative bg-gradient-to-b from-black via-black to-gray-900 text-white py-16 sm:py-20 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-red-600 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-600 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight animate-fade-in">
              <span className="text-white">SSR AUTO REPAIR</span>
              <br />
              <span className="text-red-600">& COLLISION SERVICE</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 sm:mb-10 max-w-3xl mx-auto px-4 leading-relaxed">
              Your trusted partner for quality auto repair and collision services in Scarborough
            </p>
            
            {/* Value Propositions - Clear and Prominent */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 px-4">
              <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-red-600/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="text-sm sm:text-base font-medium text-white">Fast Service</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-red-600/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span className="text-sm sm:text-base font-medium text-white">Honest Pricing</span>
              </div>
              <div className="flex items-center gap-2 bg-gray-900/50 backdrop-blur-sm border border-red-600/30 rounded-full px-4 sm:px-6 py-2 sm:py-3">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm sm:text-base font-medium text-white">Quality Work</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Link
                href="/contact"
                className="bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg shadow-red-600/50"
              >
                Get a Quote
              </Link>
              <Link
                href="/services"
                className="bg-transparent border-2 border-red-600 text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-red-600 hover:text-white transition-all transform hover:scale-105"
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

      {/* Why Choose Us - Enhanced with better visual hierarchy */}
      <section className="bg-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Why Choose <span className="text-red-600">SSR Auto Repair</span>?
            </h2>
            <p className="text-gray-400 text-base sm:text-lg md:text-xl px-4 max-w-2xl mx-auto">
              Experience the difference of quality service, honest pricing, and fast turnaround
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center bg-black/50 border border-red-600/20 rounded-xl p-6 sm:p-8 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10 transition-all transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-600/10 rounded-full mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">Expert Technicians</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">Certified professionals with years of experience in auto repair and collision services</p>
            </div>
            <div className="text-center bg-black/50 border border-red-600/20 rounded-xl p-6 sm:p-8 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10 transition-all transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-600/10 rounded-full mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">Fast Service</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">Quick turnaround times without compromising quality - same-day service available</p>
            </div>
            <div className="text-center bg-black/50 border border-red-600/20 rounded-xl p-6 sm:p-8 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10 transition-all transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-600/10 rounded-full mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">Honest Pricing</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">Fair and transparent pricing - no hidden fees, no unnecessary repairs</p>
            </div>
            <div className="text-center bg-black/50 border border-red-600/20 rounded-xl p-6 sm:p-8 hover:border-red-600/50 hover:shadow-lg hover:shadow-red-600/10 transition-all transform hover:-translate-y-1">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-red-600/10 rounded-full mb-4 sm:mb-6">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3">Quality Guarantee</h3>
              <p className="text-gray-400 text-sm sm:text-base leading-relaxed">We stand behind our work with a satisfaction guarantee and warranty on all repairs</p>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <ReviewsCarousel />
    </div>
  )
}

