"use client";

import GameIcon from "@/app/components/GameIcon";
import Link from "next/link";
import { POPULAR_GAMES, formatEGP, cheapestPrice, topupLink } from "@/lib/games";

export default function Popular() {
  return (
    <div className="container flex flex-col mx-auto px-4 space-y-5 xl:max-w-7xl">
      <div className="flex flex-col">
        <h1 className="uppercase font-semibold text-lg leading-relaxed tracking-wider">
          🔥 Popular Now!
        </h1>
        <p className="pl-8 text-xs">
          The most popular products right now.
        </p>
      </div>
      <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {POPULAR_GAMES.map((g, i) => (
          <li key={g.slug}>
            <Link
              href={topupLink(g.slug)}
              className={`h-full flex p-2 bg-[#202020] rounded-2xl hover:ring-2 hover:ring-offset-2 hover:ring-offset-[#141414] hover:ring-[#E30613] transition-all duration-300 ease-in-out overflow-hidden`}
            >
              <div className="flex justify-center items-center space-x-3 w-full">
                <div className="h-14 w-14 md:h-20 md:w-20 shrink-0 rounded-[0.6rem] bg-gradient-to-br from-[#292929] to-[#161616] ring-1 ring-white/5 p-1.5 flex items-center justify-center">
                  <div className="h-full w-full bg-white/95 rounded-[0.4rem] p-1">
                    <GameIcon image={g.image} name={g.name} />
                  </div>
                </div>
                <div className="flex flex-col justify-center min-w-0">
                  <h1 className="font-semibold text-[0.625rem] md:text-[1rem] truncate">
                    {g.name}
                  </h1>
                  <p className="text-[0.625rem] md:text-sm truncate">
                    {g.publisher}
                  </p>
                  <p className="text-[0.625rem] md:text-xs text-[#FF4A3D] font-semibold">
                    from {formatEGP(cheapestPrice(g))}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
