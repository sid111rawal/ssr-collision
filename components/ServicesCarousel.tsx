'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface Service {
  title: string
  description: string
  image: string
}

interface ServicesCarouselProps {
  services: Service[]
}

export default function ServicesCarousel({ services }: ServicesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [itemsPerView, setItemsPerView] = useState(1)

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 768) {
        setItemsPerView(3)
      } else {
        setItemsPerView(1)
      }
    }

    updateItemsPerView()
    window.addEventListener('resize', updateItemsPerView)
    return () => window.removeEventListener('resize', updateItemsPerView)
  }, [])

  const maxIndex = Math.max(0, services.length - itemsPerView)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex))
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="min-w-full md:min-w-[33.333%] px-3 sm:px-4"
            >
              <div className="bg-gray-900 border border-red-600 rounded-lg p-8 sm:p-10 hover:border-red-500 hover:shadow-lg hover:shadow-red-600/20 transition-all h-full">
                <div className="mb-6 sm:mb-8 flex justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={360}
                    height={360}
                    className="w-48 h-48 sm:w-60 sm:h-60 object-contain"
                    loading="lazy"
                    quality={85}
                  />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base text-center">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all z-10 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Previous slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 md:translate-x-8 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all z-10 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
        aria-label="Next slide"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 sm:mt-8 gap-2">
        {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
              currentIndex === index
                ? 'bg-red-600 w-6 sm:w-8'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

