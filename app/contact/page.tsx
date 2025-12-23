'use client'

import { useState, useEffect } from 'react'
import { contactInfo } from '@/config/contact'
import Toast from '@/components/Toast'

const FORMSUBMIT_EMAIL = 'sid111rawal@gmail.com' // Test email - change to production email later

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [toastType, setToastType] = useState<'success' | 'error' | 'info'>('success')

  useEffect(() => {
    // Check if redirected from FormSubmit with success
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search)
      if (urlParams.get('success') === 'true') {
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', message: '' })
        // Set toast message and show it
        setToastMessage('Thank you! Your message has been sent. We\'ll get back to you soon.')
        setToastType('success')
        setShowToast(true)
        // Remove success parameter from URL
        window.history.replaceState({}, '', '/contact')
      }
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    setIsSubmitting(true)
    // Show toast immediately for better UX
    setToastMessage('Sending your message...')
    setToastType('info')
    setShowToast(true)
    // FormSubmit will handle the submission and redirect
    // The form will submit naturally, we just track the loading state
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-black">
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
        duration={5000}
      />
      {/* Header */}
      <section className="bg-gradient-to-b from-black via-gray-900 to-black py-12 sm:py-16 border-b border-red-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 sm:mb-4">
            Contact <span className="text-red-600">Us</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Get in touch with us for a free estimate or to schedule your service
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              <div className="bg-gray-900 border border-red-600 rounded-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Get In Touch</h2>
                <div className="space-y-4 sm:space-y-6">
                  <div>
                    <h3 className="text-red-600 font-semibold mb-2 text-sm sm:text-base">Address</h3>
                    <p className="text-gray-300 text-sm sm:text-base">
                      {contactInfo.address.street}<br />
                      {contactInfo.address.city}, {contactInfo.address.province} {contactInfo.address.postalCode}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-red-600 font-semibold mb-2 text-sm sm:text-base">Phone</h3>
                    <div className="space-y-1">
                      <p className="text-gray-300 text-sm sm:text-base">
                        Cell:{' '}
                        <a href={contactInfo.phoneLink} className="hover:text-red-600 transition-colors">
                          {contactInfo.phone}
                        </a>
                      </p>
                      <p className="text-gray-300 text-sm sm:text-base">
                        Office:{' '}
                        <a href={contactInfo.officePhoneLink} className="hover:text-red-600 transition-colors">
                          {contactInfo.officePhone}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-red-600 font-semibold mb-2 text-sm sm:text-base">Email</h3>
                    <a href={contactInfo.emailLink} className="text-gray-300 hover:text-red-600 text-sm sm:text-base transition-colors">
                      {contactInfo.email}
                    </a>
                  </div>
                  <div>
                    <h3 className="text-red-600 font-semibold mb-2 text-sm sm:text-base">Hours</h3>
                    <div className="text-gray-300 space-y-1 text-sm sm:text-base">
                      <p>{contactInfo.hours.weekdays}</p>
                      <p>{contactInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-gray-900 border border-red-600 rounded-lg p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 sm:mb-4">Find Us</h3>
                <div className="rounded-lg overflow-hidden border border-red-600/30">
                  <iframe
                    src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY || ''}&q=${encodeURIComponent(contactInfo.address.full)}`}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
                <a
                  href={contactInfo.address.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-500 text-sm sm:text-base mt-3 inline-block"
                >
                  View larger map →
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900 border border-red-600 rounded-lg p-6 sm:p-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6">Send Us a Message</h2>
              {submitted ? (
                <div className="bg-green-900 border border-green-600 rounded-lg p-5 sm:p-6 text-center">
                  <p className="text-green-300 text-base sm:text-lg font-semibold">
                    Thank you! Your message has been sent. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form 
                  action={`https://formsubmit.co/${FORMSUBMIT_EMAIL}`}
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  {/* FormSubmit configuration */}
                  <input type="hidden" name="_subject" value="New Contact Form Submission - SSR Auto Repair" />
                  <input type="hidden" name="_captcha" value="true" />
                  <input type="hidden" name="_next" value={`${typeof window !== 'undefined' ? window.location.origin : ''}/contact?success=true`} />
                  <input type="text" name="_honey" style={{ display: 'none' }} />
                  
                  <div>
                    <label htmlFor="name" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-red-600"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-red-600"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-red-600"
                      placeholder="(416) XXX-XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white font-medium mb-2 text-sm sm:text-base">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-red-600 resize-none"
                      placeholder="Tell us about your vehicle or service needs..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-red-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

