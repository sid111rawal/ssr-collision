'use client'

import { useEffect } from 'react'

interface CalendlyWidgetProps {
  url: string
  height?: string
}

export default function CalendlyWidget({ url, height = '700px' }: CalendlyWidgetProps) {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script')
    script.src = 'https://assets.calendly.com/assets/external/widget.js'
    script.async = true
    document.body.appendChild(script)

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return (
    <div className="calendly-inline-widget w-full rounded-lg overflow-hidden" style={{ height, minHeight: '600px' }}>
      <iframe
        src={url}
        width="100%"
        height="100%"
        frameBorder="0"
        title="Schedule a meeting"
        className="w-full"
        style={{ border: 'none' }}
      />
    </div>
  )
}

