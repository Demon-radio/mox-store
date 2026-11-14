"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  FaWhatsapp,
  FaBolt,
  FaCheckCircle,
  FaChevronRight,
  FaMinus,
  FaPlus,
} from "react-icons/fa";
import GameIcon from "@/app/components/GameIcon";
import {
  formatEGP,
  topupLink,
  type Game,
  type Pack,
} from "@/lib/games";
import { waLink } from "@/lib/site";

function GameBadge({ game }: { game: Game }) {
  return (
    <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded-2xl bg-white p-2 ring-1 ring-white/10 shadow-[0_4px_14px_rgba(0,0,0,0.55)]">
      <GameIcon image={game.image} name={game.name} />
    </div>
  );
}

function PackCard({
  pack,
  selected,
  onSelect,
}: {
  pack: Pack;
  selected: boolean;
  onSelect: () => void;
}) {
  return (
    <button
      onClick={onSelect}
      className={`relative flex flex-col gap-1 rounded-xl border p-3 text-left transition-all duration-200 ${
        selected
          ? "border-[#E30613] bg-[#E30613]/10 shadow-[0_0_18px_rgba(227,6,19,0.25)]"
          : "border-white/10 bg-[#1E1E1E] hover:border-[#E30613]/50"
      }`}
    >
      {pack.tag && (
        <span
          className={`absolute -top-2 right-2 px-2 py-0.5 text-[9px] font-bold rounded-full ${
            pack.tag === "HOT"
              ? "bg-[#E30613] text-white"
              : pack.tag === "BEST"
              ? "bg-[#FF8A00] text-black"
              : "bg-white text-black"
          }`}
        >
          {pack.tag}
        </span>
      )}
      <span className="font-semibold text-sm leading-snug">{pack.label}</span>
      {pack.bonus && (
        <span className="text-[10px] font-semibold text-[#FF8A00]">
          {pack.bonus}
        </span>
      )}
      <span className="flex items-baseline gap-2 mt-0.5">
        <span
          className={`text-sm font-bold ${
            selected ? "text-[#E30613]" : "text-[#FF4A3D]"
          }`}
        >
          {formatEGP(pack.price)}
        </span>
        {pack.originalPrice && (
          <span className="text-[10px] text-white/40 line-through">
            {formatEGP(pack.originalPrice)}
          </span>
        )}
      </span>
    </button>
  );
}

export default function TopUpOrder({
  game,
  related,
}: {
  game: Game;
  related: Game[];
}) {
  const [pack, setPack] = useState<Pack | null>(null);
  const [qty, setQty] = useState(1);
  const [fields, setFields] = useState<Record<string, string>>({});

  const total = pack ? pack.price * qty : 0;

  const accountReady =
    game.inputs.length === 0 ||
    game.inputs.every((i) => (fields[i.key] ?? "").trim().length > 0);

  const orderHref = useMemo(() => {
    if (!pack || !accountReady) return "#";
    const lines = [
      `Hello Mox Store, I want to top up:`,
      `🎮 ${game.name}`,
      `📦 ${pack.label} × ${qty}`,
      ...game.inputs.map(
        (i) => `🔹 ${i.key}: ${(fields[i.key] ?? "").trim()}`
      ),
      `💰 Total: ${formatEGP(total)}`,
      `(Payment: Vodafone Cash / InstaPay / Telda)`,
    ];
    return waLink(lines.join("\n"));
  }, [pack, qty, fields, accountReady, game, total]);

  return (
    <div className="flex flex-col gap-y-8">
      {/* Breadcrumb + hero */}
      <section className="container flex flex-col mx-auto px-4 gap-y-5 xl:max-w-7xl">
        <nav className="flex items-center gap-1.5 text-xs text-white/50">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <FaChevronRight className="h-2 w-2" />
          <Link href="/topup" className="hover:text-white transition-colors">
            Top-Up Store
          </Link>
          <FaChevronRight className="h-2 w-2" />
          <span className="text-white/80">{game.name}</span>
        </nav>

        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4 bg-[#1E1E1E] border border-white/5 rounded-2xl p-4 sm:p-5">
          <GameBadge game={game} />
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left gap-1">
            <h1 className="font-black text-xl sm:text-2xl tracking-tight">
              {game.name}
            </h1>
            <p className="text-xs text-white/55">
              {game.publisher} • {game.currency} top-up
            </p>
            <div className="flex items-center gap-2 mt-1">
              <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold bg-[#25D366]/10 text-[#25D366] rounded-full">
                <FaBolt className="h-2.5 w-2.5" /> Instant delivery
              </span>
              <span className="flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold bg-white/5 text-white/60 rounded-full">
                <FaCheckCircle className="h-2.5 w-2.5" /> Official source
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Order flow */}
      <section className="container flex flex-col mx-auto px-4 gap-y-6 xl:max-w-7xl">
        {/* Step 1 — package */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E30613] text-xs font-bold">
              1
            </span>
            <h2 className="font-semibold text-sm sm:text-base">
              Select a package
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {game.packs.map((p) => (
              <PackCard
                key={p.label}
                pack={p}
                selected={pack?.label === p.label}
                onSelect={() => setPack(p)}
              />
            ))}
          </div>
        </div>

        {/* Step 2 — account details */}
        {game.inputs.length > 0 && (
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E30613] text-xs font-bold">
                2
              </span>
              <h2 className="font-semibold text-sm sm:text-base">
                Enter your account details
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {game.inputs.map((input) => (
                <div
                  key={input.key}
                  className="flex flex-col gap-1.5 bg-[#1E1E1E] border border-white/10 rounded-xl px-4 py-3 focus-within:border-[#E30613]/60 transition-colors"
                >
                  <label className="text-[11px] font-semibold text-white/60">
                    {input.key}
                  </label>
                  <input
                    value={fields[input.key] ?? ""}
                    onChange={(e) =>
                      setFields((f) => ({ ...f, [input.key]: e.target.value }))
                    }
                    placeholder={input.placeholder}
                    className="bg-transparent text-sm placeholder:text-white/30 focus:outline-none"
                  />
                </div>
              ))}
            </div>
            <p className="text-[11px] text-white/40">
              Double-check your details — wrong info can delay delivery.
            </p>
          </div>
        )}

        {/* Step 3 — quantity + summary */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-2 flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E30613] text-xs font-bold">
                3
              </span>
              <h2 className="font-semibold text-sm sm:text-base">Quantity</h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#212121] hover:bg-[#2A2A2A] border border-white/10 transition-colors"
                aria-label="Decrease quantity"
              >
                <FaMinus className="h-3.5 w-3.5" />
              </button>
              <span className="w-12 text-center font-bold text-lg">{qty}</span>
              <button
                onClick={() => setQty((q) => Math.min(99, q + 1))}
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#212121] hover:bg-[#2A2A2A] border border-white/10 transition-colors"
                aria-label="Increase quantity"
              >
                <FaPlus className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>

          {/* Summary card */}
          <div className="flex flex-col gap-3 bg-[#1E1E1E] border border-[#E30613]/25 rounded-2xl p-4 h-fit">
            <h3 className="font-semibold text-sm">Order summary</h3>
            <div className="flex flex-col gap-1.5 text-xs text-white/60">
              <div className="flex justify-between">
                <span>Item</span>
                <span className="text-white font-medium text-right">
                  {pack ? pack.label : "— select a package"}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Quantity</span>
                <span className="text-white font-medium">{qty}</span>
              </div>
              <div className="flex justify-between border-t border-white/10 pt-2 mt-1">
                <span className="font-semibold">Total</span>
                <span className="font-black text-[#E30613] text-base">
                  {formatEGP(total)}
                </span>
              </div>
            </div>
            {pack && accountReady ? (
              <a
                href={orderHref}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1FB855] text-black text-sm font-bold px-4 py-3 rounded-xl shadow-[0_0_25px_rgba(37,211,102,0.3)] transition-all"
              >
                <FaWhatsapp className="h-5 w-5" />
                Order on WhatsApp
              </a>
            ) : (
              <span className="flex items-center justify-center gap-2 bg-white/10 text-white/50 text-sm font-bold px-4 py-3 rounded-xl cursor-not-allowed">
                <FaWhatsapp className="h-5 w-5" />
                {!pack ? "Select a package first" : "Fill in your details"}
              </span>
            )}
            <p className="text-[10px] text-white/40 text-center">
              After payment, send your receipt screenshot on WhatsApp.
            </p>
          </div>
        </div>
      </section>

      {/* How it works + payments */}
      <section className="container flex flex-col mx-auto px-4 gap-y-4 xl:max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {[
            {
              n: "1",
              t: "Choose & order",
              d: "Pick your package and send the order on WhatsApp.",
            },
            {
              n: "2",
              t: "Pay",
              d: "Vodafone Cash, InstaPay or Telda — then send the receipt.",
            },
            {
              n: "3",
              t: "Get it delivered",
              d: "We top up your account and confirm instantly.",
            },
          ].map((s) => (
            <div
              key={s.n}
              className="flex flex-col gap-1.5 bg-[#1E1E1E] border border-white/5 rounded-2xl p-4"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#E30613]/15 text-[#FF4A3D] text-xs font-bold">
                {s.n}
              </span>
              <span className="text-sm font-semibold">{s.t}</span>
              <span className="text-[11px] text-white/50">{s.d}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="container flex flex-col mx-auto px-4 gap-y-3 pb-4 xl:max-w-7xl">
          <h2 className="uppercase font-semibold text-sm tracking-wider">
            🎯 You may also like
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {related.map((g) => (
              <Link
                key={g.slug}
                href={topupLink(g.slug)}
                className="group flex flex-col items-center gap-2 bg-[#1E1E1E] border border-white/5 rounded-2xl p-3 hover:border-[#E30613]/60 transition-all"
              >
                <div className="h-12 w-12 rounded-xl bg-white/95 p-1.5">
                  <GameIcon image={g.image} name={g.name} />
                </div>
                <span className="text-[11px] font-semibold text-center leading-snug line-clamp-2">
                  {g.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
