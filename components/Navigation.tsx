'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-black border-b border-red-600 fixed top-0 left-0 right-0 z-[100] shadow-lg shadow-red-600/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24 md:h-28">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/img/logo.png"
              alt="SSR Auto Repair & Collision Service"
              width={250}
              height={100}
              className="h-14 sm:h-16 md:h-20 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10 lg:space-x-12">
            <Link href="/" className="text-white hover:text-red-600 transition-colors font-medium text-lg lg:text-xl">
              Home
            </Link>
            <Link href="/services" className="text-white hover:text-red-600 transition-colors font-medium text-lg lg:text-xl">
              Services
            </Link>
            <Link href="/about" className="text-white hover:text-red-600 transition-colors font-medium text-lg lg:text-xl">
              About Us
            </Link>
            <Link href="/contact" className="bg-red-600 text-white px-5 lg:px-6 py-2.5 lg:py-3 rounded hover:bg-red-700 transition-colors font-medium text-lg lg:text-xl">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white focus:outline-none p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black border-t border-red-600">
          <div className="px-4 pt-3 pb-5 space-y-3">
            <Link
              href="/"
              className="block text-white hover:text-red-600 transition-colors py-3 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className="block text-white hover:text-red-600 transition-colors py-3 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/about"
              className="block text-white hover:text-red-600 transition-colors py-3 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="block bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors text-center text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

