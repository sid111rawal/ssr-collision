'use client'

import { contactInfo } from '@/config/contact'
import { useState } from 'react'

export default function CallButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <a
      href={contactInfo.phoneLink}
      className="fixed bottom-6 right-6 z-50 bg-red-600 hover:bg-red-700 text-white rounded-full shadow-2xl shadow-red-600/50 transition-all duration-300 flex items-center gap-3 px-4 sm:px-6 py-3 sm:py-4 group hover:scale-110"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Call us"
    >
      <svg
        className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
      <span
        className={`font-semibold text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
          isHovered ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0 sm:opacity-100 sm:max-w-[200px]'
        } overflow-hidden`}
      >
        Call Us
      </span>
    </a>
  )
}

