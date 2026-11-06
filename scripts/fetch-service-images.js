const fetch = require('node-fetch');

// SerpAPI configuration - you'll need to get your own API key from https://serpapi.com/
const SERPAPI_KEY = 'your-serpapi-api-key-here'; // Replace with your actual API key

const serviceQueries = {
  "PUBG Mobile": "PUBG Mobile game logo",
  "Free Fire": "Free Fire game logo",
  "Roblox": "Roblox game logo",
  "Netflix": "Netflix logo",
  "ChatGPT": "ChatGPT logo",
  "Google Gemini": "Google Gemini AI logo",
  "Mobile Legends": "Mobile Legends Bang Bang logo",
  "eFootball": "eFootball PES logo",
  "FC Mobile": "FC Mobile FIFA logo",
  "Yalla Ludo": "Yalla Ludo game logo",
  "Blood Strike": "Blood Strike game logo",
  "Coin Master": "Coin Master game logo",
  "Claude": "Claude AI logo",
  "TikTok": "TikTok logo",
  "Facebook": "Facebook logo",
  "Instagram": "Instagram logo",
  "Crunchyroll": "Crunchyroll logo",
  "Shahid": "Shahid logo",
  "OSN": "OSN Plus logo",
  "IPTV": "IPTV service logo",
  "Google Play": "Google Play Store logo",
  "App Store": "Apple App Store logo",
  "PayPal": "PayPal logo",
  "Snapchat": "Snapchat logo",
  "YouTube": "YouTube logo",
  "Spotify": "Spotify logo",
  "Adobe": "Adobe software logo",
  "Microsoft": "Microsoft logo",
  "Apple": "Apple logo",
  "Amazon": "Amazon logo",
  "Meta": "Meta logo",
  "X": "X logo formerly Twitter",
  "TikTok Ads": "TikTok advertising logo",
  "Facebook Ads": "Facebook advertising logo",
  "Instagram Ads": "Instagram advertising logo",
  "Snapchat Ads": "Snapchat advertising logo",
  "Ad Campaign": "Digital advertising logo",
  "Design": "Graphic design logo",
  "Social Media": "Social media marketing logo",
  "Custom Service": "Custom digital service logo"
};

async function searchImages(query) {
  try {
    const response = await fetch(`https://serpapi.com/search.json?engine=google_images&q=${encodeURIComponent(query)}&tbm=isch&ijn=0&api_key=${SERPAPI_KEY}&num=1`);
    const data = await response.json();
    
    if (data.images_results && data.images_results.length > 0) {
      const firstImage = data.images_results[0];
      return firstImage.original || firstImage.thumbnail || firstImage.link;
    }
    return null;
  } catch (error) {
    console.error(`Error searching for ${query}:`, error.message);
    return null;
  }
}

async function main() {
  console.log('Starting service image search...');
  
  const results = {};
  
  for (const [serviceName, query] of Object.entries(serviceQueries)) {
    console.log(`Searching for: ${serviceName} (${query})`);
    const imageUrl = await searchImages(query);
    results[serviceName] = imageUrl || `https://via.placeholder.com/400x300/333333/FFFFFF?text=${encodeURIComponent(serviceName)}`;
    console.log(`Found: ${imageUrl ? 'Image URL' : 'Placeholder'}`);
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('\n=== RESULTS ===');
  console.log(JSON.stringify(results, null, 2));
}

if (require.main === module) {
  main().catch(console.error);
}

module.exports = { searchImages, serviceQueries };