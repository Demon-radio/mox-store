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
    title: "Site Map",
    data: [
      { title: "Home", href: "/" },
      { title: "Services", href: "/#services" },
      { title: "Track Order", href: "/invoices" },
      { title: "Leaderboard", href: "/leaderboard" },
    ],
  },
  {
    title: "Support",
    data: [
      {
        title: "Order via WhatsApp",
        href: waLink("Hello Mox Store, I need help with my order."),
      },
      { title: "WhatsApp Channel", href: WHATSAPP_CHANNEL },
      { title: "Instagram", href: INSTAGRAM_LINK },
      { title: "Facebook", href: FACEBOOK_LINK },
    ],
  },
  {
    title: "Payment Methods",
    data: [
      { title: `Vodafone Cash — ${WHATSAPP_NUMBER_DISPLAY}`, href: waLink("Hello Mox Store, I want to pay via Vodafone Cash.") },
      { title: `InstaPay — ${INSTAPAY_ADDRESS}`, href: INSTAPAY_LINK },
      { title: `Telda — ${WHATSAPP_NUMBER_DISPLAY}`, href: TELDA_LINK },
    ],
  },
  {
    title: "Legal",
    data: [
      { title: "Privacy Policy", href: "/" },
      { title: "Terms & Conditions", href: "/" },
    ],
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-[#121212]">
      <div className="container flex flex-col mx-auto px-4 py-12 space-y-10 xl:max-w-7xl items-center">
        {/* Brand block */}
        <div className="flex flex-col items-center text-center space-y-3">
          <MoxLogo className="h-16 w-16" />
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black tracking-[0.12em] text-white">
              MO<span className="text-[#E30613]">X</span>
            </span>
            <span className="mt-1 text-[10px] font-bold tracking-[0.4em] text-white/60">
              STORE
            </span>
          </div>
          <p className="text-xs text-white/60 max-w-md">
            Everything you need in one place — game top-ups, subscriptions, AI
            plans, apps and digital services. After payment, send your
            receipt screenshot on WhatsApp.
          </p>
        </div>

        <div className="flex flex-col w-full space-y-5">
          <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-8 font-normal text-sm">
            {dataFooter.map((d) => {
              return (
                <div key={d.title} className="flex flex-col space-y-6">
                  <div className="font-semibold text-[#E30613] leading-6">
                    {d.title}
                  </div>
                  <div className="flex flex-col space-y-4">
                    {d.data?.map((d) => {
                      return (
                        <Link
                          key={d.title}
                          href={d.href}
                          target={d.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            d.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          <div className="hover:text-[#E30613]/75 transition-all leading-6 break-words">
                            {d.title}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full text-xs text-center space-y-1 pt-10 border-t border-[#343434]">
          <h1>© 2026 Mox Store. All rights reserved.</h1>
          <h1>
            Questions?{" "}
            <Link
              href={waLink("Hello Mox Store, I have a question.")}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#E30613]"
            >
              Chat with us on WhatsApp
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
}
