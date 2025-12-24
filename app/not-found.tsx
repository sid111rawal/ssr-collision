import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-8xl sm:text-9xl md:text-[12rem] font-bold text-red-600 leading-none">
            4<span className="text-white">0</span>4
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
            Page Not Found
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-2">
            Oops! The page you're looking for doesn't exist.
          </p>
          <p className="text-base sm:text-lg text-gray-500">
            It might have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg shadow-red-600/50 w-full sm:w-auto"
          >
            Go to Homepage
          </Link>
          <Link
            href="/contact"
            className="bg-transparent border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all transform hover:scale-105 w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-gray-800">
          <p className="text-gray-500 mb-4 text-sm sm:text-base">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link
              href="/services"
              className="text-gray-400 hover:text-red-600 transition-colors text-sm sm:text-base"
            >
              Services
            </Link>
            <Link
              href="/about"
              className="text-gray-400 hover:text-red-600 transition-colors text-sm sm:text-base"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-gray-400 hover:text-red-600 transition-colors text-sm sm:text-base"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  )
}


