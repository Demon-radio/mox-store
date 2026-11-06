/**
 * Mox Store — site-wide constants & links.
 * Orders are placed over WhatsApp; payment is via the methods below.
 */

export const SITE_NAME = "Mox Store";
export const SITE_TAGLINE = "Everything You Need in One Place";
export const SITE_DESCRIPTION =
  "Mox Store — game top-ups, streaming subscriptions, AI plans, apps and digital services. Fast, trusted and secure, delivered 24/7. Order via WhatsApp.";

// ─── Contact ────────────────────────────────────────────────────────────────
export const WHATSAPP_NUMBER_DISPLAY = "01064870491";
export const WHATSAPP_NUMBER = "201064870491";
export const INSTAGRAM_LINK = "https://www.instagram.com/p/DaMfOAsAmHx";
export const FACEBOOK_LINK = "https://www.facebook.com/share/v/1NREsVW8GK";
export const WHATSAPP_CHANNEL =
  "https://whatsapp.com/channel/0029VbDNbvBHltY6bGuYjV02";

// ─── Payment Methods ────────────────────────────────────────────────────────
export const VODAFONE_CASH = WHATSAPP_NUMBER_DISPLAY;
export const TELDA = WHATSAPP_NUMBER_DISPLAY;
export const TELDA_LINK = "https://telda.me/mostafakhamis81";
export const INSTAPAY_LINK =
  "https://ipn.eg/S/mostafakhamis80/instapay/9FhxXx";
export const INSTAPAY_ADDRESS = "mostafakhamis80@instapay";

// ─── Helpers ────────────────────────────────────────────────────────────────
/** Build a click-to-chat WhatsApp link with a prefilled message. */
export const waLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

/** Prefilled order message for a product/service. */
export const orderLink = (product: string) =>
  waLink(`Hello Mox Store, I would like to order: ${product}`);
