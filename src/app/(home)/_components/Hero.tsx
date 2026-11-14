"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

const TRENDING = ["PUBG Mobile", "Free Fire", "Roblox", "Netflix", "TikTok Coins", "Yalla Ludo"];

export default function Hero() {
  const router = useRouter();
  const [q, setQ] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = q.trim();
    router.push(query ? `/topup?q=${encodeURIComponent(query)}` : "/topup");
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#111112]">
      {/* Official MOX banner artwork as the hero background */}
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/mox-store/images/mox-banner.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#111112] via-[#111112]/85 to-[#111112]/30" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#1C1C1D] to-transparent" />
      </div>

      <div className="relative container mx-auto px-4 xl:max-w-7xl py-14 sm:py-20 lg:py-24">
        <h1 className="font-outfit text-white font-extrabold text-4xl sm:text-5xl lg:text-[64px] leading-[1.05] tracking-tight max-w-xl">
          Buy anything
          <br />
          digital.
        </h1>
        <p className="mt-3 text-sm sm:text-base text-white/70 max-w-md">
          Game top-ups, subscriptions and gift cards — delivered to your account
          in minutes, 24/7.
        </p>

        {/* Big light search bar */}
        <form onSubmit={submit} className="mt-7 flex max-w-xl">
          <div className="flex h-12 w-full items-center rounded bg-[#F8F8F8] px-4 shadow-[0_1px_2px_rgba(0,0,0,0.25)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-4 w-4 text-[#555] shrink-0"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products"
              aria-label="Search products"
              className="h-full w-full bg-transparent px-3 text-sm text-[#222] placeholder:text-[#777] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className="h-12 shrink-0 rounded bg-[#E30613] hover:bg-[#C40000] px-5 sm:px-7 text-sm font-bold text-white transition-colors"
          >
            Search
          </button>
        </form>

        {/* Trending chips */}
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <span className="text-xs text-white/50 font-medium">Trending:</span>
          {TRENDING.map((t) => (
            <button
              key={t}
              onClick={() => router.push(`/topup?q=${encodeURIComponent(t)}`)}
              className="rounded border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/85 hover:border-white/40 hover:bg-white/10 transition-colors"
            >
              {t}
            </button>
          ))}
          <Link
            href="/topup"
            className="rounded border border-white/15 bg-white/[0.06] px-3 py-1.5 text-xs font-semibold text-white/85 hover:border-white/40 transition-colors"
          >
            View all products
          </Link>
        </div>
      </div>
    </section>
  );
}
