"use client";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import GameCard from "../(home)/_components/GameCard";
import { GAMES, GAME_CATEGORIES } from "@/lib/games";
import { waLink } from "@/lib/site";

const CATEGORY_LABEL: Record<string, string> = {
  all: "All products",
  topup: "Direct top-up",
  subs: "Subscriptions",
  gift: "Gift cards",
};

function StoreGrid() {
  const params = useSearchParams();
  const initial = params.get("q") ?? "";
  const [query, setQuery] = useState(initial);
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

  return (
    <div className="container mx-auto px-4 xl:max-w-7xl py-10">
      {/* Page header */}
      <div className="flex flex-col gap-1">
        <h1 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          {CATEGORY_LABEL[category]}
        </h1>
        <p className="text-sm text-white/50">
          Instant delivery to your account — paid via Vodafone Cash, InstaPay or
          Telda.
        </p>
      </div>

      {/* Search + category chips */}
      <div className="mt-6 flex flex-col lg:flex-row gap-3 lg:items-center">
        <div className="flex h-11 w-full lg:max-w-sm items-center rounded bg-[#242425] border border-white/10 px-3.5 focus-within:border-white/30 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="h-4 w-4 text-white/40 shrink-0"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products"
            className="h-full w-full bg-transparent px-2.5 text-sm text-white placeholder:text-white/35 focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="text-white/40 hover:text-white text-xs shrink-0"
              aria-label="Clear search"
            >
              ✕
            </button>
          )}
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-0.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {GAME_CATEGORIES.map((c) => (
            <button
              key={c.id}
              onClick={() => setCategory(c.id)}
              className={`shrink-0 rounded px-3.5 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${
                category === c.id
                  ? "bg-white text-[#1C1C1D]"
                  : "bg-[#242425] text-white/80 border border-white/10 hover:border-white/30"
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {results.length === 0 ? (
        <div className="flex flex-col items-center py-20 gap-3 text-center">
          <p className="text-sm text-white/60">
            Nothing matched &ldquo;{query}&rdquo;.
          </p>
          <a
            href={waLink(`Hello Mox Store, I'm looking for: ${query}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded bg-[#E30613] hover:bg-[#C40000] px-5 py-2.5 text-sm font-bold text-white transition-colors"
          >
            <FaWhatsapp className="h-4 w-4" />
            Request it on WhatsApp
          </a>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-4 gap-y-7">
          {results.map((g) => (
            <GameCard key={g.slug} game={g} />
          ))}
        </div>
      )}

      {/* Can't find it */}
      <div className="mt-14 flex flex-col items-center gap-3 rounded border border-white/10 bg-[#242425] px-6 py-10 text-center">
        <h2 className="font-outfit text-lg font-bold text-white">
          Can't find your game or service?
        </h2>
        <p className="text-xs text-white/55 max-w-md">
          We top up almost everything on demand — tell us what you need and
          we'll handle it.
        </p>
        <a
          href={waLink("Hello Mox Store, I need a top-up that isn't listed.")}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 flex items-center gap-2 rounded bg-[#E30613] hover:bg-[#C40000] px-6 py-3 text-sm font-bold text-white transition-colors"
        >
          <FaWhatsapp className="h-4 w-4" />
          Ask on WhatsApp
        </a>
      </div>
    </div>
  );
}

export default function TopUpStore() {
  return (
    <main className="min-h-[60vh]">
      <Suspense fallback={<div className="container mx-auto px-4 py-10 text-sm text-white/40">Loading…</div>}>
        <StoreGrid />
      </Suspense>
    </main>
  );
}
