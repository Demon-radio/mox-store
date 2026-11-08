/**
 * Real brand logos — downloaded locally to /public/images/services/
 * (from brand favicon endpoints and Simple Icons CDN), so the site never
 * depends on hotlink-protected third-party CDNs (bangjeff returns 403,
 * clearbit is dead, Unsplash IDs kept rotting).
 *
 * Value ""  → no real logo available; UI renders a branded letter tile.
 * .svg URLs → white monochrome brand marks, render directly on dark tiles.
 * .png/.jpg → full-colour app favicons/icons, render on a white chip.
 */

export interface ServiceWithImageImage {
  name: string;
  image: string;
}

const S = "/mox-store/images/services";

export const SERVICE_IMAGES: Record<string, string> = {
  // ── Games & Top-Up ───────────────────────────────────────────────
  "PUBG Mobile — Global": `${S}/pubg.png`, // real PUBG Mobile logo
  "PUBG Mobile — Korea": `${S}/pubg.png`,
  "PUBG Mobile — Vietnam": `${S}/pubg.png`,
  "eFootball — eFootball Coins": "", // no official favicon available
  "Roblox — Robux": `${S}/roblox.svg`, // real Roblox mark
  "Free Fire — Diamonds": `${S}/freefire.png`, // real Free Fire "F"
  "Free Fire — Weekly Membership": `${S}/freefire.png`,
  "Free Fire — Monthly Membership": `${S}/freefire.png`,
  "Free Fire — Level-Up Offers": `${S}/freefire.png`,
  "FC Mobile — Silver Points": `${S}/fcmobile.png`, // EA Sports
  "FC Mobile — FIFA Points": `${S}/fcmobile.png`,
  "Yalla Ludo — Diamonds": "", // no official favicon available
  "Yalla Ludo — Gold": "",
  "Mobile Legends: Bang Bang": `${S}/mlbb.jpg`, // real MLBB "M"
  "Blood Strike": `${S}/bloodstrike.png`, // NetEase (publisher) mark
  "Coin Master": `${S}/coinmaster.png`, // Moon Active (publisher) mark
  "Ahd Al Abtal (Era of Heroes)": "",
  "More games on demand": "",

  // ── Entertainment & Streaming ────────────────────────────────────
  "Netflix": `${S}/netflix.svg`, // real Netflix N (white)
  "Shahid": `${S}/shahid.png`, // MBC Shahid app icon
  "OSN+": `${S}/osn.png`, // OSN TV wordmark (dark → inverted in UI)
  "Yango Play": `${S}/yango.png`, // Yango red mark
  "Crunchyroll": `${S}/crunchyroll.svg`, // real Crunchyroll mark (white)
  "IPTV": "",
  "Music platforms": `${S}/spotify.svg`, // Spotify mark

  // ── Artificial Intelligence ──────────────────────────────────────
  "ChatGPT": `${S}/chatgpt.png`, // real OpenAI knot
  "Google Gemini": `${S}/gemini.svg`, // Gemini spark (white)
  "Claude": `${S}/claude.svg`, // Claude sunburst (white)
  "Other AI platforms": "",

  // ── Apps & Software ──────────────────────────────────────────────
  "Google Play": `${S}/googleplay.svg`,
  "App Store": `${S}/appstore.svg`,
  "Software & digital services": "",
  "Subscription renewals": "",

  // ── Payments & Transfers ─────────────────────────────────────────
  "Course payments": "",
  "Website & online service subscriptions": "",
  "PayPal transfers": `${S}/paypal.svg`, // real PayPal mark
  "Digital services online": "",

  // ── Ads & Design ─────────────────────────────────────────────────
  "Facebook Ads": `${S}/meta.svg`,
  "Instagram Ads": `${S}/instagram.svg`,
  "TikTok Ads": `${S}/tiktok.svg`,
  "Snapchat Ads": `${S}/snapchat.svg`,
  "Ad campaign management": "",
  "Design & ad content": "",

  // ── Pages & Social Media ─────────────────────────────────────────
  "TikTok Coins": `${S}/tiktok.svg`,
  "Facebook Pages": `${S}/facebook.svg`,
  "Social media pages": `${S}/instagram.svg`,

  // ── Custom Services ──────────────────────────────────────────────
  "Custom digital service": "",
};