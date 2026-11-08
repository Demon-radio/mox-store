"use client";
/**
 * Mox Store logo component.
 * Prefers the official artwork at /images/mox-logo.png when present;
 * falls back to the built-in SVG recreation of the official MOX logo.
 */
import { useState, useEffect } from "react";

export default function MoxLogo({ className = "h-10 w-10" }: { className?: string }) {
  const [official, setOfficial] = useState(false);

  // Upgrade to the official artwork if /images/mox-logo.png is present.
  useEffect(() => {
    const img = new Image();
    img.onload = () => setOfficial(true);
    img.src = "/mox-store/images/mox-logo.png";
  }, []);

  if (official) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src="/mox-store/images/mox-logo.png" alt="Mox Store logo" className={`${className} object-contain select-none`} />;
  }
  return <MoxMark className={className} />;
}

/** Faithful SVG recreation of the official MOX logo (bag + neon ring + wordmark). */
export function MoxMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 512 512"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Mox Store logo"
    >
      <defs>
        <radialGradient id="mx-bg" cx="50%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#161616" />
          <stop offset="60%" stopColor="#0B0B0B" />
          <stop offset="100%" stopColor="#000000" />
        </radialGradient>
        <linearGradient id="mx-ring" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FF3B30" />
          <stop offset="0.5" stopColor="#FF8A80" />
          <stop offset="1" stopColor="#C40000" />
        </linearGradient>
        <linearGradient id="mx-handle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF6B5E" />
          <stop offset="0.5" stopColor="#E30613" />
          <stop offset="1" stopColor="#8F0000" />
        </linearGradient>
        <linearGradient id="mx-bag" x1="0" y1="0" x2="0.25" y2="1">
          <stop offset="0" stopColor="#FF4A3D" />
          <stop offset="0.35" stopColor="#E30613" />
          <stop offset="0.8" stopColor="#C40000" />
          <stop offset="1" stopColor="#8F0000" />
        </linearGradient>
        <linearGradient id="mx-bagside" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#B90000" />
          <stop offset="1" stopColor="#7A0000" />
        </linearGradient>
        <linearGradient id="mx-letter" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.55" stopColor="#F2F2F2" />
          <stop offset="1" stopColor="#C9C9C9" />
        </linearGradient>
        <linearGradient id="mx-x" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FF6B5E" />
          <stop offset="0.45" stopColor="#E30613" />
          <stop offset="1" stopColor="#8F0000" />
        </linearGradient>
        <radialGradient id="mx-rivet" cx="35%" cy="35%" r="65%">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="0.7" stopColor="#E8E8E8" />
          <stop offset="1" stopColor="#9A9A9A" />
        </radialGradient>
        <filter id="mx-glow" x="-60%" y="-60%" width="220%" height="220%">
          <feGaussianBlur stdDeviation="14" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <filter id="mx-soft" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="7" />
        </filter>
      </defs>

      {/* Background */}
      <rect width="512" height="512" rx="96" fill="url(#mx-bg)" />

      {/* Neon ring */}
      <circle cx="256" cy="230" r="188" stroke="url(#mx-ring)" strokeWidth="11" filter="url(#mx-glow)" opacity="0.95" />
      <circle cx="256" cy="230" r="214" stroke="#FF2D2D" strokeWidth="3" opacity="0.25" />

      {/* Bokeh particles */}
      <circle cx="88" cy="345" r="6" fill="#FF3B30" opacity="0.7" filter="url(#mx-soft)" />
      <circle cx="120" cy="132" r="4" fill="#FF3B30" opacity="0.6" filter="url(#mx-soft)" />
      <circle cx="430" cy="108" r="5" fill="#FF3B30" opacity="0.7" filter="url(#mx-soft)" />
      <circle cx="442" cy="335" r="3.5" fill="#FF3B30" opacity="0.6" filter="url(#mx-soft)" />
      <circle cx="210" cy="52" r="3.5" fill="#FF6B5E" opacity="0.8" filter="url(#mx-soft)" />
      <circle cx="330" cy="90" r="2.5" fill="#FF3B30" opacity="0.5" filter="url(#mx-soft)" />

      {/* Handle */}
      <path
        d="M192 172C192 84 320 84 320 172"
        stroke="url(#mx-handle)"
        strokeWidth="30"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M192 172C192 84 320 84 320 172"
        stroke="#FFD9D4"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.35"
      />

      {/* Bag body with swallow-tail notch */}
      <path
        d="M128 172H384V392L256 296L128 392V172Z"
        fill="url(#mx-bag)"
        stroke="#FF8A7E"
        strokeWidth="5"
        strokeLinejoin="round"
      />
      {/* Side panels */}
      <path d="M128 172H188V368L128 380V172Z" fill="url(#mx-bagside)" opacity="0.85" />
      <path d="M324 172H384V380L324 368V172Z" fill="url(#mx-bagside)" opacity="0.65" />
      {/* Top gloss */}
      <path d="M140 178H300V206C220 214 168 202 140 190V178Z" fill="#FFFFFF" opacity="0.16" />
      <path d="M140 210H190V360L140 344V210Z" fill="#FFFFFF" opacity="0.1" />

      {/* Rivets */}
      <circle cx="192" cy="172" r="17" fill="url(#mx-rivet)" stroke="#7A7A7A" strokeWidth="1.5" />
      <circle cx="320" cy="172" r="17" fill="url(#mx-rivet)" stroke="#7A7A7A" strokeWidth="1.5" />
      <circle cx="186" cy="166" r="5" fill="#FFFFFF" opacity="0.9" />
      <circle cx="314" cy="166" r="5" fill="#FFFFFF" opacity="0.9" />

      {/* Letter M on the bag */}
      <text
        x="256"
        y="268"
        textAnchor="middle"
        fill="url(#mx-letter)"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="104"
        letterSpacing="2"
      >
        M
      </text>

      {/* MOX wordmark */}
      <text
        x="256"
        y="462"
        textAnchor="middle"
        fontFamily="'Arial Black', Arial, sans-serif"
        fontWeight="900"
        fontSize="78"
        letterSpacing="10"
      >
        <tspan fill="url(#mx-letter)">M</tspan>
        <tspan fill="url(#mx-letter)">O</tspan>
        <tspan fill="url(#mx-x)">X</tspan>
      </text>
    </svg>
  );
}
