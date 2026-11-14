/**
 * Mox Store — top-up & digital products catalog.
 * Fully local (no external API) so the site works on GitHub Pages.
 * All prices in EGP. Orders go through WhatsApp with a prefilled message.
 */

export interface Pack {
  /** e.g. "325 UC" or "1 Month Premium" */
  label: string;
  /** selling price in EGP */
  price: number;
  /** original price for flash deals */
  originalPrice?: number;
  /** e.g. "+5% Bonus" */
  bonus?: string;
  tag?: "HOT" | "BEST" | "NEW";
}

export interface GameInput {
  key: string;
  placeholder: string;
}

export type GameCategory = "topup" | "subs" | "gift";

export interface Game {
  slug: string;
  name: string;
  publisher: string;
  /** currency shown on cards, e.g. "UC", "Diamonds", "Subscription" */
  currency: string;
  image?: string;
  category: GameCategory;
  inputs: GameInput[];
  packs: Pack[];
  popular?: boolean;
  flash?: boolean;
}

const S = "/mox-store/images/services";

export const GAMES: Game[] = [
  // ── Top-Up ────────────────────────────────────────────────────────────
  {
    slug: "pubg-mobile",
    name: "PUBG Mobile — Global",
    publisher: "Tencent Games",
    currency: "UC",
    image: `${S}/pubg.png`,
    category: "topup",
    popular: true,
    flash: true,
    inputs: [{ key: "Player ID", placeholder: "e.g. 5123456789" }],
    packs: [
      { label: "60 UC", price: 95 },
      { label: "325 UC", price: 475, tag: "BEST" },
      { label: "660 UC", price: 950, originalPrice: 1080, tag: "HOT" },
      { label: "1800 UC", price: 2450 },
      { label: "3850 UC", price: 5150, bonus: "+5% Bonus" },
      { label: "8100 UC", price: 10500, bonus: "+10% Bonus" },
    ],
  },
  {
    slug: "pubg-korea",
    name: "PUBG Mobile — Korea",
    publisher: "Tencent Games",
    currency: "UC",
    image: `${S}/pubg.png`,
    category: "topup",
    inputs: [{ key: "Player ID", placeholder: "e.g. 5123456789" }],
    packs: [
      { label: "60 UC", price: 120 },
      { label: "325 UC", price: 610 },
      { label: "660 UC", price: 1210 },
      { label: "1800 UC", price: 3100 },
    ],
  },
  {
    slug: "pubg-vietnam",
    name: "PUBG Mobile — Vietnam",
    publisher: "VNG Games",
    currency: "UC",
    image: `${S}/pubg.png`,
    category: "topup",
    inputs: [{ key: "Player ID", placeholder: "e.g. 5123456789" }],
    packs: [
      { label: "60 UC", price: 110 },
      { label: "325 UC", price: 540 },
      { label: "660 UC", price: 1080 },
      { label: "1800 UC", price: 2750 },
    ],
  },
  {
    slug: "free-fire",
    name: "Free Fire",
    publisher: "Garena",
    currency: "Diamonds",
    image: `${S}/freefire.png`,
    category: "topup",
    popular: true,
    flash: true,
    inputs: [{ key: "Player ID", placeholder: "e.g. 2345678901" }],
    packs: [
      { label: "25 Diamonds", price: 55 },
      { label: "50 Diamonds", price: 105 },
      { label: "100 Diamonds", price: 205 },
      { label: "210 Diamonds", price: 410 },
      { label: "350 Diamonds", price: 675 },
      { label: "500 Diamonds", price: 950, tag: "BEST" },
      { label: "1060 Diamonds", price: 1950, originalPrice: 2250, tag: "HOT" },
      { label: "2180 Diamonds", price: 3900 },
    ],
  },
  {
    slug: "roblox",
    name: "Roblox — Robux",
    publisher: "Roblox Corporation",
    currency: "Robux",
    image: `${S}/roblox.svg`,
    category: "topup",
    popular: true,
    inputs: [{ key: "Roblox Username", placeholder: "your Roblox username" }],
    packs: [
      { label: "80 Robux", price: 160 },
      { label: "400 Robux", price: 780 },
      { label: "800 Robux", price: 1550, tag: "BEST" },
      { label: "1700 Robux", price: 3250 },
      { label: "4500 Robux", price: 8300 },
    ],
  },
  {
    slug: "mobile-legends",
    name: "Mobile Legends: Bang Bang",
    publisher: "Moonton",
    currency: "Diamonds",
    image: `${S}/mlbb.jpg`,
    category: "topup",
    popular: true,
    flash: true,
    inputs: [
      { key: "User ID", placeholder: "e.g. 123456789" },
      { key: "Zone ID", placeholder: "e.g. 2201" },
    ],
    packs: [
      { label: "86 Diamonds", price: 195 },
      { label: "172 Diamonds", price: 385 },
      { label: "257 Diamonds", price: 575 },
      { label: "344 Diamonds", price: 765 },
      { label: "514 Diamonds", price: 1130 },
      { label: "1050 Diamonds", price: 2280, originalPrice: 2600, tag: "HOT" },
      { label: "2195 Diamonds", price: 4650 },
    ],
  },
  {
    slug: "efootball",
    name: "eFootball",
    publisher: "Konami",
    currency: "Coins",
    category: "topup",
    inputs: [{ key: "Konami ID", placeholder: "your Konami ID / email" }],
    packs: [
      { label: "550 Coins", price: 260 },
      { label: "1070 Coins", price: 495 },
      { label: "2200 Coins", price: 990, tag: "BEST" },
      { label: "5550 Coins", price: 2450 },
    ],
  },
  {
    slug: "fc-mobile",
    name: "FC Mobile",
    publisher: "EA Sports",
    currency: "Points",
    image: `${S}/fcmobile.png`,
    category: "topup",
    inputs: [{ key: "Player ID", placeholder: "your FC Mobile ID" }],
    packs: [
      { label: "110 Silver Points", price: 120 },
      { label: "570 Silver Points", price: 590 },
      { label: "1180 Silver Points", price: 1190, tag: "BEST" },
      { label: "6100 Silver Points", price: 5950 },
    ],
  },
  {
    slug: "blood-strike",
    name: "Blood Strike",
    publisher: "NetEase",
    currency: "Gold",
    image: `${S}/bloodstrike.png`,
    category: "topup",
    inputs: [{ key: "Player ID", placeholder: "e.g. 1029384756" }],
    packs: [
      { label: "60 Gold", price: 110 },
      { label: "300 Gold", price: 530 },
      { label: "680 Gold", price: 1180, tag: "BEST" },
      { label: "1980 Gold", price: 3300 },
    ],
  },
  {
    slug: "coin-master",
    name: "Coin Master",
    publisher: "Moon Active",
    currency: "Spins",
    image: `${S}/coinmaster.png`,
    category: "topup",
    inputs: [{ key: "Player ID", placeholder: "your Coin Master ID" }],
    packs: [
      { label: "100 Spins", price: 190 },
      { label: "300 Spins", price: 560 },
      { label: "700 Spins", price: 1250, tag: "BEST" },
    ],
  },
  {
    slug: "yalla-ludo",
    name: "Yalla Ludo",
    publisher: "Yalla",
    currency: "Diamonds",
    category: "topup",
    inputs: [{ key: "Player ID", placeholder: "your Yalla Ludo ID" }],
    packs: [
      { label: "100 Diamonds", price: 120 },
      { label: "510 Diamonds", price: 590 },
      { label: "1060 Diamonds", price: 1190, tag: "BEST" },
      { label: "100K Gold", price: 130 },
      { label: "500K Gold", price: 620 },
    ],
  },
  {
    slug: "genshin-impact",
    name: "Genshin Impact",
    publisher: "HoYoverse",
    currency: "Crystals",
    category: "topup",
    inputs: [
      { key: "UID", placeholder: "your 9-digit UID" },
      { key: "Server", placeholder: "e.g. Asia" },
    ],
    packs: [
      { label: "60 Genesis Crystals", price: 115 },
      { label: "330 Genesis Crystals", price: 575 },
      { label: "1090 Genesis Crystals", price: 1840, tag: "BEST" },
      { label: "2240 Genesis Crystals", price: 3680 },
    ],
  },
  {
    slug: "tiktok-coins",
    name: "TikTok Coins",
    publisher: "TikTok",
    currency: "Coins",
    image: `${S}/tiktok.svg`,
    category: "topup",
    popular: true,
    flash: true,
    inputs: [{ key: "TikTok Username", placeholder: "your @username" }],
    packs: [
      { label: "70 Coins", price: 75 },
      { label: "350 Coins", price: 370 },
      { label: "700 Coins", price: 720, originalPrice: 850, tag: "HOT" },
      { label: "1400 Coins", price: 1420 },
      { label: "7000 Coins", price: 6900 },
    ],
  },

  // ── Subscriptions ─────────────────────────────────────────────────────
  {
    slug: "netflix",
    name: "Netflix",
    publisher: "Netflix",
    currency: "Subscription",
    image: `${S}/netflix.svg`,
    category: "subs",
    popular: true,
    flash: true,
    inputs: [
      { key: "Account email or phone", placeholder: "where we renew / share" },
    ],
    packs: [
      { label: "1 Month — Premium (4K)", price: 380, originalPrice: 450, tag: "HOT" },
      { label: "1 Month — Standard (HD)", price: 280 },
      { label: "3 Months — Premium (4K)", price: 1050, tag: "BEST" },
    ],
  },
  {
    slug: "shahid",
    name: "Shahid VIP",
    publisher: "MBC",
    currency: "Subscription",
    image: `${S}/shahid.png`,
    category: "subs",
    inputs: [
      { key: "Account email or phone", placeholder: "where we renew / share" },
    ],
    packs: [
      { label: "1 Month — VIP", price: 260 },
      { label: "3 Months — VIP", price: 720, tag: "BEST" },
      { label: "1 Year — VIP", price: 2600 },
    ],
  },
  {
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    publisher: "OpenAI",
    currency: "Subscription",
    image: `${S}/chatgpt.png`,
    category: "subs",
    popular: true,
    inputs: [
      { key: "Account email", placeholder: "your ChatGPT account email" },
    ],
    packs: [
      { label: "1 Month — Plus", price: 850, tag: "BEST" },
      { label: "3 Months — Plus", price: 2400 },
    ],
  },

  // ── Gift Cards ────────────────────────────────────────────────────────
  {
    slug: "google-play",
    name: "Google Play Gift Card",
    publisher: "Google",
    currency: "EGP Code",
    image: `${S}/googleplay.svg`,
    category: "gift",
    popular: true,
    inputs: [
      { key: "Email to receive the code", placeholder: "code delivered by email/WhatsApp" },
    ],
    packs: [
      { label: "EGP 100 Card", price: 110, tag: "NEW" },
      { label: "EGP 250 Card", price: 270 },
      { label: "EGP 500 Card", price: 535 },
      { label: "EGP 1000 Card", price: 1060, tag: "BEST" },
    ],
  },
  {
    slug: "app-store",
    name: "App Store & iTunes Gift Card",
    publisher: "Apple",
    currency: "EGP Code",
    image: `${S}/appstore.svg`,
    category: "gift",
    inputs: [
      { key: "Email to receive the code", placeholder: "code delivered by email/WhatsApp" },
    ],
    packs: [
      { label: "EGP 100 Card", price: 110, tag: "NEW" },
      { label: "EGP 250 Card", price: 270 },
      { label: "EGP 500 Card", price: 535 },
      { label: "EGP 1000 Card", price: 1060, tag: "BEST" },
    ],
  },
];

export const GAME_CATEGORIES: { id: string; name: string; icon: string }[] = [
  { id: "all", name: "All", icon: "✨" },
  { id: "topup", name: "Game Top-Up", icon: "🎮" },
  { id: "subs", name: "Subscriptions", icon: "🎬" },
  { id: "gift", name: "Gift Cards", icon: "🎁" },
];

export const formatEGP = (n: number) =>
  `EGP ${n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;

export const topupLink = (slug: string) => `/topup/${slug}`;

export const getGame = (slug: string) => GAMES.find((g) => g.slug === slug);

export const cheapestPrice = (g: Game) =>
  Math.min(...g.packs.map((p) => p.price));

export const POPULAR_GAMES = GAMES.filter((g) => g.popular);
export const FLASH_GAMES = GAMES.filter((g) => g.flash);
