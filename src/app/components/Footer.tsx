"use client";
import Link from "next/link";
import MoxLogo from "./MoxLogo";
import {
  waLink,
  WHATSAPP_NUMBER_DISPLAY,
  INSTAPAY_LINK,
  TELDA_LINK,
  INSTAPAY_ADDRESS,
  INSTAGRAM_LINK,
  FACEBOOK_LINK,
  WHATSAPP_CHANNEL,
} from "@/lib/site";

const dataFooter = [
  {
    title: "Shop",
    data: [
      { title: "All Products", href: "/topup" },
      { title: "Direct Top-Up", href: "/topup" },
      { title: "Subscriptions", href: "/topup" },
      { title: "Gift Cards", href: "/topup" },
    ],
  },
  {
    title: "Help",
    data: [
      {
        title: "Order via WhatsApp",
        href: waLink("Hello Mox Store, I need help with my order."),
      },
      { title: "WhatsApp Channel", href: WHATSAPP_CHANNEL },
      { title: "Track Order", href: "/invoices" },
      { title: "Leaderboard", href: "/leaderboard" },
    ],
  },
  {
    title: "Payment Methods",
    data: [
      {
        title: `Vodafone Cash — ${WHATSAPP_NUMBER_DISPLAY}`,
        href: waLink("Hello Mox Store, I want to pay via Vodafone Cash."),
      },
      { title: `InstaPay — ${INSTAPAY_ADDRESS}`, href: INSTAPAY_LINK },
      { title: `Telda — ${WHATSAPP_NUMBER_DISPLAY}`, href: TELDA_LINK },
    ],
  },
  {
    title: "Company",
    data: [
      { title: "Services", href: "/#services" },
      { title: "Instagram", href: INSTAGRAM_LINK },
      { title: "Facebook", href: FACEBOOK_LINK },
      { title: "Privacy Policy", href: "/" },
      { title: "Terms & Conditions", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/[0.08] bg-[#19191A]">
      <div className="container flex flex-col mx-auto px-4 py-12 gap-y-10 xl:max-w-7xl">
        {/* Top row: brand + link columns */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Brand block */}
          <div className="flex flex-col items-start gap-3">
            <div className="flex items-center gap-3">
              <MoxLogo className="h-11 w-11" />
              <div className="flex flex-col leading-none">
                <span className="font-outfit text-xl font-black tracking-[0.12em] text-white">
                  MO<span className="text-[#E30613]">X</span>
                </span>
                <span className="mt-1 text-[10px] font-bold tracking-[0.4em] text-white/60">
                  STORE
                </span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-white/50 max-w-xs">
              Game top-ups, subscriptions, AI plans, apps and digital services —
              delivered fast, 24/7. After payment, send your receipt screenshot
              on WhatsApp.
            </p>
            <Link
              href={waLink("Hello Mox Store, I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-1 flex items-center gap-2 rounded bg-[#E30613] hover:bg-[#C40000] px-4 py-2 text-xs font-bold text-white transition-colors"
            >
              Chat with us on WhatsApp
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:col-span-4 gap-8 text-sm">
            {dataFooter.map((d) => {
              return (
                <div key={d.title} className="flex flex-col gap-4">
                  <div className="font-outfit text-xs font-bold uppercase tracking-wider text-white">
                    {d.title}
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {d.data?.map((l) => {
                      return (
                        <Link
                          key={l.title}
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            l.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className="text-xs text-white/55 hover:text-white transition-colors break-words"
                        >
                          {l.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom row: copyright + legal */}
        <div className="flex flex-col gap-3 pt-8 border-t border-white/[0.08] text-[11px] text-white/40">
          <p className="leading-relaxed">
            Mox Store is an independent store. We are not affiliated with,
            sponsored by or endorsed by any game publisher or brand sold on this
            site. Game names, logos and trademarks belong to their respective
            owners and are shown only to identify the products we sell.
          </p>
          <p>© 2026 Mox Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
