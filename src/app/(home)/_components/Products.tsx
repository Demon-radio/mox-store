"use client";

import { useState } from "react";
import ProductsCard from "./ProductsCard";
import { GAMES, GAME_CATEGORIES, type Game } from "@/lib/games";

const TABS = [
  { id: "topup", name: "Top Up" },
  { id: "subs", name: "Subscriptions" },
  { id: "gift", name: "Gift Cards" },
] as const;

const CATEGORY_TAB: Record<string, string> = {
  topup: "Top Up",
  subs: "Subscriptions",
  gift: "Gift Cards",
};

export default function Products() {
  const [menu, setMenu] = useState<string>("Top Up");
  const [more, setMore] = useState(12);

  const list: Game[] = GAMES.filter(
    (g) => CATEGORY_TAB[g.category] === menu
  );

  return (
    <div className="container flex flex-col mx-auto px-4 gap-y-5 xl:max-w-7xl">
      <div className="flex items-center space-x-5">
        {TABS.map((d) => (
          <button
            key={d.id}
            onClick={() => {
              setMenu(d.name);
              setMore(12);
            }}
            className={`${
              menu === d.name
                ? `bg-[#E30613] active:bg-[#E30613]/75 md:hover:bg-[#E30613]/75`
                : `bg-[#212121] active:bg-[#212121]/75 md:hover:bg-[#212121]/75`
            } px-4 py-2 font-semibold text-sm rounded-lg transition-all duration-300 ease-out`}
          >
            {d.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 my-4 gap-4 sm:gap-x-6 sm:gap-y-8">
        {list.slice(0, more).map((g) => (
          <ProductsCard key={g.slug} d={g} />
        ))}
      </div>
      <div className="flex justify-center items-center">
        {more < list.length ? (
          <button
            onClick={() => setMore(more + 12)}
            className={`h-10 px-4 py-2 bg-[#121212] active:bg-[#121212]/70 md:hover:bg-[#121212]/80 font-medium text-xs rounded-md active:scale-95 transition-all duration-300 ease-out`}
          >
            Show More…
          </button>
        ) : null}
      </div>
    </div>
  );
}
