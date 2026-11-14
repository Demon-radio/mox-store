"use client";

import CountdownTimer from "@/app/components/CountdownTimer";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import GameIcon from "@/app/components/GameIcon";
import { FLASH_GAMES, formatEGP, topupLink, type Game } from "@/lib/games";

interface FlashDeal {
  game: Game;
  label: string;
  price: number;
  originalPrice: number;
}

function deals(): FlashDeal[] {
  return FLASH_GAMES.flatMap((g) =>
    g.packs
      .filter((p) => p.originalPrice)
      .map((p) => ({
        game: g,
        label: p.label,
        price: p.price,
        originalPrice: p.originalPrice!,
      }))
  );
}

export default function FlashSale() {
  const flashSale = deals();

  return (
    <div className="container flex flex-col mx-auto px-4 xl:max-w-7xl">
      <div className="flex flex-col w-full bg-[#1E1E1E] rounded-2xl overflow-hidden">
        <div className="flex flex-col px-4 pb-3 pt-4">
          <div className="flex gap-x-5 text-lg leading-relaxed">
            <span className="uppercase font-semibold leading-relaxed tracking-wider">
              ⚡️ Flash Sale
            </span>
            <CountdownTimer />
          </div>
          <p className="pl-8 text-xs">Order now! Limited stock.</p>
        </div>
        <Marquee pauseOnHover autoFill className="flex">
          <div className="flex flex-row px-2 py-3 gap-x-4">
            {flashSale.map((d, i) => {
              return (
                <Link
                  href={topupLink(d.game.slug)}
                  key={`${d.game.slug}-${d.label}`}
                  className="w-[265px] flex flex-col flex-shrink-0 p-4 bg-[#202020] border border-[#212121] font-semibold gap-y-2 rounded-xl overflow-hidden"
                >
                  <div className="flex items-center space-x-3">
                    <div className="h-12 w-12 shrink-0 rounded-xl bg-white/95 p-1.5">
                      <GameIcon image={d.game.image} name={d.game.name} />
                    </div>
                    <div className="flex flex-col overflow-hidden">
                      <h1 className="text-sm truncate">{d.game.name}</h1>
                      <h1 className="text-xs text-[#B42D6C] line-through">
                        {formatEGP(d.originalPrice)}
                      </h1>
                      <h1 className="text-xs text-[#E30613]">
                        {formatEGP(d.price)}
                      </h1>
                    </div>
                  </div>
                  <div className="text-sm">{d.label}</div>
                  <div className="w-24 absolute -mt-[24px] ml-[161px] aspect-square rounded overflow-hidden">
                    <div className="absolute h-2 w-2 bg-[#7A0A10]"></div>
                    <div className="absolute right-0 bottom-0 h-2 w-2 bg-[#7A0A10]"></div>
                    <div className="absolute w-[137px] py-1 rotate-45 top-7 -right-[28px] uppercase text-center text-[10px] bg-[#E30613]">
                      Save {formatEGP(d.originalPrice - d.price)}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}
