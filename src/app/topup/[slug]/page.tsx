import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopUpOrder from "./TopUpOrder";
import { GAMES, getGame } from "@/lib/games";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return GAMES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const game = getGame(params.slug);
  if (!game) return {};
  return {
    title: `${game.name} Top-Up | Mox Store`,
    description: `Buy ${game.name} ${game.currency} — instant delivery 24/7 via WhatsApp. Pay with Vodafone Cash, InstaPay or Telda.`,
  };
}

export default function TopUpPage({ params }: PageProps) {
  const game = getGame(params.slug);
  if (!game) notFound();

  const related = GAMES.filter(
    (g) => g.slug !== game.slug && g.category === game.category
  )
    .concat(GAMES.filter((g) => g.slug !== game.slug))
    .slice(0, 6);

  return <TopUpOrder game={game} related={related} />;
}
