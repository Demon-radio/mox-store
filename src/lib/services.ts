/**
 * Mox Store — full service catalog (English only).
 */

export interface Service {
  name: string;
  subtitle?: string;
}

export interface ServiceCategory {
  id: string;
  name: string;
  tagline: string;
  items: Service[];
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: "gaming",
    name: "Games & Top-Up",
    tagline: "Game top-ups and memberships, delivered instantly.",
    items: [
      { name: "PUBG Mobile — Global", subtitle: "UC top-up" },
      { name: "PUBG Mobile — Korea", subtitle: "UC top-up" },
      { name: "PUBG Mobile — Vietnam", subtitle: "UC top-up" },
      { name: "eFootball — eFootball Coins", subtitle: "Coins top-up" },
      { name: "Roblox — Robux", subtitle: "Robux top-up" },
      { name: "Free Fire — Diamonds", subtitle: "Diamonds top-up" },
      { name: "Free Fire — Weekly Membership" },
      { name: "Free Fire — Monthly Membership" },
      { name: "Free Fire — Level-Up Offers", subtitle: "All tiers available" },
      { name: "FC Mobile — Silver Points" },
      { name: "FC Mobile — FIFA Points" },
      { name: "Yalla Ludo — Diamonds" },
      { name: "Yalla Ludo — Gold" },
      { name: "Mobile Legends: Bang Bang", subtitle: "Diamonds top-up" },
      { name: "Blood Strike", subtitle: "Top-up" },
      { name: "Coin Master", subtitle: "Top-up" },
      { name: "Ahd Al Abtal (Era of Heroes)", subtitle: "Top-up" },
      { name: "More games on demand", subtitle: "Just ask us" },
    ],
  },
  {
    id: "entertainment",
    name: "Entertainment & Streaming",
    tagline: "Subscriptions for every platform.",
    items: [
      { name: "Netflix", subtitle: "Subscription" },
      { name: "Shahid", subtitle: "Subscription" },
      { name: "OSN+", subtitle: "Subscription" },
      { name: "Yango Play", subtitle: "Subscription" },
      { name: "Crunchyroll", subtitle: "Subscription" },
      { name: "IPTV", subtitle: "Subscription" },
      { name: "Music platforms", subtitle: "All services available" },
    ],
  },
  {
    id: "ai",
    name: "Artificial Intelligence",
    tagline: "Premium AI plans at the best prices.",
    items: [
      { name: "ChatGPT", subtitle: "Plus & Pro plans" },
      { name: "Google Gemini", subtitle: "Advanced plan" },
      { name: "Claude", subtitle: "Pro plan" },
      { name: "Other AI platforms", subtitle: "On demand" },
    ],
  },
  {
    id: "apps",
    name: "Apps & Software",
    tagline: "Apps, games and digital services — bought and activated for you.",
    items: [
      { name: "Google Play", subtitle: "Apps, games & subscriptions" },
      { name: "App Store", subtitle: "Apps, games & subscriptions" },
      { name: "Software & digital services", subtitle: "Purchase & activation" },
      { name: "Subscription renewals", subtitle: "Apps & platforms" },
    ],
  },
  {
    id: "payments",
    name: "Payments & Transfers",
    tagline: "We pay for you, anywhere.",
    items: [
      { name: "Course payments" },
      { name: "Website & online service subscriptions", subtitle: "Payment" },
      { name: "PayPal transfers" },
      { name: "Digital services online", subtitle: "Purchase on your behalf" },
    ],
  },
  {
    id: "ads",
    name: "Ads & Design",
    tagline: "Launch, manage and optimize your ad campaigns.",
    items: [
      { name: "Facebook Ads", subtitle: "Paid campaigns" },
      { name: "Instagram Ads", subtitle: "Paid campaigns" },
      { name: "TikTok Ads", subtitle: "Paid campaigns" },
      { name: "Snapchat Ads", subtitle: "Paid campaigns" },
      { name: "Ad campaign management", subtitle: "Setup, management & tracking" },
      { name: "Design & ad content", subtitle: "Creatives for your ads" },
    ],
  },
  {
    id: "social",
    name: "Pages & Social Media",
    tagline: "TikTok coins and ready business pages.",
    items: [
      { name: "TikTok Coins", subtitle: "Coins top-up" },
      { name: "Facebook Pages", subtitle: "Ready pages for sale" },
      { name: "Social media pages", subtitle: "Setup & management" },
    ],
  },
  {
    id: "custom",
    name: "Custom Services",
    tagline: "Don't see what you need? We'll get it done.",
    items: [{ name: "Custom digital service", subtitle: "On demand, just ask" }],
  },
];
