"use client";

import GameIcon from "@/app/components/GameIcon";
import Link from "next/link";
import { topupLink, type Game } from "@/lib/games";

interface ProductsCardProps {
  d: Game;
}

export default function ProductsCard({ d }: ProductsCardProps) {
  return (
    <Link
      href={topupLink(d.slug)}
      className="hover:scale-105 transition-all duration-300 ease-out"
    >
      <div
        className={`animate-fade-up animate-duration-300 group relative h-full w-full flex flex-col bg-[#212121] rounded-2xl overflow-hidden hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#141414] hover:ring-[#E30613] transition-all duration-300 ease-in-out`}
      >
        <div className="relative flex aspect-[4/6] items-center justify-center bg-gradient-to-br from-[#2A2A2A] to-[#121212]">
          <div className="h-16 w-16 sm:h-20 sm:w-20 bg-white/95 rounded-2xl p-2 ring-1 ring-white/10 transition-transform duration-300 group-hover:scale-110">
            <GameIcon image={d.image} name={d.name} />
          </div>
          <span className="absolute top-2 right-2 px-2 py-0.5 text-[9px] font-semibold bg-black/60 border border-white/10 rounded-full text-white/70">
            {d.currency}
          </span>
        </div>
        <div className="absolute h-full w-full bg-gradient-to-t from-transparent group-hover:from-[#141414] transition-all duration-300 ease-out"></div>
        <article className="absolute -bottom-10 group-hover:bottom-3 group-hover:sm:bottom-4 w-full flex flex-col px-3 sm:px-4 transition-all duration-300 ease-in-out">
          <h1 className="font-semibold text-[0.625rem] md:text-[1rem] truncate">
            {d.name}
          </h1>
          <p className="text-[0.625rem] md:text-xs truncate">{d.publisher}</p>
        </article>
      </div>
    </Link>
  );
}
