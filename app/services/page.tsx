import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Services | SSR Auto Repair & Collision Service',
  description: 'Comprehensive auto repair and collision services including engine repair, bodywork, maintenance, and more in Scarborough, ON',
  keywords: 'auto repair services, collision repair, engine repair, brake service, bodywork, car maintenance, Scarborough',
}

const services = [
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
  {
    title: 'Oil Change & Fluid Service',
    description: 'Regular maintenance including oil changes, fluid top-offs, and filter replacements to keep your vehicle in optimal condition.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527147/oil_fwxhgi.png',
  },
  {
    title: 'AC & Heating Repair',
    description: 'Complete HVAC system repair and maintenance. Stay comfortable year-round with our professional AC and heating services.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527123/hvac_ds1cjq.png',
  },
  {
    title: 'Electrical System Repair',
    description: 'Diagnosis and repair of electrical issues including battery, alternator, starter, and wiring problems.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527148/Electrical_ubrpb4.png',
  },
  {
    title: 'Tire Service',
    description: 'Tire installation, rotation, balancing, and repair services. We help you maintain proper tire condition for safety and performance.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527122/tire_g9cail.png',
  },
  {
    title: 'Exhaust System Repair',
    description: 'Exhaust system inspection, repair, and replacement. We ensure your vehicle meets emissions standards and runs quietly.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527120/Exhaust_lhbyze.png',
  },
  {
    title: 'Pre-Purchase Inspection',
    description: 'Comprehensive vehicle inspection before purchase. Get peace of mind with our detailed inspection service.',
    image: 'https://res.cloudinary.com/ddxgw6emd/image/upload/v1766527123/inspection_kn4oib.png',
  },
]

export default function Services() {
  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 border-b border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            Our <span className="text-red-600">Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Comprehensive auto repair and collision services to keep your vehicle in top condition
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900 border border-red-600 rounded-lg p-10 sm:p-12 hover:border-red-500 hover:shadow-lg hover:shadow-red-600/20 transition-all"
              >
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={360}
                    height={360}
                    className="w-60 h-60 sm:w-72 sm:h-72 object-contain"
                    unoptimized
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 border-y border-red-600 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 px-4">
            Contact us today for a free estimate on any of our services
          </p>
          <a
            href="/contact"
            className="inline-block bg-red-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            Contact Us Now
          </a>
        </div>
      </section>
    </div>
  )
}

