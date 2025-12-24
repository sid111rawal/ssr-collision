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
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

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

  // Swipe gesture handlers
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      nextSlide()
    }
    if (isRightSwipe) {
      prevSlide()
    }
  }

  return (
    <div className="relative">
      {/* Carousel Container */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out touch-pan-y"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
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
      {services.length > itemsPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:-left-8 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all z-10 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
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
            className="absolute right-2 sm:right-4 md:-right-8 top-1/2 -translate-y-1/2 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all z-10 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
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
        </>
      )}

      {/* Dots Indicator */}
      {services.length > itemsPerView && (
        <div className="flex justify-center mt-6 sm:mt-8 gap-2">
          {Array.from({ length: Math.max(1, maxIndex + 1) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-3 sm:h-3 rounded-full transition-all touch-manipulation ${
                currentIndex === index
                  ? 'bg-red-600 w-8 sm:w-10'
                  : 'bg-gray-600 hover:bg-gray-500 active:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

