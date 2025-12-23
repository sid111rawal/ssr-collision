// Helper script to manually add more reviews
// Run: node scripts/add-manual-reviews.js

const fs = require('fs');
const path = require('path');

const dataDir = path.join(process.cwd(), 'data');
const reviewsFilePath = path.join(dataDir, 'reviews.json');

// Example manual reviews - you can add more here
// Format them like Google API reviews
const manualReviews = [
  // Add your additional reviews here in this format:
  // {
  //   author_name: "Customer Name",
  //   rating: 5,
  //   text: "Review text here...",
  //   time: Math.floor(Date.now() / 1000) - (30 * 24 * 60 * 60), // 30 days ago
  //   relative_time_description: "a month ago"
  // }
];

if (fs.existsSync(reviewsFilePath)) {
  const data = JSON.parse(fs.readFileSync(reviewsFilePath, 'utf8'));
  
  // Add manual reviews
  if (!data.manualReviews) {
    data.manualReviews = [];
  }
  
  // Merge manual reviews (avoid duplicates)
  manualReviews.forEach(newReview => {
    const exists = data.manualReviews.some(
      r => r.author_name === newReview.author_name && 
           r.text === newReview.text
    );
    if (!exists) {
      data.manualReviews.push(newReview);
    }
  });
  
  // Update the main reviews array
  const allReviews = [...(data.reviews || []), ...data.manualReviews]
    .filter((review, index, self) => 
      index === self.findIndex(r => 
        r.author_name === review.author_name && r.text === review.text
      )
    )
    .sort((a, b) => b.time - a.time)
    .slice(0, 20); // Limit to 20 reviews
  
  data.reviews = allReviews;
  
  fs.writeFileSync(reviewsFilePath, JSON.stringify(data, null, 2));
  console.log(`✅ Added ${manualReviews.length} manual reviews`);
  console.log(`📊 Total reviews now: ${data.reviews.length}`);
} else {
  console.error('❌ reviews.json not found. Run fetch-reviews first.');
}


