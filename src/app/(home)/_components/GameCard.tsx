"use client";

import Link from "next/link";
import GameIcon from "@/app/components/GameIcon";
import { cheapestPrice, formatEGP, topupLink, type Game } from "@/lib/games";

const CATEGORY_LABEL: Record<Game["category"], string> = {
  topup: "DIRECT TOP-UP",
  subs: "SUBSCRIPTION",
  gift: "GIFT CARD",
};

function discountOf(g: Game): number | null {
  const deal = g.packs.find((p) => p.originalPrice);
  if (!deal) return null;
  return Math.round((1 - deal.price / deal.originalPrice!) * 100);
}

export default function GameCard({ game }: { game: Game }) {
  const off = discountOf(game);
  return (
    <Link
      href={topupLink(game.slug)}
      className="group block w-full text-left focus:outline-none"
    >
      {/* Cover tile */}
      <div className="relative aspect-square rounded-md overflow-hidden bg-[#242425] border border-white/[0.06] group-hover:border-[#E30613]/70 transition-colors duration-200">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,#2E2E2F_0%,#1A1A1B_78%)]" />
        <div className="absolute inset-0 flex items-center justify-center p-5 transition-transform duration-300 group-hover:scale-[1.06]">
          <div className="h-full w-full max-w-[62%] max-h-[62%]">
            <GameIcon image={game.image} name={game.name} />
          </div>
        </div>
        {off !== null && (
          <span className="absolute top-2 left-2 z-10 bg-[#E30613] text-white text-[11px] font-bold leading-none px-1.5 py-1 rounded">
            -{off}%
          </span>
        )}
        {game.popular && (
          <span className="absolute top-2 right-2 z-10 bg-black/70 backdrop-blur text-[10px] font-semibold uppercase tracking-wide text-white/90 px-1.5 py-1 rounded border border-white/10">
            Popular
          </span>
        )}
      </div>

      {/* Meta */}
      <div className="pt-2 flex flex-col gap-0.5">
        <h3 className="font-outfit font-semibold text-sm text-white leading-snug truncate">
          {game.name}
        </h3>
        <span className="text-[10px] font-semibold uppercase tracking-wider text-white/40">
          {CATEGORY_LABEL[game.category]}
        </span>
        <span className="text-xs font-semibold text-white/85 pt-0.5">
          from {formatEGP(cheapestPrice(game))}
        </span>
      </div>
    </Link>
  );
}
