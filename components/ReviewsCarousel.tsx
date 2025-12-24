'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import reviewsData from '@/data/reviews.json'
import { contactInfo } from '@/config/contact'

interface Review {
  author_name: string
  rating: number
  text: string
  time: number
  relative_time_description: string
  profile_photo_url?: string
}

interface ReviewsData {
  lastUpdated: string
  overallRating: number
  totalReviews: number
  reviews: Review[]
}

export default function ReviewsCarousel() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [overallRating, setOverallRating] = useState<number>(0)
  const [totalReviews, setTotalReviews] = useState<number>(0)
  const [loading, setLoading] = useState<boolean>(true)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [reviewsPerSlide, setReviewsPerSlide] = useState<number>(1)

  useEffect(() => {
    const updateReviewsPerSlide = () => {
      if (window.innerWidth >= 768) {
        setReviewsPerSlide(3)
      } else {
        setReviewsPerSlide(1)
      }
    }
    updateReviewsPerSlide()
    window.addEventListener('resize', updateReviewsPerSlide)
    return () => window.removeEventListener('resize', updateReviewsPerSlide)
  }, [])

  useEffect(() => {
    // Load reviews from static JSON file
    try {
      const data: ReviewsData = reviewsData
      setReviews(data.reviews || [])
      setOverallRating(data.overallRating || 0)
      setTotalReviews(data.totalReviews || 0)
    } catch (err) {
      console.error('Error loading reviews:', err)
    } finally {
      setLoading(false)
    }
  }, [])

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600 fill-gray-600'
        }`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  const nextSlide = () => {
    const maxSlides = Math.ceil(reviews.length / reviewsPerSlide) - 1
    setCurrentSlide((prev) => (prev < maxSlides ? prev + 1 : 0))
  }

  const prevSlide = () => {
    const maxSlides = Math.ceil(reviews.length / reviewsPerSlide) - 1
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : maxSlides))
  }

  const goToSlide = (index: number) => {
    const maxSlides = Math.ceil(reviews.length / reviewsPerSlide) - 1
    setCurrentSlide(Math.min(index, maxSlides))
  }

  const getCurrentReviews = () => {
    const start = currentSlide * reviewsPerSlide
    const end = start + reviewsPerSlide
    return reviews.slice(start, end)
  }

  if (loading) {
    return (
      <section className="bg-black py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-800 rounded w-48 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  if (reviews.length === 0) {
    return null // Don't show section if no reviews
  }

  return (
    <section className="bg-black py-12 sm:py-16 lg:py-20 border-y border-red-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">
            What Our <span className="text-red-600">Customers</span> Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-6 sm:mb-8">
            Real reviews from satisfied customers
          </p>
          
          {/* Overall Rating */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                {renderStars(Math.round(overallRating))}
              </div>
              <span className="text-2xl sm:text-3xl font-bold text-red-600">{overallRating.toFixed(1)}</span>
            </div>
            <div className="h-8 w-px bg-gray-700"></div>
            <div className="text-gray-300">
              <span className="font-semibold text-lg sm:text-xl">{totalReviews}</span>
              <span className="text-sm sm:text-base block sm:inline sm:ml-1">Google Reviews</span>
            </div>
          </div>
        </div>
        
        {/* Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * (100 / reviewsPerSlide)}%)`,
              }}
            >
              {reviews.map((review, index) => (
                <div
                  key={index}
                  className="min-w-full md:min-w-[33.333%] px-3 sm:px-4"
                >
                  <div className="bg-gray-900 border border-red-600 rounded-lg p-6 sm:p-8 h-full hover:border-red-500 hover:shadow-lg hover:shadow-red-600/20 transition-all flex flex-col">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg
                        className="w-8 h-8 text-red-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.432.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>
                    
                    {/* Stars */}
                    <div className="flex items-center gap-1 mb-4">
                      {renderStars(review.rating)}
                    </div>
                    
                    {/* Review Text */}
                    <p className="text-gray-300 mb-6 flex-grow text-sm sm:text-base leading-relaxed line-clamp-5">
                      {review.text}
                    </p>
                    
                    {/* Author Info */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                      <div>
                        <h4 className="font-semibold text-white text-sm sm:text-base">{review.author_name}</h4>
                        <p className="text-xs sm:text-sm text-gray-400">{review.relative_time_description}</p>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg className="w-5 h-5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                        <span className="text-xs text-gray-400 hidden sm:inline">Google</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          {reviews.length > reviewsPerSlide && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 md:-translate-x-8 bg-red-600 hover:bg-red-700 active:bg-red-800 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all z-10 touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
                aria-label="Previous reviews"
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
                aria-label="Next reviews"
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
          {reviews.length > reviewsPerSlide && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.ceil(reviews.length / reviewsPerSlide) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                    currentSlide === index
                      ? 'bg-red-600 w-6 sm:w-8'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* See More Reviews Button */}
        <div className="text-center mt-10 sm:mt-12">
          <a
            href={`https://www.google.com/maps/place/?q=place_id:${contactInfo.googlePlaceId}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base shadow-lg"
          >
            <span>See more reviews on Google</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

