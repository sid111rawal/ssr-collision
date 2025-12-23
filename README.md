# SSR Auto Repair & Collision Service Website

A modern, SEO-optimized website for SSR Auto Repair & Collision Service built with Next.js 14.

## Features

- 🎨 Modern black, red, and white theme
- 📱 Fully responsive design
- 🔍 SEO optimized with meta tags, structured data, and sitemap
- ⚡ Server-side rendering for better performance
- 🚀 Fast page loads and smooth navigation

## Pages

- **Home**: Hero section, services preview, and key information
- **Services**: Comprehensive list of auto repair and collision services
- **About Us**: Company story, mission, values, and why choose us
- **Contact**: Contact form, business information, and location

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Business Information

- **Name**: SSR Auto Repair & Collision Service
- **Address**: 3254 Danforth Ave, Scarborough, ON M1L 1C2
- **Theme**: Black, Red, and White

## Customization

### Update Contact Information

Edit the following files to update contact details:
- `app/layout.tsx` - Update structured data and metadata
- `components/Footer.tsx` - Update footer contact information
- `app/contact/page.tsx` - Update contact page information

### Update Business Hours

Edit `components/Footer.tsx` and `app/contact/page.tsx` to update business hours.

### Add Contact Form Backend

The contact form in `app/contact/page.tsx` currently logs to console. To connect it to a backend:

1. Create an API route in `app/api/contact/route.ts`
2. Update the form submission handler in `app/contact/page.tsx`

## SEO Features

- Meta tags for all pages
- Structured data (JSON-LD) for local business
- Sitemap generation
- Robots.txt configuration
- Semantic HTML structure
- Optimized page titles and descriptions

## Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)

## License

All rights reserved - SSR Auto Repair & Collision Service

