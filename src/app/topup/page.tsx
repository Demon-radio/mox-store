"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaBolt,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";
import GameIcon from "@/app/components/GameIcon";
import {
  GAMES,
  GAME_CATEGORIES,
  cheapestPrice,
  formatEGP,
  topupLink,
} from "@/lib/games";
import { waLink } from "@/lib/site";

export default function TopUpStore() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GAMES.filter(
      (g) =>
        (category === "all" || g.category === category) &&
        (q === "" ||
          g.name.toLowerCase().includes(q) ||
          g.publisher.toLowerCase().includes(q))
    );
  }, [query, category]);

  const flashDeals = useMemo(
    () => GAMES.filter((g) => g.packs.some((p) => p.originalPrice)),
    []
  );

  return (
    <div className="flex flex-col gap-y-8">
      {/* Page header */}
      <section className="container flex flex-col mx-auto px-4 gap-y-4 xl:max-w-7xl">
        <div className="flex flex-col gap-1">
          <h1 className="font-black text-2xl sm:text-3xl tracking-tight">
            🎮 Top-Up Store
          </h1>
          <p className="text-sm text-white/60">
            Instant game top-ups, subscriptions and gift cards — delivered 24/7
            via WhatsApp.
          </p>
        </div>

        {/* Feature strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              icon: <FaBolt className="h-4 w-4 text-[#FF4A3D]" />,
              title: "Instant delivery",
              text: "Most orders delivered in under 10 minutes.",
            },
            {
              icon: <FaShieldAlt className="h-4 w-4 text-[#FF4A3D]" />,
              title: "Trusted & secure",
              text: "Official sources only. Receipt sent on WhatsApp.",
            },
            {
              icon: <FaHeadset className="h-4 w-4 text-[#FF4A3D]" />,
              title: "24/7 support",
              text: "Chat with us any time — we reply fast.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="flex items-center gap-3 bg-[#1E1E1E] rounded-2xl px-4 py-3 border border-white/5"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#E30613]/15">
                {f.icon}
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold">{f.title}</span>
                <span className="text-[11px] text-white/50">{f.text}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Flash deals strip */}
      {flashDeals.length > 0 && (
        <section className="container flex flex-col mx-auto px-4 gap-y-3 xl:max-w-7xl">
          <h2 className="uppercase font-semibold text-sm tracking-wider text-[#FF4A3D]">
            ⚡ Deals of the day
          </h2>
          <div className="flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none]">
            {flashDeals.map((g) => {
              const deal = g.packs.find((p) => p.originalPrice)!;
              return (
                <Link
                  key={g.slug}
                  href={topupLink(g.slug)}
                  className="shrink-0 w-44 flex flex-col gap-2 bg-[#1E1E1E] border border-[#E30613]/30 rounded-2xl p-3 hover:border-[#E30613] hover:shadow-[0_0_20px_rgba(227,6,19,0.25)] transition-all"
                >
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 shrink-0 rounded-xl bg-[#262626] p-1.5">
                      <GameIcon image={g.image} name={g.name} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold truncate">{g.name}</p>
                      <p className="text-[10px] text-white/50 truncate">
                        {deal.label}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-sm font-bold text-[#E30613]">
                      {formatEGP(deal.price)}
                    </span>
                    <span className="text-[10px] text-white/40 line-through">
                      {formatEGP(deal.originalPrice!)}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      )}

      {/* Search + filters */}
      <section className="container flex flex-col mx-auto px-4 gap-y-4 xl:max-w-7xl">
        <div className="flex items-center gap-2 bg-[#1E1E1E] border border-white/10 rounded-xl px-4 h-12 focus-within:border-[#E30613]/60 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4 text-white/50 shrink-0"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search games, apps, subscriptions…"
            className="h-full w-full bg-transparent text-sm placeholder:text-white/40 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-white/40 hover:text-white text-xs shrink-0"
            >
              ✕
            </button>
          )}
        </div>

        <div className="flex items-center gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {GAME_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`shrink-0 px-4 py-2 font-semibold text-xs rounded-lg transition-all duration-300 ${
                category === c.id
                  ? "bg-[#E30613] text-white"
                  : "bg-[#212121] text-white/80 hover:bg-[#2A2A2A]"
              }`}
            >
              {c.icon} {c.name}
            </button>
          ))}
        </div>

        {/* Results grid */}
        {results.length === 0 ? (
          <div className="flex flex-col items-center py-16 gap-2 text-center">
            <span className="text-4xl">🔍</span>
            <p className="text-sm text-white/60">
              Nothing matched &ldquo;{query}&rdquo;. Try another search or{" "}
              <a
                href={waLink(
                  `Hello Mox Store, I'm looking for: ${query}`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#E30613] font-semibold hover:underline"
              >
                ask us on WhatsApp
              </a>
              .
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {results.map((g) => (
              <Link
                key={g.slug}
                href={topupLink(g.slug)}
                className="group flex flex-col bg-[#1E1E1E] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E30613]/60 hover:shadow-[0_0_25px_rgba(227,6,19,0.15)] transition-all duration-300"
              >
                <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-[#262626] to-[#121212]">
                  <div className="h-20 w-20 sm:h-24 sm:w-24 transition-transform duration-300 group-hover:scale-110">
                    <GameIcon image={g.image} name={g.name} />
                  </div>
                  {g.popular && (
                    <span className="absolute top-2 left-2 px-2 py-0.5 text-[9px] font-bold bg-[#E30613] rounded-full">
                      POPULAR
                    </span>
                  )}
                  <span className="absolute bottom-2 right-2 px-2 py-0.5 text-[9px] font-semibold bg-black/60 border border-white/10 rounded-full text-white/70">
                    {g.currency}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5 p-3">
                  <h3 className="font-semibold text-[13px] leading-snug truncate">
                    {g.name}
                  </h3>
                  <p className="text-[11px] text-white/45 truncate">
                    {g.publisher}
                  </p>
                  <div className="flex items-center justify-between mt-1.5">
                    <span className="text-xs font-bold text-[#FF4A3D]">
                      from {formatEGP(cheapestPrice(g))}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-[#25D366] font-semibold">
                      <FaWhatsapp className="h-3 w-3" />
                      Order
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>

      {/* Can't find it */}
      <section className="container flex flex-col mx-auto px-4 xl:max-w-7xl">
        <div className="flex flex-col items-center gap-3 bg-gradient-to-br from-[#2A0D0D] to-[#1E1E1E] border border-[#E30613]/25 rounded-2xl px-6 py-8 text-center">
          <span className="text-2xl">🎯</span>
          <h2 className="font-bold">Can&apos;t find your game or service?</h2>
          <p className="text-xs text-white/60 max-w-md">
            We top up almost everything on demand — just tell us what you need
            on WhatsApp and we&apos;ll handle it.
          </p>
          <a
            href={waLink("Hello Mox Store, I need a top-up that isn't listed.")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#E30613] hover:bg-[#C40000] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-[0_0_25px_rgba(227,6,19,0.4)] transition-all mt-1"
          >
            <FaWhatsapp className="h-5 w-5" />
            Ask on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
