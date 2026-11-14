"use client";

import Link from "next/link";
import { FaChevronRight } from "react-icons/fa";
import GameCard from "./GameCard";
import { type Game } from "@/lib/games";

export default function GameRow({
  title,
  games,
  viewAllHref,
  viewAllLabel,
}: {
  title: string;
  games: Game[];
  viewAllHref?: string;
  viewAllLabel?: string;
}) {
  if (games.length === 0) return null;
  return (
    <section className="w-full">
      <div className="flex items-center justify-between px-4 sm:px-6 xl:px-8">
        <h2 className="font-outfit text-xs font-bold uppercase tracking-[0.14em] text-white/90">
          {title}
        </h2>
        {viewAllHref && (
          <Link
            href={viewAllHref}
            className="flex items-center gap-1.5 text-xs font-semibold text-white/60 hover:text-white transition-colors"
          >
            {viewAllLabel ?? "View all"}
            <FaChevronRight className="h-2.5 w-2.5" />
          </Link>
        )}
      </div>
      <div className="mt-3 flex gap-3 overflow-x-auto px-4 sm:px-6 xl:px-8 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {games.map((g) => (
          <div
            key={g.slug}
            className="w-[132px] sm:w-[152px] lg:w-[168px] shrink-0"
          >
            <GameCard game={g} />
          </div>
        ))}
      </div>
    </section>
  );
}
