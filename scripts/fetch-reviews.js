const fs = require('fs');
const path = require('path');

// Load .env.local if it exists
try {
  const envPath = path.join(process.cwd(), '.env.local');
  if (fs.existsSync(envPath)) {
    const envFile = fs.readFileSync(envPath, 'utf8');
    envFile.split('\n').forEach(line => {
      const [key, ...values] = line.split('=');
      if (key && values.length > 0) {
        process.env[key.trim()] = values.join('=').trim();
      }
    });
  }
} catch (err) {
  // Ignore if .env.local doesn't exist
}

async function fetchGoogleReviews() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;
  
  if (!apiKey || !placeId) {
    console.error('Missing API key or Place ID');
    process.exit(1);
  }

  try {
    console.log('Fetching Google reviews...');
    
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews,rating,user_ratings_total&key=${apiKey}`
    );

    if (!response.ok) {
      throw new Error(`Google API responded with status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.status !== 'OK') {
      throw new Error(`Google API error: ${data.status}`);
    }

    // Create data directory if it doesn't exist
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }

    // Get all reviews from Google (API returns up to 5 reviews)
    const allReviews = data.result.reviews || [];
    
    // Check if there are manually added reviews to supplement
    const reviewsFilePath = path.join(dataDir, 'reviews.json');
    let existingManualReviews = [];
    
    if (fs.existsSync(reviewsFilePath)) {
      try {
        const existingData = JSON.parse(fs.readFileSync(reviewsFilePath, 'utf8'));
        // Keep only the last 10 manual reviews (to maintain 15 total: 5 API + 10 manual)
        if (existingData.manualReviews && Array.isArray(existingData.manualReviews)) {
          existingManualReviews = existingData.manualReviews
            .sort((a, b) => b.time - a.time) // Sort by newest first
            .slice(0, 10); // Keep only last 10
        }
      } catch (err) {
        // Ignore if file doesn't exist or is invalid
      }
    }
    
    // Create a set to track duplicates (by author_name + text)
    const seenReviews = new Set();
    const apiReviewKeys = allReviews.map(r => `${r.author_name}|${r.text}`).forEach(key => seenReviews.add(key));
    
    // Filter manual reviews to remove duplicates with API reviews
    const uniqueManualReviews = existingManualReviews.filter(review => {
      const key = `${review.author_name}|${review.text}`;
      if (seenReviews.has(key)) {
        return false; // Duplicate, skip
      }
      seenReviews.add(key);
      return true;
    });
    
    // Combine API reviews with unique manual reviews
    const allFetchedReviews = [...allReviews, ...uniqueManualReviews];
    
    // Filter for 4-5 star reviews and sort by newest first
    const filteredReviews = allFetchedReviews
      .filter(review => review.rating >= 4) // Only 4 and 5 star reviews
      .sort((a, b) => b.time - a.time) // Sort by newest first
      .map(review => {
        // Normalize date descriptions - anything older than a month becomes "a month ago"
        const timeDescription = review.relative_time_description.toLowerCase();
        if (timeDescription.includes('2 months') || 
            timeDescription.includes('3 months') || 
            timeDescription.includes('4 months') || 
            timeDescription.includes('5 months') || 
            timeDescription.includes('6 months') || 
            timeDescription.includes('7 months') || 
            timeDescription.includes('8 months') || 
            timeDescription.includes('9 months') || 
            timeDescription.includes('10 months') || 
            timeDescription.includes('11 months') || 
            timeDescription.includes('year')) {
          return {
            ...review,
            relative_time_description: 'a month ago'
          };
        }
        return review;
      });
    

    // Use the ACTUAL overall rating from Google, not calculated from filtered reviews
    const overallRating = data.result.rating || 0;

    // Limit to 15 reviews total (5 API + 10 manual max)
    // Sort all reviews by time, then take top 15
    const finalReviews = filteredReviews
      .sort((a, b) => b.time - a.time)
      .slice(0, 15);
    
    // Keep the last 10 manual reviews (sorted by time, newest first)
    // These will be used for future runs when new API reviews come in
    const finalManualReviews = uniqueManualReviews
      .sort((a, b) => b.time - a.time)
      .slice(0, 10); // Keep only last 10 manual reviews
    
    // Save reviews data
    const reviewsData = {
      lastUpdated: new Date().toISOString(),
      overallRating: Math.round(overallRating * 10) / 10, // Round to 1 decimal (should be 4.7)
      totalReviews: data.result.user_ratings_total || 0,
      reviews: finalReviews,
      manualReviews: finalManualReviews // Keep only last 10 manual reviews
    };

    const filePath = path.join(dataDir, 'reviews.json');
    fs.writeFileSync(filePath, JSON.stringify(reviewsData, null, 2));
    
    console.log(`✅ Reviews updated successfully!`);
    console.log(`📊 Overall rating: ${reviewsData.overallRating} (from Google)`);
    console.log(`📝 Total reviews: ${reviewsData.totalReviews}`);
    console.log(`💬 4-5 star reviews shown: ${reviewsData.reviews.length}`);
    console.log(`⭐ Available from API: ${allReviews.length} reviews (Google Places API returns max 5)`);
    console.log(`📅 Date descriptions normalized (older reviews show as "a month ago")`);
    console.log(`\n⚠️  Note: Google Places API only returns up to 5 reviews per request.`);
    console.log(`   To get more reviews, you would need to use Google My Business API (requires additional setup).`);
    
  } catch (error) {
    console.error('❌ Error fetching reviews:', error.message);
    process.exit(1);
  }
}

fetchGoogleReviews();

