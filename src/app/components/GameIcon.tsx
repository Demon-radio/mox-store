"use client";

/**
 * Game tile with graceful fallback:
 * - shows the real logo when available
 * - hides broken/missing images and reveals a branded letter tile
 */
export default function GameIcon({
  image,
  name,
  className = "h-full w-full",
  dark = false,
}: {
  image?: string;
  name: string;
  className?: string;
  dark?: boolean;
}) {
  return (
    <span className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <span
        className={`select-none absolute inset-0 flex items-center justify-center text-2xl font-black tracking-tight ${
          dark
            ? "text-transparent bg-clip-text bg-gradient-to-br from-[#FF5A4E] to-[#E30613]"
            : "text-white"
        }`}
      >
        {name.charAt(0)}
      </span>
      {image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={`${name} logo`}
          loading="lazy"
          className={`relative object-contain ${className}`}
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
    </span>
  );
}
