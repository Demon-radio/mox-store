"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { IoGameController } from "react-icons/io5";
import { MdOutlineGridView, MdSubscriptions } from "react-icons/md";
import { FaPaypal, FaCreditCard, FaWhatsapp } from "react-icons/fa";
import { HiShieldCheck, HiBolt, HiLockClosed } from "react-icons/hi2";
import { waLink } from "@/lib/site";

const categories = [
  { icon: <IoGameController className="h-5 w-5 sm:h-6 sm:w-6" />, label: "Game Top-Up" },
  { icon: <MdOutlineGridView className="h-5 w-5 sm:h-6 sm:w-6" />, label: "App Top-Up" },
  { icon: <MdSubscriptions className="h-4 w-4 sm:h-5 sm:w-5" />, label: "Subscriptions" },
  { icon: <FaCreditCard className="h-4 w-4 sm:h-5 sm:w-5" />, label: "Payments" },
  { icon: <FaPaypal className="h-4 w-4 sm:h-5 sm:w-5" />, label: "PayPal" },
];

const badges = [
  { icon: <HiShieldCheck className="h-4 w-4" />, label: "Trusted" },
  { icon: <HiBolt className="h-4 w-4" />, label: "Fast" },
  { icon: <HiLockClosed className="h-4 w-4" />, label: "Secure" },
];

/**
 * Official MOX banner recreated as code (bag + mascot, red neon ring, black grid).
 * If the official artwork exists at /images/mox-banner.png|.jpg it is used instead.
 */
function MoxOfficialScene({ className = "h-64 w-64" }: { className?: string }) {
  return (
    <svg viewBox="0 0 480 480" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} role="img" aria-label="Mox Store">
      <defs>
        <radialGradient id="sc-ringglow" cx="50%" cy="42%" r="55%">
          <stop offset="0%" stopColor="#FF2D2D" stopOpacity="0.5" />
          <stop offset="55%" stopColor="#E30613" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#E30613" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="sc-ring" x1="0" y1="0" x2="480" y2="480">
          <stop offset="0" stopColor="#FF3B30" />
          <stop offset="0.5" stopColor="#FF8A80" />
          <stop offset="1" stopColor="#C40000" />
        </linearGradient>
        <linearGradient id="sc-bag" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0" stopColor="#FF4A3D" />
          <stop offset="0.35" stopColor="#E30613" />
          <stop offset="0.8" stopColor="#C40000" />
          <stop offset="1" stopColor="#8F0000" />
        </linearGradient>
        <linearGradient id="sc-bagside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B90000" />
          <stop offset="1" stopColor="#7A0000" />
        </linearGradient>
        <linearGradient id="sc-handle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF6B5E" />
          <stop offset="0.5" stopColor="#E30613" />
          <stop offset="1" stopColor="#8F0000" />
        </linearGradient>
        <linearGradient id="sc-letter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.55" stopColor="#F2F2F2" />
          <stop offset="1" stopColor="#C9C9C9" />
        </linearGradient>
        <linearGradient id="sc-x" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF6B5E" />
          <stop offset="0.45" stopColor="#E30613" />
          <stop offset="1" stopColor="#8F0000" />
        </linearGradient>
        <linearGradient id="sc-hoodie" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E30613" />
          <stop offset="0.55" stopColor="#C40000" />
          <stop offset="1" stopColor="#6B0000" />
        </linearGradient>
        <linearGradient id="sc-head" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2B2B2B" />
          <stop offset="0.35" stopColor="#141414" />
          <stop offset="1" stopColor="#050505" />
        </linearGradient>
        <radialGradient id="sc-rivet" cx="35%" cy="35%" r="65%">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.7" stopColor="#E8E8E8" />
          <stop offset="1" stopColor="#9A9A9A" />
        </radialGradient>
        <filter id="sc-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="10" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="sc-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="6" />
        </filter>
      </defs>

      {/* Red grid floor */}
      <g stroke="#E30613" strokeOpacity="0.22" strokeWidth="1">
        <path d="M0 470H480" />
        <path d="M0 440H480" />
        <path d="M0 405H480" />
        <path d="M0 365H480" />
        <path d="M0 322H480" />
        <path d="M0 275H480" />
        <path d="M30 480L140 330" />
        <path d="M105 480L190 330" />
        <path d="M180 480L238 330" />
        <path d="M255 480L286 330" />
        <path d="M330 480L334 330" />
        <path d="M405 480L382 330" />
        <path d="M480 480L430 330" />
      </g>

      {/* Neon ring */}
      <circle cx="238" cy="205" r="160" fill="url(#sc-ringglow)" />
      <circle cx="238" cy="205" r="128" stroke="url(#sc-ring)" strokeWidth="6" filter="url(#sc-glow)" opacity="0.95" />

      {/* Bokeh */}
      <circle cx="60" cy="250" r="4" fill="#FF3B30" opacity="0.7" filter="url(#sc-soft)" />
      <circle cx="95" cy="105" r="3" fill="#FF3B30" opacity="0.6" filter="url(#sc-soft)" />
      <circle cx="380" cy="80" r="3.5" fill="#FF3B30" opacity="0.6" filter="url(#sc-soft)" />
      <circle cx="430" cy="260" r="2.5" fill="#FF3B30" opacity="0.6" filter="url(#sc-soft)" />

      {/* ── Mascot (behind bag) ─────────────────────────────────────────── */}
      {/* Hoodie body */}
      <path d="M268 250C300 232 360 226 420 240L448 300C452 340 448 400 430 438L250 440C238 380 240 300 268 250Z" fill="url(#sc-hoodie)" />
      {/* Hood collar */}
      <ellipse cx="350" cy="238" rx="46" ry="18" fill="#B90000" />
      {/* MOX print on chest */}
      <text x="332" y="352" textAnchor="middle" fill="#FFFFFF" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="32" transform="rotate(-9 332 352)" opacity="0.95">MOX</text>
      {/* Zipper */}
      <path d="M268 300L255 430" stroke="#7A0000" strokeWidth="3" />
      {/* Pocket */}
      <path d="M270 380L330 392L324 430L268 428Z" fill="#A8000A" opacity="0.7" />

      {/* Head */}
      <g>
        <rect x="285" y="96" width="150" height="140" rx="48" fill="url(#sc-head)" stroke="#2E2E2E" strokeWidth="2" />
        {/* Glossy top highlight */}
        <ellipse cx="335" cy="112" rx="58" ry="16" fill="#FFFFFF" opacity="0.28" />
        <ellipse cx="322" cy="104" rx="24" ry="7" fill="#FFFFFF" opacity="0.35" />
        {/* Eyes */}
        <ellipse cx="338" cy="168" rx="12.5" ry="14" fill="#FFFFFF" />
        <ellipse cx="392" cy="168" rx="12.5" ry="14" fill="#FFFFFF" />
        {/* Mouth (open, smiling) */}
        <path d="M330 200C346 222 392 222 406 200C390 212 348 212 330 200Z" fill="#FFFFFF" />
        <path d="M346 205C358 212 376 212 388 205C380 214 354 214 346 205Z" fill="#D8403B" />
      </g>

      {/* ── Bag (in front) ─────────────────────────────────────────────── */}
      <path d="M96 122C96 32 224 32 224 122" stroke="url(#sc-handle)" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M50 112H230V248L140 182L50 248V112Z" fill="url(#sc-bag)" stroke="#FF8A7E" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M50 112H84V238L50 244V112Z" fill="url(#sc-bagside)" opacity="0.85" />
      <path d="M196 112H230V244L196 238V112Z" fill="url(#sc-bagside)" opacity="0.65" />
      <path d="M56 117H160V133C120 138 84 130 56 122V117Z" fill="#FFFFFF" opacity="0.16" />
      <circle cx="96" cy="112" r="9" fill="url(#sc-rivet)" stroke="#7A7A7A" />
      <circle cx="174" cy="112" r="9" fill="url(#sc-rivet)" stroke="#7A7A7A" />
      <text x="140" y="163" textAnchor="middle" fill="url(#sc-letter)" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="64">M</text>

      {/* MOX wordmark */}
      <text x="140" y="305" textAnchor="middle" fontFamily="'Arial Black', Arial, sans-serif" fontWeight="900" fontSize="46" letterSpacing="6">
        <tspan fill="url(#sc-letter)">M</tspan>
        <tspan fill="url(#sc-letter)">O</tspan>
        <tspan fill="url(#sc-x)">X</tspan>
      </text>

      {/* Mascot pointing arm (in front of bag) */}
      <g transform="rotate(18 300 300)">
        <rect x="250" y="286" width="110" height="30" rx="15" fill="url(#sc-hoodie)" />
        {/* Glove */}
        <g fill="#0A0A0A" stroke="#2E2E2E" strokeWidth="2">
          <ellipse cx="245" cy="301" rx="20" ry="15" />
          <circle cx="228" cy="288" r="5.5" />
          <circle cx="222" cy="300" r="5.5" />
          <circle cx="228" cy="312" r="5.5" />
        </g>
      </g>

      {/* PlayStation / Xbox / PayPal-ish floating tiles */}
      <g opacity="0.9">
        <rect x="378" y="60" width="52" height="52" rx="10" fill="#141414" stroke="#FF3B30" strokeOpacity="0.6" transform="rotate(12 404 86)" />
        <path d="M392 74L416 98M416 74L392 98" stroke="#FF3B30" strokeWidth="4" strokeLinecap="round" transform="rotate(12 404 86)" />
        <rect x="30" y="270" width="46" height="46" rx="9" fill="#141414" stroke="#FF3B30" strokeOpacity="0.5" transform="rotate(-10 53 293)" />
        <path d="M45 284L61 284M45 296L61 296" stroke="#FF3B30" strokeWidth="3.5" strokeLinecap="round" transform="rotate(-10 53 293)" />
        <rect x="415" y="330" width="44" height="44" rx="9" fill="#141414" stroke="#FF3B30" strokeOpacity="0.5" transform="rotate(8 437 352)" />
        <circle cx="437" cy="352" r="9" stroke="#FF3B30" strokeWidth="3.5" transform="rotate(8 437 352)" fill="none" />
      </g>
    </svg>
  );
}

export default function CarouselHomePage() {
  // Default: built-in official-banner recreation. Upgrades to the official
  // artwork automatically if /images/mox-banner.png (or .jpg) loads successfully.
  const [officialBanner, setOfficialBanner] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const tryLoad = (src: string) =>
      new Promise<boolean>((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = src;
      });
    (async () => {
      if (await tryLoad("/images/mox-banner.png")) {
        if (!cancelled) setOfficialBanner("/images/mox-banner.png");
        return;
      }
      if (await tryLoad("/images/mox-banner.jpg")) {
        if (!cancelled) setOfficialBanner("/images/mox-banner.jpg");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  if (officialBanner) {
    return (
      <div className="container flex flex-col mx-auto px-4 space-y-5 xl:max-w-7xl">
        <div className="relative py-4">
          <Link href="#services" aria-label="Everything you need in one place — Mox Store">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={officialBanner}
              alt="Mox Store — Everything you need in one place. Trusted digital services, fast and secure."
              className="block w-full h-auto rounded-3xl border border-[#E30613]/25 object-contain"
              style={{ maxHeight: '70vh' }}
            />
          </Link>
          
          {/* Action buttons ON the image (overlay) */}
          <div className="absolute bottom-6 left-0 right-0 z-10 flex justify-center gap-3 px-4">
            <Link
              href={waLink("Hello Mox Store, I would like to place an order.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E30613] hover:bg-[#C40000] text-white text-sm font-bold px-6 py-3 rounded-xl shadow-[0_0_25px_rgba(227,6,19,0.45)] transition-all duration-300"
            >
              <FaWhatsapp className="h-5 w-5" />
              Order Now
            </Link>
            <Link
              href="#services"
              className="flex items-center gap-2 border border-white/40 bg-black/40 backdrop-blur-sm hover:border-[#E30613] hover:bg-black/60 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // ─── Official-banner recreation ──────────────────────────────────────────
  return (
    <div className="container flex flex-col mx-auto px-4 space-y-5 xl:max-w-7xl">
      <div
        className="relative w-full overflow-hidden rounded-3xl border border-[#E30613]/30"
        style={{
          background:
            "radial-gradient(ellipse 65% 90% at 68% 45%, rgba(227,6,19,0.33) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 14% 22%, rgba(227,6,19,0.2) 0%, transparent 55%), #0D0D0D",
        }}
      >
        {/* Grid floor */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "linear-gradient(rgba(227,6,19,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(227,6,19,0.14) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage: "linear-gradient(to top, black 15%, transparent 55%)",
            WebkitMaskImage: "linear-gradient(to top, black 15%, transparent 55%)",
          }}
        />

        <div className="relative flex flex-col md:flex-row items-center gap-6 lg:gap-10 px-6 sm:px-10 lg:px-14 py-8 md:py-0 md:min-h-[400px] lg:min-h-[460px]">
          {/* Copy */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 lg:gap-5 max-w-xl">
            <h1 className="font-black leading-[1.02] tracking-tight">
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white drop-shadow">
                Everything you need…
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A4E] via-[#E30613] to-[#FF8A00] drop-shadow-[0_2px_12px_rgba(227,6,19,0.5)]">
                All in one place.
              </span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-base text-white/85 font-medium max-w-md">
              Trusted, fast &amp; secure digital services — delivered to you 24/7.
            </p>

            {/* Category chips */}
            <div className="flex flex-wrap justify-center md:justify-start gap-2 sm:gap-3">
              {categories.map((c) => (
                <div
                  key={c.label}
                  className="flex flex-col items-center gap-1.5 rounded-xl border border-[#E30613]/60 bg-black/50 backdrop-blur px-3 py-2 sm:px-4 sm:py-2.5 shadow-[0_0_18px_rgba(227,6,19,0.3)]"
                >
                  <span className="text-[#FF4A3D]">{c.icon}</span>
                  <span className="text-[8px] sm:text-[10px] font-semibold text-white/90 whitespace-nowrap">
                    {c.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Badges bar */}
            <div className="flex items-center rounded-full border border-white/10 bg-black/50 px-3 py-1.5 text-[10px] sm:text-[11px] font-semibold text-white/85">
              {badges.map((b, i) => (
                <span key={b.label} className="flex items-center gap-1.5">
                  <span className="text-[#FF4A3D]">{b.icon}</span>
                  {b.label}
                  {i < badges.length - 1 && <span className="ml-2 sm:ml-3 text-white/20">|</span>}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-1">
              <Link
                href={waLink("Hello Mox Store, I would like to place an order.")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#E30613] hover:bg-[#C40000] text-white text-xs sm:text-sm font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl shadow-[0_0_25px_rgba(227,6,19,0.45)] transition-all duration-300"
              >
                <FaWhatsapp className="h-5 w-5" />
                Order Now
              </Link>
              <Link
                href="#services"
                className="flex items-center gap-2 border border-white/15 hover:border-[#E30613] text-white/90 hover:text-white text-xs sm:text-sm font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>

          {/* Official banner artwork (recreated) */}
          <div className="relative shrink-0">
            <MoxOfficialScene className="h-56 w-56 sm:h-64 sm:w-64 lg:h-96 lg:w-96 drop-shadow-[0_0_35px_rgba(227,6,19,0.35)]" />
          </div>
        </div>
      </div>
    </div>
  );
}
