"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { FaChevronRight, FaMinus, FaPlus } from "react-icons/fa";
import GameIcon from "@/app/components/GameIcon";
import { formatEGP, topupLink, type Game, type Pack } from "@/lib/games";
import { waLink } from "@/lib/site";

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
      className={`relative flex flex-col rounded border px-3.5 py-3 text-left transition-colors duration-150 ${
        selected
          ? "border-[#E30613] bg-[#E30613]/[0.08]"
          : "border-white/12 bg-[#242425] hover:border-white/40"
      }`}
    >
      {pack.tag && (
        <span
          className={`absolute -top-2 right-2 rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide ${
            pack.tag === "HOT"
              ? "bg-[#E30613] text-white"
              : pack.tag === "BEST"
              ? "bg-[#F8F8F8] text-[#1C1C1D]"
              : "bg-[#FF8A00] text-black"
          }`}
        >
          {pack.tag}
        </span>
      )}
      <span className="font-outfit text-sm font-semibold text-white leading-snug">
        {pack.label}
      </span>
      {pack.bonus && (
        <span className="text-[10px] font-semibold text-[#FF8A00]">
          {pack.bonus}
        </span>
      )}
      <span className="mt-1 flex items-baseline gap-2">
        <span
          className={`text-sm font-bold ${
            selected ? "text-[#E30613]" : "text-white"
          }`}
        >
          {formatEGP(pack.price)}
        </span>
        {pack.originalPrice && (
          <span className="text-[11px] text-white/35 line-through">
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
      `${game.name}`,
      `${pack.label} x ${qty}`,
      ...game.inputs.map(
        (i) => `${i.key}: ${(fields[i.key] ?? "").trim()}`
      ),
      `Total: ${formatEGP(total)}`,
      `(Payment: Vodafone Cash / InstaPay / Telda)`,
    ];
    return waLink(lines.join("\n"));
  }, [pack, qty, fields, accountReady, game, total]);

  return (
    <main className="pb-16">
      <div className="container mx-auto px-4 xl:max-w-7xl">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-1.5 py-5 text-xs text-white/45">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <FaChevronRight className="h-2 w-2 text-white/25" />
          <Link href="/topup" className="hover:text-white transition-colors">
            All products
          </Link>
          <FaChevronRight className="h-2 w-2 text-white/25" />
          <span className="text-white/85">{game.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column — top-up details */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            {/* Product head */}
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 sm:h-20 sm:w-20 shrink-0 rounded overflow-hidden bg-[#242425] border border-white/10 p-2.5">
                <GameIcon image={game.image} name={game.name} />
              </div>
              <div className="flex flex-col gap-0.5">
                <h1 className="font-outfit text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {game.name}
                </h1>
                <p className="text-xs text-white/45">
                  {game.publisher} • Direct top-up • Instant delivery
                </p>
              </div>
            </div>

            {/* Top-up details panel */}
            <section className="flex flex-col gap-6">
              <h2 className="font-outfit text-base font-bold uppercase tracking-wide text-white">
                Top-up Details
              </h2>

              {/* Step 1 — account */}
              {game.inputs.length > 0 && (
                <div className="flex flex-col gap-2.5">
                  <label className="text-sm font-semibold text-white">
                    Enter your {game.inputs.length > 1 ? "details" : game.inputs[0].key}
                    <span className="text-[#E30613]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {game.inputs.map((input) => (
                      <input
                        key={input.key}
                        value={fields[input.key] ?? ""}
                        onChange={(e) =>
                          setFields((f) => ({ ...f, [input.key]: e.target.value }))
                        }
                        placeholder={input.placeholder}
                        className="h-11 rounded border border-white/12 bg-[#242425] px-3.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none transition-colors"
                      />
                    ))}
                  </div>
                  <p className="text-[11px] text-white/40">
                    Double-check your details — wrong info can delay delivery.
                  </p>
                </div>
              )}

              {/* Step 2 — card value */}
              <div className="flex flex-col gap-2.5">
                <span className="text-sm font-semibold text-white">
                  Select card value <span className="text-[#E30613]">*</span>
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
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

              {/* Step 3 — quantity */}
              <div className="flex flex-col gap-2.5">
                <span className="text-sm font-semibold text-white">Quantity</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setQty((q) => Math.max(1, q - 1))}
                    className="flex h-10 w-10 items-center justify-center rounded border border-white/12 bg-[#242425] hover:border-white/40 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <FaMinus className="h-3 w-3" />
                  </button>
                  <span className="w-12 text-center font-outfit font-bold text-lg text-white">
                    {qty}
                  </span>
                  <button
                    onClick={() => setQty((q) => Math.min(99, q + 1))}
                    className="flex h-10 w-10 items-center justify-center rounded border border-white/12 bg-[#242425] hover:border-white/40 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <FaPlus className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </section>

            {/* FAQs */}
            <section className="flex flex-col gap-2">
              <h2 className="font-outfit text-base font-bold uppercase tracking-wide text-white">
                FAQs
              </h2>
              {[
                {
                  q: "How long does delivery take?",
                  a: "Most orders are delivered in under 10 minutes after payment is confirmed — 24/7, including holidays.",
                },
                {
                  q: "What payment methods do you accept?",
                  a: "Vodafone Cash, InstaPay and Telda. Send the payment, then share the receipt screenshot on WhatsApp.",
                },
                {
                  q: "What if I entered a wrong ID?",
                  a: `Contact us immediately on WhatsApp before delivery. Once the ${game.currency} is credited, the order cannot be reversed.`,
                },
                {
                  q: "Where does the balance come from?",
                  a: "We top up from official regional sources only — no generators, no cracked accounts.",
                },
              ].map((f) => (
                <details
                  key={f.q}
                  className="group rounded border border-white/10 bg-[#242425] px-4 py-3 [&_summary::-webkit-details-marker]:hidden"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-white">
                    {f.q}
                    <span className="text-white/40 transition-transform duration-200 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="pt-2 text-xs leading-relaxed text-white/55">
                    {f.a}
                  </p>
                </details>
              ))}
            </section>
          </div>

          {/* Right column — sticky order summary */}
          <aside className="lg:col-span-1">
            <div className="sticky top-20 flex flex-col gap-4 rounded border border-white/10 bg-[#242425] p-5">
              <h3 className="font-outfit text-sm font-bold uppercase tracking-wide text-white">
                Order summary
              </h3>
              <div className="flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="h-12 w-12 shrink-0 rounded bg-[#1C1C1D] border border-white/10 p-1.5">
                  <GameIcon image={game.image} name={game.name} />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-sm font-semibold text-white truncate">
                    {game.name}
                  </span>
                  <span className="text-[11px] text-white/45">
                    {pack ? `${pack.label} x ${qty}` : "Select a card value"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2 text-xs">
                <div className="flex justify-between text-white/55">
                  <span>Unit price</span>
                  <span className="text-white font-medium">
                    {pack ? formatEGP(pack.price) : "—"}
                  </span>
                </div>
                <div className="flex justify-between text-white/55">
                  <span>Quantity</span>
                  <span className="text-white font-medium">{qty}</span>
                </div>
                <div className="flex justify-between border-t border-white/10 pt-3 mt-1">
                  <span className="text-sm font-semibold text-white">Total</span>
                  <span className="font-outfit text-xl font-extrabold text-white">
                    {formatEGP(total)}
                  </span>
                </div>
              </div>
              {pack && accountReady ? (
                <a
                  href={orderHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 rounded bg-[#E30613] hover:bg-[#C40000] px-4 py-3.5 text-sm font-bold text-white transition-colors"
                >
                  Order via WhatsApp
                </a>
              ) : (
                <span className="flex items-center justify-center rounded bg-white/[0.07] px-4 py-3.5 text-sm font-bold text-white/40 cursor-not-allowed">
                  {!pack ? "Select a card value first" : "Enter your details first"}
                </span>
              )}
              <ul className="flex flex-col gap-1.5 text-[11px] text-white/45">
                <li>• Delivery in under 10 minutes, 24/7</li>
                <li>• Vodafone Cash, InstaPay & Telda accepted</li>
                <li>• Receipt screenshot required after payment</li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-14 flex flex-col gap-3">
            <h2 className="font-outfit text-xs font-bold uppercase tracking-[0.14em] text-white/90">
              You may also like
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-4 gap-y-5">
              {related.map((g) => (
                <Link
                  key={g.slug}
                  href={topupLink(g.slug)}
                  className="group flex flex-col items-center gap-2 rounded border border-white/10 bg-[#242425] p-3 hover:border-white/40 transition-colors"
                >
                  <div className="h-12 w-12 rounded bg-[#1C1C1D] border border-white/10 p-1.5">
                    <GameIcon image={g.image} name={g.name} />
                  </div>
                  <span className="text-[11px] font-semibold text-center leading-snug line-clamp-2 text-white/85 group-hover:text-white">
                    {g.name}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
}
